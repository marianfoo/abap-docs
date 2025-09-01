  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Processing of External Data](javascript:call_link\('abendata_storage_obsolete.htm'\)) →  [Logical Databases (Obsolete)](javascript:call_link\('abenldb.htm'\)) →  [Logical Databases - Statements](javascript:call_link\('abenldb_abap_statements.htm'\)) →  [Statements in Logical Databases](javascript:call_link\('abenldb_statements.htm'\)) →  [SELECTION-SCREEN - ldb\_options](javascript:call_link\('abapselection-screen_ldb.htm'\)) → 

SELECTION-SCREEN - ldb\_additions

[Quick Reference](javascript:call_link\('abapselection-screen_shortref.htm'\))

Obsolete Syntax

... FOR *{*TABLE*|*NODE*}* node *\[*ID id*\]* ...

Extras:

[1\. ... FOR *{*TABLE*|*NODE*}* node](#!ABAP_ADDITION_1@1@)
[2\. ... ID id](#!ABAP_ADDITION_2@2@)

Effect

These additions of the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) assign a node of the logical database and/or an ID to selection screen elements of a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").

Addition 1

... FOR *{*TABLE*|*NODE*}* node

Effect

This addition means that all the screen elements created with SELECTION-SCREEN in the selection include for a logical database must be assigned to a node in the structure for the logical database. If a node belongs to type T, the addition TABLE can be used instead of NODE. For a description of the node types, see the statement [NODES](javascript:call_link\('abapnodes.htm'\)).

When the standard selection screen is created for an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") that is linked to the logical database, it only displays screen elements for which an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") is declared with NODES or [TABLES](javascript:call_link\('abaptables.htm'\)) for the assigned node or a node below it in the hierarchy. If the function module LDB\_PROCESS is used, the assigned node node must be requested so that the screen element is created.

The addition FOR TABLE*|*NODE must be specified for the variants of the statement SELECTION-SCREEN with [POSITION](javascript:call_link\('abapselection-screen_line.htm'\)), [PUSHBUTTON](javascript:call_link\('abapselection-screen_pushbutton.htm'\)), [SKIP](javascript:call_link\('abapselection-screen_skip.htm'\)), [TAB](javascript:call_link\('abapselection-screen_tabbed.htm'\)), or [ULINE](javascript:call_link\('abapselection-screen_uline.htm'\)). In the variant using [COMMENT](javascript:call_link\('abapselection-screen_comment.htm'\)), either a node must be assigned or the addition FOR FIELD specified.

The addition FOR TABLE*|*NODE cannot be used in statements to define blocks or lines with the additions [BEGIN*|*END OF LINE](javascript:call_link\('abapselection-screen_line.htm'\)), [BEGIN*|*END OF BLOCK](javascript:call_link\('abapselection-screen_block.htm'\)), or [BEGIN*|*END OF TABBED BLOCK](javascript:call_link\('abapselection-screen_tabbed.htm'\)), or when copying elements with an [INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\)).

Notes

-   If none of the elements in a block or a line are created on the selection screen, the entire block or line is not created.
    
-   If logical databases are no longer created, this variant of the statement SELECT-OPTIONS does not need to be used either.
    

Addition 2

... ID id

Effect

This addition defines an ID id containing a maximum of three characters for a screen element defined in the selection include for a logical database with the statement SELECTION-SCREEN. The ID must be specified directly.

The ID can be used to exclude screen elements from a selection screen version with the statement [SELECTION-SCREEN EXCLUDE](javascript:call_link\('abapselection-screen_ldb_version.htm'\)).

Variants of the statement SELECTION-SCREEN can be used to combine an ID definition with [COMMENT](javascript:call_link\('abapselection-screen_comment.htm'\)), [DYNAMIC SELECTIONS](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\)), [FIELD SELECTION](javascript:call_link\('abapselection-screen_ldb_field.htm'\)), [FUNCTION KEY](javascript:call_link\('abapselection-screen_functionkey.htm'\)), [INCLUDE](javascript:call_link\('abapselection-screen_include.htm'\)), [PUSHBUTTON](javascript:call_link\('abapselection-screen_pushbutton.htm'\)), [SKIP](javascript:call_link\('abapselection-screen_skip.htm'\)), [TAB](javascript:call_link\('abapselection-screen_tabbed.htm'\)), and [ULINE](javascript:call_link\('abapselection-screen_uline.htm'\)).

Note

An ID cannot be defined for blocks defined using [BEGIN OF BLOCK](javascript:call_link\('abapselection-screen_block.htm'\)) or [BEGIN OF *\[*TABBED*\]* BLOCK](javascript:call_link\('abapselection-screen_tabbed.htm'\)), since these are already identified by the name of the block.