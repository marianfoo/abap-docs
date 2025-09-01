  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

sql\_cond - IN ( ... )

Syntax Forms

[Single operand](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))
1\. ... [operand](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) *\[*NOT*\]* IN *{* (operand1*\[*, operand2*\[*, ...*\]**\]*) *}*
                     *|* *{* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* ) *}* ...
[Operand list](javascript:call_link\('abenwhere_logexp_list_in.htm'\))
2\. ... [( operand1, operand2*\[*, ...*\]* )](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) IN *{* ( ( operand11, operand21*\[*, ...*\]* )*\[*,
                                           ( operand12, operand22*\[*, ...*\]* )*\]* ) *}*
                                     *|* *{* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION ...](javascript:call_link\('abapunion.htm'\))*\]* ) *}* ...

Effect

This variant of the operator IN checks whether the operands on the left side match a value from a set of values specified in parentheses. A [single operand](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) or an [operand list](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) can be specified on the left side. The set of values on the right side is determined using either comma-separated lists or subqueries.

Continue
[sql\_cond - operand IN ( ... )](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))
[sql\_cond - ( operand1, operand2, ... ) IN ( ... )](javascript:call_link\('abenwhere_logexp_list_in.htm'\))