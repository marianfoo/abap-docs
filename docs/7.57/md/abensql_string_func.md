  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - SQL Functions](javascript:call_link\('abenabap_sql_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_func - String Functions, ABENSQL_STRING_FUNC, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

sql\_func - String Functions

Syntax

... func( arg1*\[*, arg2*\]* ... ) ...

Effect

Calls a string function func as an [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) or operand of an expression in ABAP SQL. The arguments arg1, arg2, ... of the function are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis.

The following table shows the string functions that can be specified as SQL expressions and the requirements on the arguments. The value x in the Table Buffer column indicates that the function can be executed in the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and that the use of [this function](javascript:call_link\('abenbuffer_expressions.htm'\)) does not bypass [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry").

Syntax

Meaning

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
spaces: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if an argument has the type SSTRING, otherwise CHAR with the length of the result.

x

[INITCAP( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

String with a length of sql\_exp, in which the first letter of a word is transformed to uppercase, and all other letters are transformed to lowercase. A word is delimited by the following: beginning of a string, blank space, new line, form feed, carriage return, line feed, and anything after ! " # $ % & ' ( ) \* + , \- . / : ; < \= \> ? @ \[ \\ \] ^ \_ \` { | } ~.

See below

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

\-

[INSTR( sql\_exp,sub )](javascript:call_link\('abensql_functions_string.htm'\))

Position of the first occurrence of the string from sub in sql\_exp (case-sensitive). sql\_exp respects leading blanks and ignores trailing blanks. sub respects all blanks. sub must contain at least one character. If no occurrences are found, the result is 0.

sql\_exp: see below
sub: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, n, d, or t

INT4

\-

[LEFT( sql\_exp,len )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the len left characters of sql\_exp (ignoring the trailing blanks). The value of len cannot be greater than the length of sql\_exp.

sql\_exp: see below
len: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of the result

x

[LENGTH( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

Number of characters in sql\_exp ignoring trailing blanks

See below

INT4

x

[LIKE\_REGEXPR( pcre = pcre,
             value = sql\_exp*\[*,  
              case\_sensitive = case*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Checks whether sql\_exp contains any occurrence of a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pcre and returns 1 if yes and 0 if no. The search is case-sensitive by default, but this can be overridden using the parameter case.

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") or [null expression](javascript:call_link\('abensql_null.htm'\))
sql\_exp: see below
case: 'X', ' ', or [null expression](javascript:call_link\('abensql_null.htm'\))

INT4

\-

[LOCATE( sql\_exp, sub*\[*,start*\[*,occ*\]**\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Returns the position of a substring sub in sql\_exp (case-sensitive). Both sql\_exp and sub respect all blanks and must contain at least one character. start and occ are optional parameters. occ can only be specified if start is specified. start specifies the offset from which to start the search, and occ determines the number of occurrences.
Notes on the result:
If no occurrences are found or occ is less than 1, the result is 0.
If sql\_exp, sub or occ are specified as [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result is 0.
If start is greater than 0, the matching is carried out starting from this position.
If start is 0, NULL or not specified, the matching is carried out starting from the first position. A setting of 1 for start has the same effect.
If start is less than 0, the starting position is the end of the string, i. e. if start is -2, the starting position is the second to last character of the string. The matching then goes in the reverse direction from right to left.
If occ is specified, the matched position is returned. If no match is found with the specified occurrence, the result is 0.
If occ is not specified, the first matched position is returned. A setting of 1 for occ is the same as not specifying it.

sql\_exp: see below
sub: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, n, d, or t, or [null expression](javascript:call_link\('abensql_null.htm'\))
occ: i or int8
start: i or int8

INT4

\-

[LOCATE\_REGEXPR( pcre = pcre,
               value = sql\_exp*\[*,
               occurrence = occ*\]**\[*,
               case\_sensitive = case*\]**\[*,
               start = start*\]**\[*,
               group = group*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Searches sql\_exp for a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pattern pcre and returns the offset of the match. The other parameters are optional. occ determines the number of occurrences of pcre. The search is case-sensitive by default, but this can be overridden using the parameter case. The parameter start specifies the offset from which to start the search. The parameter group specifies the number of the group of the matched substring.
If occ is not greater than 0 or start or group are less than 0, the result is a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") or [null expression](javascript:call_link\('abensql_null.htm'\))
sql\_exp: see below
occ: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333; [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") are also possible if they return an integer of type INT4
case: 'X', ' ', or [null expression](javascript:call_link\('abensql_null.htm'\))
start: i or int8
group: i or int8

INT4

\-

[LOCATE\_REGEXPR\_AFTER( pcre = pcre,
                     value = sql\_exp*\[*,
                      occurrence = occ*\]**\[*,
                     case\_sensitive = case*\]**\[*,
                      start = start*\]**\[*,
                     group = group*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Searches sql\_exp for a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pattern pcre and returns the offset of the match plus 1. The other parameters are optional. occ determines the number of occurrences of pcre. The search is case-sensitive by default, but this can be overridden using the parameter case. The parameter start specifies the offset from which to start the search. The parameter group specifies the number of the group of the matched substring.
If occ is not greater than 0 or start or group are less than 0, the result is a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") or [null expression](javascript:call_link\('abensql_null.htm'\))
sql\_exp: see below
occ: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333; [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") are also possible if they return an integer of type INT4
case: 'X', ' ', or [null expression](javascript:call_link\('abensql_null.htm'\))
start: i or int8
group: i or int8

INT4

\-

[LOWER( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

String with a length of sql\_exp, in which all uppercase letters are transformed to lowercase letters.

See below

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

x

[LPAD( sql\_exp,len,src )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the right-aligned content of sql\_exp without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from sql\_exp are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of sql\_exp, it is truncated on the right. If src is empty and len is greater than the length.

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of len.

\-

[LTRIM( sql\_exp,char )](javascript:call_link\('abensql_functions_string.htm'\))

String with the content of sql\_exp in which all trailing blanks and leading characters are removed that match the character in char. A blank in char is significant.

sql\_exp: see below
char: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c or n with the length 1

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

\-

[OCCURRENCES\_REGEXPR( pcre = pcre,
                    value = sql\_exp*\[*,  
                     case\_sensitive = case*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Counts all occurrences of a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pcre in sql\_exp and returns the number of occurrences. The search is case-sensitive by default, but this can be overridden using the parameter case.

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") or [null expression](javascript:call_link\('abensql_null.htm'\))
sql\_exp: see below
case: 'X', ' ', or [null expression](javascript:call_link\('abensql_null.htm'\))

INT4

\-

[REPLACE( sql\_exp1,sql\_exp2,sql\_exp3 )](javascript:call_link\('abensql_functions_string.htm'\))

String sql\_exp1, in which all instances of sql\_exp2 are replaced by the content from sql\_exp3. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333.

See below

SSTRING if an argument has the type SSTRING, otherwise CHAR with the maximum possible length of the result.

\-

[REPLACE\_REGEXPR( pcre = pcre,
                value = sql\_exp1,
                with = sql\_exp2*\[*,
                occurrence = occ*\]**\[*,
                case\_sensitive = case*\]**\[*,
                start = start*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

A [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pcre is replaced in sql\_exp1 with the character string specified in sql\_exp2. occ is optional and determines the number of occurrences of pcre to be replaced. By default, all occurrences are replaced. The search is case-sensitive by default, but this can be overridden using the parameter case. The parameter start specifies the offset from which to start the search.

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") or [null expression](javascript:call_link\('abensql_null.htm'\))
sql\_exp1: see below
sql\_exp2: see below
occ: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333; [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") are also possible if they return an integer of type INT4
case: 'X', ' ', or [null expression](javascript:call_link\('abensql_null.htm'\))
start: i or int8

SSTRING

\-

[RIGHT( sql\_exp,len )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the len right characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of sql\_exp.

sql\_exp: see below
len: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of the result

x

[RPAD( sql\_exp,len,src )](javascript:call_link\('abensql_functions_string.htm'\))

String of the length len with the left-aligned content of sql\_exp without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from sql\_exp are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of sql\_exp, it is truncated on the right. If src is empty and len is greater than the length of sql\_exp, sql\_exp remains unchanged.

sql\_exp: see below
len: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333
src: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c, d, t, n, or string with a maximum of 1333 characters

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of len.

\-

[RTRIM( sql\_exp,char )](javascript:call_link\('abensql_functions_string.htm'\))

String with the content of sql\_exp in which all trailing blanks are removed and all trailing characters that match the character in char. A blank in char is significant.

sql\_exp: see below
char: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) c or n with the length 1

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

\-

[SUBSTRING( sql\_exp,pos,len )](javascript:call_link\('abensql_functions_string.htm'\))

Substring sql\_exp from the position pos with length len. pos and len must be specified so that the substring is within sql\_exp.
The function is always executed in the table buffer.

sql\_exp: see below
pos: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8
len: [SQL expression](javascript:call_link\('abapsql_expr.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, int8

If len is a constant:
SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of len
If len is not a constant:
the result has the same data type as the first parameter (sql\_exp)

x

[SUBSTRING\_REGEXPR( pcre = pcre,
                  value = sql\_exp*\[*,
                  occurrence = occ*\]**\[*,
                  case\_sensitive = case*\]**\[*,
                  start = start*\]**\[*,
                  group = group*\]* )](javascript:call_link\('abensql_functions_string.htm'\))

Searches sql\_exp for a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pattern pcre and returns the matched substring. The other parameters are optional. occ determines the number of occurrences of pcre. The search is case-sensitive by default, but this can be overridden using the parameter case. The parameter start specifies the offset from which to start the search. The parameter group specifies the number of the group of the matched substring.
If occ is not greater than 0 or start or group are less than 0, the result is a [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry").

pcre: [Perl Compatible Regular Expression (PCRE)](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") or [null expression](javascript:call_link\('abensql_null.htm'\))
sql\_exp: see below
occ: [Literal](javascript:call_link\('abenabap_sql_literals.htm'\)) or [host constant](javascript:call_link\('abenabap_sql_host_variables.htm'\)) with the [ABAP type](javascript:call_link\('abenbuilt_in_types_complete.htm'\)) b, s, i, or int8 greater than 0 and less than or equal to 1333; [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") are also possible if they return an integer of type INT4
case: 'X', ' ', or [null expression](javascript:call_link\('abensql_null.htm'\))
start: i or int8
group: i or int8

The same type as sql\_exp.

\-

[UPPER( sql\_exp )](javascript:call_link\('abensql_functions_string.htm'\))

String with a length of sql\_exp, in which all lowercase letters were transformed to uppercase letters.

See below

SSTRING if sql\_exp has the type SSTRING, otherwise CHAR with the length of sql\_exp

x

The arguments sql\_exp, sql\_exp1, sql\_exp2, and sql\_exp3 can be any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) with the appropriate data types. The possible data types are the [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)) CHAR, CLNT, CUKY, DATS, LANG, NUMC, TIMS, UNIT, and SSTRING. The possible data types for literals, host variables, and host expressions are the ABAP types [assigned](javascript:call_link\('abenddic_builtin_types.htm'\)) to the dictionary types above. The result types are also [dictionary types](javascript:call_link\('abenddic_builtin_types.htm'\)).

If an argument of a string function has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), the result of the full string function is the null value.

Hints

-   In the case of the function REPLACE, it should be noted that the maximum possible length of the result can be slightly greater than the allowed length of 1333, which produces a syntax error. In general, the maximum possible length is calculated by dividing the length of sql\_exp1 by the length of sql\_exp2, multiplied by the length of sql\_exp3.
-   All string functions with the result type SSTRING can have a maximum of 1333 characters. This length restriction can be avoided by using the type conversion function [TO\_CLOB](javascript:call_link\('abensql_type_conv_func.htm'\)) on the result, thus converting it to type STRING.
-   Not all of the parameters that can be specified for the REPLACE\_REGEXPR function in [ABAP CDS view entities](javascript:call_link\('abencds_sql_functions_character_v2.htm'\)) (UNGREEDY, for example) can be specified for ABAP SQL as well. This functionality can be implemented through the [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") syntax itself.
-   ABAP SQL string functions enforce the [strict mode of the syntax check from ABAP release 7.50](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)).
-   The functions that include the pcre parameter access the PCRE1 library implemented in the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry"). They enforce the [strict mode of the syntax check from ABAP release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)). The [regular expressions](javascript:call_link\('abenregular_expressions.htm'\)) of general ABAP work with the PCRE2 library implemented in the ABAP Kernel.

Example

The SELECT statement returns the maximum length of a URL in the DDIC database table SCARR.

SELECT FROM scarr
       FIELDS MAX( length( url ) ) AS maxlen
       INTO @FINAL(result).
cl\_demo\_output=>display( result ).

Example

Concatenation of multiple columns of a DDIC database table to a character-like column in the program DEMO\_SQL\_FUNCTION\_CONCAT using CONCAT. An alignment is achieved using LPAD and RPAD. A concatenation of this type is not possible using the operator [&&](javascript:call_link\('abensql_string.htm'\)).

SELECT CONCAT\_WITH\_SPACE( CONCAT( carrid,
                          LPAD( carrname,21,' ' ) ),
                          RPAD( url,40,' ' ), 3 ) AS line
       FROM scarr
       INTO TABLE @FINAL(result).

Executable Examples

-   [String functions](javascript:call_link\('abensql_string_func_abexa.htm'\))
-   [SQL expressions, concatenations](javascript:call_link\('abensql_expr_string_abexa.htm'\))

Continue
![Example](exa.gif "Example") [sql\_func - String Functions](javascript:call_link\('abensql_string_func_abexa.htm'\))