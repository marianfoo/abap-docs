  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Flow Control](javascript:call_link\('abenst_flow_control.htm'\)) →  [ST - tt:cond, Conditional Transformations](javascript:call_link\('abenst_tt_cond.htm'\)) → 

ST - data, Assertions

Syntax

... data="..." ...

Effect

The following assertions can be specified for the content of the attribute data of an element [tt:cond](javascript:call_link\('abenst_tt_cond.htm'\)):

Assertion

Meaning

initial(node)

Met if the bound ABAP data object is initial

initial(var(variable))

Met if the variable is initial.

dnode*|*var(variable) = value, value = dnode*|*var(variable)

Met if the value of the connected ABAP data object or the variables corresponds to the value specified in value.

The operands of the assertions can be data nodes, variables, or values.

-   Data nodes node are specified in a [special form](javascript:call_link\('abenst_addressing_nodes_in_cond.htm'\)).

-   Variables are specified in the form var(variable), where variable is a [variable](javascript:call_link\('abenst_tt_variable.htm'\)) or a [parameter](javascript:call_link\('abenst_tt_parameter.htm'\)).

-   Values value are ABAP values in the associated [display format](javascript:call_link\('abenst_abap_representation.htm'\)).

An assertion can be specified as a list of more than one of the above assertions, separated by commas. An assertion of this type is met if all assertions in the list are met. Within the list, every data node may appear only once.

Example

The element X is respected in serializations only if the ABAP data object bound to ROOT is 11.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tt:s-cond data="ROOT=11">
      <X>
        <tt:value ref="ROOT" />
      </X>
    </tt:s-cond>
  </tt:template>
</tt:transform>

The element X is respected in serializations only if the value of the ABAP data object bound to ROOT1 is initial and the value of the ABAP data object bound to ROOT2 is 22.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT1"/>
  <tt:root name="ROOT2"/>
  <tt:template>
    <tt:s-cond data="initial(ROOT1),ROOT2=22">
      <X>
        ...
      </X>
    </tt:s-cond>
  </tt:template>
</tt:transform>