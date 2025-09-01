  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) →  [SHIFT](javascript:call_link\('abapshift.htm'\)) → 

SHIFT - places

[Quick Reference](javascript:call_link\('abapshift_shortref.htm'\))

Syntax

... *{*BY num PLACES*}* *|* *{*UP TO substring*}* ...

Variants:

[1\. ... BY num PLACES ...](#!ABAP_VARIANT_1@1@)
[2\. ... UP TO substring ...](#!ABAP_VARIANT_2@2@)

Variant 1

... BY num PLACES ...

Effect

The content of dobj is shifted to the left or right (as specified by [direction](javascript:call_link\('abapshift_direction.htm'\))) by the positions specified in num. num is a [numerical expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i. If the content of num is less than or equal to 0, the content of the data object dobj remains unchanged.

Example

Using the statement FIND, the offset of the word "you" in text is determined and its content is shifted by this length to the left or right. After the shift, text contains "you know" and is eight characters long.

DATA: text TYPE string VALUE \`I know you know\`,
      off  TYPE i.
FIND 'you' IN text MATCH OFFSET off.
SHIFT text BY off PLACES.

Variant 2

... UP TO substring ...

Effect

In the data object dobj, the first substring is searched for whose contents match those of substring. This is case-sensitive. The content of the data object dobj is shifted as far possible to the left or right (as specified in [direction](javascript:call_link\('abapshift_direction.htm'\))) until the byte or character string contained in substring is at the position that is at the beginning or end of the data object dobj before the shift.

substring expects a character-like or byte-like data object. If substring is an empty string, the place in front of the first character or byte is found. On the left, no shift takes place and a shift by the entire length of dobj takes place on the right.

In character string processing, substring is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry"); in data objects, substring with a fixed length respects the trailing blanks.

System Fields

sy-subrc

Meaning

0

The substring in substring was found in the data object dobj and its contents were moved accordingly.

4

The substring in substring was not found in the data object dobj and its contents remain unchanged.

Note

If you have data objects of fixed length, the substring searched for after the shift is either (depending on the direction) flush left at the beginning or flush right at the end of the data object. If the case of strings, the shift makes the data object longer on the right. This means that the substring is not at the right margin after the shift.

Example

This example has the same result as the previous example. However, here the search for "you" is not performed in the statement SHIFT itself.

DATA text TYPE string VALUE \`I know you know \`.
SHIFT text UP TO 'you'.