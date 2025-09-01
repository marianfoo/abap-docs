---
title: "Open SQL - Table Buffering"
description: |
  Table buffering(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm 'Glossary Entry') buffers data from database tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm 'Glossary Entry') or database views(https://help.
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_puffering.htm"
abapFile: "abensap_puffering.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abensap", "puffering"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Overview](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_oview.htm) → 

Open SQL - Table Buffering

[Table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry") buffers data from [database tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry") or [database views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_view_glosry.htm "Glossary Entry") defined in ABAP Dictionary in a [table buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_buffer_glosry.htm "Glossary Entry") in the [shared memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_memory_glosry.htm "Glossary Entry") of the current application server. The [definition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_buffer.htm) determines whether and how a database table or database view is buffered. Using buffering generally produces much improved performance (by factors of between 50 and 500), since the data does not need to be transported between the application server and the database server each time and because processes do not need to be switched.

-   When a [database table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry") or a [database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_view_glosry.htm "Glossary Entry") is accessed using Open SQL, [table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry") is active by default if it is [defined](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_buffer.htm) in ABAP Dictionary for the database table or view.

-   Table buffering can also be [switched on](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_sap_puffer.htm) for a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") and is applied to the associated [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry").

Table buffering is applied by the [database interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_interface_glosry.htm "Glossary Entry") when buffered tables or views are accessed using Open SQL statements. If a program uses Open SQL to [read](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_reading.htm) data in a buffered table or view, the table or view is accessed using the table buffer (with some [exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_restrictions.htm)). To do this, the database interface determines whether this data is in the table buffer of the current applications server. If this is the case, the data is read directly from the buffer. If the data is not in the buffer of the application server, the data is read from the database and loaded into the buffer. This means the data can accessed from the buffer next time. [Writes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_writing.htm) cause the [buffer to be synchronized asynchronously](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_synchro.htm).

The [buffering type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_kind.htm) defines which records are loaded to the buffer when accessed. There are also, however, variants of Open SQL statements that cannot be executed using the table buffer and which therefore [bypass](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_restrictions.htm) table buffering. [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") access or [AMDP methods](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_method_glosry.htm "Glossary Entry") are applied to the database directly and therefore always bypass table buffering.

-   [Buffering type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_kind.htm)

-   [Buffer synchronization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_synchro.htm)

-   [Buffer management](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_memory.htm)

-   [Restrictions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_restrictions.htm)

Notes

-   Typical candidates for buffering are customizing tables and system tables. In certain cases, customizing-like tables with master data can also be buffered. If it is vital that current data is accessed from a buffered table, the addition [BYPASSING BUFFER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_additions.htm) of the statement SELECT can be used. If this addition is used a lot, the table should be checked for its suitability for buffering or whether the current data is really always required.

-   Buffering is not recommended for tables in the following cases:

-   The application must always have access to the current data and the delay caused by [asynchronous synchronization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_synchro.htm) is not acceptable.

-   Many writes are performed on the tables. If more than one percent of the accesses are writes, buffering should be avoided. If not, the extra work caused by synchronization could outweigh the benefits of buffering.

-   When saved to the table buffer, [null values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry") are transformed to type-dependent initial values. Special care should be taken here when handling [buffered CDS Views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_sap_puffer.htm). Reads made on the buffer can produce results different from reads made on the database.

-   Tables or views that can also be accessed using [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") or [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry") should not be buffered. If Native SQL statements or AMDP methods modify data in buffered tables or views, this is ignored by the database interface and the buffers are not synchronized accordingly. This can cause inconsistencies between the data in the buffers and on the database.

-   A self-defined buffering of formatted data in the shared memory can be produced using [shared objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_objects_glosry.htm "Glossary Entry").

-   Except in the case of Open SQL database access, table buffering also applies in database access from classic [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry").

Continue
[Table Buffering - Buffering Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_kind.htm)
[Table Buffering - Buffer Synchronization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_synchro.htm)
[Table Buffering - Buffer Management](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_memory.htm)
[Table Buffering - Restrictions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuffer_restrictions.htm)