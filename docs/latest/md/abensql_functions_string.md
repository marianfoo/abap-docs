  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Strings%2C%20ABENSQL_FUNCTIONS_STRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions for Strings

The following table shows the SQL functions for strings that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed in the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

CONCAT

Concatenates strings.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

CONCAT\_WITH\_SPACE

Concatenates strings with a specified number of blanks in between.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

INITCAP

Transforms the first letter of a word to uppercase and all remaining letters to lowercase.

\-

\-

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

INSTR

Returns the position of the first occurrence of a string in another string.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

LEFT

Returns the leftmost characters of a string with a specified length.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

LENGTH

Returns the length of a string.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

LIKE\_REGEXPR

Checks whether a string contains any occurrence of a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE).

\-

\-

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

LOCATE

Returns the position of a string in another string. The function enables the specification of further parameters like the starting position of the search and the number of the occurrence.

\-

\-

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

LOCATE\_REGEXPR

Searches a string for a PCRE pattern and returns the offset of the match.

\-

\-

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

LOCATE\_REGEXPR\_AFTER

Searches a string for a PCRE pattern and returns the offset of the match plus 1.

\-

\-

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

LOWER

Transforms all uppercase letters to lowercase letters.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

LPAD

Creates a string with a specified length by adding a specified string to the beginning of another one.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

LTRIM

Removes all trailing blanks and all leading characters that match a specified character.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

OCCURRENCES\_REGEXPR

Counts all occurrences of a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pcre in a string and returns the number of occurrences.

\-

\-

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

REPLACE

Searches a string for all occurrences of a specified string and replaces them with another specified string.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

REPLACE\_REGEXPR

A [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) is replaced in a string with another specified character string.

\-

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

RIGHT

Returns the rightmost characters of a string with a specified length.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

RPAD

Creates a string with a specified length by adding a specified string at the end of another one.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

RTRIM

Removes all trailing blanks and trailing characters that match a specified character.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

SUBSTRING

Returns a substring of a specified string starting from a specified position within the string.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

SUBSTRING\_REGEXPR

Searches a substring for a [Perl Compatible Regular Expression](javascript:call_link\('abenpcre_glosry.htm'\) "Glossary Entry") (PCRE) pattern and returns the offset of the match.

\-

\-

[x](javascript:call_link\('abensql_string_func.htm'\))

\-

UPPER

Transforms all lowercase letters in a string to uppercase letters.

[x](javascript:call_link\('abencds_sql_functions_character_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_character_v2.htm'\))

[x](javascript:call_link\('abensql_string_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abensql_string_func.htm'\)).

Executable Example

[SQL Function UPPER](javascript:call_link\('abensql_function_upper_abexa.htm'\))

Continue
![Example](exa.gif "Example") [DDIC - SQL Function UPPER](javascript:call_link\('abensql_function_upper_abexa.htm'\))