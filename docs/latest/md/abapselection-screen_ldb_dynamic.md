  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_statements.htm) →  [SELECTION-SCREEN, ldb\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20DYNAMIC%20SELECTIONS%2C%20ABAPSELECTION-SCREEN_LDB_DYNAMIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

SELECTION-SCREEN DYNAMIC SELECTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_dyna_shortref.htm)

Obsolete Syntax

SELECTION-SCREEN DYNAMIC SELECTIONS
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) defines a node in the structure of the [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") for [dynamic selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfree_selections.htm). If a node belongs to type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnodes.htm).

If a node is defined for dynamic selections, the user can specify, while the [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry") is displayed, the components of the node for which they want to enter further selections and for which no input fields are defined on the selection screen.

For more information about the addition ID, see [ldb\_additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_additions.htm).

Hints

-   While the [database program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_program_glosry.htm "Glossary Entry") is running, the selections entered by the user in the internal table dyn\_sel in structure rsds\_type from [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") RSDS are available in various forms, such as generated [conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasql_cond.htm) for ABAP SQL.
-   See also [Dynamic Selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_free_selections.htm).
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement SELECT-OPTIONS.