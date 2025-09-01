  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20IN%20%28%20...%20%29%2C%20ABENWHERE_LOGEXP_IN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - IN ( ... )

Syntax Forms

[Single Operand](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))

1\. ... [operand](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) *\[*NOT*\]* IN *{* (operand1*\[*, operand2*\[*, ...*\]**\]*) *}*
                     *|* *{* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* ) *}* ...

[Operand List](javascript:call_link\('abenwhere_logexp_list_in.htm'\))

2\. ... [( operand1, operand2*\[*, ...*\]* )](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) IN *{* ( ( operand11, operand21*\[*, ...*\]* )*\[*,
                                           ( operand12, operand22*\[*, ...*\]* )*\]* ) *}*
                                     *|* *{* ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) *\[*[UNION*|*INTERSECT*|*EXCEPT ...](javascript:call_link\('abapunion.htm'\))*\]* ) *}* ...

Effect

This variant of the operator IN checks whether the operands on the left side match a value from a set of values specified in parentheses. A [single operand](javascript:call_link\('abenwhere_logexp_operand_in.htm'\)) or an [operand list](javascript:call_link\('abenwhere_logexp_list_in.htm'\)) can be specified on the left side. The set of values on the right side is determined using either comma-separated lists or subqueries.

Continue
[sql\_cond - operand IN ( ... )](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))
[sql\_cond - ( operand1, operand2, ... ) IN ( ... )](javascript:call_link\('abenwhere_logexp_list_in.htm'\))