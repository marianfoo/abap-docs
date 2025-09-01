  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Conditions sql\_cond](javascript:call_link\('abenopen_sql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\)) → 

[Quick Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - IN ( ..., ... )

Syntax

... operand *\[*NOT*\]* IN (operand1, operand2 ... ) ...

Effect

This relational expression is true if the value of the operand operand matches (does not match) the content of one of the operands operand1, operand2 ... in a parenthesized comma-separated value list.

-   [Columns](javascript:call_link\('abenopen_sql_columns.htm'\)) and [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) can be specified for operand. This covers literals, host variables, and host expressions. In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.

-   The following can be specified for operand1, operand2, ... :

-   Literals

-   [Host variables](javascript:call_link\('abenopen_sql_host_variables.htm'\)) whose name is prefixed with the escape character @.

The content of the operands operand1, operand2, ... should match the data type of operand in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is also checked by the [strict modes](javascript:call_link\('abenopensql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception.

Note

No columns and no [host expressions](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) can be specified here on the right side.

Example

Reads the bookings in which the class is not in the value range (C - Business, F - First, Y - Economy) of the corresponding domain in ABAP Dictionary.

SELECT \*
       FROM sbook
       WHERE class NOT IN ('C','F','Y')
       INTO TABLE @DATA(sbook\_tab).
IF sy-subrc = 0.
  "Error handling
ENDIF.