  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Expressions and Functions for Internal Tables](javascript:call_link\('abentable_processing_expr_func.htm'\)) → 

FOR - Table Iterations

Syntax Forms

[Read rows of internal tables](javascript:call_link\('abenfor_in_itab.htm'\))
1\. ... FOR wa*|*<fs> IN itab *\[*INDEX INTO idx*\]* *\[* [cond](javascript:call_link\('abenfor_cond.htm'\))*\]* *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]*  ...
[Group rows of internal tables](javascript:call_link\('abenfor_groups_of.htm'\))
2\. ... FOR GROUPS *\[*group*|*<group>*\]* OF wa*|*<fs> IN itab
          *\[*INDEX INTO idx*\]* *\[*[cond](javascript:call_link\('abenfor_cond.htm'\))*\]*
          GROUP BY [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\))
          *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
          *\[*WITHOUT MEMBERS*\]*
          *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* ...
[Read group members of internal tables](javascript:call_link\('abenfor_in_group.htm'\))
3\. ... FOR *{* wa*|*<fs> IN GROUP group *\[*INDEX INTO idx*\]* *\[* [WHERE ( log\_exp )](javascript:call_link\('abenfor_cond.htm'\))*\]* *}*
        *|* *{* GROUPS OF
            wa*|*<fs> IN GROUP group *\[*INDEX INTO idx*\]* *\[* [WHERE ( log\_exp )](javascript:call_link\('abenfor_cond.htm'\))*\]*
            GROUP BY [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\))
            *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
            *\[*WITHOUT MEMBERS*\]* *}* *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* ...

Effect

These syntax forms of an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") using [FOR](javascript:call_link\('abenfor.htm'\)) perform [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry").

-   When used in a constructor expression with the reduction operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)), these forms are known as [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry").

-   When used in a constructor expression with the instance operator [NEW](javascript:call_link\('abennew_constructor_params_itab.htm'\)) or with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables, these forms are known as [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry").

A FOR expression like this evaluates the content of an internal table and its result can be used to construct the result of the wrapper constructor expression. The three variants of a FOR expression for internal tables work in the same way as the following variants of the statement [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)):

-   The first variant [FOR ... IN itab](javascript:call_link\('abenfor_in_itab.htm'\)) works in the same way as the regular row variant [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)) without the addition GROUP BY.

-   The second variant [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)) works in the same way as the variant for grouping rows with the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)).

-   The third variant [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) works in the same way as the variant [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)) for [member loops](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry").

The variables or field symbols declared in the FOR expressions are local in these expressions. The local data from all outer FOR expressions can be used when their values are defined. As an option, LET expressions [let\_exp](javascript:call_link\('abaplet.htm'\)) can be used to define local helper fields at the end of each FOR expression.

The system field sy-tabix is not set by a FOR expression. The addition INDEX INTO can be used instead.

Note

Multiple sequential FOR expressions with different variants (including the [conditional iteration](javascript:call_link\('abenfor_conditional.htm'\))) can be specified in a constructor expression. These expressions then work in the same way as nested loops.

Example

Generates an internal table jtab from an internal table itab using a [table comprehension](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry"). Generates a text string str from the internal table jtab using a [table reduction](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry"). The result in str is the character string 1, 9, 25.

TYPES itab TYPE TABLE OF i WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 1 ) ( 3 ) ( 5 ) ).
DATA(jtab) = VALUE itab( FOR wa IN itab ( ipow( base = wa exp = 2 ) ) ).
DATA(str) = REDUCE string( INIT s = \`\`
                           FOR wa IN jtab
                           NEXT s = COND #( WHEN s = \`\` THEN |{ wa }|
                                            ELSE |{ s }, { wa }| ) ).

Continue
[FOR ... IN itab](javascript:call_link\('abenfor_in_itab.htm'\))
[FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\))
[FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\))
[FOR - cond](javascript:call_link\('abenfor_cond.htm'\))
[Examples of Table Reductions](javascript:call_link\('abentable_reductions_abexas.htm'\))
[Examples of Table Comprehensions](javascript:call_link\('abentable_comprehensions_abexas.htm'\))
[Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\))