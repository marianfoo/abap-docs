  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenvalue_assignments.htm) →  [Lossless Assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_move.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EXACT%2C%20Lossless%20Operator%2C%20ABENCONSTRUCTOR_EXPRESSION_EXACT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EXACT, Lossless Operator

Syntax

... EXACT type( *\[*[let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm)*\]* dobj ) ...

Effect

A [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expressions.htm) with the lossless operator EXACT performs either a [lossless assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_move.htm) or a [lossless calculation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_calculation.htm), depending on the specified argument dobj, and creates a result with the data type type. The following can be specified for type:

-   A non-generic data type dtype, apart from [reference types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreference_type_glosry.htm "Glossary Entry").
-   The # character for a data type that is determined in accordance with the following hierarchy:
    -   If the data type required in an operand position is unique and known completely, the [operand type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperand_type_glosry.htm "Glossary Entry") is used. The operand type can also be generic, and the current type is used at runtime.
    -   If the data type cannot be derived from the context, the calculation type decfloat34 is used in lossless calculations and the data type of the argument is used in lossless assignments.

The parentheses must contain exactly one unnamed argument dobj that can be converted to the data type type. dobj is a [general expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The content of the result is determined as follows:

-   If the argument dobj is specified as an [arithmetic expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), the expression is calculated in accordance with the rules for a [lossless assignment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlossless_calculation.htm) and the result with the calculation type decfloat34 is converted to the data type type.
-   In all other cases, the content of the result is determined by an assignment of the argument in accordance with the associated [conversion rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconversion_rules.htm), during which a check is performed in accordance with the [rules of lossless assignments](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_exact.htm).

In the case of a value loss, the corresponding exception is raised in both cases. If the argument is compatible with the data type type in a lossless assignment, EXACT does not perform any checks and a syntax check warning occurs. For [enumerated types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenenum_type_glosry.htm "Glossary Entry"), additional special [rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexact_constructor_enum.htm) apply.

An optional LET expression [let\_exp](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaplet.htm) can be specified before the argument to define local helper fields.

Hint

The lossless operator EXACT replaces the identically named addition of the obsolete statements [MOVE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmove_obs.htm) and [COMPUTE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcompute.htm).

Example

Lossless assignment. Here, the exception CX\_SY\_CONVERSION\_ERROR is raised, because the argument contains an invalid value.

TYPES numtext TYPE n LENGTH 255.
TRY.
    FINAL(number) = EXACT numtext( '4 Apples + 2 Oranges' ).
  CATCH cx\_sy\_conversion\_error INTO FINAL(exc).
    ...
ENDTRY.

Example

Lossless assignment with generic types. The first method call produces a successful assignment and the second raises the exception CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP. If the assignment is replaced with p2 = EXACT #( + p1 ), a lossless calculation is produced and no exception is raised.

CLASS c1 DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS m1 IMPORTING p1 TYPE data
                     EXPORTING p2 TYPE data.
ENDCLASS.
CLASS exa DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS c1 IMPLEMENTATION.
  METHOD m1.
    DATA arg TYPE i.
    TRY.
        p2 = EXACT #( p1 ) ##operator.
        cl\_demo\_output=>display\_data( p2 ).
      CATCH cx\_sy\_conversion\_exact\_not\_sup
            cx\_sy\_conversion\_error INTO FINAL(err).
        cl\_demo\_output=>display\_text( err->get\_text( ) ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
CLASS exa IMPLEMENTATION.
  METHOD main.
    DATA: date TYPE d,
          text TYPE string.
    FINAL(time) = cl\_demo\_date\_time=>get\_user\_time( ).
    c1=>m1( EXPORTING p1 = time
            IMPORTING p2 = text ).
    c1=>m1( EXPORTING p1 = time
            IMPORTING p2 = date ).
  ENDMETHOD.
ENDCLASS.

Example

Lossless calculation. Here, the exception CX\_SY\_CONVERSION\_ROUNDING is raised, because the calculation is not lossless. The rounded result is assigned to the inline declared variable rounded\_result.

TRY.
    FINAL(exact\_result) = EXACT #( 3 \* ( 1 / 3 ) ).
  CATCH cx\_sy\_conversion\_rounding INTO FINAL(exc).
    FINAL(rounded\_result) = exc->value.
ENDTRY.

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_CONVERSION\_EXACT\_NOT\_SUP

-   Cause: Invalid combination of types or lengths.
    Runtime error: CONVT\_NOT\_SUPPORTED

Continue
[EXACT, Lossless Conversion of Enumerated Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexact_constructor_enum.htm)