  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Character and Byte String Processing - Overview](javascript:call_link\('abenstring_processing_oview.htm'\)) → 

Operands in Character String and Byte String Processing

-   [Operands in Character String Processing](#abenstring-processing-operands-1--------operands-in-byte-string-processing---@ITOC@@ABENSTRING_PROCESSING_OPERANDS_2)

Operands in Character String Processing

In character string processing (defined by the addition IN CHARACTER MODE in overloaded statements) and in statements that only support character string processing, the relevant operands must be character-like. This is because the operands are processed by character and the repository of the characters in the memory is dependent on the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used. This condition is vital to ensure that character string processing functions correctly.

In Unicode programs, only data objects, return values, or results with the character-like data types c, n, and string, plus the date/time types d and t, or structures with exclusively flat character-like components are permitted as character-like operands. Data objects with the types n, d, and t and structures with exclusively character-like components are handled like data objects with the type c.

Notes

-   If the character-like data objects n, d, and t are used in character string processing, it must be noted that the type-friendly conversion rules do not apply to the assignment of intermediate results to target fields; instead the conversion rules for data type c apply.

-   No structures can be used as character-like operands in [string expressions](javascript:call_link\('abapcompute_string.htm'\)) and [string functions](javascript:call_link\('abenstring_functions.htm'\)) with named arguments.

Operands in Byte String Processing

In byte string processing (defined by the addition IN BYTE MODE in overloaded statements) and in the statements GET BIT and SET BIT, the relevant operands must be byte-like. This is because the operands are processed by byte.