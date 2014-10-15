# Hardware components

<p>The Log-a-tec testbed consists of several hardware components as described in the following sections.</p>

## VESNA SNE-ISMTV spectrum sensor

<p> For the purpose of spectrum sensing in ISM and TV bands VESNA platform has been complemented by a SNE-ISMTV sensor node extension (SNE) board. SNE-ISMTV adds general-purpose radio-frequency transceiver hardware to the VESNA wireless sensor node. This hardware is separate from the SNR (sensor node radio) transceiver used to connect VESNA nodes into a wireless sensor network. SNE-ISMTV can thus be used for cognitive radio experimentation without disrupting the back-channel network as long as any experimental transmissions are not overlapping with the frequency bands used by the SNR. SNE-ISMTV applications include for example spectrum sensing, continuous and packet-based signal transmission and reception with RSSI and link quality measurements, and IEEE 802.15.4 compatible networking experiments. Several models of the extension board are available covering different parts of the spectrum. Their capabilities differ slightly and are described in detail in the following subsections.</p>

<p>SNE-ISMTV radio hardware is based on commercial, low-cost, low-power, highly integrated transceivers that communicate with the core board using digital SPI or I2C buses. In all but one case (SNE-ISMTV-UHF low-range detection) all radio-frequency and base-band processing is done in the transceiver, freeing the VESNA SNC (sensor node core) microcontroller from signal processing tasks. In most cases, communication with the radio is abstracted in the form of various hardware registers with read and/or write access via digital buses. These registers can be used to reconfigure radio hardware (central frequency, channel filter bandwidth, modulation and demodulation settings, signal generation, etc.), send data for transmission or retrieve received data, retrieve measurement results and so on. While SNE-ISMTV does not include a true general-purpose software-defined radio architecture, the reconfigurability of the radio components still allows for a large range of use cases. <p>

<p> Manufacturers of the integrated circuits used in SNE-ISMTV do not support all of the possible transceiver hardware configurations that can be obtained through register access. In fact, due to implementation details radios may not perform to specification in certain combinations of settings. This means that each configuration usually requires testing and calibration in a controlled laboratory environment before it can be used for experiments in the field. To work around this shortcoming several tested and calibrated hardware profiles are provided for each SNE-ISMTV model that cover specific use cases and contain a fixed low-level radio configuration. <p>

<p>All models of the SNE-ISMTV carry two distinct transceivers:
			<ul class="list-group">
			  <li class="list-group-item">An IEEE 802.15.4 compatible transceiver operating on the European 868 MHz SRD (short range device) ISM frequency band based on Atmel AT86RF212 and </li>
			  <li class="list-group-item">another multipurpose radio operating in either UHF TV band, 868 MHz SRD/ISM band or 2.4 GHz ISM (industrial, scientific, medical) band, depending on the SNE-ISMTV model.</li>
			</ul>


## TV Spectrum sensing with SNE-ISMTV-UHF

<p>SNE-ISMTV-UHF contains a VHF and UHF TV band receiver based on the NXP TDA18219HN silicon tuner and was designed for spectrum sensing experimentation in TV white spaces. The TDA18219HN silicon tuner integrates a low-noise amplifier, RF tracking filters, single down-conversion low intermediate-frequency image-rejection mixer, frequency synthesizer and selectable channel filters. It also includes multiple stages of analogue automatic gain control (AGC). </p>

<p>Individual receiver stages can be reconfigured through a state machine with an I2C bus interface. Digital control logic also controls built-in test tone generator and RF filter calibration.</p>

<p>For energy detection SNE-ISMTV-UHF offers two detectors with a logarithmic response. A high-range detector is built into TDA18219HN and has a range from -80 to 0 dBm with 1 dBm resolution. The measurement is controlled via a state machine internal to TDA18219HN which is armed and triggered through the digital I2C bus. The measurement process includes signal averaging.</p>

<p>For measuring signals below -80 dBm, a demodulating logarithmic amplifier Analog Devices AD8307 is connected between the TDA18219HN intermediate frequency output and the 1 Msample/s analogue-to-digital converter on the VESNA SNC (sensor node core) as depicted in the figure below. This puts sampling of the signal power level in control of the firmware, allowing various averaging and sampling methods. Additionally, gain in the intermediate frequency stage can be adjusted via a variable-gain amplifier controlled by a digital-to-analogue converter (DAC) in the SNC.</p>
<p><img src="img/SNE-ISM-UHF_Block_Diagram.png"></p>

