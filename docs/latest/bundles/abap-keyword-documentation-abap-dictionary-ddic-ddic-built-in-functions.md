# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Functions

Included pages: 13


### abenddic_builtin_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Built-In%20Functions%2C%20ABENDDIC_BUILTIN_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Built-In Functions

The following sections summarize the built-in database functions managed by ABAP Dictionary. They can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). They are divided in two categories:

-   [SQL functions](javascript:call_link\('abensql_functions.htm'\)). These functions are generally available in SQL.
-   [Special functions](javascript:call_link\('abenddic_special_functions.htm'\)). These functions are SAP-specific functions.

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_builtin_functions_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_builtin_functions_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)).

Continue
[DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\))
[DDIC - Special Functions](javascript:call_link\('abenddic_special_functions.htm'\))


### abensql_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%2C%20ABENSQL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions

The following sections describe the built-in SQL functions that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry").

-   [SQL functions for numeric values](javascript:call_link\('abensql_functions_numeric.htm'\))
-   [SQL functions for strings](javascript:call_link\('abensql_functions_string.htm'\))
-   [SQL functions for null values](javascript:call_link\('abensql_functions_null.htm'\))
-   [SQL functions for UUIDs](javascript:call_link\('abensql_functions_uuid.htm'\))

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_sql_functions_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_sql_functions_v2.htm'\)), and [ABAP SQL](javascript:call_link\('abenabap_sql_functions.htm'\)).

Hint

[Certain SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\)) can be calculated by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry"). If any other SQL expressions are used, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is bypassed and internal tables accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[DDIC - SQL Functions for Numeric Values](javascript:call_link\('abensql_functions_numeric.htm'\))
[DDIC - SQL Functions for Strings](javascript:call_link\('abensql_functions_string.htm'\))
[DDIC - SQL Functions for Null Values](javascript:call_link\('abensql_functions_null.htm'\))
[DDIC - SQL Functions for UUIDs](javascript:call_link\('abensql_functions_uuid.htm'\))


### abensql_functions_numeric.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Numeric%20Values%2C%20ABENSQL_FUNCTIONS_NUMERIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

DDIC - SQL Functions for Numeric Values

The following table shows the numeric SQL functions that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The columns ABAP CDS DDIC-Based Views, ABAP CDS View Entities, and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

ABS

Absolute value of argument.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

CEIL

Rounds an argument to the first integer that is greater than or equal to the value of the argument.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

DIV

Division of two arguments. The result is rounded to an integer.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

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

[x](javascript:call_link\('abensql_engine_expr.htm'\))

MOD

Positive or negative integer remainder of the division of two arguments.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

ROUND

Rounded value of an argument.

[x](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\))

[x](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\))

[x](javascript:call_link\('abensql_arith_func.htm'\))

\-

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_sql_functions_numeric_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_sql_functions_numeric_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abensql_arith_func.htm'\)).

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


### abensql_functions_string.htm

  

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


### abensql_function_upper_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\)) →  [DDIC - SQL Functions for Strings](javascript:call_link\('abensql_functions_string.htm'\)) → 

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


### abensql_functions_null.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20Null%20Values%2C%20ABENSQL_FUNCTIONS_NULL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement
:)

DDIC - SQL Functions for Null Values

The following table shows the SQL functions for [null values](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry") that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities, and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be executed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry").

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

COALESCE

Returns the first non-null value from a specified list.

[x](javascript:call_link\('abencds_coalesce_expression_v1.htm'\))

[x](javascript:call_link\('abencds_coalesce_expression_v2.htm'\))

[x](javascript:call_link\('abensql_coalesce.htm'\))

[x](javascript:call_link\('abensql_engine_expr.htm'\))

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_coalesce_expression_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_coalesce_expression_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abensql_coalesce.htm'\)).


### abensql_functions_uuid.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - SQL Functions](javascript:call_link\('abensql_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%20for%20UUIDs%2C%20ABENSQL_FUNCTIONS_UUID%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions for UUIDs

