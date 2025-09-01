  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Overview, ABENABAP_SQL_OVIEW, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

ABAP SQL - Overview

ABAP SQL defines the subset of ABAP statements that enable direct access to data in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of the current [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). The ABAP SQL statements represent the [DML](javascript:call_link\('abendml_glosry.htm'\) "Glossary Entry") part of [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry") in ABAP, which is supported by all database systems. The statements of ABAP SQL are converted to database-specific SQL in the ABAP SQL interface of the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry"). They are then transferred to the database system and executed there. By default, ABAP SQL statements use [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) to access only the data of the current client. To improve performance when accessing the database, [table buffering](javascript:call_link\('abensap_puffering.htm'\)) can be activated for individual DDIC database tables, [DDIC database views](javascript:call_link\('abendatabase_view_glosry.htm'\) "Glossary Entry"), or CDS views to avoid accessing the database directly each time.

ABAP SQL is closely linked with the [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") and [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). ABAP SQL statements can be used only to access [DDIC database tables](javascript:call_link\('abenddic_database_tables.htm'\)) of the ABAP Dictionary, [DDIC views](javascript:call_link\('abenddic_views.htm'\)), and non-abstract [CDS entities](javascript:call_link\('abencds_entities.htm'\)). These are specified directly in ABAP SQL statements without specifying a [database schema](javascript:call_link\('abendatabase_schema_glosry.htm'\) "Glossary Entry"). By default, the ABAP SQL interface of the database interface accesses the associated database objects in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").

The ABAP SQL interface of the database interface respects the fact that the order of the columns of a data source in the database system can differ from the order in the definition of the data source in the ABAP Dictionary. If ABAP SQL is used, the order in the ABAP Dictionary applies and the database interface performs a transformation if necessary. The function [SQL Trace](javascript:call_link\('abensql_trace_glosry.htm'\) "Glossary Entry") of the [Performance Trace](javascript:call_link\('abenperformance_trace_glosry.htm'\) "Glossary Entry") tool (transaction ST05) can be used to analyze the SQL statements actually passed to the database by the database interface.

Each non-buffered ABAP SQL statement has the same meaning as an access to the database. This applies in particular to [SELECT](javascript:call_link\('abapselect.htm'\)) statements that end with [ENDSELECT](javascript:call_link\('abapendselect.htm'\)). Data to be read and to be modified is transported in packages between the database server and the current AS instance. The size of the packages can be configured using [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") (for example, the default value for Oracle is 65 KB).

-   [ABAP SQL - Client Handling](javascript:call_link\('abenabap_sql_client_handling.htm'\))
-   [ABAP SQL - Null Values](javascript:call_link\('abenabap_sql_null_values.htm'\))
-   [ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\))
-   [ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\))

Hint

If more than approximately 2^32 entries are addressed in a single database access, the behavior of the database is undefined.

Continue
[ABAP SQL - Client Handling](javascript:call_link\('abenabap_sql_client_handling.htm'\))
[ABAP SQL - Null Values](javascript:call_link\('abenabap_sql_null_values.htm'\))
[ABAP SQL - Table Buffering](javascript:call_link\('abensap_puffering.htm'\))
[ABAP SQL - Release-Dependent Syntax Check Modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\))