<p>To lower the power consumption, both the logarithmic amplifier (via ENB pin) and the tuner (via I<sup>2</sup>C sleep-mode control registers) can be powered down.</p>
<p>Two hardware profiles are provided that differ in energy detector resolution bandwidth. A wide-band setting sets the channel filter to 8 MHz, allowing energy detection at the bandwidth of a complete DVB-T channel. A narrow-band setting sets the channel filter to 1.7 MHz and is suitable for detection of wireless microphones and secondary users in the TV white spaces.</p>
<p>While TDA18219HN and the SNE-ISMTV designs allow operation down to 42&nbsp;MHz, there are currently no hardware profiles available for VHF frequency band.</p>
<p>Since it is based on a DVB-T tuner, this extension board is not capable of signal transmission in contrast to the extension boards SNE-ISMTV-TI868 and SNE-ISMTV-TI2400, as described in the following subsections.</p>
<p>The SNE-ISMTV-UHF spectrum sensing specifications are summarized in the table below.</p>
<p>&nbsp;</p>
		<table align="center" border="1" cellpadding="1" cellspacing="1" >
			<tbody>
				<tr>
					<td>Parameter</td>
					<td>Value</td>
					<td>Units</td>
					<td>Comment</td>
				</tr>
				<tr>
					<td>Frequency range &nbsp;</td>
					<td>470 to 862</td>
					<td>MHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Frequency resolution</td>
					<td>1</td>
					<td>kHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Local oscillator settle time</td>
					<td>5000</td>
					<td>us</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Channel filter bandwidth</td>
					<td>1700 8000</td>
					<td>kHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Power detector range</td>
					<td>-150 to 0</td>
					<td>dBm</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Power detector resolution</td>
					<td>1.000 0.032</td>
					<td>dB</td>
					<td>above -80 dBm below -80 dBm</td>
				</tr>
				<tr>
					<td>Power detector uncertainty</td>
					<td>1.76</td>
					<td>dBm</td>
					<td>CW at -90 dBm, no averaging</td>
				</tr>
				<tr>
					<td>Detector read-out time</td>
					<td>45000 1</td>
					<td>us</td>
					<td>above -80 dBm below -80 dBm <em>(see note 1)</em></td>
				</tr>
				<tr>
					<td>Average noise level (1 Hz bandwidth)</td>
					<td>-169 -165</td>
					<td>dBm</td>
					<td>at 650 MHz at 800 MHz</td>
				</tr>
				<tr>
					<td>Dynamic range</td>
					<td>60</td>
					<td>dB</td>
					<td>With total input power over the entire frequency range below -30 dBm.</td>
				</tr>
			</tbody>
		</table>

## 868 MHz ISM Sensing and transmission with&nbsp;SNE-ISMTV-TI868

<p>SNE-ISMTV-TI868 contains a sub-GHz transceiver based on the Texas Instruments CC1101. CC1101 contains a versatile radio-frequency tuner as well as a modem and packet handling hardware. It can be used for experiments in the European 868&nbsp;MHz SRD band or in the higher channels of the UHF TV band. It can act as a narrow-band energy detection spectrum sensing receiver, interferer with continuous test signal transmission or for packet transmission and reception in networking experiments.</p>
<p>The analogue receive path on CC1101 consists of a low-noise amplifier, quadrature down-converter and a channel filter. Additional filtering, gain control and demodulation are performed in the digital domain, after the signal has been digitized by an analogue-to-digital converter (ADC) at an intermediate frequency. A fractional-N PLL frequency synthesizer is used as a local oscillator. For transmission, the same synthesizer is used to produce a modulated quadrature signal which is amplified by a power amplifier stage. Antenna matching is performed by an external LC balun network.</p>
<p>Digital radio control logic allows reconfiguration of the frequency synthesizer settings (base frequency, channel spacing) and baseband channel filter bandwidth.</p>
<p>Baseband modulator and demodulator are capable of 2-FSK, 4-FSK, GFSK, MSK and ASK/OOK modulations. Continuous transmission and reception using these modulations is possible with data streamed via the SPI bus from the sensor node core (SNC) module. Additionally, a pseudo-random sequence generated in the transceiver itself can be used when transmitting in continuous mode, which can be used in interferer simulations.</p>
<p>For packet-based transmissions, integrated packet handling hardware implements a proprietary packet encapsulation scheme. It includes preamble and synchronization word detection, data integrity check using CRC, address filter and optional data whitening.</p>
<p>For energy detection, an integrated logarithmic-response detector can be used. Three hardware profiles are provided for it, covering the 868 MHz SRD band with different resolution bandwidths.</p>
<p>The spectrum sensing specifications of the module are summarized in the first table below, while the signal transmission specifications are provided in the second table. For signal transmission experiments, a hardware profile is provided simulating a 200 kHz wide-band FM wireless microphone in the UHF band with adjustable transmission power. Additionally, a profile of a short-range device is also available with transmission in the SRD band using 100% duty cycle.</p>
<p>Additional sensing or transmission profiles can be constructed using the SmartRF studio software provided by Texas Instruments.</p>
		<table border="1" cellpadding="1" cellspacing="1">
			<thead>
				<tr>
					<th scope="col">Parameter</th>
					<th scope="col">Value</th>
					<th scope="col">Units</th>
					<th scope="col">Comment</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Frequency range</td>
					<td>863 to 871</td>
					<td>MHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Frequency resolution</td>
					<td>50</td>
					<td>kHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Channel filter bandwidth</td>
					<td>60 100 200</td>
					<td>kHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Power detector range</td>
					<td>-123 to 4</td>
					<td>dBm</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Power detector resolution</td>
					<td>0.5</td>
					<td>dB</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Average noise level (1 Hz bandwidth)</td>
					<td>-150</td>
					<td>dBm</td>
					<td>at 868 MHz</td>
				</tr>
			</tbody>
		</table>
