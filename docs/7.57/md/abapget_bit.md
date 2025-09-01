---
title: "GET BIT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_bit_shortref.htm) Syntax GET BIT bitpos OF byte_string INTO val. Effect This statement reads the bit at the bit position bitpos of the data object byte_string and assigns its value to the target field val. val can
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_bit.htm"
abapFile: "abapget_bit.htm"
keywords: ["loop", "do", "while", "if", "try", "catch", "data", "types", "internal-table", "abapget", "bit"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_statements.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET BIT, ABAPGET_BIT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for imp
rovement:)

GET BIT

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_bit_shortref.htm)

Syntax

GET BIT bitpos OF byte\_string INTO val.

Effect

This statement reads the bit at the bit position bitpos of the data object byte\_string and assigns its value to the target field val. val can be specified as follows:

-   An existing variable that expects the data type i.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_inline.htm) or [FINAL(var)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfinal_inline.htm), where a variable of type i is declared.
-   Expressions with the [CAST](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_cast.htm) and [NEW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_new.htm) operators and table expressions.

The data object byte\_string must be byte-like. [Bit](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbit_expression_glosry.htm "Glossary Entry"), [constructor](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") and [table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_expression_glosry.htm "Glossary Entry") expressions can be used. bitpos is a [numeric expression position](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. The value of bitpos must be greater than 0, otherwise uncatchable exceptions are raised. The bit positions in byte\_string are counted from left to right, starting with the [most significant bit (MSB)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmost_significant_bit_glosry.htm "Glossary Entry") of the data object. If the value of bitpos is greater than the number of bits in byte\_string, no bit is read and sy-subrc is set to 4.

System Fields

sy-subrc

Meaning

0

The value of the bit at position bitpos of byte\_string was placed in the result field val.

4

The value of bitpos is greater than the number of bits in byte\_string and no bit was read.

Hints

-   If byte\_string has the [deep](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_glosry.htm "Glossary Entry") type xstring, a bit is read from the referenced byte string, not from the reference.
-   The reading of single bits is especially intended for evaluating the results of [bit expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_bit.htm).
-   Counting the bits from the [most significant bit (MSB)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmost_significant_bit_glosry.htm "Glossary Entry") can have unexpected results when working with components that count from the [least significant bit (LSB)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenleast_significant_bit_glosry.htm "Glossary Entry").

Example

The hexadecimal value 1B is assigned to the data object hex and its bits are read from front to back. The output is 00011011, which corresponds to the binary representation of decimal 27 or hexadecimal 1B.

DATA hex TYPE xstring VALUE \`1B\`.
FINAL(len) = xstrlen( hex ) \* 8.
DATA output TYPE string.
WHILE sy-index <= len.
  GET BIT sy-index OF hex INTO FINAL(res).
  output &&= res.
ENDWHILE.
cl\_demo\_output=>display\_text( output ).

Example

Hexadecimal values are assigned to data objects and included in an internal table which is looped across. During the loop, the bits are read from front to back. Finally, the result is added to the internal table which shows the hexadecimal and binary values. The GET BIT statement demonstrates a table expression following OF.

TYPES: BEGIN OF struc,
         hex\_value TYPE xstring,
         bin       TYPE string,
       END OF struc.
DATA: hex1   TYPE xstring VALUE \`1B\`,
      hex2   TYPE xstring VALUE \`1C\`,
      hex3   TYPE xstring VALUE \`1D\`,
      output TYPE string,
      itab   TYPE TABLE OF struc.
FINAL(len) = xstrlen( hex2 ) \* 8.
itab = VALUE #( ( hex\_value = hex1 )
                ( hex\_value = hex2 )
                ( hex\_value = hex3 ) ).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>).
  WHILE sy-index <= len.
    GET BIT sy-index OF itab\[ sy-tabix \]-hex\_value INTO FINAL(res).
    output &&= res.
  ENDWHILE.
  itab\[ sy-tabix \]-bin = output.
  CLEAR output.
ENDLOOP.
cl\_demo\_output=>display( itab ).

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: n is smaller than or equal to 0.
    Runtime error: BIT\_OFFSET\_NOT\_POSITIVE