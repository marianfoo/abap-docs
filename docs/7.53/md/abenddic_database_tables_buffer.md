  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [Table-Specific Technical Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

Table Buffering of Database Tables

It is possible to specify whether [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry") in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") of an AS Instance is allowed for a database table and also how it is performed.

-   [Buffering Permission](#abenddic-database-tables-buffer-1--------buffering-type---@ITOC@@ABENDDIC_DATABASE_TABLES_BUFFER_2)

The table buffer is managed by the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry"). When [ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") reads are made on tables with activated buffering or if these tables are accessed from classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") , the table buffer is used implicitly.

Buffering Permission

Table buffering can be permitted for a database table as follows:

-   Buffering not allowed

Table buffering is not performed for the table. The database interface always passes the reads to the database table, where they can use the current data directly. This setting also dictates that table buffering not be activated for this table in any other systems due to the way the table is used.

-   Buffering allowed, but switched off

Table buffering is not performed for the table when delivered. This setting indicates, however, that buffering is possible in principle and can be activated in other systems depending on how the table is used.

-   Buffering switched on

Table buffering is performed for the table. If possible, the database interface redirects any reads to the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") in the [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of the current AS Instance.

Note

Certain [prerequisites](javascript:call_link\('abenbuffer_restrictions.htm'\)), some dependent on the buffering type, must be met before ABAP SQL can access the table buffer instead of accessing the database table directly.

Buffering Type

The buffering type determines which data is loaded from the table to the table buffer when a table entry is accessed and buffering is switched on. The possible buffering types are:

-   [Single record buffering](javascript:call_link\('abenbuffer_single_buffering.htm'\))

-   [Generic buffering](javascript:call_link\('abenbuffer_generic_buffering.htm'\))

-   [Full buffering](javascript:call_link\('abenbuffer_complete_buffering.htm'\))