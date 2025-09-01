---
title: "CHECK SELECT-OPTIONS"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_shortref.htm) Obsolete Syntax CHECK SELECT-OPTIONS. Effect This form of the statement CHECK(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_processing_blocks.htm) for exiting processing bloc
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_select-options.htm"
abapFile: "abapcheck_select-options.htm"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "data", "abapcheck", "options"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_abap_statements.htm) →  [LDB - Statements for Logical Databases](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenldb_reporting_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CHECK%20SELECT-OPTIONS%2C%20ABAPCHECK_SELECT-OPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CHECK SELECT-OPTIONS

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_shortref.htm)

Obsolete Syntax

CHECK SELECT-OPTIONS.

Effect

This form of the statement [CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_processing_blocks.htm) for exiting processing blocks is only intended for use in executable programs that are linked with a [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"), and then only in the event blocks for the [reporting events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry") [GET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm). It must not be used in methods.

The statement checks whether the content of the [interface work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") that was filled for the current GET event by the logical database meets the conditions in all [selection tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_table_glosry.htm "Glossary Entry") that are linked with the current node of the logical database. The name of the node is taken statically from the next highest GET statement in the program. The following restrictions apply:

-   The statement CHECK SELECT-OPTIONS is only effective when the type of the current node of the logical database is a DDIC database table.
-   If the node is intended for dynamic selections, the statement evaluates only those selection criteria that were declared using the NO DATABASE SELECTION addition of the [SELECT-OPTIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect-options_ldb.htm) statement.

If the conditions in one of the selection tables are not met, and the statement is not listed within a loop, the GET event block is exited and the runtime framework behaves as with the other variant of [CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_processing_blocks.htm) used for exiting processing blocks. If the statement is listed within a loop, then only the current loop pass is exited.

Hints

-   For performance reasons, the CHECK statement should only be used to check data selections during GET events if the selections provided by the logical database are not sufficient.
-   The statement CHECK SELECT-OPTIONS should not be used within a loop, since it otherwise only exits the current loop pass.
-   If logical databases are no longer used, it is no longer necessary to use this variant of the statement CHECK.

Example

Exiting a GET event block if the content of the components seatsmax and seatsocc of the interface work area sflight do not meet the conditions in the selection tables s\_max or s\_occ. Before the program can be processed, it must be linked with the logical database F1S.

NODES sflight.
SELECT-OPTIONS: s\_max FOR sflight-seatsmax,
                s\_occ FOR sflight-seatsocc.
GET sflight.
  cl\_demo\_output=>write( |{ sflight-carrid } {
                            sflight-connid }| ).
  CHECK SELECT-OPTIONS.
  cl\_demo\_output=>write( |{ sflight-seatsmax } {
                            sflight-seatsocc }| ).
END-OF-SELECTION.
  cl\_demo\_output=>display( ).

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Incorrect OPTION in the SELECT-OPTIONS table or the RANGES table
    Runtime error: CHECK\_SELOPT\_ILLEGAL\_OPTION
-   Cause: Incorrect SIGN in the SELECT-OPTIONS table or the RANGES table
    Runtime error: CHECK\_SELOPT\_ILLEGAL\_SIGN
-   Cause: Access to a nonexistent memory area
    Runtime error: CHECK\_ADDR\_NOT\_ALLOC