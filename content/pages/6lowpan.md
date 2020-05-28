title: 6LoWPAN

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# LOG-a-TEC testbed in JSI campus

> TODO: Add citation - everything from overview and hardware is cited from COINS article.

> COMMENT: There is very por documentation of the testbed in campus, so I added few paragraphs on the beginning and few pictures (we can also wait to get better weather in the background).

## Overview

There is 79 sensor nodes mounted at the campus of the Jožef Stefan Institute in Ljubljana, Slovenia. They cover approximately 3000 m2 of in-door and out-door space and are placed on light poles 3.5 m above the ground and on the surrounding buildings at heights from 2.0 to 9.3 m. To enable experiments in indoor as well as in mixed indoor/outdoor scenarios, the testbed is extended in an indoor environment with additional 20 UWB devices and one LPWA device. These are deployed on the second and third floors of the 28.4 m by 16.6 m building. Each node is directly accessible from the Internet using IPv6.

<img src="img/6lowpan/testbed_tloris.png"><img src="img/6lowpan/testbed_table.png"><img src="img/6lowpan/testbed_device.jpg">

This cluster is currently used for experiments with packet-based transmissions and dynamic network stack composition in wireless sensor networks. As seen on the table above, the LOG-a-TEC testbed devices can use several wireless technologies. Architecturally, we consider hybrid testbed devices with two separate functional blocks represented by the infrastructure node and the target node. Therefore, a generic infrastructure node that can be combined with various target nodes.

## Hardware

The infrastructure node is a custom designed single board computer based on the BeagleCore module running the Debian GNU/Linux operating system. In IJS campus testbed it uses 5GHz WiFI infrastructure for connectivity and VESNA and USB interfaces for modular extensibility and a development/debug process. The target node is a custom VESNA (VErsatile platform for Sensor Network Applications) device with an ARM Cortex-M3 micro controller application module and dedicated experimentation transceivers.
Each VESNA in testbed is extended with radio feature module - possible combinations of included radios are displayed in the table above.

<img src="img/6lowpan/hardware_lgtc.jpg"><img src="img/6lowpan/hardware_vesna.jpg">


VESNA can run a dedicated OS (e.g., Contiki-NG) or custom firmware.

## Contiki-NG operating system

<img src="img/6lowpan/contiki_logo.png">

Contiki-NG is an open source operating system for resource-constrained devices in the
Internet of Things. It is a fork of the Conitki OS, focused primarily on IPv6 communication and modern IIoT platforms. The code footprint is on the order of a 100 kB and the memory usage can be configured to be as low as 10 kB [[1]](https://github.com/contiki-ng/contiki-ng/wiki).

IJS developers added support for VESNA platform - current supported version is v4.5 [(Contiki-NG repository with VESNA implementation)](https://github.com/gcerar/contiki-ng "Contiki-NG GitHub").

> TODO: Add link or not?

One of the main features of Contiki-NG is a resource-efficient IPv6 network stack designed for lossy and low-power networks. The network stack comprises protocols such as IPv6, TCP, UDP, DNS, RPL, CoAP, LWM2M, and Websockets.  Beneath the IPv6 stack, Contiki-NG supports IEEE 802.15.4 wireless communication with Time-Slotted Channel Hopping (TSCH). [[2]](https://github.com/contiki-ng/contiki-ng/wiki/Documentation:-IPv6)

With Contiki-NG implementation, configured to support VESNA platform we can form 6LoWAPN network in the testbed. It can be done with either 2.4 GHz or 868 MHz ISM band. Contiki-NG's configuration files allow us to manage and configure all preferred settings, such as TSCH hopping channels (which frequency's to use), Beacon sending interval, security and much more.
With the help of testbed management system, we can choose which devices will be in the network (many clusters is also an option), which device will be the root of the DAG network, how long the experiment will last etc.

## Experiment workflow demonstration

> TODO: Skip this part? Or go into details?

To make an experiment in testbed, we first have to write Conitki-NG application, that will run on the VESNA device. It can be a simple *"hello-world"* or complex data collecting application. The easiest way to do it is to use standard Contiki-NG application with processes abstraction.

Later, with the help of GitHub webhook we trigger the beginning of experiment. Infrastructure devices will first download the application code from given GitHub repository, then they will compile and flash it to their target VESNA device.

<img src="img/6lowpan/experiment_workflow.png">

Infrastructure nodes will then monitor and store everything that comes over serial connection from VESNA. At the end of experiment, devices will send collected data to the management server, from where data is forwarded back to GitHub. Here we can access it and use it for later analysis.
