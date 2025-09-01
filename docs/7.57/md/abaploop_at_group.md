  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: LOOP AT GROUP, ABAPLOOP_AT_GROUP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

LOOP AT GROUP

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_group_shortref.htm)

Syntax

LOOP AT GROUP group [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm) *\[* [WHERE log\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm)*\]* *\[*[GROUP BY ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm)*\]*.
  ...
ENDLOOP.

Addition:

[... WHERE log\_exp](#!ABAP_ONE_ADD@1@)

Effect

Member loop across the lines of a group within the [group loop](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm) in the [grouping](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm) of internal tables. This loop is only possible within a [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) across an internal table with the addition [GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm),

-   for which the internal table itab is specified directly as a data object and not as the result of a call or expression,
-   in which the addition WITHOUT MEMBERS is not used.

group is used to specify the group across which the member loop passes. The target object must be specified that is defined in the output behavior [group\_result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm) of the group loop and bound to the group:

-   In the representative binding, this is a representative specified in the output behavior [result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_result.htm).
-   In the group key binding, this is a data object or field symbol specified in the output behavior [group\_result](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm).

The member loop across the current group is executed just like a regular [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) across a standard table with the line type of itab which contains the lines of the group. Both variants are possible:

-   [Loop across lines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) without the addition GROUP BY.
-   [Loop across groups](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab.htm) with the addition GROUP BY.

The second option enables further groupings of existing groups.

System Fields

The statement LOOP AT GROUP sets the value of the system field sy-tabix in the member loop to the value that would be set for the current line in the LOOP without grouping.

A member loop always sets the system field sy-subrc to 0.

Hints

-   Despite the fact that there is always only one grouping for a single LOOP, it is still necessary to specify the group group explicitly, since multiple groups can be accessed in nested LOOP statements.
-   group expects the precise name specified in the output behavior, namely a field symbol with angle brackets specified after ASSIGNING and a data reference variable without dereferencing operator \-> specified after REFERENCE INTO.
-   The statement LOOP AT GROUP can only be listed within a loop defined using [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by.htm), since the name for the group defined using its [output behavior](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm) is only valid here. LOOP AT GROUP is in particular not possible in procedures called from a group loop, even if the data object or field symbol defined by the output behavior can be accessed here.
-   Despite the syntax and semantics of LOOP AT GROUP being the same as a regular nested loop, the way the lines of the group are actually accessed is optimized. This exploits the internal variant of the assignment of the lines to their group.
-   A loop LOOP AT GROUP does not allow [group level processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengroup_level_processing_glosry.htm "Glossary Entry") with the statement [AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapat_itab.htm).
-   A group loop does not create any empty groups, which means that a member loop is always passed as a rule. Only WHERE conditions can be used to prevent members of a group from being processed. Internally, however, this is not detected until the start of the first loop pass, which means that sy-subrc is set to 0 in this case as well.
-   The statement LOOP AT GROUP corresponds to the expression [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfor_in_group.htm). This means its functions can often be expressed more elegantly using [table comprehensions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_comprehension_glosry.htm "Glossary Entry") or [table reductions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_reduction_glosry.htm "Glossary Entry").

Example

Member loop in a group loop, where the flight numbers belonging to an airline are grouped together in a string.

SELECT \*
       FROM spfli
       INTO TABLE @FINAL(spfli\_tab).
LOOP AT spfli\_tab INTO FINAL(wa)
                  GROUP BY wa-carrid
                  INTO FINAL(key).
  cl\_demo\_output=>next\_section( |{ key }| ).
  DATA(str) = \`\`.
  LOOP AT GROUP key ASSIGNING FIELD-SYMBOL(<members>).
    str = str && \` \` && <members>-connid.
  ENDLOOP.
  cl\_demo\_output=>write( str ).
ENDLOOP.
cl\_demo\_output=>display( ).

Example

The following example shows each of the six different syntax methods of specifying a group in a member loop:

-   Work area wa of the LOOP in a [representative binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm).
-   Field symbol <fs> of the LOOP in a [representative binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm).
-   Data reference variable dref of the LOOP in a [representative binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm).
-   Work area group of the group loop in a [group key binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm).
-   Field symbol group of the group loop in a [group key binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm).
-   Data reference variable group\_ref of the group loop in a [group key binding](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_group_by_binding.htm).

TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
FINAL(itab) = VALUE itab( ( 1 ) ( 1 ) ( 2 ) ( 2 ) ).
LOOP AT itab INTO DATA(wa) GROUP BY wa.
  LOOP AT GROUP wa INTO DATA(member).
    ...
  ENDLOOP.
ENDLOOP.
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>) GROUP BY <fs>.
  LOOP AT GROUP <fs> INTO member.
    ...
  ENDLOOP.
ENDLOOP.
LOOP AT itab REFERENCE INTO FINAL(dref) GROUP BY dref->\*.
  LOOP AT GROUP dref INTO member.
    ...
  ENDLOOP.
ENDLOOP.
LOOP AT itab INTO wa GROUP BY wa
             INTO FINAL(group).
  LOOP AT GROUP group INTO member.
    ...
  ENDLOOP.
ENDLOOP.
LOOP AT itab INTO wa GROUP BY wa
             ASSIGNING FIELD-SYMBOL(<group>).
  LOOP AT GROUP <group> INTO member.
    ...
  ENDLOOP.
ENDLOOP.
LOOP AT itab INTO wa GROUP BY wa
             REFERENCE INTO FINAL(group\_ref).
  LOOP AT GROUP group\_ref INTO member.
    ...
  ENDLOOP.
ENDLOOP.

Addition   

... WHERE log\_exp

Effect

The lines read from the group can be restricted using a static [WHERE condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm). The syntax and semantics are the same as in a LOOP across an internal table with the line type of itab.

Hint

The additions [USING KEY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm), [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm), [TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_cond.htm), and a dynamic WHERE condition cannot be specified after LOOP AT GROUP.

Example

Like the example above, but with a restricted WHERE condition for the member loop.

SELECT \*
       FROM spfli
       INTO TABLE @FINAL(spfli\_tab).
LOOP AT spfli\_tab INTO FINAL(wa)
                  GROUP BY wa-carrid
                  INTO FINAL(key).
  cl\_demo\_output=>next\_section( |{ key }| ).
  DATA(str) = \`\`.
  LOOP AT GROUP key ASSIGNING FIELD-SYMBOL(<members>)
                    WHERE cityfrom = 'NEW YORK'.
    str = str && \` \` && <members>-connid.
  ENDLOOP.
  cl\_demo\_output=>write( str ).
ENDLOOP.
cl\_demo\_output=>display( ).