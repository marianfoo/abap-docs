  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_oview.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Table Buffering, ABENSAP_PUFFERING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

ABAP SQL - Table Buffering

[Table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") buffers data from the database in a [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current AS instance. Table buffering is possible for the following objects and takes place when they are accessed using ABAP SQL:

-   [DDIC database tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_db_table_glosry.htm "Glossary Entry")
    
    For more information, see [DDIC - Table Buffering of Database Tables](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_buffer.htm).
    
-   [DDIC database views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined in the ABAP Dictionary
    
    For more information, see [DDIC - Database Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_views.htm).
    
-   [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry") defined in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry")
    
    For more information., see [ABAP CDS - Table Buffering of CDS View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_buffering.htm).
    
-   [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry") defined in [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry")
    
    For more information., see [ABAP CDS - Table Buffering of CDS DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_buffering.htm).
    

The definitions determine whether and how a DDIC database table, DDIC database view or CDS view entity is buffered. Using buffering generally improves performance (by factors of between 50 and 500), since the data does not need to be transported between the AS ABAP and the database server each time and because process changes can be prevented.

When a DDIC or CDS object for which table buffering is defined is accessed using ABAP SQL, [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is active by default. Table buffering is performed by the [database interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_interface_glosry.htm "Glossary Entry") when buffered tables or views are accessed using ABAP SQL statements. If a program uses ABAP SQL to [read](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_reading.htm) data in a buffered table or view, the table or view is accessed using the table buffer, with some [exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_restrictions.htm). To do this, the database interface determines whether this data is in the table buffer of the current AS instance. If this is the case, the data is read directly from the buffer. If the data is not contained in the buffer of the AS instance, the data is read from the database and loaded into the buffer. This means the data can accessed from the buffer next time. [Writes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_writing.htm) cause [asynchronous buffer synchronization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_synchro.htm).

The [buffering type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_type.htm) defines which records are loaded into the buffer when it is accessed. There are also, however, variants of ABAP SQL statements that cannot be executed using the table buffer and which therefore [bypass](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_restrictions.htm) table buffering. [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_glosry.htm "Glossary Entry") access or [AMDP methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_method_glosry.htm "Glossary Entry") are applied to the database directly and therefore always bypass table buffering.

-   [Buffering type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_type.htm)
-   [Buffer synchronization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_synchro.htm)
-   [Buffer management](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_memory.htm)
-   [Restrictions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_restrictions.htm)
-   [SQL expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_expressions.htm)

Hints

-   Typical candidates for buffering are customizing tables and system tables. In certain cases, customizing-like tables with master data can also be buffered. If it is vital that current data is accessed from a buffered table, the addition [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_additions.htm) of the statement SELECT can be used. If this addition is used a lot, the table should be checked for its suitability for buffering or whether the current data is really always required.
-   Buffering is not recommended for tables in the following cases:
    -   The application must always have access to the current data and the delay caused by [asynchronous synchronization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_synchro.htm) is not acceptable.
    -   Many writes are performed on the tables. If more than one percent of the accesses are writes, buffering should be avoided, so that the extra work caused by synchronization does not outweigh the benefits of buffering.
-   [Null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry") are handled as null values in the table buffer. They are not transformed to type-dependent initial values.
-   Tables or views that can also be accessed using [Native SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_glosry.htm "Glossary Entry") should not be buffered. If Native SQL statements or AMDP methods modify data in buffered tables or views, this is ignored by the database interface and the buffers are not synchronized accordingly. This can cause inconsistencies between the data in the buffers and on the database.
-   A self-defined buffering of formatted data in the shared memory is possible using [shared objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_glosry.htm "Glossary Entry").
-   Except in the case of ABAP SQL database access, table buffering also applies to database access from classic [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry").
-   When accessing data clusters in export/import tables using the statements [EXPORT ... TO DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapexport_data_cluster.htm) and [IMPORT ... FROM DATABASE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapimport_data_cluster.htm), [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not supported.
-   If table buffering is [enabled](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_buffering.htm) for a [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), it is implicitly applied to its [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). For [CDS view entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), table buffering is applied directly to the CDS entity.

Continue
[Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_type.htm)
[Table Buffering - Buffer Synchronization](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_synchro.htm)
[Table Buffering - Buffer Management](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_memory.htm)
[Table Buffering - Restrictions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_restrictions.htm)
[Table Buffering - SQL Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_expressions.htm)