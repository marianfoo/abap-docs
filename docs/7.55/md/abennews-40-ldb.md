  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [Changes in Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

Logical Databases in Release 4.0

[1\. "Logical Nodes": Any node name, link to Dictionary or local type.](#!ABAP_MODIFICATION_1@1@)
[2\. Adjustment of maintenance transaction and program structure to Function Builder.](#!ABAP_MODIFICATION_2@2@)
[3\. Free callability without change of program memory using the function module LDB\_PROCESS.](#!ABAP_MODIFICATION_3@3@)

Modification 1

"Logical Nodes": The nodes of a logical database can have any name; the names are no longer strictly linked with the Dictionary tables. Instead, a node can have any Dictionary or local type. For example, a dictionary structure can be used for multiple nodes and a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") can return a complex data object "in one portion". New language element: NODES.

Modification 2

Adjustment to [Function Builder](javascript:call_link\('abenfunction_builder_glosry.htm'\) "Glossary Entry"): The created program structure and the Logical Database Builder were adjusted to the form known to the Function Builder.

Modification 3

Free callability without change of program memory using the function module LDB\_PROCESS.
The restriction that logical databases can only be used with
[SUBMIT](javascript:call_link\('abapsubmit.htm'\)) is no longer valid. A logical database therefore can be used by any program to collect data. You can also call the same logical database more than once and nested calls of different logical databases are also allowed.
See documentation on the function module.