[TOC]

# Overview

The Cognitive Radio part of the LOG-a-TEC testbed consists of several clusters of permanently mounted VESNA sensor nodes that are dedicated to experimentation with spectrum sensing and radio communications within wireless sensor networks. Each sensor node in these clusters is equipped with multiple reconfigurable radio interfaces that can be used in various modes. A license from the local regulator allows for experimentation in TV whitespaces as well as frequency bands for unlicensed devices.

Testbed is remotely accessible over the Internet and uses a dedicated, wireless management network to control individual sensor nodes in a cluster. Different approaches can be used to perform experiments, depending on the latency requirements and complexity of experimental scenarios: from high-level control using Python or graphical network stack composition to reprogramming the nodes with native applications. Radio propagation modeling tools can be used as well to plan the experiments.

In addition to permanently mounted nodes, several kinds of mobile nodes or instruments can be added to the testbed in special cases and after previous agreement.

## Hardware

[VESNA](http://sensorlab.ijs.si/hardware.html) sensor node core (SNC) provides processing and storage at each sensor node. It contains an ARM Cortex M3 CPU at 64 MHz, 512 kB FlashROM, 64 kB RAM and an 2 GB SD card for code and data storage.

Different sensor node clusters contain different combinations of the following embedded radio hardware:

 * [CC2500-based](http://www.ti.com/product/cc2500) reconfigurable transceiver for the 2.4 GHz ISM band. Packet-based and continuous transmissions at up to 800 kHz bandwidth, 500 kbps and 0 dBm transmit power. Energy detection using RSSI with 5 ms per channel sampling.
 * [CC1101-based](http://www.ti.com/product/cc1101) reconfigurable transceiver for the upper UHF broadcast channels and 868 MHz European SRD band. Packet-based and continuous transmissions, including limited emulation of analogue transmissions, at up to 800 kHz bandwidth, 600 kbps and 12 dBm transmit power. Energy detection using RSSI with 5 ms per channel sampling.
 * SNE-ISMTV-UHF, a custom-designed energy detector for the UHF broadcast band from 470 MHz to 862 MHz. Channel bandwidth from 1.7 MHz to 8 MHz, 0.032 dB resolution, 50 ms per channel sampling.
 * SNE-ESHTER, a custom-designed spectrum sensing receiver for the UHF broadcast band from 470 MHz to 862 MHz. Off-line software processing of baseband samples up to 2 Msample/s, 25 kSample sample buffer depth. Energy detection up to 8 MHz bandwidth.
 * [AT86RF212](http://www.atmel.com/devices/at86rf212.aspx) and [AT86RF231](http://www.atmel.com/devices/at86rf231.aspx) transceivers, compatible with the IEEE 802.15.4 standard in the 2.4 GHz and 868 MHz bands.

Additionally, a small number of software-defined radio nodes using the Ettus Reseach USRP N200 can be used in the test bed as needed. A Rohde & Schwarz SMBV100A vector signal generator and a FSV signal analyzer are available for on-site measurements.

See [hardware](hardware.html) page for more details on testbed hardware.

## Locations

Cognitive Radio part of LOG-a-TEC testbed consists of the following permanently mounted clusters:

### Logatec city

Logatec is a small city with approximately 10.000 inhabitants in the south-west of Slovenia. Three sensor node clusters cover approximately 350.000 m<sup>2</sup> of out-door public space in the city center and an industrial zone using a total of 52 sensor nodes on street lights and other public infrastructure:

 * Logatec industrial zone, street level cluster (24 nodes)
 * Logatec city centre, street level cluster (27 nodes)
 * Logatec city centre, antenna tower sensor (1 node)

These clusters are currently used for spectrum sensing experiments and radio environment mapping. Three distinct hardware node configurations are deployed:

 * nodes with CC1101 and AT86RF212 radios (transmission and sensing in UHF and 868 MHz band, blue on map),
 * nodes with CC2500 and AT86RF212 radios (transmission and sensing in 2.4 GHz band, red on map) and
 * nodes with SNE-ISMTV-UHF and AT86RF212 radios (sensing in UHF band, green on map).

Nodes in the cluster are running the vesna-drivers firmware and use a dedicated, low-speed IEEE 802.15.4 management network (independent of the experimental radio hardware) for control and reprogramming. Each node is accessible from the Internet using a REST API and an application protocol similar to HTTP (ALH).

### JSI campus

20 sensor nodes are mounted at the campus of the Jožef Stefan Institute in Ljubljana, Slovenia. They cover approximately 3000 m<sup>2</sup> of in-door and out-door space.

This cluster is currently used for experiments with packet-based transmissions and dynamic network stack composition in wireless sensor networks. All nodes in the cluster contain one CC1101 and one AT86RF231 radio.

Nodes at JSI campus are running Contiki operating system with a dual, composable networking stack. A 6LoWPAN network using the AT86RF231 radio is used to control and reprogram the nodes. Each node is directly accessible from the Internet using IPv6.

## Software

The following is a list of the major software components of the LOG-a-TEC testbed.

### Node firmware

 * *vesna-drivers* is a custom developed C library for developing node firmware images. It supports experiment control and data retrieval over an application protocol similar to HTTP (ALH). Typical application developed with vesna-drivers supports signal generation and energy detection.
 * [Contiki OS](http://www.contiki-os.org/) is an open source embedded operating system with cooperative multi-tasking. In LOG-a-TEC testbeds it has been extended to support two networking stacks in parallel and a composeable RIME stack. It is typically used for experimentation with packet-based transmissions in wireless sensor networks.
 * [vesna-spectrum-sensor](https://github.com/sensorlab/vesna-spectrum-sensor) is an open source spectrum sensing application for spectrum sensing using VESNA sensor nodes. It is typically used when measurements with a mobile sensor node are performed in the testbed. It uses a wired RS-232 connection with a PC to report measurements.

### Experiment support

 * A [LOG-a-TEC web portal](https://crn.log-a-tec.eu/) provides an overview the testbed, its current state and allows for manual interaction with sensor nodes using a REST API requests. It also provides a graphical interface to the radio planning tools.
 * [vesna-alh-tools](https://github.com/sensorlab/vesna-alh-tools) is a library and a collection of tools that allow for interaction with the testbed and experiment control from the Python language. [vesna-alh-js](https://github.com/sensorlab/vesna-alh-js) is a similar, although less developed library, using Javascript.
 * [ProtoStack](https://github.com/sensorlab/ProtoStack) is a graphical tool for network stack development. It can be used to experiment with dynamic composition of communication services in the Contiki OS.
 * [GRASS-RaPlaT](http://www-e6.ijs.si/RaPlaT/GRASS-RaPlaT_main_page.htm) is an open-source radio planning tool. It contains a number of channel models that can be used to calculate radio coverage of a single node or a whole network. Integration with the LOG-a-TEC testbed provides raster maps of the area surrounding the testbed and can be used, for example, to predict received signal strengths for radio links in an experiment.

See [software](software.html) page for more details on testbed software.

## Getting started

### Publications and tutorials

The following material is available for LOG-a-TEC.

 * A MSc thesis describing the cogitive radio experimentation facilities in LOG-a-TEC: <a href="http://sensorlab.ijs.si/publication/32/distributed-spectrum-sensing-in-unlicensed-bands-using-the-vesna-platform">Zoltan Padrah: Distributed Spectrum Sensing in Unlicensed Bands Using the VESNA Platform, MSc thesis, MPS, Ljubljana, Slovenia.</a>

 * [A short tutorial on how to use the LOG-a-TEC portal](doc/LOG-a-TEC_Portal_Tutorial.pdf).

 * [A description of the GRASS-RaPlaT tool for experiment planning and visualization of measurements](doc/GRASS-RaPlaT_for_experiment_planning_and_visualization_of_measurements.pdf).

 * A getting started tutorial that includes (1) an overview of the LOG-a-TEC testbed with its hardware and software components and (2) demos using the available Python tools is <a href="http://sensorlab.ijs.si/files/publications/Solc_Performing_cognitive_radio_experiments_on_the_LOG-a-TEC_sensor_network_testbed_2013.pdf">Tomaž Šolc: Performing cognitive radio experiments on the LOG-a-TEC sensor network testbed, CREW Training days, Brussels, Belgium., February 2013</a>, while the code can be downloaded from our <a href="https://github.com/sensorlab/vesna-alh-tools/tree/master/demos">GitHub page</a>.

 * A paper describing the adaptation and experimentation with the game theoretic based PAPU algorithm on LOG-a-TEC <a href="http://sensorlab.ijs.si/files/publications/Anton_Power_Allocation_Game_Logatec_2014_corrected.pdf">Ciprian Anton, Andrei Toma, Ligia Cremene, Mihael Mohorčič and Carolina Fortuna: Power Allocation Game for Interference Mitigation in a Real-world Experimental Testbed, IEEE ICC 2014 - Cognitive Radio and Networks Symposium.</a>.

 * A general paper describing LOG-a-TEC <a href="http://sensorlab.ijs.si/files/publications/Mohorcic-WSN_Based_Experimental_Infrastucture-ISWCS2013.pdf">Mihael Mohorčič, Miha Smolnikar, Tomaž Javornik: Wireless Sensor Network Based Infrastructure for Experimentally Driven Research, The Tenth International Symposium on Wireless Communication Systems, Ilmenau, Germany, August 2013</a>.

 * A paper benchmarking different sensing devices <a href="http://sensorlab.ijs.si/files/publications/FuNeMS-2012_final.pdf">Peter Van Wesemael, Wei Liu, Mikolaj Chwalisz, Justin Tallon, Danny Finn, Zoltan Padrah, Sophie Pollin, Stefan Bouckaert, Ingrid Moerman, and D. Willkomm: Robust distributed sensing with heterogeneous devices, Future Network & Mobile Summit 2012.</a>.

 * A demonstration of SNE-ISMTV hardware capabilities <a href="http://sensorlab.ijs.si/files/publications/Solc-SNE-ISMTV_VESNA_wireless_sensor_node_expansion_for_cognitive_radio_experiments_a.pdf">Tomaž Šolc: SNE-ISMTV: VESNA wireless sensor node expansion for cognitive radio experiments, The Tenth International Symposium on Wireless Communication Systems, Ilmenau, Germany, August 2013</a>.

### Example use cases

Various experiments can be performed using the LOG-a-TEC infrastructure, for example:

 * Energy detection ([Python source](https://github.com/sensorlab/vesna-alh-tools/blob/master/demos/crew-training/04-single-sweeps.py))
 * Signal generation ([Python source](https://github.com/sensorlab/vesna-alh-tools/blob/master/demos/crew-training/05-signal-generation.py))
 * Set up multiple nodes in the testbed to perform simultaneous tasks. ([Python source](https://github.com/sensorlab/vesna-alh-tools/blob/master/demos/crew-training/06-programmed-tasks.py))
 * UHF wireless microphone emulation. ([Python source](https://github.com/sensorlab/vesna-alh-tools/blob/master/demos/crew-y2-review/uhf-wireless-mic-simulation.py))
 * Simple cognitive terminal example. ([Python source](https://github.com/sensorlab/vesna-alh-tools/blob/master/demos/crew-y2-review/24ghz-cognitive-terminal.py))
 * Game theorectical wireless communication experiments. ([Python source](https://github.com/sensorlab/logatec-games))
 * Investigating different RF interference detection techniques, e.g. distributed vs. centralized detection.

### How to get access

In order to access LOG-a-TEC you first need to get a user account. Please contact Matevz Vucnik, Tomaz Solc or Carolina Fortuna for this (firstname.lastname(at)ijs.si).

Once you have a user account, [log in here](http://log-a-tec.eu/).
