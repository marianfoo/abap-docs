  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

sql\_cond - Quick reference

[Reference](javascript:call_link\('abenwhere_logexp.htm'\))

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}*
                  *{* operand2
                  *|* *{**\[*ALL*|*ANY*|*SOME*\]* [subquery](javascript:call_link\('abensubquery_shortref.htm'\))*}* *}**}*
    *|* *{*operand *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]**}*
    *|* *{*operand *\[*NOT*\]* IN (operand1, operand2 ...)*}*
    *|* *{*operand *\[*NOT*\]* IN seltab*}*
    *|* *{*operand IS *\[*NOT*\]* NULL*}*
    *|* *{*(cond\_syntax)*}*
    *|* *{*EXISTS [subquery](javascript:call_link\('abensubquery_shortref.htm'\))*}*
    *|* *{*operand *\[*NOT*\]* IN [subquery](javascript:call_link\('abensubquery_shortref.htm'\))*}* *}* ...

Effect

Condition for the content of columns after the addition WHERE in [Open SQL](javascript:call_link\('abenopen_sql_glosry.htm'\) "Glossary Entry") statements. The left side can be specified as a single column or as an SQL expression. Conditions can be put in parentheses explicitly, joined using AND and OR, and negated using NOT.

Additions

-   [\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](javascript:call_link\('abenwhere_logexp_compare.htm'\))
    Relational operators: Column content can be compared with host variables, with host expressions, with the content of other columns, and with the result of a [subquery](javascript:call_link\('abensubquery_glosry.htm'\) "Glossary Entry") subquery.
    
-   [ALL*|*ANY*|*SOME](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\))
    Must be specified when the results of the subquery subquery has more than one line.
    
-   [*\[*NOT*\]* BETWEEN](javascript:call_link\('abenwhere_logexp_interval.htm'\))
    Checks whether the content of the left side is in an interval.
    
-   [*\[*NOT*\]* LIKE operand2 #*\[*ESCAPE esc*\]*](javascript:call_link\('abenwhere_logexp_like.htm'\))
    Checks whether the content of the left side matches the pattern in operand2. Here, an [escape character](javascript:call_link\('abenescape_character_glosry.htm'\) "Glossary Entry") esc can be defined with for the wildcard characters "%" and "\_" using ESCAPE.
    
-   [*\[*NOT*\]* IN (operand1, operand2 ...)](javascript:call_link\('abenwhere_logexp_list.htm'\))
    Checks whether the content of the left side is in a value list operand1, operand2, ...
    
-   [*\[*NOT*\]* IN seltab](javascript:call_link\('abenwhere_logexp_seltab.htm'\))
    Checks whether the content of the left side meets the conditions of a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") seltab.
    
-   [IS *\[*NOT*\]* NULL](javascript:call_link\('abenwhere_logexp_null.htm'\))
    Checks whether the content of the left side has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").
    
-   [(cond\_syntax)](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))
    Condition in cond\_syntax specified dynamically.
    
-   [EXISTS subquery](javascript:call_link\('abenwhere_logexp_exists.htm'\))
    Checks the results set of the subquery subquery.
    
-   [operand *\[*NOT*\]* IN subquery](javascript:call_link\('abenwhere_logexp_in_subquery.htm'\))
    Checks whether the content of the left side is in the results set of the subquery subquery.