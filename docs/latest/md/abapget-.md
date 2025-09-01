---
title: "GET node"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_shortref.htm) Obsolete Syntax GET node LATE FIELDS f1 f2 .... Alternatives: 1. GET node FIELDS f1 f2 ....(#!ABAP_ALTERNATIVE_1@1@) 2. GET node LATE FIELDS f1 f2 ....(#!ABAP
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget-.htm"
abapFile: "abapget-.htm"
keywords: ["select", "do", "while", "if", "try", "data", "types", "abapget"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (LDB, Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb.htm) →  [LDB - Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_abap_statements.htm) →  [LDB - Statements for Logical Databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_reporting_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20node%2C%20ABAPGET-%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET node

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_shortref.htm)

Obsolete Syntax

GET node *\[*LATE*\]* *\[*FIELDS f1 f2 ...*\]*.

Alternatives:

[1\. GET node *\[*FIELDS f1 f2 ...*\]*.](#!ABAP_ALTERNATIVE_1@1@)
[2\. GET node LATE *\[*FIELDS f1 f2 ...*\]*.](#!ABAP_ALTERNATIVE_2@2@)

Addition:

[... FIELDS f1 f2 ...](#!ABAP_ONE_ADD@1@)

Effect

The statement GET is only intended for use in [executable programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that are linked with a [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). GET can be used to handle two types of events while executable program of this type are [processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm):

-   Read events of the logical database
-   Closing a hierarchy level in the logical database

If a [list is written](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) during a GET event, an automatic line break is created beforehand.

Hints

-   The event blocks after GET are implemented internally as [procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry"). Declarative statements in GET event blocks create local data.
-   If logical databases are no longer used, it is no longer necessary to use the statement GET node either.

Alternative 1   

GET node *\[*FIELDS f1 f2 ...*\]*.

Effect

This statement defines an event block whose event is raised by the [ABAP runtime framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_runtime_frmwk_glosry.htm "Glossary Entry") after an executable program [is submitted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm), if the logical database with which the program is linked provides data in the work area node. The node work area must be declared using the [NODES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnodes.htm) statement (or [TABLES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptables.htm)). The data can be processed in the event block.

GET node also controls the behavior of the logical database.

-   The logical database reads all data from all nodes that are not defined for field selection using [SELECTION-SCREEN FIELD SELECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_field.htm) in the logical database and are located on the access path of the logical database superior to node. This is independent of whether GET event blocks have been defined for these nodes or not. However, only the data of those nodes can be accessed for which a work area was declared using the NODES (or TABLES) statement.
-   If a field selection is defined in the logical database for nodes on the access path of the logical database superior to node and for which no GET event blocks are defined, all data is read only for the nodes with a NODES (or TABLES) statement exists. For nodes without a NODES (or TABLES) statement, only the key fields are read, since the logical database needs the key fields to build the access path.

After the event block GET is [ended regularly](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenend_processing_blocks.htm), the nodes that are inferior in the hierarchical structure of the [logical database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are processed (see [PUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapput.htm)).

At the end of a hierarchy level of the logical database, all fields of the work area node are set to hexadecimal zero.

Alternative 2   

GET node LATE *\[*FIELDS f1 f2 ...*\]*.

Effect

This statement defines an event block whose event is raised by the ABAP runtime framework after an executable program [is submitted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreporting_process.htm), if the logical database has read all records of node node. The same applies to node and FIELDS as to the previous variant. This event block can be used for final processing actions for the hierarchy level of the node.

Addition   

... FIELDS f1 f2 ...

Effect

The addition FIELDS specifies that the logical database reads only the specified fields f1 f2 ... and the key fields for node node. To do this, the node must be defined for field selection in the logical database using [SELECTION-SCREEN FIELD SELECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_field.htm). The content of the remaining fields of the work area is set to hexadecimal zero.

Executable Example

[Example for Reporting Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreport_abexa.htm)