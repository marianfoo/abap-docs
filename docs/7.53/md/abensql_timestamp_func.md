  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_builtin_functions.htm) →  [ABAP SQL - Special Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_special_functions.htm) →  [ABAP SQL - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_date_time_functions.htm) → 

sql\_exp - Time Stamp Functions

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

[1\. ... TSTMP\_IS\_VALID( ... )](#!ABAP_VARIANT_1@1@)
[2\. ... TSTMP\_CURRENT\_UTCTIMESTAMP( )](#!ABAP_VARIANT_2@2@)
[3\. ... TSTMP\_SECONDS\_BETWEEN( ... )](#!ABAP_VARIANT_3@3@)
[4\. ... TSTMP\_ADD\_SECONDS( ... )](#!ABAP_VARIANT_4@4@)

Effect

These SQL functions perform operations with arguments of the predefined data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 or of the data element TIMESTAMP. The content of an argument of this type is interpreted as an ABAP-specific [time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm).

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis. The function TSTMP\_IS\_VALID has a positional parameter, the function TSTMP\_CURRENT\_UTCTIMESTAMP does not have any parameters, and the functions TSTMP\_SECONDS\_BETWEEN and TSTMP\_ADD\_SECONDS have keyword parameters. Optional parameters can be assigned actual parameters when called; non-optional parameters, however, must be assigned actual parameters.

[SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), in particular individual columns, literals, SQL functions, host variables or host expressions or host expressions can be specified as actual parameters. Only enumeration constants of specific classes can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), every function except TSTMP\_IS\_VALID returns a null value.

Note

When used, these functions require the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_753.htm).

Variant 1

... TSTMP\_IS\_VALID( ... )

Effect

The function TSTMP\_IS\_VALID determines whether an argument tstmp contains a [valid time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm) in the format YYYYMMDDHHMMSS. The actual parameter must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places. The result has the data type [INT4](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). A valid time stamp produces the value 1 and all other input values (including the null value) produce the value 0.

Variant 2

... TSTMP\_CURRENT\_UTCTIMESTAMP( )

Effect

The function TSTMP\_CURRENT\_UTCTIMESTAMP returns a [UTC time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenutc_timestamp_glosry.htm "Glossary Entry") in accordance with the [POSIX](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenposix_timestamp_glosry.htm "Glossary Entry") standard. The result has the data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places.

Note

-   The UTC time stamp is created from the clock on the database server. The [system date](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_date_glosry.htm "Glossary Entry") and the [system time](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_time_glosry.htm "Glossary Entry") in AS ABAP from which its time stamp is created using [GET TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_time-stamp.htm) are [synchronized](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensystem_user_time_zones.htm) with the database server clock.

-   If the function TSTMP\_CURRENT\_UTCTIMESTAMP is used more thane once within an ABAP SQL statement, it cannot be guaranteed that the every call within a database access produces the same result. Hence, later calls can produce later time stamps.
    

Variant 3

... TSTMP\_SECONDS\_BETWEEN( ... )

Effect

The function TSTMP\_SECONDS\_BETWEEN calculates the difference between two specified time stamps, tstmp1 and tstmp2 in seconds. The actual parameters for the formal parameters tstmp1 and tstmp2 must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain [valid time stamps](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm) in the format YYYYMMDDHHMMSS. Any invalid time stamps produce an error. If tstmp2 is greater than tstmp1, the result is positive. In the reverse case, it is negative.

The optional parameter on\_error defines the way errors are handled. The parameter for on\_error must be an [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_SECONDS\_BETWEEN and the following [enumeration constants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:

-   SQL\_TSTMP\_SECONDS\_BETWEEN=>FAIL (an error raises an exception (default))

-   SQL\_TSTMP\_SECONDS\_BETWEEN=>SET\_TO\_NULL (an error returns the null value)
    

Variant 4

... TSTMP\_ADD\_SECONDS( ... )

Effect

The function TSTMP\_ADD\_SECONDS adds seconds seconds to a time stamp tstmp. The actual parameter for the formal parameter tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm) in the format YYYYMMDDHHMMSS. An invalid time stamp produces an error. The actual parameter for the formal parameter seconds must also have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places. Any negative values are subtracted. If the result is invalid, an error occurs.

The optional parameter on\_error defines the way errors are handled. The parameter for on\_error must be an [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_ADD\_SECONDS and the following [enumeration constants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:

-   SQL\_TSTMP\_ADD\_SECONDS=>FAIL (an error raises an exception (default))

-   SQL\_TSTMP\_ADD\_SECONDS=>SET\_TO\_NULL (an error returns the null value)
    

Example

Applies the time stamp functions to columns of the database table DEMO\_EXPRESSIONS. The program DEMO\_SQL\_TIMESTAMP\_FUNCTIONS executes this access to the table and represents the result. The column NUM1 of the database table is given a value that is added to a time stamp in the column TIMESTAMP1 as seconds. The difference is found between this sum and a time stamp retrieved on the database by the function TSTMP\_CURRENT\_UTCTIMESTAMP. A delay, wait, can be integrated between the time stamp in the ABAP program and the time stamp created on the database.

DATA(seconds) = 3600.
cl\_demo\_input=>add\_field( CHANGING field = seconds ).
DATA(wait) = 1.
cl\_demo\_input=>request( CHANGING field = wait ).
GET TIME STAMP FIELD DATA(timestamp1).
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #(
  id         = 'X'
  num1       = seconds
  timestamp1 = timestamp1 ) ).
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
            AS difference
      INTO @DATA(result).
  CATCH cx\_sy\_open\_sql\_db INTO DATA(exc).
    cl\_demo\_output=>display( exc->get\_text( ) ).
    RETURN.
ENDTRY.