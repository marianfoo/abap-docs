  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - SQL Functions](javascript:call_link\('abenabap_sql_functions.htm'\)) → 

sql\_func - Numeric Functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls an numeric function func as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or operand of an expression in ABAP SQL. The arguments arg1, arg2, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The following table shows the numeric functions that can be specified as SQL expressions and the requirements on the arguments. The meaning of the functions can be found under [SQL Functions for Numeric Values](javascript:call_link\('abensql_functions_numeric.htm'\)). The value "x" in the Table Buffer column indicates that the function can be executed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and that the use of [this function](javascript:call_link\('abenbuffer_expressions.htm'\)) does not bypass [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").

Syntax

Result

Valid Argument Types

Result Type

Table Buffer

[ABS( sql\_exp )](javascript:call_link\('abensql_functions_numeric.htm'\))

Absolute amount of sql\_exp

All numeric types except the [replacement types for decimal floating point numbers](javascript:call_link\('abenddic_decimal_floating_point.htm'\))

Type of the argument

x

[CEIL( sql\_exp )](javascript:call_link\('abensql_functions_numeric.htm'\))

Rounded to the first integer that is greater than or equal to the value of sql\_exp

DECFLOAT16 and DECFLOAT34 as well as DEC, CURR, and QUAN with decimal places

DEC without decimal places in the length of the result

x

[DIV( sql\_exp1,sql\_exp2 )](javascript:call_link\('abensql_functions_numeric.htm'\))

The result of a division of sql\_exp1 by sql\_exp2 is rounded to an integer. The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have the same sign, and negative if the arguments have different signs. Exception: sql\_exp2 has the value 0.

INT1, INT2, INT4, and INT8 plus DEC, CURR, and QUAN without decimal places

Type of the argument with the greatest value range.

x

[DIVISION( sql\_exp1,sql\_exp2,dec )](javascript:call_link\('abensql_functions_numeric.htm'\))

Division of sql\_exp1 by sql\_exp2. The result is rounded to dec decimal places.

sql\_exp1, sql\_exp2: INT1, INT2, INT4, INT8, DEC, CURR, and QUAN
dec: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8 greater than or equal to 0 and not greater than the maximum value of 6 and the length of sql\_exp2 plus the number of decimal places of sql\_exp1 plus 1

DEC with dec decimal places. The length of the result is the length of sql\_exp1 minus the decimal places in sql\_exp1 plus the decimal places in sql\_exp2 plus dec. This value must not be greater than 31.

\-

[FLOOR( sql\_exp )](javascript:call_link\('abensql_functions_numeric.htm'\))

Largest integer number not greater than the value of sql\_exp

DECFLOAT16 and DECFLOAT34 as well as DEC, CURR, and QUAN with decimal places

DEC without decimal places in the length of the result

x

[MOD( sql\_exp1,sql\_exp2 )](javascript:call_link\('abensql_functions_numeric.htm'\))

Positive or negative integer remainder of the division of sql\_exp1 by sql\_exp2

INT1, INT2, INT4, and INT8 plus DEC, CURR, and QUAN without decimal places

Type of the argument with the greatest value range.

x

[ROUND( sql\_exp,pos )](javascript:call_link\('abensql_functions_numeric.htm'\))

Rounded value of sql\_exp. If pos is greater than 0, the value is rounded to the position pos on the right of the decimal separator. If this is not the case, position abs(pos)+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient.

sql\_exp: INT1, INT2, INT4, INT8, DEC, CURR, and QUAN
pos: INT1, INT2, and INT4

Type of sql\_exp, where INT1 and INT2 are updated after INT4, and CURR and QUAN are converted to DEC.

\-

The arguments sql\_exp, sql\_exp1, sql\_exp3, and pos can be any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) with the appropriate data types. The possible types are specified as built-in [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)). The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](javascript:call_link\('abenddic_builtin_types.htm'\)) to the dictionary types above.

If an argument of a numeric function has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the full numeric function is the null value.

Hint

The SQL functions [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)) behave differently with respect to the signs than the ABAP operators [DIV](javascript:call_link\('abenarith_operators.htm'\)) and [MOD](javascript:call_link\('abenarith_operators.htm'\)). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](javascript:call_link\('abenarith_operators.htm'\)), on the other hand, only produces positive results. See [Example](javascript:call_link\('abensql_functions_numeric.htm'\)).

Example

Conversion of flight time from minutes to hours.

SELECT FROM spfli
       FIELDS carrid,
              connid,
              DIVISION( fltime,60,2 ) AS fltime
       ORDER BY carrid, connid
       INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Executable Example

[SQL Expressions, Arithmetic Calculations](javascript:call_link\('abensql_expr_arith_abexa.htm'\))