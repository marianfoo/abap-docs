# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Functions

Included pages: 13


### abenddic_builtin_functions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Built-In Functions, ABENDDIC_BUILTIN_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Built-In Functions

The following sections summarize the built-in SQL database functions managed by ABAP Dictionary and that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). Some SQL functions are supported by SQL by default and some are special SAP-specific functions.

-   [SQL functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm)
-   [Special functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_special_functions.htm)

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_builtin_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_builtin_functions.htm).

Continue
[DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm)
[DDIC - Special Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_special_functions.htm)


### abensql_functions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions, ABENSQL_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

DDIC - SQL Functions

The following sections summarize the built-in SQL functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry").

-   [SQL functions for numeric values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)
-   [SQL functions for strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm)
-   [SQL functions for null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_null.htm)
-   [SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_uuid.htm)

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_functions.htm).

Hint

Some SQL functions are also implemented for use in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") on AS ABAP. [Table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not bypassed when [these functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_expressions.htm) are used.

Continue
[DDIC - SQL Functions for Numeric Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)
[DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm)
[DDIC - SQL Functions for Null Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_null.htm)
[DDIC - SQL Functions for UUIDs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_uuid.htm)


### abensql_functions_numeric.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions for Numeric Values, ABENSQL_FUNCTIONS_NUMERIC, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Functions for Numeric Values

The following table shows the numeric SQL functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS DDIC-Based Views, ABAP CDS View Entities, and ABAP SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

Table Buffer

ABS

Absolute value of argument

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

CEIL

Rounded to the first integer that is greater than or equal to the value of an argument

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

DIV

Division of two arguments. The result is rounded to an integer.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

DIVISION

Division of two arguments. The result is rounded to specified decimal places.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

\-

FLOOR

Largest integer number not greater than the value of the argument.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

MOD

Positive or negative integer remainder of the division of two arguments.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

x

ROUND

Rounded value of an argument.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm)

\-

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_arith_func.htm).

Hint

The SQL functions [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm), on the other hand, only produces positive results.

Example

The following table shows the results of integer divisions and their integer remainders in SQL. See also the example for the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm).

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


### abensql_functions_string.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions for Strings, ABENSQL_FUNCTIONS_STRING, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Functions for Strings

The following table shows the SQL functions for strings that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS, DDIC-Based Views / View Entities and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

Table Buffer

CONCAT

Concatenates strings

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

CONCAT\_WITH\_SPACE

Concatenates strings with a specified number of blanks in between

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

INITCAP

Transforms the first letter of a word to uppercase and all remaining letters to lowercase

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

INSTR

Returns the position of the first occurrence of a string in another string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LEFT

Returns the leftmost characters of a string with a specified length

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LENGTH

Returns the length of a string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

LIKE\_REGEXPR

Checks whether a string contains any occurrence of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOCATE

Returns the position of a string in another string. The function enables the specification of further parameters like the starting position of the search and the number of the occurrence.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR

Searches a string for a PCRE pattern and returns the offset of the match

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR\_AFTER

Searches a string for a PCRE pattern and returns the offset of the match plus 1

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOWER

Transforms all uppercase letters to lowercase letters

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LPAD

Creates a string with a specified length while adding a specified string to the end of another one.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LTRIM

Removes all trailing blanks and leading characters that match specified characters

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

OCCURRENCES\_REGEXPR

Counts and returns all occurrences of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pcre in a string

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

REPLACE

Searches a string for all occurrences of a specified string and replaces them with another specified string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

REPLACE\_REGEXPR

A [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) is replaced in a string with another specified character string

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

RIGHT

Returns the rightmost characters of a string with a specified length

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

RPAD

Creates a string with a specified length while adding a specified string at the beginning of another one

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

RTRIM

Removes all trailing blanks and trailing characters that match specified characters

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

SUBSTRING

Returns a substring of a specified string starting from a specified position within the string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

SUBSTRING\_REGEXPR

