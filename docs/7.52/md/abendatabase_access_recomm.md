  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) → 

Access to ABAP-Managed Database Objects

The ABAP-managed database objects in the [ABAP database schema](javascript:call_link\('abenabap_db_schema_glosry.htm'\) "Glossary Entry") of the [standard](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") database in (namely the database tables, database views, database procedures, and database functions created by [ABAP Dictionary](javascript:call_link\('abenabap_dictionary_glosry.htm'\) "Glossary Entry") or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry")) are designed only for use by ABAP programs in AS ABAP and for access to objects using the associated [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry").

-   Primary access to objects should only be made using [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry"). Only Open SQL is non-platform-specific and based on the data types defined in ABAP DIctionary. Open SQL guarantees all functions in ABAP Dictionary and ABAP CDS, such as automatic client handling, table buffering, or the evaluation of CDS access control.

-   [Native SQL](javascript:call_link\('abennative_sql_glosry.htm'\) "Glossary Entry") ([ADBC](javascript:call_link\('abenadbc.htm'\)), [EXEC SQL](javascript:call_link\('abennativesql.htm'\))) or [AMDP](javascript:call_link\('abenamdp_glosry.htm'\) "Glossary Entry") should be used only if Open SQL does not meet all requirements. Native SQL and AMDP are platform-dependent, do not support automatic client handling, and bypass both table buffering and CDS access control (with the exception of [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry")). The order of fields defined in ABAP Dictionary is respected by AMDP (if possible) but not by Native SQL.

Note

ABAP-managed database objects are not designed for direct access by database objects not managed by ABAP, such as access to a [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry") or calls of a [AMDP functions](javascript:call_link\('abenamdp_function_glosry.htm'\) "Glossary Entry") in a non-ABAP-managed database procedure. The following restrictions apply:

-   In principle, the same restrictions apply as when using Native SQL or AMDP in ABAP. This means that direct read do not support automatic client handling and bypasses both table buffering and CDS access control.

-   The order of fields in ABAP Dictionary does not necessarily match the order of the fields on the database.

-   The implementation of database objects managed by ABAP can be dependent on ABAP-specific context information that is provided only in cases where the database is a standard AS ABAP database and addressed using its database interface. One example are the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables_abexa.htm'\)) in the SAP HANA database. On other database platforms, [session variables](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") are set only when Open SQL accesses CDS entities.

-   Only in cases where access is made from AS ABAP can it be guaranteed that an ABAP-managed database object actually exists. The time the instance is created is not fixed and the existence of the instance is not guaranteed for access from sources other than AS ABAP.

-   Before a change is made to a database table or view in ABAP Dictionary, it is usually based to run a where-used list to check the consequences of the change. A where-used list of this type finds all uses in ABAP programs, including AMDP methods, but does not find any direct reads made from ABAP-managed database objects.

This means the way in which instances of ABAP-managed database objects are created is an internal AS ABAP process. The actual implementation can change at any time and in incompatible ways.