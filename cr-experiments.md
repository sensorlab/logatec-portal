<meta charset="utf-8">

[TOC]

# CREW-TV

## Introduction

TV White Space (TVWS) frequencies are becoming a real world laboratory for experimentation with dynamic spectrum sharing. A challenging aspect for secondary users of TVWS in Europe and US is that the TV band is not only occupied by digital TV broadcasts from fixed transmission towers. In addition, the same part of the spectrum is also used by wireless microphones and other licensed mobile equipment (sometimes called Programme Making and Special Event (PMSE) devices).

Operation of an unlicensed, secondary device in TVWS may be permitted if (and only if) it does not interfere with incumbent services such as digital TV and PMSE transmissions. Such a white space device should either sense the presence of incumbent systems itself or make use of a geo-location database to determine which part of the spectrum is unused in the vicinity.

Current regulation in the US and UK permits the operation of white space devices based on the use of the geo-location database. However it is increasingly recognized that a solution based on both sensing and geo-location databases would allow for more efficient use of the available spectrum. In particular, a geo-location database assisted by a low-cost and densely deployed spectrum monitoring infrastructure is a promising approach to protect incumbent systems, such as wireless microphones, that are typically not registered in geo-location databases.

The CREW-TV experiment was designed to demonstrate the combination of a geo-location database with a spectrum monitoring network. It was performed in March 2014 by [Instituto de Telecomunicações](http://www.it.pt/) and CMSF-Sistemas de Informação with support from the Jožef Stefan Institute as part of the second Open Call of the CREW project.

## Summary of the experiment

The CREW-TV experiment used a network of 8 sensor nodes with the SNE-ISMTV-UHF energy detection receivers to sense the spectrum in a distributed fashion. The nodes were mounted on street lights and other public infrastructure in the Logatec industrial zone and city center clusters. The LOG-a-TEC testbed infrastructure was used to remotely setup the desired sensing parameters (channel bandwidth, central frequencies of interesting channels, etc.) and retrieve the measurement data over the Internet.

A TV signal coverage was computed for the area covered by the testbed based on the data for transmitter locations and powers obtained the national TV broadcaster and the algorithm described in the ECC Report 186. Based on this initial, static data, a geo-location database was implemented. An interface to the database for white space devices was based on a draft version of the IETF Protocol to Access White Spaces (PAWS).

To add dynamic content to the database, a process was implemented that continuously scanned the spectrum in a distributed fashion using the sensor nodes in the testbed. Once a PMSE transmission was detected, the geo-location database was instructed to add an additional exclusion region for white-space devices around the detected PMSE location. In this exclusion area, transmissions of secondary users on frequencies that would interfere with the PMSE transmission were temporarily forbidden.

The system was validated by setting up a white space link from a base station to a mobile terminal that used the experimental database over the PAWS protocol to avoid interference with incumbent users. During a trial operation the spectrum use was monitored from a mobile measurement station using a spectrum analyzer. Several additional sensor nodes in the testbed, equipped with CC1101 transceivers, were used to transmit simulated wireless microphone transmissions to verify the operation of the sensing network. It was verified that the white space link successfully avoided both digital TV broadcasts as well as intermittent PMSE transmissions.

In summary, this experiment was able to showcase the technical feasibility of dynamic spectrum databases, i.e., the combination of a pre-computed white spaces map with real-time information from a distributed sensing network. At regulatory level, such experiments help administrations to recognize the value of spectrum monitoring as part of the progressive approach to managing spectrum more efficiently.

<img alt="CREW-TV measurements" src="img/crewtv-van.jpg"><img width="400" alt="CREW-TV demo screenshot" src="img/crewtv-demo.png">

## Further reading

 * [Interactive demo of the CREW-TV database](http://www.cmsf.eu/projects/crew-tv/)

# Game-theoretical interference mitigation

LOG-a-TEC is particularly suitable to investigate game-theoretical techniques in a realistic environment. The easy to use [API](https://github.com/sensorlab/vesna-alh-tools) and the existing [implementation of games](https://github.com/sensorlab/logatec-games) provide a low barrier for starting.

Currently there are two existing power allocation strategies that use a game theoretical framework that have been developed, adapted and evaluated on LOG-a-TEC. 

In the first one, the Proactive Power Allocation Game has been adapted and evaluated on the testbed. For more information, we refer the readers to the existing paper Ciprian Anton, Andrei Toma, Ligia Cremene, Mihael Mohorcic and Carolina Fortuna: Power Allocation Game for Interference Mitigation in a Real-world Experimental Testbed, IEEE ICC 2014 - Cognitive Radio and Networks Symposium, June 2014 ] (http://sensorlab.ijs.si/files/publications/Anton_Power_Allocation_Game_Logatec_2014_corrected.pdf) 
 and [existing code] (https://github.com/sensorlab/logatec-games/tree/master/power_allocation_continuous). For trying it yourself, please request a LOG-a-TEC account and we'll be happy to support you.
 
 In the second one, a completely new game has been proposed and evaluated on the testbed. This game is tailored for IoT/M2M systems which are able to only transmit with discrete power levels rather than with continuous ones. For more information, we refer the readers to the [existing code] (https://github.com/sensorlab/logatec-games/tree/master/power_allocation_discrete) while the paper reporting the findings will be posted as soon as it's accepted for publication. For trying it yourself, please request a LOG-a-TEC account and we'll be happy to support you.


# Over-the-air programming

The software running on wireless testbeds and IoT/M2M devices has to be updated and upgraded frequently. the most practical way of doing this is over the air. From the perspective of software upgrades, we identify three types of required updates: OS/firmware upgrades, driver updates and application updates. OS/firmware upgrades are expected to occur when new versions of these software are released or when a major flaw is discovered and needs immediate fixing. The frequency of these upgrades is expected to be of 3-4 per year at most for both use cases. From the perspective of the size of the code to be transfered over the air to the nodes of the testbed, these upgrades tend to be large.

The driver updates are also expected to be required at most few times per year for Monitoring-UCes and for most instances of the Experimentation-UCes. However, for experimental setups that involve MAC layer experiments, the need for upgrades might be more frequent. In many cases, these upgrades can be achieved using dynamic linking, thus avoiding the need for realizing an OS/firmware upgrade. In such cases, the file sent to the nodes of the testbed is relatively small compared to the full OS/firmware image.

The expected application updates vary a lot across testbeds. The more flexible and generic the testbed is, the higher the number of expected application updates. These updates are best performed using dynamic linking and in most cases their expected size is relatively small. Performing a full OS/firmware upload for each application tends to be uneconomical.

Together with our partners from [XLab](http://www.xlab.si/?lang=en), we are evaluating the tradeoffs involved in over the air reprogramming of constrained devices. Preliminary results have been reported in the following paper: [Justin Cinkelj, Adnan Bekan, Marjan Sterk, Mihael Mohorcic, Carolina Fortuna: Design Trade-offs for the Wireless Management Networks of Constrained Device Testbeds, 11th International Symposium on Wireless Communication Systems - (ISWCS'14), Barcelona, Spain, August 2014] (http://sensorlab.ijs.si/files/publications/Cinkelj_Design_Trade-offs_for_the_Wireless_Management_Networks_of_Constraint_Device_Testbeds_update.pdf).
