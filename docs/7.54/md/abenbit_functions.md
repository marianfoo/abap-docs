  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) →  [Byte String Functions](javascript:call_link\('abenbinary_functions.htm'\)) → 

bit-set - Bit Function

Bit functions process individual bits and return byte-like results. At present, the one bit function is available:

Syntax

... bit-set( arg ) ...

This function expects an integer numeric value as an argument. The argument is a [numerical expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of the type i.

-   If the argument is positive, the function creates a byte chain in which the bit has the value 1 in the place specified by the argument. All other bits have the value 0.

-   If the argument has the value 0, the result is an empty byte chain.

-   If the argument is negative, the function creates a byte chain in which all bits up to and including the place specified by the argument have the value 1, and all bits behind this place have the value 0.

The length of the result is the minimum number of bytes needed to include the set bits.

The function can be used in all places in which a [bit expression](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry") can be used, particularly in bit expressions themselves. As regards handling the result, the same applies as for bit expressions. More specifically, during assignment to an inline declaration [DATA(var)](javascript:call_link\('abendata_inline.htm'\)), the resulting byte chain is handled as a byte string of data type xstring, and when passing a generic typed formal parameter it is handled as a byte field of data type x. An empty byte chain stamps a generically typed formal parameter as a byte field with a length of 1 and a hexadecimal value of "00".

Notes

-   The function [boolx](javascript:call_link\('abenboole_functions.htm'\)) is a bit function in principle, but due to its properties is handled as a [logical function](javascript:call_link\('abenlogic_function_glosry.htm'\) "Glossary Entry").

-   Unlike the statement [SET BIT](javascript:call_link\('abapset_bit.htm'\)), the result field does not need to be filled first.