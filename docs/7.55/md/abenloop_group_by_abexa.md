---
title: "Source Code"
description: |
  REPORT demo_loop_at_itab_group_by. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA(out) = cl_demo_output=>new( ). DATA: wa      TYPE spfli, member  TYPE spfli, members TYPE STANDARD TABLE OF spfli WITH EMPTY KEY. SELECT  FROM
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_abexa.htm"
abapFile: "abenloop_group_by_abexa.htm"
keywords: ["select", "insert", "loop", "do", "if", "case", "method", "class", "data", "internal-table", "abenloop", "group", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_abexas.htm) → 

itab - Introduction to LOOP AT GROUP BY

The example is a step-by-step introduction to grouping with [LOOP AT GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm).

Source Code

REPORT demo\_loop\_at\_itab\_group\_by.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA:
      wa      TYPE spfli,
      member  TYPE spfli,
      members TYPE STANDARD TABLE OF spfli WITH EMPTY KEY.
    SELECT \*
           FROM spfli
           INTO TABLE @DATA(spfli\_tab).
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
                      INTO DATA(keysplus).
      out->write( keysplus ).
    ENDLOOP.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

An internal table spfli\_tab is filled with data from the database table SPFLI. The program shows step by step how it can be grouped using [LOOP AT GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm):

-   Grouping by One Column

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

-   Grouping by More Than One Column

To group by more than just one criterion, a structured group key is defined as follows. In the simplest case, the grouping criteria are columns of the internal table:

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom ).
  ... wa-carrid ... wa-airpfrom ...
ENDLOOP.

This is also a representative binding in which the work area wa is reused in the group loop to access the group key.

To access the members of the groups, the exact same member loop can be inserted as when grouping by one column.

-   Group Key Binding when Grouping by One Column

By explicitly specifying an [output area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_binding.htm) for the group key, a group key binding can be defined explicitly instead of the representative binding in which the output area of the group loop is reused:

LOOP AT spfli\_tab INTO wa
                  GROUP BY wa-carrid
                  INTO DATA(key).
  ... key ...
ENDLOOP.

The difference to the example with representative binding is the INTO addition after GROUP BY. Instead of reusing wa, an elementary data object key represents the group. This can be generated inline. The additions [GROUP SIZE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_key.htm), [GROUP INDEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_key.htm), and [WITHOUT MEMBERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) can only be used in the group key binding, which gives it more functions than the representative binding. If these are not required, the representative binding can be used. The group key binding can also be used to make the use of the group key in the loop more explicit.

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

-   Group Key Binding when Grouping by More Than One Column

Finally, the group key binding for structured group keys:

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom )
                  INTO DATA(key).
  ... key-key1 ... key-key2 ...
ENDLOOP.

Here, key is a structure with the components key1 and key2. A member loop can be inserted in exactly the same way as when grouping by one column.

If the group members are not relevant, the addition [NO MEMBERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) can be used to save time and memory.

LOOP AT spfli\_tab INTO wa
                  GROUP BY ( key1 = wa-carrid key2 = wa-airpfrom
                             index = GROUP INDEX size = GROUP SIZE )
                  WITHOUT MEMBERS
                  INTO DATA(key).
  ... key-key1 ... key-key2 ... key-index ... key-size ...
ENDLOOP.

It is no longer possible to use a member loop here. Instead, the group key was enriched with optional components for further information using [GROUP INDEX](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_key.htm) [GROUP SIZE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_key.htm).