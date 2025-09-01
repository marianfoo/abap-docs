# ABAP - Keyword Documentation / ABAP - Programming Language / Processing Internal Data / Assignments / CONV, Conversion Operator

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenconstructor_expression_conv.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm)
- [abenconv_constructor_inference.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_inference.htm)
- [abenconv_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_type_inference_abexa.htm)
- [abenconv_constructor_enum.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)
- [abenconv_enum_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_enum_abexa.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.752Z

---

### abenconstructor_expression_conv.htm

> **📖 Official SAP Documentation**: [abenconstructor_expression_conv.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) → 

CONV, Conversion Operator

Syntax

... CONV type( *\[*[let\_exp](javascript:call_link\('abaplet.htm'\))*\]* dobj ) ...

Effect

A [constructor expression](javascript:call_link\('abenconstructor_expressions.htm'\)) with the conversion operator CONV [converts](javascript:call_link\('abentype_conversion_glosry.htm'\) "Glossary Entry") the argument dobj to the data type specified using type and creates an appropriate result. The following can be specified for type:

-   A non-generic data type dtype (with the exception of [reference types](javascript:call_link\('abenreference_type_glosry.htm'\) "Glossary Entry")).

-   The # character as a symbol for the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry").

-   If the data type required in an operand position is unique and known completely, this type is used.

-   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](javascript:call_link\('abenconv_constructor_inference.htm'\)).

-   In other cases, the character # cannot be specified.

The parentheses must contain exactly one unnamed argument dobj that can be converted to the data type type, with the following restriction: If dobj is specified as a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry"), type must be byte-like or character-like with the type c or string. dobj is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry").

The content of the result is determined by an assignment of the argument in accordance with the associated [conversion rule](javascript:call_link\('abenconversion_rules.htm'\)). For [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), special [rules](javascript:call_link\('abenconv_constructor_enum.htm'\)) apply. If dobj is compatible with the data type type, CONV does not need to be used and a syntax check warning is usually produced.

An optional LET expression [let\_exp](javascript:call_link\('abaplet.htm'\)) can be specified in front of the data object to define local helper fields. If a LET expression is specified, no warning is produced in conversions to compatible types, since LET can be used to construct new values using helper variables.

Hints

-   The conversion operator CONV is suitable for avoiding the declaration of helper variables that are only necessary to, for example

-   specify type-compliant actual parameters.

-   affect the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry") or the [comparison type](javascript:call_link\('abencomparison_type_glosry.htm'\) "Glossary Entry") of a [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry").

-   The argument of CONV can itself be a [calculation expression](javascript:call_link\('abencalculation_expression_glosry.htm'\) "Glossary Entry"), which means that CONV can be used within a calculation expression to transform results of partial calculations into a specific type.

-   No empty parentheses can be specified after CONV to construct an initial value of the specified type. The expression [VALUE #( )](javascript:call_link\('abenvalue_constructor_params_init.htm'\)) can be used to do this.

-   The conversion operator CONV closes the gap where the value operator [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)) cannot be used to construct values for elementary data objects except for the initial value.

-   If a constructor expression with the conversion operator is used as a source field of an assignment in which the same conversion takes place, it is not necessary and is removed when the program is compiled.

-   For reference types, the conversion operator CONV is not necessary, since these involve only castings and no conversions. The operator [CAST](javascript:call_link\('abenconstructor_expression_cast.htm'\)) is used for castings.

Example

The method CONVERT of the interface IF\_ABAP\_CONV\_OUT of the object created using the class CL\_ABAP\_CONV\_CODEPAGE expects the data type string for the input parameter SOURCE. CONV is used to convert a text field to this data type, directly in the operand position.

DATA text TYPE c LENGTH 255.
DATA(xstr) = cl\_abap\_conv\_codepage=>create\_out(
  )->convert( source = CONV string( text ) ).

Example

Even though the internal table itab in the method meth1 has the same line type as the table type of the parameter para of the method meth2, it cannot be passed directly due to the different table type and key. CONV is used to convert itab to the required table type.

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

