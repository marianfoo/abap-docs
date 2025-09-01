---
title: "Syntax"
description: |
  ... DATN_DAYS_BETWEEN( date1,date2 )  DATN_ADD_DAYS( date,days )  DATN_ADD_MONTHS( date,months )  DATS_IS_VALID( date )  DATS_DAYS_BETWEEN( date1,date2 )  DATS_ADD_DAYS( date,days )  DATS_ADD_MONTHS( date,months ) ... Variants: 1. ... DATN_DAYS_BETWEEN( date1,date
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_date_func.htm"
abapFile: "abensql_date_func.htm"
keywords: ["select", "insert", "delete", "do", "while", "if", "case", "try", "data", "types", "abensql", "date", "func"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_builtin_functions.htm) →  [sql\_func - Special Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_special_functions.htm) →  [sql\_func - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopen_sql_date_time_functions.htm) → 

sql\_func - Date Functions

Syntax

... DATN\_DAYS\_BETWEEN( date1,date2 )
  *|* DATN\_ADD\_DAYS( date,days )
  *|* DATN\_ADD\_MONTHS( date,months )
  *|* DATS\_IS\_VALID( date )
  *|* DATS\_DAYS\_BETWEEN( date1,date2 )
  *|* DATS\_ADD\_DAYS( date,days )
  *|* DATS\_ADD\_MONTHS( date,months ) ...

Variants:

[1\. ... DATN\_DAYS\_BETWEEN( date1,date2 )](#!ABAP_VARIANT_1@1@)
[2\. ... DATN\_ADD\_DAYS( date,days )](#!ABAP_VARIANT_2@2@)
[3\. ... DATN\_ADD\_MONTHS( date,months )](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_IS\_VALID( date )](#!ABAP_VARIANT_4@4@)
[5\. ... DATS\_DAYS\_BETWEEN( date1,date2 )](#!ABAP_VARIANT_5@5@)
[6\. ... DATS\_ADD\_DAYS( date,days )](#!ABAP_VARIANT_6@6@)
[7\. ... DATS\_ADD\_MONTHS( date,months )](#!ABAP_VARIANT_7@7@)

Effect

These SQL functions perform operations on dates with arguments of the built-in data types [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. [SQL expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsql_expr.htm) of matching data types can be passed as actual parameters. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except DATS\_IS\_VALID returns a null value.

Variant 1

... DATN\_DAYS\_BETWEEN( date1,date2 )

Effect

The function DATN\_DAYS\_BETWEEN calculates the difference between two specified dates date1 and date2 in days. The actual parameters must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and must contain a valid date in the format YYYYMMDD. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If date2 is greater than date1, the result is positive. Otherwise, the result is negative. If the result is outside of the range of valid dates, an error occurs.

Hint

DATN\_DAYS\_BETWEEN enforces [strict mode from Release 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_755.htm).

Variant 2

... DATN\_ADD\_DAYS( date,days )

Effect

The function DATN\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and must contain a valid date in the format YYYYMMDD.

-   The actual parameter days must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

The result has the data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, an error occurs.

Hint

DATN\_ADD\_DAYS enforces [strict mode from Release 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_755.htm).

Variant 3

... DATN\_ADD\_MONTHS( date,months )

Effect

The function DATN\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and it must contain a valid date in the format YYYYMMDD.

-   The actual parameter months must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

The result has the data type [DATN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

Hint

DATN\_ADD\_MONTHS enforces [strict mode from Release 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenopensql_strict_mode_755.htm).

Variant 4

... DATS\_IS\_VALID( date )

Effect

The function DATS\_IS\_VALID determines whether date contains a valid date in the format YYYYMMDD. The actual parameter must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

The value "00010101" is a valid date here but the value "00000000" is not.

Variant 5

... DATS\_DAYS\_BETWEEN( date1,date2 )

Effect

The function DATS\_DAYS\_BETWEEN calculates the difference between two dates date1 and date2 in days. The actual parameters must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid date is initialized and set to the value "00010101" before the calculation. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If date2 is greater than date1, the result is positive. In the reverse case, it is negative.

Hint

Before the difference is calculated, the specified dates are converted to integers like in ABAP, and the corresponding [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) apply.

Variant 6

... DATS\_ADD\_DAYS( date,days )

Effect

The function DATS\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid date is initialized and set to the value "00010101" before the calculation.

-   The actual parameter days must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the initial value is reset.

Hint

For the calculation, the specified date is [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_d.htm) to an integer like in ABAP, and the result is [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_ibs.htm) to a date again while the corresponding rules apply.

Variant 7

... DATS\_ADD\_MONTHS( date,months )

Effect

The function DATS\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) and should contain a valid date in the format YYYYMMDD. Any invalid date is initialized and set to the value "00010101" before the calculation.

-   The actual parameter months must have the built-in data type [INT4](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

The result has the data type [DATS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

Example

Applying the date functions to date columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_DATE\_FUNCTIONS executes this access to the table and represents the result.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X' dats1 = sy-datum dats2 = sy-datum + 100
           datn1 = sy-datum + 5 datn2 = sy-datum + 200 ) ).
SELECT SINGLE dats1, dats2,
              dats\_is\_valid( dats1 ) AS valid,
              dats\_days\_between( dats1, dats2 ) AS days\_between,
              dats\_add\_days( dats1,100 ) AS add\_days,
              dats\_add\_months( dats1,-1 ) AS add\_month,
              datn1, datn2,
              datn\_days\_between( datn1, datn2 ) AS datn\_between,
              datn\_add\_days( datn1,1 ) AS datn\_add\_days,
              datn\_add\_months( datn1,1 ) AS datn\_add\_month
       FROM demo\_expressions
       INTO @DATA(result).