title: VESNA Based Air Quality Monitoring

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

[TOC]

# Continuous Integration for Embedded Development

Continuous integration (CI) is an automated process of integrating the code developed by various developers into a working software. It also introduces a feedback loop so that the developers always know how their code works with the others. CI should happen several times a day and there is no need for a separate integration phase when the development is done. The literature suggests that the developer waits no more than 10 minutes for the test results.

<figure>
    <center><img src="img/ci.png" style="width: 50%; height: 50%;"></center>
    <figcaption>Continuous integration.</figcaption>
</figure>

CI is already a well accepted concept within the development of general purpose software running on PCs where the testing is scalable on demand because it is easy to use virtualization and other high level technologies. However, the development of embedded systems especially the wireless ones is more challenging because of the restricted capabilities of microcontrollers and it is also not easy to scale as isolation between test environments is needed to avoid mutual interference. Literature suggests that real hardware test platforms and the environments are essential to the process of developing new wireless technology.

There are four main functionalities that wireless network developers and testers need from a testbed environment:

* Simple integration of software and hardware components that require testing; the priority is to minimize the overhead that the testbed usage introduces into the technology development cycle.
* Controllable generation of traffic in the network under test, such as on-demand packet transmission according to custom patterns and distributions, to test new network protocols under realistic traffic conditions.
* Controlled emulation of a radio operating environment using various technologies in order to identify potential coexistence issues between new and legacy technologies as early in the development cycle as possible.
* Monitoring and analysis of network and radio spectrum metrics.

The framework we are introducing should seamlessly incorporate features of a wireless testbed with the CI development practices. Infrastructure framework for extending the CI practices with support for wireless firmware development development should properly interface three main entities:

* **Repository** that holds the code, configuration files, tests and documentation, i.e., everything needed for the automated build. Generally, the repository is implemented using VCS tools.
* **Automation system** that performs all the instantiations and builds and transfers software components. Its implementation typically includes a large set of tools and components. In modern software development, the most efficient approach is to use web and containerization technologies.
* **Testbed device** is used to run the tests and experiments. It can be off-the-shelf equipment, a custom-built device or a hybrid. The first approach is more suitable for improving existing technologies, while the second is for developing new ones. For the sake of generality, we assume that a testbed device comprises separate functional blocks represented by the [infrastructure node](hw-lgtc.html) for device management and the [target node](hw-vesna.html) for test execution.

<figure>
    <img src="img/Architecture_CI_proc.png">
    <figcaption>Embedded development CI process framework.</figcaption>
</figure>

The CI process begins in step 1 when a new testbed device automatically registers itself in the automation system and becomes available for testing. In step 2, the developer commits new code to the repository, initiating step 3, which consists of triggering the automation system. In step 4, the automation system pulls the changes from the repository and executes the deployment scripts specifying the testbed devices required by the test case. Step 5 deploys the changes from the repository to the testbed device and instructs it to start the build process. In step 6, the testbed device initiates the build process on the infrastructure node. The build system is contained inside a container; therefore, the infrastructure part of the testbed device stays unaffected by any build failures or run-away processes. If the building process succeeds, the infrastructure node in step 7 flashes the target node with freshly built firmware and in step 8 executes the test process. In step 9, the infrastructure node obtains the results from the target node and examines them. In step 10, the automation system updates the repository with the result and communicates the result to the developer, typically via email.

## CI Support System

The architecture of the framework for ContinuOus IntegratioN in wirelesS technology development (COINS) consists of the three main architectural components: repository, automation system and testbed device, which are mapped on the elements of the existing LOG-a-TEC infrastructure. The COINS architecture is implementation independent with well defined modules which interact through specified interfaces for which we provide a reference implementation although another implementation using a set of different tools is certainly possible.

<figure>
    <img src="img/Architecture_10.png">
    <figcaption>Architecture of COINS.</figcaption>
</figure>

