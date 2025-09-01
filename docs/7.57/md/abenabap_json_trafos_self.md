---
title: "JSON - Self-Written Transformations"
description: |
  Self-written XSLT programs and Simple Transformations enable the following transformations: -   Serialization of ABAP data objects to JSON -   An XSL transformation(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt.htm) accesses the asXML(https://help.sap.com/doc/abapdocu_
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_trafos_self.htm"
abapFile: "abenabap_json_trafos_self.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abenabap", "json", "trafos", "self"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_trafos.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: JSON - Self-Written Transformations, ABENABAP_JSON_TRAFOS_SELF, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

JSON - Self-Written Transformations

Self-written XSLT programs and Simple Transformations enable the following transformations:

-   Serialization of ABAP data objects to JSON
    -   An [XSL transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt.htm) accesses the [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the connected ABAP data, created internally. It must transform asXML to JSON-XML.
    -   A [Simple Transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) accesses the connected ABAP data directly. It must create a valid JSON-XML representation.
-   Deserialization from JSON to ABAP data objects:
    -   An [XSL transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt.htm) must transform JSON-XML to an [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_glosry.htm "Glossary Entry") representation of the bound ABAP data objects.
    -   A [Simple Transformation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) must process JSON-XML and write the data to the bound ABAP data objects.
-   XSL transformations between JSON and XML or between JSON and JSON.
    -   Transformations can be called between JSON-XML and any XML or between JSON-XML and JSON-XML.

Executable Example

[Simple Transformation for Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st_json_table_abexa.htm)