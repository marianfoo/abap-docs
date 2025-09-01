  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) →  [Open SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_operands.htm) →  [Open SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_builtin_functions.htm) →  [Open SQL - SQL Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_functions.htm) → 

sql\_exp - sql\_string\_func

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls a string function func as an [SQL expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm) or operand of an expression in Open SQL. The arguments arg1, arg2, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis.

The following table shows the string functions that can be specified as SQL expressions and the requirements made on the arguments. The meaning of the functions can be found under [SQL Functions for Strings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm).

Syntax

Valid Argument Types

Result Type

[CONCAT( expr1,expr2 )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

See below

SSTRING if an argument has the type SSTRING, else CHAR with the length of the result.

[CONCAT\_WITH\_SPACE( expr1,expr2,spaces )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr1, expr2: see below
spaces: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8 greater than 0 and less than or equal to 1331

SSTRING if an argument has the type SSTRING, else CHAR with the length of the result.

[INSTR( expr,sub )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
sub: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) c, n, d, or t

INT4

[LEFT( expr,len )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
len: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if expr has the type SSTRING, else CHAR with the length of the result

[LENGTH( expr )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

See below

INT4

[LOWER( expr )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

See below

SSTRING if expr has the type SSTRING, else CHAR with the length of expr.

[LPAD( expr,len,src )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
len: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if expr has the type SSTRING, else CHAR with the length of len.

[LTRIM( expr,char )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
char: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) c or n with the length 1

SSTRING if expr has the type SSTRING, else CHAR with the length of expr.

[REPLACE( expr1,expr2,expr3 )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

See below

SSTRING if an argument has the type SSTRING, else CHAR with the maximum possible length of the result.

[RIGHT( expr,len )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
len: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if expr has the type SSTRING, else CHAR with the length of the result

[RPAD( expr,len,src )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
len: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if expr has the type SSTRING, else CHAR with the length of len.

[RTRIM( expr,char )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
char: Literal or constant [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) c or n with the length 1

SSTRING if expr has the type SSTRING, else CHAR with the length of expr.

[SUBSTRING( expr,pos,len )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

expr: see below
pos: Literal, [host variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_variables.htm) or [host expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_host_expressions.htm) with the [ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_types_complete.htm) b, s, i, or int8

SSTRING if expr has the type SSTRING, else CHAR with the length of len

[UPPER( expr )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_functions_string.htm)

See below

SSTRING if expr has the type SSTRING, else CHAR with the length of expr.

The arguments expr, expr1, expr2, and expr3 can be [SQL expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsql_expr.htm), more specifically individual columns, literals, SQL functions, host variables, or host expressions. The possible data types are the [dictionary types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) CHAR, CLNT, CUKY, DATS, LANG, NUMC, TIMS, UNIT, and SSTRING. The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) to the dictionary types above. The result types are also [dictionary types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm).

If the argument of a string function has the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"), the result of the full string function is the null value.

Note

The argument len of the functions RIGHT and SUBSTRING must only be a real [constant](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstant_glosry.htm "Glossary Entry") in static clauses. In clauses of an Open SQL statement specified in parentheses, the argument can also be a [variable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvariable_glosry.htm "Glossary Entry") evaluated at runtime.

Example

The SELECT statement gets the maximum length of a URL in the database table SCARR.

SELECT FROM scarr
       FIELDS MAX( length( url ) ) AS maxlen
       INTO @DATA(result).
cl\_demo\_output=>display( result ).

Example

Concatenates multiple columns of a database table as a character-like column in the program DEMO\_SQL\_FUNCTION\_CONCAT using CONCAT. An alignment is specified using LPAD and RPAD. A concatenation of this type is not possible using the operator [&&](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_string.htm).

SELECT CONCAT\_WITH\_SPACE( CONCAT( carrid,
                          LPAD( carrname,21,' ' ) ),
                          RPAD( url,40,' ' ), 3 ) AS line
       FROM scarr
       INTO TABLE @DATA(result).

Executable Example

[String functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensql_string_func_abexa.htm)