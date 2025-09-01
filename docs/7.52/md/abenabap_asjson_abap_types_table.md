---
title: "Notes"
description: |
  -   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case,
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_abap_types_table.htm"
abapFile: "abenabap_asjson_abap_types_table.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abenabap", "asjson", "abap", "table"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Internal Tables

Internal tables are represented in asJSON as [JSON arrays](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_oview.htm). The rows of the internal table are represented in their canonical representation as the components of the array. All table categories are allowed. Serializations do not pass any information about the table category to the JSON data. If the target field of a deserialization is a [sorted table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"), the rows are sorted accordingly.

Notes

-   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case, the transformation option [clear](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation_options.htm) with the value "all" can be used.

-   Unlike in the [asXML representation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_table.htm) of internal tables, asJSON does not require a name like item for the table rows.

Executable Example

[asJSON for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json_asjson_table_abexa.htm)