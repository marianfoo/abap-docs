  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [ST - Simple Transformations](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Reading and Writing Variables](javascript:call_link\('abenst_variable_transformations.htm'\)) → 

ST - tt:read-write, Read or Write Variables

Syntax

<tt:read-write var="variable" *\[*type="type" *\[*length="len"*\]*
                                           *\[*decimals="dec"*\]**\]*
                              *\[*map="..."*\]*
                              *\[*minLength*|*maxLength="len"*\]*
                              *\[*xsd-type...*\]* />

Effect

The command tt:read-write is a short form of the following two statements:

<tt:read var="variable" *\[*type="type" *\[*length="len"*\]*
                                     *\[*decimals="dec"*\]**\]*
                        *\[*map="..."*\]*
                        *\[*minLength*|*maxLength="len"*\]*
                        *\[*xsd-type...*\]* />

<tt:write var="variable" *\[*map="..."*\]*
                         *\[*minLength*|*maxLength="len"*\]*
                         *\[*xsd-type...*\]* />

Specifying tt:read-write has the same effect as the statements [tt:read](javascript:call_link\('abenst_tt_read.htm'\)) and [tt:read](javascript:call_link\('abenst_tt_read.htm'\)) specified one directly after the other.

The attribute type and the attributes length and decimals specified using this attribute are used by tt:read only. As with tt:read, the attribute length can only be specified together with type.

Example

Serialization and Deserialization Using a Variable In serializations, the variable VARI is assigned the values of the data object bound to ROOT and is written to XML using read-write. In deserializations, the value of the variable is read from XML and assigned to the data object bound to ROOT.

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="ROOT"/>
  <tt:variable name="VARI"/>
  <tt:template>
    <tt:assign ref="ROOT" to-var="VARI"/>
    <X>
      <tt:read-write var="VARI" type="STRING"
                                minLength="10"/>
    </X>
    <tt:assign to-ref="ROOT" var="VARI"/>
  </tt:template>
</tt:transform>

The following ABAP program can call the transformation:

DATA  str TYPE string.
DATA xstr TYPE xstring.
CALL TRANSFORMATION kellerh\_test
     SOURCE root = string\`abcde\`
     RESULT XML xstr.
cl\_abap\_browser=>show\_xml( xml\_xstring = xstr ).
CALL TRANSFORMATION kellerh\_test
     SOURCE XML xstr
     RESULT root = str.

The result of the serialization is:

<X>abcde     </X>

The transformation is not [symmetrical](javascript:call_link\('abenst_symmetry.htm'\)), due to [minLength](javascript:call_link\('abenst_length.htm'\)). After deserialization, the string str has at least 10 places.