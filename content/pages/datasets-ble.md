title: BLE fingerprints

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# BLE Fingerprints

The dataset available on this page contains received signal strength (RSS) measurements made with Bluetooth Low Energy (BLE) technology, which can be used for outdoor fingerprinting based localization applications.

## Measurement setup

The dataset was collected with 25 [nodes](hw-lgtc.html) of the [LOG-a-TEC testbed](ap-cradio.html) positioned at the campus of the Jožef Stefan Institute, Ljubljana. The experimentation area is composed of 5x26 positions separated by 1.2m covering 150 square meters. On each position a mobile phone was broadcasting BLE advertising beacons with power of -2dBm in interval of 100ms. Surrounding testbed nodes were collecting the beacons for approximately a minute for each position.

<img alt="Figure 1 - Experimentation area." src="img/ble-dataset-area.png" />

## Dataset

Measurements are stored in *JSON* format where each object contains `rss` measurement (in $dBm$) with corresponding `timestamp` (in seconds). The folder contains two JSON files:

* spring.data.json - measurements made in May 2022.
* winter.data.json - smaller measurements made in December 2021. This dataset contains only the measurements from the middle row of the campus park.

Dataset available for download: <a href="dataset-files/ble-fingerprint.zip">.zip, 2.2 MB</a>


## License notice

Copyright (C) 2021 SensorLab, Jožef Stefan Institute, sensorlab@ijs.si.

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
