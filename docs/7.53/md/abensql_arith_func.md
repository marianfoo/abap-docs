  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_builtin_functions.htm) →  [ABAP SQL - SQL Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_functions.htm) → 

sql\_exp - sql\_num\_func

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls an numeric function func as an [SQL expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm) or operand of an expression in ABAP SQL. The arguments arg1, arg2, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis.

The following table shows the numeric functions that can be specified as SQL expressions and the requirements made on the arguments. The meaning of the functions can be found under [SQL Functions for Numeric Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm). The value "x" in the Table Buffer column indicates that the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentable_buffer_glosry.htm "Glossary Entry") and that the use of [this function](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuffer_expressions.htm) does not bypass [table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry").

Syntax

Valid Argument Types

Result Type

Table Buffer

[ABS( expr )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm)

All numeric types except [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendecfloat_glosry.htm "Glossary Entry")

Type of the argument

x

[CEIL( expr )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm)

DEC, CURR, and QUAN with decimal places

DEC without decimal places in the length of the result

x

[DIV( expr1,expr2 )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm)

INT1, INT2, INT4, and INT8 plus DEC, CURR, and QUAN without decimal places

Type of the argument with the greatest value range.

x

[DIVISION( expr1,expr2,dec )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm)

expr1, expr2: INT1, INT2, INT4, INT8, DEC, CURR, and QUAN
dec: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_host_variables.htm) with [ABAP type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuilt_in_types_complete.htm) b, s, i, int8 greater than or equal to 0 and not greater than the maximum value of 6 and the length of exp2 plus the number of decimal places of exp1 plus 1

DEC with dec decimal places. The length of the result is the length of exp1 minus the decimal places in exp1 plus the decimal places in exp2 plus dec. This value must not be greater than 31.

\-

[FLOOR( expr )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm)

DEC, CURR, and QUAN with decimal places

DEC without decimal places in the length of the result

x

[MOD( expr1,expr2 )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm)

INT1, INT2, INT4, and INT8 plus DEC, CURR, and QUAN without decimal places

Type of the argument with the greatest value range.

x

[ROUND( expr,pos )](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm)

expr: INT1, INT2, INT4, INT8, DEC, CURR, and QUAN
pos: INT1, INT2, and INT4

Type of expr, where INT1 and INT2 are updated after INT4 and CURR and QUAN are updated after DEC.

\-

The arguments expr, expr1, expr3, and pos can be [SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), more specifically individual columns, literals, SQL functions, host variables, or host expressions. The possible types are specified as built-in [dictionary types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) to the dictionary types above.

If an argument of a numeric function has the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the full numeric function is the null value.

Note

The SQL functions [DIV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarith_operators.htm), on the other hand, only produces positive results. See [Example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_functions_numeric.htm).

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

[SQL Expressions, Arithmetic Calculations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_expr_arith_abexa.htm)