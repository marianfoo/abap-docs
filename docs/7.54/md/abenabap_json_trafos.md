---
title: "Transformations for JSON"
description: |
  The transformations for XML(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) that can be called from ABAP, namely XSL transformations(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxsl_transformation_1_glosry.htm 'Glossary Entry') and simple tr
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm"
abapFile: "abenabap_json_trafos.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abenabap", "json", "trafos"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) → 

Transformations for JSON

The [transformations for XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xml_trafos.htm) that can be called from ABAP, namely [XSL transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenxsl_transformation_1_glosry.htm "Glossary Entry") and [simple transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensimple_transformation_glosry.htm "Glossary Entry"), can also be used for [JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_glosry.htm "Glossary Entry").

-   To call a transformation for JSON data as a source, the following XML sources can be specified in the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm):

-   A string or internal table with [JSON data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_oview.htm) in character-like or byte-like representation.

-   A [JSON Reader](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_reader_glosry.htm "Glossary Entry").

A JSON reader returns data in the [JSON XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_xml_glosry.htm "Glossary Entry") format. The JSON data specified as a string or in an internal table is also handled like XML representing JSON data [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_xml_glosry.htm "Glossary Entry") format.

-   To call a transformation for JSON data as a target, a [JSON writer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_writer_glosry.htm "Glossary Entry") can be specified as an XML target in the statement [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transformation.htm): A JSON writer expects data in [JSON-XML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenjson_xml_glosry.htm "Glossary Entry") format.

Any XSLT programs and ST programs can be called that can handle JSON-XML:

-   If the source is JSON data, the transformation must process JSON-XML as its input.

-   If the target is JSON data, the transformation must create JSON-XML.

Self-written transformations must be programmed accordingly. The [identity transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenid_trafo_glosry.htm "Glossary Entry") ID is handled appropriately internally.

-   [Self-Written Transformations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos_self.htm)

-   [Identity Transformation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafo_id.htm)

Continue
[Self-Written Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos_self.htm)
[Identity Transformation for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafo_id.htm)
[asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm)