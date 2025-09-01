  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) → 

ABAP SQL

[ABAP SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") is a set of ABAP statements, based on SQL, that are transformed to platform-specific SQL by the [ABAP SQL interface](javascript:call_link\('abenopen_sql_interface_glosry.htm'\) "Glossary Entry") of the database interface and then passed to the database. When the statements are updated, ABAP-specific parts, such as conditions for [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)) or [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"), are inserted into them. By default, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is used to access the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").

-   [ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\))

-   [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\))

-   [ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\))

-   [ABAP SQL - Writes](javascript:call_link\('abenopen_sql_writing.htm'\))

-   [ABAP SQL - Work Areas in Statements](javascript:call_link\('abenopen_sql_wa.htm'\))

-   [ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\))

-   [ABAP SQL - Database Hints](javascript:call_link\('abenosql_db_hints.htm'\))

-   [ABAP SQL - Exceptions](javascript:call_link\('abenopensql_exceptions.htm'\))

-   [ABAP SQL - System Classes](javascript:call_link\('abencl_osql.htm'\))

-   [ABAP SQL - Performance Notes](javascript:call_link\('abenopen_sql_perfo.htm'\))

The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abapcommit.htm'\)) are also part of ABAP SQL but are handled in the context of LUWs.

Programming Guideline

[Using ABAP SQL](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline")

Note

The statements described here are accompanied by [obsolete short forms](javascript:call_link\('abenopen_sql_obsolete.htm'\)) of ABAP SQL statements, based on the implicit use of [table work areas](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry").

Continue
[ABAP SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\))
[ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\))
[ABAP SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\))
[ABAP SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\))
[ABAP SQL - Work Areas in Statements](javascript:call_link\('abenopen_sql_wa.htm'\))
[ABAP SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\))
[ABAP SQL - Exceptions](javascript:call_link\('abenopensql_exceptions.htm'\))
[ABAP SQL - Database Hints](javascript:call_link\('abenosql_db_hints.htm'\))
[ABAP SQL - System Classes](javascript:call_link\('abencl_osql.htm'\))
[ABAP SQL - Performance Notes](javascript:call_link\('abenopen_sql_perfo.htm'\))