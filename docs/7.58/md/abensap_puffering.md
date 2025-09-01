---
title: "ABAP SQL - Table Buffering"
description: |
  Table buffering(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm 'Glossary Entry') buffers data from the database in a table buffer(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm 'Glossary Entry') in the shared mem
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensap_puffering.htm"
abapFile: "abensap_puffering.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abensap", "puffering"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql.htm) →  [ABAP SQL - Overview](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_oview.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Table%20Buffering%2C%20ABENSAP_PUFFERING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Table Buffering

[Table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") buffers data from the database in a [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current AS instance. Table buffering is possible for the following objects and takes place when they are accessed using ABAP SQL:

-   [DDIC database tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_db_table_glosry.htm "Glossary Entry")
    
    For more information, see [DDIC - Table Buffering of Database Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_buffer.htm).
    
-   [DDIC database views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined in the ABAP Dictionary
    
    For more information, see [DDIC - Database Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_views.htm).
    
-   [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry") defined in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry")
    
    For more information., see [ABAP CDS - Table Buffering of CDS View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_buffering.htm).
    
-   [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry") defined in [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry")
    
    For more information., see [ABAP CDS - Table Buffering of CDS DDIC-Based Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_buffering.htm).
    

Whether and how a DDIC database table, DDIC database view or CDS view entity is buffered view is buffered is determined when it is [defined](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_buffer.htm). Using buffering generally improves performance (by factors of between 50 and 500), since the data does not need to be transported between the AS ABAP and the database server each time and because changes between can be prevented.

When a DDIC or CDS object for which table buffering is defined is accessed using ABAP SQL, [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") is active by default. The buffering of the tabular data in table buffer is performed by the [database interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_interface_glosry.htm "Glossary Entry"). The [buffering type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_type.htm) defines which records are loaded into the buffer when it is accessed. When such database tables of views are accessed using ABAP SQL statements in a program the following process takes place:

-   For [read accesses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_reading.htm), the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry") determines whether this data is in the table buffer of the current AS instance. If this is the case, the data is read directly from the buffer. If the data is not contained in the buffer of the AS instance, the data is read from the database and loaded into the buffer. This means the data can accessed from the buffer next time.
-   For [write accesses](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_writing.htm), an [asynchronous buffer synchronization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_synchro.htm) is invoked.

For processing the ABAP SQL statements for the buffered tabular data the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry") of the [ABAP SQL interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_interface_glosry.htm "Glossary Entry") is used. There are restrictions on accessing the table buffer for the following reasons.

-   The ABAP SQL engine supports a large subset of ABAP SQL but there are also some [restrictions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm). If an ABAP SQL statement is used that is not supported by the ABAP SQL engine, a buffered table cannot be accessed in the table buffer. The table buffer is bypassed and the database table is accessed on the database.
-   Depending on the [buffering type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_type.htm), further [restrictions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_restrictions.htm) can cause a bypassing of the table buffer.

The following sections go into more detail about table buffering:

-   [Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_type.htm)
-   [Table Buffering - Buffer Synchronization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_synchro.htm)
-   [Table Buffering - Buffer Management](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_memory.htm)
-   [Table Buffering - Restrictions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_restrictions.htm)

[Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") access or [AMDP methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") are applied to the database directly and therefore always bypass table buffering.

Hints

-   Typical candidates for buffering are customizing tables and system tables. In certain cases, customizing-like tables with master data can also be buffered. If it is vital that current data is accessed from a buffered table, the addition [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_bypassing_buffer.htm) of the statement SELECT can be used. If this addition is used a lot, the table should be checked for its suitability for buffering or whether the current data is really always required.
-   Buffering is not recommended for tables in the following cases:
    -   The application must always have access to the current data and the delay caused by [asynchronous synchronization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_synchro.htm) is not acceptable.
    -   Many writes are performed on the tables. If more than one percent of the accesses are writes, buffering should be avoided, so that the extra work caused by synchronization does not outweigh the benefits of buffering.
-   When accessing data clusters in export/import tables using the statements [EXPORT ... TO DATABASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexport_data_cluster.htm) and [IMPORT ... FROM DATABASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapimport_data_cluster.htm), [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not supported.
-   If table buffering is [enabled](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_buffering.htm) for a [CDS DDIC-based views (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v1_view_glosry.htm "Glossary Entry"), it is implicitly applied to its [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). For [CDS view entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), table buffering is applied directly to the CDS entity.
-   Tables or views that can also be accessed using [AMDP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_glosry.htm "Glossary Entry") should not be buffered. If AMDP methods modify data in buffered tables or views, this is ignored by the database interface and the buffers are not synchronized accordingly. This can cause inconsistencies between the data in the buffers and on the database.
-   The latter is also true if the tables views can be accessed using [Native SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennative_sql_glosry.htm "Glossary Entry") and if native SQL statements modify data in buffered tables or views.
-   Except in the case of ABAP SQL database access, table buffering also applies to database access from classic [dynpros](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_glosry.htm "Glossary Entry").
-   A user-defined buffering of formatted data in the shared memory is possible using [shared objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_objects_glosry.htm "Glossary Entry").

Continue
[Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_type.htm)
[Table Buffering - Buffer Synchronization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_synchro.htm)
[Table Buffering - Buffer Management](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_memory.htm)
[Table Buffering - Restrictions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbuffer_restrictions.htm)