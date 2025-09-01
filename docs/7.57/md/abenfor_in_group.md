  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Expressions and Functions](javascript:call_link\('abentable_processing_expr_func.htm'\)) →  [FOR, Table Iterations](javascript:call_link\('abenfor_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FOR ... IN GROUP, ABENFOR_IN_GROUP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

FOR ... IN GROUP

Syntax

... FOR *{* wa*|*<fs> IN GROUP group *\[*INDEX INTO idx*\]* *\[* [WHERE ( log\_exp )](javascript:call_link\('abenfor_cond.htm'\))*\]* *}*
      *|* *{* GROUPS OF
          wa*|*<fs> IN GROUP group *\[*INDEX INTO idx*\]* *\[* [WHERE ( log\_exp )](javascript:call_link\('abenfor_cond.htm'\))*\]*
          GROUP BY [group\_key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\))
          *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
          *\[*WITHOUT MEMBERS*\]* *}* *\[* [let\_exp](javascript:call_link\('abaplet.htm'\))*\]* ...

Addition:

[... INDEX INTO idx](#!ABAP_ONE_ADD@1@)

Effect

These variants of an [iteration expression](javascript:call_link\('abeniteration_expression_glosry.htm'\) "Glossary Entry") for [table iterations](javascript:call_link\('abentable_iteration_glosry.htm'\) "Glossary Entry") using [FOR](javascript:call_link\('abenfor_itab.htm'\)) evaluate a line group group sequentially like a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)). These FOR expressions can only be specified in those places in which a group group can be accessed, that is:

-   in a constructor expression after an expression [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)),
-   in a LOOP with the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)).

where in both cases

-   the internal table must be specified directly and not specified as the result of an expression or a function,
-   the addition WITHOUT MEMBERS must not be specified.

group is used to specify the group to be evaluated using the data object or field symbol to which the group is bound.

-   In the variant FOR ... IN GROUP without GROUPS OF, the expression evaluates the members of the current group in the same way as the variant [FOR ... IN itab](javascript:call_link\('abenfor_in_itab.htm'\)) evaluates the lines of the internal table itab. The result is the lines of the group.
-   In the variant FOR GROUPS OF ... IN GROUP, the expression evaluates the members of the current group in the same way as the variant [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)). The current group is grouped again and the result is either representatives or group keys of the subgroups.

The condition [WHERE ( log\_exp )](javascript:call_link\('abenfor_cond.htm'\)) can be used to restrict the lines of the group to be evaluated. Conditions other than this static WHERE condition cannot be specified.

Hint

As in [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)), access to the groups is optimized internally.

Example

Display of a list of the total occupied seats for each airline. A LOOP with the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) evaluates its groups in a table reduction using FOR flight IN GROUP <carrier>. Here, the total for each group is calculated for the column seatsocc.

SELECT \* FROM sflight INTO TABLE @FINAL(sflight).
TYPES group\_keys TYPE STANDARD TABLE OF spfli-carrid WITH EMPTY KEY.
TYPES:
  BEGIN OF list\_line,
    carrier  TYPE sflight-carrid,
    bookings TYPE i,
  END OF list\_line,
  list TYPE STANDARD TABLE OF list\_line WITH EMPTY KEY.
DATA(list) = VALUE list( ).
LOOP AT sflight INTO FINAL(wa)
     GROUP BY wa-carrid
     ASCENDING
     ASSIGNING FIELD-SYMBOL(<carrier>).
  list = VALUE list(
           BASE list
           ( carrier = <carrier>
             bookings = REDUCE #(
                        INIT s = 0
                        FOR flight IN GROUP <carrier>
                        NEXT s += flight-seatsocc ) ) ).
ENDLOOP.
cl\_demo\_output=>display( list ).

Addition   

... INDEX INTO idx

Effect

For each read line of the associated FOR expression, this addition sets the helper variable idx to the value to which the system field sy-tabix would be set in a corresponding [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)) loop. The same applies to the local data object idx as in the variant [FOR ... IN itab](javascript:call_link\('abenfor_in_itab.htm'\)).