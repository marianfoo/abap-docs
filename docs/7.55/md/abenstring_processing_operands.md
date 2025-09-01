---
title: "Operands in Character String and Byte String Processing"
description: |
  -   Operands in Character String Processing(#abenstring-processing-operands-1--------operands-in-byte-string-processing---@ITOC@@ABENSTRING_PROCESSING_OPERANDS_2) Operands in Character String Processing In character string processing, which is defined by the addition IN CHARACTER MODE in overloade
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_operands.htm"
abapFile: "abenstring_processing_operands.htm"
keywords: ["do", "if", "try", "data", "types", "abenstring", "processing", "operands"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_string.htm) →  [Character String and Byte String Processing , Overview](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_processing_oview.htm) → 

Operands in Character String and Byte String Processing

-   [Operands in Character String Processing](#abenstring-processing-operands-1--------operands-in-byte-string-processing---@ITOC@@ABENSTRING_PROCESSING_OPERANDS_2)

Operands in Character String Processing

In character string processing, which is defined by the addition IN CHARACTER MODE in overloaded statements, and in statements that only support character string processing, the relevant operands must be character-like because the operands are processed by character and the storage of the characters in the memory depends on the [code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") used. This condition is vital to ensure that character string processing functions correctly.

In Standard ABAP, only data objects, return values, or results with the character-like data types c, n, and string, and the date/time types d and t, or structures with exclusively flat character-like components are allowed as character-like operands. Data objects with the types n, d, and t and structures with exclusively character-like components are handled like data objects with the type c.

Hints

-   If the character-like data objects n, d, and t are used in character string processing, it must be noted that the type-compliant conversion rules do not apply to the assignment of interim results to target fields and instead the conversion rules for data type c apply.

-   No structures can be used as character-like operands in [string expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcompute_string.htm) and [string functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_functions.htm) with named arguments.

Operands in Byte String Processing

In byte string processing, which is triggered by the addition IN BYTE MODE in overloaded statements, and in the statements GET BIT and SET BIT, the relevant operands must be byte-like. This is because the operands are processed by byte.