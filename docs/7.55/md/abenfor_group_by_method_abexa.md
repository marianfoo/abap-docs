---
title: "Source Code"
description: |
  REPORT demo_for_groups_by_method. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, class_constructor. PRIVATE SECTION. TYPES: spfli_tab    TYPE STANDARD TABLE OF spfli    WITH EMPTY KEY, sairport_tab TYPE STANDARD TABLE OF sairport WITH EMPTY KEY. CLASS-DATA: flights  TYPE spfli_t
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_group_by_method_abexa.htm"
abapFile: "abenfor_group_by_method_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenfor", "group", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_grouping_abexas.htm) → 

itab - Grouping with FOR Using a Method

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_key_glosry.htm "Glossary Entry") using the assignment of return values.

Source Code

REPORT demo\_for\_groups\_by\_method.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    TYPES:
      spfli\_tab    TYPE STANDARD TABLE OF spfli    WITH EMPTY KEY,
      sairport\_tab TYPE STANDARD TABLE OF sairport WITH EMPTY KEY.
    CLASS-DATA:
      flights  TYPE spfli\_tab,
      airports TYPE sairport\_tab.
    CLASS-METHODS
      get\_time\_zone IMPORTING id               TYPE sairport-id
                    RETURNING VALUE(time\_zone) TYPE sairport-time\_zone.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA out TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT o = cl\_demo\_output=>new( )
      FOR GROUPS <group> OF wa IN flights
            GROUP BY ( tz\_from = get\_time\_zone( wa-airpfrom )
                       tz\_to   = get\_time\_zone( wa-airpto )
                       size    = GROUP SIZE index = GROUP INDEX )
      LET members = VALUE spfli\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT o = o->write( name = \`Group key\`
                         data = <group>
               )->write( members )->line( ) ).
  out->display( ).ENDMETHOD.
METHOD class\_constructor.
  SELECT \* FROM spfli    INTO TABLE flights.
  SELECT \* FROM sairport INTO TABLE airports.
ENDMETHOD.
METHOD get\_time\_zone.
  time\_zone = airports\[ id = id \]-time\_zone.
ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_method_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_method_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmember_loop_glosry.htm "Glossary Entry").