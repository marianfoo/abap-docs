---
title: "Text Symbols"
description: |
  A text symbol is a named data object(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennamed_data_object_glosry.htm 'Glossary Entry') of an ABAP program(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_glosry.htm 'Glossary Entry') that is not declared in t
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_symbols.htm"
abapFile: "abentext_symbols.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abentext", "symbols"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenobjects_statements.htm) → 

Text Symbols

A text symbol is a [named data object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennamed_data_object_glosry.htm "Glossary Entry") of an [ABAP program](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_program_glosry.htm "Glossary Entry") that is not declared in the program itself but is maintained as a part of the [text elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_element_glosry.htm "Glossary Entry") of the program. A text symbol has the [data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_type_glosry.htm "Glossary Entry") [c](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuiltin_types_character.htm) and the length defined in the text elements by mlen.

A text symbol behaves like a [constant](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenconstant_glosry.htm "Glossary Entry") and can be specified in [read positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenread_position_glosry.htm "Glossary Entry") using its names as follows:

... text-idf ...

Here, idf is the three-character ID of the text symbol, which can be composed of all alphanumeric characters including "\_". The text symbol is then taken from the currently loaded [text pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_pool_glosry.htm "Glossary Entry").

If the text symbol does not exist in the currently loaded [text pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_pool_glosry.htm "Glossary Entry"), text-idf is handled like an initial single-character [text field](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_field_glosry.htm "Glossary Entry").

A text symbol can be linked to [text field literals](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_field_literal_glosry.htm "Glossary Entry") using the following syntax:

... 'Literal'(idf) ...

If the text symbol exists in the currently loaded text pool, it replaces the literal. If the text symbol does not exist, the literal is used.

Hints

-   Like all text elements, text symbols are linked to the translation environment. They can be used in all locations where translated texts are to be displayed by the program.
-   The maximum length of a text symbol should be chosen so that there is enough space available for the translation. For example, the German translation of the six-character English word "window" requires seven characters ("Fenster").
-   The identifier text-idf is reserved for text symbols. A structure called text cannot have any components with three-character names. It is best never to call a structure text. This can cause syntax errors, particularly in structures that reference global data types.

Example

Access to the text symbol exa of the current program. If available, its text is displayed. If not, the text field literal is used in the first case and a blank is used in the second case.

cl\_demo\_output=>new(
  )->write( 'Text in text symbol'(exa)
  )->write( TEXT-exa
  )->display(  ).