  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm) →  [Statements in Logical Databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_statements.htm) →  [SELECTION-SCREEN - ldb\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb.htm) → 

SELECTION-SCREEN DYNAMIC SELECTIONS

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_dyna_shortref.htm)

Obsolete Syntax

SELECTION-SCREEN DYNAMIC SELECTIONS
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) defines a node in the structure of the [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") for [dynamic selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfree_selections.htm). If a node belongs to type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnodes.htm).

If a node is defined for dynamic selections, the user can determine the components of the node for which they want to enter further selections and for which entry fields are not defined on the selection screen, while the [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") is displayed.

More information about the addition ID is available in [ldb\_additions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm).

Notes

-   While the [database program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_program_glosry.htm "Glossary Entry") is running, the selections entered by the user in the internal table DYN\_SEL in structure RSDS\_TYPE from [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") RSDS are available in various forms, such as generated [conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp.htm) for Open SQL.
    
-   See also [Dynamic Selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_free_selections.htm).
    
-   If logical databases are no longer created, this variant of the statement SELECT-OPTIONS does not need to be used either.