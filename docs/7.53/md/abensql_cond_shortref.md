---
title: "Syntax"
description: |
  ...  operand1 =EQ<>NE>GT<LT>=GE<=LE  operand2  ALLANYSOME subquery(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm)   operand NOT BETWEEN operand1 AND operand2
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_cond_shortref.htm"
abapFile: "abensql_cond_shortref.htm"
keywords: ["do", "if", "try", "abensql", "cond", "shortref"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  S

sql\_cond - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp.htm)

Syntax

... *{* *{*operand1 *{*\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE*}*
                  *{* operand2
                  *|* *{**\[*ALL*|*ANY*|*SOME*\]* [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm)*}* *}**}*
    *|* *{*operand *\[*NOT*\]* BETWEEN operand1 AND operand2*}*
    *|* *{*operand1 *\[*NOT*\]* LIKE operand2 *\[*ESCAPE esc*\]**}*
    *|* *{*operand *\[*NOT*\]* IN (operand1, operand2 ...)*}*
    *|* *{*operand *\[*NOT*\]* IN seltab*}*
    *|* *{*operand IS *\[*NOT*\]* NULL*}*
    *|* *{*operand IS *\[*NOT*\]* INITIAL*}*
    *|* *{*(cond\_syntax)*}*
    *|* *{*EXISTS [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm)*}*
    *|* *{*operand *\[*NOT*\]* IN [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_shortref.htm)*}* *}* ...

Effect

Condition for the content of columns after the addition WHERE in [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements. The left side can be specified as a single column or as an SQL expression. Conditions can be put in parentheses explicitly, joined using AND and OR, and negated using NOT.

Additions

-   [\=*|*EQ*|*<>*|*NE*|*\>*|*GT*|*<*|*LT*|*\>=*|*GE*|*<=*|*LE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_compare.htm)
    Relational operators: Column content can be compared with host variables, with host expressions, with the content of other columns, and with the result of a [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubquery_glosry.htm "Glossary Entry") subquery.
    
-   [ALL*|*ANY*|*SOME](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_all_any_some.htm)
    Must be specified when the results of the subquery subquery has more than one line.
    
-   [*\[*NOT*\]* BETWEEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_interval.htm)
    Checks whether the content of the left side is in an interval.
    
-   [*\[*NOT*\]* LIKE operand2 #*\[*ESCAPE esc*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_like.htm)
    Checks whether the content of the left side matches the pattern in operand2. Here, an [escape character](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenescape_character_glosry.htm "Glossary Entry") esc can be defined with for the wildcard characters "%" and "\_" using ESCAPE.
    
-   [*\[*NOT*\]* IN (operand1, operand2 ...)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_list.htm)
    Checks whether the content of the left side is in a value list operand1, operand2, ...
    
-   [*\[*NOT*\]* IN seltab](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_seltab.htm)
    Checks whether the content of the left side meets the conditions of a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") seltab.
    
-   [IS *\[*NOT*\]* NULL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_null.htm)
    Checks whether the content of the left side has the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry").
    
-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_initial.htm)
    Checks whether the content of the left side is the initial values of its built-in dictionary type.
    
-   [(cond\_syntax)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm)
    Condition in cond\_syntax specified dynamically.
    
-   [EXISTS subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_exists.htm)
    Checks the results set of the subquery subquery.
    
-   [operand *\[*NOT*\]* IN subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_in_subquery.htm)
    Checks whether the content of the left side is in the results set of the subquery subquery.