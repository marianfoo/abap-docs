---
title: "System Class for Database Features"
description: |
  The method USE_FEATURES of the class CL_ABAP_DBFEATURES can be used to detect whether the current database or a database specified using a database connection(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_connection_glosry.htm 'Glossary Entry') supports particular feat
version: "7.52"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencl_abap_dbfeatures.htm"
abapFile: "abencl_abap_dbfeatures.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "types", "internal-table", "abencl", "abap", "dbfeatures"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) → 

System Class for Database Features

The method USE\_FEATURES of the class CL\_ABAP\_DBFEATURES can be used to detect whether the current database or a database specified using a [database connection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_connection_glosry.htm "Glossary Entry") supports particular features and whether these can be used at runtime in ABAP. One or more features can be queried and then passed to the method in an internal table. The potential row content of the internal table is determined using constants of the class CL\_ABAP\_DBFEATURES. Other values raise an exception from the class CX\_ABAP\_INVALID\_PARAM\_VALUE.

Constant

Database Feature

Use in ABAP

AMDP\_TABLE\_FUNCTION

[Table Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_function_glosry.htm "Glossary Entry")

Access to [CDS table functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_table_function_glosry.htm "Glossary Entry") in Open SQL.

EXTERNAL\_VIEWS

[SAP HANA views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhana_view_glosry.htm "Glossary Entry")

Access to [external views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexternal_view_glosry.htm "Glossary Entry") in Open SQL.

CALL\_AMDP\_METHOD

Supports [AMDP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_glosry.htm "Glossary Entry")

[Method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_method_static_short.htm) of [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry").

CALL\_DATABASE\_PROCEDURE

[Database Procedures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_procedure_glosry.htm "Glossary Entry")

Call of database procedures using [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_database_procedure.htm).

ITABS\_IN\_FROM\_CLAUSE

Local temporary tables

Use of [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_itab.htm) as a [data source of queries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_data_source.htm) in Open SQL, if these are evaluated by the database.

LIMIT\_IN\_SUBSELECT\_OR\_CTE

Sortings or limiters in subqueries

Use of the [ORDER BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaporderby_clause.htm) clause or the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapselect_up_to_offset.htm) in [subqueries](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensubquery_glosry.htm "Glossary Entry").

TABLE\_KEYCNT\_MAX1

Up to 120 key fields

A table can contain more key fields than is permitted as a [cross-platform table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm).

TABLE\_KEYLEN\_MAX1

Keys can have up to 2000 bytes

The key of a table can contain more bytes than is permitted as a [cross-platform table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_key.htm).

TABLE\_LEN\_MAX1

A table row can have up to 16293 bytes

A table row can contain more bytes than is permitted as a [cross-platform table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_techstruc.htm).

The method USE\_FEATURES returns the value of abap\_true if the feature is supported by the database and the specified use in ABAP is possible.

-   The attributes AMDP\_TABLE\_FUNCTION, EXTERNAL\_VIEWS, CALL\_AMDP\_METHOD, and CALL\_DATABASE\_PROCEDURE can be used statically in ABAP programs regardless of the current database system. This means there is no syntax error when one of these database features is used in an ABAP program. For example, it is possible to access external views in every ABAP program or AMDP methods can be called. An exception is raised only if the current database does not support the feature in question at runtime. A syntax warning (which can be hidden by a pragma) indicates the potential exception. The class CL\_ABAP\_DBFEATURES can be used to check whether a special form of access is possible at runtime, instead of catching the corresponding exception. Replacement implementations can be used if an access type is not possible.

-   The features TABLE\_KEYCNT\_MAX1, TABLE\_KEYLEN\_MAX1, and TABLE\_LEN\_MAX1 can currently only be used by SAP developers as internal flags for database tables, which indicate the tables potentially exceed globally defined and cross-platform sizes. When a table like this is accessed using Open SQL, a syntax check warning occurs that can be hidden by a pragma. The warning for TABLE\_LEN\_MAX1 is also raised for [views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenview_glosry.htm "Glossary Entry") that use a table of this type. In standard SAP systems, these tables are usually delivered within the general limits, but customers and partners can enhance them and exceed these sizes. Tables enhanced like this can only be accessed on database systems that support these expanded limits. Other database systems use a replacement implementation that can be accessed using the class CL\_ABAP\_DBFEATURES.

Notes

-   If a syntax warning due to expanded database features occurs when a database object is accessed, it should only be hidden by a pragma if the object was accessed on database systems that support the features or if there is a replacement implementation. It is a good idea to wrap accesses to these types of database objects in an API.

-   Tables flagged as potentially exceeding cross-platform sizes should never be accessed globally. They should always be accessed within an API wrapper and the associated replacement implementation should be wrapped too.

-   As soon as all database systems support a database feature and it can be used in ABAP, the checks are no longer necessary. The associated constant is then disallowed and removed from the class CL\_ABAP\_DBFEATURES. This currently applies to the following constants:

-   VIEWS\_WITH\_PARAMETERS, CDS views with input parameters are supported by all database from Release 7.50.

-   The class CL\_ABAP\_DBFEATURES\_AUNITHELPER can be used to reduce the set of database features in CL\_ABAP\_DBFEATURES during a [unit test](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_test_glosry.htm "Glossary Entry"). In programs that use CL\_ABAP\_DBFEATURES, this makes it possible to test replacement implementations for databases that support fewer features than the current database.

Example

For the current database, checks whether specific additional features can be accessed using Open SQL.

IF cl\_abap\_dbfeatures=>use\_features(
      EXPORTING
        requested\_features =
          VALUE #( ( cl\_abap\_dbfeatures=>amdp\_table\_function )
                   ( cl\_abap\_dbfeatures=>external\_views ) ) ).
  ...
ELSE.
  ...
ENDIF.

Example

The program DEMO\_DBFEATURES checks all possible database features for the current database.