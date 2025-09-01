  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) →  [sql\_func - SQL Functions](javascript:call_link\('abenopen_sql_functions.htm'\)) → 

sql\_func - String Functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls a string function func as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or operand of an expression in ABAP SQL. The arguments arg1, arg2, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The following table shows the string functions that can be specified as SQL expressions and the requirements on the arguments. The meaning of the functions can be found under [SQL Functions for Strings](javascript:call_link\('abensql_functions_string.htm'\)). The value ""x"" in the Table Buffer column indicates that the function can be executed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and that the use of [this function](javascript:call_link\('abenbuffer_expressions.htm'\)) does not bypass [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").

Syntax

Syntax

Valid Argument Types

Result Type

Table Buffer

[CONCAT( sql\_exp1,sql\_exp2 )](javascript:call_link\('abensql_functions_string.htm'\))

Concatenates strings in sql\_exp1 and sql\_exp2. Trailing blanks in sql\_exp1, sql\_exp2, and in the result are ignored. The maximum length of the result is 1333.

See below

SSTRING if an argument has the type SSTRING, otherwise CHAR with the length of the result.

x

[CONCAT\_WITH\_SPACE( sql\_exp1,sql\_exp2,spaces )](javascript:call_link\('abensql_functions_string.htm'\))

Concatenates strings in sql\_exp1 and sql\_exp2 as with CONCAT. The number of blanks specified in spaces is inserted between sql\_exp1 and sql\_exp2. The maximum length of the result is 1333.

sql\_exp2: see below
spaces: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if an argument has the type SSTRING, otherwise CHAR with the length of the result.

x

[INSTR( sql\_exp,sub )](javascript:call_link\('abensql_functions_string.htm'\))

Position of the first occurrence of the string from sub in sql\_exp (case-sensitive). sql\_exp respects leading blanks and ignores trailing blanks. sub respects all blanks. sub must contain at least one character. If no occurrences are found, the result is 0.

sql\_exp: see below
sub: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, n, d, or t

INT4

\-

[LEFT( sql\_exp,len )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the len left characters of sql\_exp (ignoring the trailing blanks). The value of len cannot be greater than the length of sql\_exp.

sql\_exp: see below
len: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of the result

\-

[LENGTH( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

Number of characters in sql\_exp ignoring trailing blanks

See below

INT4

\-

[LIKE\_REGEXPR( PCRE = pcre,
             VALUE = sql\_exp*\[*,  
              CASE\_SENSITIVE = case*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Checks whether sql\_exp contains any occurrence of a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pcre and returns 1 if yes and 0 if no. The search is case-sensitive by default, but this can be overridden using the parameter case.

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry")
sql\_exp: see below
case: 'X' or ' '

0 or 1

\-

[LOWER( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

String with a length of sql\_exp, in which all uppercase letters are transformed to lowercase letters.

See below

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

\-

[LPAD( sql\_exp,len,src )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the right-aligned content of sql\_exp without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from sql\_exp are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of sql\_exp, it is truncated on the right. If src is empty and len is greater than the length.

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of len.

\-

[LTRIM( sql\_exp,char )](javascript:call_link\('abensql_functions_string.htm'\))

String with the content of sql\_exp in which all trailing blanks and leading characters are removed that match the character in char. A blank in char is significant.

sql\_exp: see below
char: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c or n with the length 1

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

\-

[OCCURRENCES\_REGEXPR( PCRE = pcre,
                    VALUE = sql\_exp*\[*,  
                     CASE\_SENSITIVE = case*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Counts all occurrences of a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pcre in sql\_exp and returns the number of occurrences. The search is case-sensitive by default, but this can be overridden using the parameter case.

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry")
sql\_exp: see below
case: 'X' or ' '

INT4

\-

[REPLACE( sql\_exp1,sql\_exp2,sql\_exp3 )](javascript:call_link\('abensql_functions_string.htm'\))

String sql\_exp1, in which all instances of sql\_exp2 are replaced by the content from sql\_exp3. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333.

See below

SSTRING if an argument has the type SSTRING, otherwise CHAR with the maximum possible length of the result.

\-

[REPLACE\_REGEXPR( PCRE = pcre,
                VALUE = sql\_exp1,
                WITH = sql\_exp2*\[*,
                OCCURRENCE = occ*\]**\[*,
                CASE\_SENSITIVE = case*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

A [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pcre is replaced in sql\_exp1 with the character string specified in sql\_exp2. occ is optional and determines the number of occurrences of pcre to be replaced. By default, all occurrences are replaced. The search is case-sensitive by default, but this can be overridden using the parameter case.

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry")
sql\_exp1: see below
sql\_exp2: see below
occ: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333
case: 'X' or ' '

SSTRING

\-

[RIGHT( sql\_exp,len )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the len right characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of sql\_exp.

sql\_exp: see below
len: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of the result

\-

[RPAD( sql\_exp,len,src )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the left-aligned content of sql\_exp without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from sql\_exp are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of sql\_exp, it is truncated on the right. If src is empty and len is greater than the length of sql\_exp, sql\_exp remains unchanged.

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of len.

\-

[RTRIM( sql\_exp,char )](javascript:call_link\('abensql_functions_string.htm'\))

String with the content of sql\_exp in which all trailing blanks are removed and all trailing characters that match the character in char. A blank in char is significant.

sql\_exp: see below
char: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenopen_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c or n with the length 1

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

\-

[SUBSTRING( sql\_exp,pos,len )](javascript:call_link\('abensql_functions_string.htm'\))

Substring sql\_exp from the position pos with length len. pos and len must be specified so that the substring is within sql\_exp.

sql\_exp: see below
pos: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8
len: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8

If len is a constant:
SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of len
If len is not a constant:
the result has the same data type as the first parameter (sql\_exp)

x

[UPPER( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

String with a length of sql\_exp, in which all lowercase letters were transformed to uppercase letters.

See below

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

\-

The arguments sql\_exp, sql\_exp1, sql\_exp2, and sql\_exp3 can be any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) with the appropriate data types. The possible data types are the [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, CLNT, CUKY, DATS, LANG, NUMC, TIMS, UNIT, and SSTRING. The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](javascript:call_link\('abenddic_builtin_types.htm'\)) to the dictionary types above. The result types are also [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)).

If an argument of a string function has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the full string function is the null value.

Hints

-   In the case of the function REPLACE, it should be noted that the maximum possible length of the result can be slightly greater than the allowed length of 1333, which produces a syntax error. In general, the maximum possible length is calculated by dividing the length of sql\_exp1 by the length of sql\_exp2, multiplied by the length of sql\_exp3.

-   All string functions with the result type SSTRING can have a maximum of 1333 characters. This length restriction can be avoided by using the type conversion function [TO\_CLOB](javascript:call_link\('abensql_type_conv_func.htm'\)) on the result, thus converting it to type STRING.

-   ABAP SQL string functions enforce the [strict mode of the syntax check from Release 7.50](javascript:call_link\('abenopensql_strict_mode_750.htm'\)).

-   The functions REPLACE\_REGEXPR, LIKE\_REGEXPR, and OCCURRENCES\_REGEXPR access the PCRE1 library implemented in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). They enforce the [strict mode of the syntax check from Release 7.55](javascript:call_link\('abenopensql_strict_mode_755.htm'\)). The [regular expressions](javascript:call_link\('abenregular_expressions.htm'\)) of general ABAP work with the PCRE2 library implemented in the ABAP Kernel.

-   Not all of the parameters that can be specified for the REPLACE\_REGEXPR function in [ABAP CDS view entities](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)) (UNGREEDY, for example) can be specified for ABAP SQL as well. This functionality can be implemented through the [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") syntax itself.

Example

The SELECT statement returns the maximum length of a URL in the DDIC database table SCARR.

SELECT FROM scarr
       FIELDS MAX( length( url ) ) AS maxlen
       INTO @DATA(result).
cl\_demo\_output=>display( result ).

Example

Concatenation of multiple columns of a DDIC database table to a character-like column in the program DEMO\_SQL\_FUNCTION\_CONCAT using CONCAT. An alignment is achieved using LPAD and RPAD. A concatenation of this type is not possible using the operator [&&](javascript:call_link\('abensql_string.htm'\)).

SELECT CONCAT\_WITH\_SPACE( CONCAT( carrid,
                          LPAD( carrname,21,' ' ) ),
                          RPAD( url,40,' ' ), 3 ) AS line
       FROM scarr
       INTO TABLE @DATA(result).

Executable Examples

-   [String functions](javascript:call_link\('abensql_string_func_abexa.htm'\))

-   [SQL expressions, concatenations](javascript:call_link\('abensql_expr_string_abexa.htm'\))

Continue
![Example](exa.gif "Example") [sql\_func - String Functions](javascript:call_link\('abensql_string_func_abexa.htm'\))