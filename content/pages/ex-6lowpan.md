title: 6LoWPAN experiment

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# LOG-a-TEC testbed in JSI campus

> TODO: Add citation - everything from overview and hardware is cited from COINS article.

> COMMENT: There is very por documentation of the testbed in campus, so I added few paragraphs on the beginning and few pictures (we can also wait to get better weather in the background).

## Overview




## Hardware

The infrastructure node is a custom designed single board computer based on the BeagleCore module running the Debian GNU/Linux operating system. In IJS campus testbed it uses 5GHz WiFI infrastructure for connectivity and VESNA and USB interfaces for modular extensibility and a development/debug process. The target node is a custom VESNA (VErsatile platform for Sensor Network Applications) device with an ARM Cortex-M3 micro controller application module and dedicated experimentation transceivers.
Each VESNA in testbed is extended with radio feature module - possible combinations of included radios are displayed in the table above.

<img src="img/6lowpan/hardware_lgtc.jpg"><img src="img/6lowpan/hardware_vesna.jpg">

VESNA can run a dedicated OS (e.g., Contiki-NG) or custom firmware.

## Experiment workflow demonstration

> TODO: Skip this part? Or go into details?

To make an experiment in testbed, we first have to write Conitki-NG application, that will run on the VESNA device. It can be a simple *"hello-world"* or complex data collecting application. The easiest way to do it is to use standard Contiki-NG application with processes abstraction.

Later, with the help of GitHub webhook we trigger the beginning of experiment. Infrastructure devices will first download the application code from given GitHub repository, then they will compile and flash it to their target VESNA device.

<img src="img/6lowpan/experiment_workflow.png">

Infrastructure nodes will then monitor and store everything that comes over serial connection from VESNA. At the end of experiment, devices will send collected data to the management server, from where data is forwarded back to GitHub. Here we can access it and use it for later analysis.
