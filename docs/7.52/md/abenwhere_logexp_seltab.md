  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - IN seltab

Syntax

... operand *\[*NOT*\]* IN @seltab ...

Effect

This relational expression is true if the value of the operand operand is (not) in the results set described in the rows of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") seltab.

-   [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

-   Any internal table whose row type matches a selection table can be specified for the selection table seltab (whose name should be prefixed with the escape character @ like every [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\))). This includes, in particular, [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry").

The selection table is evaluated in the same way as in [comparison expressions](javascript:call_link\('abenlogexp_select_option.htm'\)), with the difference that any comparisons using the operators CP and NP are transformed into [LIKE conditions](javascript:call_link\('abenwhere_logexp_like.htm'\)) for which the Open SQL escape character "#" is defined. The pattern after CP or NP is transformed to a pattern for LIKE as follows:

-   If the Open SQL wildcard characters "%" are contained in the pattern, the "#" escape character is inserted before these characters.

-   Any wildcard characters "\*" and "+" that are not prefixed with the escape character "#" are transformed to the Open SQL wildcard characters "%" and "\_".

-   Any "#" escape characters that do not prefix themselves or the Open SQL wildcard characters "%" and "\_" are removed.

If the selection table is initial, the expression IN seltab is always true.

The content of the columns LOW and HIGH in the selection table should match the data type of the operand in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is checked by the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception.

Notes

-   LIKE conditions are case-sensitive, which is not the case in ABAP comparison expressions.

-   If no conditions are specified apart from IN seltab, all rows of the data source are selected if the selection table is initial.

-   The conditions specified in the selection table are passed by the [database interface](javascript:call_link\('abendatabase_interface_glosry.htm'\) "Glossary Entry") to the database as SQL statement input values. The maximum number of input values depends on the database system and is usually between 2000 and 10000. If the maximum number is exceeded an exception of the class CX\_SY\_OPEN\_SQL\_DB is raised.

-   If the selection table contains invalid values, a non-handleable exception is raised.

-   No [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) can be specified on the right side.

Example

A selection table is filled as follows (the order of the rows is not important):

SIGN  OPTION  LOW              HIGH
\---------------------------------------
I     EQ      01104711
I     BT      10000000         19999999
I     GE      90000000
E     EQ      10000911
E     BT      10000810         10000815
E     CP      1%2##3#+4++5\*

When used in sql\_cond, this generates the following join of relational expressions:

... ( ID = '01104711'                      OR
      ID BETWEEN '10000000' AND '19999999' OR
      ID >= '90000000' )                     AND
    ID <> '10000911'                         AND
    ID NOT BETWEEN '10000810' AND '10000815' AND
    ID NOT LIKE '1#%2##3+4\_\_5%' ESCAPE '#'   ...

Example

Uses a selection table defined for a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") with [SELECT-OPTIONS](javascript:call_link\('abapselect-options_shortref.htm'\)) in a WHERE clause.

DATA carrid TYPE spfli-carrid.
SELECT-OPTIONS airlines FOR carrid.
SELECT carrid, connid, cityfrom, cityto
       FROM spfli
       WHERE carrid IN @airlines
       INTO TABLE @DATA(flights).
cl\_demo\_output=>display( flights ).