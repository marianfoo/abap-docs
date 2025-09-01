---
title: "Table Buffering - Buffer Management"
description: |
  -   Storage in the Memory(#abenbuffer-memory-1-------buffer-monitor---@ITOC@@ABENBUFFER_MEMORY_2) Storage in the Memory Table buffering takes place in the shared memory(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm 'Glossary Entry') of each AS instance.
version: "7.57"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_memory.htm"
abapFile: "abenbuffer_memory.htm"
keywords: ["do", "if", "try", "data", "internal-table", "abenbuffer", "memory"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_puffering.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Table Buffering - Buffer Management, ABENBUFFER_MEMORY, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

Table Buffering - Buffer Management

-   [Storage in the Memory](#abenbuffer-memory-1-------buffer-monitor---@ITOC@@ABENBUFFER_MEMORY_2)

Storage in the Memory   

Table buffering takes place in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") of each AS instance. The [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") consists of a central management structure, an alphabetical directory of tables, and a data area. The individual areas of a [generically buffered](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_generic_buffering.htm) table or view are managed as individual [fully buffered](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_complete_buffering.htm) tables. The buffered data is stored in the data area as [internal tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_table_glosry.htm "Glossary Entry"). The data area is managed using SAP Memory Management.

When a buffered table or view is accessed using ABAP SQL, a search first takes place for the name of the table in the table directory and then a binary search takes place for the data.

In both single record buffering and in generic buffering, information about nonexistent rows in a table or view is also saved. The first time a nonexistent row is read, the key values of the primary key or generic key are loaded into the associated data area with an otherwise empty row and a corresponding flag. The next time an attempt is made to read this row, the buffer already indicates that this row does not exist.

Hints

-   The management of single record buffering slightly less efficient than generic or full buffering. In single record buffering, the rows are loaded into the internal table in the data area gradually. In generic buffering and full buffering, all data of a table or view is loaded in a single step and sorted on the database.
-   When saved to memory, [null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry") are handled as such and are not transformed to type-dependent initial values.

Buffer Monitor   

The buffer monitor is an SAP Memory Management tool (transaction ST02) used, among other things, to analyze the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") of the current AS instance. This includes tasks such as:

-   Displaying the buffer load on the AS instance over the last few days
-   Displaying and modifying the associated profile parameters
-   Displaying detailed information about the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry").
-   Displaying table statistics for analyzing the effectiveness of a buffer. The displayed values are useful when optimizing the associated profile parameters and when detecting expensively buffered tables.

For more information, see the documentation Buffering in SAP Help Portal.