  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenldb_statements.htm) →  [SELECTION-SCREEN, ldb\_options](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SELECTION-SCREEN, ldb_additions, ABAPSELECTION-SCREEN_LDB_ADDITIONS, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SELECTION-SCREEN, ldb\_additions

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_shortref.htm)

Obsolete Syntax

... FOR *{*TABLE*|*NODE*}* node *\[*ID id*\]* ...

Additions:

[1\. ... FOR *{*TABLE*|*NODE*}* node](#!ABAP_ADDITION_1@1@)
[2\. ... ID id](#!ABAP_ADDITION_2@2@)

Effect

These additions of the statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen.htm) assign a node of the logical database and/or an ID to selection screen elements of a [logical database](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

Addition 1   

... FOR *{*TABLE*|*NODE*}* node

Effect

This addition means that all the screen elements created with SELECTION-SCREEN in the selection include for a logical database must be assigned to a node in the structure of the logical database. If a node has type T, the addition TABLE can be used instead of NODE. For a description of the node types, see the statement [NODES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnodes.htm).

When the standard selection screen of an [executable program](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is created that is linked to the logical database, it only displays screen elements for which an [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") is declared with NODES or [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptables.htm) for the assigned node or a node below it in the hierarchy. If the function module LDB\_PROCESS is used, the assigned node node must be requested so that the screen element is created.

The addition FOR TABLE*|*NODE must be specified for the variants of the statement SELECTION-SCREEN with [POSITION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_line.htm), [PUSHBUTTON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_pushbutton.htm), [SKIP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_skip.htm), [TAB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_tabbed.htm), or [ULINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_uline.htm). In the variant using [COMMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_comment.htm), either a node must be assigned or the addition FOR FIELD specified.

The addition FOR TABLE*|*NODE must not be used in statements to define blocks or lines with the additions [BEGIN*|*END OF LINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_line.htm), [BEGIN*|*END OF BLOCK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_block.htm), or [BEGIN*|*END OF TABBED BLOCK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_tabbed.htm), or when copying elements with an [INCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_include.htm).

Hints

-   If none of the elements in a block or a line are created on the selection screen, the entire block or line is not created.
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement SELECT-OPTIONS.

Addition 2   

... ID id

Effect

This addition defines an ID id containing a maximum of three characters for a screen element defined in the selection include for a logical database with the statement SELECTION-SCREEN. The ID must be specified directly.

The ID can be used to exclude screen elements from a selection screen version with the statement [SELECTION-SCREEN EXCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_version.htm).

Variants of the statement SELECTION-SCREEN can be used to combine an ID definition with [COMMENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_comment.htm), [DYNAMIC SELECTIONS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_dynamic.htm), [FIELD SELECTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_ldb_field.htm), [FUNCTION KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_functionkey.htm), [INCLUDE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_include.htm), [PUSHBUTTON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_pushbutton.htm), [SKIP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_skip.htm), [TAB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_tabbed.htm), and [ULINE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_uline.htm).

Hint

An ID cannot be defined for blocks defined using [BEGIN OF BLOCK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_block.htm) or [BEGIN OF *\[*TABBED*\]* BLOCK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselection-screen_tabbed.htm), since these are already identified by the name of the block.