  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

TRANSLATE

[Quick Reference](javascript:call_link\('abaptranslate_shortref.htm'\))

Syntax

TRANSLATE text *{*TO *{*UPPER*|*LOWER*}* CASE*}*
             *|* *{*USING mask*}*.

Extras:

[
1\. ... TO *{*UPPER*|*LOWER*}* CASE](#!ABAP_ADDITION_1@1@)
[
2\. ... USING mask](#!ABAP_ADDITION_2@2@)

Effect

This statement translates the individual characters of the character-like data object text. Either CASE can be used to translate the case or USING can be used for a translation by pattern. The variable text must be a character-like variable.

Addition 1

... TO *{*UPPER*|*LOWER*}* CASE

Effect

If UPPER is specified, all lowercase letters of the data object text are translated to uppercase. If LOWER is specified, all uppercase letters are translated to lowercase.

Note

To modify the case of the letters in a character string in an operand position, a [case function](javascript:call_link\('abencase_functions.htm'\)) can be used that includes the functions of the statement TRANSLATE.

Example

After the translation, the variable text contains "CAREFUL WITH THAT AXE, EUGENE".

DATA text TYPE string.
text = \`Careful with that Axe, Eugene\`.
TRANSLATE text TO UPPER CASE.

Addition 2

... USING mask

Effect

If USING is specified, the characters in text are translated in accordance with the rule specified in the data object mask. mask is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") whose value is interpreted as a string of character pairs. A search is performed in text, beginning with the first pair, for the first character in every pair. Every occurrence is replaced with the second character of the pair. The search is case-sensitive. If mask contains a character multiple times as the first character of a pair, only the first pair is respected. A character in text that has already been replaced cannot be replaced again in the same TRANSLATE statement. Therefore, if the second character of a pair in mask appears as the first character of a subsequent pair, the second pair affects only the original characters in text.

Trailing blanks in data objects text and mask are respected for data objects. If mask contains an odd number of characters, the last character is ignored. If mask is an empty string, no replacements are made.

Note

To translate a character string in an operand position, a [translate function](javascript:call_link\('abentranslate_functions.htm'\)) that includes the functions of the statement TRANSLATE can also be used.

Example

Translates the characters "A" to "B", "a" to "b" and back. After implementation, text contains "Abracadabra".

DATA text TYPE string.
text = \`Barbcbdbarb\`.
TRANSLATE text USING 'ABBAabba'.