  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbinary_functions.htm) → 

bit-set - Bit Function

Bit functions process individual bits and return byte-like results. At present, the one bit function is available:

Syntax

... bit-set( arg ) ...

This function expects an integer numeric value as an argument. The argument is a [numerical expression position](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of the type i.

-   If the argument is positive, the function creates a byte chain in which the bit has the value 1 in the place specified by the argument. All other bits have the value 0.

-   If the argument has the value 0, the result is an empty byte chain.

-   If the argument is negative, the function creates a byte chain in which all bits up to and including the place specified by the argument have the value 1, and all bits behind this place have the value 0.

The length of the result is the minimum number of bytes needed to include the set bits.

The function can be used in all places in which a [bit expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbit_expression_glosry.htm "Glossary Entry") can be used, particularly in bit expressions themselves. As regards handling the result, the same applies as for bit expressions. More specifically, during assignment to an inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_inline.htm), the resulting byte chain is handled as a byte string of data type xstring, and when passing a generic typed formal parameter it is handled as a byte field of data type x. An empty byte chain stamps a generically typed formal parameter as a byte field with a length of 1 and a hexadecimal value of "00".

Notes

-   The function [boolx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenboole_functions.htm) is a bit function in principle, but due to its properties is handled as a [logical function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogic_function_glosry.htm "Glossary Entry").

-   Unlike the statement [SET BIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_bit.htm), the result field does not need to be filled first.