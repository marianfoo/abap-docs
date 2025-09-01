  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) → 

LOOP AT itab

[Quick Reference](javascript:call_link\('abaploop_at_itab_shortref.htm'\))

Syntax Forms

[Loop across table rows](javascript:call_link\('abaploop_at_itab.htm'\))
1\. LOOP AT itab [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) *\[*[cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]*.
    ...
  ENDLOOP.
[Loop across row groups](javascript:call_link\('abaploop_at_itab_group_by.htm'\))
2\. LOOP AT itab [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) *\[* [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]* GROUP BY [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\))
                             *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
                             *\[*WITHOUT MEMBERS*\]*
                             *\[*[group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\))*\]*.
    ...
  ENDLOOP.

Effect

Executes a [table iteration](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") as a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry") across an internal table itab. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

The statements LOOP and ENDLOOP define the statement block of the loop. The statement LOOP reads rows from the internal table itab sequentially that meet an optional condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)).

-   [If the addition GROUP BY](javascript:call_link\('abaploop_at_itab.htm'\)) is not specified, the statement block is executed for each read row and the row can be processed here. The way in which the read row is addressed in the statement block is specified in the output behavior [result](javascript:call_link\('abaploop_at_itab_result.htm'\)).
    
-   [The addition GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) is used to group the read rows by a group key [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) and the statement block is then executed for every group. The way in which the current group is addressed in the statement block is specified in the output behavior [group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    

To exit processing of the statement block, the statements described in the [leave loops](javascript:call_link\('abenleave_loops.htm'\)) section can be used.

Note

Internal tables can also be specified as a [data source](javascript:call_link\('abapselect_itab.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") in ABAP SQL.

Example

Simple LOOP over an internal table.

DATA itab TYPE TABLE OF i WITH EMPTY KEY.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( i ) ).
DATA(str) = \`\`.
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  str = str && CONV string( <fs> ) && \` \`.
ENDLOOP.
cl\_demo\_output=>display( str ).

Continue
[LOOP AT itab - Basic Form](javascript:call_link\('abaploop_at_itab.htm'\))
[LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\))
[ENDLOOP](javascript:call_link\('abapendloop.htm'\))