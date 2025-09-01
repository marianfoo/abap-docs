  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) → 

LOOP AT GROUP

[Quick Reference](javascript:call_link\('abaploop_at_group_shortref.htm'\))

Syntax

LOOP AT GROUP group [result](javascript:call_link\('abaploop_at_itab_result.htm'\)) *\[* [WHERE log\_exp](javascript:call_link\('abaploop_at_itab_cond.htm'\))*\]* *\[*[GROUP BY ...](javascript:call_link\('abaploop_at_itab_group_by.htm'\))*\]*.
  ...
ENDLOOP.

Addition:

[... WHERE log\_exp](#!ABAP_ONE_ADD@1@)

Effect

Member loop across the rows of a group within the [group loop](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) in the [grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of internal tables. This loop is only possible within a [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)) across an internal table with the addition [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)),

-   for which the internal table itab is specified directly as a data object and not specified as the result of a call or expression,
    
-   in which the addition WITHOUT MEMBERS is not used.
    

group is used to specify the group across which the member loop passes. The target object must be specified that is defined in the output behavior [group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)) of the group loop and bound to the group:

-   In the representative binding, this is a representative specified in the output behavior [result](javascript:call_link\('abaploop_at_itab_result.htm'\)).
    
-   In the group key binding, this is a data object or field symbol specified in the output behavior [group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    

The member loop across the current group is executed just like a regular [LOOP](javascript:call_link\('abaploop_at_itab_variants.htm'\)) across a standard table with the row type of itab (which contains the rows of the group). Both variants are possible:

-   [Loop across rows](javascript:call_link\('abaploop_at_itab.htm'\)) without the addition GROUP BY.
    
-   [Loop across groups](javascript:call_link\('abaploop_at_itab.htm'\)) with the addition GROUP BY.
    

The second option enables further groupings of existing groups to be made.

System Fields

The statement LOOP AT GROUP sets the value of the system field sy-tabix in the member loop to the value that would be set for the current row in the LOOP without grouping.

The same applies to sy-subrc as in [LOOP AT itab](javascript:call_link\('abaploop_at_itab.htm'\)).

Notes

-   Despite the fact that there is always only one grouping for a single LOOP, it is still necessary to specify the group group explicitly, since multiple groups can be accessed in nested LOOPs.
    
-   group expects the precise name specified in the output behavior, namely a field symbol with angle brackets specified after ASSIGNING and a data reference variable without dereferencing operator \-> specified after REFERENCE INTO.
    
-   The statement LOOP AT GROUP can only be specified within a loop defined using [LOOP AT ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), since the name for the group defined using its [output behavior](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)) is only valid here. LOOP AT GROUP is, moreover, not possible in procedures called from a group loop, even if the data object or field symbol defined by the output behavior can be accessed here.
    
-   Despite the syntax and semantics of LOOP AT GROUP being the same as a regular nested loop, the way the rows of the group are actually accessed is optimized. This exploits the internal variant of the assignment of the rows to their group.
    
-   A loop LOOP AT GROUP does not permit [group level processing](javascript:call_link\('abencontrol_level_processin_glosry.htm'\) "Glossary Entry") with the statement [AT](javascript:call_link\('abapat_itab.htm'\)).
    
-   The statement LOOP AT GROUP corresponds to the expression [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)). This means its functions can often be expressed more elegantly using [table comprehensions](javascript:call_link\('abentable_comprehension_glosry.htm'\) "Glossary Entry") or [table reductions](javascript:call_link\('abentable_reduction_glosry.htm'\) "Glossary Entry").
    

Example

Member loop in a group loop, where the flight numbers belonging to an airline are grouped together in a string.

SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
LOOP AT spfli\_tab INTO DATA(wa)
                  GROUP BY wa-carrid
                  INTO DATA(key).
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

-   Work area wa of the LOOP in a [representative binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    
-   Field symbol <fs> of the LOOP in a [representative binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    
-   Data reference variable dref of the LOOP in a [representative binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    
-   Work area group of the group loop in a [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    
-   Field symbol group of the group loop in a [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    
-   Data reference variable group\_ref of the group loop in a [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)).
    

TYPES itab TYPE STANDARD TABLE OF i WITH EMPTY KEY.
DATA(itab) = VALUE itab( ( 1 ) ( 1 ) ( 2 ) ( 2 ) ).
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
LOOP AT itab REFERENCE INTO DATA(dref) GROUP BY dref->\*.
  LOOP AT GROUP dref INTO member.
    ...
  ENDLOOP.
ENDLOOP.
LOOP AT itab INTO wa GROUP BY wa
             INTO DATA(group).
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
             REFERENCE INTO DATA(group\_ref).
  LOOP AT GROUP group\_ref INTO member.
    ...
  ENDLOOP.
ENDLOOP.

Addition

... WHERE log\_exp

Effect

The rows read from the group can be restricted using a static [WHERE condition](javascript:call_link\('abaploop_at_itab_cond.htm'\)). The syntax and semantics are the same as in a LOOP across an internal table with the row type of itab.

Note

The additions [USING KEY](javascript:call_link\('abaploop_at_itab_cond.htm'\)), [FROM](javascript:call_link\('abaploop_at_itab_cond.htm'\)), [TO](javascript:call_link\('abaploop_at_itab_cond.htm'\)), and a dynamic WHERE condition cannot be specified after LOOP AT GROUP.

Example

Like the example above, but with a restricted WHERE condition for the member loop.

SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
LOOP AT spfli\_tab INTO DATA(wa)
                  GROUP BY wa-carrid
                  INTO DATA(key).
  cl\_demo\_output=>next\_section( |{ key }| ).
  DATA(str) = \`\`.
  LOOP AT GROUP key ASSIGNING FIELD-SYMBOL(<members>)
                    WHERE cityfrom = 'NEW YORK'.
    str = str && \` \` && <members>-connid.
  ENDLOOP.
  cl\_demo\_output=>write( str ).
ENDLOOP.
cl\_demo\_output=>display( ).