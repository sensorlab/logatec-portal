title: UWB Localization

# UWB Localization

UWB technology compliant with the IEEE 802.15.4 UWB standard provide some neat features that enable precise ranging functionality. Technology's superior temporal resolution enables precise time-of-flight (ToF) measurements and thus distance measurements between radio nodes in the wireless network. Existing UWB transceivers like DecaWave's DW1000 (now Qorvo) even provide a channel impulse response (CIR) information for each received UWB packet, which enables advanced channel state sensing techniques and assistance to the localization algorithms.

Narrowband RF localization technologies historically relied on RSS information which can be very unreliable in typical multipath indoor environments. UWB technology provides ranging measurements with centimeter range accuracy which significantly outperforms traditional RSS-based localization approaches.

## Range-Based Localization

Range-based localization (RBL) is based on measured ranges (distances) between the localization sensor nodes in the environment. RBL can be made in a relative manner, where sensor nodes are being located relative to other nodes in a local coordinate system, and in an absolute manner, where sensor nodes are being located by the localization nodes with absolute location coordinates in a geographical coordinate system (GPS coordinates).

### RBL Measurement Schemes
Different RBL schemes can be implemented using UWB radios based on different measurement approaches. Time-of-flight (ToF) measurement is the most basic ranging approach. The UWB packet at transmitter has to be timestamped precisely at the transmittion time and timestamped at the receiver to be able to calculate the time between the two timestamps. Each nanosecond of ToF error introduces additional (approximately) 30 cm ranging error. It requires both nodes involved in range measurement to have precisely synchronized local clocks to a shared global reference clock. This is typically impractical for tracking the battery-powered sensor devices because of high increases to the system complexity and increase in power consumption.

Another RBL scheme that is more suitable for localization of simple battery-powered sensor devices is a time-difference-of-arrival (TDoA) scheme, where typically reference localization nodes stand on a fixed reference location with known coordinates and are precisely synchronized with the global clock. The moving simple low-power sensor devices periodically transmit localization beacon messages without timestamps, where localization system with synchronised reference nodes receives the localization beacon and calculates the differences between the times of arrival of the localization beacon message at all reference localization nodes.

When there is no existing localization structure and quite simple devices need to measure ranges or want to estimate their location inside the ad-hoc sensor network, two-way ranging (TWR) range measurement approach is most suitable. TWR approach is based on measuring the ToF by timestamping the same UWB packet for two-way travel. UWB packet is timestamped at transmit time at the TWR innitiating node, then timestamped at receive time ta TWR responding device, then the packet gets transmitted and timestamped back from TWR responding device and lastly, it gets timestamped at receive time at TWR initiating device. By timestamping two-way travel of the packet the mismatch of local device clock gets eliminated and ToF can be calculating by halving the calculated TWR time.

### Multilateration
Multilateration is a technique for determining the device's position based on range measurements to or from multiple reference localization nodes. Each range d in 2D coordinate system can be written by the following equation, where xi and yi present the coordinates of reference nodes and x and y present the coordinates of the node with unknown location.
<figure>
    <img src="img/ap-uwbloc/di.png", style="width:50%;">
</figure>

Rewriting the equation gives us the following non-linear equation
<figure>
    <img src="img/ap-uwbloc/eq.png", style="width:50%;">
</figure>
which can be linearized and written in a matrix form as:
<figure>
    <img src="img/ap-uwbloc/phi_mat.png", style="width:50%;">
</figure>
where x and y are the coordinates we are estimating and R is a non-linear term (R=x^2+y^2) which we ignore in a linear estimation.

By using the linear least squares estimation, the over-defined system can be solved by using the following equation:
<figure>
    <img src="img/ap-uwbloc/phi.png", style="width:50%;">
</figure>
The system of equations can be solved if there is one range measurement to the reference node more than there is the selected environment dimensions. In case we use 2D coordinate system, we need at least 3 range measurements to the reference nodes that are not colinear (not deployed on a straight line).

Matrixes H and x are being determined by the following two equations:
<figure>
    <img src="img/ap-uwbloc/x.png", style="width:50%;">
</figure>
<figure>
    <img src="img/ap-uwbloc/h.png", style="width:50%;">
</figure>


## Improving Localization by Using Machine Learning


## Device-free Localization




# Publications
* K. Bregar and M. Mohorčič, "Improving Indoor Localization Using Convolutional Neural Networks on Computationally Restricted Devices," in IEEE Access, vol. 6, pp. 17429-17441, 2018, doi: 10.1109/ACCESS.2018.2817800.

* K. Bregar, A. Hrovat, M. Mohorčič and T. Javornik, "Self-Calibrated UWB based device-free indoor localization and activity detection approach," 2020 European Conference on Networks and Communications (EuCNC), Dubrovnik, Croatia, 2020, pp. 176-181, doi: 10.1109/EuCNC48522.2020.9200968.

* K. Bregar, R. Novak and M. Mohorčič, "Combining Measurements and Simulations for Evaluation of Tracking Algorithms," 2018 European Conference on Networks and Communications (EuCNC), Ljubljana, Slovenia, 2018, pp. 1-250, doi: 10.1109/EuCNC.2018.8442678.

* Bregar, K., Novak, R. & Mohorčič, M. Evaluation of range-based indoor tracking algorithms by merging simulation and measurements. J Wireless Com Network 2019, 173 (2019). https://doi.org/10.1186/s13638-019-1489-y

* K. Bregar, T. Javornik, A. Hrovat, M. Mohorčič and G. Kandus, "Passive Ultra-Wideband Coarse Localization and Activity Detection System for Assisted Living," 2019 23rd International Conference on Applied Electromagnetics and Communications (ICECOM), Dubrovnik, Croatia, 2019, pp. 1-5, doi: 10.1109/ICECOM48045.2019.9163624.

* K. Bregar, A. Hrovat, R. Novak and T. Javornik, "Channel impulse response based vehicle analysis in tunnels," 2019 13th European Conference on Antennas and Propagation (EuCAP), Krakow, Poland, 2019, pp. 1-5.