For the reference implementation of [COINS](http://github.com/sensorlab/SensorManagementSystem/), we chose widely used FOSS tools. This way, COINS benefits from and contributes to the work of established communities and is more likely to be adopted. In particular, the container system is based on [Docker](http://www.docker.com/), which we use to package software for distribution to nodes in the testbed. The CI hook service adds support for the [GitHub WebHook](http://developer.github.com/webhooks/) client. We use [Ansible](http://www.ansible.com/) to describe and automate tasks. Ansible is a popular automation engine for configuration management and software deployment. The networked resource monitoring tool [Munin](http://munin-monitoring.org/) serves for testbed device monitoring. We also implemented a custom node registry system and released it as free software under the AGPL license.

### Repository

The repository support was added to the CI system to abstract the underlying complexity and enable the CI process. It includes the following features:

* the target test to be executed on the testbed device;
* the test control that runs on the management server and communicates with the testbed device;
* the developer's code that has to be tested;
* dependencies such as software libraries;
* the container file, which describes how to package the target test, test control, dependencies and developer's code into a container; and
* the deployment configuration, which specifies where and how to build and run the container.

Our implementation of the repository, is based on cloud platform GitHub for hosting source code. The GitHub platform uses Git as a VCS, hence our implementation of repository is also based on Git. The target test and test control are realized using C and Python, but in general, the proposed framework is programming language independent. The container support is implemented through Docker, while the deployment is automated by Ansible. The repository that contains everything needed for the completely automated build is realized through a GitHub repository. Examples of more advanced tests and experiments.

### Infrastructure Management and Build Automation System

The infrastructure management and build automation system is implemented as a complex setup composed of self-sufficient systems packaged in a Docker container following the microservice architecture approach. Each container includes all dependencies with the purpose of being easily redistributable. In particular, the infrastructure management and build automation system contains:

* the node registry, which has a list with details about all testbed devices;
* the node monitoring service, which is in charge of monitoring the activity and health of testbed devices;
* the orchestration and configuration, which performs regular maintenance and reconfiguration of the testbed;
* the CI hook service, which waits for signals of changes in the repository and initiates the build process; and
* the container file, which describes how to package all the previous components in a Docker container.

There are several periodic background jobs running on the management system that perform house-keeping tasks:

* Building the Ansible host file from the node registry database.
* Updating the information on the availability of individual nodes using the Ansible ping command.
* Stand-alone testbed device monitoring based on Munin.
* CI Hook service triggering the build process.

Externally, the management server exposes a user-facing web interface and an HTTP REST API. The infrastructure management and build automation system allows browsing through clusters of individual devices and nodes in the database, positioning devices on a map, visualizing reports, monitoring device activity, etc. Thus, it gives an instant overview of the state of the testbed. Depicting the testbed devices on a map is particularly useful for the selection of devices for different wireless test cases.

For the reference implementation we decided to use FOSS tools and services whenever possible. The management part of the interface consists of a dashboard based on the [Rundeck](http://rundeck.org/) system with the added support for Ansible orchestration. The nodes need to be provisioned before the deployment with a public SSH key of the management server, to later allow execution of system commands over Ansible SSH. The dashboard has options to either execute a single command on one or more nodes or define a job based on an Ansible playbook which can run once or periodically.

The web interface of the infrastructure management system also includes node monitoring information and statistics such as node uptime and system load provided by networked resource monitoring tool Munin. Warnings can be defined to trigger when specific monitored variables exceed a preselected threshold, such as running out of system memory or storage space. In such cases the system will send an email to the system administrator.

Programmatic access to the management system is performed through the REST API. For example, nodes use the REST API to make an automatic registration and update changes in configuration using a custom-developed node registry system Videk. Users can also use the REST API to access information about the nodes and clusters programmatically.

Finally, the infrastructure management system runs the [OpenVPN](https://openvpn.net/) virtual private network service. This service is useful when connecting nodes to the infrastructure management system from external networks. In a typical deployment on external networks, nodes are placed behind an IP network address translation (NAT) and/or a firewall that is not under the tester's control. This prevents direct IP connections from the infrastructure management system to the services listening on the nodes, such as the Ansible SSH, which is essential for node management. While this could be solved by modifying the firewall rules, this is often frowned upon by network administrators. Hence a more effective solution is to establish a VPN connection to external network nodes.

## Automated Testing Implementation

The automated testing system was designed to abstract the underlying complexity and enable the workflow. Everything needed for automated tests is available in a GitHub repository starting with the Ansible playbook which gets executed when new code is pushed to the repository by triggering the GitHub Webhook. It is listening on testing controller which is part of the central management server. The Ansible playbook contains a description of the test setup which will be executed on the target nodes and in the test controller. The testbed device will download the GitHub repository containing the Docker file and the actual test code. The Docker image will not be built each time from scratch; the testbed generic image will be downloaded from Docker store, which has all the needed dependencies and services already installed and set up. Thus, the developer only needs to write the code for the actual test performed on the node and the part performed by the testing controller.

When the test is completed, the testing controller will automatically commit and push the test results to GitHub, making them available to the developer for download and post processing. In the context of the testbed usage for CI, each time a developer contributes a change in the codebase, the test is executed on a [testbed](ap-cradio.html) and results are returned to the developer, revealing if the test passed or failed. Complete testing orchestration is based on the popular open source automation server [Jenkins](https://www.jenkins.io/).

An example test case for a wireless communication system includes software for three entities: the transmitter, the receiver and the test controller. The first two will run on the target node within the testbed device, while the third runs on the management server. The test controller instructs one testbed device to go in receive mode and another testbed device to transmit the test sequence. When the first testbed device receives the test sequence, it reports the results back to the test controller, which verifies if the received sequence matches the transmitted one. If it does, the test succeeds; otherwise, it fails.

    $ assertEqual(nodeTX.data, nodeRX.data)

The described testing approach was implemented in the testbed for the purpose of LoRa firmware development. Especially in the industry, there are situations where multiple developers work on the same code-base simultaneously. In such environments it can happen that a fix from one developer breaks a feature of another. By introducing automated testing on a real testbed, the integration problems get discovered and fixed early in the development process.
