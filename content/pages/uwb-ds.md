title: UWB Localization

# UWB Localization Data Set</h1>
UWB localization data set contains measurements from four different indoor environments. The data set contains measurements that can be used for range-based localization evaluation in different indoor environments.

## Measurement system
The measurements were made using 9 DW1000 UWB transceivers (DWM1000 modules) connected to the networked RaspberryPi computer using in-house radio board SNPN_UWB. 8 nodes were used as localization anchor nodes with fixed locations in individual indoor environment and one node was used as a mobile localization tag.

Each UWB node is designed arround the RaspberryPi computer and are wirelessly connected to the measurement controller (e.g. laptop) using Wi-Fi and MQTT communication technologies.
 
<img alt="Figure 1 - Measurement system." src="img/system.png" />

## Measurement setup
All localization tag positions were generated beforehand to as closelly resemble the human walking path as possible. All walking path points are equally spaced to represent the equidistand samples of a walking path in a time-domain. On a Figure 2 there is an example of complete indoor localization measurement setup. Blue points represent tag positions and black crosses represent reference anchors positions. The sampled walking path (measurement TAG positions) are included in a downloadable data set file under downloads section.

<img alt="Figure 2 - Example of one measurement setup." src="img/measurement_setup.jpg" />

## Folder structure
Folder structure is represented below this text. Folder contains four subfolders named by the indoor environments measured during the measurement campaign. Each environment folder has a anchors.csv file with anchor names and locations, subfolder floorplan with floorplan.dxf (AutoCAD format) and floorplan.png, subfolder measurements and walking_path.csv file with tag measurement positions. Measurements subfolder contains subfolders named by the tag positions form the walking_path.csv. There is exactly the same number of folders in folder measurements as is the number of measurement points in the walking_path.csv. Each measurement subfolder contains 48 .csv files named by communication channel and anchor used for those measurements. For example: ch1_A1.csv contains all measurements at selected tag location with anchor A1 on UWB channel ch1.

  <ul>
    <li>apartment</li>
      <ul>
        <li>anchors.csv</li>
        <li>floorplan</li>
          <ul>
            <li>floorplan.dxf</li>
            <li>floorplan.png</li>
          </ul>
        <li>measurements</li>
          <ul>
            <li>1.07_9.37_1.2</li>
              <ul>
                <li>ch1_A1.csv</li>
                <li>ch7_A8.csv</li>
                <li>...</li>
              </ul>
            <li>1.37_9.34_1.2</li>
              <ul>
                <li>...</li>
              </ul>
            <li>...</li>
          </ul>
          <li>walking_path.csv</li>
      </ul>
    <li>house</li>
      <ul>
        <li>...</li>
      </ul>
    <li>industrial</li>
      <ul>
        <li>...</li>
      </ul>
    <li>office</li>
      <ul>
        <li>...</li>
      </ul>
  </ul>

## Data format
  Measurements are saved in .csv files. Each file starts with a header, where first line represents the version of the file and the second line represents the data column names. The column names have a missing column name. Actual column names included in the .csv files are:
  <ul>
    <li>TAG_ID</li>
    <li>ANCHOR_ID</li>
    <li>X_TAG</li>
    <li>Y_TAG</li>
    <li>Z_TAG</li>
    <li>X_ANCHOR</li>
    <li>Y_ANCHOR</li>
    <li>Z_ANCHOR</li>
    <li>NLOS</li>
    <li>RANGE</li>
    <li>FP_INDEX</li>
    <li>RSS</li>
    <li>RSS_FP</li>
    <li>FP_POINT1</li>
    <li>FP_POINT2</li>
    <li>FP_POINT3</li>
    <li>STDEV_NOISE</li>
    <li>CIR_POWER</li>
    <li>MAX_NOISE</li>
    <li>RXPACC</li>
    <li>CHANNEL_NUMBER</li>
    <li>FRAME_LENGTH</li>
    <li>PREAMBLE_LENGTH</li>
    <li>BITRATE</li>
    <li>PRFR</li>
    <li>PREAMBLE_CODE</li>
    <li>CIR (starts with this column; all columns until the end of the line represent the channel impulse response)</li>
  </ul>

## Download
Data set available for download: <a href="dataset-files/data.zip">.zip, 1.9 GB</a>

## Citation
If you are using our data set in your research, citation of the following paper would be greatly appreciated.

##### Plain text:
K. Bregar and M. Mohorčič, "Improving Indoor Localization Using Convolutional Neural Networks on Computationally Restricted Devices," in IEEE Access, vol. 6, pp. 17429-17441, 2018.
    doi: 10.1109/ACCESS.2018.2817800
    keywords: {Computational modeling;Convolutional neural networks;Distance measurement;Estimation;Heuristic algorithms;Performance evaluation;Prediction algorithms;Channel impulse response;convolutional neural network;deep learning;indoor localization;non-line-of-sight;ranging error mitigation;ultra-wide band},
    URL: http://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8320781&isnumber=8274985

##### BibTex:
  <span>@ARTICLE{8320781,</span></br>
  <span>author={K. Bregar and M. Mohorčič},</span></br>
  <span>journal={IEEE Access},</span></br>
  <span>title={Improving Indoor Localization Using Convolutional Neural Networks on Computationally Restricted Devices},</span></br>
  <span>year={2018},</span></br>
  <span>volume={6},</span></br>
  <span>number={},</span></br>
  <span>pages={17429-17441},</span></br>
  <span>keywords={Computational modeling;Convolutional neural networks;Distance measurement;Estimation;Heuristic algorithms;Performance evaluation;Prediction algorithms;Channel impulse response;convolutional neural network;deep learning;indoor localization;non-line-of-sight;ranging error mitigation;ultra-wide band},</span></br>
  <span>doi={10.1109/ACCESS.2018.2817800},</span></br>
  <span>ISSN={},</span></br>
  <span>month={},}</span></br>


## Authors and License
Author of data set in this repository is Klemen Bregar, klemen.bregar@ijs.si.
Copyright (C) 2020 SensorLab, Jožef Stefan Institute http://sensorlab.ijs.si

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.

## Funding
The research leading to these results has received funding from the European Horizon 2020 Programme project eWINE under grant agreement No. 688116.

