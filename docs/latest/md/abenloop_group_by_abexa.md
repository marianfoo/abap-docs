  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20Internal%20Tables%2C%20Step%20by%20Step%2C%20ABENLOOP_GROUP_BY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

itab - Grouping Internal Tables, Step by Step

The example is a step-by-step introduction to grouping with [LOOP AT GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_at\_itab\_group\_by DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_at\_itab\_group\_by IMPLEMENTATION.
  METHOD main.
    DATA:
      wa      TYPE spfli,
      member  TYPE spfli,
      members TYPE STANDARD TABLE OF spfli WITH EMPTY KEY.
    SELECT \*
           FROM spfli
           INTO TABLE @FINAL(spfli\_tab).
    out->begin\_section( \`Representative Binding\` ).
    out->begin\_section(
     \`Grouping by one column\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid.
      out->write( wa-carrid ).
    ENDLOOP.
    out->next\_section(
     \`Members of one column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid.
      CLEAR members.
      LOOP AT GROUP wa INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Grouping by two columns\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
      out->write( |{ wa-carrid } { wa-airpfrom }| ).
    ENDLOOP.
    out->next\_section(
     \`Members of two column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
      CLEAR members.
      LOOP AT GROUP wa INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->end\_section( )->next\_section( \`Group Key Binding\` ).
    out->next\_section(
     \`Grouping by one column\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid
                      INTO DATA(key).
      out->write( key ).
    ENDLOOP.
    out->next\_section(
     \`Members of one column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY wa-carrid
                      INTO key.
      CLEAR members.
      LOOP AT GROUP key INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Grouping by two columns\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                      INTO DATA(keys).
      out->write( keys ).
    ENDLOOP.
    out->next\_section(
     \`Members of two column groups\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                      INTO keys.
      CLEAR members.
      LOOP AT GROUP keys INTO member.
        members = VALUE #( BASE members ( member ) ).
      ENDLOOP.
      out->write( members ).
    ENDLOOP.
    out->next\_section(
     \`Two column groups without members\` ).
    LOOP AT spfli\_tab INTO wa
                      GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom
                                 index = GROUP INDEX size = GROUP SIZE )
                      WITHOUT MEMBERS
                      INTO FINAL(keysplus).
      out->write( keysplus ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

Similar to SQL's [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapgroupby_clause.htm), there is also a [GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) for working with internal tables that can be used behind [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) or in the form [IN GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_group.htm) in a table iteration with [FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm). It replaces the clumsy group level processing with statements [AT NEW ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_itab.htm) that relies on the order of table columns and content that is sorted respectively.

While there are more examples for all the powerful features of GROUP BY and IN GROUP under

-   [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_abexas.htm),
-   [Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_grouping_abexas.htm),

the above example shows the grouping of internal tables step by step using a very simple case of an internal table spfli\_tab that is filled with data from the database table SPFLI. The following steps explain how the content of the internal table can be grouped using [LOOP AT GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm):

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

Grouping by More than One Column   

To group by more than just one criterion, a structured group key is defined as follows. In the simplest case, the grouping criteria are columns of the internal table:

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
  ... wa-carrid ... wa-airpfrom ...
ENDLOOP.

This is also a representative binding in which the work area wa is reused in the group loop to access the group key.

To access the members of the groups, the exact same member loop can be inserted as when grouping by one column.

Group Key Binding when Grouping by One Column   

By explicitly specifying an [output area](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_binding.htm) for the group key, a group key binding can be defined explicitly instead of the representative binding in which the output area of the group loop is reused:

LOOP AT spfli\_tab INTO wa
                  GROUP BY wa-carrid
                  INTO DATA(key).
  ... key ...
ENDLOOP.

The difference to the example with representative binding is the INTO addition after GROUP BY. Instead of reusing wa, an elementary data object key represents the group. This can be generated inline. The additions [GROUP SIZE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_key.htm), [GROUP INDEX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_key.htm), and [WITHOUT MEMBERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) can only be used in the group key binding, which gives it more functions than the representative binding. If these are not required, the representative binding can be used. The group key binding can also be used to make the use of the group key in the loop more explicit.

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

Group Key Binding when Grouping by More than One Column   

Finally, the group key binding for structured group keys:

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                  INTO DATA(key).
  ... key-key1 ... key-key2 ...
ENDLOOP.

Here, key is a structure with the components key1 and key2. A member loop can be inserted in exactly the same way as when grouping by one column.

If the group members are not relevant, the addition [NO MEMBERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) can be used to save time and memory.

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom
                             index = GROUP INDEX size = GROUP SIZE )
                  WITHOUT MEMBERS
                  INTO DATA(key).
  ... key-key1 ... key-key2 ... key-index ... key-size ...
ENDLOOP.

It is no longer possible to use a member loop here. Instead, the group key was enriched with optional components for further information using [GROUP INDEX](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_key.htm) [GROUP SIZE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_key.htm).