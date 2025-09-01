  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Accesses](javascript:call_link\('abenabap_sql.htm'\)) →  [Open SQL](javascript:call_link\('abenopensql.htm'\)) →  [Open SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [Open SQL - Built-In Functions sql\_func](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) →  [Open SQL - SQL Functions](javascript:call_link\('abenopen_sql_functions.htm'\)) → 

sql\_exp - sql\_num\_func

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls an numeric function func as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or operand of an expression in Open SQL. The arguments arg1, arg2, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis.

The following table shows the numeric functions that can be specified as SQL expressions and the requirements made on the arguments. The meaning of the functions can be found under [SQL Functions for Numeric Values](javascript:call_link\('abensql_functions_numeric.htm'\)).

Syntax

Valid Argument Types

Result Type

[ABS( expr )](javascript:call_link\('abensql_functions_numeric.htm'\))

All numeric types except [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry")

Type of the argument

[CEIL( expr )](javascript:call_link\('abensql_functions_numeric.htm'\))

DEC, CURR, and QUAN with decimal places

DEC without decimal places in the length of the result

[DIV( expr1,expr2 )](javascript:call_link\('abensql_functions_numeric.htm'\))

INT1, INT2, INT4, and INT8 plus DEC, CURR, and QUAN without decimal places

Type of the argument with the greatest value range.

[DIVISION( expr1,expr2,dec )](javascript:call_link\('abensql_functions_numeric.htm'\))

expr1, expr2: INT1, INT2, INT4, INT8, DEC, CURR, and QUAN
dec: Literal or constant [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8 greater than or equal to 0 and not greater than the maximum value of 6 and the length of exp2 plus the number of decimal places of exp1 plus 1

DEC with dec decimal places. The length of the result is the length of exp1 minus the decimal places in exp1 plus the decimal places in exp2 plus dec. This value must not be greater than 31.

[FLOOR( expr )](javascript:call_link\('abensql_functions_numeric.htm'\))

DEC, CURR, and QUAN with decimal places

DEC without decimal places in the length of the result

[MOD( expr1,expr2 )](javascript:call_link\('abensql_functions_numeric.htm'\))

INT1, INT2, INT4, and INT8 plus DEC, CURR, and QUAN without decimal places

Type of the argument with the greatest value range.

[ROUND( expr,pos )](javascript:call_link\('abensql_functions_numeric.htm'\))

expr: INT1, INT2, INT4, INT8, DEC, CURR, and QUAN
pos: INT1, INT2, and INT4

Type of expr, where INT1 and INT2 are updated after INT4 and CURR and QUAN are updated after DEC.

The arguments expr, expr1, expr3, and pos can be [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), more specifically individual columns, literals, SQL functions, host variables, or host expressions. The possible types are specified as predefined [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)). The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](javascript:call_link\('abenddic_builtin_types.htm'\)) to the dictionary types above.

If an argument of a numeric function has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the full numeric function is the null value.

Note

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