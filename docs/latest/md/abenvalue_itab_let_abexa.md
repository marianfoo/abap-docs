  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE, Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE, Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20VALUE%2C%20Operator%20with%20LET%20for%20Internal%20Tables%2C%20ABENVALUE_ITAB_LET_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

VALUE, Operator with LET for Internal Tables

This example demonstrates the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables with a [LET expression](javascript:call_link\('abaplet.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_value\_constr\_itab\_let DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS date DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS get RETURNING VALUE(d) TYPE d.
ENDCLASS.
CLASS date IMPLEMENTATION.
  METHOD get.
    d = cl\_demo\_date\_time=>get\_user\_date( ).
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_value\_constr\_itab\_let IMPLEMENTATION.
  METHOD main.
    TYPES t\_date\_tab TYPE TABLE OF string  WITH EMPTY KEY.
    out->write(
      VALUE t\_date\_tab(
        LET d = date=>get( ) IN
        ( |{ CONV d( d - 1 ) DATE = ENVIRONMENT }| )
        ( |{         d       DATE = ENVIRONMENT }| )
        ( |{ CONV d( d + 1 ) DATE = ENVIRONMENT }| ) ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Construction of an internal table with an elementary line type with type string and filling it with three lines. The result is a table that contains the previous day, today, and the next day in the formatting for the current language environment. Today's date is produced using a method. To make sure that the method is called only once, the return value is assigned to a local helper field in a [LET expression](javascript:call_link\('abaplet.htm'\)).