The following table shows the SQL functions for [UUIDs](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The columns CDS DDIC-Based Views, CDS View Entities, and ABAP SQL indicate where a function can be used. The ABAP SQL Engine column indicates whether the function can be processed by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine.htm'\)) for accessing the [table buffer](javascript:call_link\('abentable_buffer_glosry.htm'\) "Glossary Entry") and an internal table with [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)).

SQL Function

Result

CDS DDIC-Based Views

CDS View Entities

ABAP SQL

ABAP SQL Engine

UUID( )

Creates [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") values.

\-

\-

[x](javascript:call_link\('abensql_uuid.htm'\))

\-

The function is described in the relevant [ABAP SQL](javascript:call_link\('abensql_uuid.htm'\)) documentation.


### abensql_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20SQL%20Functions%2C%20ABENSQL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - SQL Functions

The following sections describe the built-in SQL functions that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry").

-   [SQL functions for numeric values](javascript:call_link\('abensql_functions_numeric.htm'\))
-   [SQL functions for strings](javascript:call_link\('abensql_functions_string.htm'\))
-   [SQL functions for null values](javascript:call_link\('abensql_functions_null.htm'\))
-   [SQL functions for UUIDs](javascript:call_link\('abensql_functions_uuid.htm'\))

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_sql_functions_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_sql_functions_v2.htm'\)), and [ABAP SQL](javascript:call_link\('abenabap_sql_functions.htm'\)).

Hint

[Certain SQL expressions](javascript:call_link\('abensql_engine_expr.htm'\)) can be calculated by the [ABAP SQL engine](javascript:call_link\('abenabap_sql_engine_glosry.htm'\) "Glossary Entry"). If any other SQL expressions are used, [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry") is bypassed and internal tables accessed by [FROM @itab](javascript:call_link\('abapselect_itab.htm'\)) must be transported to the database. This is only possible for one internal table per ABAP SQL statement.

Continue
[DDIC - SQL Functions for Numeric Values](javascript:call_link\('abensql_functions_numeric.htm'\))
[DDIC - SQL Functions for Strings](javascript:call_link\('abensql_functions_string.htm'\))
[DDIC - SQL Functions for Null Values](javascript:call_link\('abensql_functions_null.htm'\))
[DDIC - SQL Functions for UUIDs](javascript:call_link\('abensql_functions_uuid.htm'\))


### abenddic_special_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Special%20Functions%2C%20ABENDDIC_SPECIAL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Special Functions

These built-in functions are delivered by SAP. They are not provided as native functions on every database platform:

-   [Conversion functions](javascript:call_link\('abenddic_conversion_functions.htm'\))
-   [Date functions and time functions](javascript:call_link\('abenddic_date_time_functions.htm'\))

Continue
[DDIC - Conversion Functions](javascript:call_link\('abenddic_conversion_functions.htm'\))
[DDIC - Date Functions and Time Functions](javascript:call_link\('abenddic_date_time_functions.htm'\))


### abenddic_conversion_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - Special Functions](javascript:call_link\('abenddic_special_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Conversion%20Functions%2C%20ABENDDIC_CONVERSION_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Conversion Functions

The following table shows the conversion functions that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

AS\_GEO\_JSON

Converts an argument of type GEOM\_EWKB to JSON format.

\-

\-

[x](javascript:call_link\('abensql_geo_conv_func.htm'\))

BINTOHEX

Converts an argument of the type RAW to a string of the type CHAR.

[x](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

CURRENCY\_CONVERSION

Conversion of currencies.

[x](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

[x](javascript:call_link\('abensql_curr_unit_conv_func.htm'\))

CURR\_TO\_DECFLOAT\_AMOUNT

Converts a currency field of data type CURR into a currency field of data type DECFLOAT34.

\-

[x](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

\-

DECIMAL\_SHIFT

Sets the decimal separator of an argument in accordance with a currency.

[x](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

\-

\-

FLTP\_TO\_DEC

Converts an argument of type FLTP to a packed number.

[x](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

\-

GET\_NUMERIC\_VALUE

Converts a [CDS amount field](javascript:call_link\('abencds_amount_field_glosry.htm'\) "Glossary Entry") or a [CDS quantity field](javascript:call_link\('abencds_quantity_glosry.htm'\) "Glossary Entry") into a regular field of data type DECFLOAT34. The reference to a unit or currency key is removed.

\-

[x](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

\-

HEXTOBIN

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW.

[x](javascript:call_link\('abencds_conv_func_types_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_types_v2.htm'\))

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

TO\_BLOB

Converts an argument of the type RAW to a byte string (BLOB) of the type RAWSTRING.

\-

\-

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

TO\_CLOB

Converts an argument of the type SSTRING to a CLOB of the type STRING.

\-

\-

[x](javascript:call_link\('abensql_type_conv_func.htm'\))

UNIT\_CONVERSION

Conversion of units.

[x](javascript:call_link\('abencds_conv_func_unit_curr_v1.htm'\))

[x](javascript:call_link\('abencds_conv_func_unit_curr_v2.htm'\))

[x](javascript:call_link\('abensql_curr_unit_conv_func.htm'\))

The possible operands and data types as well as the exact functionality is described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_conversion_functions_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_conversion_functions_v2.htm'\)), and [ABAP SQL](javascript:call_link\('abenabap_sql_conversion_functions.htm'\)).


### abenddic_date_time_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) →  [DDIC - Special Functions](javascript:call_link\('abenddic_special_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Date%20Functions%20and%20Time%20Functions%2C%20ABENDDIC_DATE_TIME_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

DDIC - Date Functions and Time Functions

The following table shows the date and time functions that can be used by [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry") and [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"). The last three columns indicate where a function can be used.

SQL Function

Result

ABAP CDS, DDIC-Based Views

ABAP CDS, View Entities

ABAP SQL

ABAP\_SYSTEM\_TIMEZONE

System time zone in AS ABAP.

[x](javascript:call_link\('abencds_timezone_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timezone_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timezone_func.htm'\))

ABAP\_USER\_TIMEZONE

User time zone in AS ABAP.

[x](javascript:call_link\('abencds_timezone_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timezone_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timezone_func.htm'\))

ADD\_DAYS

Adds days to a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

ADD\_MONTHS

Adds months to a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

DATN\_ADD\_DAYS

Adds days to a date.

[x](javascript:call_link\('abencds_date_functions_v1.htm'\))

[x](javascript:call_link\('abencds_date_functions_v2.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATN\_ADD\_MONTHS

Adds months to a date.

[x](javascript:call_link\('abencds_date_functions_v1.htm'\))

[x](javascript:call_link\('abencds_date_functions_v2.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATN\_DAYS\_BETWEEN

Difference between two dates.

[x](javascript:call_link\('abencds_date_functions_v1.htm'\))

[x](javascript:call_link\('abencds_date_functions_v2.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_ADD\_DAYS

Adds days to a date.

[x](javascript:call_link\('abencds_date_functions_v1.htm'\))

[x](javascript:call_link\('abencds_date_functions_v2.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_ADD\_MONTHS

Adds months to a date.

[x](javascript:call_link\('abencds_date_functions_v1.htm'\))

[x](javascript:call_link\('abencds_date_functions_v2.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_DAYS\_BETWEEN

Difference between two dates.

[x](javascript:call_link\('abencds_date_functions_v1.htm'\))

[x](javascript:call_link\('abencds_date_functions_v2.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_FROM\_DATN

Converts a date from type DATN to type DATS.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

DATS\_IS\_VALID

Shows whether the argument is a valid date.

[x](javascript:call_link\('abencds_date_functions_v1.htm'\))

[x](javascript:call_link\('abencds_date_functions_v2.htm'\))

[x](javascript:call_link\('abensql_date_func.htm'\))

DATS\_TIMS\_TO\_TSTMP

Time stamp for a local date and a local time.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

DATS\_TO\_DATN

Converts a date from type DATS to type DATN.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

DAYNAME

Shows the name of a day of a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

DAYS\_BETWEEN

Difference between two dates.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

EXTRACT\_DAY

Extracts the day of a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

EXTRACT\_HOUR

Extracts the hour of a time.

\-

\-

[x](javascript:call_link\('abensql_time_func.htm'\))

EXTRACT\_MINUTE

Extracts the minute of a time.

\-

\-

[x](javascript:call_link\('abensql_time_func.htm'\))

EXTRACT\_MONTH

Extracts the month of a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

EXTRACT\_SECOND

Extracts the second of a time.

\-

\-

[x](javascript:call_link\('abensql_time_func.htm'\))

EXTRACT\_YEAR

Extracts the year of a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

IS\_VALID

Shows whether the argument is a valid date, time, or time stamp.

\-

\-

[x](javascript:call_link\('abensql_time_func.htm'\))

MONTHNAME

Shows the name of a month of a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

TIMS\_FROM\_TIMN

Converts a time from type TIMN to type TIMS.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TIMS\_IS\_VALID

Shows whether the argument is a valid time.

[x](javascript:call_link\('abencds_time_functions_v1.htm'\))

[x](javascript:call_link\('abencds_time_functions_v2.htm'\))

[x](javascript:call_link\('abensql_time_func.htm'\))

TIMS\_TO\_TIMN

Converts a time from type TIMS to type TIMN.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TSTMP\_ADD\_SECONDS

Adds seconds to a time stamp.

[x](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_CURRENT\_UTCTIMESTAMP

Current UTC time stamp.

[x](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_IS\_VALID

Shows whether the argument is a valid time stamp.

[x](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_SECONDS\_BETWEEN

Difference between two time stamps in seconds.

[x](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

TSTMP\_TO\_DATS

Local date of a time stamp.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TSTMP\_TO\_DST

Local daylight saving time marker of a time stamp.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TSTMP\_TO\_TIMS

Local time of a time stamp.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TSTMPL\_FROM\_UTCL

Converts a time stamp from type UTCLONG to type TIMESTAMPL.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

TSTMPL\_TO\_UTCL

Converts a time stamp from type TIMESTAMPL to type UTCLONG.

[x](javascript:call_link\('abencds_date_time_conversions_v1.htm'\))

[x](javascript:call_link\('abencds_date_time_conversions_v2.htm'\))

[x](javascript:call_link\('abensql_date_time_conversions.htm'\))

UTCL\_ADD\_SECONDS

Adds seconds to a UTC time stamp.

[x](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

UTCL\_CURRENT

Returns the current UTC time stamp within a SELECT\-statement.

[x](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

UTCL\_SECONDS\_BETWEEN

Difference between two UTC time stamps in seconds.

[x](javascript:call_link\('abencds_timestamp_functions_v1.htm'\))

[x](javascript:call_link\('abencds_timestamp_functions_v2.htm'\))

[x](javascript:call_link\('abensql_timestamp_func.htm'\))

WEEKDAY

Shows the number of a weekday of a date.

\-

\-

[x](javascript:call_link\('abensql_date_func.htm'\))

The possible operands and data types are described in the corresponding documentation for [ABAP CDS, DDIC-Based Views](javascript:call_link\('abencds_date_time_functions_v1.htm'\)), [ABAP CDS, View Entities](javascript:call_link\('abencds_date_time_functions_v2.htm'\)) and [ABAP SQL](javascript:call_link\('abenabap_sql_date_time_functions.htm'\)).


### abenddic_special_functions.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Functions](javascript:call_link\('abenddic_builtin_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Special%20Functions%2C%20ABENDDIC_SPECIAL_FUNCTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Special Functions

These built-in functions are delivered by SAP. They are not provided as native functions on every database platform:

-   [Conversion functions](javascript:call_link\('abenddic_conversion_functions.htm'\))
-   [Date functions and time functions](javascript:call_link\('abenddic_date_time_functions.htm'\))

Continue
[DDIC - Conversion Functions](javascript:call_link\('abenddic_conversion_functions.htm'\))
[DDIC - Date Functions and Time Functions](javascript:call_link\('abenddic_date_time_functions.htm'\))
