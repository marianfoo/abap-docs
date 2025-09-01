---
title: "FIELD-SYMBOL, Inline Declaration for Field Symbols"
description: |
  Syntax ... FIELD-SYMBOL(<fs>) ... Effect A declaration expression with the declaration operator FIELD-SYMBOL declares a field symbol(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm 'Glossary Entry') <fs> to which a memory area is assigned in the current opera
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield-symbol_inline.htm"
abapFile: "abenfield-symbol_inline.htm"
keywords: ["loop", "do", "if", "try", "data", "types", "internal-table", "field-symbol", "abenfield", "symbol", "inline"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclarations.htm) →  [Inline Declarations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninline_declarations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FIELD-SYMBOL%2C%20Inline%20Declaration%20for%20Field%20Symbols%2C%20ABENFIELD-SYMBOL_INLINE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

FIELD-SYMBOL, Inline Declaration for Field Symbols

Syntax

... FIELD-SYMBOL(<fs>) ...

Effect

A declaration expression with the declaration operator FIELD-SYMBOL declares a [field symbol](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfield_symbol_glosry.htm "Glossary Entry") <fs> to which a memory area is assigned in the current operand position. The declared field symbol is visible statically in the program from FIELD-SYMBOL(<fs>) and is valid in the current [context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenobj_context_glosry.htm "Glossary Entry"). The declaration is made when the program is compiled, regardless of whether the statement is actually executed.

The declaration operator FIELD-SYMBOL can be specified in every valid [declaration position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_positions.htm), which involves assignments of the memory area only. The typing of the field symbol is determined using the statically known type of the assigned memory area. It can be generic and complete.

A field symbol <fs> declared inline cannot be used in a read position of the same statement.

Programming Guideline

[Only use inline declarations locally](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendeclaration_inline_guidl.htm "Guideline").

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