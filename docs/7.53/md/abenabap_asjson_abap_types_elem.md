---
title: "Note"
description: |
  An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option clear(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation_optio
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types_elem.htm"
abapFile: "abenabap_asjson_abap_types_elem.htm"
keywords: ["do", "case", "data", "types", "abenabap", "asjson", "abap", "elem"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Elementary ABAP Types

The values of elementary ABAP types are represented in asJSON using the [JSON representations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenjson_oview.htm) of character-like values and number values. Representations of Boolean values and zero are not used.

-   The values of all numeric types (i, p, decfloat16, decfloat34, f) are represented directly as JSON number values.

-   The values of all other types (c, string, n, d, t, x, xstring) are represented as character-like values in quotation marks.

The type-dependent format of a value corresponds to the [asXML representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_xslt_asxml_named.htm) of elementary types and can be taken from the tables there. The serialization and deserialization behavior noted there applies.

Note

An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option [clear](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_transformation_options.htm) with the value "all" can be used.

Executable Example

[asJSON for Elementary ABAP Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_asjson_elem_abexa.htm)