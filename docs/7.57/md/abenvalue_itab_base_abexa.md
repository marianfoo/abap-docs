  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE, Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE, Internal Tables](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: VALUE, Addition BASE for Internal Tables, ABENVALUE_ITAB_BASE_ABEXA, 757%0D%0A%0D%0AE
rror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

VALUE, Addition BASE for Internal Tables

This example demonstrates the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_itab.htm'\)) for internal tables with and without the addition BASE

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

With the addition BASE, the value inserts its line into an internal table that is prefilled with the content of itab\_no\_base during each call. As a result, itab\_base contains 10 lines after the DO loop.