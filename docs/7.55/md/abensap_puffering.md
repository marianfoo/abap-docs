  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\)) → 

ABAP SQL - Table Buffering

[Table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") buffers data from [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") or [DDIC database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") defined in the ABAP Dictionary in a [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the current AS instance. The [definition](javascript:call_link\('abenddic_database_tables_buffer.htm'\)) determines whether and how a DDIC database table or DDIC database view is buffered. Using buffering generally improves performance (by factors of between 50 and 500), since the data does not need to be transported between the AS ABAP and the database server each time and because process changes can be prevented.

-   When a [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") or a [DDIC database view](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry") is accessed using ABAP SQL, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is active by default if it is [defined](javascript:call_link\('abenddic_database_tables_buffer.htm'\)) in the ABAP Dictionary for the DDIC database table or DDIC view.

-   Table buffering can also be [enabled](javascript:call_link\('abencds_v1_buffering.htm'\)) for a [CDS DDIC-based views](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), associated with a [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") and applied to this [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry").

Table buffering is performed by the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") when buffered tables or views are accessed using ABAP SQL statements. If a program uses ABAP SQL to [read](javascript:call_link\('abenopen_sql_reading.htm'\)) data in a buffered table or view, the table or view is accessed using the table buffer, with some [exceptions](javascript:call_link\('abenbuffer_restrictions.htm'\)). To do this, the database interface determines whether this data is in the table buffer of the current AS instance. If this is the case, the data is read directly from the buffer. If the data is not contained in the buffer of the AS instance, the data is read from the database and loaded into the buffer. This means the data can accessed from the buffer next time. [Writes](javascript:call_link\('abenopen_sql_writing.htm'\)) cause [asynchronous buffer synchronization](javascript:call_link\('abenbuffer_synchro.htm'\)).

The [buffering type](javascript:call_link\('abenbuffer_kind.htm'\)) defines which records are loaded into the buffer when it is accessed. There are also, however, variants of ABAP SQL statements that cannot be executed using the table buffer and which therefore [bypass](javascript:call_link\('abenbuffer_restrictions.htm'\)) table buffering. [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") access or [AMDP methods](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") are applied to the database directly and therefore always bypass table buffering.

-   [Buffering type](javascript:call_link\('abenbuffer_kind.htm'\))

-   [Buffer synchronization](javascript:call_link\('abenbuffer_synchro.htm'\))

-   [Buffer management](javascript:call_link\('abenbuffer_memory.htm'\))

-   [Restrictions](javascript:call_link\('abenbuffer_restrictions.htm'\))

-   [SQL expressions](javascript:call_link\('abenbuffer_expressions.htm'\))

Hints

-   Typical candidates for buffering are customizing tables and system tables. In certain cases, customizing-like tables with master data can also be buffered. If it is vital that current data is accessed from a buffered table, the addition [BYPASSING BUFFER](javascript:call_link\('abapselect_additions.htm'\)) of the statement SELECT can be used. If this addition is used a lot, the table should be checked for its suitability for buffering or whether the current data is really always required.

-   Buffering is not recommended for tables in the following cases:

-   The application must always have access to the current data and the delay caused by [asynchronous synchronization](javascript:call_link\('abenbuffer_synchro.htm'\)) is not acceptable.

-   Many writes are performed on the tables. If more than one percent of the accesses are writes, buffering should be avoided, so that the extra work caused by synchronization does not outweigh the benefits of buffering.

-   [Null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") are handled as null values in the table buffer. They are not transformed to type-dependent initial values.

-   Tables or views that can also be accessed using [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") should not be buffered. If Native SQL statements or AMDP methods modify data in buffered tables or views, this is ignored by the database interface and the buffers are not synchronized accordingly. This can cause inconsistencies between the data in the buffers and on the database.

-   A self-defined buffering of formatted data in the shared memory is possible using [shared objects](javascript:call_link\('abenshared_objects_glosry.htm'\) "Glossary Entry").

-   Except in the case of ABAP SQL database access, table buffering also applies to database access from classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry").

Continue
[Table Buffering - Buffering Types](javascript:call_link\('abenbuffer_kind.htm'\))
[Table Buffering - Buffer Synchronization](javascript:call_link\('abenbuffer_synchro.htm'\))
[Table Buffering - Buffer Management](javascript:call_link\('abenbuffer_memory.htm'\))
[Table Buffering - Restrictions](javascript:call_link\('abenbuffer_restrictions.htm'\))
[Table Buffering - SQL expressions](javascript:call_link\('abenbuffer_expressions.htm'\))