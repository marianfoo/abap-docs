# ABAP Keyword Documentation / ABAP - Dictionary / Built-In Functions in ABAP Dictionary

Included pages: 13


### abenddic_builtin_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) → 

Built-In Functions in ABAP Dictionary

The following sections summarize the built-in SQL database functions managed by ABAP Dictionary and supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), across all platforms. Some SQL functions are supported by SQL by default and some are special SAP-specific functions.

-   [SQL functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm)

-   [Special functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_special_functions.htm)

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_builtin_functions.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_builtin_functions.htm).

Continue
[SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm)
[Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_special_functions.htm)


### abensql_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) → 

SQL Functions

The following sections summarize the built-in SQL functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), across all platforms.

-   [SQL functions for numeric values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_numeric.htm)

-   [SQL functions for strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_string.htm)

-   [SQL functions for null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_null.htm)

-   [SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_uuid.htm)

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_functions.htm).

Note

Some SQL functions are also implemented for use in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry") on AS ABAP. [Table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") is not bypassed when [these functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_expressions.htm) are used.

Continue
[SQL Functions for Numeric Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_numeric.htm)
[SQL Functions for Strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_string.htm)
[SQL Functions for Null Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_null.htm)
[SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_uuid.htm)


### abensql_functions_numeric.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm) → 

SQL Functions for Numeric Values

The following table shows the numeric SQL functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

ABS(arg)

Absolute amount of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)

x

CEIL(arg)

Smallest integer number not less than the value of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)

x

DIV(arg1, arg2)

Integer part of the division of arg1 by arg2 The sign is assigned after the amounts are divided; positive if the arguments have the same sign, and negative if the arguments have different signs. Exception: arg2 has the value 0.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)

x

DIVISION(arg1, arg2, dec)

Division of arg1 by arg2 The result is rounded to dec decimal places.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)

\-

FLOOR(arg)

Largest integer number not greater than the value of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)

x

MOD(arg1, arg2)

Positive or negative integer remainder of the division of arg1 by arg2.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)

x

ROUND(arg, pos)

Rounded value of arg. If pos is greater than 0, the value is rounded to the position pos on the right of the decimal separator. If this is not the case, position abs(pos)+1 to the left of the decimal separator is rounded. This results in a 0 if the number of places is not sufficient.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm)

\-

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_numeric.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_arith_func.htm).

Note

The SQL functions [DIV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_numeric.htm) and [MOD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_numeric.htm) behave differently with respect to the signs than the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarith_operators.htm). In the SQL function DIV, the amounts of the arguments are divided and then the sign is assigned (positive if the arguments have the same signs and negative if they have different signs). Accordingly, the result of MOD can be negative, so that multiplying the result of DIV by expr2 plus the result of MOD produces the value of expr1. The ABAP operator [MOD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarith_operators.htm), on the other hand, only produces positive results.

Example

The following table shows the results of integer divisions and their integer remainders in SQL. See also the example for the ABAP operators [DIV](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarith_operators.htm) and [MOD](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarith_operators.htm).

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

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm) → 

SQL Functions for Strings

The following table shows the SQL functions for strings supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

CONCAT( arg1, arg2 )

Concatenates strings in arg1 and arg2. Trailing blanks in arg1, arg2, and in the result are ignored. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

CONCAT\_WITH\_SPACE( arg1, arg2, spaces )

Concatenates strings in arg1 and arg2 as with CONCAT. The number of blanks specified in spaces is inserted between arg1 and arg2. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

INSTR( arg, sub )

Position of the first occurrence of the string from sub in arg (case-sensitive). arg respects leading blanks and ignores trailing blanks. sub respects all blanks. sub must contain at least one character. If no occurrences are found, the result is 0.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LEFT( arg, len )

String of the length len with the len left characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LENGTH( arg )

Number of characters in arg ignoring trailing blanks.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LOWER( arg )

String with a length of arg, in which all uppercase letters are transformed to lowercase letters.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LPAD( arg, len, src )

String of the length len with the right-justified content of arg without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LTRIM( arg, char )

String with the content of arg in which all trailing blanks and leading characters are removed that match the character in char. A blank in char is significant.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

REPLACE( arg1, arg2, arg3 )

String arg1, in which all instances of arg2 are replaced by the content from arg3. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RIGHT( arg, len )

String of the length len with the len right characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RPAD( arg, len, src )

String of the length len with the left-justified content of arg without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RTRIM( arg, char )

String with the content of arg in which all trailing blanks are removed and all trailing characters that match the character in char. A blank in char is significant.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

SUBSTRING( arg, pos, len )

Substring arg from the position pos with length len. pos and len must be specified so that the substring is within arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

UPPER( arg )

String with a length of arg, in which all lowercase letters were transformed to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [SQL Function UPPER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_function_upper_abexa.htm)


