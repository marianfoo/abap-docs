  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_obsolete.htm) →  [Logical Databases (Obsolete)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb.htm) →  [Logical Databases - Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_abap_statements.htm) →  [Statements for Logical Databases](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenldb_reporting_statements.htm) → 

GET node

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_shortref.htm)

Obsolete Syntax

GET node *\[*LATE*\]* *\[*FIELDS f1 f2 ...*\]*.

Alternatives:

[1\. GET node *\[*FIELDS f1 f2 ...*\]*.](#!ABAP_ALTERNATIVE_1@1@)
[2\. GET node LATE *\[*FIELDS f1 f2 ...*\]*.](#!ABAP_ALTERNATIVE_2@2@)

Addition:

[... FIELDS f1 f2 ...](#!ABAP_ONE_ADD@1@)

Effect

The statement GET is only intended for use in [executable programs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") that are associated with a [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry"). GET can be used to handle two types of events after these types of executable programs are [submitted](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm):

-   Read events of the logical database
    
-   Closing a hierarchy level in the logical database
    

If a [list is written](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) during a GET event, an automatic line feed is created first.

Notes

-   The event blocks after GET are implemented internally as [procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry"). Declarative statements in GET event blocks create local data.
    
-   If logical databases are no longer used, the statement GET node is no longer needed either.
    

Alternative 1

GET node *\[*FIELDS f1 f2 ...*\]*.

Effect

This statement defines an event block whose event is raised by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") after an executable program [is submitted](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm), if the logical database with which the program is associated provides data in the work area node. The node work area must be declared with the [NODES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapnodes.htm) statement (or [TABLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables.htm)). The data can be processed in the event block.

GET node also controls the behavior of the logical database.

-   The logical database reads all data from all nodes that are not defined for field selection using [SELECTION-SCREEN FIELD SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_ldb_field.htm) in the logical database and are located on the access path of the logical database superior to node. This is independent of whether GET event blocks have been defined for these nodes or not. However, only the data of those nodes can be accessed for which a work area was declared using the NODES (or TABLES) statement.
    
-   If a field selection is defined in the logical database for those nodes on the access path of the logical database superior to node (and for which no GET event blocks are defined), all data is read only for the nodes for which a NODES (or TABLES) statement exists. For nodes without a NODES (or TABLES) statement, only the key fields are read, because the logical database needs the key fields to build the access path.
    

After the event block GET is [ended regularly](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenend_processing_blocks.htm), the nodes that are inferior in the hierarchical structure of the [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are processed (see [PUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapput.htm)).

At the end of a hierarchy level of the logical database, all fields of the work area node are set to hexadecimal null.

Alternative 2

GET node LATE *\[*FIELDS f1 f2 ...*\]*.

Effect

This statement defines an event block whose event is raised by the ABAP runtime environment after an executable program [is submitted](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreporting_process.htm), if the logical database has read all records of node node. For node and FIELDS, the same applies as for the previous variant. You can use this event block for final processing actions on the hierarchy level of the node.

Addition

... FIELDS f1 f2 ...

Effect

The addition FIELDS specifies that the logical database reads only the specified fields f1 f2 ... and the key fields for node node. As a prerequisite, the node must be defined for field selection in the logical database using [SELECTION-SCREEN FIELD SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen_ldb_field.htm). The content of the other fields of the work area is set to hexadecimal null.

Executable Example

[Example for Reporting Events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreport_abexa.htm)