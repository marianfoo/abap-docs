---
title: "Syntax"
description: |
  ... UTCL_CURRENT( )  UTCL_ADD_SECONDS( utclong,seconds )  UTCL_SECONDS_BETWEEN( utclong1,utclong2 )  TSTMP_IS_VALID( tstmp )  TSTMP_CURRENT_UTCTIMESTAMP( )  TSTMP_SECONDS_BETWEEN( tstmp1   = tstmp1, tstmp2   = tstmp2, on_error = on_error )  TSTMP_ADD_SECONDS(
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_timestamp_func.htm"
abapFile: "abensql_timestamp_func.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "catch", "class", "data", "types", "abensql", "timestamp", "func"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_builtin_functions.htm) →  [sql\_func - Special Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_special_functions.htm) →  [sql\_func - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_date_time_functions.htm) → 

sql\_func - Time Stamp Functions

Syntax

... UTCL\_CURRENT( )
  *|* UTCL\_ADD\_SECONDS( utclong,seconds )
  *|* UTCL\_SECONDS\_BETWEEN( utclong1,utclong2 )
  *|* TSTMP\_IS\_VALID( tstmp )
  *|* TSTMP\_CURRENT\_UTCTIMESTAMP( )
  *|* TSTMP\_SECONDS\_BETWEEN( tstmp1   = tstmp1,
                           tstmp2   = tstmp2*\[*,
                           on\_error = on\_error*\]* )
  *|* TSTMP\_ADD\_SECONDS( tstmp    = tstmp,
                       seconds  = seconds*\[*,
                       on\_error = on\_error*\]* ) ...

Variants:

[1\. ... UTCL\_CURRENT( )](#!ABAP_VARIANT_1@1@)
[2\. ... UTCL\_ADD\_SECONDS( ... )](#!ABAP_VARIANT_2@2@)
[3\. ... UTCL\_SECONDS\_BETWEEN( ... )](#!ABAP_VARIANT_3@3@)
[4\. ... TSTMP\_IS\_VALID( ... )](#!ABAP_VARIANT_4@4@)
[5\. ... TSTMP\_CURRENT\_UTCTIMESTAMP( )](#!ABAP_VARIANT_5@5@)
[6\. ... TSTMP\_SECONDS\_BETWEEN( ... )](#!ABAP_VARIANT_6@6@)
[7\. ... TSTMP\_ADD\_SECONDS( ... )](#!ABAP_VARIANT_7@7@)

Effect

These SQL functions perform operations on time stamps.

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. Optional parameters can be assigned actual parameters when called. Non-optional parameters must be assigned actual parameters.

[SQL expressions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsql_expr.htm) of matching data types can be specified as actual parameters. Only [enumerated constants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") of specific classes can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except TSTMP\_IS\_VALID returns a null value.

Hint

The use of these functions enforces the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_753.htm).

Variant 1   

... UTCL\_CURRENT( )

Effect

This function generates a [UTC time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") from the [system time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_glosry.htm "Glossary Entry") and the [system date](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_date_glosry.htm "Glossary Entry") of AS ABAP in accordance with [POSIX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenposix_timestamp_glosry.htm "Glossary Entry"). The return value has the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm).

All columns of a query have the same time stamp.

Hint

UTCL\_CURRENT( ) enforces [strict mode from Release 7.55](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_755.htm).

Example

Selects column CARRID from table SCARR and returns a time stamp for each row. The time stamp is generated only once for the query and, therefore, all rows have the same time stamp.

SELECT carrid, utcl\_current( ) AS time\_stamp
  FROM scarr
  INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Variant 2   

... UTCL\_ADD\_SECONDS( ... )

Effect

The function UTCL\_ADD\_SECONDS adds seconds seconds to a time stamp utclong. It has two [positional parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpositional_parameter_glosry.htm "Glossary Entry"). The actual parameter for the formal parameter utclong must have the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSSMMMUUUN. An invalid time stamp produces an error. The actual parameter for the formal parameter seconds must have either the built-in data type [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) or the data type [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with length 21 and 7 decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The result is of type [UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm).

Hint

UTCL\_ADD\_SECONDS enforces [strict mode from Release 7.55](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_755.htm).

Variant 3   

... UTCL\_SECONDS\_BETWEEN( ... )

Effect

The function UTCL\_SECONDS\_BETWEEN calculates the difference between two specified time stamps utcl1 and utcl2 in seconds. It has two [positional parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpositional_parameter_glosry.htm "Glossary Entry"). The actual parameters for the formal parameters utcl1 and utcl2 must have the built-in dictionary type [UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSSMMMUUUN. Any invalid time stamps produce an error. If utcl2 is greater than utcl1 , the result is positive. If the values are identical, the result is 0. In all other cases, the result is negative.

The result is of type [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with length 21 and 7 decimal places.

Hint

UTCL\_SECONDS\_BETWEEN enforces [strict mode from Release 7.55](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_sql_strictmode_755.htm).

Variant 4   

... TSTMP\_IS\_VALID( ... )

Effect

The function TSTMP\_IS\_VALID determines whether an argument tstmp contains a [valid time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. It has one [positional parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpositional_parameter_glosry.htm "Glossary Entry"). The actual parameter must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

Variant 5   

... TSTMP\_CURRENT\_UTCTIMESTAMP( )

Effect

The function TSTMP\_CURRENT\_UTCTIMESTAMP returns a [UTC time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") in accordance with the [POSIX](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") standard. The result has the data type [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places.

Hint

-   The UTC time stamp is created from the clock on the database server. The [system date](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_date_glosry.htm "Glossary Entry") and the [system time](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_time_glosry.htm "Glossary Entry") in AS ABAP from which its time stamp is created using [GET TIME STAMP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_time-stamp.htm) are [synchronized](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensystem_user_time_zones.htm) with the database server clock.
-   If the function TSTMP\_CURRENT\_UTCTIMESTAMP is used more than once within an ABAP SQL statement, it cannot be guaranteed that every call within a database access produces the same result. Hence, later calls can produce later time stamps.

Variant 6   

... TSTMP\_SECONDS\_BETWEEN( ... )

Effect

The function TSTMP\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, tstmp1 and tstmp2 in seconds. All parameters are [keyword parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry"). The actual parameters for the formal parameters tstmp1 and tstmp2 must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain [valid time stamps](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. Any invalid time stamps produce an error. If tstmp2 is greater than tstmp1, the result is positive. In the reverse case, it is negative.

The optional parameter on\_error affects how errors are handled. The parameter for on\_error must be an [enumerated object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_SECONDS\_BETWEEN and the following [enumerated constants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:

-   SQL\_TSTMP\_SECONDS\_BETWEEN=>FAIL, an error raises an exception (default)
-   SQL\_TSTMP\_SECONDS\_BETWEEN=>SET\_TO\_NULL, an error returns the null value

Variant 7   

... TSTMP\_ADD\_SECONDS( ... )

Effect

The function TSTMP\_ADD\_SECONDS adds seconds seconds to a time stamp tstmp. All parameters are [keyword parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkeyword_parameter_glosry.htm "Glossary Entry"). The actual parameter for the formal parameter tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentime_stamps_packed.htm) in the format YYYYMMDDHHMMSS. An invalid time stamp produces an error. The actual parameter for the formal parameter seconds must also have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places. Negative values are subtracted. If the result is invalid, an error occurs.

The optional parameter on\_error affects how errors are handled. The parameter for on\_error must be an [enumerated object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_ADD\_SECONDS and the following [enumerated constants](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:

-   SQL\_TSTMP\_ADD\_SECONDS=>FAIL, an error raises an exception (default)
-   SQL\_TSTMP\_ADD\_SECONDS=>SET\_TO\_NULL, an error returns the null value

Example

Applies the time stamp functions to columns of the DDIC database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_TIMESTAMP\_FUNCTIONS executes this access to the table and represents the result. The column NUM1 of the DDIC database table is given a value that is added to a time stamp in the column TIMESTAMP1 as seconds. The difference is calculated between this sum and a time stamp retrieved on the database by the function TSTMP\_CURRENT\_UTCTIMESTAMP. A delay wait can be integrated between the time stamp in the ABAP program and the time stamp created on the database. The number of seconds specified as type-compliant literal in the variable pack is added to the time stamp utcl, which has the type [UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm). Finally, the difference in seconds between two time stamps of type [UTCLONG](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) is calculated. Since utcl1 is greater than utcl2, the result is negative.

DATA(seconds) = 3600.
cl\_demo\_input=>add\_field( CHANGING field = seconds ).
DATA(wait) = 1.
cl\_demo\_input=>request( CHANGING field = wait ).
GET TIME STAMP FIELD DATA(timestamp1).
DATA pack TYPE p LENGTH 11 DECIMALS 7 VALUE '123.456'.
DATA(utcl) = utclong\_current( ).
DATA(utcl1) =
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
      INTO @DATA(result).
  CATCH cx\_sy\_open\_sql\_db INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.