  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_oview.htm) →  [ABAP SQL - Table Buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_puffering.htm) → 

Table Buffering - Buffer Synchronization

-   [Invalidating and Updating](#@@ITOC@@ABENBUFFER_SYNCHRO_1)

-   [Eviction](#@@ITOC@@ABENBUFFER_SYNCHRO_2)

-   [Resetting the Buffer](#@@ITOC@@ABENBUFFER_SYNCHRO_3)

Invalidating and Updating

One buffered table or database view usually exists in the [table buffers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry") of every AS Instance. If a program in one of the AS Instances modifies data from a table using ABAP SQL, the data is updated as follows:

-   The data is modified in the database table on the database.

-   The buffers of the current AS Instance are invalidated directly.

-   In changes made using [work areas](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwork_area_glosry.htm "Glossary Entry"), the row in question is invalidated in tables with single record buffering. In generically buffered tables, the generic area in question is invalidated and in fully buffered tables, the whole table is invalidated.

-   In changes made using [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate_source.htm)UPDATE ... SET ... WHERE ... or [](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_where.htm)DELETE ... WHERE ... , the whole table is invalidated in tables with single record buffering and full buffering. In generically buffered tables, all generic areas are invalidated that are affected by a left-justified generic subkey.

-   In buffered [database views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_views.htm) or [CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_views.htm) views, the entire buffer is invalidated regardless of the buffering type. In client-specific views, however, this only affects the content of the current client.

-   The invalidated data is written to the log table DDLOG of the database interface.

-   Provided that no [database commits](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry") have been performed for a change to the buffered table, all database reads on the AS Instance (where the change was performed) access the database directly and bypass the buffer. After a [database commit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_commit_glosry.htm "Glossary Entry"), the following applies to reads on this AS Instance:

-   In the case of single record buffering and a change, which only relates to a single record in this type of table, the buffer is updated immediately on read access.

-   In the case of generic, completely buffered tables, the number of reads that access the database directly bypassing the buffer is 5 by default. The value is specified in the profile parameter zcsa/inval\_reload\_c. The buffer is updated during the read with the data from the database.

-   On all other AS Instances, the buffers are still in the old state. Reads are still performed via the buffer and can potentially access obsolete data. The buffers of this AS Instance are synchronized using the following asynchronous method:

-   In a specific time interval - the default interval is two minutes -, a synchronization is performed on every AS Instance. The value is specified in the profile parameter rdisp/bufreftime. The database interface reads the log table DDLOG and invalidates the buffer content in the same way as on the AS Instance where the original change was made.

-   After synchronization, in the case of single record buffering and a change, which only relates to a single record, the buffer is updated via read access. In the case of generic, completely buffered tables, the number of reads that access the database is 5 by default. The buffer is only properly updated afterwards - when the next read is performed. The value is specified in the profile parameter zcsa/sync\_reload\_c.

Notes

-   Asynchronous synchronization has the benefit of reducing the network load on the system, particularly when compared with synchronous methods where each change made to the buffered data of an AS Instance is broadcast immediately to all other AS Instances. The drawback of asynchronous synchronization is that, unlike synchronous methods, the data is not up-to-date in the time between two synchronizations.

-   The asynchronous method of buffer synchronization is a factor in the decision of whether to buffer a database table. Tables where many writes are performed are not suited to buffering, since the table buffers would then often be inconsistent and the system would constantly be invalidating and loading the buffers.

-   Changes made using a WHERE condition place a far greater load on buffer management on the current AS Instance than changes made to single rows.

-   In fully buffered client-specified tables or views, it should be noted that generic buffering is performed internally with the client column as a generic key. This means that an invalidation of the entire buffer only affects the content of the current client.

-   In systems with only one AS Instance, it is not necessary to fill the log table DDLOG with the modifications of the buffered tables and this can be switched off by setting the profile parameter rdisp/bufrefmode to sendoff, exeauto.

Eviction

If the free memory in the buffer falls below a predefined value or the quality of access is poor, data is evicted from the buffer. The quality of access depends on the number of accesses that can be met directly from the buffer.

The need for evictions is checked asynchronously at specific points in time (themselves determined using the accesses to the buffer), which means that the length of time between two evictions depends on the buffer load.

Data is evicted from those tables that are accessed least often. Here, accesses to a table are weighted differently depending on the time they take place. Older accesses, for example, are less significant than those that take place shortly before the eviction. This makes it possible to evict those tables from the buffer that are accessed a lot at one particular point in time but then no longer used.

Note

The individual generic areas of [generically buffered tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_generic_buffering.htm) are handled like standalone tables, which means that certain generic areas of a table can be evicted while other generic areas of the same table are kept in the buffer.

Resetting the Buffer

The table buffer of the current AS Instance can be reset by invalidating all its data. This is done by entering /$TAB in the [command field](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencommand_field_glosry.htm "Glossary Entry") in the [standard toolbar](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry") in SAP GUI.

Note

The table buffer should only be reset if inconsistencies have arisen in the buffer. It can take a long time to fill the table buffer in large systems and this can seriously affect performance.