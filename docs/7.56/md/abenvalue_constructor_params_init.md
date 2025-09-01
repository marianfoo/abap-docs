  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [VALUE, Value Operator](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstructor_expression_value.htm) → 

VALUE, Initial Value for All Types

Syntax

... VALUE dtype*|*#( ) ...

Effect

If no parameters are specified in the parentheses, the return value is set to its type-specific initial value. This is possible for any non-generic data types dtype. The # character can stand for corresponding statically recognizable operand types. When VALUE #( ) is passed to a generically typed formal parameter, the type is also derived from its generic type as follows:

-   string for csequence and clike
-   xstring for xsequence
-   decfloat34 for numeric and decfloat
-   p with the length 8 and no decimal places for generic p
-   The [standard key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_key_glosry.htm "Glossary Entry") for a standard table type with generic primary table key

Generic data types other than table types that are explicitly generic with respect to their secondary table keys cannot be made more concrete and produce a syntax error. This applies in particular to the types c, n, and x with generic lengths.

Hints

-   While VALUE with pass by value is used only to construct certain complex values (structures and internal tables), VALUE without pass by value, on the other hand, is a general method for creating type-dependent initial values in any operand positions.
-   The rules for derivations of the type where # is specified for actual parameters that are passed to generically typed formal parameters can prevent syntax errors in programs that call a procedure and in which the complete typing of a formal parameter is subsequently generalized by converting to a generic type.
-   If dtype or # stand for an [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry"), its initial value is created according to its [base type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbase_type_glosry.htm "Glossary Entry").

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
START-OF-SELECTION.
  c1=>m1( VALUE #( ) ).

Executable Example

[Value Operator, Type Inference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_type_inference_abexa.htm)

Continue
![Example](exa.gif "Example") [Value Operator, Type Inference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenvalue_type_inference_abexa.htm)