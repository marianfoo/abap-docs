  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONV, Type Inference for Actual Parameters, ABENCONV_CONSTRUCTOR_INFERENCE, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CONV, Type Inference for Actual Parameters

If a constructor expression

[CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) #( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* dobj )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the argument dobj is known and matches the generic type of the formal parameter, no conversion is performed, and the type of the argument is used instead.
-   If the data type of the argument dobj is known and is elementary, types are derived from it as follows for formal parameter types with generic lengths as follows:
    -   Generic type c
        
        c with the length of the argument in arguments of the types n, d, and t; c of the predefined [output length](javascript:call_link\('abenwrite_output_length.htm'\)) of the argument for all other argument types except strings; no type is derived for arguments of the types string and xtring
        
    -   Generic type n
        
        n with the length of the argument for arguments of the types n, d, and t and n with the length of a [conversion](javascript:call_link\('abenconversion_elementary.htm'\)) of the argument to n for all other argument types except numeric types with decimal places and strings; no type is derived for arguments of the types decfloat16, decfloat34, f, and p with decimal places plus string and xtring
        
    -   Generic type x
        
        x with the rounded half length of the argument for arguments of the type c; x with the length 4 for all other argument types except strings; no type is derived for arguments of the types string and xtring
        
    -   Generic type p
        
        p without decimal places with the length 16 for arguments of the types decfloat16, decfloat34, f, string, or c and n with lengths greater than 15; p without decimal places with the length 8 for all other argument types
        
-   In other cases, the type is derived from the generic type of the formal parameter as follows:
    -   csequence and clike produce string
    -   xsequence produces xstring
    -   numeric and decfloat produce decfloat34
    -   p produces p with the length 8 and no decimal places
    -   Standard table type with generic primary table key produces a standard table with a [standard key](javascript:call_link\('abenstandard_key_glosry.htm'\) "Glossary Entry")

Other combinations of generic formal parameter types and arguments cannot be made more concrete in any meaningful way and produce a syntax error with the exception of table types that are explicitly generic with respect to their secondary table keys.

Syntax warnings that can be hidden using pragmas also indicate any redundant conversions resulting from the rules above.

Hint

The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

Example

The operator CONV generates a result of type decfloat34 in this case. The generic parameter p has this type during the execution of the method, which is shown by the value "e" returned by [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). The method call produces a corresponding syntax warning.

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

[Conversion Operator, Type Inference](javascript:call_link\('abenconv_type_inference_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Conversion Operator, Type Inference](javascript:call_link\('abenconv_type_inference_abexa.htm'\))