  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (LDB, Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [LDB - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [LDB - Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) →  [SELECTION-SCREEN, ldb\_options](javascript:call_link\('abapselection-screen_ldb.htm'\)) → 

SELECTION-SCREEN FIELD SELECTION

[Short Reference](javascript:call_link\('abapselection-screen_fiel_shortref.htm'\))

Obsolete Syntax

SELECTION-SCREEN FIELD SELECTION
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) defines a node in the structure of the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") for field selection. If a node belongs to type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](javascript:call_link\('abapnodes.htm'\)).

If a node is defined for field selection, an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") associated with the logical database in the [GET](javascript:call_link\('abapget-.htm'\)) statement to control which fields in the node are read by the logical database. If you use the function module LDB\_PROCESS, the FIELD\_SELECTION parameter must be specified accordingly.

More information about the addition ID is available in [ldb\_additions](javascript:call_link\('abapselection-screen_ldb_additions.htm'\)).

Hints

-   While the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry") is running, the names of the fields to be read are available in the internal table select\_fields in the structure rsfs\_tab\_fields from [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") RSFS.

-   See also [Field Selections](javascript:call_link\('abenldb_field_selections.htm'\)).

-   If logical databases are no longer created, this variant of the statement SELECT-OPTIONS does not need to be used either.