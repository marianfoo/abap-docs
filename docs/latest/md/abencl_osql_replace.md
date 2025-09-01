  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - System Classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_osql.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CL_OSQL_REPLACE%2C%20Replacement%20Service%2C%20ABENCL_OSQL_REPLACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CL\_OSQL\_REPLACE, Replacement Service

The system class CL\_OSQL\_REPLACE implements a replacement service that can be used to redirect access to data sources in [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements during the execution of [unit tests](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunit_test_glosry.htm "Glossary Entry") in [ABAP Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_unit_glosry.htm "Glossary Entry"). The system class CL\_OSQL\_REPLACE can only be used in [test classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentest_class_glosry.htm "Glossary Entry") of [ABAP Unit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_unit_glosry.htm "Glossary Entry").

-   [Defining Replacement Rules](#@@ITOC@@ABENCL_OSQL_REPLACE_1)
-   [Additional Methods](#@@ITOC@@ABENCL_OSQL_REPLACE_2)
-   [Restrictions and Special Features](#@@ITOC@@ABENCL_OSQL_REPLACE_3)
    -   [Data Sources of Reads](#@@ITOC@@ABENCL_OSQL_REPLACE_4)
    -   [Targets of Writes](#@@ITOC@@ABENCL_OSQL_REPLACE_5)

Defining Replacement Rules   

The static method ACTIVATE\_REPLACEMENT of the system class CL\_OSQL\_REPLACE is used to define replacement rules.

-   A three-column internal table is passed to the parameter REPLACEMENT\_TABLE:
    -   The first column SOURCE contains the name of a data source defined in the ABAP Dictionary, namely a DDIC database table, a DDIC view, or a non-abstract CDS entity.
    -   The second column TARGET contains the name of a database object in the current database to which an ABAP SQL access to the data source named in the first column is redirected.
    -   The third column SCHEMA contains the name of a [database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_schema_glosry.htm "Glossary Entry") to be searched to find the database object from the second column. If the third column is empty, the [ABAP database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") is used.
-   An ID can be passed to the parameter FLG\_DML to define whether the redirection also applies to write ABAP SQL statements:
    -   If the value abap\_false is passed to the parameter FLG\_DML, the redirection only applies to [queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenquery_glosry.htm "Glossary Entry"), that is, to the [main queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmainquery_glosry.htm "Glossary Entry") of [reads](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_reading.htm) and for the [subqueries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubquery_glosry.htm "Glossary Entry") of all accesses.
    -   If the value abap\_true is passed to the parameter FLG\_DML, the redirection also applies to the DDIC database tables to be changed by [write accesses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_writing.htm).
-   An ID can be passed to the parameter FLG\_SURVIVE\_SUBMIT to define whether the redirection also applies to called programs:
    -   If the value of abap\_false is passed to the parameter FLG\_SURVIVE\_SUBMIT, the redirection applies only to the current program.
    -   If the value of abap\_true is passed to the parameter FLG\_SURVIVE\_SUBMIT, the redirection also applies to programs called using [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm), [CALL TRANSACTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_transaction.htm), and [CALL DIALOG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_dialog.htm).

The redirection can be made to any database objects, in particular to variants of the DDIC database tables or DDIC views defined in the ABAP Dictionary. The database objects that are redirected to must have the same structure as the redirected object, otherwise the result is database specific and exceptions can occur.

A successful redirection applies to the entire execution of a unit test until the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") is ended or there is another redirection. A redirection is ended explicitly if an empty internal table is passed to the method ACTIVATE\_REPLACEMENT.

Hints

-   From a technical perspective, a redirection replaces the names of the database objects in the platform-dependent SQL statements, which the [database interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_interface_glosry.htm "Glossary Entry") generates from the ABAP SQL statements and passes to the database system.
-   Redirection of the data sources used by ABAP SQL is used during unit tests so that test tables and test data can be processed instead of the actual tables and their data. In particular, this enables testing of system programs that access system tables.
-   In the case of redirections in called programs using the parameter FLG\_SURVIVE\_SUBMIT, program calls using [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) without the addition AND RETURN are pointless.

Additional Methods   

As well as the method ACTIVATE\_REPLACEMENT, CL\_OSQL\_REPLACE has the following methods:

-   The methods IS\_REPLACEMENT\_ACTIVE and IS\_REPLACEMENT\_ACTIVE\_DML are used to check whether a redirection is active and whether it also applies to writes.
-   The methods SET\_ACTIVE\_FOR\_DML and TOGGLE\_ACTIVE\_FOR\_DML are used to set or change the setting for writes for an existing redirection.

Restrictions and Special Features   

Data Sources of Reads   

The following applies to data sources of reads:

-   The data source of a read can only be redirected to an object defined in the ABAP Dictionary if the object appears in the database under the name that it is defined with in the ABAP Dictionary.
-   To redirect a read from a [DDIC projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_proj_view_glosry.htm "Glossary Entry") to another data source, the underlying DDIC database table can be redirected.
-   It is not possible to redirect to the following:
    -   [Projection views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_proj_view_glosry.htm "Glossary Entry")
    -   [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry")
-   If the data source of a subquery in the WHERE condition of a write statement is redirected to the target of the write, the behavior is undefined and unexpected errors may occur.
-   The following should be noted for [CDS entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_glosry.htm "Glossary Entry"):
    -   If a read is redirected to a CDS view or a CDS table function for which one or more [CDS roles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") are defined as part of [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_role_glosry.htm "Glossary Entry"), the associated access conditions are evaluated independently of the target of the redirection. CDS roles that are defined for the target of a redirection are ignored.
-   The following should be noted for [CDS table functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_table_function_glosry.htm "Glossary Entry"):
    -   A CDS table function can only be redirected to a [table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_function_glosry.htm "Glossary Entry"). However, this does not have to be an [AMDP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_function_glosry.htm "Glossary Entry").
    -   If a direct or indirect read of a CDS table function is redirected to another data source, the [static constructor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") of the [AMDP class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry") in which the associated [AMDP table function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") is implemented is executed.
    -   If a read of a data source is redirected to an [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_table_function_glosry.htm "Glossary Entry") table function that is known in the current AS ABAP, the [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_glosry.htm "Glossary Entry") framework creates the associated variant in the database if necessary, and the [static constructor](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstatic_constructor_glosry.htm "Glossary Entry") of the associated [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_class_glosry.htm "Glossary Entry") class is executed.
-   If the source or target of a redirection is a DDIC database table of the [ABAP database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm "Glossary Entry") defined in ABAP Dictionary, for which a [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreplacement_object_glosry.htm "Glossary Entry") is defined, the redirection is evaluated first and then the replacement object.
    -   If a data source of a read is redirected to a DDIC database table for which a replacement object is defined, a redirect to the replacement object is made.
    -   If a DDIC database table is redirected for which a replacement object is defined, the redirection is applied. The replacement object is ignored.
    -   If a replacement object is defined for a DDIC database table and the replacement object is redirected, the redirection is ignored. The replacement object is accessed here.
-   A redirection always bypasses [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry").

Targets of Writes   

The same restrictions apply to the target of a write as to the data sources of reads, if applicable. In addition, targets of writes cannot be redirected to the following objects defined in the ABAP Dictionary:

-   [DDIC views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_view_glosry.htm "Glossary Entry")
-   DDIC database tables with active [table buffering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_buffering_glosry.htm "Glossary Entry")
-   DDIC database tables with active [logging](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_protocol.htm)

Writes to a [projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_proj_view_glosry.htm "Glossary Entry") cannot be redirected if the lines to be changed are determined by a work area or an internal table. Therefore, it is only possible to redirect accesses to the DDIC database table of a DDIC projection view if there are no writes to the view, except with the statements [DELETE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) with a WHERE condition or [UPDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapupdate.htm) with the addition SET. Otherwise, a runtime error occurs.

Example

See the program DEMO\_CL\_OSQL\_REPLACE.

-   A production class prod reads data from the DDIC database table SCARR in the method select, and deletes a line from this table in the method delete.
-   The test class test\_prod tests the methods of the production class.
    
    -   In the method setup, access to SCARR is redirected for read and write ABAP SQL statements with cl\_osql\_replace=>activate\_replacement to a test table DEMO\_TEST\_SCARR, which was defined in the ABAP Dictionary as a copy of SCARR. The database schema of DEMO\_TEST\_SCARR is passed here explicitly for demonstration purposes, but this is not necessary for database objects from the [ABAP database schema](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_db_schema_glosry.htm "Glossary Entry").
    -   In the method setup, the test table DEMO\_TEST\_SCARR is supplied with two lines of test data from an internal table testdata.
    -   In the method test, the method select is called and the return value is compared with the internal table testdata. Calling the method delete deletes a row of test data from the test table and checks that the deleted row no longer exists.
    -   In the method teardown, the test data is deleted from the test table.
    
    Execution of the unit test should always be successful, regardless of the content of SCARR.