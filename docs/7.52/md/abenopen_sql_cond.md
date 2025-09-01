  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

Open SQL - Conditions sql\_cond

Syntax

...   rel\_exp
    *|* *\[*NOT*\]* sql\_cond *\[*AND*|*OR sql\_cond*\]* ...

Effect

Logical expression sql\_cond for formulating a condition in Open SQL. A logical expression consists of one or more relational expressions rel\_exp that are linked with [AND](javascript:call_link\('abenwhere_logexp_andornot.htm'\)) or [OR](javascript:call_link\('abenwhere_logexp_andornot.htm'\)) and can be negated with [NOT](javascript:call_link\('abenwhere_logexp_andornot.htm'\)). There are different types of relational expressions:

-   [Relational expressions for statements](javascript:call_link\('abenwhere_logexp.htm'\))

-   [Relational expressions for expressions](javascript:call_link\('abenosql_expr_logexp.htm'\))

Continue
[sql\_cond - rel\_exp for Statements](javascript:call_link\('abenwhere_logexp.htm'\))
[sql\_cond - rel\_exp for Expressions](javascript:call_link\('abenosql_expr_logexp.htm'\))
[sql\_cond - AND, OR, NOT, ( )](javascript:call_link\('abenwhere_logexp_andornot.htm'\))