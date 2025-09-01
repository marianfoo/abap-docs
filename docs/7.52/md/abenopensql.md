  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) → 

Open SQL

[Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") is a set of ABAP statements, based on SQL, that asre transformed to platform-specific SQL by the [Open SQL interface](javascript:call_link\('abenopen_sql_interface_glosry.htm'\) "Glossary Entry") of the database interface and then passed to the database. When the statements are transformed, ABAP-specific parts, such as conditions for automatic [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry") or [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"), are inserted into the statements. By default, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is used to access the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").

-   [Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\))

-   [Open SQL - Operands](javascript:call_link\('abenopen_sql_operands.htm'\))

-   [Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\))

-   [Open SQL - Writes](javascript:call_link\('abenopen_sql_writing.htm'\))

-   [Open SQL - Work Areas in Statements](javascript:call_link\('abenopen_sql_wa.htm'\))

-   [Open SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\))

-   [Open SQL - Database Hints](javascript:call_link\('abenosql_db_hints.htm'\))

-   [Open SQL - Exceptions](javascript:call_link\('abenopensql_exceptions.htm'\))

-   [System Classes for Open SQL](javascript:call_link\('abencl_osql.htm'\))

-   [Open SQL - Performance Notes](javascript:call_link\('abenopen_sql_perfo.htm'\))

The statements [COMMIT WORK](javascript:call_link\('abapcommit.htm'\)) and [ROLLBACK WORK](javascript:call_link\('abapcommit.htm'\)) are also part of Open SQL but are handled in the context of LUWs.

Programming Guideline

[Using Open SQL](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline")

Note

The statements described here are accompanied by [obsolete short forms](javascript:call_link\('abenopen_sql_obsolete.htm'\)) of Open SQL statements, based on the implicit use of [table work areas](javascript:call_link\('abentable_work_area_glosry.htm'\) "Glossary Entry").

Continue
[Open SQL - Overview](javascript:call_link\('abenopen_sql_oview.htm'\))
[Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\))
[Open SQL - Reads](javascript:call_link\('abenopen_sql_reading.htm'\))
[Open SQL - Write Accesses](javascript:call_link\('abenopen_sql_writing.htm'\))
[Open SQL - Work Areas in Statements](javascript:call_link\('abenopen_sql_wa.htm'\))
[Open SQL - Streaming and Locators](javascript:call_link\('abenstreams_locators.htm'\))
[Open SQL - Exceptions](javascript:call_link\('abenopensql_exceptions.htm'\))
[Open SQL - Database Hints](javascript:call_link\('abenosql_db_hints.htm'\))
[Open SQL - System Classes](javascript:call_link\('abencl_osql.htm'\))
[Open SQL - Performance Notes](javascript:call_link\('abenopen_sql_perfo.htm'\))