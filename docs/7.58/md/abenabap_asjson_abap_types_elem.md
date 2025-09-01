---
title: "Hint"
description: |
  An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option clear(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation_optio
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types_elem.htm"
abapFile: "abenabap_asjson_abap_types_elem.htm"
keywords: ["do", "if", "case", "data", "types", "abenabap", "asjson", "abap", "elem"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Mapping%20of%20Elementary%20ABAP%20Types%2C%20ABENABAP_ASJSON_ABAP_TYPES_ELEM%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

asJSON - Mapping of Elementary ABAP Types

The values of elementary ABAP types are represented in asJSON using the [JSON representations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjson_oview.htm) of character-like values and numeric values. Representations of Boolean values and zero are not used.

-   The values of all numeric types (i, p, decfloat16, decfloat34, f) are represented directly as JSON number values.
-   The values of all other types (c, string, n, d, t, x, xstring) are represented as character-like values in quotation marks.

The type-dependent format of a value corresponds to the [asXML representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_xslt_asxml_named.htm) of elementary types and can be taken from the tables there. The serialization and deserialization behavior listed there applies.

Hint

An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option [clear](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_transformation_options.htm) with the value all can be used.

Executable Example

[asJSON for Elementary ABAP Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_asjson_elem_abexa.htm)