  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab, GROUP BY](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) →  [Examples of Grouping with LOOP](javascript:call_link\('abenloop_group_by_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: itab - Grouping with LOOP Using a Method, ABENLOOP_GROUP_BY_METHOD_ABEXA, 757%0D%0A%0
D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

itab - Grouping with LOOP Using a Method

This example demonstrates the construction of the [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") using the assignment of return values.

Source Code   

REPORT demo\_loop\_group\_by\_method.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      class\_constructor.
  PRIVATE SECTION.
    CLASS-DATA:
      flights  TYPE TABLE OF spfli    WITH EMPTY KEY,
      airports TYPE TABLE OF sairport WITH EMPTY KEY.
    CLASS-METHODS
      get\_time\_zone IMPORTING id               TYPE sairport-id
                    RETURNING VALUE(time\_zone) TYPE sairport-time\_zone.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
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
    out->display( ).  ENDMETHOD.
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

[Grouping](javascript:call_link\('abaploop_at_itab_group_by.htm'\)) of an internal table flights with [group key binding](javascript:call_link\('abaploop_at_itab_group_by_binding.htm'\)). The [group key](javascript:call_link\('abengroup_key_glosry.htm'\) "Glossary Entry") of the [group loop](javascript:call_link\('abengroup_loop_glosry.htm'\) "Glossary Entry") is constructed as a structure. The return values of the functional method get\_time\_zone are assigned to the components tz\_from and tz\_to. The values of the columns airpfrom or airpto are passed to the input parameter of the method. This creates groups of lines that have the same combinations of time zones for the departure and destination airport.

In the simple case shown here, the table expression from the method could of course also be specified directly:

LOOP AT flights INTO DATA(wa)
     GROUP BY ( tz\_from = airports\[ id = wa-airpfrom \]-time\_zone
                tz\_to   = airports\[ id = wa-airpto   \]-time\_zone )
     ASSIGNING FIELD-SYMBOL(<group>).

Furthermore, the components size and index are created for the special language elements GROUP SIZE or GROUP INDEX to determine the size and index of each group.

The group key that is bound to a field symbol <group> and the additional components are produced in the group loop. In a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry"), the lines of each group are placed in an internal table members using the [value operator](javascript:call_link\('abenvalue_operator_glosry.htm'\) "Glossary Entry") with the addition [BASE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)). This table is also displayed.

members could also be filled by evaluating a table comprehension using [FOR ... IN GROUP](javascript:call_link\('abenfor_in_group.htm'\)), instead of in a [member loop](javascript:call_link\('abenmember_loop_glosry.htm'\) "Glossary Entry") [LOOP AT GROUP](javascript:call_link\('abaploop_at_group.htm'\)):

members = VALUE #( FOR <member> IN GROUP <group> ( <member> ) ).

The executable example for [grouping with FOR](javascript:call_link\('abenfor_group_by_method_abexa.htm'\)) demonstrates how the entire group loop can be implemented using expressions.