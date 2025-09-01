  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) →  [sql\_func - Special Functions](javascript:call_link\('abenabap_sql_special_functions.htm'\)) →  [sql\_func - Date Functions and Time Functions](javascript:call_link\('abenabap_sql_date_time_functions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_func%20-%20Date%2FTime%20Conversions%2C%20ABENSQL_DATE_TIME_CONVERSIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

sql\_func - Date/Time Conversions

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
                        on\_error = on\_error*\]* )
  *|* TSTMPL\_TO\_UTCL( tstmpl = tstmpl*\[*,
                    on\_error = on\_error*\]*,*\[*
                    on\_initial = on\_initial*\]* )
  *|* TSTMPL\_FROM\_UTCL( utcl = utcl*\[*,
                      on\_null = on\_null*\]* )
  *|* DATS\_TO\_DATN( dats = dats*\[*,
                  on\_error = on\_error*\]*,*\[*
                  on\_initial = on\_initial*\]* )
  *|* DATS\_FROM\_DATN( datn = datn*\[*,
                    on\_null = on\_null*\]* )
  *|* TIMS\_TO\_TIMN( tims = tims*\[*,
                  on\_error = on\_error*\]* )
  *|* TIMS\_FROM\_TIMN( timn = timn*\[*,
                    on\_null = on\_null*\]* )...

Variants:

