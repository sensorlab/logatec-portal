title: VESNA Based Air Quality Monitoring

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

[TOC]

# VESNA Based Air Quality Monitoring

<p>Select the id of your AQA unit:
<select id="nodes" class="nodes">
  <option value="CS2_000" selected="selected">JSI_CS2</option>
</select></p>

<div id="sensors">
   <div id="voc" style="width: 185px; height: 300px;"></div>
   <div id="co" style="width: 185px; height: 300px;"></div>
   <div id="h2s" style="width: 185px; height: 300px;"></div>
   <div id="no" style="width: 185px; height: 300px;"></div>
   <div id="no2" style="width: 185px; height: 300px;"></div>
   <div id="o3" style="width: 185px; height: 300px;"></div>
   <div id="so2" style="width: 185px; height: 300px;"></div>
   <div id="humidity" style="width: 185px; height: 300px;"></div>
   <div id="temp" style="width: 185px; height: 300px;"></div>
   <div id="pressure" style="width: 185px; height: 300px;"></div>
   <div id="temp-pt" style="width: 185px; height: 300px;"></div>
   <div id="lightning" style="width: 185px; height: 300px;"></div>
   <div id="motion" style="width: 185px; height: 300px;"></div>
</div>

## Introduction

The VESNA-based platforms as planned within the project were primarily designed for the use as personal/portable sensor units in selected pilot cities (Belgrade, Ljubljana and Vienna). However, functionally the same unit with some further sensors for context enrichment will also be used as a reference static outdoor platform for relative calibration and the same unit with different set of sensors could be used as an indoor platform. The version for initial Phase 1 tests in pilot cities has been developed in the form of a personal sensor unit. 
The personal sensor unit is equipped with the following sensors:

 * VOC, H2S, SO, NO, NO2, O3, CO (ppb)
 * Temperature (°C) & Relative Humidity (%) - (Sensirion SHT21)
 * Pressure, Accelerometer, Lightning

Personal sensor unit supports wireless connection to an Android smartphone and/or tablet via Bluetooth Smart Low Energy (BLE). The smartphone will in turn serve as the communication gateway towards the server using any of available data connections. Besides gateway functionality its role is to enrich the data coming from the personal sensor unit with the GPS location, timestamps and user defined context.

The personal sensor unit is battery operated and includes 3 AA size rechargeable batteries providing 1300 mAh capacity. Charging of the battery is provided via micro USB connector. The autonomy of the personal sensor pack is in the range of 18 hours but depends on the mode of operation.

The personal sensor unit is housed in a plastic box. For calibration purposes raw data can also be downloaded via USB, which needs to be parsed and imported into a spread sheet. Alternatively, access to data was also provided via BLE interface and purposely developed application.

<img src="img/aqa2.png">

## Architecture
The VESNA air quality monitoring system comprises the VESNA personal sensor unit, smartphone app and the remote server. The smartphone app implements our custom LCSP (Lightweight Client Server Protocol) protocol which is used to send requests to the sensor node. VESNA is set to listen on a specific TCP port to which the smartphone connects. After connection the LCSP protocol is used to exchange information. When the data is downloaded from the sensor network, the mobile application has an option to visualize the data on graphs or as raw values. It also has an option to forward the data to the server in our custom JSON structure. The server stores the data in the database and translates the data to WFS and forwards it to the Snowflake over WFS-T in the XML format over HTTP POST request.

<img src="img/citi-sense-architecture2.png" style="height:400px">

### Lightweight Client Server Protocol - LCSP
For the purpose of communication between sensor node and our server hosted at JSI we developed a new protocol called LCSP (Light-weight Client Server Protocol) which was inspired by HTTP protocol and is simple enough for a fast implementation on the VESNA platform. The protocol defines two requests, GET and POST which are understood by each VESNA sensor node. The GET is used for "safe" requests which do not change the state of the system and POST for "unsafe" requests which change the state of the system. The response is considered to be in a binary format, although it is normally in text format. Every response ends with a OK\r\n sequence and this is how the client recognizes the end of the response.

The protocol includes simple and efficient error handling mechanism. There are two types of errors. The first type of errors is JUNK-INPUT, which is the more common situation when the client mistypes the resource name and the parser on the node does not recognize it. Following this response the parser on the node expects 5 new lines, which reset the parser, and only after that a new attempt can be made to access the resource. The second type of errors is CORRUPTED-DATA, which means that CRC check was not successful indicating that an error happened somewhere on the line between the infrastructure and the gateway. The last situation will occur with very low probability.

A custom data JSON structure is used for sensor data transport from the custom developed AQ mobile app to the server. The structure can include zero or more measurements for each sensor. Each sensor measurement value is annotated with a timestamp, latitude and longitude. Furthermore each collection of measurements is annotated with the free text context which is defined by the user of the AQ app.

### AQ app
Our IJS AQ mobile app for users developed for Android smartphones is needed for connecting and collecting data from the VESNA AQ device, for basic visualization and for the transfer of data to the remote server. The application consists of 5 tabs: Pair, Data, Post, Context and Log. The tab PAIR is used to set up the connection with a VESNA AQA unit and the tab DATA is used to visualize the data, which is stored locally on the smartphone. Simple graphs of subsequent samples can be drawn for each of the supported sensors. The aim of these graphs is primarily for initial in-field cross check if the unit is working according to expectations, while for actual end user visualization the use of a common CITI-SENSE mobile app is foreseen.

<img src="img/aq-app-1.png" style="height:400px"><img src="img/aq-app-2.png" style="height:400px"><img src="img/aq-app-3.png" style="height:400px">

The POST tab is used to forward the collected measurements to the online database at the remote server, which stores the data and forwards it further to the Snowflake platform. In this tab a user has to choose the appropriate type of connection. If using a flat data plan on the smartphone, any internet connection type can be selected, but user can also restrict data uploading only via Wi-Fi connections, when in the range of a known WiFi access point. When appropriate type of connection is chosen one can post measurements. There is also an option to clean up the posted or all measurements stored locally, so that they no longer appear in the DATA tab visualization.

### CITI-SENSE Platform API support
On the server at JSI we implemented the WFS-T support in the form of a PHP server script in a combination with a PostgreSQL database used as a sensor register. The PHP code consists of four parts:
• Data parser and translator from JSI JSON to WFS-T XML format
• Database lookup (checks if the node has already been registered into Snowflake)
• WFS-T sensor registration
• WFS-T data insert

In parallel to the process of our server receiving the data and forwarding it to the WFS-T the data is being stored in our local database on the PostgreSQL database server. Collected data is available through the CITI-SENSE Platform API.

<a href="http://www.citi-sense.eu">CITI-SENSE Project Web Page</a>
