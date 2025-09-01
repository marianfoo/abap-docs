---
title: "Syntax Forms"
description: |
  ... cmaxcmin( val1 = text1(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm)  val2 = text2(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm)  val3 = text3(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/e
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencmax_cmin_functions.htm"
abapFile: "abencmax_cmin_functions.htm"
keywords: ["do", "if", "case", "try", "data", "types", "internal-table", "abencmax", "cmin", "functions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_processing_expr_func.htm) →  [String Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions.htm) →  [Processing Functions for Character-Like Arguments](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocess_functions.htm) → 

cmax, cmin - Character-Like Extreme Value Functions

Syntax Forms

... cmax*|*cmin( [val1 = text1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm)  [val2 = text2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm)
              *\[* [val3 = text3](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm)*\]* ... *\[*[val9 = text9](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm)*\]* ) ...

Effect

These functions return the value of the biggest or the smallest of the character-like arguments [text1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm), [text2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm), ... passed. The content of the arguments is compared from left to right in the evaluation. The first different character from the left decides which operand is bigger or smaller on the basis of the sequence in the [code page](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencodepage_glosry.htm "Glossary Entry") used.

At least two arguments, [text1](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm) and [text2](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_functions_val.htm), and a maximum of nine arguments must be passed. Here, the optional input parameters val3 through val9 must be filled in ascending order without gaps.

The return code has the type string.

Notes

-   The extreme functions [nmax](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennmax_nmin_functions.htm) and [nmin](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennmax_nmin_functions.htm) can be used to determine numeric extreme values.
    
-   Character-like extreme functions, like numeric extreme functions, can be traced back to the equivalent control structures using relational operators. Remember that, unlike with the usual [ABAP comparison rules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_rules_operands.htm), shorter arguments of fixed lengths are not padded to the length of longer arguments by entering blanks.
    
-   As with comparisons with relational operators, the current [locale](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlocale_glosry.htm "Glossary Entry") is not significant when determining the extreme values.
    

Example

The example demonstrates how the smallest and largest letters of a random set are found, represented here by the rows of an internal table. Of course, in this case the result can also be achieved by sorting the internal table, which is done here for verification.

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

[String functions cmax, cmin, and segment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencmax_cmin_function_abexa.htm).