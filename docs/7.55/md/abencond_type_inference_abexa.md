  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expressions.htm) → 

Conditional Operator, Type Inference

This example demonstrates a type inference for the conversion operator [COND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_cond.htm).

Source Code

REPORT demo\_cond\_type\_inference.
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
    FIELD-SYMBOLS <fs> TYPE any.
    DATA txt TYPE c LENGTH 20.
    DATA num TYPE i.
    ASSIGN num TO <fs>.
    demo=>meth1( p = COND #( WHEN 1 = 1 THEN txt ) ).
    demo=>meth1( p = COND #( WHEN 1 = 1 THEN txt ) ).
    demo=>meth1( p = COND #( WHEN 1 = 1 THEN <fs> ) ).
    cl\_demo\_output=>line( ).
    demo=>meth2( p = COND #( WHEN 1 = 1 THEN txt ) ).
   "demo=>meth2( p = COND #( WHEN 1 = 1 THEN num ) ).  "not possible
   "demo=>meth2( p = COND #( WHEN 1 = 1 THEN <fs> ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = COND #( WHEN 1 = 1 THEN txt ) ).
    demo=>meth3( p = COND #( WHEN 1 = 1 THEN num ) )  ##type.
    demo=>meth3( p = COND #( WHEN 1 = 1 THEN <fs> ) ) ##type.
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

Constructor expressions with the conditional operator [COND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_cond.htm) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencond_constructor_inference.htm) apply when determining the operand type. Replacing the conditional operator COND with [SWITCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_switch.htm) produces the same results.

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