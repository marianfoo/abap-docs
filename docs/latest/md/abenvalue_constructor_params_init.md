---
title: "VALUE, Initial Value for All Types"
description: |
  Syntax ... VALUE dtype#( ) ... Effect If no parameters are specified in the parentheses, the return value is set to its type-specific initial value. This is possible for any non-generic data types dtype. The # character can stand for corresponding statically recognizable operand types. When VALUE
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_constructor_params_init.htm"
abapFile: "abenvalue_constructor_params_init.htm"
keywords: ["do", "while", "if", "try", "method", "class", "data", "types", "internal-table", "abenvalue", "constructor", "params", "init"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [VALUE, Value Operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20VALUE%2C%20Initial%20Value%20for%20All%20Types%2C%20ABENVALUE_CONSTRUCTOR_PARAMS_INIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

VALUE, Initial Value for All Types

Syntax

... VALUE dtype*|*#( ) ...

Effect

If no parameters are specified in the parentheses, the return value is set to its type-specific initial value. This is possible for any non-generic data types dtype. The # character can stand for corresponding statically recognizable operand types. When VALUE #( ) is passed to a generically typed formal parameter, the type is also derived from its generic type as follows:

-   string for csequence and clike
-   xstring for xsequence
-   decfloat34 for numeric and decfloat
-   p with the length 8 and no decimal places for generic p
-   The [standard key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key

Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. This applies in particular to the types c, n, and x with generic lengths.

Hints

-   While VALUE with pass by value is used only to construct certain complex values (structures and internal tables), VALUE without pass by value, on the other hand, is a general method for creating type-dependent initial values in any operand positions.
-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   If dtype or # stand for an [enumerated type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry"), its initial value is created according to its [base type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbase_type_glosry.htm "Glossary Entry").

Example

Creation of a suitable initial structure for a non-optional input parameter of a method.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    TYPES: BEGIN OF t\_struct,
             col1 TYPE i,
             col2 TYPE i,
           END OF t\_struct.
    CLASS-METHODS m1 IMPORTING p TYPE t\_struct.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    ...
  ENDMETHOD.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    c1=>m1(  VALUE #( ) ).
  ENDMETHOD.
ENDCLASS.

Executable Example

[Value Operator, Type Inference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_type_inference_abexa.htm)

Continue
![Example](exa.gif "Example") [Value Operator, Type Inference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvalue_type_inference_abexa.htm)