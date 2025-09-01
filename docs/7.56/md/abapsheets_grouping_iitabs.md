  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Cheat Sheets](javascript:call_link\('abenabap_blurb.htm'\)) → 

Grouping Internal Tables

Similar to SQL's [GROUP BY](javascript:call_link\('abapgroupby_clause.htm'\)), there is also a [GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) for working with internal tables, that can be used behind [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) or in the form [IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)) in a table iteration with [FOR](javascript:call_link\('abenfor_itab.htm'\)). It replaces the clumsy group level processing with statements [AT NEW ...](javascript:call_link\('abapat_itab.htm'\)) that relies on the order of table columns and contents that is sorted respectively.

While there are may examples for all the powerful features of GROUP BY and IN GROUP under

-   [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)),
-   [Examples of Grouping with FOR](javascript:call_link\('abenfor_grouping_abexas.htm'\)),

the following explains the grouping of internal tables step by step using a very simple case of an internal table spfli\_tab that is filled with data from the database table SPFLI. The following steps show how the contents of the internal table can be grouped using [LOOP AT GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)):

-   [Grouping by One Column](#abapsheets-grouping-iitabs-1-------grouping-by-more-than-one-column---@ITOC@@ABAPSHEETS_GROUPING_IITABS_2)
-   [Group Key Binding when Grouping by One Column](#abapsheets-grouping-iitabs-3-------group-key-binding-when-grouping-by-more-than-one-column---@ITOC@@ABAPSHEETS_GROUPING_IITABS_4)
-   [Demonstration Program](#@@ITOC@@ABAPSHEETS_GROUPING_IITABS_5)

Grouping by One Column

The simplest form of grouping is by one column without explicitly specifying the output behavior of the group loop:

LOOP AT spfli\_tab INTO wa
                  GROUP BY wa-carrid.
       ... wa-carrid ...
ENDLOOP.

Within the loop, there is access to the work area wa, in particular to the component wa-carrid that is used for grouping. The work area wa contains the first line of each group and represents the group in the loop. This is called representative binding.

To access the members of a group, a member loop can be inserted into the group loop:

LOOP AT spfli\_tab INTO wa
                  GROUP BY wa-carrid.
  ...
  LOOP AT GROUP wa INTO DATA(member).
    ... member-... ...
  ENDLOOP.
  ...
ENDLOOP.

The member loop is executed using the group represented by wa and its members are assigned to member and are available in the member loop.

Grouping by More Than One Column

To group by more than just one criterion, a structured group key is defined as follows. In the simplest case, the grouping criteria are columns of the internal table:

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
  ... wa-carrid ... wa-airpfrom ...
ENDLOOP.

This is also a representative binding in which the work area wa is reused in the group loop to access the group key.

To access the members of the groups, the exact same member loop can be inserted as when grouping by one column.

Group Key Binding when Grouping by One Column

By explicitly specifying an [output area](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)) for the group key, a group key binding can be defined explicitly instead of the representative binding in which the output area of the group loop is reused:

LOOP AT spfli\_tab INTO wa
                  GROUP BY wa-carrid
                  INTO DATA(key).
  ... key ...
ENDLOOP.

The difference to the example with representative binding is the INTO addition after GROUP BY. Instead of reusing wa, an elementary data object key represents the group. This can be generated inline. The additions [GROUP SIZE](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)), [GROUP INDEX](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)), and [WITHOUT MEMBERS](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) can only be used in the group key binding, which gives it more functions than the representative binding. If these are not required, the representative binding can be used. The group key binding can also be used to make the use of the group key in the loop more explicit.

Inserting a member loop works in the same way as in the representative binding, with the difference that a group is now addressed by key instead of wa.

LOOP AT spfli\_tab INTO wa
                  GROUP BY wa-carrid
                  INTO key.
  ...
  LOOP AT GROUP key INTO member.
    ... members ...
  ENDLOOP.
  ...
ENDLOOP.

Group Key Binding when Grouping by More Than One Column

Finally, the group key binding for structured group keys:

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                  INTO DATA(key).
  ... key-key1 ... key-key2 ...
ENDLOOP.

Here, key is a structure with the components key1 and key2. A member loop can be inserted in exactly the same way as when grouping by one column.

If the group members are not relevant, the addition [NO MEMBERS](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) can be used to save time and memory.

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom
                             index = GROUP INDEX size = GROUP SIZE )
                  WITHOUT MEMBERS
                  INTO DATA(key).
  ... key-key1 ... key-key2 ... key-index ... key-size ...
ENDLOOP.

It is no longer possible to use a member loop here. Instead, the group key was enriched with optional components for further information using [GROUP INDEX](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) [GROUP SIZE](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)).

Demonstration Program

Executable Example

The example [Introduction to LOOP AT GROUP BY](javascript:call_link\('abenloop_group_by_abexa.htm'\)) demonstrates all of above mentioned syntactical options in one program.

Continue
![Example](exa.gif "Example") [Grouping Internal Tables](javascript:call_link\('abenloop_group_by_abexa.htm'\))