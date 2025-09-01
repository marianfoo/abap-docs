  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeniteration_expressions.htm) →  [REDUCE - Reduction Operator](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm) → 

REDUCE - Type Inference for Actual Parameter

The following constructor expression can be passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type:

[REDUCE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstructor_expression_reduce.htm) #( ... INIT ... FOR ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the first declaration after INIT matches the generic type of the formal parameter, this data type is used.

-   If the data type of the first declaration after INIT does not match the generic type of the formal parameter, the type is derived from the generic type as follows:

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key

Other generic data types (except for table types) that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.

Notes

-   The data type of the first declaration after INIT is always identified statically.

-   Certain rules apply to derivations of the type in cases where # is specified for actual parameters that can be passed to generically typed formal parameters. These rules prevent syntax errors in programs that call a procedure and where the procedure makes the full typing of a formal parameter type more general by switching to a generic type.
    

Example

The operator REDUCE generates a result of type string in this case. The generic parameter p has this type during the execution of the method. This is shown by the value "g" returned by [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdescribe_field.htm). The method call leads to a corresponding syntax warning.

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
  demo=>main( REDUCE #( INIT s = 0
                        FOR  i = 1 UNTIL i > 10
                        NEXT s = s + i ) ).

Executable Example

[Reduce Operator, Type Inference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreduce_type_inference_abexa.htm)