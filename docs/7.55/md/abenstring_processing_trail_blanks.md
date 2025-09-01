  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Character String and Byte String Processing , Overview](javascript:call_link\('abenstring_processing_oview.htm'\)) → 

Trailing Blanks in Character String Processing

In statements for character string processing, leading blanks for operands of data types with fixed lengths (c, n, d, and t or character-like structures) are generally preserved and trailing blanks are truncated. Exceptions to this rule are explained in the affected statements. All blanks are generally preserved for operands of the data type string.

If the result of a statement for character string processing is assigned to an operand, it is generally padded on the right with blanks if the result is shorter than the length of the operand. Assignments to a string generally adapt the string length to the length of the result. Exceptions to this rule are explained in the affected statements.

Programming Guideline

[Do not use trailing blanks in text field literals](javascript:call_link\('abentrailing_blanks_literals_guidl.htm'\) "Guideline")

Hints

-   Truncating trailing blanks especially affects the [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") ' ' and the constant [space](javascript:call_link\('abenspace.htm'\)). These should therefore never be listed in operand positions where trailing blanks are truncated.

-   In result fields that are too long, padding with blanks can produce invalid values, if the fields have the type n, d, or t.

-   The preservation of trailing blanks can be forced for assignments using the addition RESPECTING BLANKS of the statement [CONCATENATE](javascript:call_link\('abapconcatenate.htm'\)).

Example

The result of the following [concatenation](javascript:call_link\('abapconcatenate.htm'\)) is a string with exactly one blank. The blank characters in space and ' ' are ignored. At the operand position after SEPARATED BY however, the blank character that is contained explicitly in '' is not ignored. If the addition RESPECTING BLANKS was used, the result would be a string with three blanks.

DATA text TYPE string.
CONCATENATE space ' ' INTO text SEPARATED BY ''.