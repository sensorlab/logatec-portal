title: Game-theoretical interference mitigation

<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->

# Game-theoretical interference mitigation

LOG-a-TEC is particularly suitable to investigate game-theoretical techniques in a realistic environment. The easy to use [API](https://github.com/sensorlab/vesna-alh-tools) and the existing [implementation of games](https://github.com/sensorlab/logatec-games) provide a low barrier for starting.

Currently there are two existing power allocation strategies that use a game theoretical framework that have been developed, adapted and evaluated on LOG-a-TEC. 

In the first one, the Proactive Power Allocation Game has been adapted and evaluated on the testbed. For more information, we refer the readers to the existing paper [Ciprian Anton, Andrei Toma, Ligia Cremene, Mihael Mohorcic and Carolina Fortuna: Power Allocation Game for Interference Mitigation in a Real-world Experimental Testbed, IEEE ICC 2014 - Cognitive Radio and Networks Symposium, June 2014](pdf/Anton_Power_Allocation_Game_Logatec_2014_corrected.pdf)
 and [existing code](https://github.com/sensorlab/logatec-games/tree/master/power_allocation_continuous). For trying it yourself, please request a LOG-a-TEC account and we'll be happy to support you.

In the second one, a completely new game has been proposed and evaluated on the testbed. This game is tailored for IoT/M2M systems which are able to only transmit with discrete power levels rather than with continuous ones. A short presentation of an experiment using this strategy is shown on the video below.

<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/KiyWKibBfm4?rel=0" frameborder="0" allowfullscreen></iframe>

For more information, we refer the readers to the [existing code](https://github.com/sensorlab/logatec-games/tree/master/power_allocation_discrete) while the paper reporting the findings will be posted as soon as it's accepted for publication. For trying it yourself, please request a LOG-a-TEC account and we'll be happy to support you.
