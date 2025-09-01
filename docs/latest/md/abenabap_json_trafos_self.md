  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_json_trafos.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20JSON%20-%20Self-Written%20Transformations%2C%20ABENABAP_JSON_TRAFOS_SELF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

JSON - Self-Written Transformations

Self-written XSLT programs and Simple Transformations enable the following transformations:

-   Serialization of ABAP data objects to JSON
    -   An [XSL transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt.htm) accesses the [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the connected ABAP data, created internally. It must transform asXML to JSON-XML.
    -   A [Simple Transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) accesses the connected ABAP data directly. It must create a valid JSON-XML representation.
-   Deserialization from JSON to ABAP data objects:
    -   An [XSL transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt.htm) must transform JSON-XML to an [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the bound ABAP data objects.
    -   A [Simple Transformation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st.htm) must process JSON-XML and write the data to the bound ABAP data objects.
-   XSL transformations between JSON and XML or between JSON and JSON.
    -   Transformations can be called between JSON-XML and any XML or between JSON-XML and JSON-XML.

Executable Example

[Simple Transformation for Internal Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_st_json_table_abexa.htm)