  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_assignments.htm) → 

CONV - Conversion Operator

Syntax

... CONV type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm)*\]* dobj ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expressions.htm) with the conversion operator CONV [converts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentype_conversion_glosry.htm "Glossary Entry") the argument dobj to the data type specified using type and creates an appropriate result. The following can be specified for type:

-   A non-generic data type dtype (with the exception of [reference types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreference_type_glosry.htm "Glossary Entry")).

-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenoperand_type_glosry.htm "Glossary Entry").

-   If the data type required in an operand position is unique and known completely, this type is used.

-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconv_constructor_inference.htm).

-   In other cases, the character # cannot be specified.

The parentheses must contain precisely one unnamed argument dobj that can be converted to the data type type, with the following restriction: If dobj is specified as a [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry"), type must be byte-like or character-like with the type c or string. dobj is a [general expression position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

The content of the result is determined by an assignment of the argument in accordance with the associated [conversion rule](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_rules.htm). For [enumerated types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), special [rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconv_constructor_enum.htm) apply. If dobj is compatible with the data type type, CONV does not need to be used and a syntax check warning is usually produced.

Optionally, a LET expression [let\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaplet.htm) can be specified before the data object to define local helper fields. If a LET expression is specified, a warning is produced after conversions to compatible types, since LET can be used to construct new values using helper variables.

Notes

-   The conversion operator CONV is suitable for avoiding the declaration of helper variables only needed to (for example)

-   specify type-friendly actual parameters.

-   influence the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") of an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") or the [comparison type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencomparison_type_glosry.htm "Glossary Entry") of a [relational expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry").

-   The argument of CONV can itself be a [calculation expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), which means that CONV can be used within a calculation expression to transform results of subcalculations to a specific type.

-   No empty parentheses can be specified after CONV to construct an initial value of the specified type. The expression [VALUE #( )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_constructor_params_init.htm) can be used to do this.

-   The conversion operator CONV closes the gap where the value operator [VALUE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_value.htm) cannot be used to construct values for elementary data objects except for the initial value.

-   If a constructor expression with the conversion operator is used as a source field of an assignment where the same conversion takes place, it can be ignored and is removed when the program is compiled.

-   For reference types, the conversion operator CONV is not necessary, since these involve only castings and no conversions. The operator [CAST](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_cast.htm) is used for castings.

Example

The method CONVERT\_TO of the class CL\_ABAP\_CODEPAGE expects the data type string for the input parameter SOURCE. CONV is used to convert a text field to this data type, directly in the operand position.

DATA text TYPE c LENGTH 255.
DATA(xstr) = cl\_abap\_codepage=>convert\_to(
  source      = CONV string( text )
  codepage    = \`UTF-8\` ).

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

The two calculations produce different results. In the first case, the [calculation type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalculation_type_glosry.htm "Glossary Entry") is f and the end result is converted to i. In the second case, CONV converts each intermediate result to the calculation type i.

DATA int TYPE i.
int = sqrt( 5 ) + sqrt( 6 ).
int = CONV i( sqrt( 5 ) ) + CONV i( sqrt( 6 ) ).

Example

The first logical expression is false, as specified in the [comparison rules for character-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_character.htm). CONV is used to alter the comparison type of the second comparison so that the comparison is true.

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
[CONV - Type Inference for Actual Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconv_constructor_inference.htm)
[CONV - Conversion of Enumerated Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconv_constructor_enum.htm)