[1\. ... TSTMP\_TO\_DATS( ... )](#!ABAP_VARIANT_1@1@)
[2\. ... TSTMP\_TO\_TIMS( ... )](#!ABAP_VARIANT_2@2@)
[3\. ... TSTMP\_TO\_DST( ... )](#!ABAP_VARIANT_3@3@)
[4\. ... DATS\_TIMS\_TO\_TSTMP( ... )](#!ABAP_VARIANT_4@4@)
[5\. ... TSTMPL\_TO\_UTCL( ... )](#!ABAP_VARIANT_5@5@)
[6\. ... TSTMPL\_FROM\_UTCL( ... )](#!ABAP_VARIANT_6@6@)
[7\. ... DATS\_TO\_DATN( ... )](#!ABAP_VARIANT_7@7@)
[8\. ... DATS\_FROM\_DATN( ... )](#!ABAP_VARIANT_8@8@)
[9\. ... TIMS\_TO\_TIMN( ... )](#!ABAP_VARIANT_9@9@)
[10\. ... TIMS\_FROM\_TIMN( ... )](#!ABAP_VARIANT_10@10@)

Effect

The SQL functions described in variants 1 to 4 convert time stamps into dates or times, and vice versa. The SQL functions described in variants 5 to 10 convert time stamps, dates, and times between different types.

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. The functions have [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry"). Optional parameters can be assigned actual parameters when called. Non-optional parameters must be assigned actual parameters.

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), in particular individual columns, type-compliant literals, SQL functions, host variables or host expressions can be specified as actual parameters.

The conversions follow the ABAP-specific [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)). The associated DDIC database tables must be filled correctly.

Hints

-   The functions described in Variants 5 to 10 have [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry") and all of them have exactly one required parameter. When calling only the required parameter, then it can be handled like a [positional parameter](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry"), that means it can be called without the formal parameter name.
-   These functions move the functions of the ABAP statements [CONVERT TIME STAMP](javascript:call_link\('abapconvert_time-stamp.htm'\)) and [CONVERT INTO TIME STAMP](javascript:call_link\('abapconvert_date_time-stamp.htm'\)) to the database.
-   Use of the functions described in Variants 1 to 4 enforces the [strict mode from ABAP release 7.53](javascript:call_link\('abenabap_sql_strictmode_753.htm'\)).
-   Use of the functions described in Variants 5 to 10 enforces the [strict mode from ABAP release 7.55](javascript:call_link\('abenabap_sql_strictmode_755.htm'\)).

Variant 1   

... TSTMP\_TO\_DATS( ... )

Effect

The function TSTMP\_TO\_DATS extracts the local date for the time zone specified in tzone from a time stamp in the argument tstmp.

The actual parameter for the formal parameter tstmp must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and no decimal places and contain a [valid time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSS. tzone expects an actual parameter of the type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 6, either initial or containing a valid [time zone](javascript:call_link\('abentime_zone_glosry.htm'\) "Glossary Entry"). If an initial time zone is specified, no time shift is calculated. The actual parameter for the optional formal parameter client must have the built-in dictionary type [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a valid [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"). The default value is the current client ID. This client ID is used in the evaluation of the system tables of the [rules for time zones](javascript:call_link\('abentime_zone_rules.htm'\)). The return value has the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)).

The optional parameter on\_error affects how errors are handled. The parameter for on\_error must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR from the class SQL\_TSTMP\_TO\_DATS and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_TSTMP\_TO\_DATS=>FAIL, an error raises an exception (default)
-   SQL\_TSTMP\_TO\_DATS=>SET\_TO\_NULL, an error returns the null value

Variant 2   

... TSTMP\_TO\_TIMS( ... )

Effect

The function TSTMP\_TO\_TIMS extracts the local time for the time zone specified in tzone from a time stamp in the argument tstmp.

The same applies to the parameters tstmp, tzone, client, and on\_error as to the function TSTMP\_TO\_DATS. Here, the class of the enumerated type of on\_error is SQL\_TSTMP\_TO\_TIMS.

The return value has the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)).

Variant 3   

... TSTMP\_TO\_DST( ... )

Effect

The function TSTMP\_TO\_DST extracts the daylight saving time marker for the time zone specified in tzone from a time stamp in the argument tstmp. This is X if the time stamp for the time zone is in the daylight saving time, otherwise it is initial.

The same applies to the parameters tstmp, tzone, client, and on\_error as to the function TSTMP\_TO\_DATS. Here, the class of the enumerated type of on\_error is SQL\_TSTMP\_TO\_DST.

The return value has the built-in data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 1.

Variant 4   

... DATS\_TIMS\_TO\_TSTMP( ... )

Effect

The function DATS\_TIMS\_TO\_TSTMP constructs a time stamp from a local date specified in date and a local time specified in time in the time zone specified in tzone. The daylight saving time is respected implicitly.

The actual parameter for the formal parameter date must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date. The actual parameter for the formal parameter time must have the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid time. The same applies to the parameters tzone, client, and on\_error as to the function TSTMP\_TO\_DATS. Here, the class of the enumerated type of on\_error is SQL\_DATS\_TIMS\_TO\_TSTMP.

The return value has the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 15 and represents an ABAP-specific [time stamp in a packed number](javascript:call_link\('abentime_stamps_packed.htm'\)).

Variant 5   

... TSTMPL\_TO\_UTCL( ... )

Effect

The function TSTMPL\_TO\_UTCL converts a time stamp tstmpl from the ABAP Dictionary type TIMESTAMPL to the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).

The actual parameter for the formal parameter tstmpl must have the built-in data type [DEC](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 21 and 7 decimal places and contain a [valid time stamp](javascript:call_link\('abentime_stamps_packed.htm'\)) in the format YYYYMMDDHHMMSSMMMUUUN.

The optional parameter on\_error affects how errors are handled:

The parameter for on\_error must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR from the class SQL\_TSTMPL\_TO\_UTCL and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_TSTMPL\_TO\_UTCL=>C\_ON\_ERROR-FAIL, an error raises an exception (default)
-   SQL\_TSTMPL\_TO\_UTCL=>C\_ON\_ERROR-SET\_TO\_NULL, an error returns the null value)
-   SQL\_TSTMPL\_TO\_UTCL=>C\_ON\_ERROR-SET\_TO\_INITIAL, an error returns the initial value

The optional parameter on\_initial affects how arguments with initial values are handled:

The parameter for on\_initial must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_INITIAL from the class SQL\_TSTMPL\_FROM\_UTCL and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_TSTMPL\_FROM\_UTCL=>C\_ON\_INITIAL-FAIL, an initial value raises an exception
-   SQL\_TSTMPL\_FROM\_UTCL=>C\_ON\_INITIAL-SET\_TO\_NULL, an initial value returns the null value
-   SQL\_TSTMPL\_FROM\_UTCL=>C\_ON\_INITIAL-SET\_TO\_INITIAL, an initial value returns the initial value (default)

Variant 6   

... TSTMPL\_FROM\_UTCL( ... )

Effect

The function TSTMPL\_FROM\_UTCL converts a time stamp utcl from the built-in dictionary type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) to the ABAP Dictionary type TIMESTAMPL. It is the counterpart to variant 5.

The actual parameter for the formal parameter utcl must have the built-in data type [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid time stamp.

The optional parameter on\_null affects how null values as arguments are handled. The parameter for on\_null must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_NULL from the class SQL\_TSTMPL\_FROM\_UTCL and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_TSTMPL\_FROM\_UTCL=>C\_ON\_NULL-FAIL, a null value raises an exception
-   SQL\_TSTMPL\_FROM\_UTCL=>C\_ON\_NULL-SET\_TO\_NULL, a null value returns the null value
-   SQL\_TSTMPL\_FROM\_UTCL=>C\_ON\_NULL-SET\_TO\_INITIAL, a null value returns the initial value (default)

Variant 7   

... DATS\_TO\_DATN( ... )

Effect

The function DATS\_TO\_DATN converts a date dats from the built-in ABAP Dictionary data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) to the built-in ABAP Dictionary type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)).

The actual parameter for the formal parameter dats must have the built-in data type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and should contain a valid date in the format YYYYMMDD. The same applies to the actual parameters on\_error and on\_initial as to the function TSTMPL\_TO\_UTCL (Variant 5, see above). Here, the class of the enumerated type of on\_error and on\_initial is SQL\_DATS\_TO\_DATN.

Hint

The same effect of the function DATS\_TO\_DATN can be achieved by [casting](javascript:call_link\('abensql_cast.htm'\)).

Variant 8   

... DATS\_FROM\_DATN( ... )

Effect

The function DATS\_FROM\_DATN converts a date date from the built-in ABAP Dictionary data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) to the built-in ABAP Dictionary type [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)). It is the counterpart to Variant 7.

The actual parameter for the formal parameter date must have the built-in data type [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid date in the format YYYYMMDD. The same applies to the actual parameter on\_null, as to the function TSTMPL\_FROM\_UTCL (Variant 6, see above). Here, the class of the enumerated type of on\_null is SQL\_DATS\_FROM\_DATN.

Hint

The same effect of the function DATS\_FROM\_DATN can be achieved by [casting](javascript:call_link\('abensql_cast.htm'\)).

Variant 9   

... TIMS\_TO\_TIMN( ... )

Effect

The function TIMS\_TO\_TIMN converts a time tims from the ABAP Dictionary type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) to the ABAP Dictionary type [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)).

The actual parameter for the formal parameter tims must have the built-in data type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a valid time in the format HHMMSS. The same applies to the actual parameter on\_error as to the function TSTMP\_TO\_DATS (Variant 1, see above). Here, the class of the enumerated type of on\_error is SQL\_TIMS\_TO\_TIMN.

Hint

The same effect of the function TIMS\_TO\_TIMN can be achieved by [casting](javascript:call_link\('abensql_cast.htm'\)).

Variant 10   

... TIMS\_FROM\_TIMN( ... )

Effect

The function TIMS\_FROM\_TIMN converts a time time from the ABAP Dictionary type [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)) to the ABAP Dictionary type [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)). It is the counterpart to variant 9.

The actual parameter for the formal parameter time must have the built-in data type [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a valid time in the format HHMMSS. The same applies to the actual parameter on\_null as to the function TSTMPL\_FROM\_UTCL (Variant 6, see above). Here, the class of the enumerated type of on\_null is SQL\_TIMS\_FROM\_TIMN.

Hint

The same effect of the function TIMS\_FROM\_TIMN can be achieved by [casting](javascript:call_link\('abensql_cast.htm'\)).

Example

Extracts date, time, and daylight saving time flag of the current UTC time stamp using the conversion functions TSTMP\_TO\_DATS, TSTMP\_TO\_TIMS, and TSTMP\_TO\_DST. The values of the columns DATS1 and TIMS1 of the DDIC database table DEMO\_EXPRESSIONS are combined into a time stamp by the conversion function DATS\_TIMS\_TO\_TSTMP. The conversion functions TSTMPL\_TO\_UTCL and TSTMPL\_FROM\_UTCL convert time stamps between TIMESTAMPL and [utclong](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) format. The conversion functions DATS\_TO\_DATN and DATS\_FROM\_DATN convert dates between [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) and [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)). The conversion functions TIMS\_TO\_TIMN and TIMS\_FROM\_TIMN convert times between [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) and [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)). The class CL\_DEMO\_SQL\_DATE\_TIME executes the statement and displays the result.

DATA ts TYPE timestampl.
GET TIME STAMP FIELD ts.
FINAL(utc) = utclong\_current( ).
DELETE FROM demo\_expressions.
INSERT demo\_expressions FROM @(
  VALUE #( id = 'X'
           dats1 = cl\_demo\_date\_time=>get\_user\_date( )
           tims1 = cl\_demo\_date\_time=>get\_user\_time( )
           timestampl1 = ts
           utcl1 = utclong\_current( ) ) ).
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
               AS dat\_tim,
         tstmpl\_to\_utcl(
           tstmpl    = timestampl1,
           on\_error = @sql\_tstmpl\_to\_utcl=>c\_on\_error-set\_to\_null,
           on\_initial =
           @sql\_tstmpl\_to\_utcl=>c\_on\_initial-set\_to\_initial )
             AS utcl,
         tstmpl\_from\_utcl(
           utcl = utcl1,
           on\_null = @sql\_tstmpl\_from\_utcl=>c\_on\_null-set\_to\_null )
             AS from\_utcl
       INTO @FINAL(result).