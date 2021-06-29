title:

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

LOG-a-TEC covers a set of diverse testbeds used for research purposes. It initially started 7 years ago as an outdoor environmental sensing facility, it evolved towards [spectrum sensing and cognitive radio](ap-cradio.html) as its largest component. It is also covering application areas (verticals) such as [photovoltaics](ap-pv.html), [air quality](ap-aqa.html) and [automotive](ap-caravan.html). More recently, it is evolving towards a comprehensive heterogeneous [M2M/MTC/dense IoT setup](ap-mtc.html) comprising LR-WPAN and LPWAN technologies. The one thing all setups have in common is that they are based on a version of the [VESNA hardware platform](hw-vesna.html) which can be used as standalone or combined with other more powerful machines. VESNA is a modular and configurable embedded hardware platform developed by SensorLab.

<br/>

To learn more about LOG-a-TEC, navigate the tabs of this site.

To perform experiments, log in to the portal (you need to have an account).
<a class="btn" href="https://videk.ijs.si/">Log me in &raquo;</a></p>

To find out more, fell free to contact us vie e-mail.
<a class="btn" href="mailto:sensorlab@ijs.si">I want to know more &raquo;</a></p>


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
			<td><a href="http://sensorlab.ijs.si/files/publications/low-cost-testbed-development.pdf">[1]</a>,<a href="http://sensorlab.ijs.si/files/publications/Mohorcic-WSN_Based_Experimental_Infrastucture-ISWCS2013.pdf">[2]</a>,<a href="http://sensorlab.ijs.si/files/publications/Solc-SNE-ISMTV_VESNA_wireless_sensor_node_expansion_for_cognitive_radio_experiments_a.pdf">[3]</a>,<a href="http://sensorlab.ijs.si/files/publications/Anton_Power_Allocation_Game_Logatec_2014_corrected.pdf">[4]</a></td>
			<td><a href="http://sensorlab.ijs.si/files/publications/Bekan_Adnan_GLOBECOM_2015.pdf">[5]</a>,<a href="http://sensorlab.ijs.si/files/publications/Fortuna_Programmable_Network_ProtoStack.pdf">[6]</a>,<a href="http://sensorlab.ijs.si/files/publications/2015_10_02_master_thesis_Adnan_Bekan.pdf">[7]</a></td>
			<td><a href="https://www.researchgate.net/publication/308986067_NLOS_Channel_Detection_with_Multilayer_Perceptron_in_Low-Rate_Personal_Area_Networks_for_Indoor_Localization_Accuracy_Improvement">[8]</a></td>
		</tr>
	</tbody>
</table>

### LOG-a-TEC is citeware

Any publications (e.g. academic reports, papers, other disclosure of results) containing or based on data obtained with the use of this testbed will acknowledge its use by mentioning the name "LOG-a-TEC testbed set-up and maintained by JSI" and an appropriate citation one of the following publications:

1. [Tomaž Šolc, Carolina Fortuna, Mihael Mohorčič: Low-cost testbed development and its applications in cognitive radio prototyping, Cognitive Radio and Networking for Heterogeneous Wireless Networks, Eds. M.-G. Di Benedetto, A. Cattoni, J. Fiorina, F. Bader, L. De Nardis.](http://sensorlab.ijs.si/files/publications/low-cost-testbed-development.pdf)

2. [Mihael Mohorcic, Miha Smolnikar, Tomaz Javornik: Wireless Sensor Network Based Infrastructure for Experimentally Driven Research, The Tenth International Symposium on Wireless Communication Systems, Ilmenau, Germany, August 2013.](http://sensorlab.ijs.si/files/publications/Mohorcic-WSN_Based_Experimental_Infrastucture-ISWCS2013.pdf)

3. [Tomaz Solc, SNE-ISMTV: VESNA wireless sensor node expansion for cognitive radio experiments, The Tenth International Symposium on Wireless Communication Systems, Ilmenau, Germany.](http://sensorlab.ijs.si/files/publications/Solc-SNE-ISMTV_VESNA_wireless_sensor_node_expansion_for_cognitive_radio_experiments_a.pdf)

4. [Ciprian Anton, Andrei Toma, Ligia Cremene, Mihael Mohorcic and Carolina Fortuna Power Allocation Game for Interference Mitigation in a Real-world Experimental Testbed, IEEE ICC 2014 - Cognitive Radio and Networks Symposium.](http://sensorlab.ijs.si/files/publications/Anton_Power_Allocation_Game_Logatec_2014_corrected.pdf)

5. [Adnan Bekan, Mihael Mohorcic, Justin Cinkelj, Carolina Fortuna: An architecture for fully reconfigurable plug-and-play wireless sensor network testbed, IEEE Globecom, San Diego, California, USA.](http://sensorlab.ijs.si/files/publications/Bekan_Adnan_GLOBECOM_2015.pdf)

6. [Carolina Fortuna, Mihael Mohorcic: A Framework for Dynamic Composition of Communication Services, ACM Transactions on Sensor Networks, Vol 11, Issue 2.](http://sensorlab.ijs.si/files/publications/Fortuna_Programmable_Network_ProtoStack.pdf)

7. [Adnan Bekan: A RESTful based architecture for reconfigurable experimental wireless sensor network testbed, MSc thesis, MPS, Ljubljana, Slovenia.](http://sensorlab.ijs.si/files/publications/2015_10_02_master_thesis_Adnan_Bekan.pdf)

8. [BREGAR, Klemen, HROVAT, Andrej, MOHORČIČ, Mihael. NLOS channel detection with multilayer perceptron in low - rate personal area networks for indoor localization accuracy improvement. V: PAVLIN, Majda (ur.), et al. Zbornik : 1. del = Proceedings : part 1. Ljubljana: Mednarodna podiplomska šola Jožefa Stefana, 2016, str. 130-139.](https://www.researchgate.net/publication/308986067_NLOS_Channel_Detection_with_Multilayer_Perceptron_in_Low-Rate_Personal_Area_Networks_for_Indoor_Localization_Accuracy_Improvement)

<!-- Here for the references in the table -->
[1]:http://sensorlab.ijs.si/files/publications/low-cost-testbed-development.pdf
[2]:http://sensorlab.ijs.si/files/publications/Mohorcic-WSN_Based_Experimental_Infrastucture-ISWCS2013.pdf
[3]:http://sensorlab.ijs.si/files/publications/Solc-SNE-ISMTV_VESNA_wireless_sensor_node_expansion_for_cognitive_radio_experiments_a.pdf
[4]:http://sensorlab.ijs.si/files/publications/Anton_Power_Allocation_Game_Logatec_2014_corrected.pdf
[5]:http://sensorlab.ijs.si/files/publications/Bekan_Adnan_GLOBECOM_2015.pdf
[6]:http://sensorlab.ijs.si/files/publications/Fortuna_Programmable_Network_ProtoStack.pdf
[7]:http://sensorlab.ijs.si/files/publications/2015_10_02_master_thesis_Adnan_Bekan.pdf
[8]:https://www.researchgate.net/publication/308986067_NLOS_Channel_Detection_with_Multilayer_Perceptron_in_Low-Rate_Personal_Area_Networks_for_Indoor_Localization_Accuracy_Improvement