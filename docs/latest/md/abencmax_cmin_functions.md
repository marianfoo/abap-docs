---
title: "Syntax"
description: |
  ... cmaxcmin( val1 = text1(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)  val2 = text2(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)  val3 = text3(https://help.sap.com/doc/abapdocu_latest_ind
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencmax_cmin_functions.htm"
abapFile: "abencmax_cmin_functions.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abencmax", "cmin", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20cmax%2C%20cmin%2C%20ABENCMAX_CMIN_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - cmax, cmin

Syntax

... cmax*|*cmin( [val1 = text1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)  [val2 = text2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)
              *\[* [val3 = text3](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)*\]* ... *\[* [val9 = text9](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm)*\]* ) ...

Effect

These [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) return the value of the biggest or the smallest of the character-like arguments [text1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm), [text2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm), ... passed. The content of the arguments is compared from left to right in the evaluation. The first different character from the left determines which operand is bigger or smaller based on the order in the [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry") used.

At least two arguments, [text1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm) and [text2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_val.htm), and a maximum of nine arguments must be passed. Here, the optional input parameters val3 through val9 must be filled in ascending order without gaps.

The return value has the type string.

Hints

-   The extremum functions [nmax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennmax_nmin_functions.htm) and [nmin](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennmax_nmin_functions.htm) can be used to determine numeric extreme values.
-   Character-like extremum functions, like numeric extremum functions, can be traced back to the equivalent control structures using comparison operators. Remember that, unlike with the usual [ABAP comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_operands.htm), shorter arguments of fixed lengths are not padded to the length of longer arguments by padding them with blanks.
-   As in comparisons with comparison operators, the current [locale](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocale_glosry.htm "Glossary Entry") is not significant when determining the extreme values.

Example

The example demonstrates how to find the smallest and largest letters of a random set, which is represented here by the lines of an internal table. Of course, in this case the result can also be achieved by sorting the internal table, which is used here for verification.

TYPES itab TYPE TABLE OF c WITH EMPTY KEY.
FINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(abcde) = 'abcdefghijklmnopqrstuvwxyz'.
FINAL(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( t ) min = 0 max = strlen( abcde ) - 1 ).
DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 9
                         LET off = rnd->get\_next( ) IN
                         ( abcde+off(1) ) ).
FINAL(min) =  cmin( val1 = itab\[ 1 \]
                   val2 = itab\[ 2 \]
                   val3 = itab\[ 3 \]
                   val4 = itab\[ 4 \]
                   val5 = itab\[ 5 \]
                   val6 = itab\[ 6 \]
                   val7 = itab\[ 7 \]
                   val8 = itab\[ 8 \]
                   val9 = itab\[ 9 \] ).
FINAL(max) =  cmax( val1 = itab\[ 1 \]
                   val2 = itab\[ 2 \]
                   val3 = itab\[ 3 \]
                   val4 = itab\[ 4 \]
                   val5 = itab\[ 5 \]
                   val6 = itab\[ 6 \]
                   val7 = itab\[ 7 \]
                   val8 = itab\[ 8 \]
                   val9 = itab\[ 9 \] ).
SORT itab BY table\_line.
ASSERT min = itab\[ 1 \].
ASSERT max = itab\[ lines( itab ) \].

Executable Example

[String functions cmax, cmin, and segment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencmax_cmin_function_abexa.htm).