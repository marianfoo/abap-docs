  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_serial_deserial.htm) →  [ST - Flow Control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_flow_control.htm) →  [ST - tt:cond, Conditional Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20data%2C%20Assertions%2C%20ABENST_DATA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ST - data, Assertions

Syntax

... data="..." ...

Effect

The following assertions can be specified for the content of the attribute data of an element [tt:cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_cond.htm):

Assertion

Meaning

initial(node)

Met if the bound ABAP data object is initial

initial(var(variable))

Met if the variable is initial.

dnode*|*var(variable) = value, value = dnode*|*var(variable)

Met if the value of the connected ABAP data object or the variables corresponds to the value specified in value.

The operands of the assertions can be data nodes, variables, or values.

-   Data nodes node are specified in a [special form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_addressing_nodes_in_cond.htm).
-   Variables are specified in the form var(variable), where variable is a [variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_parameter.htm).
-   Values value are ABAP values in the associated [representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_abap_representation.htm).

An assertion can be specified as a comma-separated list of multiple of the above assertions. An assertion of this type is met if all assertions in the list are met. Within the list, every data node may appear only once.

Example

The element X that is defined in DEMO\_ST\_DATA1 is respected in serializations only if the ABAP data object bound to ROOT is 11.

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:template>
    <tt:s-cond data="ROOT=11">
      <X>
        <tt:value ref="ROOT"/>
      </X>
    </tt:s-cond>
  </tt:template>
</tt:transform>

The element X that is defined in DEMO\_ST\_DATA2 is respected in serializations only if the value of the ABAP data object bound to ROOT1 is initial and the value of the ABAP data object bound to ROOT2 is 22.

<?sap.transform simple?>
<tt:transform xmlns:tt="http://www.sap.com/transformation-templates">
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