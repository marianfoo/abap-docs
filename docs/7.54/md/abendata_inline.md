  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Inline Declarations](javascript:call_link\('abeninline_declarations.htm'\)) → 

DATA - Inline Declaration

Syntax

... DATA(var) ...

Effect

A declaration expression with the declaration operator DATA declares a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") var used as an operand in the current [writing position](javascript:call_link\('abenwriting_position_glosry.htm'\) "Glossary Entry"). The declared variable is visible statically in the program from the location DATA(var) and is valid in the current [context](javascript:call_link\('abencontext_2_glosry.htm'\) "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator DATA can be specified in every compatible [declaration position](javascript:call_link\('abendeclaration_positions.htm'\)). The date type of the variable is determined by the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry"). It must be possible to derive this type statically in full.

A variable var declared inline cannot be used in a reading position of the same statement.

If a data object called data already exists in the current context, DATA(var) is interpreted as a [substring access](javascript:call_link\('abenoffset_length.htm'\)) and not as an inline declaration. A syntax warning indicates this. DATA(var) is interpreted as an inline declaration only if there is no data object called data.

Programming Guideline

[Only use inline declarations locally](javascript:call_link\('abendeclaration_inline_guidl.htm'\) "Guideline").

Notes

-   A valid statement with an inline declaration of a variable can generally be interpreted as a short form for a declaration statement used as a direct prefix.

DATA var TYPE ...
... var ...

Exceptions to this rule occur only if an identically named data object from a more global context is used in the same statement. This data object is still valid in the statement and is only obscured after the statement.

-   Just like the statement DATA, an inline declaration does not open a local context for the current statement block. An inline declaration for a variable can only be made once within a context and the variable cannot yet be declared there using DATA.

-   An inline declaration cannot occur on the right-hand side of an assignment or within an expression.

-   The operand position and the types of other operands can be included in the static derivation of the operand type. If the type of a different operand cannot be identified statically (perhaps because it is specified as a generically typed field symbol), either a suitable [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") is used or no inline declaration is possible.

-   If the operand type is defined by reference to a data type in ABAP Dictionary, it is used together with its semantic attributes, such as field help, input help, or conversion routines.

-   If more than one equally valid operand type is possible in the same [declaration position](javascript:call_link\('abendeclaration_positions.htm'\)), the recommended preferred data type is generally used.

Example

Inline declaration of an internal table as a target field of an assignment and inline declaration of an appropriate work area in a LOOP.

TYPES t\_itab TYPE TABLE OF i
             WITH NON-UNIQUE KEY table\_line.
DATA(itab) = VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ).
LOOP AT itab INTO DATA(wa).
  ...
ENDLOOP.

Example

Inline declaration of an internal table as a target field of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement and inline declaration of a variable for the table transformed to HTML. The data type of the variable is determined by the return value of the method.

SELECT \*
       FROM scarr
       INTO TABLE @DATA(itab).
DATA(html) = cl\_demo\_output=>get( itab ).

Example

If a data object called data does not exist in the current context, the first statement is an inline declaration and the second statement executes a substring access.

DATA(data) = '1'.
DATA(data) = '2'.