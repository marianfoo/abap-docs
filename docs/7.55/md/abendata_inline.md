  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Inline Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declarations.htm) → 

DATA, Inline Declaration

Syntax

... DATA(var) ...

Effect

A declaration expression with the declaration operator DATA declares a [variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvariable_glosry.htm "Glossary Entry") var that is used as an operand in the current [write position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenwriting_position_glosry.htm "Glossary Entry"). The declared variable is visible statically in the program as of DATA(var) and is valid in the current [context](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobj_context_glosry.htm "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator DATA can be listed in any designated [declaration position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_positions.htm). The date type of the variable is determined by the [operand type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperand_type_glosry.htm "Glossary Entry"). It must be possible to derive this type completely statically.

A variable var declared inline cannot be used in a read position of the same statement.

If a data object called data already exists in the current context, DATA(var) is interpreted as a [substring access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoffset_length.htm) and not as an inline declaration. A syntax warning indicates this. DATA(var) only works as an inline declaration if there is no data object called data yet.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_inline_guidl.htm "Guideline").

Hints

-   A valid statement with an inline declaration of a variable can generally be interpreted as a short form for a declaration statement used as a direct prefix.

DATA var TYPE ...
... var ...

Deviations from this rule occur only if an identically named data object of a more global context is used in the same statement. This is still valid in the statement and is only hidden after the statement.

-   Just like the statement DATA, an inline declaration does not open a local context for the current statement block. An inline declaration for a variable can only be made once within a context and the variable must not have been declared there using DATA.

-   An inline declaration can never occur on the right-hand side of an assignment or within an expression.

-   The operand position and the types of other operands can be included in the static derivation of the operand type. If the type of a different operand cannot be identified statically, for example because it is specified as a generically typed field symbol, either a suitable [standard type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_type_glosry.htm "Glossary Entry") is used or no inline declaration is possible.

-   If the operand type is defined by reference to a data type of the ABAP Dictionary, it is transferred with its semantic attributes, such as field help, input help, or conversion routines.

-   If multiple equally valid operand types are possible in a [declaration position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_positions.htm), the recommended preferred data type is generally used.

Example

Inline declaration of an internal table as the target field of an assignment and inline declaration of an appropriate work area in a LOOP.

TYPES t\_itab TYPE TABLE OF i
             WITH NON-UNIQUE KEY table\_line.
DATA(itab) = VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ).
LOOP AT itab INTO DATA(wa).
  ...
ENDLOOP.

Example

Inline declaration of an internal table as a target field of a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement and inline declaration of a variable for the table transformed to HTML. The data type of the variable is determined by the return value of the method.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
DATA(html) = cl\_demo\_output=>get( itab ).

Example

If a data object called data does not exist in the current context, the first statement is an inline declaration and the second statement executes a substring access.

DATA(data) = '1'.
DATA(data) = '2'.