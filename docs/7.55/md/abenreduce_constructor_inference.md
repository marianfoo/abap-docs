  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Iteration Expressions](javascript:call_link\('abeniteration_expressions.htm'\)) →  [REDUCE, Reduction Operator](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) → 

REDUCE, Type Inference for Actual Parameter

If a constructor expression

[REDUCE](javascript:call_link\('abenconstructor_expression_reduce.htm'\)) #( ... INIT ... FOR ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the first declaration after INIT matches the generic type of the formal parameter, this data type is used.

-   If the data type of the first declaration after INIT does not match the generic type of the formal parameter, the type is derived from the generic type as follows:

-   string for csequence and clike

-   xstring for xsequence

-   decfloat34 for numeric and decfloat

-   p with the length 8 and no decimal places if p is generic

-   The [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry") for a standard table type with generic primary table key

Other generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.

Hints

-   The data type of the first declaration after INIT is always identified statically.

-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
    

Example

The operator REDUCE generates a result of type string here. The generic parameter p has this type during the execution of the method, which is shown by the value "g" returned by [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). The method call leads to a corresponding syntax warning that is suppressed by a pragma.

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
                        NEXT s += i ) ) ##type.

Executable Example

[Reduce Operator, Type Inference](javascript:call_link\('abenreduce_type_inference_abexa.htm'\))