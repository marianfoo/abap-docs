  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Declarations](javascript:call_link\('abendeclarations.htm'\)) →  [Declaration Statements](javascript:call_link\('abenabap_declarations.htm'\)) →  [Data Types and Data Objects](javascript:call_link\('abentypes_and_objects.htm'\)) →  [Declaring Data Objects](javascript:call_link\('abenobjects_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Text Symbols, ABENTEXT_SYMBOLS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

Text Symbols

A text symbol is a [named data object](javascript:call_link\('abennamed_data_object_glosry.htm'\) "Glossary Entry") of an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") that is not declared in the program itself but is maintained as a part of the [text elements](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry") of the program. A text symbol has the [data type](javascript:call_link\('abendata_type_glosry.htm'\) "Glossary Entry") [c](javascript:call_link\('abenbuiltin_types_character.htm'\)) and the length defined in the text elements by mlen.

A text symbol behaves like a [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") and can be specified in [read positions](javascript:call_link\('abenread_position_glosry.htm'\) "Glossary Entry") using its names as follows:

... text-idf ...

Here, idf is the three-character ID of the text symbol, which can be composed of all alphanumeric characters including \_. The text symbol is then taken from the currently loaded [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry").

If the text symbol does not exist in the currently loaded [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry"), text-idf is handled like an initial single-character [text field](javascript:call_link\('abentext_field_glosry.htm'\) "Glossary Entry").

A text symbol can be linked to [text field literals](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") using the following syntax:

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