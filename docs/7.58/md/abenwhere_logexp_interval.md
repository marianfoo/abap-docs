  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20BETWEEN%2C%20ABENWHERE_LOGEXP_INTERVAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - BETWEEN

Syntax

... operand *\[*NOT*\]* BETWEEN operand1 AND operand2 ...

Effect

This relational expression is true if the content of the operand operand is (is not) between the values of the operands operand1 and operand2.

-   The following applies to operand:
    -   Numeric [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.
    -   A column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) specified individually cannot be numeric.
    -   In a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause, [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") can also be used.
-   The following applies to operand1 and operand2:
    -   Elementary [SQL operands](javascript:call_link\('abensql_operands.htm'\)) can be specified.
    -   Columns [col](javascript:call_link\('abenabap_sql_columns.htm'\)) must have a numeric data type and they need to be prefixed with the name of the [data source](javascript:call_link\('abapselect_data_source.htm'\)) using ~. In this case, operand must also be numeric.
    -   Numeric [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except for [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)) can be specified.
    -   [Cast expressions](javascript:call_link\('abensql_cast.htm'\)) can be specified.
    -   The content of ABAP objects, that is, untyped literals, host variables, and host expressions must match the data type of operand in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is also checked by the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from ABAP release 7.40, SP08 and can raise an exception.

The interval limits are included. The comparison is made in the same way as for

... [*\[*NOT*\]* ( operand >= operand1 AND operand <= operand2 )](javascript:call_link\('abenwhere_logexp_compare.htm'\)) ...

and the corresponding rules and notes apply.

Example

Reads all flights within the next 30 days.

FINAL(today) = cl\_demo\_date\_time=>get\_system\_date( ).
FINAL(date) = CONV d( today + 30 ).
SELECT carrid, connid, fldate
       FROM sflight
       WHERE fldate BETWEEN @today AND @date
       INTO TABLE @FINAL(sflight\_tab).