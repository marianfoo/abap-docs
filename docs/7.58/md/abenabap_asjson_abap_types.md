  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and JSON](javascript:call_link\('abenabap_json.htm'\)) →  [JSON - Transformations](javascript:call_link\('abenabap_json_trafos.htm'\)) →  [asJSON - Canonical JSON Representation](javascript:call_link\('abenabap_asjson.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20asJSON%20-%20Mapping%20of%20ABAP%20Data%20Types%2C%20ABENABAP_ASJSON_ABAP_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

asJSON - Mapping of ABAP Data Types

Named data objects other than reference variables are represented in asJSON as the content of the following object components:

["bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
["bn1":...](javascript:call_link\('abenabap_asjson_general.htm'\))
[...](javascript:call_link\('abenabap_asjson_general.htm'\))

An additional object is implemented for the objects referenced by reference variables:

["%heap":...](javascript:call_link\('abenabap_asjson_general.htm'\))

Depending on the ABAP data type, serializations map the value of named data objects to a particular JSON representation and vice versa in deserializations:

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