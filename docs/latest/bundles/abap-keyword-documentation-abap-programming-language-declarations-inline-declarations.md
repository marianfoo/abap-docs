# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Inline Declarations

Included pages: 4


### abeninline_declarations.htm

---
title: "Inline Declarations"
description: |
  An inline declaration is performed using a declaration operator(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_operator_glosry.htm 'Glossary Entry') in a declaration expression(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_expres
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm"
abapFile: "abeninline_declarations.htm"
keywords: ["do", "if", "try", "data", "field-symbol", "abeninline", "declarations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Inline%20Declarations%2C%20ABENINLINE_DECLARATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Inline Declarations

An inline declaration is performed using a [declaration operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") in a [declaration expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") in a [declaration position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_position_glosry.htm "Glossary Entry"). The result of the declaration is used in the current operand position, is visible statically as of the current position and is valid in the current context.

-   [DATA, Inline Declaration for Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm)
-   [FINAL, Inline Declaration for Immutable Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm)
-   [FIELD-SYMBOL, Inline Declaration for Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm)

Hint

Inline declarations are intended to make programs leaner and more readable. The following rules must also be observed:

-   The rule that [no global variables and field symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_variables_guidl.htm "Guideline") should be declared means that inline declarations should only be made in processing blocks that support [local data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_data_glosry.htm "Glossary Entry").
-   Inline declarations are an exception to the rule that [local declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_declar_guidl.htm "Guideline") should only be made at the start of a procedure. For this reason, they should only be used in manageable procedures to improve their readability.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_inline_guidl.htm "Guideline")

Continue
[DATA, Inline Declaration for Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm)
[FINAL, Inline Declaration for Immutable Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm)
[FIELD-SYMBOL, Inline Declaration for Field Symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm)


### abendata_inline.htm

---
title: "DATA, Inline Declaration for Variables"
description: |
  Syntax ... DATA(var) ... Effect A declaration expression with the declaration operator DATA declares a variable(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvariable_glosry.htm 'Glossary Entry') var that is used as an operand in the current write position(https://help.sap.
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm"
abapFile: "abendata_inline.htm"
keywords: ["loop", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abendata", "inline"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Inline Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DATA%2C%20Inline%20Declaration%20for%20Variables%2C%20ABENDATA_INLINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DATA, Inline Declaration for Variables

Syntax

... DATA(var) ...

Effect

A declaration expression with the declaration operator DATA declares a [variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvariable_glosry.htm "Glossary Entry") var that is used as an operand in the current [write position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_position_glosry.htm "Glossary Entry"). The declared variable is visible statically in the program as of DATA(var) and is valid in the current [context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobj_context_glosry.htm "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator DATA can be specified in any designated [declaration position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_positions.htm). The date type of the variable is determined by the [operand type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoperand_type_glosry.htm "Glossary Entry"). It must be possible to derive this type completely statically.

A variable var declared inline cannot be used in a read position of the same statement.

If a data object called data already exists in the current context, DATA(var) is interpreted as a [substring access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) and not as an inline declaration. A syntax warning indicates this. DATA(var) only works as an inline declaration if there is no data object called data yet.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_inline_guidl.htm "Guideline").

Hints

-   A valid statement with an inline declaration of a variable can generally be interpreted as a short form for a declaration statement used as a direct prefix.
    
    DATA var TYPE ...
    ... var ...
    
    Deviations from this rule occur only if an identically named data object of a more global context is used in the same statement. This is still valid in the statement and is only hidden after the statement.
    
-   Just like the statement DATA, an inline declaration does not open a local context for the current statement block. An inline declaration for a variable can only be made once within a context and the variable must not have been declared there using DATA.
-   An inline declaration can never occur on the right-hand side of an assignment or within an expression.
-   The operand position and the types of other operands can be included in the static derivation of the operand type. If the type of a different operand cannot be identified statically, for example because it is specified as a generically typed field symbol, either a suitable [standard type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_type_glosry.htm "Glossary Entry") is used or no inline declaration is possible.
-   If the operand type is defined by reference to a data type of the ABAP Dictionary, it is inherited with its semantic properties, such as field help, input help, or conversion exits.
-   If multiple equally valid operand types are possible in a [declaration position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_positions.htm), the recommended preferred data type is generally used.
-   If no other write accesses to the variable var should take place in the current context, it is preferable to use the declaration operator [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm) to declare an immutable variable instead of DATA.

Example

Inline declaration of an internal table as the target field of an assignment and inline declaration of an appropriate work area in a LOOP. Since there are other write accesses to the variables, inline declarations with [FINAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm) are not possible here.

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


### abenfinal_inline.htm

---
title: "FINAL, Inline Declaration for Immutable Variables"
description: |
  Syntax ... FINAL(var) ... Effect Declaration of an immutable variable(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenimmutable_variable_glosry.htm 'Glossary Entry'). A declaration expression with the declaration operator FINAL in general works in the same way as an inline decl
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfinal_inline.htm"
abapFile: "abenfinal_inline.htm"
keywords: ["select", "loop", "do", "while", "if", "try", "catch", "method", "data", "internal-table", "abenfinal", "inline"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Inline Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FINAL%2C%20Inline%20Declaration%20for%20Immutable%20Variables%2C%20ABENFINAL_INLINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impr
ovement:)

FINAL, Inline Declaration for Immutable Variables

Syntax

... FINAL(var) ...

Effect

Declaration of an [immutable variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenimmutable_variable_glosry.htm "Glossary Entry"). A declaration expression with the declaration operator FINAL in general works in the same way as an inline declaration with the declaration operator [DATA](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_inline.htm) and the same general rules apply.

While DATA declares a regular variable, FINAL declares an immutable variable: The write position where the variable var is declared with FINAL is the only one, where a value can be assigned to that variable in the current [context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobj_context_glosry.htm "Glossary Entry"). In all other positions, any write access leads either to a syntax error or the uncatchable exception MOVE\_TO\_LIT\_NOTALLOWED\_NODATA.

The declaration operator FINAL can be used in the same [declaration positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_position_glosry.htm "Glossary Entry") as the operator DATA with one exception: FINAL cannot be used behind [OPEN CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_cursor.htm) because usually there is always a second write access with [CLOSE CURSOR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclose_cursor.htm) in the same context.

Hints

-   The fact that there is only one write position for FINAL in a context does not mean that only one write access can be executed at runtime. For example, the declaration operator FINAL can be positioned inside a loop or it can be used after INTO in a [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) statement. Then a value is assigned multiple times to var, but var cannot be changed in any other write position.
-   If a data object called final already exists in the current context, FINAL(var) is interpreted as a [substring access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenoffset_length.htm) and not as an inline declaration.

Programming Guideline

[Immutable Variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenimmutable_variables_guidl.htm "Guideline")

Example

Four immutable variables date, yesterday, result, and wa are declared inline with FINAL. They can be used at read positions but any attempt using them at write positions would lead to a syntax error or an exception.

FINAL(date) = cl\_demo\_date\_time=>get\_user\_date( ).
FINAL(yesterday) = CONV d( date - 1 ).
"yesterday -= 1. <-- Syntax error
SELECT carrid, connid, seatsocc
       FROM sflight
       WHERE fldate = @yesterday
       INTO TABLE @FINAL(result).
LOOP AT result INTO FINAL(wa).
  ...
  "wa-seatsocc = 0. <-- Syntax error
  ...
ENDLOOP.
"APPEND wa TO result. <-- Syntax error

Example

Inline declaration of an internal table as a target field of a [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement and inline declaration of a variable for the table transformed to HTML. The data type of the variable is determined by the return value of the method.

SELECT \*
       FROM scarr
       INTO TABLE @FINAL(itab).
FINAL(html) = cl\_demo\_output=>get( itab ).


### abenfield-symbol_inline.htm

---
title: "FIELD-SYMBOL, Inline Declaration for Field Symbols"
description: |
  Syntax ... FIELD-SYMBOL(<fs>) ... Effect A declaration expression with the declaration operator FIELD-SYMBOL declares a field symbol(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') <fs> to which a memory area is assigned in the current
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield-symbol_inline.htm"
abapFile: "abenfield-symbol_inline.htm"
keywords: ["loop", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abenfield", "symbol", "inline"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclarations.htm) →  [Inline Declarations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninline_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIELD-SYMBOL%2C%20Inline%20Declaration%20for%20Field%20Symbols%2C%20ABENFIELD-SYMBOL_INLINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

FIELD-SYMBOL, Inline Declaration for Field Symbols

Syntax

... FIELD-SYMBOL(<fs>) ...

Effect

A declaration expression with the declaration operator FIELD-SYMBOL declares a [field symbol](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs> to which a memory area is assigned in the current operand position. The declared field symbol is visible statically in the program from FIELD-SYMBOL(<fs>) and is valid in the current [context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobj_context_glosry.htm "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator FIELD-SYMBOL can be specified in every valid [declaration position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_positions.htm), which involves assignments of the memory area only. The typing of the field symbol is determined using the statically known type of the assigned memory area. It can be generic and complete.

A field symbol <fs> declared inline cannot be used in a read position of the same statement.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendeclaration_inline_guidl.htm "Guideline").

Hints

-   A valid statement with an inline declaration of a field symbol can generally be interpreted as a short form for a declaration statement used as a direct prefix.
    
    FIELD-SYMBOLS <fs> TYPE ...
    ... <fs> ...
    
    Exceptions to this rule occur only if an identically named field symbol from a more global context is used in the same statement. This data object is still valid in the statement and is only hidden after the statement.
    
-   Just like the statement FIELD-SYMBOLS, an inline declaration does not open a local context for the current statement block. An inline declaration for a field symbol can only be made once within a context and the field symbol must not have been declared there using FIELD-SYMBOLS.
-   If the type of the assigned memory area is defined by reference to a data type of the ABAP Dictionary, it is inherited with its semantic properties, such as field help, input help, or conversion exits.

Example

Inline declaration of a field symbol for an internal table in an ASSIGN statement and inline declaration of a field symbol for the lines of the table in a LOOP.

TYPES t\_itab TYPE TABLE OF i
             WITH NON-UNIQUE KEY table\_line.
FINAL(itab) = VALUE t\_itab( ( 1 ) ( 2 ) ( 3 ) ).
ASSIGN itab TO FIELD-SYMBOL(<itab>).
LOOP AT <itab> ASSIGNING FIELD-SYMBOL(<line>).
  ...
ENDLOOP.