### abensql_function_upper_abexa.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm) →  [SQL Functions for Strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_string.htm) → 

SQL Function UPPER

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
    rows  = COND #( WHEN rows <= 0 THEN 100 ELSE rows ).
    "UPPER in CDS view
    SELECT arbgb, msgnr, text
           FROM demo\_cds\_upper
           WHERE sprsl = 'E' AND
                 upper\_text LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @DATA(result1)
           UP TO @rows ROWS.
    "UPPER in Open SQL
    SELECT arbgb, msgnr, text
           FROM t100
           WHERE sprsl = 'E' AND
                 upper( text ) LIKE @query
           ORDER BY arbgb, msgnr, text
           INTO TABLE @DATA(result2)
           UP TO @rows ROWS.
    ASSERT result1 = result2.
    cl\_demo\_output=>display( result1 ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A SELECT statement accesses the following CDS view, which uses the SQL function UPPER:

@AbapCatalog.sqlViewName: 'DEMOCDSUPPER'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view Demo\_Cds\_Upper
  as select from
    t100
    {
      sprsl,
      arbgb,
      msgnr,
      text,
      upper(text) as upper\_text
    }                                                                                                                                

Another SELECT statement uses the SQL function UPPER directly to access the same data source T100.

Since SQL functions cannot yet be used on the left side of LIKE in the DDL of the ABAP CDS, the view returns a help field, which is evaluated in ABAP SQL. The results are the same. The search effected by the examples is not case-sensitive.


### abensql_functions_string.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm) → 

SQL Functions for Strings

The following table shows the SQL functions for strings supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

CONCAT( arg1, arg2 )

Concatenates strings in arg1 and arg2. Trailing blanks in arg1, arg2, and in the result are ignored. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

CONCAT\_WITH\_SPACE( arg1, arg2, spaces )

Concatenates strings in arg1 and arg2 as with CONCAT. The number of blanks specified in spaces is inserted between arg1 and arg2. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

INSTR( arg, sub )

Position of the first occurrence of the string from sub in arg (case-sensitive). arg respects leading blanks and ignores trailing blanks. sub respects all blanks. sub must contain at least one character. If no occurrences are found, the result is 0.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LEFT( arg, len )

String of the length len with the len left characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LENGTH( arg )

Number of characters in arg ignoring trailing blanks.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LOWER( arg )

String with a length of arg, in which all uppercase letters are transformed to lowercase letters.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LPAD( arg, len, src )

String of the length len with the right-justified content of arg without trailing blanks and in which leading blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

LTRIM( arg, char )

String with the content of arg in which all trailing blanks and leading characters are removed that match the character in char. A blank in char is significant.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

REPLACE( arg1, arg2, arg3 )

String arg1, in which all instances of arg2 are replaced by the content from arg3. The replacement of letters is case-sensitive. Trailing blanks are ignored in all arguments. The maximum length of the result is 1333.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RIGHT( arg, len )

String of the length len with the len right characters of arg (ignoring the trailing blanks). The value of len cannot be greater than the length of arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RPAD( arg, len, src )

String of the length len with the left-justified content of arg without trailing blanks and in which trailing blanks produced by the expanded string are replaced by the characters from the argument src (respecting all blanks). Leading blanks from arg are preserved. If more characters are required than exist in src, the content of src is used repeatedly. If len is less than the length of arg, it is truncated on the right. If src is empty and len is greater than the length of arg, arg remains unchanged.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

RTRIM( arg, char )

String with the content of arg in which all trailing blanks are removed and all trailing characters that match the character in char. A blank in char is significant.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

SUBSTRING( arg, pos, len )

Substring arg from the position pos with length len. pos and len must be specified so that the substring is within arg.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

x

UPPER( arg )

String with a length of arg, in which all lowercase letters were transformed to uppercase letters.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm)

\-

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions_character.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_string_func.htm).

Executable Example

[SQL Function UPPER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_function_upper_abexa.htm)

Continue
![Example](exa.gif "Example") [SQL Function UPPER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_function_upper_abexa.htm)


### abensql_functions_null.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm) → 

SQL Functions for Null Values

The following table shows the SQL functions for [null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry") that are supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

COALESCE( arg1, arg2, ... )

Value of the first argument that does not have a null value.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_coalesce_expression.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm)

x

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_coalesce_expression.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_coalesce.htm).


### abensql_functions_uuid.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [SQL Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions.htm) → 

SQL functions for UUIDs

The following table shows the SQL functions for [UUIDs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuuid_glosry.htm "Glossary Entry") that are supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The columns ABAP CDS and SQL indicate where a function can be used. The Table Buffer column indicates whether the function can be executed in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry").

SQL Function

Result

ABAP CDS

ABAP SQL

Table Buffer

UUID( )

Creates [UUID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuuid_glosry.htm "Glossary Entry")

\-

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_uuid.htm)

\-

