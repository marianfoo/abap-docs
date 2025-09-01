---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_loop_grp_by_values DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS initialize. PRIVATE SECTION. DATA: carrier TYPE spfli-carrid VALUE 'LH', flights TYPE TABLE OF spfli WITH EMPTY KEY.
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_values_abexa.htm"
abapFile: "abenloop_group_by_values_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "class", "data", "internal-table", "abenloop", "group", "values", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%20Using%20Column%20Values%2C%20ABENLOOP_GROUP_BY_VALUES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

itab - Grouping with LOOP Using Column Values

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_key_glosry.htm "Glossary Entry") using simple value assignments.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_values DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS initialize.
  PRIVATE SECTION.
    DATA:
      carrier TYPE spfli-carrid VALUE 'LH',
      flights TYPE TABLE OF spfli WITH EMPTY KEY.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_values IMPLEMENTATION.
  METHOD main.
    initialize( ).
    out->begin\_section( \`Flights\` ).
    out->write( flights ).
    out->begin\_section( \`Grouping\` ).
    DATA members LIKE flights.
    LOOP AT flights INTO FINAL(flight)
         GROUP BY ( carrier = flight-carrid cityfr = flight-cityfrom
                    size = GROUP SIZE index = GROUP INDEX )
                  ASCENDING
                  REFERENCE INTO FINAL(group\_ref).
      out->begin\_section(
        |Group Key: { group\_ref->carrier }, { group\_ref->cityfr }| ).
      out->write(
        |Group Size: {  group\_ref->size  }, | &&
        |Group Index: { group\_ref->index }| ).
      CLEAR members.
      LOOP AT GROUP group\_ref ASSIGNING FIELD-SYMBOL(<flight>).
        members = VALUE #( BASE members ( <flight> ) ).
      ENDLOOP.
      out->write( members )->end\_section( ).
    ENDLOOP.
  ENDMETHOD.
  METHOD initialize.
    cl\_demo\_input=>new( )->request( CHANGING field = carrier ).
    carrier = to\_upper( carrier ).
    SELECT \* FROM spfli
             WHERE carrid = @carrier
             INTO TABLE @flights.
  ENDMETHOD.
ENDCLASS.

Description   

[Grouping](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm) of an internal table flights with [group key binding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm). The [group key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_key.htm) of the [group loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_loop_glosry.htm "Glossary Entry") is constructed as a structure, where the values of the columns carrid or cityfrom of each line of the internal table are assigned to the components carrier and cityfr. This creates groups of lines that have the same value in these columns. Furthermore, the components size and index are created for the special language elements GROUP SIZE or GROUP INDEX to determine the size and index of each group.

The group key that is bound to a reference variable group\_ref and the additional components are produced in the group loop. In a [member loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmember_loop_glosry.htm "Glossary Entry"), the lines of each group are placed in an internal table members using the [value operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_operator_glosry.htm "Glossary Entry") with the addition [BASE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_constructor_params_itab.htm). This table is also displayed.

members could also be filled by evaluating a table comprehension using [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm):

members = VALUE #( FOR <flight> IN GROUP group\_ref ( <flight> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_group_by_values_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.