Searches a substring for a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pattern and returns the offset of the match.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

UPPER

Transforms all lowercase letters in a string to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - SQL Function UPPER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_function_upper_abexa.htm)


### abensql_function_upper_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) →  [DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Function UPPER, ABENSQL_FUNCTION_UPPER_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Function UPPER

This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS.

Source Code   

REPORT demo\_sql\_upper.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      query TYPE string VALUE \`ERROR\`,
      rows  TYPE i      VALUE 100.
    cl\_demo\_input=>add\_field( CHANGING field = query ).
    cl\_demo\_input=>request(   CHANGING field = rows ).
    query = \`%\` && to\_upper( query ) && \`%\`.
    IF rows < 1 OR rows > 1000.
      cl\_demo\_output=>display( 'Enter rows between 1 and 1000' ).
      RETURN.
    ENDIF.
    "UPPER in CDS view
    SELECT arbgb, msgnr, text
           FROM demo\_cds\_upper
           WHERE sprsl = 'E' AND
                 upper\_text LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @FINAL(result1)
           UP TO @rows ROWS.
    "UPPER in ABAP SQL
    SELECT arbgb, msgnr, text
           FROM t100
           WHERE sprsl = 'E' AND
                 upper( text ) LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @FINAL(result2)
           UP TO @rows ROWS.
    ASSERT result1 = result2.
    cl\_demo\_output=>display( result1 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

A SELECT statement accesses the following CDS DDIC-based view (obsolete) and view entity, which use the SQL function UPPER:

@AbapCatalog.sqlViewName: 'DEMOCDSUPPER'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Upper
  as select from t100
  {
    sprsl,
    arbgb,
    msgnr,
    text,
    upper(text) as upper\_text
  }

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_UPPER\_VE
  as select from t100
  {
    sprsl,
    arbgb,
    msgnr,
    text,
    upper(text) as upper\_text
  }

Another SELECT statement uses the SQL function UPPER directly to access the same data source T100.

Since SQL functions cannot yet be used on the left side of LIKE in the DDL of ABAP CDS, the view returns a helper field, which is evaluated in ABAP SQL. The results are the same. The search effected by the examples is not case-sensitive.


### abensql_functions_string.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions for Strings, ABENSQL_FUNCTIONS_STRING, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Functions for Strings

The following table shows the SQL functions for strings that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS, DDIC-Based Views / View Entities and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

Table Buffer

CONCAT

Concatenates strings

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

CONCAT\_WITH\_SPACE

Concatenates strings with a specified number of blanks in between

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

INITCAP

Transforms the first letter of a word to uppercase and all remaining letters to lowercase

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

INSTR

Returns the position of the first occurrence of a string in another string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LEFT

Returns the leftmost characters of a string with a specified length

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LENGTH

Returns the length of a string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

LIKE\_REGEXPR

Checks whether a string contains any occurrence of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOCATE

Returns the position of a string in another string. The function enables the specification of further parameters like the starting position of the search and the number of the occurrence.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR

Searches a string for a PCRE pattern and returns the offset of the match

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR\_AFTER

Searches a string for a PCRE pattern and returns the offset of the match plus 1

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LOWER

Transforms all uppercase letters to lowercase letters

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LPAD

Creates a string with a specified length while adding a specified string to the end of another one.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

LTRIM

Removes all trailing blanks and leading characters that match specified characters

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

OCCURRENCES\_REGEXPR

Counts and returns all occurrences of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pcre in a string

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

REPLACE

Searches a string for all occurrences of a specified string and replaces them with another specified string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

REPLACE\_REGEXPR

A [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) is replaced in a string with another specified character string

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

RIGHT

Returns the rightmost characters of a string with a specified length

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

RPAD

Creates a string with a specified length while adding a specified string at the beginning of another one

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

RTRIM

Removes all trailing blanks and trailing characters that match specified characters

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

SUBSTRING

Returns a substring of a specified string starting from a specified position within the string

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

x

SUBSTRING\_REGEXPR

Searches a substring for a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pattern and returns the offset of the match.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

UPPER

Transforms all lowercase letters in a string to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm)

\-

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - SQL Function UPPER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_function_upper_abexa.htm)


### abensql_functions_null.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions for Null Values, ABENSQL_FUNCTIONS_NULL, 757%0D%0A%0D%0AError:%0
D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Functions for Null Values

The following table shows the SQL functions for [null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm "Glossary Entry") that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS, DDIC-Based Views / View Entities and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

Table Buffer

COALESCE

Returns the first non-null value from a specified list.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_coalesce_expression_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_coalesce_expression_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_coalesce.htm)

x

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_coalesce_expression_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_coalesce_expression_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_coalesce.htm).


### abensql_functions_uuid.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions for UUIDs, ABENSQL_FUNCTIONS_UUID, 757%0D%0A%0D%0AError:%0D%0A%0
D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - SQL Functions for UUIDs

The following table shows the SQL functions for [UUIDs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuuid_glosry.htm "Glossary Entry") that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS, DDIC-Based Views / View Entities and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

Table Buffer

UUID( )

Creates [UUID](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuuid_glosry.htm "Glossary Entry")

\-

\-

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_uuid.htm)

\-

The function is described in the relevant [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_uuid.htm) documentation.


### abensql_functions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - SQL Functions, ABENSQL_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

DDIC - SQL Functions

The following sections summarize the built-in SQL functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry").

-   [SQL functions for numeric values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)
-   [SQL functions for strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm)
-   [SQL functions for null values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_null.htm)
-   [SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_uuid.htm)

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_sql_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_functions.htm).

Hint

Some SQL functions are also implemented for use in the [table buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffer_glosry.htm "Glossary Entry") on AS ABAP. [Table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry") is not bypassed when [these functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuffer_expressions.htm) are used.

Continue
[DDIC - SQL Functions for Numeric Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm)
[DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm)
[DDIC - SQL Functions for Null Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_null.htm)
[DDIC - SQL Functions for UUIDs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_uuid.htm)


### abenddic_special_functions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Special Functions, ABENDDIC_SPECIAL_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Special Functions

These built-in functions are delivered by SAP and are not provided as native functions on every database platform:

-   [Conversion functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_conversion_functions.htm)
-   [Date functions and time functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_date_time_functions.htm)

Continue
[DDIC - Conversion Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_conversion_functions.htm)
[DDIC - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_date_time_functions.htm)


### abenddic_conversion_functions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - Special Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_special_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Conversion Functions, ABENDDIC_CONVERSION_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%
0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Conversion Functions

The following table shows the conversion functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

AS\_GEO\_JSON

Conversion of an argument of type GEOM\_EWKB to JSON format

\-

\-

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_geo_conv_func.htm)

BINTOHEX

Converts an argument of the type RAW to a string of the type CHAR

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm)

CURRENCY\_CONVERSION

Conversion of currencies.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_curr_unit_conv_func.htm)

DECIMAL\_SHIFT

Setting the decimal separator

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v1.htm)

\-

\-

FLTP\_TO\_DEC

Conversion of an argument of type FLTP to a packed number

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v2.htm)

\-

HEXTOBIN

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_types_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm)

TO\_BLOB

Converts an argument of the type RAW to a byte string (BLOB) of the type RAWSTRING

\-

\-

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm)

TO\_CLOB

Converts an argument of the type SSTRING to a CLOB of the type STRING

\-

\-

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_type_conv_func.htm)

UNIT\_CONVERSION

Conversion of units

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conv_func_unit_curr_v2.htm)

\-

Descriptions of the possible operands and data types as well as the exact functionality can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conversion_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_conversion_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_conversion_functions.htm).


### abenddic_date_time_functions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) →  [DDIC - Special Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_special_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Date Functions and Time Functions, ABENDDIC_DATE_TIME_FUNCTIONS, 757%0D%0A%0D%
0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Date Functions and Time Functions

The following table shows the date and time functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

ABAP\_SYSTEM\_TIMEZONE

System time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timezone_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timezone_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timezone_func.htm)

ABAP\_USER\_TIMEZONE

User time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timezone_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timezone_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timezone_func.htm)

ADD\_DAYS

Adds days to a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

ADD\_MONTHS

Adds months to a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATN\_ADD\_DAYS

Adds days to a date.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATN\_ADD\_MONTHS

Adds months to a date.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATN\_DAYS\_BETWEEN

Difference between two dates.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATS\_ADD\_DAYS

Adds days to a date.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATS\_ADD\_MONTHS

Adds months to a date.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATS\_DAYS\_BETWEEN

Difference between two dates.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATS\_FROM\_DATN

Converts a date from type DATN to type DATS.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

DATS\_IS\_VALID

Shows whether the argument is a valid date.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DATS\_TIMS\_TO\_TSTMP

Time stamp for a local date and a local time.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

DATS\_TO\_DATN

Converts a date from type DATS to type DATN.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

DAYNAME

Shows the name of a day of a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

DAYS\_BETWEEN

Difference between two dates.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

EXTRACT\_DAY

Extracts the day of a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

EXTRACT\_HOUR

Extracts the hour of a time.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm)

EXTRACT\_MINUTE

Extracts the minute of a time.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm)

EXTRACT\_MONTH

Extracts the month of a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

EXTRACT\_SECOND

Extracts the second of a time.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm)

EXTRACT\_YEAR

Extracts the year of a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

IS\_VALID

Shows whether the argument is a valid date, time, or time stamp.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm)

MONTHNAME

Shows the name of a month of a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

TIMS\_FROM\_TIMN

Converts a time from type TIMN to type TIMS.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

TIMS\_IS\_VALID

Shows whether the argument is a valid time.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_time_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_time_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_time_func.htm)

TIMS\_TO\_TIMN

Converts a time from type TIMS to type TIMN.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

TSTMP\_ADD\_SECONDS

Adds seconds to a time stamp.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm)

TSTMP\_CURRENT\_UTCTIMESTAMP

Current UTC time stamp.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm)

TSTMP\_IS\_VALID

Shows whether the argument is a valid time stamp.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm)

TSTMP\_SECONDS\_BETWEEN

Difference between two time stamps in seconds.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm)

TSTMP\_TO\_DATS

Local date of a time stamp.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_DST

Local daylight saving time marker of a time stamp.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_TIMS

Local time of a time stamp.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

TSTMPL\_FROM\_UTCL

Converts a time stamp from type UTCLONG to type TIMESTAMPL.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

TSTMPL\_TO\_UTCL

Converts a time stamp from type TIMESTAMPL to type UTCLONG.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_conversions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_time_conversions.htm)

UTCL\_ADD\_SECONDS

Adds seconds to a UTC time stamp.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm)

UTCL\_CURRENT

Returns the current UTC time stamp within a SELECT\-statement.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm)

UTCL\_SECONDS\_BETWEEN

Difference between two UTC time stamps in seconds.

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v1.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_timestamp_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_timestamp_func.htm)

WEEKDAY

Shows the number of a weekday of a date.

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v1.htm)

[](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_functions_v2.htm)

[x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_date_func.htm)

Descriptions of the possible operands and data types can be found in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_date_time_functions_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_date_time_functions.htm).


### abenddic_special_functions.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Special Functions, ABENDDIC_SPECIAL_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Special Functions

These built-in functions are delivered by SAP and are not provided as native functions on every database platform:

-   [Conversion functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_conversion_functions.htm)
-   [Date functions and time functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_date_time_functions.htm)

Continue
[DDIC - Conversion Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_conversion_functions.htm)
[DDIC - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_date_time_functions.htm)
