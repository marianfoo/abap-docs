  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOOP AT itab, ABAPLOOP_AT_ITAB_VARIANTS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

LOOP AT itab

[Short Reference](javascript:call_link\('abaploop_at_itab_shortref.htm'\))

Syntax Forms

[Loop across table lines](javascript:call_link\('abaploop_at_itab.htm'\))
1\. LOOP AT itab [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) *\[*[cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]*.
    ...
  ENDLOOP.
[Loop across line groups](javascript:call_link\('abaploop_at_itab_group_by.htm'\))
2\. LOOP AT itab [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) *\[* [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]* GROUP BY [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\))
                             *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
                             *\[*WITHOUT MEMBERS*\]*
                             *\[*[group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\))*\]*.
    ...
  ENDLOOP.

Effect

Executes a [table iteration](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") as a [loop](javascript:call_link\('abenloop_glosry.htm'\) "Glossary Entry") across an internal table itab. itab is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry").

The statements LOOP and ENDLOOP define the statement block of the loop. The statement LOOP reads lines from the internal table itab sequentially that meet an optional condition [cond](javascript:call_link\('abaploop_at_itab_cond.htm'\)).

-   [If the addition GROUP BY](javascript:call_link\('abaploop_at_itab.htm'\)) is not specified, the statement block is executed for each read line and the line can be processed here. The way in which the read line can be addressed in the statement block is specified in the output behavior [result](javascript:call_link\('abaploop_at_itab_result.htm'\)).
-   [The addition GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) is used to group the read lines by a group key [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) and the statement block is then executed for each group. The way in which the current group can be addressed in the statement block is specified in the output behavior [group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).

To exit processing of the loop, the following statements can be used:

-   [EXIT](javascript:call_link\('abapexit_loop.htm'\)) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](javascript:call_link\('abenleave_processing_blocks.htm'\))
-   A statement for [existing the current program](javascript:call_link\('abenabap_leave_program.htm'\))

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](javascript:call_link\('abapcontinue.htm'\)) and [CHECK](javascript:call_link\('abapcheck_processing_blocks.htm'\)) can be used.

Caution: [Special rules apply](javascript:call_link\('abenitab_loop_change.htm'\)) when changing the internal table within a loop. In particular you should never perform write accesses on a complete table body.

Hint

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
[LOOP AT itab, Basic Form](javascript:call_link\('abaploop_at_itab.htm'\))
[LOOP AT itab, GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\))
[ENDLOOP](javascript:call_link\('abapendloop.htm'\))
[itab - Changing Internal Tables in a Loop](javascript:call_link\('abenitab_loop_change.htm'\))