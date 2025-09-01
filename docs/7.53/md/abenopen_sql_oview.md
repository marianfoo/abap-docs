  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) → 

ABAP SQL - Overview

ABAP SQL defines the subset of ABAP statements that enable direct access to data from the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the current [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). The ABAP SQL statements form the [DML](javascript:call_link\('abendml_glosry.htm'\) "Glossary Entry") part of [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") in ABAP, which is supported by all database systems. The statements of ABAP SQL are converted to database-specific SQL in the ABAP SQL interface of the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry"). They are then transferred to the database system and executed there. By default, ABAP SQL statements use [automatic client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") to access only the data of the current client. To improve performance when accessing the database, [table buffering](javascript:call_link\('abensap_puffering.htm'\)) can be activated for individual database tables, views, or non-abstract CDS entities to avoid accessing the database directly each time.

ABAP SQL is closely integrated with [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry"). In ABAP SQL statements, only those [database tables](javascript:call_link\('abenddic_database_tables.htm'\)). [views](javascript:call_link\('abenddic_views.htm'\)), and non-abstract [CDS entities](javascript:call_link\('abenddic_cds_entities.htm'\)) can be accessed that are defined in ABAP Dictionary. These items are specified directly in ABAP SQL statements without specifying a [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry"). By default, the ABAP SQL interface of the database interface accesses the associated database objects in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").

The ABAP SQL interface of the database interface respects the fact the order of the columns in the data source in the database system can differ from the order in the definition of the data source in ABAP Dictionary. If ABAP SQL is used, the order in ABAP Dictionary applies and the database interface performs a transformation if necessary. The function [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") of the [Performance Trace](javascript:call_link\('abenperformance_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05) can be used to analyze the SQL statements actually passed to the database by the database interface.

Each non-buffered ABAP SQL statement is synonymous with an access to the database. This applies in particular with [SELECT](javascript:call_link\('abapselect.htm'\)) statements that end in [ENDSELECT](javascript:call_link\('abapendselect.htm'\)). Data to be read and to be modified is transported in packages between the database server and the current AS Instance. The size of the packages can be configured using [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") (for example, the default value for Oracle is 65 KB).

-   [ABAP SQL - Client Handling](javascript:call_link\('abenopen_sql_client_handling.htm'\))

-   [ABAP SQL - Null Values](javascript:call_link\('abenopen_sql_null_values.htm'\))

-   [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\))

-   [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\))

Note

If more than approximately 2^32 entries are addressed in a single database access, the behavior of the database is undefined.

Continue
[ABAP SQL - Client Handling](javascript:call_link\('abenopen_sql_client_handling.htm'\))
[ABAP SQL - Null Values](javascript:call_link\('abenopen_sql_null_values.htm'\))
[ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\))
[ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenopensql_strict_modes.htm'\))