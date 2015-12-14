<!-- vim: linebreak filetype=markdown expandtab ts=4 sw=4
-->
<meta charset="utf-8">

## URLs, URNs and RSpecs

### Aggregate Manager URLs
AM v3 is accessible through: `https://log-a-tec.ijs.si:12346`

The URN of the component manager is: `urn:publicid:IDN+log-a-tec+authority+cm`

### Nodes
The advertised nodes are SCCs - Sensor Cluster Controllers, each providing access to a particular [VESNA sensor cluster](cr.html#locations).

Currently, two VESNA sensor clusters are supported, both in the town of Logatec, one in the city center and another in the industrial zone.

A VESNA sensor cluster can only be used as a whole and exclusively by a single user. Therefore, its SCC is allocated and provided exclusively. SCC can be imagined as a physical Linux node, although it is actually implemented as a user account on a Linux machine (Ubuntu 14.04).

### Example Advertisement RSpec

    <rspec expires="2015-12-08T12:10:41Z" generated="2015-12-08T11:10:41Z"
        type="advertisement" xmlns="http://www.geni.net/resources/rspec/3"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.geni.net/resources/rspec/3 http://www.geni.net/resources/rspec/3/ad.xsd">
        <node
            component_id="urn:publicid:IDN+log-a-tec:tb1+node+lgt-city.log-a-tec.ijs.si"
            component_manager_id="urn:publicid:IDN+log-a-tec+authority+cm"
            component_name="lgt-city.log-a-tec.ijs.si" exclusive="true">
            <hardware_type name="log-a-tec-pc"/>
            <location country="SI" latitude="45.917082" longitude="14.228558"/>
            <available now="true"/>
            <sliver_type name="log-a-tec-cluster"/>
        </node>
        <node
            component_id="urn:publicid:IDN+log-a-tec:tb1+node+lgt-industrial.log-a-tec.ijs.si"
            component_manager_id="urn:publicid:IDN+log-a-tec+authority+cm"
            component_name="lgt-industrial.log-a-tec.ijs.si" exclusive="true">
            <hardware_type name="log-a-tec-pc"/>
            <location country="SI" latitude="45.917082" longitude="14.228558"/>
            <available now="true"/>
            <sliver_type name="log-a-tec-cluster"/>
        </node>
    </rspec>    

### Example Request RSpec
    <rspec type="request" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.geni.net/resources/rspec/3" xsi:schemaLocation="http://www.geni.net/resources/rspec/3 http://www.geni.net/resources/rspec/3/request.xsd">
      <node client_id="node1" component_manager_id="urn:publicid:IDN+log-a-tec+authority+cm" component_id="urn:publicid:IDN+log-a-tec:tb1+node+lgt-city.log-a-tec.ijs.si" exclusive="true" component_name="lgt-city.log-a-tec.ijs.si">
        <sliver_type name="log-a-tec-cluster"/>
      </node>
    </rspec> 



### Example Manifest RSpec
    <?xml version="1.0"?>
    <rspec xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.geni.net/resources/rspec/3" xmlns:ssh-user="http://www.geni.net/resources/rspec/ext/user/1" type="manifest" xsi:schemaLocation="http://www.geni.net/resources/rspec/3 http://www.geni.net/resources/rspec/3/manifest.xsd" expires="2016-01-07T11:33:50Z" generated="2015-12-08T11:33:50Z">
      <node component_manager_id="urn:publicid:IDN+log-a-tec+authority+cm" component_id="urn:publicid:IDN+log-a-tec:tb1+node+lgt-city.log-a-tec.ijs.si" client_id="node1" sliver_id="urn:publicid:IDN+log-a-tec+sliver+33-1" exclusive="true" component_name="lgt-city.log-a-tec.ijs.si">
        <hardware_type name="log-a-tec-pc"/>
        <location country="SI" longitude="14.228558" latitude="45.917082"/>
        <services>
          <login authentication="ssh-keys" hostname="lgt-city.log-a-tec.ijs.si" port="22" username="userlgt01"/>
        </services>
        <sliver_type name="log-a-tec-cluster"/>
      </node>
    </rspec>   



