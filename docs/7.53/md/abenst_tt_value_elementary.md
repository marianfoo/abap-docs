  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_abap_values.htm) → 

ST - tt:value, Elementary Data Objects

Syntax

<tt:value *\[*ref="node"*\]* *\[*map="..."*\]*
                       *\[*length*|*minLength*|*maxLength="len"*\]*
                       *\[*xsd-type...*\]*
                       *\[*option="...,..."*\]* />

Effect

This form of the ST command tt:value serializes and deserializes elementary data objects.

The optional attribute ref can be used to define the [current node](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_tt_ref.htm) for the command. If ref is not specified, the current node of the surrounding element is used.

Elementary ABAP values are mapped to XML values (and back) in accordance with the [asXML rules for elementary types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_elementary.htm). A special [mapping](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_schema.htm) is defined for data objects whose elementary data type refers to special domains in ABAP Dictionary.

-   [map](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_map.htm) can be used to specify a mapping list that maps multiple values to a single value.

-   [length](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_length.htm), [minLength](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_length.htm), or [maxLength](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_length.htm) can be used to specify a length.

-   The value is validated by specifying [xsd-type...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_xsd_type.htm).

-   [option="...,..."](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_option.htm) can be specified to define special formats for certain data types, so that the formats override the associated mapping rule.

Serialization

If [map](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_map.htm) is not specified, the value of the elementary ABAP data object that is bound to the current node is inserted into the XML data in place of the command in asXML format or in the format specified in [option](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_option.htm) in serializations.

Deserialization

During deserialization, the current value of the XML inbound stream is passed to the ABAP data object. The end of the XML value is determined either by the end of the text node (for example, at the element end) or by the beginning of a literal text following directly in the ST program. The XML value must match the asXML representation of the ABAP data type or a format specified in [option](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_option.htm) and be in its value range.

Example

[Simple Transformation, tt:value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_value_abexa.htm)

Continue
[ST - map, Mapping List](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_map.htm)
[ST - length, minLength, maxLength, Specified Length](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_length.htm)
[ST - xsd-type, Validation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_xsd_type.htm)
[ST - option, Mapping Rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_option.htm)
![Example](exa.gif "Example") [Simple Transformation, tt:value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenst_value_abexa.htm)