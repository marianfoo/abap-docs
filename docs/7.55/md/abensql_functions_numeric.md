  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\)) → 

DDIC - SQL Functions for Numeric Values

The following table shows the numeric SQL functions that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The columns ABAP CDS, DDIC-Based Views / View Entities and ABAP SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry").

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

Table Buffer

ABS

Absolute value of argument

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

x

CEIL

Rounded to the first integer that is greater than or equal to the value of an argument

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

x

DIV

Division of two arguments. The result is rounded to an integer.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

x

DIVISION

Division of two arguments. The result is rounded to specified decimal places.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

\-

FLOOR

Largest integer number not greater than the value of the argument.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

x

MOD

Positive or negative integer remainder of the division of two arguments.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

x

ROUND

Rounded value of an argument.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

\-

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abensql_arith_func.htm'\)).

Hint

The SQL functions [DIV](javascript:call_link\('abensql_functions_numeric.htm'\)) and [MOD](javascript:call_link\('abensql_functions_numeric.htm'\)) behave differently with respect to the signs than the ABAP operators [DIV](javascript:call_link\('abenarith_operators.htm'\)) and [MOD](javascript:call_link\('abenarith_operators.htm'\)). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](javascript:call_link\('abenarith_operators.htm'\)), on the other hand, only produces positive results.

Example

The following table shows the results of integer divisions and their integer remainders in SQL. See also the example for the ABAP operators [DIV](javascript:call_link\('abenarith_operators.htm'\)) and [MOD](javascript:call_link\('abenarith_operators.htm'\)).

expr1

expr2

DIV

MOD

7

3

2

1

\-7

3

\-2

\-1

7

\-3

\-2

1

\-7

\-3

2

\-1