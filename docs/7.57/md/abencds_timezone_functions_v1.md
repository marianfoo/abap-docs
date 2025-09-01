  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [Obsolete CDS Language Elements](javascript:call_link\('abencds_obsolete.htm'\)) →  [Obsolete CDS Entities](javascript:call_link\('abencds_entities_obsolete.htm'\)) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views (Obsolete)](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Expressions](javascript:call_link\('abencds_expressions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Built-In Functions](javascript:call_link\('abencds_builtin_functions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Special Functions](javascript:call_link\('abencds_special_functions_v1.htm'\)) →  [CDS DDL - DDIC-Based View, Date Functions and Time Functions](javascript:call_link\('abencds_date_time_functions_v1.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DDIC-Based View, Time Zone Functions, ABENCDS_TIMEZONE_FUNCTIONS_V1, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DDIC-Based View, Time Zone Functions

Syntax

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)
  *|* ABAP\_USER\_TIMEZONE(user,clnt,on\_error) ...

Variants:

[1\. ... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)](#!ABAP_VARIANT_1@1@)
[2\. ... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)](#!ABAP_VARIANT_2@2@)

Effect

In a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"), these functions return the client-dependent [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") and the user-dependent [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry") of the current AS ABAP. The functions have [positional parameters](javascript:call_link\('abenpositional_parameter_glosry.htm'\) "Glossary Entry") to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](javascript:call_link\('abencds_data_source_v1.htm'\)), [literals](javascript:call_link\('abencds_literal_v1.htm'\)), [parameters](javascript:call_link\('abencds_parameter_v1.htm'\)), [path expressions](javascript:call_link\('abencds_path_expression_v1.htm'\)), built-in functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"), every function returns a null value.

Variant 1   

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)

Effect

The function ABAP\_SYSTEM\_TIMEZONE returns the [system time zone](javascript:call_link\('abensystem_time_zone_glosry.htm'\) "Glossary Entry") of the AS ABAP for the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") specified with clnt. The actual parameter clnt must have the built-in dictionary type [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) and must contain a valid [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"). The result has the [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) type with a length of 6. If the system time zone cannot be determined, an error is raised.

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) with the length 10 and must have one of the following values:

-   FAIL (an error raises an exception)
-   NULL (an error returns the null value)
-   INITIAL (an error returns the initial value)

The values are case-sensitive. Any incorrectly specified values raise an exception.

Hint

The system time zone returned is the client-dependent content of column TZONESYS in DDIC database table TTZCU.

Variant 2   

... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)

Effect

The function ABAP\_USER\_TIMEZONE returns the [user time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry") of the AS ABAP for the [ABAP user](javascript:call_link\('abenabap_user_glosry.htm'\) "Glossary Entry") specified with user and the [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") specified with clnt. The actual parameter user must have the built-in type [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)). The same applies to the actual parameter clnt as to function ABAP\_SYSTEM\_TIMEZONE. The result has the [CHAR](javascript:call_link\('abenddic_builtin_types.htm'\)) type with a length of 6. If the user time zone cannot be determined, an error is raised.

The actual parameter on\_error controls error handling and the same applies as in function ABAP\_SYSTEM\_TIMEZONE.

Hint

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