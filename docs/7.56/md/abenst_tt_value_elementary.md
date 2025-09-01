  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) → 

ST - tt:value, Elementary Data Objects

Syntax

<tt:value *\[*ref="node"*\]* *\[*map="..."*\]*
                       *\[*length*|*minLength*|*maxLength="len"*\]*
                       *\[*xsd-type...*\]*
                       *\[*option="...,..."*\]* />

Effect

This form of the ST statement tt:value serializes and deserializes elementary data objects.

The optional attribute ref can be used to define the [current node](javascript:call_link\('abenst_tt_ref.htm'\)) for the statement. If ref is not specified, the current node of the surrounding element is used.

Elementary ABAP values are mapped to XML values and vice versa in accordance with the [asXML rules for elementary types](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)). A special [mapping](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) is defined for data objects whose elementary data type refers to special domains in the ABAP Dictionary.

-   [map](javascript:call_link\('abenst_map.htm'\)) can be used to specify a mapping list that maps multiple values to a single value.
-   [length](javascript:call_link\('abenst_length.htm'\)), [minLength](javascript:call_link\('abenst_length.htm'\)), or [maxLength](javascript:call_link\('abenst_length.htm'\)) can be used to specify a length.
-   The value can be validated by specifying [xsd-type...](javascript:call_link\('abenst_xsd_type.htm'\)).
-   [option="...,..."](javascript:call_link\('abenst_option.htm'\)) can be specified to define special formats for certain data types, so that the formats override the associated mapping rule.

Serialization

If [map](javascript:call_link\('abenst_map.htm'\)) is not specified, the value of the elementary ABAP data object that is bound to the current node is inserted into the XML data in place of the statement in asXML format or in the format specified in [option](javascript:call_link\('abenst_option.htm'\)) in serializations.

Deserialization

During deserialization, the current value of the XML inbound stream is passed to the ABAP data object. The end of the XML value is determined either by the end of the text node (for example, at the element end) or by the beginning of a literal text following directly in the ST program. The XML value must match the asXML representation of the ABAP data type or a format specified in [option](javascript:call_link\('abenst_option.htm'\)) and be in its value range.

Example

[Simple Transformation, tt:value](javascript:call_link\('abenst_value_abexa.htm'\))

Continue
[ST - map, Mapping List](javascript:call_link\('abenst_map.htm'\))
[ST - length, minLength, maxLength, Specified Length](javascript:call_link\('abenst_length.htm'\))
[ST - xsd-type, Validation](javascript:call_link\('abenst_xsd_type.htm'\))
[ST - option, Mapping Rules](javascript:call_link\('abenst_option.htm'\))
![Example](exa.gif "Example") [ST - tt:value](javascript:call_link\('abenst_value_abexa.htm'\))