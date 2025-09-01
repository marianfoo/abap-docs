  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_operands.htm) →  [ABAP SQL - SQL Expressions sql\_exp](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm) →  [sql\_exp - sql\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_builtin_func.htm) →  [ABAP SQL - Built-In Functions sql\_func](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_builtin_functions.htm) →  [ABAP SQL - Special Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_special_functions.htm) →  [ABAP SQL - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_date_time_functions.htm) → 

sql\_exp - Time Zone Functions

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

These SQL functions return the client-specific [system time zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") and the user-dependent [user time zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_time_zone_glosry.htm "Glossary Entry") of the current AS ABAP.

The arguments of the functions are specified as a comma-separated list in parentheses. A blank must be placed after the opening parenthesis and before the closing parenthesis. The functions have optional keyword parameters to which actual parameters can be assigned when called.

[SQL expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsql_expr.htm), in particular individual columns, literals, SQL functions, host variables or host expressions or host expressions can be specified as actual parameters. Only [enumeration constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") of specific classes can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennull_value_glosry.htm "Glossary Entry"), every function returns a null value.

Note

When used, these functions require the [strict mode from Release 7.53](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql_strict_mode_753.htm).

Variant 1

... ABAP\_SYSTEM\_TIMEZONE( ... )

Effect

The function ABAP\_SYSTEM\_TIMEZONE returns the [system time zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") of the AS ABAP for the [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") passed to client. The actual parameter for the optional formal parameter client must have the built-in dictionary type [CLNT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) and contain a valid [client ID](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). The default value is the current client.

The result has the type [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with the length 6. If the system time zone cannot be detected, an error occurs.

The optional parameter on\_error defines the way errors are handled. The parameter for on\_error must be an [enumerated object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR from the class SQL\_ABAP\_SYSTEM\_TIMEZONE and the following [enumeration constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:

-   SQL\_ABAP\_SYSTEM\_TIMEZONE=>FAIL (an error raises an exception (default))

-   SQL\_ABAP\_SYSTEM\_TIMEZONE=>SET\_TO\_NULL (an error returns the null value)

Note

The system time zone returned is the client-specific content of column TZONESYS in database table TTZCU.

Variant 2

... ABAP\_USER\_TIMEZONE( ... )

Effect

The function ABAP\_USER\_TIMEZONE returns the [user time zone](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_time_zone_glosry.htm "Glossary Entry") of AS ABAP for the [user name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_name_glosry.htm "Glossary Entry") passed to user and the [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry") passed to client.

The actual parameter for the optional formal parameter user must have the predefined type [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with length 12. The default value is the user name of the current [user](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_glosry.htm "Glossary Entry"). The same applies to the parameter client as to the function ABAP\_SYSTEM\_TIMEZONE.

The result has the type [CHAR](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) with the length 6. If the user time zone cannot be detected, an error occurs.

The optional parameter on\_error defines the way errors are handled. The actual parameter for on\_error must be an [enumerated object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry") with the [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry") ON\_ERROR from the class SQL\_ABAP\_USER\_TIMEZONE and the following [enumeration constants](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_constant_glosry.htm "Glossary Entry") can be passed:

-   SQL\_ABAP\_USER\_TIMEZONE=>FAIL (an error raises an exception (default))

-   SQL\_ABAP\_USER\_TIMEZONE=>SET\_TO\_NULL (an error returns the null value)

Note

For the current client, the returned user time zone corresponds with the content of system field [sy-zonlo](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm) in ABAP.

Example

The following SELECT statement returns the values for system time zone and user time zone that were read with the ABAP\_SYSTEM\_TIMEZONE and ABAP\_USER\_TIMEZONE functions for the current client and current user. The optional parameters client and user are filled explicitly with [host variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhost_variable_glosry.htm "Glossary Entry"). The system fields contain the default values and could be omitted if required. The program DEMO\_SQL\_TIMEZONE\_FUNCTIONS executes the statement and displays the result.

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

The [example for date/time conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensql_date_time_conversions.htm) uses the function ABAP\_SYSTEM\_TIMEZONE without parameters being specified explicitly.