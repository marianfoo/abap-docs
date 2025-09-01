  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

Internal Tables, Grouping with LOOP in Packages

This example demonstrates a construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") that does not depend on the row content.

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

[Grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of an internal table text with [representative binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)). The [group key](javascript:call_link\('abaploop_at_itab_group_by_key.htm'\)) of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry") is constructed as a value of the type i. This value is calculated from the row index of the current row in sy-tabix. This creates groups of rows with the same definable size.

In the group loop, the rows of each group are placed in an internal table group in a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") using the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") with the addition [BASE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). These rows are then also displayed. Here, the group is addressed using the work area wa of the original output behavior of the LOOP due to the representative binding.

group could also be filled by the evaluation of a table comprehension sing [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)), instead of in a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)):

group = VALUE #( FOR <wa> IN GROUP wa ( <wa> ) ).

The executable example for [grouping with FOR](javascript:call_link\('abenfor_group_by_packages_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.