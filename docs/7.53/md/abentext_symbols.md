  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenobjects_statements.htm) → 

Text Symbols

A text symbol is a [named data object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennamed_data_object_glosry.htm "Glossary Entry") of an [ABAP program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_glosry.htm "Glossary Entry") that is not declared in the program itself and instead is defined as a part of the [text elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_element_glosry.htm "Glossary Entry") of the program. A text symbol has the [data type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_type_glosry.htm "Glossary Entry") [c](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_character.htm) and the length defined in the text elements by mlen.

A text symbol behaves like a [constant](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconstant_glosry.htm "Glossary Entry") and can be specified in [reading positions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenreading_position_glosry.htm "Glossary Entry") using its names as follows:

... text-idf ...

Here, idf is the three-character ID of the text symbol. This ID can consist of any alphanumeric characters plus "\_". The text symbol is taken from the currently loaded [text pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool_glosry.htm "Glossary Entry").

If the text symbol is not in the currently loaded [text pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool_glosry.htm "Glossary Entry"), text-idf is handled like an initial single-character [text field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_glosry.htm "Glossary Entry").

A text symbol can be joined with [text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") using the following syntax:

... 'Literal'(idf) ...

If the text symbol is in the currently loaded text pool, it replaces the literal. If the text symbol does not exist, the literal is used.

Notes

-   Like all text elements, text symbols are linked to the translation environment. They can be used in all locations where translated texts are to be displayed by the program.

-   The maximum length of a text symbol must be chosen so that there is enough space for the translation. For example, the German translation of the six-character English word "window" requires seven characters ("Fenster").

-   The name text-idf is reserved for text symbols. A structure called text cannot have any components with three-character names. It is best never to call a structure text. This can cause syntax errors, in particular in structures that reference global data types.

Example

Accesses the text symbol exa of the current program. Its text is displayed (if available). If the text does not exist, the text field literal is used in the first case and a blank is used in the second case.

cl\_demo\_output=>new(
  )->write( 'Text in text symbol'(exa)
  )->write( TEXT-exa
  )->display(  ).