title: VESNA Based Air Quality Monitoring

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

[TOC]

# Continuous Integration for Embedded Development

Continuous integration (CI) is an automated process of integrating the code developed by various developers into a working software. It also introduces a feedback loop so that the developers always know how their code works with the others. CI should happen several times a day and there is no need for a separate integration phase when the development is done. The [literature](https://www.martinfowler.com/articles/continuousIntegration.html) suggests that the developer waits no more than 10 minutes for the test results.

<figure>
    <center><img src="img/ci.png" style="width: 50%; height: 50%;"></center>
    <figcaption>Continuous integration.</figcaption>
</figure>

CI is already a well accepted concept within the development of general purpose software running on PCs where the testing is scalable on demand because it is easy to use virtualization and other high level technologies. However, the development of embedded systems especially the wireless ones is more challenging because of the restricted capabilities of microcontrollers and it is also not easy to scale as isolation between test environments is needed to avoid mutual interference. Literature suggests that real hardware test platforms and the environments are essential to the process of developing new wireless technology.

Infrastructure framework for extending the CI practices with support for wireless firmware development development should properly interface three main entities:

* **Repository** that holds the code, configuration files, tests and documentation, i.e., everything needed for the automated build. Generally, the repository is implemented using VCS tools.
* **Automation system** that performs all the instantiations and builds and transfers software components. Its implementation typically includes a large set of tools and components. In modern software development, the most efficient approach is to use web and containerization technologies.
* **Testbed device** is used to run the tests and experiments. It can be off-the-shelf equipment, a custom-built device or a hybrid. The first approach is more suitable for improving existing technologies, while the second is for developing new ones. For the sake of generality, we assume that a testbed device comprises separate functional blocks represented by the [infrastructure node](hw-lgtc.html) for device management and the [target node](hw-vesna.html) for test execution.

<figure>
    <img src="img/Architecture_CI_proc.png">
    <figcaption>Embedded development CI process framework.</figcaption>
</figure>

## CI Support System

The architecture of the framework for ContinuOus IntegratioN in wirelesS technology development (COINS) consists of the three main architectural components: repository, automation system and testbed device, which are mapped on the elements of the existing LOG-a-TEC infrastructure. The COINS architecture is implementation independent with well defined modules which interact through specified interfaces for which we provide a reference implementation although another implementation using a set of different tools is certainly possible.

<figure>
    <img src="img/Architecture_10.png">
    <figcaption>Architecture of COINS.</figcaption>
</figure>

For the implementation of [COINS](http://github.com/sensorlab/SensorManagementSystem/), we chose widely used FOSS tools. This way, COINS benefits from and contributes to the work of established communities and is more likely to be adopted. In particular, the container system is based on [Docker](http://www.docker.com/), which we use to package software for distribution to nodes in the testbed. The CI hook service adds support for the [GitHub WebHook](http://developer.github.com/webhooks/) client. We use [Ansible](http://www.ansible.com/) to describe and automate tasks. Ansible is a popular automation engine for configuration management and software deployment. The networked resource monitoring tool [Munin](http://munin-monitoring.org/) serves for testbed device monitoring. We also implemented a custom node registry system and released it as free software under the AGPL license.

## Automated Testing Implementation

The automated testing system was designed to abstract the underlying complexity and enable the workflow. Everything needed for automated tests is available in a GitHub repository starting with the Ansible playbook which gets executed when new code is pushed to the repository by triggering the GitHub Webhook. It is listening on testing controller which is part of the central management server. The Ansible playbook contains a description of the test setup which will be executed on the target nodes and in the test controller. The testbed device will download the GitHub repository containing the Docker file and the actual test code. The Docker image will not be built each time from scratch; the testbed generic image will be downloaded from Docker store, which has all the needed dependencies and services already installed and set up. Thus, the developer only needs to write the code for the actual test performed on the node and the part performed by the testing controller.

When the test is completed, the testing controller will automatically commit and push the test results to GitHub, making them available to the developer for download and post processing. In the context of the testbed usage for CI, each time a developer contributes a change in the codebase, the test is executed on a [testbed](ap-cradio.html) and results are returned to the developer, revealing if the test passed or failed. Complete testing orchestration is based on the popular open source automation server [Jenkins](https://www.jenkins.io/).

An example test case for a wireless communication system includes software for three entities: the transmitter, the receiver and the test controller. The first two will run on the target node within the testbed device, while the third runs on the management server. The test controller instructs one testbed device to go in receive mode and another testbed device to transmit the test sequence. When the first testbed device receives the test sequence, it reports the results back to the test controller, which verifies if the received sequence matches the transmitted one. If it does, the test succeeds; otherwise, it fails.

    $ assertEqual(nodeTX.data, nodeRX.data)

The described testing approach was implemented in the testbed for the purpose of LoRa firmware development. Especially in the industry, there are situations where multiple developers work on the same code-base simultaneously. In such environments it can happen that a fix from one developer breaks a feature of another. By introducing automated testing on a real testbed, the integration problems get discovered and fixed early in the development process.

## Cite

[M. Vucnik et al., "Continuous Integration in Wireless Technology Development," in IEEE Communications Magazine, vol. 56, no. 12, pp. 74-81, December 2018, doi: 10.1109/MCOM.2018.1800107.](https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8515680&isnumber=8570022) [PDF.](https://arxiv.org/pdf/1804.01814.pdf)

[M. Vucnik et al., "Integrating Research Testbeds into Social Coding Platforms," 2018 European Conference on Networks and Communications (EuCNC), Ljubljana, Slovenia, 2018, pp. 230-234, doi: 10.1109/EuCNC.2018.8443242.](https://ieeexplore.ieee.org/document/8443242) [PDF.](https://www.researchgate.net/publication/325091263_Integrating_Research_Testbeds_into_Social_Coding_Platforms)

[I. Boškov, et al., "Time-to-Provision Evaluation of IoT Devices Using Automated Zero-Touch Provisioning," GLOBECOM 2020 - 2020 IEEE Global Communications Conference, Taipei, Taiwan, 2020, pp. 1-7, doi: 10.1109/GLOBECOM42002.2020.9348119.](https://ieeexplore.ieee.org/document/9348119) [PDF.](https://arxiv.org/pdf/2009.09731.pdf)
