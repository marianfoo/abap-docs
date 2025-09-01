---
title: "COND, SWITCH, Type Inference for Actual Parameters"
description: |
  If the following constructor expression is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #: COND(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-U
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencond_constructor_inference.htm"
abapFile: "abencond_constructor_inference.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abencond", "constructor", "inference"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COND%2C%20SWITCH%2C%20Type%20Inference%20for%20Actual%20Parameters%2C%20ABENCOND_CONSTRUCTOR_INFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

COND, SWITCH, Type Inference for Actual Parameters

If the following constructor expression is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

[COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm)*|*[SWITCH](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_switch.htm) #( ... THEN ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the operand after the first THEN is known statically and matches the generic type of the formal parameter, this data type is used.
-   If the data type of the operand after the first THEN is known statically and does not match the generic type of the formal parameter or if it is not known statically, the type is derived from the generic type as follows:
    -   string for csequence and clike
    -   xstring for xsequence
    -   decfloat34 for numeric and decfloat
    -   p with the length 8 and no decimal places if p is generic
    -   The [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key
        
        Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.
        

Hint

The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

Example

The operator COND generates a result of type string in this case. The generic parameter p has this type during the execution of the method, which is displayed by the value g returned by [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdescribe_field.htm). The method call leads to a corresponding syntax warning.

CLASS demo1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE csequence.
ENDCLASS.
CLASS demo1 IMPLEMENTATION.
  METHOD main.
    FINAL(t) = CAST cl\_abap\_datadescr(
      cl\_abap\_typedescr=>describe\_by\_data( p ) )->type\_kind.
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
CLASS demo2 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo2 IMPLEMENTATION.
  METHOD main.
    FIELD-SYMBOLS:
      <fs1> TYPE any,
      <fs2> TYPE any.
    ASSIGN 'AM' TO <fs1>.
    ASSIGN 'PM' TO <fs2>.
    demo1=>main( COND #(
      WHEN cl\_demo\_date\_time=>get\_user\_time( ) < '120000' THEN <fs1>
      ELSE <fs2> ) ) ##TYPE.
  ENDMETHOD.
ENDCLASS.

Executable Example

[Conditional Operator, Type Inference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencond_type_inference_abexa.htm)