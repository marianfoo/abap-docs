---
title: "Hint"
description: |
  A structure that does not have an associated JSON object component in deserializations retains its previous value. A structure to which an empty object is assigned also remains unchanged, since this has the same effect on the structure components as a missing object component. To initialize the stru
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_asjson_abap_types_struc.htm"
abapFile: "abenabap_asjson_abap_types_struc.htm"
keywords: ["do", "case", "data", "types", "abenabap", "asjson", "abap", "struc"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_asjson_abap_types.htm) → 

asJSON - Mapping of Structures

In asJSON, an ABAP structure is represented as a [JSON object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenjson_oview.htm) whose object components represent the structure components. The content of each object component corresponds to the canonical representation of the component value. The name of each object component is the name of the corresponding structure component. In serializations, the object components are represented in the order of the components in the structure. In deserializations of the asJSON representation of a structure, the order of the object components is not important and superfluous object components are ignored. Components of the structure for which there are no object components remain unchanged.

Hint

A structure that does not have an associated JSON object component in deserializations retains its previous value. A structure to which an empty object is assigned also remains unchanged, since this has the same effect on the structure components as a missing object component. To initialize the structure in these cases, the transformation option [clear](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_transformation_options.htm) can be used with the value "all".

Executable Example

[asJSON for Structures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_json_asjson_struc_abexa.htm)