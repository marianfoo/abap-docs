  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Transformations](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) →  [asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\)) → 

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

-   The same rules apply to the content of %type as to the element name type in [asXML](javascript:call_link\('abenasxml_anonymous_data_object.htm'\)).
-   The components %maxLength, %totalDigits, and %fractionDigits specify the technical attributes of the type, if required. The same rules apply to their content as to the corresponding attributes in [asXML](javascript:call_link\('abenasxml_anonymous_data_object.htm'\)).

Executable Example

[asJSON for Anonymous Data Objects](javascript:call_link\('abenabap_json_asjson_dref_abexa.htm'\)).