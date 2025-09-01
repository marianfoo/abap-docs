  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.40 and its SPs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740.htm) →  [News for ABAP Release 7.40, SP08](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-740_sp08.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20in%20ABAP%20Release%207.40%2C%20SP08%2C%20ABENNEWS-740_SP08-ABAP_SQL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

ABAP SQL in ABAP Release 7.40, SP08

[1\. New Column dbtab~\* Specified After SELECT](#!ABAP_MODIFICATION_1@1@)
[2\. Inline Declarations for the Target Area of SELECT](#!ABAP_MODIFICATION_2@2@)
[3\. SQL Expressions](#!ABAP_MODIFICATION_3@3@)
[4\. Reads on CDS Views with Parameters](#!ABAP_MODIFICATION_4@4@)
[5\. Restrictions Removed](#!ABAP_MODIFICATION_5@5@)
[6\. Position of the INTO Clause](#!ABAP_MODIFICATION_6@6@)
[7\. Stricter Checks for Syntax Rules](#!ABAP_MODIFICATION_7@7@)
[8\. Strict Mode in the Syntax Check](#!ABAP_MODIFICATION_8@8@)
[9\. Comparable Types](#!ABAP_MODIFICATION_9@9@)

Modification 1   

New Column dbtab~\* Specified After SELECT

In the definition of the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) of a SELECT statement, data\_source~\* can be specified as an element of the SELECT list from ABAP release 7.40, SP08 to include all columns of different database tables or views used after FROM in the result set. If specified, data\_source~\* can be combined with individual specified columns [col\_spec](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_clause_col_spec.htm) (with the exception of [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm)).

When data\_source~\* is specified in the result set, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 2   

Inline Declarations for the Target Area of SELECT

After the addition [INTO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) of a SELECT statement, [inline declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declaration_glosry.htm "Glossary Entry") can be made from ABAP release 7.40, SP08 using the declaration operator [DATA(...)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_into_target.htm) with the prefixed escape character @. Inline declarations can be made for individual parenthesized data objects (@DATA(elem1),@DATA(elem2),...), for individual work areas INTO @DATA(wa), and for internal tables INTO TABLE @DATA(itab). Either an elementary data object, a structure, or an internal table is declared depending on the result set defined in the [SELECT list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_list.htm) and the database tables used after FROM.

When inline declarations are used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 3   

SQL Expressions

The [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_expression_glosry.htm "Glossary Entry") introduced in ABAP release 7.40, SP05 were revised in the following ways:

-   The operator [CASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_case.htm) can now be used to perform [complex case distinctions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_searched_case.htm) (searched case) as well as simple case distinctions.
-   SQL expressions can be specified after [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm).
-   SQL expressions can be specified together with aggregate expressions in the SELECT list.
-   SQL expressions can be specified as arguments of [aggregate functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) (except avg) in the SELECT list and the HAVING clause.

If one of the new features is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 4   

Reads on CDS Views with Parameters

From ABAP release 7.40, SP08, [CDS views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_glosry.htm "Glossary Entry") can be defined with [input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v1.htm) that are assigned actual parameters when used. To enable this, the option of a parenthesized comma-separated list for parameter passing was added to the [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) specified in the statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm):

[( pname1 = act1, pname1 = act2, ...)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm)

Since not all database systems support views with parameters, the new class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencl_abap_dbfeatures.htm) with the method USE\_FEATURES is available, which detects whether this is possible for the current database system. Furthermore, accessing a view with parameters triggers a warning from the syntax check; this warning can be hidden by a pragma.

Modification 5   

Restrictions Removed

The following previous restrictions were removed:

-   For [SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsql_expr.htm):
    -   From ABAP release 7.40, SP08, a negative sign \- can be placed in front of an operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith.htm) that does not follow an arithmetic operator directly.
    -   From ABAP release 7.40, SP08, an operand operand1, operand2, ... in a [simple case distinction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_simple_case.htm) can now also be an SQL expression.
    -   From ABAP release 7.40, SP08, SQL expressions can also be specified together with [aggregate expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_aggregate.htm) and the addition [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm).
-   For [joins](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_join.htm):
    -   From ABAP release 7.40, SP08, the operators LIKE and [IN (...)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_operand_in.htm) can be used in ON conditions.
    -   From ABAP release 7.40, SP08, individual comparisons can be joined using OR and negated using NOT.
    -   From ABAP release 7.40, SP08, outer joins no longer need to contain at least one comparison between columns on the left and right side.
-   For [dynamic WHERE conditions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_dynamic.htm):
    -   [Subqueries](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensubquery_glosry.htm "Glossary Entry") can now also be specified dynamically.

When one of the rule changes is exploited, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 6   

Position of the INTO Clause

From ABAP release 7.40, SP08, the [INTO clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinto_clause.htm) can and should be specified as the final clause of a [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) statement. In this case, the additions [UP TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm), [OFFSET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_up_to_offset.htm) and [abap\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_additions.htm) of the SELECT statement must be specified after INTO.

If the INTO clause is specified as the final clause, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm). This handles the statement more strictly than the regular syntax check.

Modification 7   

Stricter Checks for Syntax Rules

From ABAP release 7.40, SP08, the following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   Correction for the HAVING Condition
    
    Any columns that are specified in a [HAVING clause](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphaving_clause.htm) outside of an aggregate expression must also be specified after [GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgroupby_clause.htm). Before ABAP release 7.40, SP08, this was not recorded by the static syntax check, but did raise a catchable exception. From ABAP release 7.40, SP08, this produces a syntax check warning and raises an uncatchable exception outside of the [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm) of the syntax check.
    Example
    From ABAP release 7.40, SP08, a syntax warning and uncatchable exception for:
    DATA itab TYPE TABLE OF scarr.
    SELECT \*
           FROM scarr
           INTO TABLE itab
           HAVING carrid = 'LH'.
    

Modification 8   

Strict Mode in the Syntax Check

If one the new features listed here is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 9   

Comparable Types

A table of [comparable types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenwhere_logexp_compare_types.htm) was constructed for comparisons performed on the database. The results of comparisons made between non-comparable types are determined by the database system and produce a syntax error (in the [strict mode of the syntax check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_strictmode_740_sp08.htm)) or a syntax warning.