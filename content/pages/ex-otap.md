title: Over-the-air programing

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# Over-the-air programming

The software running on wireless testbeds and IoT/M2M devices has to be updated and upgraded frequently. the most practical way of doing this is over the air. From the perspective of software upgrades, we identify three types of required updates: OS/firmware upgrades, driver updates and application updates. OS/firmware upgrades are expected to occur when new versions of these software are released or when a major flaw is discovered and needs immediate fixing. The frequency of these upgrades is expected to be of 3-4 per year at most for both use cases. From the perspective of the size of the code to be transfered over the air to the nodes of the testbed, these upgrades tend to be large.

The driver updates are also expected to be required at most few times per year for Monitoring-UCes and for most instances of the Experimentation-UCes. However, for experimental setups that involve MAC layer experiments, the need for upgrades might be more frequent. In many cases, these upgrades can be achieved using dynamic linking, thus avoiding the need for realizing an OS/firmware upgrade. In such cases, the file sent to the nodes of the testbed is relatively small compared to the full OS/firmware image.

The expected application updates vary a lot across testbeds. The more flexible and generic the testbed is, the higher the number of expected application updates. These updates are best performed using dynamic linking and in most cases their expected size is relatively small. Performing a full OS/firmware upload for each application tends to be uneconomical.

Together with our partners from [XLab](http://www.xlab.si/?lang=en), we are evaluating the tradeoffs involved in over the air reprogramming of constrained devices. Preliminary results have been reported in the following paper: [Justin Cinkelj, Adnan Bekan, Marjan Sterk, Mihael Mohorcic, Carolina Fortuna: Design Trade-offs for the Wireless Management Networks of Constrained Device Testbeds, 11th International Symposium on Wireless Communication Systems - (ISWCS'14), Barcelona, Spain, August 2014](http://sensorlab.ijs.si/files/publications/Cinkelj_Design_Trade-offs_for_the_Wireless_Management_Networks_of_Constraint_Device_Testbeds_update.pdf).