The function is described in the relevant [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_uuid.htm) documentation.


### abensql_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) → 

SQL Functions

The following sections summarize the built-in SQL functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"), across all platforms.

-   [SQL functions for numeric values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_numeric.htm)

-   [SQL functions for strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_string.htm)

-   [SQL functions for null values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_null.htm)

-   [SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_uuid.htm)

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_sql_functions.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_functions.htm).

Note

Some SQL functions are also implemented for use in the [table buffer](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_buffer_glosry.htm "Glossary Entry") on AS ABAP. [Table buffering](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_buffering_glosry.htm "Glossary Entry") is not bypassed when [these functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbuffer_expressions.htm) are used.

Continue
[SQL Functions for Numeric Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_numeric.htm)
[SQL Functions for Strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_string.htm)
[SQL Functions for Null Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_null.htm)
[SQL functions for UUIDs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_functions_uuid.htm)


### abenddic_special_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) → 

Special Functions

These built-in functions are delivered by SAP and are not provided as native functions on every database platform:

-   [Conversion functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_conversion_functions.htm)

-   [Date functions and time functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_functions.htm)

Continue
[Conversion Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_conversion_functions.htm)
[Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_functions.htm)


### abenddic_conversion_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_special_functions.htm) → 

Conversion Functions

The following table shows the conversion functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The last two columns indicate where a function can be used.

SQL Function

Result

ABAP CDS

ABAP SQL

FLTP\_TO\_DEC( arg AS dtype )

Conversion of an argument of type FLTP to a packed number.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_types.htm)

\-

BINTOHEX(arg)

Converts an argument of the type RAW to a string of the type CHAR.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_types.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_type_conv_func.htm)

HEXTOBIN(arg)

Converts an argument of the type CHAR or NUMC to a byte string of the type RAW.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_types.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_type_conv_func.htm)

UNIT\_CONVERSION( p1 => a1, p2 => a2, ... )

Conversion of units.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_unit_curr.htm)

\-

CURRENCY\_CONVERSION( p1 => a1, p2 => a2, ... )

Conversion of currencies.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_unit_curr.htm)

\-

DECIMAL\_SHIFT( p1 => a1, p2 => a2, ... )

Setting the decimal separator.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conv_func_unit_curr.htm)

\-

Descriptions of the potential operands and data types and how they work can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_conversion_functions.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_conversion_functions.htm).


### abenddic_date_time_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) →  [Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_special_functions.htm) → 

Date Functions and Time Functions

The following table shows the date and time functions supported by [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_cds_glosry.htm "Glossary Entry") and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_glosry.htm "Glossary Entry"). The last two columns indicate where a function can be used.

SQL Function

Result

ABAP CDS

ABAP SQL

DATS\_IS\_VALID( date )

Shows whether the argument is a valid date.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

DATS\_DAYS\_BETWEEN( date1, date2 )

Difference between two dates.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

DATS\_ADD\_DAYS( date, days , on\_error )

Total of days and a date.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

DATS\_ADD\_MONTHS( date, months, on\_error )

Total of months and a date.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_func.htm)

TIMS\_IS\_VALID( time )

Shows whether the argument is a valid time.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_time_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_time_func.htm)

TSTMP\_IS\_VALID( tstmp )

Shows whether the argument is a valid time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_CURRENT\_UTCTIMESTAMP( )

Current UTC time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_SECONDS\_BETWEEN( tstmp1, tstmp2, on\_error )

Difference between two time stamps in seconds.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_ADD\_SECONDS( tstmp, seconds, on\_error )

Total of seconds and a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timestamp_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timestamp_func.htm)

TSTMP\_TO\_DATS( tstmp, tzone, clnt, on\_error )

Local date of a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_TIMS( tstmp, tzone, clnt, on\_error )

Local time of a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

TSTMP\_TO\_DST( tstmp, tzone, clnt, on\_error )

Local summer time marker of a time stamp.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

DATS\_TIMS\_TO\_TSTMP( date, time, tzone, clnt, on\_error )

Time stamp for a local date and a local time.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_conversions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm)

ABAP\_SYSTEM\_TIMEZONE( clnt, on\_error )

System time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timezone_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timezone_func.htm)

ABAP\_USER\_TIMEZONE( user, clnt, on\_error )

User time zone in AS ABAP.

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_timezone_functions.htm)

[x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_timezone_func.htm)

Descriptions of the potential operands and data types can be found in the corresponding documentation for [ABAP CDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_date_time_functions.htm) and [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_date_time_functions.htm).


### abenddic_special_functions.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Built-In Functions in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_functions.htm) → 

Special Functions

These built-in functions are delivered by SAP and are not provided as native functions on every database platform:

-   [Conversion functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_conversion_functions.htm)

-   [Date functions and time functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_functions.htm)

Continue
[Conversion Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_conversion_functions.htm)
[Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_date_time_functions.htm)
