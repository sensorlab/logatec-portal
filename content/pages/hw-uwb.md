title: Ultra-Wideband Communications Node

# UWB Communications Node

## GENERAL DESCRIPTION
The SNPN-UWB board supports communication over IEEE 802.15.4-UWB short-range low-power ultra-wideband communication channels based on DecaWave DWM1000 UWB module. Communication with board can be established over several communication interfaces as UART, USB, I2C or SPI. It incorporates flexible power supply powering board with external 5 V, external 3.3 V, battery or powering it over USB connector.

<figure>
    <img src="img/hw/uwb/snpn_uwb.jpg" style="width:50%"><img src="img/hw/uwb/SNPN-UWB_Block_Diagram.jpg" style="width:50%">
    <figcaption>UWB node and its block diagram.</figcaption>
</figure>

## FEATURES
    • STM32F103RET6 ARM Cortex M3 microcontroller (512 kB FLASH, 64 kB RAM)
    • DWM1000 UWB radio module
    • Integrated shunt resistor with shunt amplifier (RF current monitoring)
    • Multiple source power supply:
        ◦ Battery ( 3.5 V < Vbat < 5.5 V )
        ◦ USB
        ◦ External 5 V on interface connector
        ◦ 3.3 V on interface connector
        ◦ JTAG connector
    • Communication interfaces:
        ◦ SPI
        ◦ I2C
        ◦ UART
        ◦ USB 2.0 full speed
    • Programming board with bootstrap loader over interface connector
    • Miniature design 32.5 mm x 40 mm (W,H)




