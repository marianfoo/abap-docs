  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [REDUCE - Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) → 

Reduce Operator, Type Inference

This example demonstrates a type inference for the conversion operator [RFC](javascript:call_link\('abenconstructor_expression_reduce.htm'\)).

Source Code

REPORT demo\_reduce\_type\_inference.
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
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    demo=>meth1( p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 = r1 && 'x' ) ).
    demo=>meth1( p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 = r2 + 1 ) ).
    cl\_demo\_output=>line( ).
    demo=>meth2( p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 = r1 && 'x' ) ).
    "demo=>meth2( p = REDUCE #( INIT r2 = num
    "                           FOR i = 1
    "                           UNTIL i > 9
    "                           NEXT r2 = r2 + 1 ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 = r1 && 'x' ) ).
    demo=>meth3( p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 = r2 + 1 ) ) ##type.
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

Passes constructor expressions with the conversion operator [REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](javascript:call_link\('abenreduce_constructor_inference.htm'\)) apply when identifying the operand type.

-   Fully typed formal parameter

When the method meth1 is called with a fully typed formal parameter, the operand type for # is identified using this parameter and the result of the reduction is converted to c with length 10 in both calls.

-   Formal parameter typed generically with c

The operand type for # is identified from the first declaration after INIT.

-   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.

-   It is not possible to perform a call with the type i of the declaration after INIT, since it does not match the typing and there are no inference rules for the generic type c.

-   Formal parameter typed generically with csequence

-   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.

-   In the second call, the type i of the declaration after INIT does not match the generic type and the type string is used. This is indicated by a syntax check warning.