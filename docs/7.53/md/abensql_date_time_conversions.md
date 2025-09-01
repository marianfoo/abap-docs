---
title: "Syntax"
description: |
  ... TSTMP_TO_DATS( tstmp    = tstmp, tzone    = tzone, client   = client, on_error = on_error )  TSTMP_TO_TIMS( tstmp    = tstmp, tzone    = tzone, client   = client, on_error = on_error )  TSTMP_TO_DST(  tstmp    = tstmp, tzone    = tzone, client
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensql_date_time_conversions.htm"
abapFile: "abensql_date_time_conversions.htm"
keywords: ["select", "insert", "delete", "do", "if", "try", "class", "data", "types", "abensql", "date", "time", "conversions"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_builtin_functions.htm) →  [ABAP SQL - Special Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_special_functions.htm) →  [ABAP SQL - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_date_time_functions.htm) → 

sql\_exp - Date/Time Conversions

Syntax

... TSTMP\_TO\_DATS( tstmp    = tstmp,
                   tzone    = tzone*\[*,
                   client   = client*\]**\[*,
                   on\_error = on\_error*\]* )
  *|* TSTMP\_TO\_TIMS( tstmp    = tstmp,
                   tzone    = tzone*\[*,
                   client   = client*\]**\[*,
                   on\_error = on\_error*\]* )
  *|* TSTMP\_TO\_DST(  tstmp    = tstmp,
                   tzone    = tzone*\[*,
                   client   = client*\]**\[*,
                   on\_error = on\_error*\]* )
  *|* DATS\_TIMS\_TO\_TSTMP( date     = date,
                        time     = time,
                        tzone    = tzone*\[*,
                        client   = client*\]**\[*,
                        on\_error = on\_error*\]*  ) ...

Variants:

[1\. ... TSTMP\_TO\_DATS( ... )](#!ABAP_VARIANT_1@1@)
[2\. ... TSTMP\_TO\_TIMS( ... )](#!ABAP_VARIANT_2@2@)
[3\. ... TSTMP\_TO\_DST( ... )](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_TIMS\_TO\_TSTMP( ... )](#!ABAP_VARIANT_4@4@)

Effect

These SQL functions convert time stamps into dates or times, and back again. The argument tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15, or the type of the data element TIMESTAMP. The content of an argument of this type is interpreted as an ABAP-specific [time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm).

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis. The functions have keyword parameters. Optional parameters can be assigned actual parameters when called; non-optional parameters, however, must be assigned actual parameters.

[SQL expressions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsql_expr.htm), in particular individual columns, literals, SQL functions, host variables or host expressions or host expressions can be specified as actual parameters. Only [enumeration constants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") of specific classes can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennull_value_glosry.htm "Glossary Entry"), every function returns a null value.

The conversions follow the ABAP-specific [rules for time zones](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_rules.htm). The associated database tables must be filled correctly.

Notes

-   These functions move the functions of the ABAP statements [CONVERT TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_time-stamp.htm) and [CONVERT INTO TIME STAMP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapconvert_date_time-stamp.htm) to the database.

-   When used, these functions require the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql_strict_mode_753.htm).
    

Variant 1

... TSTMP\_TO\_DATS( ... )

Effect

The function TSTMP\_TO\_DATS extracts the local date for the time zone specified in tzone from a time stamp in the argument tstmp.

The actual parameter for the formal parameter tstmp must have the built-in data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 and no decimal places and contain a [valid time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm) in the format YYYYMMDDHHMMSS. tzone expects an actual parameter of the type [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 6 and containing a valid [time zone](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_glosry.htm "Glossary Entry"). The actual parameter for the optional formal parameter client must have the built-in dictionary type [CLNT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and contain a valid [client ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). The default value is the current client ID. This client ID is used in the evaluation of the system tables of the [rules for time zones](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_zone_rules.htm). The return value has the built-in data type [DATS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm).

The optional parameter on\_error defines the way errors are handled. The parameter for on\_error must be an [enumerated object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_TO\_DATS and the following [enumeration constants](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:

-   SQL\_TSTMP\_TO\_DATS=>FAIL (an error raises an exception (default))

-   SQL\_TSTMP\_TO\_DATS=>SET\_TO\_NULL (an error returns the null value)
    

Variant 2

... TSTMP\_TO\_TIMS( ... )

Effect

The function TSTMP\_TO\_TIMS extracts the local time for the time zone specified in tzone from a time stamp in the argument tstmp.

The same applies to the parameters tstmp, tzone, client, and on\_error as to the function TSTMP\_TO\_DATS. Here, the class of the enumerated type of on\_error is SQL\_TSTMP\_TO\_TIMS.

The return value has the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm).

Variant 3

... TSTMP\_TO\_DST( ... )

Effect

The function TSTMP\_TO\_DST extracts the summer time marker for the time zone specified in tzone from a time stamp in the argument tstmp. This is "X" if the time stamp for the time zone is in the summer time, otherwise it is initial.

The same applies to the parameters tstmp, tzone, client, and on\_error as to the function TSTMP\_TO\_DATS. Here, the class of the enumerated type of on\_error is SQL\_TSTMP\_TO\_DST.

The return value has the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 1.

Variant 4

... DATS\_TIMS\_TO\_TSTMP( ... )

Effect

The function DATS\_TIMS\_TO\_TSTMP constructs a time stamp from a local date specified in date and a local time specified in time in the time zone specified in tzone. The summer time is respected implicitly.

The actual parameter for the formal parameter date must have the built-in data type [DATS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and should contain a valid date. The actual parameter for the formal parameter time must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and should contain a valid time. The same applies to the parameters tzone, client, and on\_error as to the function TSTMP\_TO\_DATS. Here, the class of the enumerated type of on\_error is SQL\_DATS\_TIMS\_TO\_TSTMP.

The return value has the built-in data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) with length 15 and represents an ABAP-specific [time stamp](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_stamp_oview.htm).

Example

Extracts date, time, and summer time flag of the current UTC time stamp using the conversion functions TSTMP\_TO\_DATS, TSTMP\_TO\_TIMS, and TSTMP\_TO\_DST. The values of the columns DATS1 and TIMS1 of the database table DEMO\_EXPRESSIONS are combined into a time stamp by the conversion function DATS\_TIMS\_TO\_TSTMP. The program DEMO\_SQL\_DATE\_TIME executes the statement and displays the result.

DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @( VALUE #( id = 'X'
                                         dats1 = sy-datum
                                         tims1 = sy-uzeit ) ).
DATA tzone TYPE timezone.
CALL FUNCTION 'GET\_SYSTEM\_TIMEZONE'
  IMPORTING
    timezone = tzone.
SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         tstmp\_current\_utctimestamp( )
             AS tstmp,
         tstmp\_to\_dats(
           tstmp    = tstmp\_current\_utctimestamp( ),
           tzone    = @tzone,
           client   = @sy-mandt,
           on\_error = @sql\_tstmp\_to\_dats=>set\_to\_null )
             AS dat,
         tstmp\_to\_tims(
           tstmp    = tstmp\_current\_utctimestamp( ),
           tzone    = @tzone,
           client   = @sy-mandt,
           on\_error = @sql\_tstmp\_to\_tims=>set\_to\_null )
             AS tim,
         tstmp\_to\_dst(
           tstmp    = tstmp\_current\_utctimestamp( ),
           tzone    = @tzone,
           client   = @sy-mandt,
           on\_error = @sql\_tstmp\_to\_dst=>set\_to\_null )
             AS dst,
           dats\_tims\_to\_tstmp(
             date     = dats1,
             time     = tims1,
             tzone    = @tzone,
             client   = @sy-mandt,
             on\_error = @sql\_dats\_tims\_to\_tstmp=>set\_to\_null )
               AS dat\_tim
       INTO @DATA(result).