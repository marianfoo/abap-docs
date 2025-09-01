  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

This relational expression is true if the content of the operand operand is (is not) between the values of the operands operand1 and operand2.

-   [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and numeric [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand. This covers the corresponding literals, host variables, and host expressions. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

-   The following can be specified for operand1 and operand2:

-   Literals

-   [Host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) whose name is prefixed with the escape character @.

-   [Host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\))

-   Numeric [columns](javascript:call_link\('abenopen_sql_columns.htm'\)) that must be prefixed with the name of the [data source](javascript:call_link\('abapselect_data_source.htm'\)) using ~. In this case, operand must also be numeric.

The interval limits are included. The content of operand1 and operand2 must match the data type of operand in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is also checked by the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception.

The comparison is made in the same way as for

... [*\[*NOT*\]* ( operand >= operand1 AND operand <= operand2 )](javascript:call_link\('abenwhere_logexp_compare.htm'\)) ...

and the corresponding rules and notes apply.

Example

Reads all flights within the next 30 days.

DATA(date) = conv d( sy-datum + 30 ).
SELECT carrid, connid, fldate
       FROM sflight
       WHERE fldate BETWEEN @sy-datum AND @date
       INTO TABLE @DATA(sflight\_tab).