  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [Transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

asJSON - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asJSON as the content of the following object components:

[“bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
["bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
[...](javascript:call_link\('abenabap_asjson_general.htm'\))

An additional object is implemented for the objects referenced by reference variables:

["%heap":...](javascript:call_link\('abenabap_asjson_general.htm'\))

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation; deserializations operate in the opposite direction:

-   [Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\))

-   [Mapping of Structures](javascript:call_link\('abenabap_asjson_abap_types_struc.htm'\))

-   [Mapping of Internal Tables](javascript:call_link\('abenabap_asjson_abap_types_table.htm'\))

-   [Mapping of Enumerated Types](javascript:call_link\('abenabap_asjson_abap_types_enum.htm'\))

-   [Mapping of Reference Variables and Referenced Objects](javascript:call_link\('abenabap_asxml_references.htm'\))

Continue
[asJSON - Mapping of Elementary ABAP Types](javascript:call_link\('abenabap_asjson_abap_types_elem.htm'\))
[asJSON - Mapping of Structures](javascript:call_link\('abenabap_asjson_abap_types_struc.htm'\))
[asJSON - Mapping of Internal Tables](javascript:call_link\('abenabap_asjson_abap_types_table.htm'\))
[asJSON - Mapping of Enumerated Types](javascript:call_link\('abenabap_asjson_abap_types_enum.htm'\))
[asJSON - Mapping of Reference Variables and Objects](javascript:call_link\('abenabap_asxml_references.htm'\))