---
title: "Native SQL"
description: |
  The term Native SQL(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm 'Glossary Entry') refers to all platform-dependent statements and calls that can be passed to the Native SQL interface(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sq
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql.htm"
abapFile: "abennative_sql.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abennative", "sql"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) → 

Native SQL

The term [Native SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_glosry.htm "Glossary Entry") refers to all platform-dependent statements and calls that can be passed to the [Native SQL interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") of the database interface. By default, the [standard connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") is used to access the [ABAP database schema](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_db_glosry.htm "Glossary Entry").

Native SQL can be passed to the database interface as follows:

-   In strings passed to objects in the [ADBC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc.htm) classes.
-   As statically [embedded Native SQL statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennativesql.htm).

ADBC is recommended. New developments and improvements, such as support for new SQL statements or optimized performance using bulk access across internal tables, are now made only for ADBC. The existing static embedding of Native SQL statements between [EXEC SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapendexec.htm) is still supported but should no longer be used in new programs.

Programming Guideline

[Use ABAP SQL for general database accesses where possible.](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_access_guidl.htm "Guideline")

Hints

-   When using Native SQL, the order of the columns in database tables defined in the ABAP Dictionary in the database system does not have to match the order of the structure definition in the ABAP Dictionary. When using [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_glosry.htm "Glossary Entry"), this is respected accordingly in the [database interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_interface_glosry.htm "Glossary Entry") and the order in the ABAP Dictionary can always be assumed. When using Native SQL, the order of the columns in the database system must be respected explicitly.
-   Special care must be taken when using Native SQL to pass data from ABAP to the database system and vice versa. This applies both when using ABAP data objects as host variables or bound parameters in Native SQL statements and when binding ABAP data object to the parameter interface of stored procedures or database procedures. Not all built-in ABAP types have matching types in the type system of the database system used. Although types from the ABAP Dictionary can be mapped to ABAP types and the appropriate conversions can be executed from the ABAP SQL interface when using ABAP SQL, when using Native SQL only matching data types should be [mapped](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_type_mapping.htm) and conversions should be avoided. This is particularly relevant for the ABAP types n, d, and t and decimal floating point numbers.
-   Native SQL does not support [implicit client handling](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_client_handling.htm). When accessing client-dependent database tables or views, the required client ID must be selected explicitly. In application programs, only the current client should be used to do this.
-   [Table buffering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed when using Native SQL.
-   When the [CDS-managed DDIC view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [client-dependent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_client_handling_v1.htm) CDS view is accessed using Native SQL and the client handling of the view is specified by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, the [session variable](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_session_variable_v1.htm) is generally evaluated here. Only on [SAP HANA databases](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry"), is an instance of this session variables created as a HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_session_variables.htm). Its current value is used here. On other platforms, unexpected behavior or program terminations may occur.
-   Apart from their differences in syntax, Native SQL statements can behave in different ways on different platforms, particularly when compared with ABAP SQL. This mainly affects the following:
    
    -   Handling of blanks in strings
    -   Calculation rules and roundings in arithmetic calculations
    -   Overflow behavior
    
    For more information about the exact behavior, see the documentation of the vendor-specific Native SQL.
    
-   Special care should be taken when using the Native SQL statements SET TRANSACTION to set the transaction behavior of the current [database connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_connection_glosry.htm "Glossary Entry"). The default behavior must be reset before the end of the current [database LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_luw_glosry.htm "Glossary Entry") to avoid unwanted or critical behavior. When the [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry") is accessed, [special methods](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_set_transaction.htm) must be used that reset automatically instead of these Native SQL statements.
-   The examples shown for Native SQL generally work on SAP's own [SAP HANA database](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_database_glosry.htm "Glossary Entry"). They might not work on other database platforms. The documentation about Native SQL in the SAP HANA database can be found under [SAP HANA SQL and System Views References](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html).

Continue
[ABAP Database Connectivity (ADBC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenadbc.htm)
[Embedded Native SQL (EXEC SQL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennativesql.htm)
[Native SQL - Mapping of ABAP Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennative_sql_type_mapping.htm)