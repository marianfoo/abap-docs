---
title: "Executable Example"
description: |
  asJSON for Anonymous Data Objects(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_asjson_dref_abexa.htm).
version: "7.53"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_anonym_do.htm"
abapFile: "abenabap_asjson_anonym_do.htm"
keywords: ["do", "if", "data", "types", "abenabap", "asjson", "anonym"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json.htm) →  [Transformations for JSON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_asxml_references.htm) → 

asJSON - Anonymous Data Objects

An anonymous data object, that is a data object created using CREATE DATA or the instance operator NEW, is displayed as an object component of %heap in the form:

"key":{ "%type":"...",
        "%maxLength":...,
        "%totalDigits":...,
        "%fractionDigits":...,
        "%val":...
      }

The name key is the key used to reference the anonymous data object. The value of key is itself an object whose object components represent the type and the value of the anonymous data object.

The values of the anonymous data object is specified as content of the component %val in its canonical representation. If the anonymous data object itself is a non-initial reference variable, it references another component of %heap.

The remaining components specify the data type of the anonymous data object.

-   The same rules apply to the content of %type as to the element name type in [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasxml_anonymous_data_object.htm).

-   The components %maxLength, %totalDigits, and %fractionDigits specify the technical attributes of the type (if required). The same rules apply to their content as to the corresponding attributes in [asXML](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasxml_anonymous_data_object.htm).

Executable Example

[asJSON for Anonymous Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_json_asjson_dref_abexa.htm).