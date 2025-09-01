  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [CONV - Conversion Operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) → 

CONV - Type Inference for Actual Parameters

If a constructor expression

[CONV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconstructor_expression_conv.htm) #( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaplet.htm)*\]* dobj )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the argument dobj is known and matches the generic type of the formal parameter, nothing is converted and the type of the argument is used instead.

-   If the data type of the argument dobj is known and is elementary, types are derived from it as follows for formal parameter types with generic lengths:

-   Generic type c
    c with the length of the argument in arguments of the types n, d, and t; c of the predefined [output length](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwrite_output_length.htm) of the argument in all other argument types except strings; no type is derived in arguments of the types string and xtring

-   Generic type n
    n with the length of the argument in arguments of the types n, d, and t and n with the length of a [conversion](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm) of the argument to n in all other argument types except numeric types with decimal places and strings; no type is derived in arguments of the types decfloat16, decfloat34, f, and p with decimal places plus string and xtring

-   Generic type x
    x with half the length (rounded up) of the argument in arguments of the type c; x with the length 4 in all other argument types except strings; no type is derived in arguments of the types string and xtring

-   Generic type p
    p without decimal places with the length 16 in arguments of the types decfloat16, decfloat34, f, string, or c and n with lengths greater than 15; p without decimal places with the length 8 in all other argument types

-   In other cases, the type is derived from the generic type of the formal parameter as follows:

-   csequence and clike produce string

-   xsequence produces xstring

-   numeric and decfloat produce decfloat34

-   p produces p with the length 8 without decimal places

-   Standard table type with generic primary table key produces a standard table with a [standard key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_key_glosry.htm "Glossary Entry")

Other combinations of generic formal parameter types and arguments cannot be made more concrete in any meaningful way and produce a syntax error (with the exception of table types that are explicitly generic with respect to their secondary table keys).

Syntax warnings that can be hidden using pragmas also indicate any redundant conversions produced by the rules above.

Note

Rules apply when deriving the type in cases where # is specified for actual parameters that can be passed to generically typed formal parameters. These rules prevent syntax errors in programs that call a procedure and the procedure makes the full typing of a formal parameter type more general by switching to a generic type.

Example

The operator CONV generates a result of type decfloat34 in this case. The generic parameter p has this type during the execution of the method. This is shown by the value "e" returned by [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdescribe_field.htm). The method call leads to a corresponding syntax warning.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE numeric.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DESCRIBE FIELD p TYPE DATA(t).
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  FIELD-SYMBOLS <fs> TYPE any.
  ASSIGN 100 TO <fs>.
  demo=>main( CONV #( <fs> ) ).

Executable Example

[Conversion Operator, Type Inference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconv_type_inference_abexa.htm)

Continue
![Example](exa.gif "Example") [Conversion Operator, Type Inference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconv_type_inference_abexa.htm)