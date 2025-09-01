  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20XML%20Fragments%2C%20ABENABAP_XSLT_ASXML_FRAGMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

asXML - Mapping of XML Fragments

asXML allows the mapping of entire XML fragments, that is, of complete elements and their subelements that exist in XML format in ABAP as the content of data objects or of parts of data objects (such as structure components or table rows). The data objects must have the type xstring and be declared with reference to the [DDIC domain](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendomain_glosry.htm "Glossary Entry") XSDANY.

-   When serialized, such a data object or part of a data object must contain the [UTF-8](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenutf8_glosry.htm "Glossary Entry") representation of a complete XML fragment. The content of the root element of the XML fragment is passed unchanged to the XML element for which the data object was created. If the name of the XML element is not the same as the name of the root element of the XML fragment, the latter is used as the content of an attribute asx:root that is added to the XML element. No attribute is created if the names are the same.
-   When deserialized, an XML element that contains the attribute asx:root must be assigned to such a data object or part of a data object. An XML fragment is created in the data object that has the content of the attribute as a root element and whose content is inherited unchanged from the XML element. If the attribute asx:root does not exist, the root element is given the name of the XML element.

The following restrictions apply:

-   XML fragments whose elements do not contain attributes cannot be deserialized.
-   XML fragments whose root element is in the standard namespace cannot be serialized or deserialized.

Hints

-   An XML fragment that exists in a data object of type xstring and that is not declared with reference to the domain XSDANY is formatted as the XML schema type xsd:base64Binary in accordance with the rules for [mapping elementary data types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_elementary.htm).
-   An XML element that contains the attribute asx:root cannot be deserialized to data objects that are not declared with reference to the domain XSDANY.
-   The handling of XML fragments in the statement [tt:value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_value_elementary.htm) is supported in [Simple Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_st.htm), but not in the statements [tt:write](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_write.htm) or [tt:read](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_tt_read.htm). In tt:value, the mapping rule for XML fragments can be modified using certain values for the attribute [option](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenst_option_xsdany.htm).
-   XML fragments in byte strings with reference to the domain XSDANY are not supported in [transformations for JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_trafos.htm).

Executable Example

[asXML, Mapping of XML Fragments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_fragments_abexa.htm)