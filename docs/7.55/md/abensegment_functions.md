  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for String Processing](javascript:call_link\('abenstring_processing_expr_func.htm'\)) →  [String Functions (string\_func)](javascript:call_link\('abenstring_functions.htm'\)) →  [string\_func - Processing Functions](javascript:call_link\('abenprocess_functions.htm'\)) → 

string\_func - segment

Syntax

... segment( [val = text](javascript:call_link\('abenstring_functions_val.htm'\)) index = idx *\[*sep*|*space = delim*\]* ) ...

Effect

This function returns the occurrence of a segment of the argument text specified by [index](javascript:call_link\('abenstring_functions_val.htm'\)). A segment is defined by limits. The start and end of the string in text are the outer limits. Inner limits delim can be passed to sep or space as follows:

-   If the argument sep is filled, the substring specified in delim is searched for (case-sensitive) in text and used as a limit. If a substring specified in delim occurs directly one after another in text, an empty segment is created, and an empty string is returned for this segment.

-   If the argument space is filled, each individual character is searched for in delim (case-sensitive) and this is used as a limit. If the individual characters specified in delim occur directly one after another in text, no empty segment is created, and no result is returned.

The limits are not part of the segments. If sep or space are not specified, the argument sep is filled implicitly a single blank. In both cases, specifying an empty string raises an exception of the class CX\_SY\_STRG\_PAR\_VAL.

If index is positive, the occurrences are counted from the left and if index is negative from the right. The values 1, 2, .... indicate the first, second, ... occurrence. The values -1, -2, .... indicate the last, last but one, ... occurrences. If the value of index is 0, or the specified segment does not exist, an exception of the class CX\_SY\_STRG\_PAR\_VAL is raised.

delim is a [character-like expression position](javascript:call_link\('abencharlike_expr_position_glosry.htm'\) "Glossary Entry") and index is a [numeric expression position](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") with type i. If delim has a fixed length, any trailing blanks are ignored.

The return value has the type string.

Hint

If the substring specified in delim is not found, the entire character string forms a single segment, which can only be addressed by using the values 1 or -1 for index.

Example

The following function calls return "AB", "CD", "EF", "GH" respectively, and raise an exception at the end.

DATA  result TYPE string.
DO.
  TRY.
      result = segment( val   = 'AB\\brCD\\brEF\\brGH'
                        index = sy-index
                        sep   = \`\\br\` ).
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

[String Functions, cmax, cmin, and segment](javascript:call_link\('abencmax_cmin_function_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_STRG\_PAR\_VAL

-   Cause: limit in sep is empty or the occurrence in index is 0 or was not found.
    Runtime error: STRG\_ILLEGAL\_PAR