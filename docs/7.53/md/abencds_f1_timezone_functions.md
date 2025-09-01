  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [ABAP CDS in ABAP Dictionary](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abenddic_cds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - DEFINE VIEW](javascript:call_link\('abencds_f1_define_view.htm'\)) →  [ABAP CDS - SELECT](javascript:call_link\('abencds_f1_select_statement.htm'\)) →  [ABAP CDS - SELECT, Built-In Functions](javascript:call_link\('abencds_f1_builtin_functions.htm'\)) →  [ABAP CDS - Special Functions](javascript:call_link\('abencds_special_functions.htm'\)) →  [ABAP CDS - Date Functions and Time Functions](javascript:call_link\('abencds_f1_date_time_functions.htm'\)) → 

ABAP CDS - Time Zone Functions

Syntax

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)
  *|* ABAP\_USER\_TIMEZONE(user,clnt,on\_error) ...

Variants:

[1\. ... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)](#!ABAP_VARIANT_1@1@)
[2\. ... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)](#!ABAP_VARIANT_2@2@)

Effect

In a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry"), these functions return the client-specific [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") and the user-dependent [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry") of the current AS ABAP. The functions have positional parameters to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)), [literals](javascript:call_link\('abencds_f1_literal.htm'\)), [parameters](javascript:call_link\('abencds_f1_parameter.htm'\)), [path expressions](javascript:call_link\('abencds_f1_path_expression.htm'\)), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function returns a null value.

Variant 1

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)

Effect

The function ABAP\_SYSTEM\_TIMEZONE returns the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") of the AS ABAP for the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") specified with clnt. The actual parameter clnt must have the built-in dictionary type [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"). The result has the [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) type with a length of 6. If the system time zone cannot be determined, an error is triggered.

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 10 and must have one of the following values:

-   "FAIL" (an error raises an exception)

-   "NULL" (an error returns the null value)

-   "INITIAL" (an error returns the initial value)

The values are case-sensitive. Any incorrectly specified values raise an exception.

Note

The system time zone returned is the client-specific content of column TZONESYS in database table TTZCU.

Variant 2

... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)

Effect

The function ABAP\_USER\_TIMEZONE returns the [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry") of the AS ABAP for the [user](javascript:call_link\('abenuser_glosry.htm'\) "Glossary Entry") specified with user and the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") specified with clnt. The actual parameter user must have the built-in type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)). The same applies to the actual parameter clnt as to function ABAP\_SYSTEM\_TIMEZONE. The result has the [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) type with a length of 6. If the user time zone cannot be determined, an error is triggered.

The actual parameter on\_error controls error handling and the same applies as in function ABAP\_SYSTEM\_TIMEZONE.

Note

For the current client, the returned user time zone corresponds with the content of system field [sy-zonlo](javascript:call_link\('abensystem_fields.htm'\)) in ABAP.

Example

The following SELECT statement returns the values for system time zone and user time zone that were read with the ABAP\_SYSTEM\_TIMEZONE and ABAP\_USER\_TIMEZONE functions for the current client and current user. The actual parameters of the functions are supplied with suitable [session variables](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry"). The program DEMO\_CDS\_TIMEZONE\_FUNCTIONS accesses the view, compares the CDS values with the corresponding ABAP values, and returns the result.

@AbapCatalog.sqlViewName: 'demo\_cds\_tzfnc'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_timezone\_functions
  as select from
    demo\_expressions
    {
      abap\_system\_timezone( $session.client,'NULL' )                
        as system\_tz,
      abap\_user\_timezone(   $session.user,$session.client,'NULL' )  
        as user\_tz
    }