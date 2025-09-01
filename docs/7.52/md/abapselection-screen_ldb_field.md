---
title: "SELECTION-SCREEN FIELD SELECTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_fiel_shortref.htm) Obsolete Syntax SELECTION-SCREEN FIELD SELECTION FOR NODETABLE node ID id. Effect This variant of statement SELECTION-SCREEN(https://help.sap.com/doc/abapdocu_752_i
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_field.htm"
abapFile: "abapselection-screen_ldb_field.htm"
keywords: ["select", "do", "while", "if", "try", "data", "types", "internal-table", "abapselection", "screen", "ldb", "field"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_abap_statements.htm) →  [Statements in Logical Databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_statements.htm) →  [SELECTION-SCREEN - ldb\_options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb.htm) → 

SELECTION-SCREEN FIELD SELECTION

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_fiel_shortref.htm)

Obsolete Syntax

SELECTION-SCREEN FIELD SELECTION
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen.htm) defines a node in the structure of the [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") for field selection. If a node belongs to type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnodes.htm).

If a node is defined for field selection, an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") associated with the logical database in the [GET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget-.htm) statement to control which fields in the node are read by the logical database. If the function module LDB\_PROCESS is used, the parameter FIELD\_SELECTION must be specified accordingly.

More information about the addition ID is available in [ldb\_additions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselection-screen_ldb_additions.htm).

Notes

-   While the [database program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_program_glosry.htm "Glossary Entry") is running, the names of the fields to be read are available in the internal table SELECT\_FIELDS in the structure RSFS\_TAB\_FIELDS from [type group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_group_1_glosry.htm "Glossary Entry") RSFS.
    
-   See also [Field Selections](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenldb_field_selections.htm).
    
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement SELECT-OPTIONS.