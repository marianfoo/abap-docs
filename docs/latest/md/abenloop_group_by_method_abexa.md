---
title: "Source Code"
description: |
  Public class definition CLASS cl_demo_loop_grp_by_method DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. METHODS constructor. PRIVATE SECTION. DATA: flights  TYPE TABLE OF spfli    WITH EMPTY KEY, airports TYPE TABLE OF sairport
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_method_abexa.htm"
abapFile: "abenloop_group_by_method_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "internal-table", "field-symbol", "abenloop", "group", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20LOOP%20Using%20a%20Method%2C%20ABENLOOP_GROUP_BY_METHOD_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

itab - Grouping with LOOP Using a Method

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") using the assignment of return values.

Source Code   

\* Public class definition
CLASS cl\_demo\_loop\_grp\_by\_method DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      flights  TYPE TABLE OF spfli    WITH EMPTY KEY,
      airports TYPE TABLE OF sairport WITH EMPTY KEY.
    METHODS
      get\_time\_zone IMPORTING id               TYPE sairport-id
                    RETURNING VALUE(time\_zone) TYPE sairport-time\_zone.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_loop\_grp\_by\_method IMPLEMENTATION.
  METHOD main.
    DATA members LIKE flights.
    LOOP AT flights INTO FINAL(wa)
         GROUP BY ( tz\_from = get\_time\_zone( wa-airpfrom )
                    tz\_to   = get\_time\_zone( wa-airpto )
                    size = GROUP SIZE index = GROUP INDEX )
         ASSIGNING FIELD-SYMBOL(<group>).
      out->write( name = \`Group key\`
                  data = <group> ).
      CLEAR members.
      LOOP AT GROUP <group> ASSIGNING FIELD-SYMBOL(<member>).
        members = VALUE #( BASE members ( <member> ) ).
      ENDLOOP.
      out->write( members )->line( ).
    ENDLOOP.
  ENDMETHOD.
  METHOD get\_time\_zone.
    time\_zone = airports\[ id = id \]-time\_zone.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    SELECT \* FROM spfli    INTO TABLE @flights.
    SELECT \* FROM sairport INTO TABLE @airports.
  ENDMETHOD.
ENDCLASS.

Description   

[Grouping](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm) of an internal table flights with [group key binding](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by_binding.htm). The [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") of the [group loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_loop_glosry.htm "Glossary Entry") is constructed as a structure. The return values of the functional method get\_time\_zone are assigned to the components tz\_from and tz\_to. The values of the columns airpfrom or airpto are passed to the input parameter of the method. This creates groups of lines that have the same combinations of time zones for the departure and destination airport.

In the simple case shown here, the table expression from the method could of course also be specified directly:

LOOP AT flights INTO DATA(wa)
     GROUP BY ( tz\_from = airports\[ id = wa-airpfrom \]-time\_zone
                tz\_to   = airports\[ id = wa-airpto   \]-time\_zone )
     ASSIGNING FIELD-SYMBOL(<group>).

Furthermore, the components size and index are created for the special language elements GROUP SIZE or GROUP INDEX to determine the size and index of each group.

The group key that is bound to a field symbol <group> and the additional components are produced in the group loop. In a [member loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmember_loop_glosry.htm "Glossary Entry"), the lines of each group are placed in an internal table members using the [value operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_operator_glosry.htm "Glossary Entry") with the addition [BASE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm). This table is also displayed.

members could also be filled by evaluating a table comprehension using [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_group.htm):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_group_by_method_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.