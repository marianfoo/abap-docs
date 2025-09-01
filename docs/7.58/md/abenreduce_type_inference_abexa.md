  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeniteration_expressions.htm) →  [REDUCE, Reduction Operator](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Reduce%20Operator%2C%20Type%20Inference%2C%20ABENREDUCE_TYPE_INFERENCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

Reduce Operator, Type Inference

This example demonstrates a type inference for the conversion operator [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_reduce\_type\_inference DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    TYPES c10 TYPE c LENGTH 10.
    METHODS:
      meth1 IMPORTING p TYPE c10,
      meth2 IMPORTING p TYPE c,
      meth3 IMPORTING p TYPE csequence,
      descr IMPORTING p TYPE any.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_reduce\_type\_inference IMPLEMENTATION.
  METHOD main.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    me->meth1(
                 p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 &&= 'x' ) ).
    me->meth1(
                 p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 += 1 ) ).
    out->line( ).
    me->meth2(
                 p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 &&= 'x' ) ).
    "me->meth2(
    "             p = REDUCE #( INIT r2 = num
    "                           FOR i = 1
    "                           UNTIL i > 9
    "                           NEXT r2 +=+ 1 ) ). "not possible
    out->line( ).
    me->meth3(
                 p = REDUCE #( INIT r1 = txt
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r1 &&= 'x' ) ).
    me->meth3(
                 p = REDUCE #( INIT r2 = num
                               FOR i = 1
                               UNTIL i > 9
                               NEXT r2 += 1 ) ) ##type.
  ENDMETHOD.
  METHOD descr.
    DATA type   TYPE string.
    DATA length TYPE i.
    DATA(datadescr) = CAST cl\_abap\_datadescr(
        cl\_abap\_typedescr=>describe\_by\_data( p ) ).
    type = datadescr->type\_kind.
    IF type = 'g'.
      type = 'STRING'.
      length = strlen( p ).
    ELSE.
      length = datadescr->length / cl\_abap\_char\_utilities=>charsize.
    ENDIF.
    out->write( |{ type } { length }| ).
  ENDMETHOD.
  METHOD meth1.
    descr( p ).
  ENDMETHOD.
  METHOD meth2.
    descr( p ).
  ENDMETHOD.
  METHOD meth3.
    descr( p ).
  ENDMETHOD.
ENDCLASS.

Description   

Constructor expressions with the conversion operator [REDUCE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_reduce.htm) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreduce_constructor_inference.htm) apply when determining the operand type.

-   Completely typed formal parameter
    
    When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined by this parameter and the result of the reduction is converted to c with length 10 in both calls.
    
-   Formal parameter typed generically with c
    
    The operand type for # is determined by the first declaration after INIT.
    
    -   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.
    -   It is not possible to perform a call with the type i of the declaration after INIT, since it does not match the typing and there are no inference rules for the generic type c.
-   Formal parameter typed generically with csequence
    -   In the first call, the type c with length 20 of the declaration after INIT matches the generic type and is used.
    -   In the second call, the type i of the declaration after INIT does not match the generic type and the type string is used, which is indicated by a syntax check warning.