  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Character String and Byte String Processing, Overview](javascript:call_link\('abenstring_processing_oview.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Operands in Character String and Byte String Processing, ABENSTRING_PROCESSING_OPERAN
DS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Operands in Character String and Byte String Processing

-   [Operands in Character String Processing](#@@ITOC@@ABENSTRING_PROCESSING_OPERANDS_1)
-   [Operands in Byte String Processing](#@@ITOC@@ABENSTRING_PROCESSING_OPERANDS_2)

Operands in Character String Processing   

In character string processing, which is defined by the addition IN CHARACTER MODE in overloaded statements, and in statements that only support character string processing, the relevant operands must be character-like because the operands are processed by character and the storage of the characters in the memory depends on the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used. This condition is vital to ensure that character string processing functions correctly.

In Standard ABAP, only data objects, return values, or results with the character-like data types c, n, and string, and the date/time types d and t, or structures with exclusively flat character-like components are allowed as character-like operands. Data objects with the types n, d, and t and structures with exclusively character-like components are handled like data objects with the type c.

Hints

-   If the character-like data objects n, d, and t are used in character string processing, it must be noted that the type-compliant conversion rules do not apply to the assignment of interim results to target fields and instead the conversion rules for data type c apply.
-   No structures can be used as character-like operands in [string expressions](javascript:call_link\('abapcompute_string.htm'\)) and [string functions](javascript:call_link\('abenstring_functions.htm'\)) with named arguments.

Operands in Byte String Processing   

In byte string processing, which is triggered by the addition IN BYTE MODE in overloaded statements, and in the statements GET BIT and SET BIT, the relevant operands must be byte-like. This is because the operands are processed by byte.