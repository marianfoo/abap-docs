---
title: "CDS DDL - CDS View Entity, Time Zone Functions"
description: |
  Syntax ... ABAP_SYSTEM_TIMEZONE(clnt,on_error)  ABAP_USER_TIMEZONE(user,clnt,on_error) ... Variants: 1. ... ABAP_SYSTEM_TIMEZONE(clnt,on_error)(#!ABAP_VARIANT_1@1@) 2. ... ABAP_USER_TIMEZONE(user,clnt,on_error)(#!ABAP_VARIANT_2@2@) Effect In a CDS view entity(https://help.sap.
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_timezone_functions_v2.htm"
abapFile: "abencds_timezone_functions_v2.htm"
keywords: ["select", "do", "if", "case", "try", "class", "data", "types", "abencds", "timezone", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, Special Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_special_functions_v2.htm) →  [CDS DDL - CDS View Entity, Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_date_time_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Time%20Zone%20Functions%2C%20ABENCDS_TIMEZONE_FUNCTIONS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggest
ion%20for%20improvement:)

CDS DDL - CDS View Entity, Time Zone Functions

Syntax

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)
  *|* ABAP\_USER\_TIMEZONE(user,clnt,on\_error) ...

Variants:

[1\. ... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)](#!ABAP_VARIANT_1@1@)
[2\. ... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)](#!ABAP_VARIANT_2@2@)

Effect

In a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), these functions return the client-dependent [system time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") and the user-dependent [user time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_time_zone_glosry.htm "Glossary Entry") of the current AS ABAP. The functions have [positional parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpositional_parameter_glosry.htm "Glossary Entry") to which actual parameters must be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm), [literals](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm), [parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm), [path expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm), [built-in functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm), [SQL-based scalar functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm), [expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm), or [reuse expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm) using $projection can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennull_value_glosry.htm "Glossary Entry"), every function returns a null value.

Hint

For [user time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), there is also the [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm) user\_timezone available. It returns the same result as the built-in function ABAP\_USER\_TIMEZONE.

Variant 1   

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)

Effect

The function ABAP\_SYSTEM\_TIMEZONE returns the [system time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") of the AS ABAP for the [client](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_glosry.htm "Glossary Entry") specified with clnt. The actual parameter clnt must have the built-in dictionary type [CLNT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) and must contain a valid [client ID](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). The result has the [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) type with a length of 6. If the system time zone cannot be determined, an error is raised.

The actual parameter on\_error controls error handling. It must have the built-in data type [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   FAIL (an error raises an exception)
-   NULL (an error returns the null value)
-   INITIAL (an error returns the initial value)

The values are case-sensitive. Any incorrectly specified values raise an exception.

Hint

The system time zone returned is the client-dependent content of column TZONESYS in DDIC database table TTZCU.

Variant 2   

... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)

Effect

The function ABAP\_USER\_TIMEZONE returns the [user time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_time_zone_glosry.htm "Glossary Entry") of the AS ABAP for the [ABAP user](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_user_glosry.htm "Glossary Entry") specified with user and the [client](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_glosry.htm "Glossary Entry") specified with clnt. The actual parameter user must have the built-in type [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm). The same applies to the actual parameter clnt as to function ABAP\_SYSTEM\_TIMEZONE. The result has the [CHAR](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm) type with a length of 6. If the user time zone cannot be determined, an error is raised.

The actual parameter on\_error controls error handling and the same applies as in function ABAP\_SYSTEM\_TIMEZONE.

Hint

For the current client, the returned user time zone corresponds with the content of system field [sy-zonlo](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm) in ABAP.

Example

The following SELECT statement returns the values for system time zone and user time zone that were read with the ABAP\_SYSTEM\_TIMEZONE and ABAP\_USER\_TIMEZONE functions for the current client and current user. The actual parameters of the functions are supplied with suitable [session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm "Glossary Entry"). The class CL\_DEMO\_CDS\_TIMEZONE\_FUNC\_VE accesses the view, compares the CDS values with the corresponding ABAP values, and returns the result.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_TIMEZONE\_FUNC\_VE
  as select from demo\_expressions
{
  key id,
      abap\_system\_timezone( $session.client,'NULL' )      as system\_tz,
      abap\_user\_timezone(   $session.user,$session.client,'NULL' )  
                                                          as user\_tz,
      $session.user\_timezone as user\_tz\_session\_var
}