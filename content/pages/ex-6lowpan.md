title: 6LoWPAN experiment

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# Overview

21 Devices in LOG-a-TEC testbed, located at IJS Campus are equipped with Atmels 2.4 GHz transceiver (AT86RF231). They form a 6loWPAN network - RPL mesh network architecture using 6TiSCH radio link. One device acts like a root of the network and for a determined period of time transmits broadcast packets to other nodes. Every device collects all packet statistics while it also measures background noise. Data is stored and on the end of experiment transmitted to management server, where we can access the measurements and analyze them.

<img src="img/ex/6lowpan/experiment_overview.png">

## Hardware

In the testbed we are using VESNA as target device and LGTC - BeagleBone embedded computer as infrastructure device. LGTC is capable of compiling an application, flash it to VESNA and later communicate with it over serial connection.
All of these nodes are manged by a management server, which in the case of the testbed is also the experiment controller. The experiment controller is responsible for dictating how the experiment is executed and how the results from the testbed are gathered and uploaded to GitHub for post-processing.

## Experiment example

To make an experiment in testbed, we first have to write Conitki-NG application, that will run on the VESNA device. It can be a simple *"hello-world"* or complex data collecting application. The easiest way to do it is to use standard processes abstraction.
For storing the data, that is coming from a target node while the experiment is running (measurements), we must also wrote an application on LGTC to open serial port, connect to it and store the data into a file. Simplest way is to use Python and their Serial module.

Now we can run the experiment on the testbed - it is done with the help of GitHub webhook trigger or rather the automation system. The automation system pulls the changes from the Github repository and starts with the execution of the deployment scripts. These are Ansible scripts which are targeted towards a specified number of nodes in the testbed.

<img src="img/ex/6lowpan/experiment_workflow.png">

Infrastructure devices will then first download our previously written application code from given GitHub repository, then they will compile and flash it to their target VESNA device. The experiment now begins and lasts for predefined period of time.
Infrastructure nodes will monitor and store everything that comes over serial connection from VESNA. At the end of experiment, devices will send all stored data to the management server, from where data is forwarded back to GitHub. Here we can access it and use it for later analysis.
