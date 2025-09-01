  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) →  [SELECTION-SCREEN, ldb\_options](javascript:call_link\('abapselection-screen_ldb.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20DYNAMIC%20SELECTIONS%2C%20ABAPSELECTION-SCREEN_LDB_DYNAMIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

SELECTION-SCREEN DYNAMIC SELECTIONS

[Short Reference](javascript:call_link\('abapselection-screen_dyna_shortref.htm'\))

Obsolete Syntax

SELECTION-SCREEN DYNAMIC SELECTIONS
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) defines a node in the structure of the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") for [dynamic selections](javascript:call_link\('abenfree_selections.htm'\)). If a node belongs to type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](javascript:call_link\('abapnodes.htm'\)).

If a node is defined for dynamic selections, the user can specify, while the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is displayed, the components of the node for which they want to enter further selections and for which no input fields are defined on the selection screen.

For more information about the addition ID, see [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)).

Hints

-   While the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") is running, the selections entered by the user in the internal table dyn\_sel in structure rsds\_type from [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") RSDS are available in various forms, such as generated [conditions](javascript:call_link\('abenasql_cond.htm'\)) for ABAP SQL.
-   See also [Dynamic Selections](javascript:call_link\('abenldb_free_selections.htm'\)).
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement SELECT-OPTIONS.