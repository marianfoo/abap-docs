  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) →  [Byte String Functions (bit\_func)](javascript:call_link\('abenbinary_functions.htm'\)) → 

bit\_func - bit-set

Bit functions process individual bits and return byte-like results. Currently, one bit function is available:

Syntax

... bit-set( arg ) ...

This [built-in function](javascript:call_link\('abenbuilt_in_functions.htm'\)) expects an integer numeric value as an argument. The argument is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of the type i.

-   If the argument is positive, the function creates a byte chain in which the bit has the value 1 at the position specified by the argument. All other bits have the value 0. The position is counted from left to right starting with the [most significant bit (MSB)](javascript:call_link\('abenmost_significant_bit_glosry.htm'\) "Glossary Entry").
-   If the argument has the value 0, the result is an empty byte chain.
-   If the argument is negative, the function creates a byte chain in which all bits up to and including the place specified by the argument have the value 1 and all bits after this position have the value 0.

The length of the result is the minimum number of bytes needed to include the set bits.

The function can be used in all places where a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can be used, particularly in bit expressions themselves. The same applies to handling the result as to bit expressions. More specifically, during assignment to an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), the resulting byte chain is handled like a byte string of data type xstring, and when passing a generic typed formal parameter, it is handled like a byte field of data type x. An empty byte chain defines a generically typed formal parameter as a byte field with a length of 1 and a hexadecimal value of "00".

Hints

-   The function [boolx](javascript:call_link\('abenboole_functions.htm'\)) is a bit function in principle, but due to its properties is handled as a [logical function](javascript:call_link\('abenlogic_function_glosry.htm'\) "Glossary Entry").
-   Unlike the statement [SET BIT](javascript:call_link\('abapset_bit.htm'\)), the result field does not need to be filled first.
-   Counting the bits from the [most significant bit (MSB)](javascript:call_link\('abenmost_significant_bit_glosry.htm'\) "Glossary Entry") can be unexpected when working with components that count from the [least significant bit (LSB)](javascript:call_link\('abenleast_significant_bit_glosry.htm'\) "Glossary Entry").

Executable Example

[Setting Bits](javascript:call_link\('abenbit_func_abexa.htm'\))