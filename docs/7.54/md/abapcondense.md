---
title: "CONDENSE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcondense_shortref.htm) Syntax CONDENSE text NO-GAPS. Effect In the variable text, any leading and trailing blanks are removed and any other blanks that follow each other directly are replaced by exactly one blan
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcondense.htm"
abapFile: "abapcondense.htm"
keywords: ["do", "if", "try", "data", "abapcondense"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Statements for Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_statements.htm) → 

CONDENSE

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcondense_shortref.htm)

Syntax

CONDENSE text *\[*NO-GAPS*\]*.

Effect

In the variable text, any leading and trailing blanks are removed and any other blanks that follow each other directly are replaced by exactly one blank or, if NO-GAPS is specified, are also removed completely.

The data object text must be character-like. If the data object has a fixed length, any space created by the condense operation is padded with blanks on the right. If the data object is of the type string, its length is adapted to the result of the condense operation.

Note

A character string can also be condensed in an operand position using a [condense function](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencondense_functions.htm) which includes the functions of the statement CONDENSE.

Example

The [flat structure](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_structure_glosry.htm "Glossary Entry") sentence contains only character-like components and can therefore be assigned to the string text. After the statement CONDENSE is executed, text contains "She feeds you tea and oranges". Before the condense operation, the words in text are 30 places apart from one another.

DATA: BEGIN OF sentence,
        word1 TYPE c LENGTH 30 VALUE 'She',
        word2 TYPE c LENGTH 30 VALUE 'feeds',
        word3 TYPE c LENGTH 30 VALUE 'you',
        word4 TYPE c LENGTH 30 VALUE 'tea',
        word5 TYPE c LENGTH 30 VALUE 'and',
        word6 TYPE c LENGTH 30 VALUE 'oranges',
      END OF sentence,
      text TYPE string.
text = sentence.
CONDENSE text.