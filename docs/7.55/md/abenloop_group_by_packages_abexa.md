  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, GROUP BY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) →  [Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_group_by_abexas.htm) → 

itab - Grouping with LOOP in Packages

This example demonstrates a construction of the [group key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_key_glosry.htm "Glossary Entry") that does not depend on the line content.

Source Code

REPORT demo\_loop\_group\_by\_packages.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA
      itab TYPE TABLE OF decfloat34 WITH EMPTY KEY.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(n) = 10.
    cl\_demo\_input=>request( EXPORTING text  = \`Package size\`
                            CHANGING  field = n ).
    IF n <= 0.
      RETURN.
    ENDIF.
    cl\_demo\_output=>begin\_section( |Packages of { n }| ).
    DATA group LIKE itab.
    LOOP AT itab INTO DATA(wa)
         GROUP BY ( sy-tabix - 1 ) DIV n + 1.
      CLEAR group.
      LOOP AT GROUP wa ASSIGNING FIELD-SYMBOL(<wa>).
        group = VALUE #( BASE group ( <wa> ) ).
      ENDLOOP.
      cl\_demo\_output=>write( group ).
    ENDLOOP.
    cl\_demo\_output=>display( ).  ENDMETHOD.
  METHOD class\_constructor.
    itab = VALUE #( FOR j = 1 UNTIL j > 100 ( 1 / j ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

[Grouping](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by.htm) of an internal table text with [representative binding](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_binding.htm). The [group key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_group_by_key.htm) of the [group loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengroup_loop_glosry.htm "Glossary Entry") is constructed as a value of the type i, which is calculated from the line index of the current line in sy-tabix. This creates groups of lines with the same definable size.

In the group loop, the lines of each group are placed in an internal table group in a [member loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmember_loop_glosry.htm "Glossary Entry") using the [value operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_operator_glosry.htm "Glossary Entry") with the addition [BASE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_constructor_params_itab.htm). This table is also displayed. Here, the group is addressed using the work area wa of the original output behavior of the LOOP due to the representative binding.

group could also be filled by the evaluation of a table comprehension using [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_in_group.htm), instead of in a [member loop](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmember_loop_glosry.htm "Glossary Entry") [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_group.htm):

group = VALUE #( FOR <wa> IN GROUP wa ( <wa> ) ).

The executable example for [grouping with FOR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfor_group_by_packages_abexa.htm) demonstrates how the entire group loop can be implemented using expressions.