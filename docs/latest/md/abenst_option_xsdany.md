  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [XML - Transformations](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [Simple Transformations (ST)](javascript:call_link\('abenabap_st.htm'\)) →  [ST - Serialization and Deserialization](javascript:call_link\('abenst_serial_deserial.htm'\)) →  [ST - Transformation of ABAP Values](javascript:call_link\('abenst_abap_values.htm'\)) →  [ST - tt:value, Elementary Data Objects](javascript:call_link\('abenst_tt_value_elementary.htm'\)) →  [ST - option, Mapping Rules](javascript:call_link\('abenst_option.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ST%20-%20option%2C%20Mapping%20Rules%20for%20XML%20Fragments%2C%20ABENST_OPTION_XSDANY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

ST - option, Mapping Rules for XML Fragments

Syntax

... option="*\[*preserveWS*\]**\[*,stripWS*\]**\[*,preserveCharRef*\]**\[*,noRootAttr*\]*"

Effect

If one or more of the values preserveWS, stripWS, preserveCharRef, or noRootAttr are specified for option, the [mapping rule for XML fragments](javascript:call_link\('abenabap_xslt_asxml_fragment.htm'\)) is changed. These values are only respected by data objects that are declared with a reference to the [DDIC domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") XSDANY.

preserveWS   

If the value preserveWS is specified, all whitespaces (blanks and line breaks) are preserved in deserializations.

stripWS   

If the value stripWS is specified, all whitespace (blanks and line breaks) is stripped in deserializations.

preserveCharRef   

The value preserveCharRef prevents character references from being resolved.

noRootAttr   

The value noRootAttr is used to change the [mapping rule for XML fragments](javascript:call_link\('abenabap_xslt_asxml_fragment.htm'\)) so that no attribute asx:root containing the name of the root element of the XML fragment is added to the XML element. In deserializations, the root element is given the name of the XML element.

Hint

In deserializations to XSDANY, whitespace in front of the first element is removed and whitespace from the first element is preserved.

Executable Example

[ST, Mapping of XML Fragments](javascript:call_link\('abenst_xsdany_abexa.htm'\))

Continue
![Example](exa.gif "Example") [ST - Mapping of XML Fragments](javascript:call_link\('abenst_xsdany_abexa.htm'\))