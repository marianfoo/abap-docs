---
title: "GET BIT"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_bit_shortref.htm) Syntax GET BIT bitpos OF byte_string INTO val. Effect This statement reads the bit at the bit position bitpos of the data object byte_string and assigns its value to the target field val. val can
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_bit.htm"
abapFile: "abapget_bit.htm"
keywords: ["do", "while", "if", "try", "catch", "data", "abapget", "bit"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_statements.htm) → 

GET BIT

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_bit_shortref.htm)

Syntax

GET BIT bitpos OF byte\_string INTO val.

Effect

This statement reads the bit at the bit position bitpos of the data object byte\_string and assigns its value to the target field val. val can be specified as follows:

-   An existing variable that expects the data type i.

-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_inline.htm), where a variable of type i is declared.

The data object byte\_string must be byte-like. bitpos is a [numeric expression position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. The value of bitpos must be greater than 0, otherwise uncatchable exceptions are raised. The bit positions in byte\_string are counted from the beginning of the data object. If the value of bitpos is greater than the number of bits in byte\_string, no bit is read and sy-subrc is set to 4.

System Fields

sy-subrc

Meaning

0

The value of the bit at position bitpos of byte\_string was placed in the result field val.

4

The value of bitpos is greater than the number of bits in byte\_string and no bit was read.

Hints

-   If byte\_string has the [deep](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeep_glosry.htm "Glossary Entry") type xstring, a bit is read from the referenced byte string, not from the reference.

-   The reading of single bits is especially intended for evaluating the results of [bit expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_bit.htm).
    

Example

The hexadecimal value "1B" is assigned to the data object hex and its bits are read from front to back. The output is "00011011", which corresponds to the binary representation of decimal 27 or hexadecimal "1B".

DATA hex TYPE xstring VALUE \`1B\`.
DATA(len) = xstrlen( hex ) \* 8.
DATA output TYPE string.
WHILE sy-index <= len.
  GET BIT sy-index OF hex INTO DATA(res).
  output &&= res.
ENDWHILE.
cl\_demo\_output=>display\_text( output ).

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: n is smaller than or equal to 0.
    Runtime error: BIT\_OFFSET\_NOT\_POSITIVE