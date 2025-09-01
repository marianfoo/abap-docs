# ABAP Keyword Documentation / ABAP − Reference / Processing External Data / ABAP Database Access / ABAP SQL / ABAP SQL - System Classes

Included pages: 3


### abencl_osql.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) → 

ABAP SQL - System Classes

The following system classes are available for extending the scope of the ABAP SQL language:

-   [CL\_OSQL\_EXTENDED\_RESULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql_extended_result.htm) handles extended results

-   s[CL\_OSQL\_REPLACE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql_replace.htm) provides a replacement service for executing [module tests](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunit_test_glosry.htm "Glossary Entry")

Continue
[CL\_OSQL\_EXTENDED\_RESULT - Extended Result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql_extended_result.htm)
[CL\_OSQL\_REPLACE - Replacement Service](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql_replace.htm)


### abencl_osql_extended_result.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - System Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql.htm) → 

CL\_OSQL\_EXTENDED\_RESULT - Extended Result

An object of the system class CL\_OSQL\_EXTENDED\_RESULT can be specified with the addition [EXTENDED RESULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_extended_result.htm) of a [INTO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinto_clause.htm) clause as the target object for an extended result of a [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm), [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm), or [FETCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfetch.htm)statement. First, the object must be created and the instance constructor must be told which values the extended result will contain.

Currently, an extended result can be used to check whether a [query](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry") can read data from the cache when accessing a [cached view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_cached_views.htm) of the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry").

Example

See [SAP HANA, Cached Views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_cached_views_abexa.htm)


### abencl_osql_replace.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - System Classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencl_osql.htm) → 

CL\_OSQL\_REPLACE - Replacement Service

