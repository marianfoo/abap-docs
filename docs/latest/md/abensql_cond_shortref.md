  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%2C%20ABENSQL_COND_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_cond - Short Reference

[Reference](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\))

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}*
                  *{* operand2
                  *|* *{**\[*ALL*|*ANY*|*SOME*\]* ( SELECT [subquery](javascript:call_link\('abensubquery_shortref.htm'\)) *\[*UNION ...*\]* )*}* *}**}*
    *|* *{*operand *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]**}*
    *|* *{*operand IS *\[*NOT*\]* NULL*}*
    *|* *{*operand IS *\[*NOT*\]* INITIAL*}*
    *|* *{*EXISTS ( SELECT [subquery](javascript:call_link\('abensubquery_shortref.htm'\)) *\[*UNION ...*\]* )*}*
    *|* *{*operand *\[*NOT*\]* IN (operand1, operand2 ...)*}*
    *|* *{*operand *\[*NOT*\]* IN ( SELECT [subquery](javascript:call_link\('abensubquery_shortref.htm'\)) *\[*UNION ...*\]* )*}*
    *|* *{*( operand1, operand2, ... ) IN ( ( operand11, operand21 ... ),
                                        ( operand12, operand22 ... ), ... )*}*
    *|* *{*operand *\[*NOT*\]* IN @range\_tab*}*
    *|* *{*(cond\_syntax)*}* *}* ...

Effect

Condition for the content of columns after the additions WHERE, ON, or HAVING in [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry") statements. The left-hand side can be specified as an SQL expression. Conditions can be put in parentheses explicitly, combined using AND and OR, and negated using NOT.

Additions   

-   [\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](javascript:call_link\('abenwhere_logexp_compare.htm'\))
    comparison operators: Column content can be compared with host variables, with host expressions, with the content of other columns, and with the result of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") subquery.
-   [ALL*|*ANY*|*SOME](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\))
    Must be specified when the results of the subquery subquery has more than one line.
-   [*\[*NOT*\]* BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\))
    Checks whether the content of the left side is in an interval.
-   [*\[*NOT*\]* LIKE operand2 #*\[*ESCAPE esc*\]*](javascript:call_link\('abenwhere_logexp_like.htm'\))
    Checks whether the content of the left side matches the pattern in operand2. Here, an [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry") esc can be defined with for the wildcard characters % and \_ using ESCAPE.
-   [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))
    Checks whether the content of the left side has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").
-   [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenwhere_logexp_initial.htm'\))
    Checks whether the content of the left side is the initial values of its built-in dictionary type.
-   [EXISTS subquery](javascript:call_link\('abenwhere_logexp_exists.htm'\))
    Checks the result set of the subquery subquery.
-   [operand *\[*NOT*\]* IN (operand1, operand2 ...)](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))
    Checks whether the content of an operand on the left side is in a value list operand1, operand2, ...
-   [operand *\[*NOT*\]* IN subquery](javascript:call_link\('abenwhere_logexp_operand_in.htm'\))
    Checks whether the content of the left side is in the result set of the scalar subquery subquery.
-   [( operand1, operand2 ) IN ( ( operand11, operand21 ... ), ... )](javascript:call_link\('abenwhere_logexp_list_in.htm'\))
    Checks whether the content of a list of operands is in a value list operand1, operand2, ...
-   [*\[*NOT*\]* IN range\_tab](javascript:call_link\('abenwhere_logexp_seltab.htm'\))
    Checks whether the content of the left side meets the conditions of a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") range\_tab.
-   [(cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))
    Condition in cond\_syntax specified dynamically.