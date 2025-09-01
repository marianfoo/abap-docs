  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asxml_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Named%20Reference%20Variables%2C%20ABENABAP_ASJSON_REFERENCE_VAR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

asJSON - Named Reference Variables

Like a regular data object, a named reference variable is represented as an object component that has special content:

"bni":{ "%ref":"#key" }

The content of the object component of a named reference variable is an object with exactly one object component called %ref. The content of the object component %ref is a character-like value "#key", where key is the unique key of an object component in the object %heap. The object of an initial reference is empty. The key key of the ABAP runtime framework is set in serializations and in deserializations, any key can be used.

Otherwise the same rules apply to serializations and deserializations of named reference variables as to [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_reference_variable.htm) and the same special cases must be respected.

Executable Example

[Serializing Data References](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenserialize_dref_abexa.htm)