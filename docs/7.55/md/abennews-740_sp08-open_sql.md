  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP08](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740_sp08.htm) → 

ABAP SQL in Release 7.40, SP08

[1\. New column data\_source~\* specified after SELECT](#!ABAP_MODIFICATION_1@1@)
[2\. Inline declarations for the target area of SELECT](#!ABAP_MODIFICATION_2@2@)
[3\. SQL expressions](#!ABAP_MODIFICATION_3@3@)
[4\. Reads on CDS views with parameters](#!ABAP_MODIFICATION_4@4@)
[5\. Restrictions removed](#!ABAP_MODIFICATION_5@5@)
[6\. Arrangement of the INTO clause](#!ABAP_MODIFICATION_6@6@)
[7\. Stricter checks for syntax rules](#!ABAP_MODIFICATION_7@7@)
[8\. Strict mode of syntax check](#!ABAP_MODIFICATION_8@8@)
[9\. Comparable types](#!ABAP_MODIFICATION_9@9@)

Modification 1

New Column dbtab~\* Specified After SELECT

In the definition of the result set in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) of a SELECT statement, data\_source~\* can be specified as an element of the SELECT list from Release 7.40, SP08 to include all columns of different database tables or views used after FROM in the result set. If specified, data\_source~\* can be combined with individual specified columns [col\_spec](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_clause_col_spec.htm) (with the exception of [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm)).

When data\_source~\* is specified in the result set, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 2

Inline Declarations for the Target Area of SELECT

After the addition [INTO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) of a SELECT statement, [inline declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declaration_glosry.htm "Glossary Entry") can be made from Release 7.40, SP08 using the declaration operator [DATA(...)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_into_target.htm) with the prefixed escape character @. Inline declarations can be made for individual parenthesized data objects (@DATA(elem1),@DATA(elem2),...), for individual work areas INTO @DATA(wa), and for internal tables INTO TABLE @DATA(itab). Either an elementary data object, a structure, or an internal table is declared depending on the result set defined in the [SELECT list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_list.htm) and the database tables used after FROM.

When inline declarations are used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 3

SQL Expressions

The [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_expression_glosry.htm "Glossary Entry") introduced in Release 7.40, SP05 were revised in the following ways:

-   The operator [CASE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_case.htm) can now be used to perform [complex case distinctions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_searched_case.htm) (searched case) as well as simple case distinctions.

-   SQL expressions can be specified after [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm).

-   SQL expressions can be specified together with aggregate expressions in the SELECT list.

-   SQL expressions can be specified as arguments of [aggregate functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) (except avg) in the SELECT list and the HAVING clause.

If one of the new features is used, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 4

Reads on CDS Views with Parameters

From Release 7.40, SP08, [CDS views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") can be defined with [input parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_list_v1.htm) that are assigned actual parameters when used. To enable this, the option of a parenthesized comma-separated list for parameter passing was added to the [data source](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm) specified in the statement [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm):

[( pname1 = act1, pname1 = act2, ...)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_data_source.htm)

Since not all database systems support views with parameters, the new class [CL\_ABAP\_DBFEATURES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_dbfeatures.htm) with the method USE\_FEATURES is available, which detects whether this is possible for the current database system. Furthermore, accessing a view with parameters triggers a warning from the syntax check; this warning can be hidden by a pragma.

Modification 5

Restrictions Removed

The following previous restrictions were removed:

-   For [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm):

-   From Release 7.40, SP08, a negative sign \- can be placed in front of an operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_arith.htm) that does not follow an arithmetic operator directly.

-   From Release 7.40, SP08, an operand operand1, operand2, ... in a [simple case distinction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_simple_case.htm) can now also be an SQL expression.

-   From Release 7.40, SP08, SQL expressions can also be specified together with [aggregate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_aggregate.htm) and the addition [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm).

-   For [joins](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_join.htm):

-   From Release 7.40, SP08, the operators LIKE and [IN (...)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_operand_in.htm) can be used in ON conditions.

-   From Release 7.40, SP08, individual comparisons can be joined using OR and negated using NOT.

-   From Release 7.40, SP08, outer joins no longer need to contain at least one comparison between columns on the left and right side.

-   For [dynamic WHERE conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_dynamic.htm):

-   [Subqueries](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") can now also be specified dynamically.

When one of the rule changes is exploited, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 6

Arrangement of the INTO Clause

From Release 7.40, SP08, the [INTO clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinto_clause.htm) can and should be specified as the final clause of a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement. In this case, the additions [UP TO, OFFSET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_up_to_offset.htm) and [abap\_options](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect_additions.htm) of the SELECT statement must be specified after INTO.

If the INTO clause is specified as the final clause, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm). This handles the statement more strictly than the regular syntax check.

Modification 7

Stricter Checks for Syntax Rules

From Release 7.40, SP08, the following syntax constructs that have always contained errors now produce syntax errors or runtime errors.

-   Correction for the HAVING Condition

Any columns that are specified in a [HAVING clause](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaphaving_clause.htm) outside of an aggregate expression must also be specified after [GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapgroupby_clause.htm). Before Release 7.40, SP08, this was not recorded by the static syntax check, but did raise a catchable exception. From Release 7.40, SP08, this produces a syntax check warning and raises a uncatchable exception outside of the [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm) of the syntax check.
Example
From Release 7.40, SP08, a syntax warning and uncatchable exception for:
DATA itab TYPE TABLE OF scarr.
SELECT \*
       FROM scarr
       INTO TABLE itab
       HAVING carrid = 'LH'.

Modification 8

Strict Mode in the Syntax Check

If one the new features listed here is used in an ABAP SQL statement, the syntax check is performed in a [strict mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm), which handles the statement more strictly than the regular syntax check.

Modification 9

Comparable Types

A table of [comparable types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare_types.htm) was constructed for comparisons performed on the database. The results of comparisons made between non-comparable types are determined by the database system and produce a syntax error (in the [strict mode of the syntax check](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_740_sp08.htm)) or a syntax warning.