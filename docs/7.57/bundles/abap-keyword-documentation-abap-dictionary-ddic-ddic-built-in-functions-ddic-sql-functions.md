# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Functions / DDIC - SQL Functions

Included pages: 7


### abensql_functions.htm

---
title: "DDIC - SQL Functions"
description: |
  The following sections summarize the built-in SQL functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm 'Glossary
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions.htm"
abapFile: "abensql_functions.htm"
keywords: ["do", "if", "try", "data", "types", "abensql", "functions"]
---

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

---
title: "DDIC - SQL Functions for Numeric Values"
description: |
  The following table shows the numeric SQL functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm 'Glossary Entry').
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_numeric.htm"
abapFile: "abensql_functions_numeric.htm"
keywords: ["do", "if", "try", "data", "types", "abensql", "functions", "numeric"]
---

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

---
title: "DDIC - SQL Functions for Strings"
description: |
  The following table shows the SQL functions for strings that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm 'Glossary Entr
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm"
abapFile: "abensql_functions_string.htm"
keywords: ["do", "while", "if", "case", "try", "data", "types", "abensql", "functions", "string"]
---

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

---
title: "DDIC - SQL Function UPPER"
description: |
  This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS. Source Code REPORT demo_sql_upper. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA: query TYPE string VALUE `ERROR`, rows  TYPE i      VALUE 100. cl_demo
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_function_upper_abexa.htm"
abapFile: "abensql_function_upper_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "abensql", "function", "upper", "abexa"]
---

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

---
title: "DDIC - SQL Functions for Strings"
description: |
  The following table shows the SQL functions for strings that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_sql_glosry.htm 'Glossary Entr
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_string.htm"
abapFile: "abensql_functions_string.htm"
keywords: ["do", "while", "if", "case", "try", "data", "types", "abensql", "functions", "string"]
---

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

---
title: "DDIC - SQL Functions for Null Values"
description: |
  The following table shows the SQL functions for null values(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennull_value_glosry.htm 'Glossary Entry') that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_null.htm"
abapFile: "abensql_functions_null.htm"
keywords: ["do", "if", "try", "data", "types", "abensql", "functions", "null"]
---

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

---
title: "DDIC - SQL Functions for UUIDs"
description: |
  The following table shows the SQL functions for UUIDs(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuuid_glosry.htm 'Glossary Entry') that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(
version: "7.57"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensql_functions_uuid.htm"
abapFile: "abensql_functions_uuid.htm"
keywords: ["do", "if", "try", "abensql", "functions", "uuid"]
---

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
