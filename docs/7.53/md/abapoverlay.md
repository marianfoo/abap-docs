  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

OVERLAY

[Quick Reference](javascript:call_link\('abapoverlay_shortref.htm'\))

Syntax

OVERLAY text1 WITH text2 *\[*ONLY mask*\]*.

Effect

Characters in the variable text1 are replaced by the characters in the operand text2 that are in the same place there. text2 is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

If the addition ONLY is not specified, all blanks in text1 are replaced. If the addition ONLY is specified, all characters are replaced that occur in the operand mask. This is case-sensitive. mask is also a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry").

If the lengths of text1 and text2 are different, text1 is processed using the shorter length only.

The operands text1, text2, and mask have to be character-like operands. In operands of fixed length, trailing blanks are respected. If mask is an empty string, no replacements are made.

System Fields

sy-subrc

Meaning

0

At least one character in text1 is replaced.

4

No characters in text1 are replaced.

Example

After the text field has been assigned to the time field, it contains the invalid time "12\_\_00" (according to the [conversion rules](javascript:call_link\('abenconversion_type_c.htm'\))). As a result of the overlay with the initial\_time constants, the two blanks are replaced by "00" and the result is the valid time "120000".

CONSTANTS initial\_time TYPE t VALUE IS INITIAL.
DATA: time        TYPE t,
      text TYPE c LENGTH 4.
text = '12'.
time = text.
OVERLAY time WITH initial\_time.