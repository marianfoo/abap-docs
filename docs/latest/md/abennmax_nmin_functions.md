---
title: "Syntax"
description: |
  ... nmaxnmin( val1 = arg1 val2 = arg2 val3 = arg3 ... val9 = arg9 ) ... Effect These built-in functions(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) return the value of the largest or smallest of the passed arguments. A minimum of t
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennmax_nmin_functions.htm"
abapFile: "abennmax_nmin_functions.htm"
keywords: ["do", "if", "try", "data", "abennmax", "nmin", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompute_expressions.htm) →  [Numeric Functions (num\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmathematical_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20num_func%20-%20nmax%2C%20nmin%2C%20ABENNMAX_NMIN_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

num\_func - nmax, nmin

Syntax

... nmax*|*nmin( val1 = arg1 val2 = arg2 *\[*val3 = arg3*\]* ... *\[*val9 = arg9*\]* ) ...

Effect

These [built-in functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) return the value of the largest or smallest of the passed arguments. A minimum of two arguments, arg1 and arg2 must, and a maximum of nine arguments can be passed. Here, the optional input parameters val3 to val9 must be filled in ascending order without gaps. The arguments arg1 to arg9 are [numeric expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry").

The following applies to the data type of the return value:

-   Outside of an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarithmetic_expression_glosry.htm "Glossary Entry"), a [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry") is determined from all arguments and used to perform the comparison. The calculation type is determined just like an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarith_type.htm) and also determines the data type of the return value.
-   Within an arithmetic expression, the arguments of the function contribute to the [calculation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalculation_type_glosry.htm "Glossary Entry") of the entire expression and the function is calculated using the calculation type. If an argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated using this type.

Hints

-   The extremum functions [cmax](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencmax_cmin_functions.htm) and [cmin](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencmax_cmin_functions.htm) can be used to determine character-like extreme values.
-   When using two input parameters:
    
    result =  nmax*|*nmin( val1 = arg1 val2 = arg2 )
    

the evaluation of the functions is equivalent to:

IF num1 >= num2 *|* num1 <= num2.
  result = num1.
ELSE.
  result = num2.
ENDIF.

When using more than two input parameters, an equivalent control structure would be more complex.

Example

Determination of the smaller of two time stamps in packed numbers, whereby the initial value of the conditional operator [COND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_cond.htm) is not regarded as the smallest value.

CONSTANTS max\_ts TYPE timestamp VALUE 999999999999999.
DATA: ts1 TYPE timestamp,
      ts2 TYPE timestamp.
GET TIME STAMP FIELD ts1.
FINAL(min\_ts) =
  nmin( val1 = COND timestamp( WHEN ts1 IS INITIAL
                               THEN max\_ts ELSE ts1 )
        val2 = COND timestamp( WHEN ts2 IS INITIAL
                               THEN max\_ts ELSE ts2 ) ) ##type.

Executable Example

[Extremum Functions nmax, nmin](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennmax_nmin_function_abexa.htm)