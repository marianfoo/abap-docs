---
title: "ABAP and JSON"
description: |
  This section describes how JSON(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjson_glosry.htm 'Glossary Entry') data can be created and read in ABAP. The main topics are -   processing and creating JSON data using parsers and renderers created and used using the APIs of the sXML
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json.htm"
abapFile: "abenabap_json.htm"
keywords: ["do", "try", "data", "abenabap", "json"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) → 

ABAP and JSON

This section describes how [JSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjson_glosry.htm "Glossary Entry") data can be created and read in ABAP. The main topics are

-   processing and creating JSON data using parsers and renderers created and used using the APIs of the [sXML Library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensxml_library_glosry.htm "Glossary Entry").
-   the direct transformation of ABAP data to JSON format (serialization) and reading of data in JSON format to ABAP data objects (deserialization) using transformations that exist as programs in the repository.

The handling of [JSON data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjson_oview.htm) in ABAP is based on the following principles:

-   A [JSON-XML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_xml.htm) format maps JSON data to XML.
-   XML readers and XML writers in sXML Library support JSON-XML and can be used as [parsers and renderers](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_sxml.htm) of JSON data.
-   Direct [transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_trafos.htm) can be performed [between ABAP and JSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_trafos.htm). Here, a canonical JSON representation of ABAP data called [asJSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_asjson.htm) can be used for the [identity transformation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID.

For examples, see the corresponding executable [programs in the example library](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_abexas.htm).

Continue
[JSON - Quick Overview](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjson_oview.htm)
[JSON-XML - XML Representation of JSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_xml.htm)
[JSON - Parsing and Rendering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_sxml.htm)
[JSON - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_trafos.htm)
[JSON - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_abexas.htm)