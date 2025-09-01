---
title: "Syntax"
description: |
  ... bit-set( arg ) ... This built-in function(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) expects an integer numeric value as an argument. The argument is a numeric expression position(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumer
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_functions.htm"
abapFile: "abenbit_functions.htm"
keywords: ["do", "if", "try", "data", "abenbit", "functions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions (bit\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbinary_functions.htm) → 

bit\_func - bit-set

Bit functions process individual bits and return byte-like results. Currently, one bit function is available:

Syntax

... bit-set( arg ) ...

This [built-in function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) expects an integer numeric value as an argument. The argument is a [numeric expression position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of the type i.

-   If the argument is positive, the function creates a byte chain in which the bit has the value 1 at the position specified by the argument. All other bits have the value 0. The position is counted from left to right starting with the [most significant bit (MSB)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmost_significant_bit_glosry.htm "Glossary Entry").
-   If the argument has the value 0, the result is an empty byte chain.
-   If the argument is negative, the function creates a byte chain in which all bits up to and including the place specified by the argument have the value 1 and all bits after this position have the value 0.

The length of the result is the minimum number of bytes needed to include the set bits.

The function can be used in all places where a [bit expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_expression_glosry.htm "Glossary Entry") can be used, particularly in bit expressions themselves. The same applies to handling the result as to bit expressions. More specifically, during assignment to an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm), the resulting byte chain is handled like a byte string of data type xstring, and when passing a generic typed formal parameter, it is handled like a byte field of data type x. An empty byte chain defines a generically typed formal parameter as a byte field with a length of 1 and a hexadecimal value of "00".

Hints

-   The function [boolx](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenboole_functions.htm) is a bit function in principle, but due to its properties is handled as a [logical function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogic_function_glosry.htm "Glossary Entry").
-   Unlike the statement [SET BIT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_bit.htm), the result field does not need to be filled first.
-   Counting the bits from the [most significant bit (MSB)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmost_significant_bit_glosry.htm "Glossary Entry") can be unexpected when working with components that count from the [least significant bit (LSB)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenleast_significant_bit_glosry.htm "Glossary Entry").

Executable Example

[Setting Bits](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbit_func_abexa.htm)