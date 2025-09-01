  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Character String and Byte String Processing - Overview](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_oview.htm) → 

Trailing Blanks in Character String Processing

Statements for character string processing generally preserve leading blanks for operands of data types with fixed lengths (c, n, d, and t or character-like structures) and cut off trailing blanks. Exceptions to this rule are explained in the affected statements. All blanks are generally preserved for operands of the data type string.

If the result of a statement for character string processing is assigned to an operand, the operand is generally padded on the right with blanks if the result is shorter than the length of the operand. String assignments generally adapt the string length to the length of the result. Exceptions to this rule are explained in the affected statements.

Programming Guideline

[Do not use trailing blanks in text field literals](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentrailing_blanks_literals_guidl.htm "Guideline")

Notes

-   The cutting off of trailing blanks especially affects the [text field literal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_field_literal_glosry.htm "Glossary Entry") ' ' and the constant [space](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspace.htm). These should therefore never be executed at operand positions where trailing blanks are truncated.

-   In long results fields, padding with blanks can produce invalid values, if the fields have the type n, d, or t.

-   The preservation of trailing blanks can be forced for assignments by using the addition RESPECTING BLANKS of the statement [CONCATENATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconcatenate.htm).

Example

The result of the following [concatenation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconcatenate.htm) is a string with exactly one blank. The blank characters in space and ' ' are ignored. At operand positions after SEPARATED BY however, the blank character which is contained explicitly in '' is not ignored. If the addition RESPECTING BLANKS is used, the result is a string with three blanks.

DATA text TYPE string.
CONCATENATE space ' ' INTO text SEPARATED BY ''.