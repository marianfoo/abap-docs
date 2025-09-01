  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) → 

LOOP AT itab, group\_key

Syntax

... key *|* ( key1 = dobj1 key2 = dobj2 ...
           *\[*gs = GROUP SIZE*\]* *\[*gi = GROUP INDEX*\]* ) ...

Additions:

[1\. ... gs = GROUP SIZE](#!ABAP_ADDITION_1@1@)
[2\. ... gi = GROUP INDEX](#!ABAP_ADDITION_2@2@)

Effect

Group key expression for constructing the group key in the [grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of internal tables. The group key is the result of the group key expression, whose data type can be defined as follows:

-   If key is specified, the group key is a single data object with any data type.

-   If ( key1 = dobj1 key2 = dobj2 ... ) is specified, the group key is a structure with the components key1, key2, ... The components can have any name and any data type. The structure type is defined here as a bound data type of the structure.

key or key1, key2, ... are [general expression positions](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry") in which the current line can be used in accordance with the output behavior defined in [result](javascript:call_link\('abaploop_at_itab.htm'\)). The data types of key or key1, key2, ... must be known completely and statically.

For each line of the internal table itab read in the grouping phase, the value of the group key is calculated from the data objects, expressions, or calls specified here using the group key expression.

If a group key binding is defined in the output behavior [group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)) of the group loop, the data object or field symbol specified here can be used to access the value of the group key of every group in the group loop.

Hints

-   The calculated value of the group key for each read line of itab must depend on the appropriate type of the read line to achieve a useful grouping. The following are some special cases:

-   If the group key is a value independent of the line, there is only one group to which all read lines belong.

-   If the group key is different for each line, there are as many groups as lines and each group contains only one line.

The simplest solution is to directly assign the values of the lines to the group key or its components. However, since they are general expression positions on the right side, any type of evaluation is possible.

-   The ability to directly construct any type of structure makes it easy to create multi-component group keys without having to declare a matching structure first or to concatenate the key components into, for example, a string.

-   The syntax shown here applies both to groupings with [LOOP AT itab ... GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) and to groupings with [FOR GROUPS ... OF](javascript:call_link\('abenfor_groups_of.htm'\)).
    

Example

A structured group key is used to group by more than just one criterion. The group criteria here are simply columns of the internal table. This is a representative binding in which the work area wa is reused in the group loop to access the group key.

SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
LOOP AT spfli\_tab INTO DATA(wa)
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
  cl\_demo\_output=>write( |{ wa-carrid } { wa-airpfrom }| ).
ENDLOOP.
cl\_demo\_output=>display( ).

Addition 1

... gs = GROUP SIZE

Addition 2

... gi = GROUP INDEX

Effect

Declares additional components for a structured group key. These components are not part of the group key and are used to store group-specific information instead:

-   The component gs is filled with the number of group members for each group.

-   The component gi is filled with a group index for each group. The group index of the group key constructed first is 1 and is raised by 1 for each new group key.

Before the additional components can be declared, a group key binding must be defined in the output behavior [group\_result](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)). The additional components can be accessed in the group loop using the data object or field symbol specified here.

The names of the components gs and gi can be freely defined. The language elements GROUP SIZE or GROUP INDEX on the right side give the components their special semantics.

Hints

-   If the groups are not sorted using [ASCENDING](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) or [DESCENDING](javascript:call_link\('abaploop_at_itab_group_by.htm'\)), the groups in the group loop are processed in the order of the group index. If the groups are sorted differently, the original position is noted in the group index.

-   The additional components can still be evaluated even if the addition [WITHOUT MEMBERS](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) is used and the group members cannot be accessed.

-   Implicitly, no further values are created that match the results of [aggregate expressions](javascript:call_link\('abenaggregate_expression_glosry.htm'\) "Glossary Entry") when [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)) is used in the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)), except in the component gs with the right side GROUP SIZE. Aggregations like this are easy to program (see the [example](javascript:call_link\('abenloop_group_by_aggregates_abexa.htm'\))), particularly when applying constructor operators such as [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) to the group members. The ABAP SQL addition [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) for restricting the loops of groups is a similar case. Here, for example, the [filter operator](javascript:call_link\('abenfilter_operator_glosry.htm'\) "Glossary Entry") [FILTER](javascript:call_link\('abenconstructor_expression_filter.htm'\)) can be used.
    

Example

Declaration of a structured group key with additional components for group index and group size. A group key binding must be defined with INTO data(key).

SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
LOOP AT spfli\_tab INTO DATA(wa)
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom
                             indx = GROUP INDEX
                             size = GROUP SIZE )
                  INTO data(key).
  cl\_demo\_output=>write( |{ key-indx } { key-key1
                        } { key-key2 } { key-size }| ).
ENDLOOP.
cl\_demo\_output=>display( ).