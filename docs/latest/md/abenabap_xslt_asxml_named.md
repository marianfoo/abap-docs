  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml.htm) →  [XML - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xml_trafos.htm) →  [Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asXML%20-%20Mapping%20of%20ABAP%20Data%20Types%2C%20ABENABAP_XSLT_ASXML_NAMED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

asXML - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asXML as the content of the following elements:

[<bn1>...</bn1>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_general.htm)
[<bn2>...</bn2>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_general.htm)
[...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_general.htm)

An additional area is implemented for the objects referenced by reference variables:

[<asx:heap>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_general.htm)
  [...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_general.htm)
[</asx:heap>](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_general.htm)

Depending on the ABAP data type, serializations map the value of named data objects to a particular XML representation and deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_elementary.htm)
-   [Mapping of Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_structure.htm)
-   [Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_table.htm)
-   [Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_enum.htm)
-   [Mapping of Reference Variables and Referenced Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_references.htm)

Continue
[asXML - Mapping of Elementary ABAP Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_elementary.htm)
[asXML - Mapping of Structures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_structure.htm)
[asXML - Mapping of Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_table.htm)
[asXML - Mapping of Enumerated Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_enum.htm)
[asXML - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_references.htm)