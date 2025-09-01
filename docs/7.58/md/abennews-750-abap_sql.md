  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.50](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-750.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.50%2C%20ABENNEWS-750-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL in ABAP Release 7.50

[1\. Arrangement of SELECT Clauses andFROM Clauses](#!ABAP_MODIFICATION_1@1@)
[2\. Unions](#!ABAP_MODIFICATION_2@2@)
[3\. Host Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. SQL Expressions](#!ABAP_MODIFICATION_4@4@)
[5\. SQL Functions](#!ABAP_MODIFICATION_5@5@)
[6\. Result Type of COUNT](#!ABAP_MODIFICATION_6@6@)
[7\. ON Conditions](#!ABAP_MODIFICATION_7@7@)
[8\. Columns Specified After BETWEEN](#!ABAP_MODIFICATION_8@8@)
[9\. Subquery as Data Source of INSERT](#!ABAP_MODIFICATION_9@9@)
[10\. Access to CDS Entities](#!ABAP_MODIFICATION_10@10@)
[11\. CDS Path Expressions](#!ABAP_MODIFICATION_11@11@)
[12\. Access to Global Temporary Tables](#!ABAP_MODIFICATION_12@12@)
[13\. Strict Mode in the Syntax Check](#!ABAP_MODIFICATION_13@13@)
[14\. CDS Views with Input Parameters](#!ABAP_MODIFICATION_14@14@)
[15\. System Classes](#!ABAP_MODIFICATION_15@15@)
[16\. Access to Replacement Objects](#!ABAP_MODIFICATION_16@16@)

Modification 1   

Arrangement of SELECT Clauses andFROM Clauses

From ABAP release 7.50, the [FROM clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) of a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) can also be specified in front of the [SELECT clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause.htm). In this case, the SELECT clause must be introduced using the new addition [FIELDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm). This arrangement supports tools such as Code Completion in ABAP Editor.

Modification 2   

Unions

From ABAP release 7.50, the addition [UNION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapunion_clause.htm) creates the union of the results sets of two [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statements.

Modification 3   

Host Expressions

From ABAP release 7.50, [host expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) with the syntax @( expr ) can be specified in many operand positions in which [host variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_host_variables.htm) are possible. For expr, all ABAP expressions can calls are possible that can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

Operand positions for host expressions in ABAP release 7.50:

-   Arguments of [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) and hence all operand positions in which these are possible.
-   Operand n after [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) and [PACKAGE SIZE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement,
-   Right sides of [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm), [ON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm), or [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) conditions, except for LIKE and IN.
-   [Actual parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) for input parameters of CDS views.
-   In the write statements [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm), [UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate.htm), [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_dbtab.htm), and [DELETE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dbtab.htm), the work areas wa or the internal tables itab from which the data is taken.
-   Right side of a [SET expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapupdate_set_expression.htm) in UPDATE.

Modification 4   

SQL Expressions

The following changes have been made:

-   From ABAP release 7.50, [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm) can be specified in the following operand positions (except in the SELECT list):
    -   Left side of any [WHERE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwhere.htm) condition
    -   Left side of a [HAVING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) condition
    -   Left side of a [complex case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_searched_case.htm)
    -   As an operand of a [cast expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_cast.htm).
-   In the SQL expression [CASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_case.htm), columns with the built-in dictionary type SSTRING can now be used.

If an SQL expression can be specified, any individual literals, host variables, and host expressions can also be specified.

Modification 5   

SQL Functions

The following changes have been made:

-   New Numeric Function
    
    The new function [ROUND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm) rounds numeric values.
    
-   New String Functions
    
    The new functions [CONCAT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [LPAD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [LENGTH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [LTRIM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [REPLACE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [RIGHT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), [RTRIM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm), and [SUBSTRING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm) perform operations on strings.
    
-   Coalesce Function Expanded
    
    The [coalesce function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_coalesce.htm) can now have 255 arguments instead of just two and returns the value of the first argument that does not have the null value. Columns with the built-in dictionary type SSTRING can now be used as arguments.
    

Modification 6   

Result Type of COUNT

From ABAP release 7.50, the result type of all aggregate functions [COUNT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_agg_func.htm) is INT8.

Modification 7   

ON Conditions

The following is possible from ABAP release 7.50:

-   [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expression_glosry.htm "Glossary Entry") can be used on the left side of the [ON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm) condition of any join expression.
-   The expression [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_null.htm) can be used in an [ON](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm) condition of an outer join.
-   The full ON condition or subconditions of [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm) can be specified dynamically as [(cond\_syntax)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_dynamic.htm). This is not possible if the full [FROM clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) is specified dynamically as (cond\_syntax).

Modification 8   

Columns Specified After BETWEEN

From ABAP release 7.50, numeric columns can be specified on the right side in an interval condition using [BETWEEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_interval.htm), providing the name of the database table or view is prefixed using ~.

Modification 9   

Subquery as Data Source of INSERT

In the ABAP SQL write statement [INSERT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_dbtab.htm), a parenthesized [subquery](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_from_select.htm) can now be specified as a data source after FROM. The rows of the results set of the subquery are inserted into the target table directly on the database. No data transport is required between the database and the application server.

Modification 10   

Access to CDS Entities

The following changes have been made:

-   From ABAP release 7.50, the restriction no longer applies that a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") can only be used together with database tables and classic views in a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement if addressed using its [CDS database view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry"). From ABAP release 7.50, CDS views can be addressed using the name of their [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry"), even if associated with database tables or classic views using [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenjoin_glosry.htm "Glossary Entry") or [subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry"). This makes accesses performed on a CDS using the CDS database view [obsolete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_cds_obsolete.htm).
-   From ABAP release 7.50, the new [CDS table functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_table_function_glosry.htm "Glossary Entry") can also be specified as [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement alongside [CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry").
-   If an input parameter of a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") is annotated with the new annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm), ABAP SQL can pass the system value that matches the value of the annotation implicitly. The annotation value [#CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm) even prevents an actual parameter from being passed to input parameters explicitly that are annotated in this way for client IDs.

Modification 11   

CDS Path Expressions

From ABAP release 7.50, [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_path.htm) can be specified in SELECT statements that access CDS views with associations published for outside use as follows.

-   Path expressions closed with an element can be specified as [columns](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_columns.htm).
-   Path expressions closed with a target data source can be used as [data sources](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm).

Modification 12   

Access to Global Temporary Tables

When the new [global temporary tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") in ABAP Dictionary are accessed using ABAP SQL, all temporary data stored here is guaranteed to be deleted before the next implicit [database commit](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendatabase_commit_glosry.htm "Glossary Entry"), If not, a runtime error occurs.

Modification 13   

Strict Mode in the Syntax Check

If one the new features listed above (with the exception of dynamic join conditions) is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_750.htm), which handles the statement more strictly than the regular syntax check.

Modification 14   

CDS Views with Input Parameters

In ABAP release 7.50 and higher, the [input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v1.htm) of CDS views are supported by all database platforms and can be used in ABAP SQL. It is no longer necessary to query property VIEWS\_WITH\_PARAMETERS using method USE\_FEATURES of class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm). Querying this property results in a warning check from the syntax check.

Modification 15   

System Classes

The following changes have been made:

-   The class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm) can now be used to check all features of databases that can be integrated in ABAP programming but which cannot be used in all database systems.
-   The new system class CL\_DBI\_UTILITIES contains utility methods for the database interface. The documented method IS\_LOGGING\_ON can be used to verify whether [logging](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_database_tables_protocol.htm) is currently switched on for a database table.

Modification 16   

Access to Replacement Objects

From ABAP release 7.50, it is possible to define a [CDS view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") as a [replacement object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_replacement_objects.htm) in ABAP Dictionary (transaction SE11) for a database table or a database view.

If a replacement object is defined for a database table or database view specified as a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) of a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement, the SELECT statement accesses the CDS view and not the database table or the database view.

This change was implemented using an internal tool a kernel patch after ABAP release 7.40, SP10.