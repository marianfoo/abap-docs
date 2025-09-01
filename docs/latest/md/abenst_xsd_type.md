---
title: "ST - xsd-type, Validation"
description: |
  Syntax ... xsd-type='type' xsd-maxInclusive='max' xsd-maxExclusive ='max' xsd-minInclusive='min' xsd-minExclusive ='min' xsd-totalDigits='dgts' xsd-fractionDigits='dgts' ... Effect These attributes can be used with tt:value(https://help.sap.com/doc/a
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_xsd_type.htm"
abapFile: "abenst_xsd_type.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "types", "abenst", "xsd", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20xsd-type%2C%20Validation%2C%20ABENST_XSD_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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

These attributes can be used with [tt:value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_value_elementary.htm), and [tt:write](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_write.htm) and [tt:read](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_read.htm) to validate the value.

The attribute xsd-type can be used to specify an XML schema data type type. The serialized or deserialized value must be in the value range of this type. If not, an exception of the class CX\_ST\_VALIDATION\_ERROR is raised, which is not caught directly but by using CX\_ST\_SERIALIZATION\_ERROR, CX\_ST\_DESERIALIZATION\_ERROR, and its superclasses. The following subtypes of xsd:decimal can be specified for type:

xsd:byte, xsd:decimal, xsd:int, xsd:integer, xsd:long, xsd:negativeInteger, xsd:nonNegativeInteger, xsd:nonPosistiveInteger, xsd:positiveInteger, xsd:short, xsd:unsignedByte, xsd:unsignedInt, xsd:unsignedLong, and xsd:unsignedShort.

Together with the attribute xsd-type, the following restrictions (constraining facets) allowed by the XML schema can be specified as further attributes:

-   xsd-maxInclusive, xsd-maxExclusive
    
    The value must be less than or equal to or less than max. max must be in the value range of the XML schema data type and cannot be less than a simultaneous lower limit min.
    
-   xsd-minInclusive, xsd-minExclusive
    
    The value must be greater than or equal to or greater than min. min must be in the value range of the XML schema data type and cannot be greater than a simultaneous upper limit max.
    
-   xsd-totalDigits, fractionDigits
    
    The value can have a maximum of dgts digits or decimal places. dgts must fit the other restrictions.
    

After the transformation from ABAP, serializations perform the validation to XML. Before the transformation from XML, deserializations perform the validation to ABAP. In both cases, the data type of the bound ABAP data object is ignored.

Example

Serialization of ABAP Data with Validation in the simple transformation DEMO\_ST\_XSD\_TYPE.

<?sap.transform simple?>
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

DATA int TYPE i.
DATA xml\_string TYPE string.
TRY.
    CALL TRANSFORMATION demo\_st\_xsd\_type
          SOURCE num = int
          RESULT XML xml\_string.
    cl\_demo\_output=>display( 'OK' ).
  CATCH cx\_st\_error.
    cl\_demo\_output=>display( 'Not OK' ).
ENDTRY.