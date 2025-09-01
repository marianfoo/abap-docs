---
title: "Executable Example"
description: |
  Serializing Data References(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserialize_dref_abexa.htm)
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_reference_var.htm"
abapFile: "abenabap_asjson_reference_var.htm"
keywords: ["do", "case", "data", "types", "abenabap", "asjson", "reference", "var"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_asxml_references.htm) → 

asJSON - Named Reference Variables

Like a regular data object, a named reference variable is represented as an object component that has special content:

"bni":{ "%ref":"#key" }

The content of the object component of a named reference variable is an object with precisely one object component, called %ref. The content of the object component %ref is a character-like value "#key", where key is the unique key of an object component in the object %heap. The object of an initial reference is empty. The key key of the ABAP runtime environment is set in serializations; in deserializations, any key can be used.

Otherwise the same rules apply to serializations and deserializations of named reference variables as to [asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_reference_variable.htm) and the same special cases need to be noted.

Executable Example

[Serializing Data References](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenserialize_dref_abexa.htm)