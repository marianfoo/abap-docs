---
title: "CONV, Type Inference for Actual Parameters"
description: |
  If a constructor expression CONV(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) #( let_exp(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm) dobj ) is passed to generically typed formal parameters as an act
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconv_constructor_inference.htm"
abapFile: "abenconv_constructor_inference.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abenconv", "constructor", "inference"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_assignments.htm) →  [CONV, Conversion Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CONV%2C%20Type%20Inference%20for%20Actual%20Parameters%2C%20ABENCONV_CONSTRUCTOR_INFERENCE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

CONV, Type Inference for Actual Parameters

If a constructor expression

[CONV](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_conv.htm) #( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaplet.htm)*\]* dobj )

is passed to generically typed formal parameters as an actual parameter using the character # as a symbol for the operand type, the following type inference is performed for the character #:

-   If the data type of the argument dobj is known and matches the generic type of the formal parameter, no conversion is performed, and the type of the argument is used instead.
-   If the data type of the argument dobj is known and is elementary, types are derived from it as follows for formal parameter types with generic lengths as follows:
    -   Generic type c
        
        c with the length of the argument in arguments of the types n, d, and t; c of the predefined [output length](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_output_length.htm) of the argument for all other argument types except strings; no type is derived for arguments of the types string and xtring
        
    -   Generic type n
        
        n with the length of the argument for arguments of the types n, d, and t and n with the length of a [conversion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_elementary.htm) of the argument to n for all other argument types except numeric types with decimal places and strings; no type is derived for arguments of the types decfloat16, decfloat34, f, and p with decimal places plus string and xtring
        
    -   Generic type x
        
        x with the rounded half length of the argument for arguments of the type c; x with the length 4 for all other argument types except strings; no type is derived for arguments of the types string and xtring
        
    -   Generic type p
        
        p without decimal places with the length 16 for arguments of the types decfloat16, decfloat34, f, string, or c and n with lengths greater than 15; p without decimal places with the length 8 for all other argument types
        
-   In other cases, the type is derived from the generic type of the formal parameter as follows:
    -   csequence and clike produce string
    -   xsequence produces xstring
    -   numeric and decfloat produce decfloat34
    -   p produces p with the length 8 and no decimal places
    -   Standard table type with generic primary table key produces a standard table with a [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry")

Other combinations of generic formal parameter types and arguments cannot be made more concrete in any meaningful way and produce a syntax error with the exception of table types that are explicitly generic with respect to their secondary table keys.

Syntax warnings that can be hidden using pragmas also indicate any redundant conversions resulting from the rules above.

Hint

The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.

Example

The operator CONV generates a result of type decfloat34 in this case. The generic parameter p has this type during the execution of the method, which is shown by the value e returned by [DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdescribe_field.htm). The method call produces a corresponding syntax warning.

CLASS demo1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main IMPORTING p TYPE numeric.
ENDCLASS.
CLASS demo1 IMPLEMENTATION.
  METHOD main.
    FINAL(t)  = CAST cl\_abap\_datadescr(
      cl\_abap\_typedescr=>describe\_by\_data(
        p ) )->type\_kind.
    cl\_demo\_output=>display( |{ p } of type { t }| ).
  ENDMETHOD.
ENDCLASS.
CLASS demo2 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo2 IMPLEMENTATION.
  METHOD main.
    FIELD-SYMBOLS <fs> TYPE any.
    ASSIGN 100 TO <fs>.
    demo1=>main( CONV #( <fs> ) ) ##TYPE.
  ENDMETHOD.
ENDCLASS.

Executable Example

[Conversion Operator, Type Inference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconv_type_inference_abexa.htm)

Continue
![Example](exa.gif "Example") [Conversion Operator, Type Inference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconv_type_inference_abexa.htm)