---
title: "Syntax Forms"
description: |
  ... cmaxcmin( val1 = text1(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm)  val2 = text2(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm)  val3 = text3(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/e
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencmax_cmin_functions.htm"
abapFile: "abencmax_cmin_functions.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abencmax", "cmin", "functions"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprocess_functions.htm) → 

string\_func - cmax, cmin

Syntax Forms

... cmax*|*cmin( [val1 = text1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm)  [val2 = text2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm)
              *\[* [val3 = text3](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm)*\]* ... *\[* [val9 = text9](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm)*\]* ) ...

Effect

These [built-in functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) return the value of the biggest or the smallest of the character-like arguments [text1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm), [text2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm), ... passed. The content of the arguments is compared from left to right in the evaluation. The first different character from the left determines which operand is bigger or smaller based on the order in the [code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencodepage_glosry.htm "Glossary Entry") used.

At least two arguments, [text1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm) and [text2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstring_functions_val.htm), and a maximum of nine arguments must be passed. Here, the optional input parameters val3 through val9 must be filled in ascending order without gaps.

The return value has the type string.

Hints

-   The extremum functions [nmax](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennmax_nmin_functions.htm) and [nmin](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennmax_nmin_functions.htm) can be used to determine numeric extreme values.
-   Character-like extremum functions, like numeric extremum functions, can be traced back to the equivalent control structures using comparison operators. Remember that, unlike with the usual [ABAP comparison rules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlogexp_rules_operands.htm), shorter arguments of fixed lengths are not padded to the length of longer arguments by padding them with blanks.
-   As in comparisons with comparison operators, the current [locale](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlocale_glosry.htm "Glossary Entry") is not significant when determining the extreme values.

Example

The example demonstrates how to find the smallest and largest letters of a random set, which is represented here by the lines of an internal table. Of course, in this case the result can also be achieved by sorting the internal table, which is used here for verification.

TYPES itab TYPE TABLE OF char1 WITH EMPTY KEY.
DATA(rnd) = cl\_abap\_random\_int=>create(
  seed = CONV i( sy-uzeit ) min = 0 max = strlen( sy-abcde ) - 1 ).
DATA(itab) = VALUE itab( FOR i = 1 UNTIL i > 9
                         LET off = rnd->get\_next( ) IN
                         ( sy-abcde+off(1) ) ).
DATA(min) =  cmin( val1 = itab\[ 1 \]
                   val2 = itab\[ 2 \]
                   val3 = itab\[ 3 \]
                   val4 = itab\[ 4 \]
                   val5 = itab\[ 5 \]
                   val6 = itab\[ 6 \]
                   val7 = itab\[ 7 \]
                   val8 = itab\[ 8 \]
                   val9 = itab\[ 9 \] ).
DATA(max) =  cmax( val1 = itab\[ 1 \]
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

[String functions cmax, cmin, and segment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencmax_cmin_function_abexa.htm).