# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Functions / DDIC - SQL Functions

Included pages: 7


### abensql_functions.htm

---
title: "DDIC - SQL Functions"
description: |
  The following sections describe the built-in SQL functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm 'Glossary E
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions.htm"
abapFile: "abensql_functions.htm"
keywords: ["select", "do", "if", "try", "data", "types", "internal-table", "abensql", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%2C%20ABENSQL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions

The following sections describe the built-in SQL functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry").

-   [SQL functions for numeric values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_numeric.htm)
-   [SQL functions for strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)
-   [SQL functions for null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_null.htm)
-   [SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_uuid.htm)

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_v2.htm), and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_functions.htm).

Hint

[Certain SQL expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm) can be calculated by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry"). If any other SQL expressions are used, [table buffering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffering_glosry.htm "Glossary Entry") is bypassed and internal tables accessed by [FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[DDIC - SQL Functions for Numeric Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_numeric.htm)
[DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm)
[DDIC - SQL Functions for Null Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_null.htm)
[DDIC - SQL Functions for UUIDs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_uuid.htm)


### abensql_functions_numeric.htm

---
title: "DDIC - SQL Functions for Numeric Values"
description: |
  The following table shows the numeric SQL functions that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm 'Glossary Entry').
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_numeric.htm"
abapFile: "abensql_functions_numeric.htm"
keywords: ["do", "if", "try", "data", "types", "abensql", "functions", "numeric"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Numeric%20Values%2C%20ABENSQL_FUNCTIONS_NUMERIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

DDIC - SQL Functions for Numeric Values

The following table shows the numeric SQL functions that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS DDIC-Based Views, ABAP CDS View Entities, and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

ABS

Absolute value of argument.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

CEIL

Rounds an argument to the first integer that is greater than or equal to the value of the argument.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

DIV

Division of two arguments. The result is rounded to an integer.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

DIVISION

Division of two arguments. The result is rounded to specified decimal places.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)

\-

FLOOR

Largest integer number not greater than the value of the argument.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

MOD

Positive or negative integer remainder of the division of two arguments.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

ROUND

Rounded value of an argument.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm)

\-

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_arith_func.htm).

Hint

The SQL functions [DIV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm), on the other hand, only produces positive results.

Example

The following table shows the results of integer divisions and their integer remainders in SQL. See also the example for the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarith_operators.htm).

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
  The following table shows the SQL functions for strings that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm 'Glossary Entr
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm"
abapFile: "abensql_functions_string.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abensql", "functions", "string"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Strings%2C%20ABENSQL_FUNCTIONS_STRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions for Strings

The following table shows the SQL functions for strings that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed in the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

CONCAT

Concatenates strings.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

CONCAT\_WITH\_SPACE

Concatenates strings with a specified number of blanks in between.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

INITCAP

Transforms the first letter of a word to uppercase and all remaining letters to lowercase.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

INSTR

Returns the position of the first occurrence of a string in another string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LEFT

Returns the leftmost characters of a string with a specified length.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

LENGTH

Returns the length of a string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

LIKE\_REGEXPR

Checks whether a string contains any occurrence of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE).

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOCATE

Returns the position of a string in another string. The function enables the specification of further parameters like the starting position of the search and the number of the occurrence.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR

Searches a string for a PCRE pattern and returns the offset of the match.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR\_AFTER

Searches a string for a PCRE pattern and returns the offset of the match plus 1.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOWER

Transforms all uppercase letters to lowercase letters.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

LPAD

Creates a string with a specified length by adding a specified string to the beginning of another one.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LTRIM

Removes all trailing blanks and all leading characters that match a specified character.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

OCCURRENCES\_REGEXPR

Counts all occurrences of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pcre in a string and returns the number of occurrences.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

REPLACE

Searches a string for all occurrences of a specified string and replaces them with another specified string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

REPLACE\_REGEXPR

A [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) is replaced in a string with another specified character string.

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

RIGHT

Returns the rightmost characters of a string with a specified length.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

RPAD

Creates a string with a specified length by adding a specified string at the end of another one.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

RTRIM

Removes all trailing blanks and trailing characters that match a specified character.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

SUBSTRING

Returns a substring of a specified string starting from a specified position within the string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

SUBSTRING\_REGEXPR

Searches a substring for a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pattern and returns the offset of the match.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

UPPER

Transforms all lowercase letters in a string to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - SQL Function UPPER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_function_upper_abexa.htm)


### abensql_function_upper_abexa.htm

