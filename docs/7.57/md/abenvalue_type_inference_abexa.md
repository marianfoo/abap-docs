  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [VALUE, Value Operator](javascript:call_link\('abenconstructor_expression_value.htm'\)) →  [VALUE, Initial Value for All Types](javascript:call_link\('abenvalue_constructor_params_init.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Value Operator, Type Inference, ABENVALUE_TYPE_INFERENCE_ABEXA, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Value Operator, Type Inference

This example demonstrates a type inference for the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)).

Source Code   

REPORT demo\_value\_type\_inference.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES c10 TYPE c LENGTH 10.
    CLASS-METHODS:
      main,
      meth1 IMPORTING p TYPE c10,
      meth2 IMPORTING p TYPE c,
      meth3 IMPORTING p TYPE csequence,
      descr IMPORTING p TYPE any.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    demo=>meth1( p = VALUE #(  ) ).
    cl\_demo\_output=>line( ).
   "demo=>meth2( p = value #(  ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = VALUE #(  ) ) ##type.
    cl\_demo\_output=>display( ).  ENDMETHOD.
  METHOD meth1.
    descr( p ).
  ENDMETHOD.
  METHOD meth2.
    descr( p ).
  ENDMETHOD.
  METHOD meth3.
    descr( p ).
  ENDMETHOD.
  METHOD descr.
    DATA type   TYPE string.
    DATA length TYPE i.
    DESCRIBE FIELD p TYPE type.
    IF type = 'g'.
      type = 'STRING'.
      length = strlen( p ).
    ELSE.
      DESCRIBE FIELD p LENGTH length IN CHARACTER MODE.
    ENDIF.
    cl\_demo\_output=>write( |{ type } { length }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Constructor expressions with the value operator [VALUE](javascript:call_link\('abenvalue_constructor_params_init.htm'\)) for initial values are passed to differently typed formal parameters of methods.

-   Completely typed formal parameter
    
    When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined using this parameter and the result of the value operator is an initial field of type c with length 10.
    
-   Formal parameter typed generically with c
    
    No call is possible here, since there is no inference rule for the generic type c.
    
-   Formal parameter typed generically with csequence
    
    In accordance with the inference rule for csequence, the result of the value operator is an initial field of type string, which is indicated by a syntax check warning.