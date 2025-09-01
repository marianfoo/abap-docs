---
title: "END-OF-SELECTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-selection_shortref.htm) Obsolete Syntax END-OF-SELECTION. Effect The statement END-OF-SELECTION is only intended for use in executable programs(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexe
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-selection.htm"
abapFile: "abapend-of-selection.htm"
keywords: ["select", "do", "if", "try", "data", "abapend", "selection"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_abap_statements.htm) →  [LDB - Statements for Logical Databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenldb_reporting_statements.htm) → 

END-OF-SELECTION

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapend-of-selection_shortref.htm)

Obsolete Syntax

END-OF-SELECTION.

Effect

The statement END-OF-SELECTION is only intended for use in [executable programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that are linked with a [logical database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). The statement defines an event block whose event is raised as follows by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") during the [process flow](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreporting_process.htm) of the executable program:

-   If the executable program is linked with a logical database, END-OF-SELECTION is raised if the logical database has completed its work.
-   In an executable program without a logical database, END-OF-SELECTION is raised directly after [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapstart-of-selection.htm) (or [START-OF-EDITING](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapstart-of-editing.htm)).

Hints

-   In this event block, all data read by the logical database can be processed in summarized form.
-   In an executable program without a logical database, there is no need to implement the event block END-OF-SELECTION.

Executable Example

[Logical Database, Linked with a Program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenreport_abexa.htm)