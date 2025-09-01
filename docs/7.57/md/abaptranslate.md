---
title: "TRANSLATE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptranslate_shortref.htm) Syntax TRANSLATE text TO UPPERLOWER CASE  USING mask. Additions: 1. ... TO UPPERLOWER CASE(#!ABAP_ADDITION_1@1@) 2. ... USING mask(#!ABAP_ADDITION_2@2@) Eff
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptranslate.htm"
abapFile: "abaptranslate.htm"
keywords: ["do", "if", "case", "try", "data", "abaptranslate"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: TRANSLATE, ABAPTRANSLATE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

TRANSLATE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptranslate_shortref.htm)

Syntax

TRANSLATE text *{*TO *{*UPPER*|*LOWER*}* CASE*}*
             *|* *{*USING mask*}*.

Additions:

[1\. ... TO *{*UPPER*|*LOWER*}* CASE](#!ABAP_ADDITION_1@1@)
[2\. ... USING mask](#!ABAP_ADDITION_2@2@)

Effect

This statement translates the individual characters of the character-like variable text. Either CASE can be used to translate the case or USING can be used for a translation according to a pattern. The variable text must be a character-like variable.

Addition 1   

... TO *{*UPPER*|*LOWER*}* CASE

Effect

If UPPER is specified, all lowercase letters of the data object text are translated to uppercase. If LOWER is specified, all uppercase letters are translated to lowercase.

Hint

To change the case of the letters in a character string in an operand position, a [case function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencase_functions.htm) can be used that includes the functions of the statement TRANSLATE.

Example

After the translation, the variable text contains CAREFUL WITH THAT AXE, EUGENE.

DATA text TYPE string.
text = \`Careful with that Axe, Eugene\`.
TRANSLATE text TO UPPER CASE.

Addition 2   

... USING mask

Effect

If USING is specified, the characters in text are translated in accordance with the rule specified in the data object mask. mask is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") whose value is interpreted as a string of character pairs. Starting with the first pair, a search is performed in text for the first character in every pair and each occurrence is replaced with the second character of the pair. The search is case-sensitive. If mask contains a character multiple times as the first character of a pair, only the first pair is respected. A character in text that has already been replaced cannot be replaced again in the same TRANSLATE statement. Therefore, if the second character of a pair in mask is listed as the first character of a subsequent pair, the second pair affects only the original characters in text.

Trailing blanks in data objects text and mask are respected for data objects. If mask contains an odd number of characters, the last character is ignored. If mask is an empty string, no replacements are made.

Hint

To translate a character string in an operand position, a [translate function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentranslate_functions.htm) that includes the functions of the statement TRANSLATE can also be used.

Example

Translation of the characters A to B, a to b and back. After execution, text contains Abracadabra.

DATA text TYPE string.
text = \`Barbcbdbarb\`.
TRANSLATE text USING 'ABBAabba'.