The system class CL\_OSQL\_REPLACE implements a replacement service that can be used to redirect access to data sources in [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements during the execution of [unit tests](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenunit_test_glosry.htm "Glossary Entry") [ABAP Unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_unit_glosry.htm "Glossary Entry"). The system class CL\_OSQL\_REPLACE can only be used in [test classes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentest_class_glosry.htm "Glossary Entry") by [ABAP Unit](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_unit_glosry.htm "Glossary Entry").

-   [Defining Replacement Rules](#@@ITOC@@ABENCL_OSQL_REPLACE_1)

-   [Additional Methods](#@@ITOC@@ABENCL_OSQL_REPLACE_2)

-   [Restrictions and Special Features](#@@ITOC@@ABENCL_OSQL_REPLACE_3)

-   [Data Sources of Reads](#@@ITOC@@ABENCL_OSQL_REPLACE_4)

-   [Targets of Writes](#@@ITOC@@ABENCL_OSQL_REPLACE_5)

-   [Example](#@@ITOC@@ABENCL_OSQL_REPLACE_6)

Defining Replacement Rules

The static method ACTIVATE\_REPLACEMENT of the system class CL\_OSQL\_REPLACE is used to define replacement rules.

-   A three-column internal table is passed to the parameter REPLACEMENT\_TABLE:

-   The first column, SOURCE, contains the name of a data source defined in ABAP Dictionary, namely a database table, a classic view, or a non-abstract CDS entity.

-   The second column, TARGET, contains the name of a database object in the current database to which an ABAP SQL access to the data source named in the first column is redirected.

-   The third column, SCHEMA, contains the name of a [database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_schema_glosry.htm "Glossary Entry") to be searched to find the database object from the second column. If the third column is empty, the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is used.

-   An ID can be passed to the parameter FLG\_DML to define whether the redirection also applies to write ABAP SQL statements:

-   If the value abap\_false is passed to the parameter FLG\_DML, the redirection only applies to [queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenquery_glosry.htm "Glossary Entry"), that is, to the [main queries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmainquery_glosry.htm "Glossary Entry") of [reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) and for the [subqueries](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensubquery_glosry.htm "Glossary Entry") of all accesses.

-   If the value abap\_true is passed to the parameter FLG\_DML, the redirection also applies to the database tables to be changed by [writes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_writing.htm).

-   An ID can be passed to the parameter FLG\_SURVIVE\_SUBMIT to define whether the redirection also applies to called programs:

-   If the value of abap\_false is passed to the parameter FLG\_SURVIVE\_SUBMIT, the redirection applies only to the current program.

-   If the value of abap\_true is passed to the parameter FLG\_SURVIVE\_SUBMIT, the redirection also applies to programs called using [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm), [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_transaction.htm), and [CALL DIALOG](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_dialog.htm).

The redirection can be made to any database objects, in particular variants of the database tables or views defined in the ABAP Dictionary. The database objects that are redirected to must have the same structure as the object that is redirected from, otherwise the result is database specific and exceptions may arise.

A successful redirection applies for the entire execution of a module test until the [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry") is ended or there is another redirection. A redirection is ended explicitly if an empty internal table is passed to the method ACTIVATE\_REPLACEMENT.

Notes

-   From a technical perspective, a redirection replaces the names of the database objects in the platform-specific SQL statements, which the [database interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_interface_glosry.htm "Glossary Entry") generates from the ABAP SQL statements and passes to the database system.

-   Redirection of the data sources used by ABAP SQL is used during module tests so that test tables and test data can be processed instead of the actual tables and their data. In particular, this enables testing of system programs that access system tables.

-   In the case of redirections in called programs using the parameter FLG\_SURVIVE\_SUBMIT, program calls using [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) without the addition AND RETURN are pointless.

Additional Methods

As well as the method ACTIVATE\_REPLACEMENT, CL\_OSQL\_REPLACE has the following methods:

-   The methods IS\_REPLACEMENT\_ACTIVE and IS\_REPLACEMENT\_ACTIVE\_DML are used to check whether a redirection is active and whether it also applies to writes.

-   The methods SET\_ACTIVE\_FOR\_DML and TOGGLE\_ACTIVE\_FOR\_DML are used to set or change the setting for writes for an existing redirection.

Restrictions and Special Features

Data Sources of Reads

The following applies to data sources of reads:

-   The data source of a read can only be redirected to an object defined in ABAP Dictionary if the object appears in the database with the name that it is defined with in ABAP Dictionary.

-   To redirect a read from a [projection view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprojection_view_glosry.htm "Glossary Entry") to another data source, the underlying database table can be redirected.

-   It is not possible to redirect to the following:

-   [Projection views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprojection_view_glosry.htm "Glossary Entry")

-   [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry")

-   If the data source of a subquery in the WHERE condition of a write statement is redirected to the target of the write, the behavior is undefined and unexpected errors may occur.

-   The following should be noted for [CDS entities](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"):

-   If a read is redirected to a CDS view or a CDS table function for which one or more [CDS roles](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") are defined as part of [CDS access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_role_glosry.htm "Glossary Entry"), the associated access conditions are evaluated independently of the target of the redirection. CDS roles that are defined for the target of a redirection are ignored.

-   The following should be noted for [CDS table functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_table_function_glosry.htm "Glossary Entry"):

-   A CDS table function can only be redirected to a [table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_function_glosry.htm "Glossary Entry"). However, this does not have to be an [AMDP function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_function_glosry.htm "Glossary Entry").

-   If a direct or indirect read of a CDS table function is redirected to another data source, the [static constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") of the [AMDP class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_class_glosry.htm "Glossary Entry") in which the associated [AMDP table function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") is implemented is executed.

-   If a read of a data source is redirected to an [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") table function that is known in the current AS ABAP, the [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_glosry.htm "Glossary Entry") framework creates the associated variant in the database if necessary, and the [static constructor](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") of the associated [AMDP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_class_glosry.htm "Glossary Entry") class is executed.

-   If the source or target of a redirection is a database table of the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") defined in ABAP Dictionary, for which a [replacement object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreplacement_object_glosry.htm "Glossary Entry") is defined, the redirection is evaluated first and then the replacement object.

-   If a data source of a read is redirected to a database table for which a replacement object is defined, a redirect to the replacement object is made.

-   If a database table is redirected for which a replacement object is defined, the redirection is applied. The replacement object is ignored.

-   If a replacement object is defined for a database table and the replacement object is redirected, the redirection is ignored. The replacement object is accessed here.

-   A redirection always bypasses [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry").

Targets of Writes

The same restrictions apply to the target of a write as to the data sources of reads, if applicable. In addition, targets of writes cannot be redirected to the following objects defined in ABAP Dictionary:

-   [Classic views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclassical_view_glosry.htm "Glossary Entry")

-   Database tables with active [table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry")

-   Database tables with active [logging](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_protocol.htm)

Writes to a [projection view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprojection_view_glosry.htm "Glossary Entry") cannot be redirected if the rows to be changed are defined by a work area or an internal table. Therefore, it is only possible to redirect accesses to the database table of a projection view if there are no writes to the view (except with the statements [DELETE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdelete_dbtab.htm) with a WHERE condition or [UPDATE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapupdate.htm) with the addition SET). Otherwise, a runtime error occurs.

Example

See the program DEMO\_CL\_OSQL\_REPLACE.

-   A production class prod reads data from the database table SCARR in the method select, and deletes a row from this table in the method delete.

-   The test class test\_prod tests the methods of the production class.

-   In the method setup, access to SCARR is redirected for read and write ABAP SQL statements with cl\_osql\_replace=>activate\_replacement to a test table DEMO\_TEST\_SCARR, which was defined in ABAP Dictionary as a copy of SCARR. The database schema of DEMO\_TEST\_SCARR is passed here explicitly for demonstration purposes, but this is not necessary for database objects from the [ABAP database schema](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_db_schema_glosry.htm "Glossary Entry").

-   In the method setup, the test table DEMO\_TEST\_SCARR is supplied with two rows of test data from an internal table testdata.

-   In the method test, the method select is called and the return value is compared with the internal table testdata. Calling the method delete deletes a row of test data from the test table and checks that the deleted row no longer exists.

-   In the method teardown, the test data is deleted from the test table.

Execution of the module test should always be successful, regardless of the content of SCARR.
