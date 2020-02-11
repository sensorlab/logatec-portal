title: Datasets

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# Datasets

Various datasets produced by SensorLab are available on this page.

## License notice

Copyright (C) 2019 SensorLab, Jožef Stefan Institute <a href="http://sensorlab.ijs.si">http://sensorlab.ijs.si</a>

All datasets listed below are licensed under the <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)</a> license.

## Dataset: ws_traffic_20170606

A dataset containing 24 hours of continuous spectrum measurements. A proprietary spectrum sensing device placed on top of a building in a mid-sized European city recorded 5 PSD measurements per second using 1024 FFT bins in a 192 kHz wide band inside the unlicensed European 868 MHz SRD band.

Data are stored in *JSONL* format with an object on each line having the following properties: `Time` (ISO 8691 datetime format, *yyyy-mm-ddThh:mm:ss.ffffff*) and `Measurements` (array of power measurements in dBm).

Provided are also transmission labels from two experts, 4 sets with various `noise_cutoff` thresholds per expert. For more information on these files see the labeling tool's documentation below.

* Dataset download: <a href="dataset-files/ws_traffic_20170606.zip">ws_traffic_20170606.zip</a>
* Labeling tool: <a href="https://github.com/sensorlab/spectrum-labeling-tool">https://github.com/sensorlab/spectrum-labeling-tool</a>

If you use this dataset or tool in your research, citation of the following paper, which also provides additional details about the dataset and the labeling tool, would be greatly appreciated:

<a href="https://ieeexplore.ieee.org/abstract/document/8977513">Timotej Gale, Tomaž Šolc, Rares-Andrei Moşoi, Mihael Mohorčič, and Carolina Fortuna. "Automatic Detection of Wireless Transmissions." *IEEE Access*, vol. 8, pp. 24370-24384, 2020.</a>