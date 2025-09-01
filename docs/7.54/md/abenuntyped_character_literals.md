  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Declarations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeclarations.htm) →  [Declaration Statements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_declarations.htm) →  [Data Types and Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentypes_and_objects.htm) →  [Declaring Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobjects_statements.htm) →  [Literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral.htm) → 

Character Literals

Syntax

... 'c*\[*c*\[*c*\[*...*\]**\]**\]*' *|* \`*\[*c*\[*c*\[*c*\[*...*\]**\]**\]**\]*\` ...

Effect

Character literals can be either text field literals or text string literals. A text field literal is a character string enclosed in single quotes ('); a text string literal is a character string of alphanumeric characters c enclosed in single backquotes (\`).

Syntax

Name

Possible Characters

'...'

[Text field literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_field_literal_glosry.htm "Glossary Entry")

String of any alphanumeric characters. The data type is c with the length of the enclosed characters (including trailing blanks). The length of a text field literal must lie between 1 and 255 characters. There is no empty text field literal: The text field literal '' has the same meaning as the text field literal ' ' with length 1. To represent a quotation mark in a text field literal, two consecutive quotation marks must be specified.

\`...\`

[Text string literal](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_string_literal_glosry.htm "Glossary Entry")

String of any alphanumeric characters. The data type is string. A text string literal can have a maximum of 255 characters. The empty text string literal \`\` represents an empty string with length 0. To represent a backquote in a text string literal, two consecutive backquotes must be specified.

Character literals that span multiple lines are not allowed. The [literal operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral_operator.htm) & can, however, be used to join multiple literals with the same type as a composite literal.

If a text field literal is specified at an operand position at which a [text symbol](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_symbol_glosry.htm "Glossary Entry") is possible, you can append the three-digit identifier idf of a text symbol in round brackets.

... 'Literal'(idf) ...

If the text symbol exists in the currently loaded [text pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_pool_glosry.htm "Glossary Entry"), then the content of the text symbol is used instead of the literal, otherwise the literal is used. Text string literals cannot be assocaited with text symbols.

Programming Guidelines

-   [Trailing blanks in character literals](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentrailing_blanks_literals_guidl.htm "Guideline")
    
-   [Character set in source code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharacter_set_guidl.htm "Guideline")
    

Notes

-   Only text field literals (not text string literals) can be used to associate a literal with a text symbol.

-   Trailing blanks in text field literals use memory, but are [generally](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_trail_blanks.htm) ignored in operand positions, like all data objects of the type c. In text string literals they are always relevant, as is the case for all data objects of type string.

-   Quotation marks can be represented directly in text string literals and backquotes in text field literals.

-   The maximum length of the content of a character literal is 255 characters, which means that a literal with 255 characters cannot be specified within a single line of a program (due to the quotation marks or backquotes). The maximum length of 255 characters can be achieved only by using the [literal operator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenliteral_operator.htm) &.

-   [String templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_glosry.htm "Glossary Entry"), which only contain literal text, behave like text string literals, but are not evaluated until runtime. For standalone operands that are not part of an expression, for performance reasons only real text string literals with backquotes are to be used.

Example

Represents quotation marks and backquotes in character literals. The first two and the last two literals always have the same meaning.

cl\_demo\_output=>write\_text( 'This is John''s bike' ).
cl\_demo\_output=>write\_text( \`This is John's bike\` ).
cl\_demo\_output=>write\_text( 'This is a backquote: \`' ).
cl\_demo\_output=>write\_text( \`This is a backquote: \`\`\` ).
cl\_demo\_output=>display( ).

Example

If quotation marks and backquotes are required in a string, [string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_template_glosry.htm "Glossary Entry") are also suitable, whose special characters are consistently masked with \\.

cl\_demo\_output=>display( |Quote: ', Backquote: \`, Bar: \\| | ).