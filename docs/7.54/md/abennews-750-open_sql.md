  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.50](javascript:call_link\('abennews-750.htm'\)) → 

ABAP SQL in Release 7.50

[1\. Arrangement of SELECT clauses and FROM clauses](#!ABAP_MODIFICATION_1@1@)

[2\. Unions](#!ABAP_MODIFICATION_2@2@)

[3\. Host expressions](#!ABAP_MODIFICATION_3@3@)

[4\. SQL expressions expanded](#!ABAP_MODIFICATION_4@4@)

[5\. SQL functions expanded](#!ABAP_MODIFICATION_5@5@)

[6\. ON conditions expanded](#!ABAP_MODIFICATION_6@6@)

[7\. Columns specified after BETWEEN](#!ABAP_MODIFICATION_7@7@)

[8\. Subquery as data source of INSERT](#!ABAP_MODIFICATION_8@8@)

[9\. Access to CDS entities](#!ABAP_MODIFICATION_9@9@)

[10\. Path expressions for associations of CDS views](#!ABAP_MODIFICATION_10@10@)

[11\. Access to global temporary tables](#!ABAP_MODIFICATION_11@11@)

[12\. Strict mode in the syntax check](#!ABAP_MODIFICATION_12@12@)

[13\. CDS views with input parameters](#!ABAP_MODIFICATION_13@13@)

[14\. System classes expanded](#!ABAP_MODIFICATION_14@14@)

[15\. Access to replacement objects](#!ABAP_MODIFICATION_15@15@)

Modification 1

Arrangement of SELECT Clauses and FROM Clauses

From Release 7.50, the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) of a [SELECT statement](javascript:call_link\('abapselect.htm'\)) can also be specified in front of the [SELECT clause](javascript:call_link\('abapselect_clause.htm'\)). In this case, the SELECT clause must be introduced using the new addition [FIELDS](javascript:call_link\('abapselect.htm'\)). This arrangement supports tools such as Code Completion in ABAP Editor.

Modification 2

Unions

From Release 7.50, the addition [UNION](javascript:call_link\('abapunion_clause.htm'\)) creates the union of the results sets of two [SELECT](javascript:call_link\('abapselect.htm'\)) statements.

Modification 3

Host Expressions

From Release 7.50, [host expressions](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the syntax @( expr ) can be specified in many operand positions in which [host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) are possible. For expr, all ABAP expressions can calls are possible that can be specified in [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

Operand positions for host expressions in Release 7.50:

-   Arguments of [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) and hence all operand positions in which these are possible.
    
-   Operand n after [UP TO](javascript:call_link\('abapselect_additions.htm'\)) and [PACKAGE SIZE](javascript:call_link\('abapinto_clause.htm'\)) in the [SELECT](javascript:call_link\('abapselect.htm'\)) statement,
    
-   Right sides of [WHERE](javascript:call_link\('abenwhere_logexp.htm'\)), [ON](javascript:call_link\('abapselect_join.htm'\)), or [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) conditions, except for LIKE and IN.
    
-   [Actual parameters](javascript:call_link\('abapselect_data_source.htm'\)) for input parameters of CDS views.
    
-   In the write statements [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), [UPDATE](javascript:call_link\('abapupdate.htm'\)), [MODIFY](javascript:call_link\('abapmodify_dbtab.htm'\)), and [DELETE](javascript:call_link\('abapdelete_dbtab.htm'\)), the work areas wa or the internal tables itab from which the data is taken.
    
-   Right side of a [SET expression](javascript:call_link\('abapupdate_set_expression.htm'\)) in UPDATE.
    

Modification 4

SQL Expressions Expanded

-   From Release 7.50, [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified in the following operand positions (except in the SELECT list):
    

-   Left side of any [WHERE](javascript:call_link\('abenwhere_logexp.htm'\)) condition

-   Left side of a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) condition

-   Left side of a [complex case distinction](javascript:call_link\('abensql_searched_case.htm'\))

-   As an operand of a [cast expression](javascript:call_link\('abensql_cast.htm'\)).

-   In the SQL expression [CASE](javascript:call_link\('abensql_case.htm'\)), columns with the built-in dictionary type SSTRING can now be used.
    

If an SQL expression can be specified, any individual literals, host variables, and host expressions can also be specified.

Modification 5

SQL Functions Expanded

-   New Numeric Function
    

The new function [ROUND](javascript:call_link\('abensql_arith_func.htm'\)) rounds numeric values.

-   New String Functions
    

The new functions [CONCAT](javascript:call_link\('abensql_string_func.htm'\)), [LPAD](javascript:call_link\('abensql_string_func.htm'\)), [LENGTH](javascript:call_link\('abensql_string_func.htm'\)), [LTRIM](javascript:call_link\('abensql_string_func.htm'\)), [REPLACE](javascript:call_link\('abensql_string_func.htm'\)), [RIGHT](javascript:call_link\('abensql_string_func.htm'\)), [RTRIM](javascript:call_link\('abensql_string_func.htm'\)), and [SUBSTRING](javascript:call_link\('abensql_string_func.htm'\)) perform operations on strings.

-   Coalesce Function Expanded
    

The [coalesce function](javascript:call_link\('abensql_coalesce.htm'\)) can now have 255 arguments instead of just two and returns the value of the first argument that does not have the null value. Columns with the built-in dictionary type SSTRING can now be used as arguments.

Modification 6

ON Conditions Expanded

The following is possible from Release 7.50:

-   [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") can be used on the left side of the [ON](javascript:call_link\('abapselect_join.htm'\)) condition of any join expression.
    
-   The expression [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\)) can be used in an [ON](javascript:call_link\('abapselect_join.htm'\)) condition of an outer join.
    
-   The full ON condition or subconditions of [joins](javascript:call_link\('abapselect_join.htm'\)) can be specified dynamically as [(cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)). This is not possible if the full [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) is specified dynamically as (cond\_syntax).
    

Modification 7

Columns Specified After BETWEEN

From Release 7.50, numeric columns can be specified on the right side in an interval condition using [BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\)), providing the name of the database table or view is prefixed using ~.

Modification 8

Subquery as Data Source of INSERT

In the ABAP SQL write statement [INSERT](javascript:call_link\('abapinsert_dbtab.htm'\)), a parenthesized [subquery](javascript:call_link\('abapinsert_from_select.htm'\)) can now be specified as a data source after FROM. The rows of the results set of the subquery are inserted into the target table directly on the database. No data transport is required between the database and the application server.

Modification 9

Access to CDS entities

-   From Release 7.50, the restriction no longer applies that a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") can only be used together with database tables and classic views in a [SELECT](javascript:call_link\('abapselect.htm'\)) statement if addressed using its [CDS database view](javascript:call_link\('abencds_database_view_glosry.htm'\) "Glossary Entry"). From Release 7.50, CDS views can be addressed using the name of their [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"), even if associated with database tables or classic views using [joins](javascript:call_link\('abenjoin_glosry.htm'\) "Glossary Entry") or [subqueries](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry"). This makes accesses performed on a CDS using the CDS database view [obsolete](javascript:call_link\('abenopen_sql_cds_obsolete.htm'\)).
    
-   From Release 7.50, the new [CDS table functions](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") can also be specified as [data sources](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement alongside [CDS views](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry").
    
-   If an input parameter of a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is annotated with the new annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), ABAP SQL can pass the system value that matches the value of the annotation implicitly. The annotation value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) even prevents an actual parameter from being passed to input parameters explicitly that are annotated in this way for client IDs.
    

Modification 10

Path Expressions for Associations of CDS Views

From Release 7.50, [path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) can be specified in SELECT statements that access CDS views with associations published for outside use as follows.

-   Path expressions closed with an element can be specified as [columns](javascript:call_link\('abenopen_sql_columns.htm'\)).
    
-   Path expressions closed with a target data source can be used as [data sources](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)).
    

Modification 11

Access to Global Temporary Tables

When the new [global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") in ABAP Dictionary are accessed using ABAP SQL, all temporary data stored here is guaranteed to be deleted before the next implicit [database commit](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"), If not, a runtime error occurs.

Modification 12

Strict Mode in the Syntax Check

If one the new features listed above (with the exception of dynamic join conditions) is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Modification 13

CDS Views with Input Parameters

In Release 7.50 and higher, the [input parameters](javascript:call_link\('abencds_f1_parameter_list.htm'\)) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property VIEWS\_WITH\_PARAMETERS using method USE\_FEATURES of class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)). Querying this property results in a warning check from the syntax check.

Modification 14

System Classes Expanded

-   The class [CL\_ABAP\_DBFEATURES](javascript:call_link\('abencl_abap_dbfeatures.htm'\)) can now be used to check all features of databases that can be integrated in ABAP programming but which cannot be used in all database systems.
    
-   The new system class CL\_DBI\_UTILITIES contains utility methods for the database interface. The documented method IS\_LOGGING\_ON can be used to verify whether [logging](javascript:call_link\('abenddic_database_tables_protocol.htm'\)) is currently switched on for a database table.
    

Modification 15

Access to Replacement Objects

From Release 7.50, it is possible to define a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) in ABAP Dictionary (transaction SE11) for a database table or a database view.

If a replacement object is defined for a database table or database view specified as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement, the SELECT statement accesses the CDS view and not the database table or the database view.

This change was implemented using an internal tool a kernel patch after Release 7.40, SP10.