---
title: "Syntax"
description: |
  ... segment( val = text(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm) index = idx sepspace = delim ) ... Effect This function returns the occurrence of a segment of the argument text specified by index(https://help.sap.com/doc/abapdocu_754_in
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensegment_functions.htm"
abapFile: "abensegment_functions.htm"
keywords: ["do", "if", "case", "try", "catch", "class", "data", "abensegment", "functions"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions.htm) →  [Processing Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocess_functions.htm) → 

segment - Segment Function

Syntax

... segment( [val = text](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm) index = idx *\[*sep*|*space = delim*\]* ) ...

Effect

This function returns the occurrence of a segment of the argument text specified by [index](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_functions_val.htm). A segment is defined by delimiters. The beginning and ending of the string in text are the outer delimiters. Inner delimiters delim can be passed to sep or space as follows:

-   If the argument sep is provided, the substring specified in delim is searched for (case-sensitive as in text) and used as a delimiter. If a substring specified in delim occurs directly one after another in text, an empty segment is created and an empty string is returned for this segment.

-   If the argument space is provided, each individual character is searched for in delim (case-sensitive) and this is used as a delimiter. If the individual characters specified in delim occur directly one after another in text, no empty segment is created and no result is returned.

The delimiters are not part of the segments. If sep or space are not specified, the argument sep is filled implicitly a single blank. In both cases, specifying an empty string raises an exception of the class CX\_SY\_STRG\_PAR\_VAL.

If index is positive, the occurrences are counted from the left; if index is negative, the instance are counted from the right. The values 1, 2, .... indicate the first, second, ... occurrences. The values -1, -2, .... indicate the last, last but one, ... occurrences. If the value of index is 0, or the specified segment does not exist, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised.

delim is a [character-like expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry") and index is a [numeric expression position](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") with type i. If delim has a fixed length, trailing blanks are ignored.

The return code has the type string.

Note

If the substring specified in delim is not found, the entire character string forms a single segment. This segment can only be addressed by using the values 1 or -1 for index.

Example

The following function calls produce "AB", "CD", "EF", "GH", respectively, and raise an exception at the end.

DATA  result TYPE string.
DO.
  TRY.
      result = segment( val   = 'AB\\brCD\\brEF\\brGH'
                        index = sy-index
                        sep = \`\\br\` ).
      ...
    CATCH cx\_sy\_strg\_par\_val.
      EXIT.
  ENDTRY.
ENDDO.
DO.
  TRY.
      result = segment( val   = 'AB  CD - EF\_GH'
                        index = sy-index
                        space = \` -\_\` ).
      ...
    CATCH cx\_sy\_strg\_par\_val.
      EXIT.
  ENDTRY.
ENDDO.

Executable Example

[String Functions, cmax, cmin, and segment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencmax_cmin_function_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: Delimiter in sep is empty or the occurrence in index is 0 or was not found.
    Runtime error: STRG\_ILLEGAL\_PAR