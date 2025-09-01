---
title: "CDS DDL - CDS View Entity, Built-In Session Variables"
description: |
  Syntax ... $session.vname ... Effect Specifies a built-in session variable(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm 'Glossary Entry') vname in an operand position in a SELECT statement(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/ab
version: "7.58"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_var_builtin_v2.htm"
abapFile: "abencds_session_var_builtin_v2.htm"
keywords: ["select", "do", "if", "try", "method", "class", "data", "abencds", "session", "var", "builtin"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_v2.htm) →  [CDS DDL - CDS View Entity, session\_variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_session_variable_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Built-In%20Session%20Variables%2C%20ABENCDS_SESSION_VAR_BUILTIN_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

CDS DDL - CDS View Entity, Built-In Session Variables

Syntax

... $session.vname ...

Effect

Specifies a built-in [session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensession_variable_glosry.htm "Glossary Entry") vname in an operand position in a [SELECT statement](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) of a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"). The variable must be prefixed by $session..

Session variables have a predefined name and provide context-dependent information. The following built-in session variables exist:

vname

Value when accessed

user

Current [user name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_name_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-uname](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm). The returned value has the data type CHAR.

client

Current [client](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclient_glosry.htm "Glossary Entry"). The default value is the nominal value of the ABAP system field [sy-mandt](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm). In reads with an ABAP SQL statement with the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm) and in calls of an [AMDP method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") from ABAP in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_amdp_options.htm) is specified, it is the value specified here. The returned value has the data type CLNT, length 3.

system\_language

[Text environment language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_env_langu_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-langu](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm). The returned value has the data type LANG, length 1.

system\_date

Current [system date](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_date_glosry.htm "Glossary Entry") of the AS ABAP, nominal value of the ABAP system field [sy-datum](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm). The returned value is of data type DATS, length 8.

user\_timezone

[User time zone](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-zonlo](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm). The returned value has the data type CHAR, length 6.

user\_date

Current [user date](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenuser_date_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-datlo](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_fields.htm). The returned value is of data type DATS, length 8.

Hints

-   From a technical perspective, session variables indicate global variables of the current database that are set to their value when the CDS view entity is used in ABAP SQL. If ABAP SQL is not used to access a CDS view entity with session variables, the content of the variables is undefined (with the exception of the [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry")).
-   For [input parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v2.htm) of CDS view entities annotated with the annotation [environment.systemField](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm), ABAP SQL automatically passes the values of the session variables. It is generally preferable to use this type of local input parameter.
-   In existing CDS view entities without corresponding input parameters, session variables can be passed to the input parameters of CDS view entities or CDS table functions used there.
-   In CDS view entities, [client handling](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_client_handling.htm) takes place implicitly by using the session variable client.
-   On an [SAP HANA database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_database_glosry.htm "Glossary Entry") used as a [standard AS ABAP database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_db_glosry.htm "Glossary Entry"), the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_session_variables.htm) are called APPLICATIONUSER, CDS\_CLIENT, LOCALE\_SAP, and SAP\_SYSTEM\_DATE. They exist and are set independently of ABAP CDS and ABAP SQL. They can be accessed using the database function SESSION\_CONTEXT.
-   A further [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhana_session_variables.htm) CLIENT in the SAP HANA database always contains the current client of the ABAP session and is not modified by the ABAP SQL addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm) or by ABAP calls of an [AMDP method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamdp_method_glosry.htm "Glossary Entry") in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_amdp_options.htm) is specified. The HANA session variable CLIENT does not have a corresponding variable in ABAP CDS.

Example

The following CDS view entity contains all possible session variables in the SELECT list. The class CL\_DEMO\_CDS\_SESSION\_VARIS\_VE uses ABAP SQL to access the view entity. The class asks you of you want to use the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_client.htm).

@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view entity demo\_cds\_session\_variables\_ve
  as select from demo\_expressions
  {
    key id,
        $session.user            as system\_user,
        $session.client          as system\_client,
        $session.system\_language as system\_language,
        $session.system\_date     as system\_date,
        $session.user\_timezone   as user\_timezone,
        $session.user\_date       as user\_date
  }

Example

The following CDS view entity DEMO\_CDS\_SELECT\_T100\_VE accesses the CDS view entity DEMO\_CDS\_SELECT\_T100\_LANGU\_VE, which contains a language input parameter to which the annotation [environment.systemField](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm) with the value system\_language is assigned. Unlike in ABAP SQL, there is no implicit pass of the actual parameter to the input parameter here and the corresponding session variable $session.system\_language is passed instead. The class CL\_DEMO\_CDS\_T100\_VE uses ABAP SQL to access both view entities and the result is identical. When DEMO\_CDS\_SELECT\_T100\_LANGU\_VE is accessed, the value of the system field sy-langu is passed implicitly to the input parameter. When DEMO\_CDS\_SELECT\_T100 is accessed, the session variable $session.system\_language is filled with this value.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SELECT\_T100\_VE
  as select from DEMO\_CDS\_SELECT\_T100\_LANGU\_VE(
                 p\_langu: $session.system\_language )
  {
    key sprsl,
    key arbgb,
    key msgnr,
        text
  }

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_SELECT\_T100\_LANGU\_VE
  with parameters
    @Environment.systemField:#SYSTEM\_LANGUAGE
    p\_langu : lang
  as select from t100
  {
    key sprsl,
    key arbgb,
    key msgnr,
        text
  }
  where
        sprsl = $parameters.p\_langu
    and arbgb = 'SABAPDEMOS'