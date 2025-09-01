  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 7.52, ABENNEWS-752-ABAP_SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

ABAP SQL in Release 7.52

[1\. Internal Tables as Data Sources](#!ABAP_MODIFICATION_1@1@)
[2\. Relational Expressions](#!ABAP_MODIFICATION_2@2@)
[3\. Conversion Functions](#!ABAP_MODIFICATION_3@3@)
[4\. Path Expressions](#!ABAP_MODIFICATION_4@4@)
[5\. Access Control](#!ABAP_MODIFICATION_5@5@)
[6\. ORDER BY and UP TO, OFFSET in Subquery](#!ABAP_MODIFICATION_6@6@)
[7\. Cardinality in LEFT OUTER JOIN](#!ABAP_MODIFICATION_7@7@)
[8\. FOR ALL ENTRIES and Strings in the SELECT List](#!ABAP_MODIFICATION_8@8@)
[9\. Addition NOT for BETWEEN and LIKE](#!ABAP_MODIFICATION_9@9@)
[10\. Strict Mode in the Syntax Check](#!ABAP_MODIFICATION_10@10@)
[11\. Client Handling](#!ABAP_MODIFICATION_11@11@)
[12\. Replacement Service for ABAP SQL](#!ABAP_MODIFICATION_12@12@)

Modification 1   

Internal Tables as Data Sources

An internal table can be specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) data source of a query. This statement cannot be executed on all database systems, if the data from the internal table needs to be passed to the database.

Modification 2   

Relational Expressions

The following is now possible for [conditions in expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)):

-   Size comparisons can now be made between character-like data types and are no longer restricted to numeric data types.
-   The operator BETWEEN is also no longer restricted to numeric data types and SQL expressions can now be specified on the right side.
-   The operator LIKE is now also supported.

Modification 3   

Conversion Functions

The new type conversion functions [BINTOHEX](javascript:call_link\('abensql_type_conv_func.htm'\)) and [HEXTOBIN](javascript:call_link\('abensql_type_conv_func.htm'\)) make it possible to convert byte strings to character strings (and the other way round) in [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), which is not possible with a [CAST](javascript:call_link\('abensql_cast.htm'\)) expression.

Modification 4   

Path Expressions

The following is now possible for [path expressions](javascript:call_link\('abenabap_sql_path.htm'\)):

-   Path expressions can now be split over several source code rows at the blanks in the syntax for parameter passes and filter conditions and also before slashes (/).
-   Associations can now be used whose target data sources are [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry").
-   [Parameters](javascript:call_link\('abenabap_sql_parameters.htm'\)) can now be passed after the associations of a [path expression](javascript:call_link\('abenabap_sql_path.htm'\)). This makes it possible to specify paths whose associations have CDS entities with input parameters as data sources.
-   In path expressions, it is now possible to specify the cardinality and type of the join expression as [attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\)).
-   [Filter conditions](javascript:call_link\('abenabap_sql_path_filter.htm'\)) for associations can now be specified in path expressions.

Modification 5   

Access Control

The new addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) switches [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") off.

Modification 6   

ORDER BY and UP TO, OFFSET in Subquery

In a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"), it is now possible to use an [ORDER BY](javascript:call_link\('abaporderby_clause.htm'\)) clause and the additions [UP TO, OFFSET](javascript:call_link\('abapselect_up_to_offset.htm'\)) can be used after the clause. It is not possible to execute a subquery with an ORDER BY clause on all database systems

Modification 7   

Cardinality in LEFT OUTER JOIN

In a [LEFT OUTER JOIN](javascript:call_link\('abapselect_join.htm'\)), an addition ONE TO MANY can now be specified for the cardinality. This is evaluated as a note for optimization by [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Modification 8   

FOR ALL ENTRIES and Strings in the SELECT List

In the previous [strict modes of the syntax check](javascript:call_link\('abenabap_sql_strict_modes.htm'\)), the addition [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) of statement [SELECT](javascript:call_link\('abapselect.htm'\)) could not be specified together with columns of the types STRING and RAWSTRING or LCHR and LRAW in the [SELECT list](javascript:call_link\('abapselect_list.htm'\)). This restriction has been removed and now the syntax check simply issues a warning.

Modification 9   

Addition NOT for BETWEEN and LIKE

The addition NOT can now specified in front of BETWEEN and LIKE in [relation expressions for expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\)).

Modification 10   

Strict Mode in the Syntax Check

If one the new features listed above is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 11   

Client Handling

The following (stricter) rules for the additions [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) and [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) now apply when switching and disabling [implicit client handling](javascript:call_link\('abenabap_sql_client_handling.htm'\)) in reads on [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"):

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") does not work for client-independent access. For this reason, the additions [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) and [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) can only be used in ABAP SQL in reads on CDS entities for which access control is switched off using the annotation AccessControl.authorizationCheck.#NOT\_ALLOWED or the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of an ABAP SQL query.
-   [Path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) can only be evaluated if automatic client handling is switched on. This cannot be done using [CLIENT SPECIFIED](javascript:call_link\('abapselect_client.htm'\)) in cases where path expressions are used that contain [associations](javascript:call_link\('abencds_association_v1.htm'\)) whose target data source is client-specific In path expressions in the FROM clause, the source data sources of the associations cannot be client-specific either.

Modification 12   

Replacement Service for ABAP SQL

The class [CL\_OSQL\_REPLACE](javascript:call_link\('abencl_osql_replace.htm'\)) can be used in [unit tests](javascript:call_link\('abenunit_test_glosry.htm'\) "Glossary Entry") with [ABAP Unit](javascript:call_link\('abenabap_unit_glosry.htm'\) "Glossary Entry") to redirect database accesses in ABAP SQL to other databases.