The two calculations produce different results. In the first case, the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is f and the end result is converted to i. In the second case, CONV converts each interim result to the calculation type i.

DATA int TYPE i.
int = sqrt( 5 ) + sqrt( 6 ).
int = CONV i( sqrt( 5 ) ) + CONV i( sqrt( 6 ) ).

Example

The first logical expression is false, as specified in the [comparison rules for character-like data types](javascript:call_link\('abenlogexp_character.htm'\)). CONV is used to affect the comparison type of the second comparison so that the comparison is true.

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
[CONV, Type Inference for Actual Parameters](javascript:call_link\('abenconv_constructor_inference.htm'\))
[CONV, Conversion of Enumerated Types](javascript:call_link\('abenconv_constructor_enum.htm'\))



**📖 Source**: [abenconstructor_expression_conv.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_conv.htm)

### abenconv_constructor_inference.htm

> **📖 Official SAP Documentation**: [abenconv_constructor_inference.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_inference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) → 

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

The operator CONV generates a result of type decfloat34 in this case. The generic parameter p has this type during the execution of the method, which is shown by the value "e" returned by [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). The method call leads to a corresponding syntax warning.

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



**📖 Source**: [abenconv_constructor_inference.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_inference.htm)

### abenconv_type_inference_abexa.htm

> **📖 Official SAP Documentation**: [abenconv_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_type_inference_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) →  [CONV, Type Inference for Actual Parameters](javascript:call_link\('abenconv_constructor_inference.htm'\)) → 

Conversion Operator, Type Inference

This example demonstrates the type inference for the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)).

Source Code

