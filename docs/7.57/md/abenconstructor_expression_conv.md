---
title: "CONV, Conversion Operator"
description: |
  Syntax ... CONV type( let_exp(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm) dobj ) ... Effect A constructor expression(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expressions.htm) with the conversion operator CONV converts(https
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_conv.htm"
abapFile: "abenconstructor_expression_conv.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenconstructor", "expression", "conv"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_assignments.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONV, Conversion Operator, ABENCONSTRUCTOR_EXPRESSION_CONV, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CONV, Conversion Operator

Syntax

... CONV type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm)*\]* dobj ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expressions.htm) with the conversion operator CONV [converts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_conversion_glosry.htm "Glossary Entry") the argument dobj to the data type specified using type and creates an appropriate result. The following can be specified for type:

-   A non-generic data type dtype (with the exception of [reference types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenreference_type_glosry.htm "Glossary Entry")).
-   The # character as a symbol for the [operand type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenoperand_type_glosry.htm "Glossary Entry").
    -   If the data type required in an operand position is unique and known completely, this type is used.
    -   If the constructor expression is passed to an actual parameter with a generically typed formal parameter, the operand type is derived in accordance with [special rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconv_constructor_inference.htm).
    -   In other cases, the character # cannot be specified.

The parentheses must contain exactly one unnamed argument dobj that can be converted to the data type type, with the following restriction: If dobj is specified as a [bit expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_expression_glosry.htm "Glossary Entry"), type must be byte-like or character-like with the type c or string. dobj is a [general expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry").

The content of the result is determined by an assignment of the argument in accordance with the associated [conversion rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_rules.htm). For [enumerated types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), special [rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconv_constructor_enum.htm) apply. If dobj is compatible with the data type type, CONV does not need to be used and a syntax check warning is usually produced.

An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaplet.htm) can be specified in front of the data object to define local helper fields. If a LET expression is specified, no warning is produced in conversions to compatible types, since LET can be used to construct new values using helper variables.

Hints

-   The conversion operator CONV is suitable for avoiding the declaration of helper variables that are only necessary to do the following, for example
    -   specify type-compliant actual parameters.
    -   affect the [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") of an [arithmetic expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry") or the [comparison type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencomparison_type_glosry.htm "Glossary Entry") of a [relational expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrelational_expression_glosry.htm "Glossary Entry").
-   The argument of CONV can itself be a [calculation expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_expression_glosry.htm "Glossary Entry"), which means that CONV can be used within a calculation expression to transform results of partial calculations into a specific type.
-   No empty parentheses can be specified after CONV to construct an initial value of the specified type. The expression [VALUE #( )](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenvalue_constructor_params_init.htm) can be used to do this.
-   The conversion operator CONV closes the gap where the value operator [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_value.htm) cannot be used to construct values for elementary data objects except for the initial value.
-   If a constructor expression with the conversion operator is used as a source field of an assignment in which the same conversion takes place, it is not necessary and is removed when the program is compiled.
-   For reference types, the conversion operator CONV is not necessary, since these involve only castings and no conversions. The operator [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm) is used for castings.

Example

The method CONVERT of the interface IF\_ABAP\_CONV\_OUT of the object created using the class CL\_ABAP\_CONV\_CODEPAGE expects the data type string for the input parameter SOURCE. CONV is used to convert a text field to this data type, directly in the operand position.

DATA text TYPE c LENGTH 255.
FINAL(xstr) = cl\_abap\_conv\_codepage=>create\_out(
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

The two calculations produce different results. In the first case, the [calculation type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencalculation_type_glosry.htm "Glossary Entry") is f and the end result is converted to i. In the second case, CONV converts each interim result to the calculation type i.

DATA int TYPE i.
int = sqrt( 5 ) + sqrt( 6 ).
int = CONV i( sqrt( 5 ) ) + CONV i( sqrt( 6 ) ).

Example

The first logical expression is false, as specified in the [comparison rules for character-like data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_character.htm). CONV is used to modify the comparison type of the second comparison so that the comparison is true.

DATA txt TYPE abap\_bool.
DATA str TYPE string.
txt = ' '.
str = \` \`.
IF txt = str.
  ...
ENDIF.
IF txt = CONV abap\_bool( str ).
  ...
ENDIF.

Continue
[CONV, Type Inference for Actual Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconv_constructor_inference.htm)
[CONV, Conversion of Enumerated Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconv_constructor_enum.htm)