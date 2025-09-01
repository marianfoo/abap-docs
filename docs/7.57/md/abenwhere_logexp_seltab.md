  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_cond - IN range_tab, ABENWHERE_LOGEXP_SELTAB, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

sql\_cond - IN range\_tab

Syntax

... operand *\[*NOT*\]* IN @range\_tab ...

Effect

This variant of the operator IN checks whether the operands on the left side match a [ranges condition](javascript:call_link\('abenranges_condition_glosry.htm'\) "Glossary Entry") in a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry"). The relational expression is true if the value of the operand operand is (is not) in the result set described in the rows of the [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") range\_tab specified as a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)).

-   The following applies to operand:
    -   [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.
    -   In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.
-   Any internal table whose row type corresponds to that of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") can be specified for the ranges table range\_tab. This includes, in particular, [selection tables](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry").

The ranges table is evaluated in the same way as in [comparison expressions](javascript:call_link\('abenlogexp_select_option.htm'\)), with the difference that any comparisons using the operators CP and NP are transformed into [LIKE conditions](javascript:call_link\('abenwhere_logexp_like.htm'\)) for which the ABAP SQL escape character "#" is defined. The pattern after CP or NP is transformed to a pattern for LIKE as follows:

-   If the ABAP SQL wildcard characters "%" are contained in the pattern, the "#" escape character is inserted in front of these characters.
-   Any wildcard characters \* and "+" that are not prefixed with the escape character "#" are transformed to the ABAP SQL wildcard characters "%" and "\_".
-   Any "#" escape characters that do not prefix themselves or the ABAP SQL wildcard characters "%" and "\_" are removed.

If the ranges table is initial, the expression IN range\_tab is always true. This overrides the general rule that the result of a [relational expression](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) is unknown if an operand has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

The content of the columns LOW and HIGH in the ranges table must match the data type of the operand in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is checked by the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception.

Hints

-   LIKE conditions resulting from CP or NP are case-sensitive, which is not the case in ABAP comparison expressions.
-   If no conditions are specified apart from IN range\_tab, all rows of the data source are selected if the ranges table is initial.
-   The conditions specified in the ranges table are passed by the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") to the database as SQL statement input values. The maximum number of input values depends on the database system and is usually between 2000 and 10000. If the maximum number is exceeded an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.
-   For an initial ranges table, no condition is passed to the database and therefore, the result is always true.
-   If the ranges table contains invalid values, an uncatchable exception is raised.
-   No [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) can be specified on the right side whose result represents a ranges table.

Example

A ranges table is filled as follows and the order of the rows is not important:

SIGN  OPTION  LOW              HIGH
\---------------------------------------
I     EQ      01104711
I     BT      10000000         19999999
I     GE      90000000
E     EQ      10000911
E     BT      10000810         10000815
E     CP      1%2##3#+4++5\*

When used in sql\_cond, this generates the following combination of relational expressions:

... ( ID = '01104711'                      OR
      ID BETWEEN '10000000' AND '19999999' OR
      ID >= '90000000' )                     AND
    ID <> '10000911'                         AND
    ID NOT BETWEEN '10000810' AND '10000815' AND
    ID NOT LIKE '1#%2##3+4\_\_5%' ESCAPE '#'   ...

Example

Use of a selection table defined for a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") with [SELECT-OPTIONS](javascript:call_link\('abapselect-options_shortref.htm'\)) in a WHERE clause.

DATA carrid TYPE spfli-carrid.
SELECT-OPTIONS airlines FOR carrid.
SELECT carrid, connid, cityfrom, cityto
       FROM spfli
       WHERE carrid IN @airlines
       INTO TABLE @FINAL(flights).
cl\_demo\_output=>display( flights ).