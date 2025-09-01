  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - Special Functions](javascript:call_link\('abenabap_sql_special_functions.htm'\)) →  [sql\_func - Date Functions and Time Functions](javascript:call_link\('abenabap_sql_date_time_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_func - Time Stamp Functions, ABENSQL_TIMESTAMP_FUNC, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_func - Time Stamp Functions

Syntax Forms

Generic time stamp functions

1\. ... IS\_VALID( date*|*time*|*utclong )
    *|* EXTRACT\_YEAR( date*|*utclong )
    *|* EXTRACT\_MONTH( date*|*utclong )
    *|* EXTRACT\_DAY( date*|*utclong )
    *|* EXTRACT\_HOUR( time*|*utclong )
    *|* EXTRACT\_MINUTE( time*|*utclong )
    *|* EXTRACT\_SECOND( time*|*utclong )
    *|* DAYNAME( date*|*utclong )
    *|* MONTHNAME( date*|*utclong )
    *|* WEEKDAY( date*|*utclong )
    *|* DAYS\_BETWEEN( *{*date1*|*utclong1*}*,*{*date2*|*utclong2*}* )
    *|* ADD\_DAYS( *{*date*|*utclong*}*,days )
    *|* ADD\_MONTHS( *{*date*|*utclong*}*,months ) ...
Functions for UTCLONG

2\. ... UTCL\_CURRENT( )
    *|* UTCL\_ADD\_SECONDS( utclong,seconds )
    *|* UTCL\_SECONDS\_BETWEEN( utclong1,utclong2 ) ...
Functions for TIMESTAMP

3\. ... TSTMP\_IS\_VALID( tstmp )
    *|* TSTMP\_CURRENT\_UTCTIMESTAMP( )
    *|* TSTMP\_SECONDS\_BETWEEN( tstmp1   = tstmp1,
                             tstmp2   = tstmp2*\[*,
                             on\_error = on\_error*\]* )
    *|* TSTMP\_ADD\_SECONDS( tstmp    = tstmp,
                         seconds  = seconds*\[*,
                         on\_error = on\_error*\]* ) ...

-   [Generic Time Stamp Functions](#@@ITOC@@ABENSQL_TIMESTAMP_FUNC_1)
-   [Functions for UTCLONG](#@@ITOC@@ABENSQL_TIMESTAMP_FUNC_2)
-   [Functions for TIMESTAMP](#@@ITOC@@ABENSQL_TIMESTAMP_FUNC_3)

Effect

These SQL functions perform operations on time stamps. The first set covers generic functions, the second set covers functions depending on the built-in data type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)), and the third set covers functions depending on the data element [TIMESTAMP](javascript:call_link\('abentime_stamps_packed.htm'\)).

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. Optional parameters can be assigned actual parameters when called. Non-optional parameters must be assigned actual parameters.

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) of matching data types can be specified as actual parameters. Only [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") of specific classes can be passed to the parameter on\_error for the TIMESTAMP functions TSTMP\_SECONDS\_BETWEEN and TSTMP\_ADD\_SECONDS. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function except IS\_VALID and TSTMP\_IS\_VALID returns a null value.

Generic Time Stamp Functions   

Syntax

... IS\_VALID( date*|*time*|*utclong )
  *|* EXTRACT\_YEAR( date*|*utclong )
  *|* EXTRACT\_MONTH( date*|*utclong )
  *|* EXTRACT\_DAY( date*|*utclong )
  *|* EXTRACT\_HOUR( time*|*utclong )
  *|* EXTRACT\_MINUTE( time*|*utclong )
  *|* EXTRACT\_SECOND( time*|*utclong )
  *|* DAYNAME( date*|*utclong )
  *|* MONTHNAME( date*|*utclong )
  *|* WEEKDAY( date*|*utclong )
  *|* DAYS\_BETWEEN( *{*date1*|*utclong1*}*,*{*date2*|*utclong2*}* )
  *|* ADD\_DAYS( *{*date*|*utclong*}*,days )
  *|* ADD\_MONTHS( *{*date*|*utclong*}*,months ) ...

Effect

These SQL functions perform operations with arguments of the built-in data types [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)), [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)), [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)), and [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

Hint

For more information about the generic functions

-   IS\_VALID, EXTRACT\_YEAR, EXTRACT\_MONTH, EXTRACT\_DAY, DAYNAME, MONTHNAME, WEEKDAY, DAYS\_BETWEEN, ADD\_DAYS, and ADD\_MONTHS see [date functions](javascript:call_link\('abensql_date_func.htm'\)) or for
-   IS\_VALID, EXTRACT\_HOUR, EXTRACT\_MINUTE, and EXTRACT\_SECOND see [time functions](javascript:call_link\('abensql_time_func.htm'\)).
-   All generic functions enforce [strict mode from Release 7.56](javascript:call_link\('abenabap_sql_strictmode_756.htm'\)).

Functions for UTCLONG   

Syntax

... UTCL\_CURRENT( )
  *|* UTCL\_ADD\_SECONDS( utclong,seconds )
  *|* UTCL\_SECONDS\_BETWEEN( utclong1,utclong2 ) ...

Variants:

[1\. ... UTCL\_CURRENT( )](#!ABAP_VARIANT_1@1@)
[2\. ... UTCL\_ADD\_SECONDS( ... )](#!ABAP_VARIANT_2@2@)
[3\. ... UTCL\_SECONDS\_BETWEEN( ... )](#!ABAP_VARIANT_3@3@)

Effect

These SQL functions perform operations with arguments of the built-in data type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

Hint

The use of the functions UTCL\_CURRENT( ), UTCL\_ADD\_SECONDS, and UTCL\_SECONDS\_BETWEEN enforces the [strict mode from Release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).

Variant 1   

... UTCL\_CURRENT( )

Effect

This function generates a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") from the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") and the [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of AS ABAP in accordance with [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry"). The return value has the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

All columns of a query have the same time stamp.

Example

Selects column CARRID from table SCARR and returns a time stamp for each row. The time stamp is generated only once for the query and, therefore, all rows have the same time stamp.

SELECT carrid, utcl\_current( ) AS time\_stamp
  FROM scarr
  INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Variant 2   

... UTCL\_ADD\_SECONDS( ... )

Effect

The function UTCL\_ADD\_SECONDS adds seconds seconds to a time stamp utclong. It has two [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"). The actual parameter for the formal parameter utclong must have the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a [valid time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSSMMMUUUN. An invalid time stamp produces an error. The actual parameter for the formal parameter seconds must have either the built-in data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)) or the data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 21 and 7 decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The result is of type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

Variant 3   

... UTCL\_SECONDS\_BETWEEN( ... )

Effect

The function UTCL\_SECONDS\_BETWEEN calculates the difference between two specified time stamps utcl1 and utcl2 in seconds. It has two [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"). The actual parameters for the formal parameters utcl1 and utcl2 must have the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a [valid time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSSMMMUUUN. Any invalid time stamps produce an error. If utcl2 is greater than utcl1, the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

The result is of type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 21 and 7 decimal places.

Functions for TIMESTAMP   

Syntax

... TSTMP\_IS\_VALID( tstmp )
  *|* TSTMP\_CURRENT\_UTCTIMESTAMP( )
  *|* TSTMP\_SECONDS\_BETWEEN( tstmp1   = tstmp1,
                           tstmp2   = tstmp2*\[*,
                           on\_error = on\_error*\]* )
  *|* TSTMP\_ADD\_SECONDS( tstmp    = tstmp,
                       seconds  = seconds*\[*,
                       on\_error = on\_error*\]* ) ...

Variants:

[1\. ... TSTMP\_IS\_VALID( ... )](#!ABAP_VARIANT_1@4@)
[2\. ... TSTMP\_CURRENT\_UTCTIMESTAMP( )](#!ABAP_VARIANT_2@5@)
[3\. ... TSTMP\_SECONDS\_BETWEEN( ... )](#!ABAP_VARIANT_3@6@)
[4\. ... TSTMP\_ADD\_SECONDS( ... )](#!ABAP_VARIANT_4@7@)

Effect

These SQL functions perform operations with arguments of the data element [TIMESTAMP](javascript:call_link\('abentime_stamps_packed.htm'\)).

Hint

The use of the functions TSTMP\_IS\_VALID, TSTMP\_CURRENT\_UTCTIMESTAMP( ), TSTMP\_SECONDS\_BETWEEN, and TSTMP\_ADD\_SECONDS enforces the [strict mode from Release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).

Variant 1   

... TSTMP\_IS\_VALID( ... )

Effect

The function TSTMP\_IS\_VALID determines whether an argument tstmp contains a [valid time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSS. It has one [positional parameter](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"). The actual parameter must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places. The result has the data type [INT4](javascript:call_link\('abenddic_builtin_types.htm'\)). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

Variant 2   

... TSTMP\_CURRENT\_UTCTIMESTAMP( )

Effect

The function TSTMP\_CURRENT\_UTCTIMESTAMP returns a [UTC time stamp](javascript:call_link\('abenutc_timestamp_glosry.htm'\) "Glossary Entry") in accordance with the [POSIX](javascript:call_link\('abenposix_timestamp_glosry.htm'\) "Glossary Entry") standard. The result has the data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places.

Hint

-   The UTC time stamp is created from the clock on the database server. The [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") and the [system time](javascript:call_link\('abensystem_time_glosry.htm'\) "Glossary Entry") in AS ABAP from which its time stamp is created using [GET TIME STAMP](javascript:call_link\('abapget_time-stamp.htm'\)) are [synchronized](javascript:call_link\('abensystem_user_time_zones.htm'\)) with the database server clock.
-   If the function TSTMP\_CURRENT\_UTCTIMESTAMP is used more than once within an ABAP SQL statement, it cannot be guaranteed that every call within a database access produces the same result. Hence, later calls can produce later time stamps.

Variant 3   

... TSTMP\_SECONDS\_BETWEEN( ... )

Effect

The function TSTMP\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, tstmp1 and tstmp2 in seconds. All parameters are [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry"). The actual parameters for the formal parameters tstmp1 and tstmp2 must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places and contain [valid time stamps](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSS. Any invalid time stamps produce an error. If tstmp2 is greater than tstmp1, the result is positive. In the reverse case, it is negative.

The optional parameter on\_error affects how errors are handled. The parameter for on\_error must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_SECONDS\_BETWEEN and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_TSTMP\_SECONDS\_BETWEEN=>FAIL, an error raises an exception (default)
-   SQL\_TSTMP\_SECONDS\_BETWEEN=>SET\_TO\_NULL, an error returns the null value

Variant 4   

... TSTMP\_ADD\_SECONDS( ... )

Effect

The function TSTMP\_ADD\_SECONDS adds seconds seconds to a time stamp tstmp. All parameters are [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry"). The actual parameter for the formal parameter tstmp must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places and contain a [valid time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSS. An invalid time stamp produces an error. The actual parameter for the formal parameter seconds must also have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places. Negative values are subtracted. If the result is invalid, an error occurs.

The optional parameter on\_error affects how errors are handled. The parameter for on\_error must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_ADD\_SECONDS and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_TSTMP\_ADD\_SECONDS=>FAIL, an error raises an exception (default)
-   SQL\_TSTMP\_ADD\_SECONDS=>SET\_TO\_NULL, an error returns the null value

Example

Applies the time stamp functions to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_TIMESTAMP\_FUNCTIONS executes this access to the table and represents the result. The column NUM1 of the DDIC database table is given a value that is added to a time stamp in the column TIMESTAMP1 as seconds. The difference is calculated between this sum and a time stamp retrieved on the database by the function TSTMP\_CURRENT\_UTCTIMESTAMP. A delay wait can be integrated between the time stamp in the ABAP program and the time stamp created on the database. The number of seconds specified as type-compliant literal in the variable pack is added to the time stamp utcl, which has the type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)). Finally, the difference in seconds between two time stamps of type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) is calculated. Since utcl1 is greater than utcl2, the result is negative.

DATA(seconds) = 3600.
cl\_demo\_input=>add\_field( CHANGING field = seconds ).
DATA(wait) = 1.
cl\_demo\_input=>request( CHANGING field = wait ).
GET TIME STAMP FIELD FINAL(timestamp1).
DATA pack TYPE p LENGTH 11 DECIMALS 7 VALUE '123.456'.
FINAL(utcl) = utclong\_current( ).
FINAL(utcl1) =
  utclong\_add( val     = utcl
               days    = 1000
               hours   = 100
               minutes = 10 ).
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #(
  id         = 'X'
  num1       = seconds
  timestamp1 = timestamp1
  utcl1 = utcl1
  utcl2 = utclong\_current( ) ) ).
WAIT UP TO COND #( WHEN wait > 10 THEN 10
                   WHEN wait <  0 THEN 0
                   ELSE wait ) SECONDS.
TRY.
    SELECT
      SINGLE
      FROM demo\_expressions
      FIELDS
        timestamp1,
        tstmp\_is\_valid(
          timestamp1 )
            AS valid1,
        tstmp\_seconds\_between(
          tstmp1 = tstmp\_current\_utctimestamp( ),
          tstmp2 = tstmp\_add\_seconds(
                     tstmp    = timestamp1,
                     seconds  = CAST( num1 AS DEC( 15,0 ) ),
                     on\_error = @sql\_tstmp\_add\_seconds=>fail ),
          on\_error = @sql\_tstmp\_seconds\_between=>fail )
            AS difference,
        UTCL\_ADD\_SECONDS( utcl2, @pack ) as add\_seconds,
        UTCL\_SECONDS\_BETWEEN( utcl1,utcl2 ) as seconds\_between
      INTO @FINAL(result).
      cl\_demo\_output=>display( result ).
  CATCH cx\_sy\_open\_sql\_db INTO FINAL(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.