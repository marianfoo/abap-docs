  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml.htm) →  [asXML - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_named.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20Internal%20Tables%2C%20ABENABAP_XSLT_ASXML_TABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

asXML - Mapping of Internal Tables

The asXML representation of internal tables is significant mainly for XSL transformations. In Simple Transformations, this representation is important only when using the statement [tt:copy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenst_tt_copy.htm).

The lines of an internal table are represented in asXML as a sequence of subelements of the table element. The content of each subelement matches the canonical representation of the line value. The name of a subelement is not relevant. If the canonical XML representation is created by a serialization, the name from the ABAP Dictionary is used when it is referred to, otherwise the name is item. All table categories are allowed. Serializations do not pass any information about the table category to the XML data. If the target field of an [XSL transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenxsl_transformation_glosry.htm "Glossary Entry") is a [sorted table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry"), the lines are sorted accordingly in the deserialization.

If the required XML element does not exist in deserializations to an internal table, the internal table retains its previous content. If an empty element is assigned to an internal table, it is set to its type-dependent initial value, that is, it is emptied. To initialize the internal table in either case, the transformation option [clear](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transformation_options.htm) with the value all can be used.

Executable Example

[asXML, Mapping of Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_table_abexa.htm)