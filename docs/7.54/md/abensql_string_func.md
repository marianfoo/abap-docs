  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) →  [ABAP SQL - SQL Functions](javascript:call_link\('abenopen_sql_functions.htm'\)) → 

sql\_exp - sql\_string\_func

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls a string function func as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or operand of an expression in ABAP SQL. The arguments arg1, arg2, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis.

The following table shows the string functions that can be specified as SQL expressions and the requirements made on the arguments. The meaning of the functions can be found under [SQL Functions for Strings](javascript:call_link\('abensql_functions_string.htm'\)). The value ""x"" in the Table Buffer column indicates that the function can be executed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and that the use of [this function](javascript:call_link\('abenbuffer_expressions.htm'\)) does not bypass [table buffering](javascript:call_link\('abensap_buffering_glosry.htm'\) "Glossary Entry").

Syntax

Valid Argument Types

Result Type

Table Buffer

[CONCAT( sql\_exp1,sql\_exp2 )](javascript:call_link\('abensql_functions_string.htm'\))

See below

SSTRING if an argument has the type SSTRING, else CHAR with the length of the result.

x

[CONCAT\_WITH\_SPACE( sql\_exp1,sql\_exp2,spaces )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp1, sql\_exp2: see below
spaces: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1331

SSTRING if an argument has the type SSTRING, else CHAR with the length of the result.

x

[INSTR( sql\_exp,sub )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
sub: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, n, d, or t

INT4

\-

[LEFT( sql\_exp,len )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of the result

\-

[LENGTH( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

See below

INT4

\-

[LOWER( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

See below

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of sql\_exp

\-

[LPAD( sql\_exp,len,src )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of len.

\-

[LTRIM( sql\_exp,char )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
char: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c or n with the length 1

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of sql\_exp

\-

[REPLACE( sql\_exp1,sql\_exp2,sql\_exp3 )](javascript:call_link\('abensql_functions_string.htm'\))

See below

SSTRING if an argument has the type SSTRING, else CHAR with the maximum possible length of the result.

\-

[RIGHT( sql\_exp,len )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of the result

\-

[RPAD( sql\_exp,len,src )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of len.

\-

[RTRIM( sql\_exp,char )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
char: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c or n with the length 1

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of sql\_exp

\-

[SUBSTRING( sql\_exp,pos,len )](javascript:call_link\('abensql_functions_string.htm'\))

sql\_exp: see below
pos: Literal, [host variable](javascript:call_link\('abenopen_sql_host_variables.htm'\)), or [host expression](javascript:call_link\('abenopen_sql_host_expressions.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8
len: [Literal](javascript:call_link\('abenabap_sql_host_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of len

x

[UPPER( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

See below

SSTRING if sql\_exp has the type SSTRING, else CHAR with the length of sql\_exp

\-

The arguments sql\_exp, sql\_exp1, sql\_exp2, and sql\_exp3 can be any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) with the matching data types. The possible data types are the [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, CLNT, CUKY, DATS, LANG, NUMC, TIMS, UNIT, and SSTRING. The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](javascript:call_link\('abenddic_builtin_types.htm'\)) to the dictionary types above. The result types are also [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)).

If the argument of a string function has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the full string function is the null value.

Notes

-   The argument len of the functions RIGHT and SUBSTRING must only be a real [constant](javascript:call_link\('abenconstant_glosry.htm'\) "Glossary Entry") in static clauses. In clauses of an ABAP SQL statement specified in parentheses, the argument can also be a [variable](javascript:call_link\('abenvariable_glosry.htm'\) "Glossary Entry") evaluated at runtime.

-   In the case of the function REPLACE, it should be noted that the maximum possible length of the result can be slightly greater than the permitted length of 1333. This produces a syntax error. In general, the maximum possible length is calculated by dividing the length of sql\_exp1 by the length of sql\_exp2, multiplied by the length of sql\_exp3.

Example

The SELECT statement gets the maximum length of a URL in the database table SCARR.

SELECT FROM scarr
       FIELDS MAX( length( url ) ) AS maxlen
       INTO @DATA(result).
cl\_demo\_output=>display( result ).

Example

Concatenates multiple columns of a database table as a character-like column in the program DEMO\_SQL\_FUNCTION\_CONCAT using CONCAT. An alignment is specified using LPAD and RPAD. A concatenation of this type is not possible using the operator [&&](javascript:call_link\('abensql_string.htm'\)).

SELECT CONCAT\_WITH\_SPACE( CONCAT( carrid,
                          LPAD( carrname,21,' ' ) ),
                          RPAD( url,40,' ' ), 3 ) AS line
       FROM scarr
       INTO TABLE @DATA(result).

Executable Examples

-   [String functions](javascript:call_link\('abensql_string_func_abexa.htm'\))

-   [SQL expressions, chainings](javascript:call_link\('abensql_expr_string_abexa.htm'\))

Continue
![Example](exa.gif "Example") [SQL Expressions, String Functions](javascript:call_link\('abensql_string_func_abexa.htm'\))