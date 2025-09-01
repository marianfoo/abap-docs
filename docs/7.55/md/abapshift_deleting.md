  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_statements.htm) →  [SHIFT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapshift.htm) → 

SHIFT, deleting

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapshift_shortref.htm)

Syntax

... *{* *{*LEFT DELETING LEADING*}*
    *|* *{*RIGHT DELETING TRAILING*}* *}* mask ...

Effect

If these additions are used, the statement SHIFT shifts the content of dobj by one place to the left or the right as long as the content of the first or last place of dobj is contained in mask.

If the data object dobj is a string, it is truncated when it is shifted to the left but not lengthened when it is shifted to the right. This means the content of mask can also be moved out of a string to the right.

In character string processing, mask is a [character-like expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). It is case-sensitive and any trailing blanks in mask are respected. If the content of the first or last place in dobj is not contained in mask, the content of text remains unchanged. In particular, nothing is shifted if mask is an empty string.

Example

After the shift to the right, text contains the value "\_\_\_\_\_\_\_I know you" and has a length of 15 characters.

DATA text TYPE string VALUE \`I know you know\`.
SHIFT text RIGHT DELETING TRAILING 'no kw'.

Example

The following example removes first the trailing blank and then the leading blanks from a string. For strings without leading blanks, this sequence of statements can be used to remove trailing blanks.

DATA txt TYPE string VALUE \`XXXXX     \`.
SHIFT txt RIGHT DELETING TRAILING \` \`.
SHIFT txt LEFT  DELETING LEADING  \` \`.