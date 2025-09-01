  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Iteration Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeniteration_expressions.htm) →  [REDUCE, Reduction Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20REDUCE%2C%20Type%20Inference%20for%20Actual%20Parameter%2C%20ABENREDUCE_CONSTRUCTOR_INFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

REDUCE, Type Inference for Actual Parameter

If a constructor expression

[REDUCE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_reduce.htm) #( ... INIT ... FOR ... )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the first declaration after INIT matches the generic type of the formal parameter, this data type is used.
-   If the data type of the first declaration after INIT does not match the generic type of the formal parameter, the type is derived from the generic type as follows:
    -   string for csequence and clike
    -   xstring for xsequence
    -   decfloat34 for numeric and decfloat
    -   p with the length 8 and no decimal places if p is generic
    -   The [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key
        
        Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. More specifically, this applies to the types c, n, and x with generic lengths.
        

Hints

-   The data type of the first declaration after INIT is always identified statically.
-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

Example

The operator REDUCE generates a result of type string here. The generic parameter p has this type during the execution of the method, which is shown by the value g returned by [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdescribe_field.htm). The method call leads to a corresponding syntax warning that is suppressed by a pragma.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE csequence.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD p TYPE FINAL(t).
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( REDUCE #( INIT s = 0
                        FOR  i = 1 UNTIL i > 10
                        NEXT s += i ) ) ##type.

Executable Example

[Reduce Operator, Type Inference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreduce_type_inference_abexa.htm)