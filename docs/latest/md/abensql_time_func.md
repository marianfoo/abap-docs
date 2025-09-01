---
title: "Syntax Forms"
description: |
  Generic Time Functions(abensql_time_func.htm#abensql-time-func-1---1-------is--valid--date---time---utclong-----------extract--hour--time---utclong-----------extract--minute--time---utclong-----------extract--second--time---utclong---------functions-for-tims--abensql-time-func-htm-@ITOC@@ABENSQL_T
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_time_func.htm"
abapFile: "abensql_time_func.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "catch", "class", "data", "types", "abensql", "time", "func"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - Special Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_special_functions.htm) →  [sql\_func - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_date_time_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20Time%20Functions%2C%20ABENSQL_TIME_FUNC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

sql\_func - Time Functions

Syntax Forms

[Generic Time Functions](abensql_time_func.htm#abensql-time-func-1---1-------is--valid--date---time---utclong-----------extract--hour--time---utclong-----------extract--minute--time---utclong-----------extract--second--time---utclong---------functions-for-tims--abensql-time-func-htm-@ITOC@@ABENSQL_TIME_FUNC_2)

2\. ... TIMS\_IS\_VALID( time ) ...

Effect

These SQL functions perform operations on times with arguments of the built-in data types [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), and [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The first set covers generic functions and the second set covers one function depending on the data type [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The arguments of the functions are specified in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. [SQL expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsql_expr.htm) of matching data types can be specified as actual parameters. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except IS\_VALID and TIMS\_IS\_VALID returns a null value. IS\_VALID and TIMS\_IS\_VALID return the value 0.

Generic Time Functions   

Syntax

... IS\_VALID( date*|*time*|*utclong )
  *|* EXTRACT\_HOUR( time*|*utclong )
  *|* EXTRACT\_MINUTE( time*|*utclong )
  *|* EXTRACT\_SECOND( time*|*utclong ) ...

Variants:

[1\. ... IS\_VALID( date*|*time*|*utclong ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... EXTRACT\_HOUR( time*|*utclong ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... EXTRACT\_MINUTE( time*|*utclong ) ...](#!ABAP_VARIANT_3@3@)
[4\. ... EXTRACT\_SECOND( time*|*utclong ) ...](#!ABAP_VARIANT_4@4@)

Effect

These SQL functions perform operations with arguments of the built-in data types [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), and [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

Hint

All generic functions enforce the [strict mode from ABAP release 7.56](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_756.htm).

Variant 1   

... IS\_VALID( date*|*time*|*utclong ) ...

Effect

The generic function IS\_VALID determines whether

-   the specified date date contains a valid date in the format YYYYMMDD. The actual parameter must have the built-in data type [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
-   the specified time time contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
-   the specified time stamp utclong contains a valid time stamp in a format like 0001-01-01T00:00:00.0000000. The actual parameter must have the built-in data type [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The result has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). A valid time and the initial value (for the data types TIMN and TIMS) produce the value 1 and all other input values (including the null value) produce the value 0.

Hint

The generic function IS\_VALID is also available for [date functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_date_func.htm) and [time stamp functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_timestamp_func.htm).

Example

Applying the generic function to a time column of the DDIC database table DEMO\_EXPRESSIONS.

FINAL(time1) = cl\_demo\_date\_time=>get\_utc\_time( ).
...
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #(
  id      = 'X'
  tims1 = time1 ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS tims1 AS time1,
              is\_valid( tims1 ) AS valid1
       INTO @FINAL(result).

Variant 2   

... EXTRACT\_HOUR( time*|*utclong ) ...

Effect

The generic function EXTRACT\_HOUR extracts the hour of a time or a time stamp. The actual parameter must have the built-in data type [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The result of the function EXTRACT\_HOUR has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The function returns the value 0 for initial input values. If no valid time is passed as a TIMS value, the function EXTRACT\_HOUR raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Hints

-   If one of the built-in data types [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is used, the function EXTRACT\_HOUR calls the [HANA function EXTRACT](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is used, the function EXTRACT\_HOUR internally uses the ABAP SQL [SUBSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm) function and a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm) expression afterwards. The corresponding rules apply.

Variant 3   

... EXTRACT\_MINUTE( time*|*utclong ) ...

Effect

The generic function EXTRACT\_MINUTE extracts the minute of a time or a time stamp. The actual parameter must have the built-in data type [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The result of the function EXTRACT\_MINUTE has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The function returns the value 0 for initial input values. If no valid time is passed as a TIMS value, the function EXTRACT\_MINUTE raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Hints

-   If one of the built-in data types [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is used, the function EXTRACT\_MINUTE calls the [HANA function EXTRACT](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is used, the function EXTRACT\_MINUTE internally uses the ABAP SQL [SUBSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm) function and a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm) expression afterwards. The corresponding rules apply.

Variant 4   

... EXTRACT\_SECOND( time*|*utclong ) ...

Effect

The generic function EXTRACT\_SECOND extracts the second of a time or a time stamp. The actual parameter must have the built-in data type [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

The result of the function EXTRACT\_SECOND has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The function returns the value 0 for initial input values. If no valid time is passed as a TIMS value, the function EXTRACT\_SECOND raises a catchable exception of class CX\_SY\_OPEN\_SQL\_DB.

Hints

-   If one of the built-in data types [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is used, the function EXTRACT\_SECOND calls the [HANA function EXTRACT](https://help.sap.com/docs/SAP_HANA_PLATFORM/4fe29514fd584807ac9f2a04f6754767/20e1a58475191014a343f6fe96c9846c).
-   If the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is used, the function EXTRACT\_SECOND internally uses the ABAP SQL [SUBSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_string_func.htm) function and a [CAST](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_cast.htm) expression afterwards. The corresponding rules apply.

Example

Applying the generic functions to time and time stamp columns of the DDIC database table DEMO\_EXPRESSIONS.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X' tims1 = cl\_demo\_date\_time=>get\_user\_time( )
                    timn2 = cl\_demo\_date\_time=>get\_user\_time( )
           utcl1 = \`2022-01-01T12:14:50\` ) ).
SELECT SINGLE tims1, timn2, utcl1,
              extract\_hour( tims1 ) AS extract\_hour,
              extract\_minute( timn2 ) AS extract\_minute,
              extract\_second( utcl1 ) AS extract\_second
       FROM demo\_expressions
       INTO @FINAL(result).

Functions for TIMS   

Syntax

... TIMS\_IS\_VALID( time ) ...

Variants:

[1\. ... TIMS\_IS\_VALID( time )](#!ABAP_VARIANT_1@5@)

Effect

This SQL function performs operations with arguments of the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).

Variant 1   

... TIMS\_IS\_VALID( time )

Effect

The function TIMS\_IS\_VALID determines whether the specification time contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). A valid time and the initial value produce the value 1 and all other input values (including the null value) produce the value 0.

Hint

The use of this function leads to the [strict mode from ABAP release 7.53](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_strictmode_753.htm).

Example

Applying the time function to a time column of the DDIC database table DEMO\_EXPRESSIONS. The class CL\_DEMO\_SQL\_TIME\_FUNCTIONS executes this access to the table and displays the result.

FINAL(time1) = cl\_demo\_date\_time=>get\_user\_time( ).
...
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #(
  id      = 'X'
  tims1 = time1 ) ).
SELECT SINGLE
       FROM demo\_expressions
       FIELDS tims1 AS time1,
              tims\_is\_valid( tims1 ) AS valid1
       INTO @FINAL(result).