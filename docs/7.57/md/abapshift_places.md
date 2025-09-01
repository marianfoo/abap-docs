  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) →  [SHIFT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SHIFT, places, ABAPSHIFT_PLACES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion for improvement:)

SHIFT, places

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_shortref.htm)

Syntax

... *{*BY num PLACES*}* *|* *{*UP TO substring*}* ...

Variants:

[1\. ... BY num PLACES ...](#!ABAP_VARIANT_1@1@)
[2\. ... UP TO substring ...](#!ABAP_VARIANT_2@2@)

Variant 1   

... BY num PLACES ...

Effect

The content of dobj is shifted to the left or right by the positions specified in num, depending on the specification in [direction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_direction.htm). num is a [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. If the content of num is less than or equal to 0, the content of the data object dobj remains unchanged.

Example

The statement FIND determines the offset of the word you in text and shifts its content by this length to the left or right. After the shift, text contains you know and is eight characters long.

DATA: text TYPE string VALUE \`I know you know\`,
      off  TYPE i.
FIND 'you' IN text MATCH OFFSET off.
SHIFT text BY off PLACES.

Variant 2   

... UP TO substring ...

Effect

In the data object dobj, the first substring is searched for whose content matches that of substring. The search is case-sensitive. Depending on the specification in [direction](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapshift_direction.htm), the content of the data object dobj is shifted to the left or right until the byte string or character string contained in substring is left-aligned or right-aligned at the position that is at the beginning or end of the data object dobj before the shift.

substring expects a character-like or byte-like data object. If substring is an empty string, the place in front of the first character or byte is found. There is no shift to the left but a shift by the entire length of dobj to the right.

In character string processing, substring is a [character-like expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"); in data objects, substring with a fixed length respects the trailing blanks.

System Fields

sy-subrc

Meaning

0

The substring in substring was found in the data object dobj and its content was moved accordingly.

4

The substring in substring was not found in the data object dobj and its content remain unchanged.

Hint

For data objects of fixed length, the substring searched for after the shift is either left-aligned at the beginning or right-aligned at the end of the data object, depending on the direction. In the case of strings, the shift makes the data object longer on the right, which means that the substring is not at the right margin after the shift.

Example

This example has the same result as the previous example. However, here the search for you is not performed in the statement SHIFT itself.

DATA text TYPE string VALUE \`I know you know \`.
SHIFT text UP TO 'you'.