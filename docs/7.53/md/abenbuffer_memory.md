  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) →  [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\)) → 

Table Buffering - Buffer Management

-   [Storage in the Memory](#@@ITOC@@ABENBUFFER_MEMORY_1)

-   [Buffer Monitor](#@@ITOC@@ABENBUFFER_MEMORY_2)

Storage in the Memory

Table buffering takes place in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of each AS Instance. The [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") consists of a central management structure, an alphabetical directory of tables, and a data area. The individual areas of a [generically buffered](javascript:call_link\('abenbuffer_generic_buffering.htm'\)) table or database view are managed as individual [fully buffered](javascript:call_link\('abenbuffer_complete_buffering.htm'\)) tables. The buffered data is saved in the data area as [internal tables](javascript:call_link\('abeninternal_table_glosry.htm'\) "Glossary Entry"). The data area is managed using SAP Memory Management.

When a buffered table or view is accessed using ABAP SQL, a search first takes place for the name of the table in the table directory and then a binary search takes place for the data.

In both single record buffering and in generic buffering, information about nonexistent rows in a table or view is also saved. The first time a nonexistent row is read, the key values of the primary key or generic key are loaded into the associated data area with an (otherwise empty) row and an appropriate flag. The next time an attempt is made to read this row, the buffer already indicates that this row does not exist.

Notes

-   The management of single record buffering is not quite as efficient as generic or full buffering. In single record buffering, the rows are loaded into the internal table in the data area one by one. In generic buffering and full buffering, all data of a table or view is loaded in a single step and sorted on the database.

-   When saved to memory, [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") are treated as such and are not transformed to type-dependent initial values.

Buffer Monitor

The buffer monitor is an SAP Memory Management tool (transaction ST02) used, among other things, to analyze the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") of the current AS Instance. This includes tasks such as:

-   Displaying the buffer load on the AS Instance over the last few days

-   Displaying and modifying the associated profile parameters

-   Displaying detailed information about the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry").

-   Displaying table statistics for analyzing the effectiveness of a buffer. The displayed values are useful when optimizing the associated profile parameters and when detecting expensively buffered tables.

For more information, see the Bufferings documentation on [SAP Help Portal](http://help.sap.com).