  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Numeric Calculations](javascript:call_link\('abencompute_expressions.htm'\)) →  [Numerical Functions](javascript:call_link\('abenmathematical_functions.htm'\)) → 

nmax, nmin - Numeric Extremum Functions

Syntax Forms

... nmax*|*nmin( val1 = arg1 val2 = arg2 *\[*val3 = arg3*\]* ... *\[*val9 = arg9*\]* ) ...

Effect

These functions return the value of the greatest or the least of the arguments passed. A minimum of two arguments, arg1 and arg2, and a maximum of nine arguments must be passed. Here, the optional input parameters val3 to val9 must be filled in ascending order without gaps. The arguments arg1 to arg9 are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry").

The following applies to the data type of the return value:

-   Outside of an [arithmetic expression](javascript:call_link\('abenarithmetic_expression_glosry.htm'\) "Glossary Entry"), a [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") is determined from all the arguments, and it is used to perform the comparison. The calculation type is determined just like an [arithmetic expression](javascript:call_link\('abenarith_type.htm'\)) and also determines the data type of the return value.

-   In an arithmetic expression, the arguments of the function contribute to the [calculation type](javascript:call_link\('abencalculation_type_glosry.htm'\) "Glossary Entry") of the entire expression and the function is calculated using the calculation type. If an argument itself is an arithmetic expression, its operands contribute to the entire calculation type and the argument is also calculated using this type.

Notes

-   The extremum functions [cmax](javascript:call_link\('abencmax_cmin_functions.htm'\)) and [cmin](javascript:call_link\('abencmax_cmin_functions.htm'\)) can be used to determine character-like extreme values.
    
-   When using two input parameters:
    

result =  nmax*|*nmin( val1 = arg1 val2 = arg2 )

the evaluation of the functions is equivalent to:

IF num1 >= num2 *|* num1 <= num2.
  result = num1.
ELSE.
  result = num2.
ENDIF.

When using more than two input parameters, an equivalent control structure would be more complex. Example

Example

Determines the lesser of two time stamps. Here, the initial value of the conditional operator [COND](javascript:call_link\('abenconditional_expression_cond.htm'\)) is not regarded as the least value.

CONSTANTS max\_ts TYPE timestamp VALUE 999999999999999.
DATA: ts1 TYPE timestamp,
      ts2 TYPE timestamp.
GET TIME STAMP FIELD ts1.
DATA(min\_ts) = nmin( val1 = COND timestamp( WHEN ts1 IS INITIAL
                                            THEN max\_ts ELSE ts1 )
                     val2 = COND timestamp( WHEN ts2 IS INITIAL
                                            THEN max\_ts ELSE ts2 ) ).

Executable Example

[Extremum Functions nmax, nmin](javascript:call_link\('abennmax_nmin_function_abexa.htm'\))