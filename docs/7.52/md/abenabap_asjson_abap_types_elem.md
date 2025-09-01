  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Elementary ABAP Types

The values of elementary ABAP types are represented in asJSON using the [JSON representations](javascript:call_link\('abenjson_oview.htm'\)) of character-like values and number values. Representations of Boolean values and zero are not used.

-   The values of all numeric types (i, p, decfloat16, decfloat34, f) are represented directly as JSON number values.

-   The values of all other types (c, string, n, d, t, x, xstring) are represented as character-like values in quotation marks.

The type-dependent format of a value corresponds to the [asXML representation](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) of elementary types and can be taken from the tables there. The serialization and deserialization behavior noted there applies.

Note

An elementary ABAP data object that does not have an associated JSON object component in deserializations retains its previous value. To initialize the data object in this case, the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) with the value "all" can be used.

Executable Example

[asJSON for Elementary ABAP Types](javascript:call_link\('abenabap_json_asjson_elem_abexa.htm'\))