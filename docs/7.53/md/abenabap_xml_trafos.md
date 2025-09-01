---
title: "Transformations for XML"
description: |
  The AS ABAP kernel contains processors for the following transformations: -   XSL Transformations(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt.htm) -   Simple Transformations(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm) Appropriate trans
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_trafos.htm"
abapFile: "abenabap_xml_trafos.htm"
keywords: ["do", "try", "class", "data", "internal-table", "abenabap", "xml", "trafos"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml.htm) → 

Transformations for XML

The AS ABAP kernel contains processors for the following transformations:

-   [XSL Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt.htm)

-   [Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm)

Appropriate transformation programs can be created in the ABAP repository and called using the following statement:

-   [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm)

The possible transformations fulfill the following purposes:

-   XSL transformations transform XML to XML.

-   Simple transformations serialize ABAP data to XML and deserialize XML data to ABAP.

To also access ABAP data using XSL transformations, the asXML format can be used as an intermediate format, which defines a mapping between ABAP data and XML:

-   [asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml.htm)

The source and target of these transformations can be ABAP data objects, XML data in strings, or internal tables or objects from [class libraries for XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xml_libs.htm).

Example

The transaction STDEMO demonstrates various transformations from ABAP data to [XML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenxml_glosry.htm "Glossary Entry") and [JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_glosry.htm "Glossary Entry").

Continue
[XSL Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt.htm)
[ST - Simple Transformations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_st.htm)
[asXML - Canonical XML Representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml.htm)
[CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation.htm)