---
title: "SELECT-OPTIONS, NO DATABASE SELECTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options_shortref.htm) Obsolete Syntax ...   NO DATABASE SELECTION  ... Effect The addition NO DATABASE SELECTION of the statement SELECT-OPTIONS(https://help.sap.com/doc/abapdocu_latest_index_htm/l
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options_no_db_sel.htm"
abapFile: "abapselect-options_no_db_sel.htm"
keywords: ["select", "do", "if", "try", "data", "abapselect", "options", "sel"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_abap_statements.htm) →  [LDB - Statements for Logical Databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_reporting_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT-OPTIONS%2C%20NO%20DATABASE%20SELECTION%2C%20ABAPSELECT-OPTIONS_NO_DB_SEL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

SELECT-OPTIONS, NO DATABASE SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options_shortref.htm)

Obsolete Syntax

...  *\[* NO DATABASE SELECTION *\]* ...

Effect

The addition NO DATABASE SELECTION of the statement [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options.htm) is only possible in an [executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is linked to a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") and controls the passing of the [selection table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_table_glosry.htm "Glossary Entry") to the logical database in the following situations:

-   It is used in an [executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that is linked with a logical database.
-   A component of a node in the linked logical database is specified for dobj after the addition [FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect-options_for.htm) and is declared in the program with a [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm) or [NODES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnodes.htm) statement.
-   The node in the logical database is designed for dynamic selections.

If this addition is specified, the [selection table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_table_glosry.htm "Glossary Entry") is not passed to the [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") as a dynamic selection after [selection screen processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Hint

If logical databases are no longer used, it is no longer necessary to use this addition of the statement SELECT-OPTIONS.