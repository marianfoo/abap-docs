---
title: "XML - Transformations"
description: |
  The AS ABAP kernel contains processors for the following transformations: -   XSL Transformations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt.htm) -   Simple Transformations(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm) Appropriate trans
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_trafos.htm"
abapFile: "abenabap_xml_trafos.htm"
keywords: ["do", "if", "try", "class", "data", "internal-table", "abenabap", "xml", "trafos"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: XML - Transformations, ABENABAP_XML_TRAFOS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

XML - Transformations

The AS ABAP kernel contains processors for the following transformations:

-   [XSL Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt.htm)
-   [Simple Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm)

Appropriate transformation programs can be created in the ABAP repository and called using the following statement:

-   [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm)

The possible transformations fulfill the following purposes:

-   XSL transformations transform XML to XML.
-   Simple transformations serialize ABAP data to XML and deserialize XML data to ABAP.

To also access ABAP data using XSL transformations, the asXML format can be used as an intermediate format, which defines a mapping between ABAP data and XML:

-   [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml.htm)

The source and target of these transformations can be ABAP data objects, XML data in strings, or internal tables or objects from [class libraries for XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xml_libs.htm).

Example

The transaction STDEMO demonstrates various transformations from ABAP data to [XML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenxml_glosry.htm "Glossary Entry") and [JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_glosry.htm "Glossary Entry").

Continue
[XSL Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt.htm)
[Simple Transformations (ST)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_st.htm)
[Canonical XML Representation (asXML)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml.htm)
[CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation.htm)