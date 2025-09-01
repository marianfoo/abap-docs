  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) → 

Native SQL

The term [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") refers to all platform-dependent statements and calls that can be passed to the [Native SQL interface](javascript:call_link\('abennative_sql_interface_glosry.htm'\) "Glossary Entry") of the database interface. By default, the [standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry") is used to access the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry").

Native SQL can be passed to the database interface as follows:

-   In strings passed to objects in the [ADBC](javascript:call_link\('abenadbc.htm'\)) classes.

-   As statically [embedded Native SQL statements](javascript:call_link\('abennativesql.htm'\)).

ADBC is recommended. New developments and improvements, such as support for new SQL statements or optimized performance using bulk access across internal tables, are now made only for ADBC. The existing static embedding of Native SQL statements between [EXEC SQL](javascript:call_link\('abapexec.htm'\)) and [ENDEXEC](javascript:call_link\('abapendexec.htm'\)) is still supported but should no longer be used in new programs.

Programming Guideline

[Use ABAP SQL for general database accesses where possible.](javascript:call_link\('abendatabase_access_guidl.htm'\) "Guideline")

Hints

-   When using Native SQL, the order of the columns in database tables defined in ABAP Dictionary in the database system does not match the order of the structure definition in ABAP Dictionary. When using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), this is handled accordingly in the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") and the order in ABAP Dictionary always applies. When using Native SQL, the order of the columns in the database system must be applied explicitly.

-   Special care must be taken when using Native SQL to pass data from ABAP to the database system and back. This applies both when using ABAP data objects as host variables or bound parameters in Native SQL statements and when binding ABAP data object to the parameter interface of stored procedures or database procedures. Not all built-in ABAP types have matching types in the type system of the database system. Although types from the ABAP Dictionary can be mapped to ABAP types and the appropriate conversions can be executed from the ABAP SQL interface when using ABAP SQL, when using Native SQL only matching data types should be [mapped](javascript:call_link\('abennative_sql_type_mapping.htm'\)) and conversions should be avoided. This is particularly relevant for the ABAP types n, d, and t and decimal floating point numbers.

-   Native SQL does not support [implicit client handling](javascript:call_link\('abenopen_sql_client_handling.htm'\)). When accessing client-dependent database tables or views, the required client ID must be selected explicitly. In application programs, only the current client should be used to do this.

-   [Table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is bypassed when using Native SQL.

-   When the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [client-dependent](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) CDS view is accessed using Native SQL and the client handling of the view is specified by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, the [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [$session.client](javascript:call_link\('abencds_session_variable_v1.htm'\)) is generally evaluated here. Only on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"), is an instance of this session variables created as a HANA session variable [CDS\_CLIENT](javascript:call_link\('abenhana_session_variables.htm'\)). Its current value is used here. On other platforms, there can be unexpected behavior or the program may crash.

-   Alongside their differences in syntax, Native SQL statements can behave in different ways on different platforms (particularly when compared with ABAP SQL). This mainly affects the following:

-   Handling of blanks in strings

-   Calculation rules and roundings in arithmetic calculations

-   Overflow behavior

More information about the behavior in question can be found in the documentation of the vendor-specific Native SQL.

-   Special care should be taken when using the Native SQL statements SET TRANSACTION to set the transaction behavior of the current [database connection](javascript:call_link\('abendatabase_connection_glosry.htm'\) "Glossary Entry"). The default behavior must be reset at the end of the current [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry") to avoid unwanted or critical behavior. When the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") is accessed, [special methods](javascript:call_link\('abenhana_set_transaction.htm'\)) must be used that reset automatically instead of these Native SQL statements.

-   The examples shown for Native SQL generally work on SAP's own [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). They might not work on other database platforms. The documentation about Native SQL in the SAP HANA database can be found under [SAP HANA SQL and System Views References](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

Continue
[ABAP Database Connectivity (ADBC)](javascript:call_link\('abenadbc.htm'\))
[Embedded Native SQL (EXEC SQL)](javascript:call_link\('abennativesql.htm'\))
[Native SQL - Mapping of ABAP Types](javascript:call_link\('abennative_sql_type_mapping.htm'\))