---
title: "DDIC - SQL Function UPPER"
description: |
  This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS. Source Code  Public class definition CLASS cl_demo_sql_upper DEFINITION INHERITING FROM cl_demo_classrun PUBLIC CREATE PUBLIC. PUBLIC SECTION. METHODS main REDEFINITION. ENDCLASS.  Public class implementation CLASS c
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_function_upper_abexa.htm"
abapFile: "abensql_function_upper_abexa.htm"
keywords: ["select", "do", "if", "case", "method", "class", "data", "abensql", "function", "upper", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions.htm) →  [DDIC - SQL Functions for Strings](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Function%20UPPER%2C%20ABENSQL_FUNCTION_UPPER_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Function UPPER

This example demonstrates the SQL function UPPER in ABAP SQL and ABAP CDS.

Source Code   

\* Public class definition
CLASS cl\_demo\_sql\_upper DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_sql\_upper IMPLEMENTATION.
  METHOD main.
    DATA:
      query TYPE string VALUE \`ERROR\`,
      rows  TYPE i      VALUE 100.
    cl\_demo\_input=>new(
     )->add\_field( CHANGING field = query
     )->request(   CHANGING field = rows ).
    query = \`%\` && to\_upper( query ) && \`%\`.
    IF rows < 1 OR rows > 1000.
      out->write( 'Enter rows between 1 and 1000' ).
      RETURN.
    ENDIF.
    "UPPER in CDS view entity
    SELECT arbgb, msgnr, text
           FROM demo\_cds\_upper\_ve
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
    out->write( result1 ).
  ENDMETHOD.
ENDCLASS.

Description   

A SELECT statement accesses the following CDS view entity, which uses the SQL function UPPER:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_UPPER\_VE
  as select from t100
{
  key sprsl,
  key arbgb,
  key msgnr,
      text,
      upper(text) as upper\_text
}

Another SELECT statement uses the SQL function UPPER directly to access the same data source T100.

Since SQL functions cannot yet be used on the left side of LIKE in the DDL of ABAP CDS, the view returns a helper field, which is evaluated in ABAP SQL. The results are the same. The search effected by the examples is not case-sensitive.


### abensql_functions_string.htm

---
title: "DDIC - SQL Functions for Strings"
description: |
  The following table shows the SQL functions for strings that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm 'Glossary Entr
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_string.htm"
abapFile: "abensql_functions_string.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abensql", "functions", "string"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Strings%2C%20ABENSQL_FUNCTIONS_STRING%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions for Strings

The following table shows the SQL functions for strings that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed in the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

CONCAT

Concatenates strings.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

CONCAT\_WITH\_SPACE

Concatenates strings with a specified number of blanks in between.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

INITCAP

Transforms the first letter of a word to uppercase and all remaining letters to lowercase.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

INSTR

Returns the position of the first occurrence of a string in another string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LEFT

Returns the leftmost characters of a string with a specified length.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

LENGTH

Returns the length of a string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

LIKE\_REGEXPR

Checks whether a string contains any occurrence of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE).

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOCATE

Returns the position of a string in another string. The function enables the specification of further parameters like the starting position of the search and the number of the occurrence.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR

Searches a string for a PCRE pattern and returns the offset of the match.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOCATE\_REGEXPR\_AFTER

Searches a string for a PCRE pattern and returns the offset of the match plus 1.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LOWER

Transforms all uppercase letters to lowercase letters.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

LPAD

Creates a string with a specified length by adding a specified string to the beginning of another one.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

LTRIM

Removes all trailing blanks and all leading characters that match a specified character.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

OCCURRENCES\_REGEXPR

Counts all occurrences of a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pcre in a string and returns the number of occurrences.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

REPLACE

Searches a string for all occurrences of a specified string and replaces them with another specified string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

REPLACE\_REGEXPR

A [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) is replaced in a string with another specified character string.

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

RIGHT

Returns the rightmost characters of a string with a specified length.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

RPAD

Creates a string with a specified length by adding a specified string at the end of another one.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

RTRIM

Removes all trailing blanks and trailing characters that match a specified character.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

SUBSTRING

Returns a substring of a specified string starting from a specified position within the string.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

SUBSTRING\_REGEXPR

Searches a substring for a [Perl Compatible Regular Expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcre_glosry.htm "Glossary Entry") (PCRE) pattern and returns the offset of the match.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

\-

UPPER

Transforms all lowercase letters in a string to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_character_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_functions_numeric_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [DDIC - SQL Function UPPER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_function_upper_abexa.htm)


### abensql_functions_null.htm

---
title: "DDIC - SQL Functions for Null Values"
description: |
  The following table shows the SQL functions for null values(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm 'Glossary Entry') that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_null.htm"
abapFile: "abensql_functions_null.htm"
keywords: ["do", "if", "try", "data", "types", "abensql", "functions", "null"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Null%20Values%2C%20ABENSQL_FUNCTIONS_NULL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

DDIC - SQL Functions for Null Values

The following table shows the SQL functions for [null values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry") that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities, and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine_glosry.htm "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

COALESCE

Returns the first non-null value from a specified list.

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_coalesce_expression_v1.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_coalesce_expression_v2.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_coalesce.htm)

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_engine_expr.htm)

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_coalesce_expression_v1.htm), [ABAP CDS, View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_coalesce_expression_v2.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_coalesce.htm).


### abensql_functions_uuid.htm

---
title: "DDIC - SQL Functions for UUIDs"
description: |
  The following table shows the SQL functions for UUIDs(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuuid_glosry.htm 'Glossary Entry') that can be used by ABAP CDS(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm 'Glossary Entry') and ABAP SQL(
version: "7.58"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions_uuid.htm"
abapFile: "abensql_functions_uuid.htm"
keywords: ["select", "do", "if", "try", "internal-table", "abensql", "functions", "uuid"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_functions.htm) →  [DDIC - SQL Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20UUIDs%2C%20ABENSQL_FUNCTIONS_UUID%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions for UUIDs

The following table shows the SQL functions for [UUIDs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuuid_glosry.htm "Glossary Entry") that can be used by [ABAP CDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_glosry.htm "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities, and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be processed by the [ABAP SQL engine](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_sql_engine.htm) for accessing the [table buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_buffer_glosry.htm "Glossary Entry") and an internal table with [FROM @itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_itab.htm).

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

UUID( )

Creates [UUID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuuid_glosry.htm "Glossary Entry") values.

\-

\-

[x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_uuid.htm)

\-

The function is described in the relevant [ABAP SQL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensql_uuid.htm) documentation.
