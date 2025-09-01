  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) →  [SELECTION-SCREEN - ldb\_options](javascript:call_link\('abapselection-screen_ldb.htm'\)) → 

SELECTION-SCREEN DYNAMIC SELECTIONS

[Quick Reference](javascript:call_link\('abapselection-screen_dyna_shortref.htm'\))

Obsolete Syntax

SELECTION-SCREEN DYNAMIC SELECTIONS
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) defines a node in the structure of the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") for [dynamic selections](javascript:call_link\('abenfree_selections.htm'\)). If a node belongs to type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](javascript:call_link\('abapnodes.htm'\)).

If a node is defined for dynamic selections, the user can determine the components of the node for which they want to enter further selections and for which entry fields are not defined on the selection screen, while the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is displayed.

More information about the addition ID is available in [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)).

Notes

-   While the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") is running, the selections entered by the user in the internal table DYN\_SEL in structure RSDS\_TYPE from [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") RSDS are available in various forms, such as generated [conditions](javascript:call_link\('abenwhere_logexp.htm'\)) for ABAP SQL.
    
-   See also [Dynamic Selections](javascript:call_link\('abenldb_free_selections.htm'\)).
    
-   If logical databases are no longer created, this variant of the statement SELECT-OPTIONS does not need to be used either.