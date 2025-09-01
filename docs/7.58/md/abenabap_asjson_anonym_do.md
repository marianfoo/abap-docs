  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP and JSON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json.htm) →  [JSON - Transformations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_trafos.htm) →  [asJSON - Canonical JSON Representation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson.htm) →  [asJSON - Mapping of ABAP Data Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asjson_abap_types.htm) →  [asJSON - Mapping of Reference Variables and Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_asxml_references.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Anonymous%20Data%20Objects%2C%20ABENABAP_ASJSON_ANONYM_DO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

asJSON - Anonymous Data Objects

An anonymous data object, that is, a data object created using CREATE DATA or the instance operator NEW, is represented as an object component of %heap in the form:

"key":{ "%type":"...",
        "%maxLength":...,
        "%totalDigits":...,
        "%fractionDigits":...,
        "%val":...
      }

The name key is the key used to reference the anonymous data object. The value of key is itself an object whose object components represent the type and the value of the anonymous data object.

The value of the anonymous data object is specified as content of the component %val in its canonical representation. If the anonymous data object itself is a non-initial reference variable, it references another component of %heap.

The remaining components specify the data type of the anonymous data object.

-   The same rules apply to the content of %type as to the element name type in [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_anonymous_data_object.htm).
-   The components %maxLength, %totalDigits, and %fractionDigits specify the technical properties of the type, if required. The same rules apply to their content as to the corresponding attributes in [asXML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenasxml_anonymous_data_object.htm).

Executable Example

[asJSON for Anonymous Data Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_json_asjson_dref_abexa.htm).