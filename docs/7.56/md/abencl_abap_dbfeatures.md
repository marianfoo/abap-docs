---
title: "System Class for Database Features"
description: |
  The method USE_FEATURES of the class CL_ABAP_DBFEATURES can be used to determine whether the current database or a database specified using a database connection(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_connection_glosry.htm 'Glossary Entry') supports particular f
version: "7.56"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencl_abap_dbfeatures.htm"
abapFile: "abencl_abap_dbfeatures.htm"
keywords: ["select", "insert", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abencl", "abap", "dbfeatures"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) → 

System Class for Database Features

The method USE\_FEATURES of the class CL\_ABAP\_DBFEATURES can be used to determine whether the current database or a database specified using a [database connection](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_connection_glosry.htm "Glossary Entry") supports particular features and whether these can be used at runtime in ABAP. One or more features can be queried by passing them to the method in an internal table. The possible line content of the internal table is determined by constants of the class CL\_ABAP\_DBFEATURES. Other values raise an exception of the class CX\_ABAP\_INVALID\_PARAM\_VALUE. The following tables list these constants, the respective database features and how they can be used in ABAP.

Use in ABAP SQL

Constant

Database Feature

Use in ABAP

AMDP\_TABLE\_FUNCTION

[Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_function_glosry.htm "Glossary Entry")

Access to [CDS table functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") in ABAP SQL.

CTE\_IN\_CORRELATED\_SUBQUERIES

[Common table expressions (CTE)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencommon_table_expression_glosry.htm "Glossary Entry")

Access to common table expression in correlated [subqueries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwhere_logexp_subquery.htm) in ABAP SQL.

EXTERNAL\_VIEWS

[SAP HANA views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhana_view_glosry.htm "Glossary Entry")

Access to [DDIC external views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenexternal_view_glosry.htm "Glossary Entry") in ABAP SQL.

GROUPING\_SETS

Grouping sets

Use of [grouping sets](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgrouping_sets_clause.htm) in the [GROUP BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapgroupby_clause.htm) clause in ABAP SQL.

HIERARCHIES

Hierarchy Data

Use of [hierarchy data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenselect_hierarchy_data.htm) as a [data source of queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) in ABAP SQL.

INDICATORS

[Null indicator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_indicator_glosry.htm "Glossary Entry")

Use of addition [INDICATORS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_indicators.htm) in a [SELECT statement](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect.htm) in ABAP SQL.

ITABS\_IN\_FROM\_CLAUSE

Local temporary tables

Use of [internal tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_itab.htm) as a [data source of queries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_data_source.htm) in ABAP SQL, if these are evaluated by the database.

LIMIT\_IN\_SUBSELECT\_OR\_CTE

Sorts or delimiters in subqueries

Use of the [ORDER BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaporderby_clause.htm) clause or the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_up_to_offset.htm) in [subqueries](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubquery_glosry.htm "Glossary Entry") in ABAP SQL.

MODIFY\_FROM\_SELECT

Subquery in UPSERT

Use of a [subquery](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapinsert_from_select.htm) as a [data source](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_source.htm) of the statement [MODIFY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapmodify_dbtab.htm) in ABAP SQL.

ORDER\_BY\_NULLS\_FIRST\_LAST

Addition to the ORDER BY clause

Sort a result set after [ORDER BY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaporderby_clause.htm) by determining the positions of potential null values in ABAP SQL.

WINDOWING

[Window expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwindow_expression_glosry.htm "Glossary Entry")

Use of [window expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_over.htm) in a [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapselect_list.htm) in ABAP SQL.

Use in the ABAP Dictionary

Constant

Database Feature

Use in ABAP

TABLE\_KEYCNT\_MAX1

Up to 120 key fields

A table can contain more key fields than is allowed as a [platform-independent table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_key.htm).

TABLE\_KEYLEN\_MAX1

Keys can have up to 2000 bytes

The key of a table can contain more bytes than is allowed as a [platform-independent table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_key.htm).

TABLE\_LEN\_MAX1

A table line can have up to 16293 bytes

A table line can contain more bytes than is allowed as a [platform-independent table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_techstruc.htm).

Use in ABAP Calls

Constant

Database Feature

Use in ABAP

CALL\_AMDP\_METHOD

Supports [AMDP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_glosry.htm "Glossary Entry")

[Method call](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_method_static_short.htm) of [AMDP procedure implementations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_procedure_method_glosry.htm "Glossary Entry").

CALL\_DATABASE\_PROCEDURE

[Database Procedures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendatabase_procedure_glosry.htm "Glossary Entry")

Call of database procedures using [CALL DATABASE PROCEDURE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapcall_database_procedure.htm).

The method USE\_FEATURES returns the value of abap\_true if the feature is supported by the database and the specified use in ABAP is possible.

-   Most of these features can be used statically in ABAP programs regardless of the current database system. This means there is no syntax error when one of these database features is used in an ABAP program. For example, it is possible to access DDIC external views in every ABAP program or AMDP methods can be called. An exception is raised only if the current database does not support the corresponding feature at runtime. A syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry") that can be hidden by a pragma indicates the potential exception. The class CL\_ABAP\_DBFEATURES can be used to check whether a special form of access is possible at runtime, instead of catching the corresponding exception. Replacement implementations can be used if an access type is not possible.
-   The features TABLE\_KEYCNT\_MAX1, TABLE\_KEYLEN\_MAX1, and TABLE\_LEN\_MAX1 can currently only be used by SAP developers as internal flags for database tables, which indicate the tables potentially exceed globally defined and platform-independent sizes. When a table like this is accessed using ABAP SQL, a syntax check warning from the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry") is raised. This warning can be hidden by a pragma. The warning for TABLE\_LEN\_MAX1 is also raised for [views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenview_glosry.htm "Glossary Entry") that use a table of this type. In standard SAP systems, these tables are usually delivered within the general limits, but customers and partners can enhance them beyond these sizes. Tables enhanced like this can only be accessed on database systems that support these expanded limits. Other database systems use a replacement implementation that can be accessed using the class CL\_ABAP\_DBFEATURES.

Hints

-   If a syntax warning from the [extended program check](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_program_check_glosry.htm "Glossary Entry") due to enhanced database features is raised when a database object is accessed, it can be hidden by a pragma as long as the object was accessed on database systems that support the features or if there is a replacement implementation. If there is no guarantee that the object is accessed only on database systems that support the features, it is best to wrap the access behind an API.
-   Tables flagged as potentially exceeding platform-independent sizes should never be accessed globally. They should always be accessed within an API wrapper and the associated replacement implementation should be wrapped too.
-   As soon as all database systems support a database feature and it can be used in ABAP, the checks are no longer necessary. The associated constant is then disallowed and removed from the class CL\_ABAP\_DBFEATURES.
-   The class CL\_ABAP\_DBFEATURES\_AUNITHELPER can be used to reduce the set of database features in CL\_ABAP\_DBFEATURES during a [unit test](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunit_test_glosry.htm "Glossary Entry"). In programs that use CL\_ABAP\_DBFEATURES, this makes it possible to test replacement implementations for databases that support fewer features than the current database.

Example

For the current database, checks whether specific additional features can be accessed using ABAP SQL.

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