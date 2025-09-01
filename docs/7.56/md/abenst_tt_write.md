  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Reading and Writing Variables](javascript:call_link\('abenst_variable_transformations.htm'\)) → 

ST - tt:write, Write Variables

Syntax

<tt:write var="variable" *\[*map="..."*\]*
                         *\[*length*|*minLength="len"*\]*
                         *\[*xsd-type...*\]* />

Effect

The statement tt:write enables the writing of the value of a [variable](javascript:call_link\('abenst_tt_variable.htm'\)) or [parameter](javascript:call_link\('abenst_tt_parameter.htm'\)) to the target XML data.

variable is used to specify the variable to be written or to specify a parameter. The same applies to the attributes map, length, and minLength and to xsd-type... as to the statement [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)). The variable must represent an elementary value.

Serialization

The value of the variable or the parameter is inserted into the XML data at the position of the statement, optionally according to the mapping list behind map. Depending on the type of the variable or parameter, a mapping takes place in accordance with the [asXML format](javascript:call_link\('abenabap_xslt_asxml.htm'\)).

Deserialization

The tt:write statement is ignored in deserializations.

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