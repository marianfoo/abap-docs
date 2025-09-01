  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_functions.htm) → 

DDIC - SQL Functions for Strings

The following table shows the SQL functions for strings that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS, DDIC-Based Views / View Entities and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

Table Buffer

CONCAT

Concatenates strings

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

x

CONCAT\_WITH\_SPACE

Concatenates strings with a specified number of blanks in between

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

x

INSTR

Returns the position of the first occurrence of a string in another string

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

LEFT

Returns the leftmost characters of a string with a specified length

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

LENGTH

Returns the length of a string

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

LIKE\_REGEXPR

Checks whether a string contains any occurrence of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE)

[](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

LOWER

Transforms all uppercase letters to lowercase letters

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

LPAD

Creates a string with a specified length while adding a specified string to the end of another one.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

LTRIM

Removes all trailing blanks and leading characters that match specified characters

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

OCCURRENCES\_REGEXPR

Counts and returns all occurrences of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pcre in a string

[](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

REPLACE

Searches a string for all occurrences of a specified string and replaces them with another specified string

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

REPLACE\_REGEXPR

A [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) is replaced in a string with another specified character string

[](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

RIGHT

Returns the rightmost characters of a string with a specified length

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

RPAD

Creates a string with a specified length while adding a specified string at the beginning of another one

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

RTRIM

Removes all trailing blanks and trailing characters that match specified characters

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

SUBSTRING

Returns a substring of a specified string starting from a specified position within the string

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

x

UPPER

Transforms all lowercase letters in a string to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm)

\-

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - SQL Function UPPER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_function_upper_abexa.htm)