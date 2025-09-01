  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Expressions sql\_exp](javascript:call_link\('abapsql_expr.htm'\)) →  [sql\_exp - sql\_func](javascript:call_link\('abensql_builtin_func.htm'\)) →  [ABAP SQL - Built-In Functions sql\_func](javascript:call_link\('abenopen_sql_builtin_functions.htm'\)) →  [sql\_func - Special Functions](javascript:call_link\('abenopen_sql_special_functions.htm'\)) →  [sql\_func - Date Functions and Time Functions](javascript:call_link\('abenopen_sql_date_time_functions.htm'\)) → 

sql\_func - Time Zone Functions

Syntax

... ABAP\_SYSTEM\_TIMEZONE( *\[*client   = client*\]**\[*,
                           on\_error = on\_error*\]* )
  *|* ABAP\_USER\_TIMEZONE( *\[*user     = user *\]**\[*,
                         client   = client*\]**\[*,
                         on\_error = on\_error*\]* ) ...

Variants:

[1\. ... ABAP\_SYSTEM\_TIMEZONE( ... )](#!ABAP_VARIANT_1@1@)
[2\. ... ABAP\_USER\_TIMEZONE( ... )](#!ABAP_VARIANT_2@2@)

Effect

These SQL functions return the client-dependent [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") and the user-dependent [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry") of the current AS ABAP.

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and in front of the closing parenthesis. The functions have optional [keyword parameters](javascript:call_link\('abenkeyword_parameter_glosry.htm'\) "Glossary Entry") to which actual parameters can be assigned when called.

[SQL expressions](javascript:call_link\('abapsql_expr.htm'\)), in particular individual columns, literals, SQL functions, host variables or host expressions can be specified as actual parameters. Only [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") of specific classes can be passed to the parameter on\_error. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function returns a null value.

Hint

The use of these functions enforces the [strict mode from Release 7.53](javascript:call_link\('abenopensql_strict_mode_753.htm'\)).

Variant 1

... ABAP\_SYSTEM\_TIMEZONE( ... )

Effect

The function ABAP\_SYSTEM\_TIMEZONE returns the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") of the AS ABAP for the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") passed to client. The actual parameter for the optional formal parameter client must have the built-in dictionary type [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) and contain a valid [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"). The default value is the current client.

The result has the type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 6. If the system time zone cannot be detected, an error occurs.

The optional parameter on\_error affects how errors are handled. The parameter for on\_error must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR from the class SQL\_ABAP\_SYSTEM\_TIMEZONE and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_ABAP\_SYSTEM\_TIMEZONE=>FAIL, an error raises an exception (default)

-   SQL\_ABAP\_SYSTEM\_TIMEZONE=>SET\_TO\_NULL, an error returns the null value

Hint

The system time zone returned is the client-dependent content of column TZONESYS in DDIC database table TTZCU.

Variant 2

... ABAP\_USER\_TIMEZONE( ... )

Effect

The function ABAP\_USER\_TIMEZONE returns the [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry") of AS ABAP for the [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry") passed to user and the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") passed to client.

The actual parameter for the optional formal parameter user must have the built-in type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 12. The default value is the user name of the current [user](javascript:call_link\('abenuser_glosry.htm'\) "Glossary Entry"). The same applies to the parameter client as to the function ABAP\_SYSTEM\_TIMEZONE.

The result has the type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 6. If the user time zone cannot be detected, an error occurs.

The optional parameter on\_error affects how errors are handled. The actual parameter for on\_error must be an [enumerated object](javascript:call_link\('abenenumerated_object_glosry.htm'\) "Glossary Entry") with the [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") ON\_ERROR from the class SQL\_ABAP\_USER\_TIMEZONE and the following [enumerated constants](javascript:call_link\('abenenumerated_constant_glosry.htm'\) "Glossary Entry") can be passed:

-   SQL\_ABAP\_USER\_TIMEZONE=>FAIL, an error raises an exception (default)

-   SQL\_ABAP\_USER\_TIMEZONE=>SET\_TO\_NULL, an error returns the null value

Hint

For the current client, the returned user time zone corresponds to the content of system field [sy-zonlo](javascript:call_link\('abensystem_fields.htm'\)) in ABAP.

Example

The following SELECT statement returns the values for system time zone and user time zone that were read with the ABAP\_SYSTEM\_TIMEZONE and ABAP\_USER\_TIMEZONE functions for the current client and current user. The optional parameters client and user are filled explicitly with [host variables](javascript:call_link\('abenhost_variable_glosry.htm'\) "Glossary Entry"). The system fields contain the default values and could be omitted if required. The program DEMO\_SQL\_TIMEZONE\_FUNCTIONS executes the statement and displays the result.

SELECT SINGLE
       FROM demo\_expressions
       FIELDS
         abap\_system\_timezone(
           client   = @sy-mandt,
           on\_error = @sql\_abap\_system\_timezone=>set\_to\_null )
             AS system\_tz,
         abap\_user\_timezone(
           user     = @sy-uname,
           client   = @sy-mandt,
           on\_error = @sql\_abap\_user\_timezone=>set\_to\_null )
             AS user\_tz
       INTO @DATA(result).

Example

The [example for date/time conversions](javascript:call_link\('abensql_date_time_conversions.htm'\)) uses the function ABAP\_SYSTEM\_TIMEZONE without parameters being specified explicitly.