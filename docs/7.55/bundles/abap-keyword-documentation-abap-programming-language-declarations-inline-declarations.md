# ABAP - Keyword Documentation / ABAP - Programming Language / Declarations / Inline Declarations

Included pages: 3


### abeninline_declarations.htm

---
title: "Inline Declarations"
description: |
  An inline declaration is performed using a declaration operator(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_operator_glosry.htm 'Glossary Entry') in a declaration expression(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_expression_glosr
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declarations.htm"
abapFile: "abeninline_declarations.htm"
keywords: ["do", "try", "data", "field-symbol", "abeninline", "declarations"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) → 

Inline Declarations

An inline declaration is performed using a [declaration operator](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_operator_glosry.htm "Glossary Entry") in a [declaration expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_expression_glosry.htm "Glossary Entry") in a [declaration position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_position_glosry.htm "Glossary Entry"). The result of the declaration is used in the current operand position, is visible statically as of the current position and is valid in the current context.

-   [Inline Declaration of Variables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm)

-   [Inline Declaration of Field Symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm)

Hints

Inline declarations are intended to make programs leaner and more readable. The following rules must also be observed:

-   The rule that dictates that [no global variables and field symbols](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_variables_guidl.htm "Guideline") should be declared means that inline declarations should only be made in processing blocks that support [local data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_data_glosry.htm "Glossary Entry").

-   Inline declarations are an exception to the rule that [local declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocal_declar_guidl.htm "Guideline") should only be made at the start of a procedure. For this reason, they should only be used in manageable procedures to improve their readability.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_inline_guidl.htm "Guideline")

Continue
[DATA, Inline Declaration](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm)
[FIELD-SYMBOL, Inline Declaration](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm)


### abendata_inline.htm

---
title: "DATA, Inline Declaration"
description: |
  Syntax ... DATA(var) ... Effect A declaration expression with the declaration operator DATA declares a variable(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvariable_glosry.htm 'Glossary Entry') var that is used as an operand in the current write position(https://help.sap.com/d
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm"
abapFile: "abendata_inline.htm"
keywords: ["select", "loop", "do", "if", "try", "method", "data", "types", "internal-table", "field-symbol", "abendata", "inline"]
---

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


### abenfield-symbol_inline.htm

---
title: "FIELD-SYMBOL, Inline Declaration"
description: |
  Syntax ... FIELD-SYMBOL(<fs>) ... Effect A declaration expression with the declaration operator FIELD-SYMBOL declares a field symbol(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') <fs> to which a memory area is assigned in the current opera
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield-symbol_inline.htm"
abapFile: "abenfield-symbol_inline.htm"
keywords: ["loop", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abenfield", "symbol", "inline"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclarations.htm) →  [Inline Declarations](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninline_declarations.htm) → 

FIELD-SYMBOL, Inline Declaration

Syntax

... FIELD-SYMBOL(<fs>) ...

Effect

A declaration expression with the declaration operator FIELD-SYMBOL declares a [field symbol](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs> to which a memory area is assigned in the current operand position. The declared field symbol is visible statically in the program as of FIELD-SYMBOL(<fs>) and is valid in the current [context](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobj_context_glosry.htm "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator FIELD-SYMBOL can be specified in every valid [declaration position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_positions.htm), which involves assignments of the memory area only. The typing of the field symbol is determined using the statically recognizable type of the assigned memory area. It can be generic and complete.

A field symbol <fs> declared inline cannot be used in a read position of the same statement.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeclaration_inline_guidl.htm "Guideline").

Hints

-   A valid statement with an inline declaration of a field symbol can generally be interpreted as a short form for a declaration statement used as a direct prefix.

FIELD-SYMBOLS <fs> TYPE ...
... <fs> ...

Deviations from this rule occur only if an identically named field symbol from a more global context is used in the same statement. This data object is still valid in the statement and is only hidden after the statement.

-   Just like the statement FIELD-SYMBOLS, an inline declaration does not open a local context for the current statement block. An inline declaration for a field symbol can only be made once within a context and the field symbol must not have been declared there using FIELD-SYMBOLS.

-   If the type of the assigned memory area is defined by reference to a data type of the ABAP Dictionary, it is transferred with its semantic attributes, such as field help, input help, or conversion routines.

Example

Inline declaration of a field symbol for an internal table in an ASSIGN statement and inline declaration of a field symbol for the lines of the table in a LOOP.

TYPES t\_itab TYPE TABLE OF i
             WITH NON-UNIQUE KEY table\_line.
DATA(dref) = NEW t\_itab( ( 1 ) ( 2 ) ( 3 ) ).
ASSIGN dref->\* TO FIELD-SYMBOL(<itab>).
LOOP AT <itab> ASSIGNING FIELD-SYMBOL(<line>).
  ...
ENDLOOP.
