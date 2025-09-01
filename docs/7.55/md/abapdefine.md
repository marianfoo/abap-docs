---
title: "DEFINE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdefine_shortref.htm) Syntax DEFINE macro. ... &1 ... &9 ... END-OF-DEFINITION. Effect The statement DEFINE defines a macro(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_glosry.htm 'Glossary Entr
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdefine.htm"
abapFile: "abapdefine.htm"
keywords: ["insert", "do", "if", "case", "try", "class", "data", "types", "abapdefine"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_modularization.htm) →  [Source Code Modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_includes.htm) →  [Macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_macros.htm) → 

DEFINE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdefine_shortref.htm)

Syntax

DEFINE macro.
  ... &1 ... &9 ...
END-OF-DEFINITION.

Effect

The statement DEFINE defines a [macro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_glosry.htm "Glossary Entry") macro. The following [naming conventions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennaming_conventions.htm) apply to macro and [ABAP words](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_words.htm) cannot be used. Macros can be defined in all [program types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_type_glosry.htm "Glossary Entry"), particularly in [type pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry").

Any content can be found between the statements DEFINE and END-OF-DEFINITION. A macro is not evaluated until it is included in another program, and then it must have correct syntax. Currently, a macro can only be [included](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_include.htm) in other ABAP programs using its name macro.

The validity of a macro is determined by its position in the [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry"). It can be included in the same compilation unit at any position after END-OF-DEFINITION. If another macro is defined under the same name in a program, it overwrites the previous macro from its new position.

Within a macro, up to nine placeholders &1 ... &9 can be used instead of ABAP words and operands. These placeholders must be replaced by fixed words when the macro is inserted.

Programming Guideline

[Only use macros in exceptional cases.](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacros_guidl.htm "Guideline")

Hints

-   Breakpoints cannot be set in macros and the statements of a macro cannot be executed in individual steps in the ABAP Debugger.

-   In global classes, macros are defined in a dedicated include program.

-   Apart from in the source code of a program and in [type pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentype_pool_glosry.htm "Glossary Entry"), macros can also be stored as cross-program macros in the table TRMAC. However no new macros should be defined in the database table TRMAC. An example of a macro stored in the table TRMAC is break, which sets a breakpoint depending on the current user name in the system field sy-uname.

Example

See [Including Macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_include.htm).

Executable Example

[Macros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmacro_abexa.htm)

Continue
[END-OF-DEFINITION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapend-of-definition.htm)