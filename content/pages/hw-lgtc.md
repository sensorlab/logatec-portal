title: Infrastructure node (lgtc)

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# SNA-LGTC 

LGTC is a custom designed single board computer based on the BeagleCore module running the Debian GNU/Linux operating system. It is capable of hosting microcontroller-based boards such as VESNA SNC and VESNA SNP.

<figure>
    <img src="img/hw/lgtc/lgtc.jpg">
    <figcaption>LGTC board.</figcaption>
</figure>
<br>

Platform supports Wired Ethernet, WiFI, USB and Bluetooth for connectivity and VESNA and USB interfaces for modular extensibility and a development/debug process. It can be powered with either 230V AC, 12V DC or the 5V supply from the USB gadget.

<!-- TODO add more description here ... I can't find any :) -->
<!-- Maybe add link to sna-lgtc-support on gitHub?: https://github.com/sensorlab/sna-lgtc-support -->

<br>

The table below summarizes the major conceptual and technical evolution steps.

<br>

<table>
	<tbody>
		<tr>
			<td></td>
			<td>LOG-a-TEC 1.0</td>
			<td>LOG-a-TEC 2.0</td>
			<td><b>LOG-a-TEC 3.0</b></td>
		</tr>
		<tr>
			<td>Wireless functionality</td>
			<td>custom and advanced spectrum sensing and signal generating functions in sub-GHz spectrum</td>
			<td>packet based experimentation, clean slate protocol design, composable and modular protocol stacks, custom and advanced spectrum sensing and signal generating functions in sub-GHz spectrum</td>
			<td>ultra narrow band and ultra wide band, packet based experimentation, clean slate protocol design, composable and modular protocol stacks, custom and advanced spectrum sensing and signal generating functions in sub-GHz spectrum</td>
		</tr>
		<tr>
			<td>Wireless technologies</td>
			<td>TVWS, clean slate non-IEEE 802.15.4, IEEE 802.15.4</td>
			<td>TVWS, clean slate non-IEEE 802.15.4, IEEE 802.15.4</td>
			<td>LoRa, Sigfox, IEEE 802.15.4a, TVWS, clean slate non-IEEE 802.15.4, IEEE 802.15.4</td>
		</tr>
		<tr>
			<td>Frequencies</td>
			<td>470-862 MHz, 868MHz, 2.4GHz</td>
			<td>470-862 MHz, 868MHz, 2.4GHz</td>
			<td>860-1000MHz, 3.5 GHz to 6.5 GHz, 470-862 MHz, 868MHz, 2.4GHz</td>
		</tr>
		<tr>
			<td>Wireless extentions</td>
			<td>SNE-ISMTV-UHF (NXP TDA18219HN), SNE-ISMTV-TI868 (TI CC1101, Atmel AT86RF212), SNE-ISMTV-TI24 (TI CC2500,  Atmel AT86RF231)</td>
			<td>SNE-ISMTV-TI868 (TI CC1101 868MHz), SNE-ISMTV-TI24 (TI CC2500 2.4 GHz)</td>
			<td>SNN-S272 (Semtech SX-1272), SNPN-UWB (DWM1000 UWB), SNE-ESHTER (NXP TDA18219HN 470-862 MHz), SNE-ISMTV-TI868 (TI CC1101, Atmel AT86RF212), SNE-ISMTV-TI24 (TI CC2500,  Atmel AT86RF231)</td>
		</tr>
		<tr>
			<td>Software components and modules</td>
			<td>spectrum sensing by energy detection, signal generation, game theoretic power allocation</td>
			<td>custom protocol stacks, spectrum sensing by energy detection and covariance, signal generation including wireless mic profiles, game theoretic power allocation</td>
			<td>localization, LoS/nLoS classification, link quality classification and prediction, custom protocol stacks, spectrum sensing by energy detection and covariance, signal generation including wireless mic profiles, game theoretic power allocation</td>
		</tr>
		<tr>
			<td>HW platform</td>
			<td>VESNA 1.0</td>
			<td>VESNA 1.0 and 2.0</td>
			<td>VESNA 3.0</td>
		</tr>
		<tr>
			<td>Operating system</td>
			<td>Custom</td>
			<td>Contiki, Custom</td>
			<td>Unix, Contiki, Custom</td>
		</tr>
		<tr>
			 <td>Remote access</td>
			 <td colspan="3">Remote monitoring, reconfiguration and experimentation via http.</td>
		</tr>
		<tr>
			<td>Selected publications</td>
			<td>[1], [2], [3], [4]</td>
			<td>[5], [6], [7]</td>
			<td>[8]</td>
		</tr>
	</tbody>
</table>

<!-- TODO fix publications reference in the table -->