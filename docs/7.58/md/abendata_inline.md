  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Inline Declarations](javascript:call_link\('abeninline_declarations.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20Inline%20Declaration%20for%20Variables%2C%20ABENDATA_INLINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, Inline Declaration for Variables

Syntax

... DATA(var) ...

Effect

A declaration expression with the declaration operator DATA declares a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") var that is used as an operand in the current [write position](javascript:call_link\('abenwrite_position_glosry.htm'\) "Glossary Entry"). The declared variable is visible statically in the program as of DATA(var) and is valid in the current [context](javascript:call_link\('abenobj_context_glosry.htm'\) "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator DATA can be specified in any designated [declaration position](javascript:call_link\('abendeclaration_positions.htm'\)). The date type of the variable is determined by the [operand type](javascript:call_link\('abenoperand_type_glosry.htm'\) "Glossary Entry"). It must be possible to derive this type completely statically.

A variable var declared inline cannot be used in a read position of the same statement.

If a data object called data already exists in the current context, DATA(var) is interpreted as a [substring access](javascript:call_link\('abenoffset_length.htm'\)) and not as an inline declaration. A syntax warning indicates this. DATA(var) only works as an inline declaration if there is no data object called data yet.

Programming Guideline

[Only use inline declarations locally](javascript:call_link\('abendeclaration_inline_guidl.htm'\) "Guideline").

Hints

-   A valid statement with an inline declaration of a variable can generally be interpreted as a short form for a declaration statement used as a direct prefix.
    
    DATA var TYPE ...
    ... var ...
    
    Deviations from this rule occur only if an identically named data object of a more global context is used in the same statement. This is still valid in the statement and is only hidden after the statement.
    
-   Just like the statement DATA, an inline declaration does not open a local context for the current statement block. An inline declaration for a variable can only be made once within a context and the variable must not have been declared there using DATA.
-   An inline declaration can never occur on the right-hand side of an assignment or within an expression.
-   The operand position and the types of other operands can be included in the static derivation of the operand type. If the type of a different operand cannot be identified statically, for example because it is specified as a generically typed field symbol, either a suitable [standard type](javascript:call_link\('abenstandard_type_glosry.htm'\) "Glossary Entry") is used or no inline declaration is possible.
-   If the operand type is defined by reference to a data type of the ABAP Dictionary, it is inherited with its semantic properties, such as field help, input help, or conversion exits.
-   If multiple equally valid operand types are possible in a [declaration position](javascript:call_link\('abendeclaration_positions.htm'\)), the recommended preferred data type is generally used.
-   If no other write accesses to the variable var should take place in the current context, it is preferable to use the declaration operator [FINAL](javascript:call_link\('abenfinal_inline.htm'\)) to declare an immutable variable instead of DATA.

Example

Inline declaration of an internal table as the target field of an assignment and inline declaration of an appropriate work area in a LOOP. Since there are other write accesses to the variables, inline declarations with [FINAL](javascript:call_link\('abenfinal_inline.htm'\)) are not possible here.

TYPES t\_itab TYPE TABLE OF i
             WITH NON-UNIQUE KEY table\_line.
DATA(itab) = VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ).
...
APPEND 4 TO itab.
...
LOOP AT itab INTO DATA(wa).
  ...
  wa = 0.
  ...
ENDLOOP.

Example

If a data object called data does not exist in the current context, the first statement is an inline declaration and the second statement executes a substring access.

DATA(data) = '1'.
DATA(data) = '2'.