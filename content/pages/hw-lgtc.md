title: Infrastructure node (lgtc)

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# LGTC

LGTC is a custom designed single board computer based on the BeagleCore module running the Debian GNU/Linux operating system. It is capable of hosting microcontroller-based boards such as VESNA SNC and VESNA SNP.

<figure>
    <img src="img/hw/lgtc/lgtc.jpg">
    <figcaption>LGTC board.</figcaption>
</figure>

## Connectors

Platform supports wired Ethernet, WiFI, USB and Bluetooth for connectivity and VESNA and USB interfaces for modular extensibility and a development/debug process. It can be powered with either 230V AC, 12V DC or the 5V supply from the USB gadget.

The power supply, supports multiple input source options. It can be connected to the mains 110 V – 230 V AC, 12 V DC or PoE. It delivers power to all the electronics on the board. The BeagleCore module is based on Texas Instruments AM3358 1Ghz ARM Cortex-A8 processor. It has 512 MB DDR3 RAM and 8 GB of eMMC Flash. For additional memory we added uSD card slot. For Internet connectivity we can use Ethernet or WiFi. Ethernet is based on Microchip’s LAN8710 and WiFi on WL1837MOD chip. We use WiFi on 5Ghz frequency band, while 2.4 GHz band is reserved for experimentation. The LGTC also support USB host and serial communication.

<figure>
    <img src="img/hw/lgtc/connectors.png">
    <figcaption>LGTC connectors.</figcaption>
</figure>

## Communication interfaces

The integration LGTC nad VESNA is done via custom hardware design and the adoption of selected interfaces and protocols. Both nodes are interconnected via application and development interfaces, providing the exchange of application data as well as remote low-level application debugging. The reliable development interface is based on JTAG and the application interface on protocols such as LCSP (Light-weight Client Server Protocol) or SLIP (Serial Line Internet Protocol) running on top of serial interface.

<figure>
    <img src="img/hw/lgtc/testbed-device.png">
    <figcaption>Communication interfaces.</figcaption>
</figure>

For the distributed system maintenance we chose SSH protocol that combined with Ansible software ensures scalable and adaptable distributed system. Ansible is a tool similar to Chef or Puppet but does not require a special agent running on each node, which could introduce a potential point of failure that we would like to avoid. Ansible is agent-less and therefore a more reliable tool which is especially important in cases where nodes cannot be accessed easily.

<br>


<!-- TODO add more description here ... I can't find any :) -->
<!-- Maybe add link to sna-lgtc-support on gitHub?: https://github.com/sensorlab/sna-lgtc-support -->
