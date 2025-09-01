  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Character and Byte String Processing - Overview](javascript:call_link\('abenstring_processing_oview.htm'\)) → 

Trailing Blanks in Character String Processing

Statements for character string processing generally preserve leading blanks for operands of data types with fixed lengths (c, n, d, and t or character-like structures) and cut off trailing blanks. Exceptions to this rule are explained in the affected statements. All blanks are generally preserved for operands of the data type string.

If the result of a statement for character string processing is assigned to an operand, the operand is generally padded on the right with blanks if the result is shorter than the length of the operand. String assignments generally adapt the string length to the length of the result. Exceptions to this rule are explained in the affected statements.

Programming Guideline

[Do not use trailing blanks in text field literals](javascript:call_link\('abentrailing_blanks_literals_guidl.htm'\) "Guideline")

Notes

-   The cutting off of trailing blanks especially affects the [text field literal](javascript:call_link\('abentext_field_literal_glosry.htm'\) "Glossary Entry") ' ' and the constant [space](javascript:call_link\('abenspace.htm'\)). These should therefore never be specified in operand positions where trailing blanks are cut off.

-   In long results fields, padding with blanks can produce invalid values, if the fields have the type n, d, or t.

-   The preservation of trailing blanks can be forced for assignments by using the addition RESPECTING BLANKS of the statement [CONCATENATE](javascript:call_link\('abapconcatenate.htm'\)).

Example

The result of the following [concatenation](javascript:call_link\('abapconcatenate.htm'\)) is a string with exactly one blank. The blank characters in space and ' ' are ignored. At operand positions after SEPARATED BY however, the blank character which is contained explicitly in '' is not ignored. If the addition RESPECTING BLANKS is used, the result is a string with three blanks.

DATA text TYPE string.
CONCATENATE space ' ' INTO text SEPARATED BY ''.