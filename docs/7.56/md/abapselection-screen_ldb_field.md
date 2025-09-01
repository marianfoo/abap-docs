---
title: "SELECTION-SCREEN FIELD SELECTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_fiel_shortref.htm) Obsolete Syntax SELECTION-SCREEN FIELD SELECTION FOR NODETABLE node ID id. Effect This variant of statement SELECTION-SCREEN(https://help.sap.com/doc/abapdocu_756_i
version: "7.56"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_field.htm"
abapFile: "abapselection-screen_ldb_field.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abapselection", "screen", "ldb", "field"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_statements.htm) →  [SELECTION-SCREEN, ldb\_options](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb.htm) → 

SELECTION-SCREEN FIELD SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_fiel_shortref.htm)

Obsolete Syntax

SELECTION-SCREEN FIELD SELECTION
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen.htm) defines a node in the structure of the [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") for field selection. If a node has the type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnodes.htm).

If a node is defined for field selection, an [executable program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is linked with the logical database can be used in the [GET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget-.htm) statement to control which fields in the node are to be read by the logical database. If the function module LDB\_PROCESS is used, the FIELD\_SELECTION parameter must be passed accordingly.

For more information about the addition ID, see [ldb\_additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselection-screen_ldb_additions.htm).

Hints

-   During program execution, the named of the field symbols to be read are available in the [database program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_program_glosry.htm "Glossary Entry") in the internal table select\_fields in the structure rsfs\_tab\_fields from [type pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_pool_glosry.htm "Glossary Entry") RSFS.
-   See also [Field Selections](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_field_selections.htm).
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement SELECT-OPTIONS.