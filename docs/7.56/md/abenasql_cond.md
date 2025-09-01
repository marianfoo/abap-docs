  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) → 

ABAP SQL - SQL Conditions sql\_cond

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* sql\_cond *\[*AND*|*OR sql\_cond*\]* ...

Effect

Logical expression sql\_cond for formulating a condition in ABAP SQL. A logical expression consists of either a single relational expression rel\_exp, or an expression composed of the Boolean operators [NOT](javascript:call_link\('abenwhere_logexp_andornot.htm'\)), [AND](javascript:call_link\('abenwhere_logexp_andornot.htm'\)), or [OR](javascript:call_link\('abenwhere_logexp_andornot.htm'\)) and one or more logical expressions, in which parentheses are possible. An atomic component of a compound logical expression is always one relational expression. There are different types of relational expressions:

-   [Relational expressions for statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\))
-   [Relational expressions for expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))

Continue
[sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\))
[sql\_cond - rel\_exp for Expressions](javascript:call_link\('abenabap_sql_expr_logexp.htm'\))
[sql\_cond - AND, OR, NOT, ( )](javascript:call_link\('abenwhere_logexp_andornot.htm'\))