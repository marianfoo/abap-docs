  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - Special Functions](javascript:call_link\('abenabap_sql_special_functions.htm'\)) →  [sql\_func - Date Functions and Time Functions](javascript:call_link\('abenabap_sql_date_time_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20Date%20Functions%2C%20ABENSQL_DATE_FUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - Date Functions

Syntax Forms

[Generic Date Functions](abensql_date_func.htm#@@ITOC@@ABENSQL_DATE_FUNC_1)

1\. ... IS\_VALID( date*|*time*|*utclong )
    *|* EXTRACT\_YEAR( date*|*utclong )
    *|* EXTRACT\_MONTH( date*|*utclong )
    *|* EXTRACT\_DAY( date*|*utclong )
    *|* DAYNAME( date*|*utclong )
    *|* MONTHNAME( date*|*utclong )
    *|* WEEKDAY( date*|*utclong )
    *|* DAYS\_BETWEEN( *{*date1*|*utclong1*}*,*{*date2*|*utclong2*}* )
    *|* ADD\_DAYS( *{*date*|*utclong*}*,days )
    *|* ADD\_MONTHS( *{*date*|*utclong*}*,months ) ...

[Functions for DATN](abensql_date_func.htm#@@ITOC@@ABENSQL_DATE_FUNC_2)

2\. ... DATN\_DAYS\_BETWEEN( date1,date2 )
    *|* DATN\_ADD\_DAYS( date,days )
    *|* DATN\_ADD\_MONTHS( date,months ) ...

[Functions for DATS](abensql_date_func.htm#@@ITOC@@ABENSQL_DATE_FUNC_3)

3\. ... DATS\_IS\_VALID( date )
    *|* DATS\_DAYS\_BETWEEN( date1,date2 )
    *|* DATS\_ADD\_DAYS( date,days )
    *|* DATS\_ADD\_MONTHS( date,months ) ...

Effect

These SQL functions perform operations on dates with arguments of the built-in data types [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)). The first set covers generic functions, the second set covers a function depending on the data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), and the third set covers a function depending on the data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) of matching data types can be passed as actual parameters. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function except IS\_VALID and DATS\_IS\_VALID returns a null value.

Generic Date Functions   

Syntax

... IS\_VALID( date*|*time*|*utclong )
  *|* EXTRACT\_YEAR( date*|*utclong )
  *|* EXTRACT\_MONTH( date*|*utclong )
  *|* EXTRACT\_DAY( date*|*utclong )
  *|* DAYNAME( date*|*utclong )
  *|* MONTHNAME( date*|*utclong )
  *|* WEEKDAY( date*|*utclong )
  *|* DAYS\_BETWEEN( *{*date1*|*utclong1*}*,*{*date2*|*utclong2*}* )
  *|* ADD\_DAYS( *{*date*|*utclong*}*,days )
  *|* ADD\_MONTHS( *{*date*|*utclong*}*,months ) ...

Variants:

[1\. ... IS\_VALID( date*|*time*|*utclong )](#!ABAP_VARIANT_1@1@)
[2\. ... EXTRACT\_YEAR( date*|*utclong )](#!ABAP_VARIANT_2@2@)
[3\. ... EXTRACT\_MONTH( date*|*utclong )](#!ABAP_VARIANT_3@3@)
[4\. ... EXTRACT\_DAY( date*|*utclong )](#!ABAP_VARIANT_4@4@)
[5\. ... DAYNAME( date*|*utclong )](#!ABAP_VARIANT_5@5@)
[6\. ... MONTHNAME( date*|*utclong )](#!ABAP_VARIANT_6@6@)
[7\. ... WEEKDAY( date*|*utclong )](#!ABAP_VARIANT_7@7@)
[8\. ... DAYS\_BETWEEN( *{*date1*|*utclong1*}*,*{*date2*|*utclong2*}* )](#!ABAP_VARIANT_8@8@)
[9\. ... ADD\_DAYS( *{*date*|*utclong*}*,days )](#!ABAP_VARIANT_9@9@)
[10\. ... ADD\_MONTHS( *{*date*|*utclong*}*,months )](#!ABAP_VARIANT_10@10@)

Effect

These SQL functions perform operations with arguments of the built-in data types [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

Hint

All generic functions enforce [strict mode from ABAP release 7.56](javascript:call_link\('abenabap_sql_strictmode_756.htm'\)).

Variant 1   

... IS\_VALID( date*|*time*|*utclong ) ...

Effect

The generic function IS\_VALID determines whether the specification date, time, or utclong has a valid format. For more information about the IS\_VALID function, see [time functions](javascript:call_link\('abensql_time_func.htm'\)).

Hint

The generic function IS\_VALID applies to [time functions](javascript:call_link\('abensql_time_func.htm'\)) and [time stamp functions](javascript:call_link\('abensql_timestamp_func.htm'\)) as well.

Example

Applying the generic function to a date column of the DDIC database table DEMO\_EXPRESSIONS.

FINAL(date1) = cl\_demo\_date\_time=>get\_utc\_date( ).
...
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #(
  id      = 'X'
  dats1 = date1 ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS dats1 AS date1,
              is\_valid( dats1 ) AS valid1
       INTO @FINAL(result).

Variant 2   

... EXTRACT\_YEAR( date*|*utclong ) ...

Effect

The generic function EXTRACT\_YEAR extracts the year of a date or a time stamp. The actual parameter must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result of the function EXTRACT\_YEAR has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). The function returns the value 1 for initial input values. If no valid date is passed as a DATS value, the function EXTRACT\_YEAR raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Hints

-   If the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) is used, the function EXTRACT\_YEAR calls the [HANA function EXTRACT](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) is used, the function EXTRACT\_YEAR internally uses the ABAP SQL [SUBSTRING](javascript:call_link\('abensql_string_func.htm'\)) function and a [CAST](javascript:call_link\('abensql_cast.htm'\)) expression afterwards. The corresponding rules apply.

Variant 3   

... EXTRACT\_MONTH( date*|*utclong ) ...

Effect

The generic function EXTRACT\_MONTH extracts the month of a date or a time stamp. The actual parameter must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result of the function EXTRACT\_MONTH has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). The function returns the value 1 for initial input values. If no valid date is passed as a DATS value, the function EXTRACT\_MONTH raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Hints

-   If the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) is used, the function EXTRACT\_MONTH calls the [HANA function EXTRACT](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) is used, the function EXTRACT\_MONTH internally uses the ABAP SQL [SUBSTRING](javascript:call_link\('abensql_string_func.htm'\)) function and a [CAST](javascript:call_link\('abensql_cast.htm'\)) expression afterwards. The corresponding rules apply.

Variant 4   

... EXTRACT\_DAY( date*|*utclong ) ...

Effect

The generic function EXTRACT\_DAY extracts the day of a date or a time stamp. The actual parameter must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result of the function EXTRACT\_DAY has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). The function returns the value 1 for initial input values. If no valid date is passed as a DATS value, the function EXTRACT\_DAY raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Hints

-   If the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) is used, the function EXTRACT\_DAY calls the [HANA function EXTRACT](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) is used, the function EXTRACT\_DAY internally uses the ABAP SQL [SUBSTRING](javascript:call_link\('abensql_string_func.htm'\)) function and a [CAST](javascript:call_link\('abensql_cast.htm'\)) expression afterwards. The corresponding rules apply.

Variant 5   

... DAYNAME( date*|*utclong ) ...

Effect

The generic function DAYNAME returns the name of a day of a date or a time stamp in uppercase letters in English. The actual parameter must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result of the function DAYNAME has the data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 9. If no valid date is saved in a DATS value, the function DAYNAME raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Variant 6   

... MONTHNAME( date*|*utclong ) ...

Effect

The generic function MONTHNAME returns the name of a month of a date or a time stamp in uppercase letters in English. The actual parameter must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result of the function MONTHNAME has the data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 9. If no valid date is saved in a DATS value, the function MONTHNAME raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Variant 7   

... WEEKDAY( date*|*utclong ) ...

Effect

The generic function WEEKDAY returns the number of a weekday of a date or a time stamp from 0 to 6. The actual parameter must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result of the function WEEKDAY has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). If no valid date is saved in a DATS value, the function WEEKDAY raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Variant 8   

... DAYS\_BETWEEN( *{*date1*|*utclong1*}*,*{*date2*|*utclong2*}* ) ...

Effect

The function DAYS\_BETWEEN calculates the difference between two dates date1 or utclong1 and date2 or utclong2 in days. The actual parameters must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), or [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid date in the format YYYYMMDD or a valid time stamp in a format like 0001-01-01T00:00:00.0000000. Any invalid date is initialized and set to the value 00010101 before the calculation. Any invalid time stamp is initialized and set to the value 0001-01-01T00:00:00.0000000 before the calculation.

The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). If date2 is greater than date1, the result is positive. In the reverse case, it is negative.

Hint

It is possible to use two different data types for the function DAYS\_BETWEEN and to calculate the days between these two dates.

Variant 9   

... ADD\_DAYS( *{*date*|*utclong*}*,days ) ...

Effect

The function ADD\_DAYS adds days days to a specified date date or time stamp utclong.

-   The actual parameter date must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) or [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid date in the format YYYYMMDD. The actual parameter utclong must have the built-in data type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid time stamp in a format like 0001-01-01T00:00:00.0000000. Any invalid date is initialized and set to the value 00010101 before the calculation and any invalid time stamp is initialized and set to the value 0001-01-01T00:00:00.0000000 before the calculation.
-   The actual parameter days must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result has the data type of the first actual parameter days or utclong. If days is positive, the number of days is added to date or utclong. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the function raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB if the actual parameter days is of data type DATN or UTCLONG. If the actual parameter days is of data type DATS, the function returns the initial date.

Variant 10   

...ADD\_MONTHS( *{*date*|*utclong*}*,months ) ...

Effect

The function ADD\_MONTHS adds months months to a specified date date or time stamp utclong.

-   The actual parameter date must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) or [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid date in the format YYYYMMDD. The actual parameter utclong must have the built-in data type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid time stamp in a format like 0001-01-01T00:00:00.0000000. Any invalid date is initialized and set to the value 00010101 before the calculation and any invalid time stamp is initialized and set to the value 0001-01-01T00:00:00.0000000 before the calculation.
-   The actual parameter months must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result has the data type of the first actual parameter days or utclong. If months is positive, the number of months is added to date or utclong. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, the function raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB if the actual parameter months is of data type DATN or UTCLONG. If the actual parameter months is of data type DATS, the function returns the initial date.

Example

Applying the generic functions to date and time stamp columns of the DDIC database table DEMO\_EXPRESSIONS.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X' dats1 = cl\_demo\_date\_time=>get\_user\_date( )
                    datn2 = cl\_demo\_date\_time=>get\_user\_date( )
           utcl1 = \`2022-01-01T12:14:50\` ) ).
SELECT SINGLE dats1, datn2, utcl1,
              extract\_year( dats1 ) AS extract\_year,
              extract\_month( datn2 ) AS extract\_month,
              extract\_day( utcl1 ) AS extract\_day,
              dayname( dats1 ) AS dayname,
              monthname( datn1 ) AS monthname,
              weekday( utcl1 ) AS weekday,
              days\_between( dats1,utcl1 ) AS days\_between,
              add\_days( datn2,2 ) AS add\_days,
              add\_months( utcl1,4 ) AS add\_months
       FROM demo\_expressions
       INTO @FINAL(result).

Functions for DATN   

Syntax

... DATN\_DAYS\_BETWEEN( date1,date2 )
  *|* DATN\_ADD\_DAYS( date,days )
  *|* DATN\_ADD\_MONTHS( date,months ) ...

Variants:

[1\. ... DATN\_DAYS\_BETWEEN( date1,date2 )](#!ABAP_VARIANT_1@11@)
[2\. ... DATN\_ADD\_DAYS( date,days )](#!ABAP_VARIANT_2@12@)
[3\. ... DATN\_ADD\_MONTHS( date,months )](#!ABAP_VARIANT_3@13@)

Effect

These SQL functions perform operations on dates with arguments of the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)).

Variant 1   

... DATN\_DAYS\_BETWEEN( date1,date2 )

Effect

The function DATN\_DAYS\_BETWEEN calculates the difference between two specified dates date1 and date2 in days. The actual parameters must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid date in the format YYYYMMDD. The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). If date2 is greater than date1, the result is positive. Otherwise, the result is negative. If the result is outside of the range of valid dates, an error occurs.

Hint

DATN\_DAYS\_BETWEEN enforces [strict mode from ABAP release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).

Variant 2   

... DATN\_ADD\_DAYS( date,days )

Effect

The function DATN\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid date in the format YYYYMMDD.
-   The actual parameter days must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result has the data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, an error occurs.

Hint

DATN\_ADD\_DAYS enforces [strict mode from ABAP release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).

Variant 3   

... DATN\_ADD\_MONTHS( date,months )

Effect

The function DATN\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) and it must contain a valid date in the format YYYYMMDD.
-   The actual parameter months must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result has the data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

Hint

DATN\_ADD\_MONTHS enforces [strict mode from ABAP release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).

Functions for DATS   

Syntax

... DATS\_IS\_VALID( date )
  *|* DATS\_DAYS\_BETWEEN( date1,date2 )
  *|* DATS\_ADD\_DAYS( date,days )
  *|* DATS\_ADD\_MONTHS( date,months ) ...

Variants:

[1\. ... DATS\_IS\_VALID( date )](#!ABAP_VARIANT_1@14@)
[2\. ... DATS\_DAYS\_BETWEEN( date1,date2 )](#!ABAP_VARIANT_2@15@)
[3\. ... DATS\_ADD\_DAYS( date,days )](#!ABAP_VARIANT_3@16@)
[4\. ... DATS\_ADD\_MONTHS( date,months )](#!ABAP_VARIANT_4@17@)

Effect

These SQL functions perform operations on dates with arguments of the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)).

Variant 1   

... DATS\_IS\_VALID( date )

Effect

The function DATS\_IS\_VALID determines whether date contains a valid date in the format YYYYMMDD. The actual parameter must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

The value 00010101 is a valid date here but the value 00000000 is not.

Variant 2   

... DATS\_DAYS\_BETWEEN( date1,date2 )

Effect

The function DATS\_DAYS\_BETWEEN calculates the difference between two dates date1 and date2 in days. The actual parameters must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date in the format YYYYMMDD. Any invalid date is initialized and set to the value 00010101 before the calculation. The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). If date2 is greater than date1, the result is positive. In the reverse case, it is negative.

Hint

Before the difference is calculated, the specified dates are converted to integers like in ABAP, and the corresponding [rules](javascript:call_link\('abenconversion_type_d.htm'\)) apply.

Variant 3   

... DATS\_ADD\_DAYS( date,days )

Effect

The function DATS\_ADD\_DAYS adds days days to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date in the format YYYYMMDD. Any invalid date is initialized and set to the value 00010101 before the calculation.
-   The actual parameter days must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result has the data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). If days is positive, the number of days is added to date. In other cases, the number of days is subtracted. If the calculation produces an invalid date, the initial value is reset.

Hint

For the calculation, the specified date is [converted](javascript:call_link\('abenconversion_type_d.htm'\)) to an integer like in ABAP, and the result is [converted](javascript:call_link\('abenconversion_type_ibs.htm'\)) to a date again while the corresponding rules apply.

Variant 4   

... DATS\_ADD\_MONTHS( date,months )

Effect

The function DATS\_ADD\_MONTHS adds months months to a specified date date.

-   The actual parameter date must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date in the format YYYYMMDD. Any invalid date is initialized and set to the value 00010101 before the calculation.
-   The actual parameter months must have the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)).

The result has the data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). If months is positive, the number of months is added to date. In other cases, the number of months is subtracted.

The system tries to create a date with the same day in an earlier or later month. If the target month has fewer days than the source month, the last day of the target month is returned. If the calculation produces an invalid date, an error occurs.

Example

Applying the date functions to date columns of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_SQL\_DATE\_FUNCTIONS executes this access to the table and displays the result.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X' dats1 = cl\_demo\_date\_time=>get\_user\_date( )
                    dats2 = cl\_demo\_date\_time=>get\_user\_date( ) + 100
           datn1 = cl\_demo\_date\_time=>get\_user\_date( ) + 5
           datn2 = cl\_demo\_date\_time=>get\_user\_date( ) + 200 ) ).
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
       INTO @FINAL(result).