  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.52](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-752.htm) → 

ABAP SQL in Release 7.52

[1\. Internal tables as data sources](#!ABAP_MODIFICATION_1@1@)
[2\. Relational expressions](#!ABAP_MODIFICATION_2@2@)
[3\. Conversion functions](#!ABAP_MODIFICATION_3@3@)
[4\. Path expressions](#!ABAP_MODIFICATION_4@4@)
[5\. Access control](#!ABAP_MODIFICATION_5@5@)
[6\. ORDER BY and UP TO, OFFSET in subquery](#!ABAP_MODIFICATION_6@6@)
[7\. Cardinality in LEFT OUTER JOIN](#!ABAP_MODIFICATION_7@7@)
[8\. FOR ALL ENTRIES and strings in the SELECT list](#!ABAP_MODIFICATION_8@8@)
[9\. Strict mode in the syntax check](#!ABAP_MODIFICATION_9@9@)
[10\. Client handling](#!ABAP_MODIFICATION_10@10@)
[11\. Replacement service for ABAP SQL](#!ABAP_MODIFICATION_11@11@)

Modification 1

Internal Tables as Data Sources

An internal table can be specified as a [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) data source of a query. This statement cannot be executed on all database systems, if the data from the internal table needs to be passed to the database.

Modification 2

Relational Expressions

The following is now possible for [conditions in expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_expr_logexp.htm):

-   Size comparisons can now be made between character-like data types and are no longer restricted to numeric data types.

-   The operator BETWEEN is also no longer restricted to numeric data types and SQL expressions can now be specified on the right side.

-   The operator LIKE is now also supported.
    

Modification 3

Conversion Functions

The new type conversion functions [BINTOHEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm) and [HEXTOBIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_type_conv_func.htm) make it possible to convert byte strings to character strings (and the other way round) in [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm), which is not possible with a [CAST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_cast.htm) expression.

Modification 4

Path Expressions

The following is now possible for [path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm):

-   Path expressions can now be split over several source code rows at the blanks in the syntax for parameter passes and filter conditions and also before slashes (/).

-   Associations can now be used whose target data sources are [CDS table functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_table_function_glosry.htm "Glossary Entry").

-   [Parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_parameters.htm) can now be passed after the associations of a [path expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm). This makes it possible to specify paths whose associations have CDS entities with input parameters as data sources.

-   In path expressions, it is now possible to specify the cardinality and type of the join expression as [attributes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path_filter.htm).

-   [Filter conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path_filter.htm) for associations can now be specified in path expressions.
    

Modification 5

Access Control

The new addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) switches [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") off.

Modification 6

ORDER BY and UP TO, OFFSET in Subquery

In a [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry"), it is now possible to use an [ORDER BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaporderby_clause.htm) clause and the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) can be used after the clause. It is not possible to execute a subquery with an ORDER BY clause on all database systems

Modification 7

Cardinality in LEFT OUTER JOIN

In a [LEFT OUTER JOIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm), an addition ONE TO MANY can now be specified for the cardinality. This is evaluated as a note for optimization by [SAP HANA databases](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_database_glosry.htm "Glossary Entry").

Modification 8

FOR ALL ENTRIES and Strings in the SELECT List

In the previous [strict modes of the syntax check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_modes.htm), the addition [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_all_entries.htm) of statement [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) could not be specified together with columns of the types STRING and RAWSTRING or LCHR and LRAW in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm). This restriction has been removed and now the syntax check simply issues a warning.

Modification 9

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_752.htm), which handles the statement more strictly than the regular syntax check.

Modification 10

Client Handling

The following (stricter) rules for the additions [USING CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client_obsolete.htm) now apply when switching and disabling [implicit client handling](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_client_handling.htm) in reads on [CDS entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry"):

-   [CDS access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") does not work for cross-client access. For this reason, the additions [USING CLIENT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) and [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) can only be used in ABAP SQL in reads on CDS entities for which access control is switched off using the annotation AccessControl.authorizationCheck.#NOT\_ALLOWED or the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfrom_clause.htm) clause of an ABAP SQL query.

-   [Path expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_path.htm) can only be evaluated if automatic client handling is switched on. This cannot be done using [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_client.htm) in cases where path expressions are used that contain [associations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_association_v1.htm) whose target data source is client-specific In path expressions in the FROM clause, the source data sources of the associations cannot be client-specific either.
    

Modification 11

Replacement Service for ABAP SQL

The class [CL\_OSQL\_REPLACE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_osql_replace.htm) can be used in [unit tests](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunit_test_glosry.htm "Glossary Entry") with [ABAP Unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_unit_glosry.htm "Glossary Entry") to redirect database accesses in ABAP SQL to other databases.