---
title: "SELECTION-SCREEN FIELD SELECTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_fiel_shortref.htm) Obsolete Syntax SELECTION-SCREEN FIELD SELECTION FOR NODETABLE node ID id. Effect This variant of statement SELECTION-SCREEN(https://help.sap.com/doc/abapdocu_
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_field.htm"
abapFile: "abapselection-screen_ldb_field.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abapselection", "screen", "ldb", "field"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_abap_statements.htm) →  [LDB - Statements in Logical Databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_statements.htm) →  [SELECTION-SCREEN, ldb\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECTION-SCREEN%20FIELD%20SELECTION%2C%20ABAPSELECTION-SCREEN_LDB_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECTION-SCREEN FIELD SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_fiel_shortref.htm)

Obsolete Syntax

SELECTION-SCREEN FIELD SELECTION
                 FOR *{*NODE*|*TABLE*}* node *\[*ID id*\]*.

Effect

This variant of statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) defines a node in the structure of the [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") for field selection. If a node has the type T, the addition TABLE can be used instead of NODE. The statement cannot be used for type C nodes. A description of the node types is available under the statement [NODES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnodes.htm).

If a node is defined for field selection, an [executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is linked with the logical database can be used in the [GET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget-.htm) statement to control which fields in the node are to be read by the logical database. If the function module LDB\_PROCESS is used, the FIELD\_SELECTION parameter must be passed accordingly.

For more information about the addition ID, see [ldb\_additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_additions.htm).

Hints

-   During program execution, the named of the field symbols to be read are available in the [database program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_program_glosry.htm "Glossary Entry") in the internal table select\_fields in the structure rsfs\_tab\_fields from [type pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentype_pool_glosry.htm "Glossary Entry") RSFS.
-   See also [Field Selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_field_selections.htm).
-   If logical databases are no longer created, it is no longer necessary to use this variant of the statement SELECT-OPTIONS.