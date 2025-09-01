  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) →  [asJSON - Mapping of ABAP Data Types](javascript:call_link\('abenabap_asjson_abap_types.htm'\)) → 

asJSON - Mapping of Internal Tables

Internal tables are represented in asJSON as [JSON arrays](javascript:call_link\('abenjson_oview.htm'\)). The rows of the internal table are represented in their canonical representation as the components of the array. All table categories are allowed. Serializations do not pass any information about the table category to the JSON data. If the target field of a deserialization is a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), the rows are sorted accordingly.

Notes

-   An internal table that does not have an associated JSON object component in deserializations retains its previous value. If an empty array is assigned to an internal table, it is set to its type-dependent initial value (which means it is emptied). To initialize the internal table in either case, the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) with the value "all" can be used.

-   Unlike in the [asXML representation](javascript:call_link\('abenabap_xslt_asxml_table.htm'\)) of internal tables, asJSON does not require a name like item for the table rows.

Executable Example

[asJSON for Internal Tables](javascript:call_link\('abenabap_json_asjson_table_abexa.htm'\))