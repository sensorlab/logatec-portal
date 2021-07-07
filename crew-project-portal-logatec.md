<meta charset="utf-8">

# LOG-a-TEC

(http://www.crew-project.eu/portal/logatec)

## Short testbed description

<a href="http://log-a-tec.eu/">LOG-a-TEC</a> is an outdoor experimental facility supporting cognitive radio networking experimentation in ISM and TV bands.  The testbed consists of several clusters of wireless sensor nodes located in the municipality of Logatec, Slovenia and at the Jožef Stefan Institute campus. Clusters in the Logatec municipality cover approximately 350.000 m<sup>2</sup> of public space that includes the city center and an industrial zone. Clusters at the JSI campus cover approximately 3000 m<sup>2</sup> of in-door and out-door space. LOG-a-TEC is equipped with approximately 70 VESNA platforms and SNE-ISMTV reconfigurable radio boards. 

The [VESNA](http://log-a-tec.eu/hw-vesna.html) platform is a modular and fully flexible platform developed at the SensorLab at the Jožef Stefan Institute and is based on a high-performance microcontroller with ARM Cortex-M3. The SNE-ISMTV expansion permits experimentation in ISM 868 MHz, ISM 2.4 GHz and UHF 42 – 870 MHz frequency bands. Each node is also equipped with a 2 GB microSD card for storing predefined measurement configurations as well as measurement results. Each node is remote accessibile over the Internet via a wireless management network and a REST API.

The testbed can be operated remotely through the LOG-a-TEC web portal. The user can select a cluster of VESNAs and configure them to perform sensing and/or transmission. As a result, the testbed is able to support sensing only experiments, transmission only experiments and also transmission based on sensing results. The LOG-a-TEC web portal uses the <a href="http://www-e6.ijs.si/en/software/grass-raplat">GRASS-RaPlaT</a> tool in order to (i) to provide the virtual experiment planning via simulation in order to ascertain the best setup before the actual execution in the testbed as well as (ii) to support the postprocessing and visualization of experimentation results.

## Example experiments

Various experiments can be performed using the LOG-a-TEC infrastructure, for example:

 * Investigating different RF interference detection techniques, e.g. distributed vs. centralized detection.
 * Exploring different interference mitigation techniques, such as adaptive power control.

## Access information

LOG-a-TEC is accessible via a web-interface. Experimenters can install pre-defined firmware on one or more sensor nodes, receive status information, download experiment traces, and interact with individual nodes during an experiment. Also custom firmware can be installed but needs to first be approved. Before running an experiment, the GRASS-RaPlaT tool can be used for simulation. The same tool can be used later to visualize the results of an experiment.
  
## Demonstration

* <a href="http://www.crew-project.eu/sites/default/files/LOG-a-TEC_Portal_Tutorial.pdf">Tutorial about the LOG-a-TEC portal</a>
* <a href="http://www.crew-project.eu/sites/default/files/GRASS-RaPlaT_for_experiment_planning_and_visualization_of_measurements.pdf">Description of the GRASS RaPlaT simulation and visualization functionality</a>
* <a href="http://www.crew-project.eu/content/vesna-spectrum-sensing-ism-24ghz">Description of a ISM 2.4 GHz spectrum sensing experiment</a>
 
## Getting started and user documentation

[Access the complete documentation](http://www.log-a-tec.eu/overview.html)
