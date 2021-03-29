title: UWB Localization

# UWB Localization

UWB technology compliant with the **IEEE 802.15.4 UWB** standard provide some neat features that enable precise ranging functionality. Technology's superior temporal resolution enables precise **time-of-flight (ToF) measurements** and thus distance measurements between radio nodes in the wireless network. Existing UWB transceivers like **DecaWave's DW1000** (now Qorvo) even provide a **channel impulse response (CIR)** information for each received UWB packet, which enables advanced channel state sensing techniques and assistance to the localization algorithms.

Narrowband RF localization technologies historically relied on RSS information which can be very unreliable in typical multipath indoor environments. UWB technology provides ranging measurements with **centimeter range accuracy** which significantly outperforms traditional RSS-based localization approaches.

## Range-Based Localization

Range-based localization (RBL) is based on **measured ranges** (distances) between the localization sensor nodes in the environment. RBL can be made in a relative manner, where sensor nodes are being located **relative** to other nodes in a local coordinate system, and in an **absolute** manner, where sensor nodes are being located by the localization nodes with absolute location coordinates in a geographical coordinate system (GPS coordinates).

### RBL Measurement Schemes
Different RBL schemes can be implemented using UWB radios based on different measurement approaches. **Time-of-flight (ToF)** measurement is the most basic ranging approach. The UWB packet at transmitter has to be **timestamped precisely** at the transmit time and timestamped at the receiver to be able to calculate the time between the two timestamps. Each nanosecond of ToF error introduces additional (approximately) 30 cm ranging error. It requires both nodes involved in range measurement to have **precisely synchronized local clocks** to a shared global reference clock. This is typically impractical for tracking the battery-powered sensor devices because of high increases to the system complexity and increase in power consumption.

Another RBL scheme that is more suitable for localization of simple battery-powered sensor devices is a **time-difference-of-arrival (TDoA)** scheme, where typically reference localization nodes stand on a fixed reference location with known coordinates and are precisely synchronized with the global clock. The moving simple low-power sensor devices periodically transmit **localization beacon messages without timestamps**, where localization system with synchronized reference nodes receives the localization beacon and calculates the differences between the times of arrival of the localization beacon message at all reference localization nodes.

When there is no existing localization structure and quite simple devices need to measure ranges or want to estimate their location inside the ad-hoc sensor network, **two-way ranging (TWR)** range measurement approach is most suitable. TWR approach is based on **measuring the ToF** by timestamping the same UWB packet for **two-way travel**. UWB packet is timestamped at transmit time at the TWR initiating node, then timestamped at receive time ta TWR responding device, then the packet gets transmitted and timestamped back from TWR responding device and lastly, it gets timestamped at receive time at TWR initiating device. By timestamping two-way travel of the packet **the mismatch of local device clock gets eliminated** and ToF can be calculating by halving the calculated TWR time.

### Multilateration
Multilateration is a technique for determining the device's position based on range measurements to or from multiple reference localization nodes. Each range d in 2D coordinate system can be written by the following equation, where xi and yi present the coordinates of reference nodes and x and y present the coordinates of the node with unknown location.
<figure>
    <img src="img/ap-uwbloc/di.png", style="width:50%;">
</figure>

Rewriting the equation gives us the following non-linear equation
<figure>
    <img src="img/ap-uwbloc/eq.png", style="width:70%;">
</figure>
which can be linearized and written in a matrix form as:
<figure>
    <img src="img/ap-uwbloc/phi_mat.png", style="width:35%;">
</figure>
where x and y are the coordinates we are estimating and R is a non-linear term (R=x^2+y^2) which we ignore in a linear estimation.

By using the linear least squares estimation, the over-defined system can be solved by using the following equation:
<figure>
    <img src="img/ap-uwbloc/phi.png", style="width:40%;">
</figure>
The system of equations can be solved if there is one range measurement to the reference node more than there is the selected environment dimensions. In case we use 2D coordinate system, we need at least 3 range measurements to the reference nodes that are not colinear (not deployed on a straight line).

Matrixes H and x are being determined by the following two equations:
<figure>
    <img src="img/ap-uwbloc/x.png", style="width:35%;">
</figure>
<figure>
    <img src="img/ap-uwbloc/h.png", style="width:40%;">
</figure>


## Improving Localization by Using Machine Learning
Performance of RBL systems depends mostly on **ranging accuracy**. In line-of-sight (LoS) conditions, UWB signals propagate with a constant speed without obstructions, where the leading edge of the received signal (start of the channel impulse response (CIR)) represents the shortest path of the radio signal between the transmitter and the receiver. The accuracy and precision of the ranging process therefore depends exclusively on the UWB system temporal resolution (higher bandwidth means higher temporal resolution) and hardware-dependent resolution limitations (e.g. sampling frequency.). Radio signals can in many cases extend the coverage region into the area of **non-line-of-sight (NLoS)** situations, because the radio signals can propagate through many materials and propagate also just by the reflections. RF signals propagate through materials with **different propagation speeds**. In the vacuum, the propagation speed of RF signals is equal to light speed, where in other materials, the **propagation speed is lower**. The signal propagation speed is **inversely proportional to the material permittivity** (the higher the permittivity, lower the propagation speed). Ranging technique is based on premise that RF signal propagation speed is constant and equal to the propagation speed of RF signal in vacuum. In a case, when the leading edge of the signal is presented by the reflected signal or by the signal that already propagated through a wall, the **estimated range is greater** due to the longer propagation time compared to the unobstructed transmission path in a vacuum.

In most of the cases of NLoS propagation CIR has different characteristics than CIRs in the LoS situations. A comparison of LoS and NLoS signals is presented in the following figure:
<figure>
    <img src="img/ap-uwbloc/los_nlos.png">
