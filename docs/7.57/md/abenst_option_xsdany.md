  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm) →  [Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_tt_value_elementary.htm) →  [ST - option, Mapping Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_option.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ST - option, Mapping Rules for XML Fragments, ABENST_OPTION_XSDANY, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ST - option, Mapping Rules for XML Fragments

Syntax

... option="*\[*preserveWS*\]**\[*,stripWS*\]**\[*,preserveCharRef*\]**\[*,noRootAttr*\]*"

Effect

If one or more of the values preserveWS, stripWS, preserveCharRef, or noRootAttr are specified for option, the [mapping rule for XML fragments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_fragment.htm) is changed. These values are only respected by data objects that are declared with a reference to the [DDIC domain](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendomain_glosry.htm "Glossary Entry") XSDANY.

preserveWS   

If the value preserveWS is specified, all whitespaces (blanks and line breaks) are preserved in deserializations.

stripWS   

If the value stripWS is specified, all whitespace (blanks and line breaks) is stripped in deserializations.

preserveCharRef   

The value preserveCharRef prevents character references from being resolved.

noRootAttr   

The value noRootAttr is used to change the [mapping rule for XML fragments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_fragment.htm) so that no attribute asx:root containing the name of the root element of the XML fragment is added to the XML element. In deserializations, the root element is given the name of the XML element.

Hint

In deserializations to XSDANY, whitespace in front of the first element is removed and whitespace from the first element is preserved.

Executable Example

[ST, Mapping of XML Fragments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_xsdany_abexa.htm)

Continue
![Example](exa.gif "Example") [ST - Mapping of XML Fragments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenst_xsdany_abexa.htm)