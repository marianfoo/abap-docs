  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

CONV - Conversion Operator

Syntax

... CONV type( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* dobj ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the conversion operator CONV [converts](javascript:call_link\('abentype_conversion_glosry.htm'\) "Glossary Entry") the argument dobj to the data type specified using type and creates an appropriate result. The following can be specified for type:

-   A non-generic data type dtype (with the exception of [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry")).

-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").

-   If the data type required in an operand position is unique and known completely, this type is used.

-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abenconv_constructor_inference.htm'\)).

-   In other cases, the character # cannot be specified.

The parentheses must contain precisely one unnamed argument dobj that can be converted to the data type type, with the following restriction: If dobj is specified as a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry"), type must be byte-like or character-like with the type c or string. dobj is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

The content of the result is determined by an assignment of the argument in accordance with the associated [conversion rule](javascript:call_link\('abenconversion_rules.htm'\)). For [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), special [rules](javascript:call_link\('abenconv_constructor_enum.htm'\)) apply. If dobj is compatible with the data type type, CONV does not need to be used and a syntax check warning is usually produced.

An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified before the data object to define local helper fields. If a LET expression is specified, a warning is produced after conversions to compatible types, since LET can be used to construct new values using helper variables.

Notes

-   The conversion operator CONV is suitable for avoiding the declaration of helper variables only needed to (for example)

-   specify type-friendly actual parameters.

-   specify the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") or the [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry") of a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry").

-   The argument of CONV can itself be a [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"), which means that CONV can be used within a calculation expression to transform results of subcalculations to a specific type.

-   No empty parentheses can be specified after CONV to construct an initial value of the specified type. The expression [VALUE #( )](javascript:call_link\('abenvalue_constructor_params_init.htm'\)) can be used to do this.

-   The conversion operator CONV closes the gap where the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) cannot be used to construct values for elementary data objects except for the initial value.

-   If a constructor expression with the conversion operator is used as a source field of an assignment where the same conversion takes place, it can be ignored and is removed when the program is compiled.

-   For reference types, the conversion operator CONV is not necessary, since these involve only castings and no conversions. The operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) is used for castings.

Example

The method CONVERT of the interface IF\_ABAP\_CONV\_OUT of the object created using the class CL\_ABAP\_CONV\_CODEPAGE expects the data type string for the input parameter SOURCE. CONV is used to convert a text field to this data type, directly in the operand position.

DATA text TYPE c LENGTH 255.
DATA(xstr) = cl\_abap\_conv\_codepage=>create\_out(
  )->convert( source = CONV string( text ) ).

Example

Even though the internal table itab in the method meth1 has the same row type as the table type of the parameter para of the method meth2, it cannot be passed directly due to its different table category and key. CONV is used to convert itab to the required table type.

CLASS class DEFINITION.
  PUBLIC SECTION.
    TYPES t\_itab TYPE STANDARD TABLE OF i
                 WITH EMPTY KEY.
    METHODS meth1.
  PRIVATE SECTION.
    METHODS meth2 IMPORTING para TYPE t\_itab.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD meth1.
    DATA itab TYPE SORTED TABLE OF i
              WITH NON-UNIQUE DEFAULT KEY.
    ...
    meth2( CONV #( itab ) ).
    ...
  ENDMETHOD.
  METHOD meth2.
    ...
  ENDMETHOD.
ENDCLASS.

Example

The two calculations produce different results. In the first case, the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is f and the end result is converted to i. In the second case, CONV converts each intermediate result to the calculation type i.

DATA int TYPE i.
int = sqrt( 5 ) + sqrt( 6 ).
int = CONV i( sqrt( 5 ) ) + CONV i( sqrt( 6 ) ).

Example

The first logical expression is false, as specified in the [comparison rules for character-like data types](javascript:call_link\('abenlogexp_character.htm'\)). CONV is used to alter the comparison type of the second comparison so that the comparison is true.

DATA txt TYPE abap\_bool.
DATA str TYPE string.
txt = ' ' .
str = \` \`.
IF txt = str.
  ...
ENDIF.
IF txt = CONV abap\_bool( str ).
  ...
ENDIF.

Continue
[CONV - Type Inference for Actual Parameters](javascript:call_link\('abenconv_constructor_inference.htm'\))
[CONV - Conversion of Enumerated Types](javascript:call_link\('abenconv_constructor_enum.htm'\))