  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  S

sql\_cond - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenosql_stmt_logexp.htm)

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}*
                  *{* operand2
                  *|* *{**\[*ALL*|*ANY*|*SOME*\]* ( SELECT [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm) *\[*UNION ...*\]* )*}* *}**}*
    *|* *{*operand *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]**}*
    *|* *{*operand IS *\[*NOT*\]* NULL*}*
    *|* *{*operand IS *\[*NOT*\]* INITIAL*}*
    *|* *{*EXISTS ( SELECT [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm) *\[*UNION ...*\]* )*}*
    *|* *{*operand *\[*NOT*\]* IN (operand1, operand2 ...)*}*
    *|* *{*operand *\[*NOT*\]* IN ( SELECT [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_shortref.htm) *\[*UNION ...*\]* )*}*
    *|* *{*( operand1, operand2, ... ) IN ( ( operand11, operand21 ... ),
                                        ( operand12, operand22 ... ), ... )*}*
    *|* *{*operand *\[*NOT*\]* IN @range\_tab*}*
    *|* *{*(cond\_syntax)*}* *}* ...

Effect

Condition for the content of columns after the additions WHERE, ON, or HAVING in [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry") statements. The left-hand side can be specified as an SQL expression. Conditions can be put in parentheses explicitly, joined using AND and OR, and negated using NOT.

Additions

-   [\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_compare.htm)
    comparison operators: Column content can be compared with host variables, with host expressions, with the content of other columns, and with the result of a [subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubquery_glosry.htm "Glossary Entry") subquery.
    

-   [ALL*|*ANY*|*SOME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_all_any_some.htm)
    Must be specified when the results of the subquery subquery has more than one line.
    

-   [*\[*NOT*\]* BETWEEN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_interval.htm)
    Checks whether the content of the left side is in an interval.
    

-   [*\[*NOT*\]* LIKE operand2 #*\[*ESCAPE esc*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_like.htm)
    Checks whether the content of the left side matches the pattern in operand2. Here, an [escape character](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenescape_character_glosry.htm "Glossary Entry") esc can be defined with for the wildcard characters "%" and "\_" using ESCAPE.
    

-   [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_null.htm)
    Checks whether the content of the left side has the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry").
    

-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_initial.htm)
    Checks whether the content of the left side is the initial values of its built-in dictionary type.
    

-   [EXISTS subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_exists.htm)
    Checks the result set of the subquery subquery.
    

-   [operand *\[*NOT*\]* IN (operand1, operand2 ...)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_operand_in.htm)
    Checks whether the content of an operand on the left side is in a value list operand1, operand2, ...
    

-   [operand *\[*NOT*\]* IN subquery](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_operand_in.htm)
    Checks whether the content of the left side is in the result set of the scalar subquery subquery.
    

-   [( operand1, operand2 ) IN ( ( operand11, operand21 ... ), ... )](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_list_in.htm)
    Checks whether the content of a list of operands is in a value list operand1, operand2, ...
    

-   [*\[*NOT*\]* IN range\_tab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_seltab.htm)
    Checks whether the content of the left side meets the conditions of a [ranges table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenranges_table_glosry.htm "Glossary Entry") range\_tab.
    

-   [(cond\_syntax)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwhere_logexp_dynamic.htm)
    Condition in cond\_syntax specified dynamically.