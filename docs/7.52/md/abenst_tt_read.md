  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) →  [ST - Reading and Writing Variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_variable_transformations.htm) → 

ST - tt:read, Read Variables

Syntax

<tt:read var="variable" *\[*type="type" *\[*length="len"*\]*
                                     *\[*decimals="dec"*\]**\]*
                        *\[*map="..."*\]*
                        *\[*minLength*|*maxLength="len"*\]*
                        *\[*xsd-type...*\]* />

Effect

The command tt:read makes it possible to read a value of the XML inbound stream into a [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_variable.htm) or a [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_parameter.htm):

variable is used to specify the variable or a parameter into which the value is read. The same applies to the attributes map, minLength, and maxLength plus xsd-type as to the statement [tt:value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) (however tt:read always ignores minLength).

The other attributes are used to specify the expected type. In the statement tt:read, only elementary ABAP types can be specified, which can partly be generic. The syntax of this is the same as for the statement [tt:type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_type.htm). The value read must match the specified type and the value must be in the correct ABAP value range. Otherwise an exception is raised

Serialization

The command tt:read is ignored in serializations.

Deserialization

If no type conflict occurs, the variable or parameter is set to the value of the current position in the inbound stream (after map if applicable). Depending on the type of the variable or parameter, a mapping takes place in accordance with the [asXML format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm).

Example

Deserialization of a value into a variable.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:variable name="VARI"/>
  <tt:template>
    <X>
      <tt:read var="VARI" type="I" />
    </X>
    <tt:assign to-ref="ROOT" var="VARI"/>
  </tt:template>
</tt:transform>

If the XML fragment in question is <X>333</X>, the data object bound to the data root ROOT has the value 333 after deserialization due to the assignment using [tt:assign](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_assign.htm).