  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Expressions and Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_expr_func.htm) →  [FOR, Table Iterations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_itab.htm) →  [itab - Examples of Grouping with FOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_grouping_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20itab%20-%20Grouping%20with%20FOR%20Using%20a%20Method%2C%20ABENFOR_GROUP_BY_METHOD_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

itab - Grouping with FOR Using a Method

This example demonstrates the construction of the [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") using the assignment of return values.

Source Code   

\* Public class definition
CLASS cl\_demo\_for\_grps\_by\_method DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES:
      spfli\_tab    TYPE STANDARD TABLE OF spfli    WITH EMPTY KEY,
      sairport\_tab TYPE STANDARD TABLE OF sairport WITH EMPTY KEY.
    DATA:
      flights  TYPE spfli\_tab,
      airports TYPE sairport\_tab.
    METHODS
      get\_time\_zone IMPORTING id               TYPE sairport-id
                    RETURNING VALUE(time\_zone) TYPE sairport-time\_zone.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_for\_grps\_by\_method IMPLEMENTATION.
  METHOD main.
    TYPES ot TYPE REF TO if\_demo\_output.
    out = REDUCE #(
      INIT ol TYPE ot
      FOR GROUPS <group> OF wa IN flights
            GROUP BY ( tz\_from = get\_time\_zone( wa-airpfrom )
                       tz\_to   = get\_time\_zone( wa-airpto )
                       size    = GROUP SIZE index = GROUP INDEX )
      LET members = VALUE spfli\_tab(
                      FOR <member> IN GROUP <group> ( <member> ) ) IN
      NEXT ol = out->write( name = \`Group key\`
                           data = <group>
               )->write( members )->line( ) ).
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

This example works in the same way as the corresponding [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_method_abexa.htm) for [LOOP AT ... GROUP BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_group_by.htm), but uses the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfor_groups_of.htm) for a [table reduction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_reduction_glosry.htm "Glossary Entry") with [REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) instead of the [group loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_loop_glosry.htm "Glossary Entry"). In both cases, the [group key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_key_glosry.htm "Glossary Entry") after GROUP BY is constructed in exactly the same way.

The result of the table reduction is a reference to an object of the class CL\_DEMO\_OUTPUT to which the results of the grouping are written. The group members are written to a local auxiliary table members using a [table comprehension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_comprehension_glosry.htm "Glossary Entry") with [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_itab.htm). This table comprehension could also be used in the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_group_by_method_abexa.htm) for LOOP AT ... GROUP BY instead of the [member loop](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmember_loop_glosry.htm "Glossary Entry").