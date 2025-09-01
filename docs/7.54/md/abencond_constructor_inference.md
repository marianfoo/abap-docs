---
title: "COND, SWITCH - Type Inference for Actual Parameters"
description: |
  The following constructor expression can be passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type: COND(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm)SWITCH(https://help.sap.
version: "7.54"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_constructor_inference.htm"
abapFile: "abencond_constructor_inference.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abencond", "constructor", "inference"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_flow_logic.htm) →  [Conditional Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expressions.htm) → 

COND, SWITCH - Type Inference for Actual Parameters

The following constructor expression can be passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type:

[COND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_cond.htm)*|*[SWITCH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconditional_expression_switch.htm) #( ... THEN ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the operand after the first THEN is known statically and matches the generic type of the formal parameter, this data type is used.

-   If the data type of the operand after the first THEN is known statically and does not match the generic type of the formal parameter or if it is not known statically, the type is derived from the generic type as follows:

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key

Other generic data types (except for table types) that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.

Note

Rules apply when deriving the type in cases where # is specified for actual parameters that can be passed to generically typed formal parameters. These rules prevent syntax errors in programs that call a procedure and the procedure makes the full typing of a formal parameter type more general by switching to a generic type.

Example

The operator COND generates a result of type string in this case. The generic parameter p has this type during the execution of the method. This is shown by the value "g" returned by [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm). The method call leads to a corresponding syntax warning.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD p TYPE DATA(t).
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  FIELD-SYMBOLS:
    <fs1> TYPE any,
    <fs2> TYPE any.
  ASSIGN 'AM' TO <fs1>.
  ASSIGN 'PM' TO <fs2>.
  demo=>main( COND #( WHEN sy-timlo < '120000' THEN <fs1>
                                               ELSE <fs2> ) ).

Executable Example

[Conditional Operator, Type Inference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencond_type_inference_abexa.htm)