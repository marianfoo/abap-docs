---
title: "ABAP CDS - Time Zone Functions"
description: |
  Syntax ... ABAP_SYSTEM_TIMEZONE(clnt,on_error)  ABAP_USER_TIMEZONE(user,clnt,on_error) ... Variants: 1. ... ABAP_SYSTEM_TIMEZONE(clnt,on_error)(#!ABAP_VARIANT_1@1@) 2. ... ABAP_USER_TIMEZONE(user,clnt,on_error)(#!ABAP_VARIANT_2@2@) Effect In a CDS view(https://help.sap.com/doc
version: "7.52"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_timezone_functions.htm"
abapFile: "abencds_f1_timezone_functions.htm"
keywords: ["select", "do", "if", "case", "try", "data", "types", "abencds", "timezone", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Built-In Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_builtin_functions.htm) →  [ABAP CDS - Special Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_special_functions.htm) →  [ABAP CDS - Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_date_time_functions.htm) → 

ABAP CDS - Time Zone Functions

Syntax

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)
  *|* ABAP\_USER\_TIMEZONE(user,clnt,on\_error) ...

Variants:

[1\. ... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)](#!ABAP_VARIANT_1@1@)
[2\. ... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)](#!ABAP_VARIANT_2@2@)

Effect

In a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry"), these functions return the client-dependent [system time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") and the user-dependent [user time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_time_zone_glosry.htm "Glossary Entry") of the current AS ABAP. The functions have positional parameters to which actual parameters need to be assigned when called. There are currently no optional parameters. Suitable fields of a [data source](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_data_source.htm), [literals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_literal.htm), [parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter.htm), [path expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm), predefined functions, or expressions can all be specified as actual parameters. Only literals can be passed to the parameter on\_error. If an actual parameter contains the [null value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennull_value_glosry.htm "Glossary Entry"), every function returns a null value.

Variant 1

... ABAP\_SYSTEM\_TIMEZONE(clnt,on\_error)

Effect

The function ABAP\_SYSTEM\_TIMEZONE returns the [system time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_time_zone_glosry.htm "Glossary Entry") of the AS ABAP for the [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") specified with clnt. The actual parameter clnt must have the built-in dictionary type [CLNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and must contain a valid [client ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_identifier_glosry.htm "Glossary Entry"). The result has the [CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) type with a length of 6. If the system time zone cannot be determined, an error is triggered.

The actual parameter on\_error controls error handling. It must have the predefined data type [CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) with the length 10 and must have one of the following values:

-   "FAIL" (an error raises an exception)

-   "NULL" (an error returns the null value)

-   "INITIAL" (an error returns the initial value)

The format is not case-sensitive. Any incorrectly specified values raise an exception.

Note

The system time zone returned is the client-dependent content of column TZONESYS in database table TTZCU.

Variant 2

... ABAP\_USER\_TIMEZONE(user,clnt,on\_error)

Effect

The function ABAP\_USER\_TIMEZONE returns the [user time zone](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_time_zone_glosry.htm "Glossary Entry") of the AS ABAP for the [user](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_glosry.htm "Glossary Entry") specified with user and the [client](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_glosry.htm "Glossary Entry") specified with clnt. The actual parameter user must have the predefined type [CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). The same applies to the actual parameter clnt as to function ABAP\_SYSTEM\_TIMEZONE. The result has the [CHAR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) type with a length of 6. If the user time zone cannot be determined, an error is triggered.

The actual parameter on\_error controls error handling and the same applies as in function ABAP\_SYSTEM\_TIMEZONE.

Note

For the current client, the returned user time zone corresponds with the content of system field [sy-zonlo](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensystem_fields.htm) in ABAP.

Example

The following CDS view returns the values for system time zone and user time zone that were read with the ABAP\_SYSTEM\_TIMEZONE and ABAP\_USER\_TIMEZONE functions for the current client and current user. The actual parameters of the functions are supplied with suitable [session variables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensession_variable_glosry.htm "Glossary Entry"). The program DEMO\_CDS\_TIMEZONE\_FUNCTIONS access the view, compares the CDS values with the corresponding ABAP values, and returns the result.

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