<p>&nbsp;</p>
		<table border="1" cellpadding="1" cellspacing="1">
			<thead>
				<tr>
					<th scope="col">Parameter</th>
					<th scope="col">Value</th>
					<th scope="col">Units</th>
					<th scope="col">Comment</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Frequency range</td>
					<td>780 to 862; 863 to 871</td>
					<td>MHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Frequency resolution</td>
					<td>200, 50</td>
					<td>kHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>FM deviation</td>
					<td>200, 50</td>
					<td>kHz</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Transmission power range</td>
					<td>-55 to 0</td>
					<td>dBm</td>
					<td>&nbsp;</td>
				</tr>
				<tr>
					<td>Transmission power resolution</td>
					<td>2</td>
					<td>dBm</td>
					<td>&nbsp;</td>
				</tr>
			</tbody>
		</table>

## 2.4 GHz ISM Sensing and transmission with&nbsp;SNE-ISMTV-TI24

<p>SNE-ISMTV-TI24 contains a 2.4 GHz transceiver based on the Texas Instruments CC2500. CC2500 contains a versatile radio-frequency tuner as well as a modem and packet handling hardware. It can be used for experiments in the international 2.4 GHz industrial, scientific, medical (ISM) band. It can act as a narrow-band energy detection spectrum sensing receiver, interferer with continuous test signal transmission or for packet transmission and reception in networking experiments.</p>
<p>Performance and capabilities of SNE-ISMTV-TI24 are very similar to SNE-ISMTV-TI868 since, as shown in Figure 12, CC2500 integrated circuit is very similar to CC1101. Both extension boards share the same pin-out as well as SPI register map, the only difference being in the settings for the analogue domain. Therefore the description of the SNE-ISMTV-TI868 given in Section 3.1.2also applies to SNE-ISMTV-TI24.</p>
<p>The spectrum sensing and signal transmission specifications are provided in the first table and the second table below. For energy detection spectrum sensing, a hardware profile is provided covering the frequencies used by IEEE 802.11b wireless LAN.</p>
<p>For interferer simulation, a hardware profile is provided for a continuous transmission of a 200 kHz FM signal with adjustable transmission power.</p>
<p>Additional sensing or transmission profiles can be constructed using the SmartRF studio software provided by Texas Instruments.</p>
<p>&nbsp;</p>
		<div>
			<table border="1" cellpadding="1" cellspacing="1">
				<thead>
					<tr>
						<th scope="col">Parameter</th>
						<th scope="col">Value</th>
						<th scope="col">Units</th>
						<th scope="col">Comment</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Frequency range</td>
						<td>2400 to 2480</td>
						<td>MHz</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Frequency resolution</td>
						<td>400</td>
						<td>kHz</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Channel filter bandwidth</td>
						<td>400</td>
						<td>kHz</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Power detector range</td>
						<td>-123 to 4</td>
						<td>dBm</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Power detector resolution</td>
						<td>0.5</td>
						<td>dB</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Average noise level (1 Hz bandwidth)</td>
						<td>-159</td>
						<td>dBm</td>
						<td>at 2400 MHz</td>
					</tr>
				</tbody>
			</table>
<p>&nbsp;</p>
			<table border="1" cellpadding="1" cellspacing="1">
				<thead>
					<tr>
						<th scope="col">Parameter</th>
						<th scope="col">Value</th>
						<th scope="col">Units</th>
						<th scope="col">Comment</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Frequency range</td>
						<td>2400 to 2459</td>
						<td>MHz</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Frequency resolution</td>
						<td>200</td>
						<td>kHz</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>FM deviation</td>
						<td>200</td>
						<td>kHz</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Transmission power range</td>
						<td>-55 to 0</td>
						<td>dBm</td>
						<td>&nbsp;</td>
					</tr>
					<tr>
						<td>Transmission power resolution</td>
						<td>2</td>
						<td>dBm</td>
						<td>&nbsp;</td>
					</tr>
				</tbody>
			</table>
		</div>
<p>&nbsp;</p>
