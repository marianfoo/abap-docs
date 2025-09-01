  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) →  [ST - Reading and Writing Variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_variable_transformations.htm) → 

ST - tt:write, Write Variables

Syntax

<tt:write var="variable" *\[*map="..."*\]*
                         *\[*length*|*minLength="len"*\]*
                         *\[*xsd-type...*\]* />

Effect

The command tt:write writes the value of a [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_variable.htm) or [parameter](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_parameter.htm) to the target XML data.

variable is used to specify the variable to be written or to specify a parameter. The same applies to the attributes map, length, and minLength and to xsd-type... as to the statement [tt:value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm). The variable must represent an elementary value.

Serialization

The value of the variable (the parameter) is inserted into the XML data at the position of the command (if applicable, after map). Depending on the type of the variable or parameter, a mapping takes place in accordance with the [asXML format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm).

Deserialization

The tt:write command is ignored in deserializations.

Example

Serializes the start value of a variable.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:variable name="VARI" val="333" />
  <tt:template>
    <X>
      <tt:write var="VARI"/>
    </X>
  </tt:template>
</tt:transform>

The result of the serialization is:

<X>333</X>