REPORT demo\_conv\_type\_inference.
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
    demo=>meth1( p = CONV #( txt  ) ) ##operator.
    demo=>meth1( p = CONV #( num  ) ).
    demo=>meth1( p = CONV #( <fs> ) ).
    cl\_demo\_output=>line( ).
    demo=>meth2( p = CONV #( txt  ) ) ##operator.
    demo=>meth2( p = CONV #( num  ) ).
   "demo=>meth2( p = CONV #( <fs> ) ). "not possible
    cl\_demo\_output=>line( ).
    demo=>meth3( p = CONV #( txt  ) ) ##operator.
    demo=>meth3( p = CONV #( num  ) ) ##type.
    demo=>meth3( p = CONV #( <fs> ) ) ##type.
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

Constructor expressions with the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) are passed to differently typed formal parameters of methods. In the case of generic formal parameters, [special rules](javascript:call_link\('abenconv_constructor_inference.htm'\)) apply when determining the operand type.

-   Completely typed formal parameter

When the method meth1 is called with a completely typed formal parameter, the operand type for # is determined using this parameter and in all three calls there is a conversion to c with length 10, whereby the first conversion is redundant here.

-   Formal parameter typed generically with c

The operand type for # is determined from the argument.

-   In the first call, the type c with length 20 of the argument matches the generic type and is used, which is why this conversion is redundant.

-   In the second call, the type i does not match the generic type and the type c with the predefined [output length](javascript:call_link\('abenwrite_output_length.htm'\)) 11 of i is used.

-   Calls with the generically typed field symbol <fs> are not possible, since no type can be derived from the argument.

-   Formal parameter typed generically with csequence

-   In the first call, the type c with length 20 of the argument matches the generic type and is used, which is why this conversion is redundant.

-   In the second call, the type i does not match the generic type and the type string is used, which is indicated by a syntax check warning.

-   In the third call, no type can be determined from the generically typed field symbol <fs> and the type string is used, which is indicated by a syntax check warning.



**📖 Source**: [abenconv_type_inference_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_type_inference_abexa.htm)

### abenconv_constructor_inference.htm

> **📖 Official SAP Documentation**: [abenconv_constructor_inference.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_inference.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) → 

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

The operator CONV generates a result of type decfloat34 in this case. The generic parameter p has this type during the execution of the method, which is shown by the value "e" returned by [DESCRIBE FIELD](javascript:call_link\('abapdescribe_field.htm'\)). The method call leads to a corresponding syntax warning.

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



**📖 Source**: [abenconv_constructor_inference.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_inference.htm)

### abenconv_constructor_enum.htm

> **📖 Official SAP Documentation**: [abenconv_constructor_enum.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) → 

CONV, Conversion of Enumerated Types

If the constructor expression [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) is used on [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), the following rules apply:

-   If the argument dobj is an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") enum\_dobj and type corresponds exactly to the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") base\_type of the enumerated type, the result is the actual [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") of the argument.

... CONV base\_type( enum\_dobj ) ...

-   If type is an enumerated type enum\_type, the following can be specified for the argument dobj:

-   A data object of the same elementary type as the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type, with any length and number of decimal places

-   An expression allowed at this position whose result can be converted to the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type

If the argument represents a valid [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry"), the result is a temporary [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") with this value. If the value is not valid, an exception CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE occurs.

... CONV enum\_type( dobj ) ...

In all other cases, the normal [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)) also apply for CONV, where enumerated types can only be converted to the character-like types c and string and no types can be converted to enumerated types.

Short form:

If the enumerated type of an enumerated object enum\_dobj has the same base type base\_type as any other enumerated type enum\_type and the enumerated value in the enumerated variable is also defined in enum\_type, it is possible, according to the above rules, to nest constructor expressions CONV as follows:

CONV enum\_type( CONV base\_type( enum\_dobj ) )

The following short form can also be used for the nesting:

CONV enum\_type( enum\_dobj )

The result is the enumerated value from enum\_dobj with the data type enum\_type.

Hints

-   Using CONV for enumerated types deviates from the rule that CONV always behaves according to the normal conversion rules in assignments.

-   If the argument is an enumerated type with a character-like [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"), and this base type is specified as type, the special rule above applies instead of the general conversion rule. That is, the enumerated value is returned, not the name.

-   Corresponding [rules](javascript:call_link\('abenexact_constructor_enum.htm'\)) apply to the lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)).

Example

The first three assignments to the fields text1, text2, and text3 follow the normal [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)) for enumerated type to character-like. The result in each case is the name BLUE.

A direct assignment of the enumerated constant blue to a field value1 of type i is not possible. The conversion operator CONV returns the actual enumerated value 1 for the base type i.

It is also not possible to assign the value 1 of type i to an enumerated variable color1 with enumerated type color. However, the conversion operator CONV returns an enumerated value for the type color if the argument has the base type i and a allowed value.

TYPES:
  BEGIN OF ENUM color,
    red, blue, green,
  END OF ENUM color.
DATA: text1 TYPE string,
      text2 TYPE string.
text1 = blue.
text2 = CONV #( blue ).
DATA(text3) = CONV string( blue ).
ASSERT text1 = text2.
ASSERT text1 = text3.
DATA: value1 TYPE i,
      value2 TYPE i.
"value1 = blue.
value2 = CONV #( blue ).
DATA(value3) = CONV i( blue ).
ASSERT value2 = value3.
DATA: color1 TYPE color,
      color2 TYPE color.
"color1 = 1.
color2 = CONV #( 1 ).
DATA(color3) = CONV color( 1 ).
ASSERT color2 = color3.
cl\_demo\_output=>display( |Name:  { color3
                       }\\nValue: { value3 }| ).

Example

The short form

CONV animal( peach )

of the conversion operator CONV acts like

CONV animal( CONV i( peach ) )

It creates the value 2 from the enumerated constant peach of the enumerated type fruit, which can be assigned to the enumerated variable animal with enumerated type animal. The output shows the associated name DOG.

TYPES:
  BEGIN OF ENUM fruit,
    apple, peach, orange,
  END OF ENUM fruit.
TYPES:
  BEGIN OF ENUM animal,
    cat, dog, cow,
  END OF ENUM animal.
cl\_demo\_output=>display( CONV animal( peach ) ).

Example

The example shows the difference between the normal [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)) and using the conversion operator CONV for a character-like base type:

-   In assignments to result1, the normal conversion rules apply and the name SECOND is assigned.

-   In assignments to result2, the special rule for CONV with the specification of the base type applies and the enumerated value aaaaaaaa is assigned.

TYPES:
  char8 TYPE c LENGTH 8,
  BEGIN OF ENUM text BASE TYPE char8,
    first  VALUE IS INITIAL,
    second VALUE 'aaaaaaaa',
    third  VALUE 'bbbbbbbb',
  END OF ENUM text.
DATA: result1 TYPE char8,
      result2 TYPE char8.
result1 = second.
result2 = CONV #( second ).
cl\_demo\_output=>display(
  |result1: { result1 }\\nresult2: { result2 }| ).

Executable Example

[Conversion Operator, Enumerated Types](javascript:call_link\('abenconv_enum_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Conversion Operator, Enumerated Types](javascript:call_link\('abenconv_enum_abexa.htm'\))



**📖 Source**: [abenconv_constructor_enum.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)

### abenconv_enum_abexa.htm

> **📖 Official SAP Documentation**: [abenconv_enum_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_enum_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) →  [CONV, Conversion of Enumerated Types](javascript:call_link\('abenconv_constructor_enum.htm'\)) → 

Conversion Operator, Enumerated Types

This example demonstrates the use of the conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) for enumerated types.

Source Code

REPORT demo\_conv\_enum.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TYPES:
      BEGIN OF ENUM planet,
        mercury,
        venus,
        earth,
        mars,
        jupiter,
        saturn,
        uranus,
        neptune,
      END OF ENUM planet.
    DATA number TYPE i.
    cl\_demo\_input=>request( CHANGING field = number ).
    TRY.
        DATA(planet) = CONV planet( CONV i( earth ) + number ).
        cl\_demo\_output=>display( planet ).
      CATCH cx\_sy\_conversion\_no\_enum\_value.
        cl\_demo\_output=>display( 'Enter a number between -2 and 5' ).
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The inner conversion operator [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) return the value of the enumerated constant earth in the base type i of the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") planet. An input value is added to this. Applying the conversion operator to the result determines a planet, which has the specified distance of earth.



**📖 Source**: [abenconv_enum_abexa.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_enum_abexa.htm)

### abenconv_constructor_enum.htm

> **📖 Official SAP Documentation**: [abenconv_constructor_enum.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenconv_constructor_enum.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconv_constructor_enum.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [CONV, Conversion Operator](javascript:call_link\('abenconstructor_expression_conv.htm'\)) → 

CONV, Conversion of Enumerated Types

If the constructor expression [CONV](javascript:call_link\('abenconstructor_expression_conv.htm'\)) is used on [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry"), the following rules apply:

-   If the argument dobj is an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") enum\_dobj and type corresponds exactly to the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") base\_type of the enumerated type, the result is the actual [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry") of the argument.

... CONV base\_type( enum\_dobj ) ...

-   If type is an enumerated type enum\_type, the following can be specified for the argument dobj:

-   A data object of the same elementary type as the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type, with any length and number of decimal places

-   An expression allowed at this position whose result can be converted to the [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry") of the enumerated type

If the argument represents a valid [enumerated value](javascript:call_link\('abenenumerated_value_glosry.htm'\) "Glossary Entry"), the result is a temporary [enumerated variable](javascript:call_link\('abenenumerated_variable_glosry.htm'\) "Glossary Entry") with this value. If the value is not valid, an exception CX\_SY\_CONVERSION\_NO\_ENUM\_VALUE occurs.

... CONV enum\_type( dobj ) ...

In all other cases, the normal [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)) also apply for CONV, where enumerated types can only be converted to the character-like types c and string and no types can be converted to enumerated types.

Short form:

If the enumerated type of an enumerated object enum\_dobj has the same base type base\_type as any other enumerated type enum\_type and the enumerated value in the enumerated variable is also defined in enum\_type, it is possible, according to the above rules, to nest constructor expressions CONV as follows:

CONV enum\_type( CONV base\_type( enum\_dobj ) )

The following short form can also be used for the nesting:

CONV enum\_type( enum\_dobj )

The result is the enumerated value from enum\_dobj with the data type enum\_type.

Hints

-   Using CONV for enumerated types deviates from the rule that CONV always behaves according to the normal conversion rules in assignments.

-   If the argument is an enumerated type with a character-like [base type](javascript:call_link\('abenbase_type_glosry.htm'\) "Glossary Entry"), and this base type is specified as type, the special rule above applies instead of the general conversion rule. That is, the enumerated value is returned, not the name.

-   Corresponding [rules](javascript:call_link\('abenexact_constructor_enum.htm'\)) apply to the lossless operator [EXACT](javascript:call_link\('abenconstructor_expression_exact.htm'\)).

Example

The first three assignments to the fields text1, text2, and text3 follow the normal [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)) for enumerated type to character-like. The result in each case is the name BLUE.

A direct assignment of the enumerated constant blue to a field value1 of type i is not possible. The conversion operator CONV returns the actual enumerated value 1 for the base type i.

It is also not possible to assign the value 1 of type i to an enumerated variable color1 with enumerated type color. However, the conversion operator CONV returns an enumerated value for the type color if the argument has the base type i and a allowed value.

TYPES:
  BEGIN OF ENUM color,
    red, blue, green,
  END OF ENUM color.
DATA: text1 TYPE string,
      text2 TYPE string.
text1 = blue.
text2 = CONV #( blue ).
DATA(text3) = CONV string( blue ).
ASSERT text1 = text2.
ASSERT text1 = text3.
DATA: value1 TYPE i,
      value2 TYPE i.
"value1 = blue.
value2 = CONV #( blue ).
DATA(value3) = CONV i( blue ).
ASSERT value2 = value3.
DATA: color1 TYPE color,
      color2 TYPE color.
"color1 = 1.
color2 = CONV #( 1 ).
DATA(color3) = CONV color( 1 ).
ASSERT color2 = color3.
cl\_demo\_output=>display( |Name:  { color3
                       }\\nValue: { value3 }| ).

Example

The short form

CONV animal( peach )

of the conversion operator CONV acts like

CONV animal( CONV i( peach ) )

It creates the value 2 from the enumerated constant peach of the enumerated type fruit, which can be assigned to the enumerated variable animal with enumerated type animal. The output shows the associated name DOG.

TYPES:
  BEGIN OF ENUM fruit,
    apple, peach, orange,
  END OF ENUM fruit.
TYPES:
  BEGIN OF ENUM animal,
    cat, dog, cow,
  END OF ENUM animal.
cl\_demo\_output=>display( CONV animal( peach ) ).

Example

The example shows the difference between the normal [conversion rules](javascript:call_link\('abenconversion_enumerated.htm'\)) and using the conversion operator CONV for a character-like base type:

-   In assignments to result1, the normal conversion rules apply and the name SECOND is assigned.

-   In assignments to result2, the special rule for CONV with the specification of the base type applies and the enumerated value aaaaaaaa is assigned.

TYPES:
  char8 TYPE c LENGTH 8,
  BEGIN OF ENUM text BASE TYPE char8,
    first  VALUE IS INITIAL,
    second VALUE 'aaaaaaaa',
    third  VALUE 'bbbbbbbb',
  END OF ENUM text.
DATA: result1 TYPE char8,
      result2 TYPE char8.
result1 = second.
result2 = CONV #( second ).
cl\_demo\_output=>display(
  |result1: { result1 }\\nresult2: { result2 }| ).

Executable Example

[Conversion Operator, Enumerated Types](javascript:call_link\('abenconv_enum_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Conversion Operator, Enumerated Types](javascript:call_link\('abenconv_enum_abexa.htm'\))
