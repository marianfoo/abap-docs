---
title: "Hints"
description: |
  -   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value, that is, it is emptied. To initialize the internal table in either case, the
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_asjson_abap_types_table.htm"
abapFile: "abenabap_asjson_abap_types_table.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abenabap", "asjson", "abap", "table"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_asjson_abap_types.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: asJSON - Mapping of Internal Tables, ABENABAP_ASJSON_ABAP_TYPES_TABLE, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

asJSON - Mapping of Internal Tables

Internal tables are represented in asJSON as [JSON arrays](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenjson_oview.htm). The lines of the internal table are represented in their canonical representation as the components of the array. All table categories are allowed. Serializations do not pass any information about the table category to the JSON data. If the target field of a deserialization is a [sorted table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensorted_table_glosry.htm "Glossary Entry"), the lines are sorted accordingly.

Hints

-   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value, that is, it is emptied. To initialize the internal table in either case, the transformation option [clear](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_transformation_options.htm) with the value all can be used.
-   Unlike in the [asXML representation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_table.htm) of internal tables, asJSON does not require a name like item for the table lines.

Executable Example

[asJSON for Internal Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_json_asjson_table_abexa.htm)