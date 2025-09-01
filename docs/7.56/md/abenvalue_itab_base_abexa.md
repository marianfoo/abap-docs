  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [VALUE, Value Operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm) →  [VALUE, Internal Tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_itab.htm) → 

VALUE, Addition BASE for Internal Tables

This example demonstrates the value operator [VALUE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_constructor_params_itab.htm) for internal tables with and without the addition BASE

Source Code

REPORT demo\_value\_base.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES itab TYPE TABLE OF i.
    DATA itab\_no\_base TYPE itab.
    DO 10 TIMES.
      itab\_no\_base = VALUE #( ( sy-index ) ).
    ENDDO.
    DATA itab\_base TYPE itab.
    DO 10 TIMES.
      itab\_base = VALUE #( BASE itab\_base ( sy-index ) ).
    ENDDO.
    cl\_demo\_output=>new(
      )->write( itab\_no\_base
      )->write( itab\_base )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Without the addition BASE, the value operator constructs a new internal table from scratch during each call and this is assigned to itab\_no\_base. As a result, itab\_no\_base contains only one line after the DO loop.

With the addition BASE, the value inserts its line into an internal table that is prefilled with the contents of itab\_no\_base during each call. As a result, itab\_base contains 10 lines after the DO loop.