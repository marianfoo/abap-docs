  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Statements for Character String and Byte String Processing](javascript:call_link\('abenstring_processing_statements.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20BIT%2C%20ABAPSET_BIT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET BIT

[Short Reference](javascript:call_link\('abapset_bit_shortref.htm'\))

Syntax

SET BIT bitpos OF byte\_string *\[*TO val*\]*.

Effect

This statement sets the bit at bit position bitpos of the byte\_string to 1 or, if specified, to the value of data object val. The other bits in byte\_string remain unchanged. byte\_string is a [result position](javascript:call_link\('abenresult_position_glosry.htm'\) "Glossary Entry"), that is, either a variable or a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") can be specified.

The data object byte\_string must be byte-like, whereas bitpos and val are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i. The value of bitpos must be greater than 0 and val must be either 0 or 1, otherwise an uncatchable exception is raised. The bit positions in byte\_string are counted from left to right starting with the [most significant bit (MSB)](javascript:call_link\('abenmost_significant_bit_glosry.htm'\) "Glossary Entry") of the data object. If the value of bitpos is greater than the number of bits in byte\_string, no replacement is made and sy-subrc is set to 4.

System Fields

sy-subrc

Meaning

0

A bit of the data object byte\_string was set at position bitpos.

4

The value of bitpos is greater than the number of bits in byte\_string and no bit was set.

Hints

-   If byte\_string has the [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") type xstring, a bit is set in the referenced byte string, not in the reference.
-   Setting single bits is intended in particular for preparing operators in [bit expressions](javascript:call_link\('abapcompute_bit.htm'\)).
-   The built-in function [bit-set](javascript:call_link\('abenbit_functions.htm'\)) can also be used to set an individual bit.
-   Counting the bits from the [most significant bit (MSB)](javascript:call_link\('abenmost_significant_bit_glosry.htm'\) "Glossary Entry") can have unexpected results when working with components that count from the [least significant bit (LSB)](javascript:call_link\('abenleast_significant_bit_glosry.htm'\) "Glossary Entry").

Example

In the data object hex with eight bits, the bit is set to the value 1 at the position determined by the loop counter sy-index, with all other bits set to 0. The output is 80 40 20 10 08 04 02 01.

DATA hex    TYPE x LENGTH 1.
DATA output TYPE string.
DO 8 TIMES.
  CLEAR hex.
  SET BIT sy-index OF hex.
  output &&= |{ hex } |.
ENDDO.
cl\_demo\_output=>display( output ).

Example

In this example, single bits are set in the lines of an internal table, where a [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") is used as a [writable expression](javascript:call_link\('abenwritable_expression_glosry.htm'\) "Glossary Entry") in SET BIT.

TYPES:
  hex     TYPE x LENGTH 1,
  hex\_tab TYPE STANDARD TABLE OF hex WITH EMPTY KEY.
DATA(hex\_tab) = VALUE hex\_tab( FOR i = 1 UNTIL i > 8 ( ) ).
DO 8 TIMES.
  SET BIT sy-index OF hex\_tab\[ sy-index \].
ENDDO.
cl\_demo\_output=>display( hex\_tab ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: The bit position is greater than or equal to 0.
    Runtime error: BIT\_OFFSET\_NOT\_POSITIVE
-   Runtime error: BIT\_NO\_ZERO\_OR\_ONE