---
title: "FOR - Table Iterations"
description: |
  Syntax Forms Read rows of internal tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm) 1. ... FOR wa<fs> IN itab INDEX INTO idx  cond(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_cond.htm) let_exp(https://help.sa
version: "7.52"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_itab.htm"
abapFile: "abenfor_itab.htm"
keywords: ["loop", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abenfor", "itab"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Expressions and Functions for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_expr_func.htm) → 

FOR - Table Iterations

Syntax Forms

[Read rows of internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm)
1\. ... FOR wa*|*<fs> IN itab *\[*INDEX INTO idx*\]* *\[* [cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_cond.htm)*\]* *\[*[let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]*  ...
[Group rows of internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_groups_of.htm)
2\. ... FOR GROUPS *\[*group*|*<group>*\]* OF wa*|*<fs> IN itab
          *\[*INDEX INTO idx*\]* *\[*[cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_cond.htm)*\]*
          GROUP BY [group\_key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by_key.htm)
          *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
          *\[*WITHOUT MEMBERS*\]*
          *\[*[let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* ...
[Read group members of internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_group.htm)
3\. ... FOR *{* wa*|*<fs> IN GROUP group *\[*INDEX INTO idx*\]* *\[* [WHERE ( log\_exp )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_cond.htm)*\]* *}*
        *|* *{* GROUPS OF
            wa*|*<fs> IN GROUP group *\[*INDEX INTO idx*\]* *\[* [WHERE ( log\_exp )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_cond.htm)*\]*
            GROUP BY [group\_key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by_key.htm)
            *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
            *\[*WITHOUT MEMBERS*\]* *}* *\[* [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* ...

Effect

These syntax forms of an [iteration expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeniteration_expression_glosry.htm "Glossary Entry") using [FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor.htm) perform [table iterations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_iteration_glosry.htm "Glossary Entry").

-   When used in a constructor expression with the reduction operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm), these forms are known as [table reductions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reduction_glosry.htm "Glossary Entry").

-   When used in a constructor expression with the instance operator [NEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennew_constructor_params_itab.htm) or with the value operator [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_itab.htm) for internal tables, these forms are known as [table comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry").

A FOR expression like this evaluates the content of an internal table and its result can be used to construct the result of the wrapper constructor expression. The three variants of a FOR expression for internal tables work in the same way as the following variants of the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_variants.htm):

-   The first variant [FOR ... IN itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm) works in the same way as the regular row variant [LOOP AT itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab.htm) without the addition GROUP BY.

-   The second variant [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_groups_of.htm) works in the same way as the variant for grouping rows with the addition [GROUP BY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_itab_group_by.htm).

-   The third variant [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_group.htm) works in the same way as the variant [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaploop_at_group.htm) for [member loops](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmember_loop_glosry.htm "Glossary Entry").

The variables or field symbols declared in the FOR expressions are local in these expressions. The local data from all outer FOR expressions can be used when their values are defined. As an option, LET expressions [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) can be used to define local helper fields at the end of each FOR expression.

The system field sy-tabix is not set by a FOR expression. The addition INDEX INTO can be used instead.

Note

Multiple sequential FOR expressions with different variants (including the [conditional iteration](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_conditional.htm)) can be specified in a constructor expression. These expressions then work in the same way as nested loops.

Example

Generates an internal table jtab from an internal table itab using a [table comprehension](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehension_glosry.htm "Glossary Entry"). Generates a text string str from the internal table jtab using a [table reduction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reduction_glosry.htm "Glossary Entry"). The result in str is the character string 1, 9, 25.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 1 ) ( 3 ) ( 5 ) ).
DATA(jtab) = VALUE itab( FOR wa IN itab ( ipow( base = wa exp = 2 ) ) ).
DATA(str) = REDUCE string( INIT s = \`\`
                           FOR wa IN jtab
                           NEXT s = COND #( WHEN s = \`\` THEN |{ wa }|
                                            ELSE |{ s }, { wa }| ) ).

Continue
[FOR ... IN itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_itab.htm)
[FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_groups_of.htm)
[FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_in_group.htm)
[FOR - cond](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_cond.htm)
[Examples of Table Reductions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_reductions_abexas.htm)
[Examples of Table Comprehensions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_comprehensions_abexas.htm)
[Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfor_grouping_abexas.htm)