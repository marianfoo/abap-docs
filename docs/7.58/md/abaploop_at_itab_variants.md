  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20itab%2C%20ABAPLOOP_AT_ITAB_VARIANTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT itab

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_shortref.htm)

Syntax Forms

[Loop Across Table Lines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm)

1\. LOOP AT itab [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_result.htm) *\[*[cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm)*\]*.
    ...
  ENDLOOP.

[Loop Across Line Groups](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm)

2\. LOOP AT itab [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_result.htm) *\[* [cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm)*\]* GROUP BY [group\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_key.htm)
                             *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
                             *\[*WITHOUT MEMBERS*\]*
                             *\[*[group\_result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm)*\]*.
    ...
  ENDLOOP.

Effect

Executes a [table iteration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_iteration_glosry.htm "Glossary Entry") as a [loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_glosry.htm "Glossary Entry") across an internal table itab. itab is a [functional operand position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_position_glosry.htm "Glossary Entry").

The statements LOOP and ENDLOOP define the statement block of the loop. The statement LOOP reads lines from the internal table itab sequentially that meet an optional condition [cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm).

-   [If the addition GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm) is not specified, the statement block is executed for each read line and the line can be processed here. The way in which the read line can be addressed in the statement block is specified in the output behavior [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_result.htm).
-   [The addition GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm) is used to group the read lines by a group key [group\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_key.htm) and the statement block is then executed for each group. The way in which the current group can be addressed in the statement block is specified in the output behavior [group\_result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm).

To exit processing of the loop, the following statements can be used:

-   [EXIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapexit_loop.htm) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleave_processing_blocks.htm)
-   A statement for [existing the current program](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_leave_program.htm)

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcontinue.htm) and [CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcheck_processing_blocks.htm) can be used.

Caution: [Special rules apply](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_loop_change.htm) when changing the internal table within a loop. In particular you should never perform write accesses on a complete table body.

Hint

Internal tables can also be specified as a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) of a [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenquery_glosry.htm "Glossary Entry") in ABAP SQL.

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
[LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm)
[LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm)
[ENDLOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapendloop.htm)
[itab - Changing Internal Tables in a Loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_loop_change.htm)