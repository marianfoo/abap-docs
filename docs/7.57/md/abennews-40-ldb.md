  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 4.xx](javascript:call_link\('abennews-4.htm'\)) →  [News for Release 4.0](javascript:call_link\('abennews-40.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Logical Databases in Release 4.0, ABENNEWS-40-LDB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

Logical Databases in Release 4.0

[1\. Logical Nodes](#!ABAP_MODIFICATION_1@1@)
[2\. Adjustment to Function Builder](#!ABAP_MODIFICATION_2@2@)
[3\. Call by Function Module](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Logical Nodes
The nodes of a logical database can have any name; the names are no longer strictly linked with the Dictionary tables. Instead, a node can have any Dictionary or local type. For example, a dictionary structure can be used for multiple nodes and a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") can return a complex data object "in one portion". New language element: NODES.

Modification 2   

Adjustment to Function Builder
The created program structure and the Logical Database Builder were adjusted to the form known to the Function Builder.

Modification 3   

Call by Function Module
The restriction that logical databases can only be used with [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) is no longer valid. A logical database therefore can be used by any program to collect data. You can also call the same logical database more than once and nested calls of different logical databases are also allowed.
See documentation on the function module LDB\_PROCESS.