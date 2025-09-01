  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_serial_deserial.htm) →  [ST - Reading and Writing Variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_variable_transformations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20tt%3Aread-write%2C%20Read%20or%20Write%20Variables%2C%20ABENST_TT_READ_WRITE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

ST - tt:read-write, Read or Write Variables

Syntax

<tt:read-write var="variable" *\[*type="type" *\[*length="len"*\]*
                                           *\[*decimals="dec"*\]**\]*
                              *\[*map="..."*\]*
                              *\[*minLength*|*maxLength="len"*\]*
                              *\[*xsd-type...*\]* />

Effect

The statement tt:read-write is a short form of the following two statements:

<tt:read var="variable" *\[*type="type" *\[*length="len"*\]*
                                     *\[*decimals="dec"*\]**\]*
                        *\[*map="..."*\]*
                        *\[*minLength*|*maxLength="len"*\]*
                        *\[*xsd-type...*\]* />

<tt:write var="variable" *\[*map="..."*\]*
                         *\[*minLength*|*maxLength="len"*\]*
                         *\[*xsd-type...*\]* />

Specifying tt:read-write has the same effect as the statements [tt:read](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_read.htm) and [tt:read](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_read.htm) listed one directly after the other.

The attribute type and the attributes length and decimals specified using this attribute are respected by tt:read only. As with tt:read, the attribute length can only be specified together with type.

Example

Serialization and Deserialization. In serializations, the variable VARI is assigned the values of the data object bound to ROOT and is written to XML using read-write. In deserializations, the value of the variable is read from XML and assigned to the data object bound to ROOT. The following example can be found as DEMO\_ST\_READ\_WRITE.

<?sap.transform simple?>
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
CALL TRANSFORMATION demo\_st\_read\_write
     SOURCE root = \`abcde\`
     RESULT XML xstr.
cl\_abap\_browser=>show\_xml( xml\_xstring = xstr ).
CALL TRANSFORMATION demo\_st\_read\_write
     SOURCE XML xstr
     RESULT root = str.

The result of the serialization is:

<X>abcde     </X>

The transformation is not [symmetrical](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_symmetry.htm), due to [minLength](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_length.htm). After deserialization, the string str has at least 10 places.