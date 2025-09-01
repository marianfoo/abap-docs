  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

GET BIT

[Short Reference](javascript:call_link\('abapget_bit_shortref.htm'\))

Syntax

GET BIT bitpos OF byte\_string INTO val.

Effect

This statement reads the bit at the bit position bitpos of the data object byte\_string and assigns its value to the target field val. val can be specified as follows:

-   An existing variable that expects the data type i.
-   An inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), where a variable of type i is declared.

The data object byte\_string must be byte-like. bitpos is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i. The value of bitpos must be greater than 0, otherwise uncatchable exceptions are raised. The bit positions in byte\_string are counted from left to right, starting with the [most significant bit (MSB)](javascript:call_link\('abenmost_significant_bit_glosry.htm'\) "Glossary Entry") of the data object. If the value of bitpos is greater than the number of bits in byte\_string, no bit is read and sy-subrc is set to 4.

System Fields

sy-subrc

Meaning

0

The value of the bit at position bitpos of byte\_string was placed in the result field val.

4

The value of bitpos is greater than the number of bits in byte\_string and no bit was read.

Hints

-   If byte\_string has the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") type xstring, a bit is read from the referenced byte string, not from the reference.
-   The reading of single bits is especially intended for evaluating the results of [bit expressions](javascript:call_link\('abapcompute_bit.htm'\)).
-   Counting the bits from the [most significant bit (MSB)](javascript:call_link\('abenmost_significant_bit_glosry.htm'\) "Glossary Entry") can have unexpected results when working with components that count from the [least significant bit (LSB)](javascript:call_link\('abenleast_significant_bit_glosry.htm'\) "Glossary Entry").

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

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: n is smaller than or equal to 0.
    Runtime error: BIT\_OFFSET\_NOT\_POSITIVE