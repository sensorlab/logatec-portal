title: Infrastructure node (lgtc)

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# LGTC

LGTC is a custom designed single board computer based on the BeagleCore module running the Debian GNU/Linux operating system. It is capable of hosting microcontroller-based boards such as VESNA SNC and VESNA SNP.

Platform supports Wired Ethernet, WiFI, USB and Bluetooth for connectivity and VESNA and USB interfaces for modular extensibility and a development/debug process. It can be powered with either 230V AC, 12V DC or the 5V supply from the USB gadget.

<figure>
    <img src="img/hw/lgtc/lgtc.jpg">
    <figcaption>LGTC board.</figcaption>
</figure>

The infrastructure is built from two submodules. First one, the Power supply submodule, supports multiple input source options. It can be connected to the Mains 110 V – 230 V AC, 12 V DC or PoE. It delivers power to all the electronics on the board. The second submodule is an embedded computer. We are using BeagleCore module, which is based on Texas Instruments AM3358 1Ghz ARM Cortex-A8 processor. It has 512 MB DDR3 RAM and 8 GB of eMMC Flash. For additional memory we added uSD card slot. We achieve infrastructure connectivity by Ethernet or WiFi. For Ethernet we employ Microchip’s LAN8710 and WL1837MOD module for WiFi. Later works on 5Ghz frequency bands, which enables us to use 2.4 GHz bands for experimentations. We also supported USB Host and Serial communication.

<figure>
    <img src="img/hw/lgtc/connectors.png">
    <figcaption>LGTC board.</figcaption>
</figure>

All before mentioned parts are placed on custom PCB which fits in weatherproof IP67 enclosure of 15 cm x 11 cm x 4 cm. Since the nodes are located indoor as well as outdoors, we designed two different assembly variants, as can be seen from Figure 2(Photo of indoor and outdoor node) To achieve maximum water resistance, the outdoor variant support only 5 external connectors. 4 SMA connectors for antennas and one cable gland for power supply. Thus only WiFi can be used for the infrastructure connectivity and Ethernet/PoE is not supported. Since the USB Host connector is positioned vertically inside enclosure, the height of the enclosure limits the size of USB dongles that can be connected. The indoor variant does not need to be waterproof, so besides antenna and power supply connectors we extruded extra holes for USB Host and Ethernet connector. So one can power indoor node from PoE as well.

# Communication interfaces

For the distributed system of infrastructure network we chose SSH protocol as an integration protocol that combined with Ansible software provisioning system ensures scalable and adaptable distributed system. Ansible is a tool similar to Chef or Puppet but does not require a special agent running on each node, which could introduce a potential point of failure which we would like to avoid. Ansible is agent-less and therefore a more reliable system which is especially important in cases where nodes cannot be accessed easily.

<figure>
    <img src="img/hw/lgtc/testbed-device.png">
    <figcaption>LGTC board.</figcaption>
</figure>

<br>


<!-- TODO add more description here ... I can't find any :) -->
<!-- Maybe add link to sna-lgtc-support on gitHub?: https://github.com/sensorlab/sna-lgtc-support -->
