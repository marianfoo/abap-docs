---
title: "Native SQL"
description: |
  The term Native SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm 'Glossary Entry') refers to all statements and calls that can be passed to the Native SQL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_interface_glosry.htm 'Gloss
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql.htm"
abapFile: "abennative_sql.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "internal-table", "abennative", "sql"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) → 

Native SQL

The term [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_glosry.htm "Glossary Entry") refers to all statements and calls that can be passed to the [Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_interface_glosry.htm "Glossary Entry") interface of the database interface. By default, the [standard connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_connection_glosry.htm "Glossary Entry") is used to access the [ABAP database schema](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") of the [standard AS ABAP database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_db_glosry.htm "Glossary Entry").

Native SQL can be passed to the database interface as follows:

-   In strings passed to objects in the [ADBC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc.htm) classes.

-   As statically [embedded Native SQL statements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennativesql.htm).

ADBC is recommended. New developments and improvements, such as support for new SQL statements or optimized performance using bulk access across internal tables, are now made only for ADBC. The existing static embedding of Native SQL statements between [EXEC SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapexec.htm) and [ENDEXEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapendexec.htm) is still supported but should no longer be used in new programs.

Notes

-   When using Native SQL, the order of the columns in database tables defined in ABAP Dictionary in the database system does not match the order of the structure definition in ABAP Dictionary. When using [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_glosry.htm "Glossary Entry"), this is handled accordingly in the [database interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_interface_glosry.htm "Glossary Entry") and the order in ABAP Dictionary always applies. When using Native SQL, the order of the columns in the database system must be applied explicitly.

-   Special care must be taken when using Native SQL to pass data from ABAP to the database system and back. This applies both when using ABAP data objects as host variables or bound parameters in Native SQL statements and when binding ABAP data object to the parameter interface of stored procedures or database procedures. Not all built-in ABAP types have corresponding types in the type system of the database system in question. Although types from the ABAP Dictionary can be mapped to ABAP types and the appropriate conversions can be executed from the Open SQL interface when using Open SQL, when using Native SQL only matching data types should be [mapped](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_type_mapping.htm) and conversions should be avoided. This is particularly relevant for the ABAP types n, d, and t and decimal floating point numbers.

-   Native SQL does not support automatic [client handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_handling_glosry.htm "Glossary Entry"). When accessing client-specific database tables or views, the required client ID must be selected explicitly. In application programs, only the current client should be used to do this.

-   [Table buffering](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_buffering_glosry.htm "Glossary Entry") is bypassed when using Native SQL.

-   When the [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [client-specific](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_client_handling.htm) CDS view is accessed using Native SQL and the client handling of the view is specified by the annotation @ClientHandling.algorithm:#SESSION\_VARIABLE, the [session variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensession_variable_glosry.htm "Glossary Entry") [$session.client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_session_variable.htm) is generally evaluated here. Only on [SAP HANA databases](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry"), is an instance of this session variable is created as a HANA session variable [CDS\_CLIENT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_session_variables.htm). Its current value is used here. On other platforms, there can be unexpected behavior or the program may crash.

-   Alongside their differences in syntax, Native SQL statements can behave in different ways on different platforms (particularly when compared with Open SQL). This mainly affects the following:

-   Handling of blanks in strings

-   Calculation rules and roundings in arithmetic calculations

-   Overflow behavior

More information about the behavior in question can be found in the documentation of the vendor-specific Native SQL.

-   The examples shown for Native SQL generally work in SAP's own [SAP HANA database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_database_glosry.htm "Glossary Entry"). The documentation about Native SQL in the SAP HANA database can be found under [SAP HANA SQL and System Views References](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.00/en-us).

Programming Guideline

[Using Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_access_guidl.htm "Guideline")

Continue
[ADBC - ABAP Database Connectivity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenadbc.htm)
[EXEC SQL - Embedded Native SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennativesql.htm)
[Native SQL - Mapping of ABAP Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennative_sql_type_mapping.htm)