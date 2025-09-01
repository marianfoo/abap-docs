  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Conditional%20Operator%2C%20Type%20Inference%2C%20ABENCOND_TYPE_INFERENCE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Conditional Operator, Type Inference

This example demonstrates a type inference for the conversion operator [COND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_cond.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_cond\_type\_inference DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    TYPES:
      c10 TYPE c LENGTH 10 .
    METHODS meth1
      IMPORTING
        !p TYPE c10 .
    METHODS meth2
      IMPORTING
        !p TYPE c .
    METHODS meth3
      IMPORTING
        !p TYPE csequence .
    METHODS descr
      IMPORTING
        !p TYPE any .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cond\_type\_inference IMPLEMENTATION.
  METHOD main.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    ASSIGN num TO <fs>.
    me->meth1(
          p = COND #( WHEN 1 = 1 THEN txt ) ).
    me->meth1(
          p = COND #( WHEN 1 = 1 THEN txt ) ).
    me->meth1(
          p = COND #( WHEN 1 = 1 THEN <fs> ) ).
    out->line( ).
    me->meth2(
          p = COND #( WHEN 1 = 1 THEN txt ) ).
    "me->meth2(
    "     p = COND #( WHEN 1 = 1 THEN num ) ).  "not possible
    "me->meth2(
    "     p = COND #( WHEN 1 = 1 THEN <fs> ) ). "not possible
    out->line( ).
    me->meth3(
          p = COND #( WHEN 1 = 1 THEN txt ) ).
    me->meth3(
          p = COND #( WHEN 1 = 1 THEN num ) )  ##type.
    me->meth3(
          p = COND #( WHEN 1 = 1 THEN <fs> ) ) ##type.
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

Constructor expressions with the conditional operator [COND](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_cond.htm) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencond_constructor_inference.htm) apply when determining the operand type. Replacing the conditional operator COND with [SWITCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_switch.htm) produces the same results.

-   Completely typed formal parameter
    
    When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined using this parameter and the result of the conditional expression is converted to c with length 10 in all three calls.
    
-   Formal parameter typed generically with c
    
    The operand type for # is determined from the data type of the operand after THEN.
    
    -   In the first call, the type c with length 20 of the operand after THEN matches the generic type and is used.
    -   In the second call, the type i of the operand after THEN does not match the generic type and the call is not possible.
    -   In the third call, no type can be derived from the generically typed field symbol <fs> after THEN. No call is possible here, since there is no inference rule for the generic type c.
-   Formal parameter typed generically with csequence
    -   In the first call, the type c with length 20 of the operand after THEN matches the generic type and is used.
    -   In the second call, the type i of the operand after THEN does not match the generic type and the type string is used, which is indicated by a syntax check warning.
    -   In the third call, no type is derived from the generically typed field symbol <fs> after THEN and the type string is used, which is indicated by a syntax check warning.