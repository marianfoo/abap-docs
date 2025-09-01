  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) →  [ST - tt:value, Elementary Data Objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) → 

ST - xsd-type, Validation

Syntax

... xsd-type="type"
   *\[*xsd-maxInclusive="max"*\]*
   *\[*xsd-maxExclusive ="max"*\]*
   *\[*xsd-minInclusive="min"*\]*
   *\[*xsd-minExclusive ="min"*\]*
   *\[*xsd-totalDigits="dgts"*\]*
   *\[*xsd-fractionDigits="dgts"*\]* ...

Effect

These attributes can be used with [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), and [tt:write](javascript:call_link\('abenst_tt_write.htm'\)) and [tt:read](javascript:call_link\('abenst_tt_read.htm'\)) to validate the value.

You can use the attribute xsd-type to specify an XML schema data type type. The serialized or deserialized value must be in the value range of this type. If not, an exception of the class CX\_ST\_VALIDATION\_ERROR is raised, which is not caught directly but by using CX\_ST\_SERIALIZATION\_ERROR, CX\_ST\_DESERIALIZATION\_ERROR, and its superclasses instead. The following subtypes of xsd:decimal can be specified for type:

xsd:byte, xsd:decimal, xsd:int, xsd:integer, xsd:long, xsd:negativeInteger, xsd:nonNegativeInteger, xsd:nonPosistiveInteger, xsd:positiveInteger, xsd:short, xsd:unsignedByte, xsd:unsignedInt, xsd:unsignedLong, and xsd:unsignedShort.

Together with the attribute xsd-type, the following "constraining facets" allowed by the XML schema can be specified as further attributes:

-   xsd-maxInclusive, xsd-maxExclusive

The value must be less equal to or less than max. max must be in the value range of the XML schema data type and cannot be less than a simultaneous lower limit min.

-   xsd-minInclusive, xsd-minExclusive

The value must be greater than or equal to or greater than min. min must be in the value range of the XML schema data type and cannot be greater than a simultaneous upper limit max.

-   xsd-totalDigits, fractionDigits

The value can have a maximum of dgts digits or decimal places. dgts must fit the other restrictions.

After the transformation from ABAP, serializations perform the validation to XML. Before the transformation from XML, deserializations perform the validation to ABAP. In both cases, the data type of the bound ABAP data object is ignored.

Example

Serialization of ABAP Data with Validation

<tt:transform
  xmlns:tt="http://www.sap.com/transformation-templates">
  <tt:root name="NUM"/>
  <tt:template>
    <Number>
      <tt:value ref="NUM"
          xsd-type="short" xsd-minInclusive="30000"/>
    </Number>
  </tt:template>
</tt:transform>

The transformation only accepts numbers between 30000 and 32767. The following ABAP program calls the transformation and catches the validation exceptions.

PARAMETERS int TYPE i.
DATA xml\_string TYPE string.
TRY.
    CALL TRANSFORMATION ...
         SOURCE num = int
         RESULT XML xml\_string.
    WRITE / 'OK'.
  CATCH cx\_st\_error.
    WRITE / 'Not OK'.
ENDTRY.