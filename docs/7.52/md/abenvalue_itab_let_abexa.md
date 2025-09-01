  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE - Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE - Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

VALUE - Operator with LET for Internal Tables

This example demonstrates the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables with a [LET expression](javascript:call_link\('abaplet.htm'\)).

Source Code

REPORT demo\_value\_constr\_itab\_let.
CLASS date DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS get RETURNING VALUE(d) TYPE d.
ENDCLASS.
CLASS date IMPLEMENTATION.
  METHOD get.
    d = sy-datlo.
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES t\_date\_tab TYPE TABLE OF string  WITH EMPTY KEY.
    cl\_demo\_output=>display(
      VALUE t\_date\_tab(
        LET d = date=>get( ) IN
        ( |{ CONV d( d - 1 ) DATE = ENVIRONMENT }| )
        ( |{         d       DATE = ENVIRONMENT }| )
        ( |{ CONV d( d + 1 ) DATE = ENVIRONMENT }| ) ) ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Constructs an internal table with an elementary row type with type string and fills it with three rows. The result is a table that is given the previous day, today, and the next day (all formatted for the current language environment). Today's date is produced using a method. To make sure that the method is called only once, the return value is assigned to a local helper field in a [LET expression](javascript:call_link\('abaplet.htm'\)).