</figure>
First image presents a **clear LoS signal**, where the leading edge is steep and short with greater peak signal strength. The second example presents the **NLoS signal**, where the shortest signal path is attenuated by the propagation through the wall and the peak presents the strongest reflected path which is able to reach the receiver without the propagation through the walls. The last example shows a situation, where all received signal components passed the wall and are more attenuated compared to the LoS signal with less steep leading edge compared to the LoS signal.

If the CIR information is combined with the information of **ranging error and Los/NLoS information**, a useful ranging error and **NLoS classification models** can be built using traditional machine learning or deep learning approaches. We used CIR classification and **ranging error estimation** approaches to improve localization accuracy in indoor environments. For LoS/NLoS classification we used a data set that includes the CIR, range and LoS/NLoS information for building the NLoS classification model. By estimating the NLoS situation, NLoS ranges can be eliminated from the localization procedure and therefore the localization accuracy improved.

Another approach for localization accuracy improvement was to estimate the ranging errors based on the CIR and ranging error information. A [data set](http://log-a-tec.eu/uwb-ds.html) for this purpose was generated and the impact of the ranging error on the localization error significantly reduced.

## Device-free Localization
RBL schemes require the localization object, being a person or a thing, is equipped with the active localization device that actively participate in the localization communication network. In assisted living (AL) scenarios the requirement for wearing a special device is typically unpopular because taking care of another device presents a burden nobody wants to bear. It also imposes the risk the active localization device will stay forgotten somewhere in the living area thus resulting location not reflecting in any way being connected to the actual person's location. Passive or device-free localization (DFL) systems can eliminate those shortcomings by trading the localization accuracy and system complexity for reliability. 

One of the notable RF DFL approaches is **RF tomography imaging (RTI)**. It exploits the concepts used in medicine and geophysics known as computed tomography (CT) where instead of X-rays RF tomography uses RF signals. It **mathematically reconstructs the propagation medium structure** based on the analysis of a signal propagation in the selected area. One of the possible approaches to reconstruct a propagation medium is known as **shadowing or attenuation-based model**. It is based on calculating the difference between channel measurements during the offline calibration and online operation. Changes in link attenuations of the monitored area are modeled as 
<figure>
    <img src="img/ap-uwbloc/ywxn.png", style="width:35%;">
</figure>
where y is an L x N vector with the measured attenuation of L links, W is an N x L weighting matrix, ∆𝒏 is a noise vector of the links while x is the N x 1 image vector which is going to be approximated by the RTI algorithm. Each column in the weighting matrix W represents a single pixel, while the value in each row presents a weighting factor for each pixel on a corresponding link. 

Each link is defined by an ellipse with foci at the communicating nodes and determines the locations affecting the link. The elliptical model is a severe simplification of the actual sensitivity area of a corresponding RF link. Since a single solution of previous equation does not exist, it is approximated by the maximum a posteriori (MAP) approximation presented by the following
<figure>
    <img src="img/ap-uwbloc/xmap.png", style="width:70%;">
</figure>
where Cx is an a priori covariance matrix with x as a zero-mean Gaussian random field and 𝜎 as noise variance. Those two terms are used for regularization. 

An example of RTI experiment is presented by the following image, where the room is equipped with 8 UWB radios measuring changes in the propagation medium (left image) and processes the reconstruction of the environment where one person is present (right image).
<figure>
    <img src="img/ap-uwbloc/tomography.png">
</figure>


# Publications
* K. Bregar and M. Mohorčič, "Improving Indoor Localization Using Convolutional Neural Networks on Computationally Restricted Devices," in IEEE Access, vol. 6, pp. 17429-17441, 2018, doi: 10.1109/ACCESS.2018.2817800.

* K. Bregar, A. Hrovat, M. Mohorčič and T. Javornik, "Self-Calibrated UWB based device-free indoor localization and activity detection approach," 2020 European Conference on Networks and Communications (EuCNC), Dubrovnik, Croatia, 2020, pp. 176-181, doi: 10.1109/EuCNC48522.2020.9200968.

* K. Bregar, R. Novak and M. Mohorčič, "Combining Measurements and Simulations for Evaluation of Tracking Algorithms," 2018 European Conference on Networks and Communications (EuCNC), Ljubljana, Slovenia, 2018, pp. 1-250, doi: 10.1109/EuCNC.2018.8442678.

* BREGAR, Klemen, HROVAT, Andrej, MOHORČIČ, Mihael. NLOS channel detection with multilayer perceptron in low - rate personal area networks for indoor localization accuracy improvement. V: PAVLIN, Majda (ur.), et al. Zbornik : 1. del = Proceedings : part 1. Ljubljana: Mednarodna podiplomska šola Jožefa Stefana, 2016. Str. 130-139. ISBN 978-961-94034-0-2. http://ipssc.mps.si/2016/Proceedings8_IPSSC_2016_Part1.pdf. [COBISS.SI-ID 29537575] 

* Bregar, K., Novak, R. & Mohorčič, M. Evaluation of range-based indoor tracking algorithms by merging simulation and measurements. J Wireless Com Network 2019, 173 (2019). https://doi.org/10.1186/s13638-019-1489-y

* K. Bregar, T. Javornik, A. Hrovat, M. Mohorčič and G. Kandus, "Passive Ultra-Wideband Coarse Localization and Activity Detection System for Assisted Living," 2019 23rd International Conference on Applied Electromagnetics and Communications (ICECOM), Dubrovnik, Croatia, 2019, pp. 1-5, doi: 10.1109/ICECOM48045.2019.9163624.

* K. Bregar, A. Hrovat, R. Novak and T. Javornik, "Channel impulse response based vehicle analysis in tunnels," 2019 13th European Conference on Antennas and Propagation (EuCAP), Krakow, Poland, 2019, pp. 1-5.
