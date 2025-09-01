  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - View Entities](javascript:call_link\('abencds_v2_views.htm'\)) →  [CDS DDL - DEFINE VIEW ENTITY](javascript:call_link\('abencds_define_view_entity.htm'\)) →  [CDS DDL - CDS View Entity, SELECT](javascript:call_link\('abencds_select_statement_v2.htm'\)) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v2.htm'\)) →  [CDS DDL - CDS View Entity, Elementary CDS Operands](javascript:call_link\('abencds_operands_v2.htm'\)) →  [CDS DDL - CDS View Entity, session\_variable](javascript:call_link\('abencds_session_variable_v2.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - CDS View Entity, Built-In Session Variables, ABENCDS_SESSION_VAR_BUILTIN_V2
, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - CDS View Entity, Built-In Session Variables

Syntax

... $session.vname ...

Effect

Specifies a built-in [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") vname in an operand position in a [SELECT statement](javascript:call_link\('abencds_select_statement_v2.htm'\)) of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry"). The variable must be prefixed by $session..

Session variables have a predefined name and provide context-dependent information. The following built-in session variables exist:

vname

Value when accessed

user

Current [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-uname](javascript:call_link\('abensystem_fields.htm'\)). The returned value has the data type CHAR.

client

Current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"). The default value is the nominal value of the ABAP system field [sy-mandt](javascript:call_link\('abensystem_fields.htm'\)). In reads with an ABAP SQL statement with the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) and in calls of an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") from ABAP in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) is specified, it is the value specified here. The returned value has the data type CLNT, length 3.

system\_language

[Text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)). The returned value has the data type LANG, length 1.

system\_date

Current [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of the AS ABAP, nominal value of the ABAP system field [sy-datum](javascript:call_link\('abensystem_fields.htm'\)). The returned value is of data type DATS, length 8.

user\_timezone

[User time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-zonlo](javascript:call_link\('abensystem_fields.htm'\)). The returned value has the data type CHAR, length 6.

user\_date

Current [user date](javascript:call_link\('abenuser_date_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-datlo](javascript:call_link\('abensystem_fields.htm'\)). The returned value is of data type DATS, length 8.

Hints

-   From a technical perspective, session variables indicate global variables of the current database that are set to their value when the CDS view entity is used in ABAP SQL. If ABAP SQL is not used to access a CDS view entity with session variables, the content of the variables is undefined (with the exception of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry")).
-   On an [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") used as a [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"), the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) are called APPLICATIONUSER, CDS\_CLIENT, LOCALE\_SAP, and SAP\_SYSTEM\_DATE. They exist and are set independently of ABAP CDS and ABAP SQL. They can be accessed using the database function SESSION\_CONTEXT.
-   A further [ABAP-specific session variable](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT in the SAP HANA database always contains the current client of the ABAP session and is not modified by the ABAP SQL addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) or by ABAP calls of an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) is specified. The HANA session variable CLIENT does not have a corresponding variable in ABAP CDS.
-   For [input parameters](javascript:call_link\('abencds_parameter_list_v2.htm'\)) of CDS view entities annotated with the annotation [environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), ABAP SQL automatically passes the values of the session variables. It is generally preferable to use this type of local input parameter.
-   In existing CDS view entities without corresponding input parameters, session variables can be passed to the input parameters of CDS view entities or CDS table functions used there.
-   In CDS view entities, [client handling](javascript:call_link\('abencds_v2_view_client_handling.htm'\)) takes place implicitly by using the session variable client.

Example

The following CDS view entity contains all possible session variables in the SELECT list. The program DEMO\_CDS\_SESSION\_VARIABLES\_VE uses ABAP SQL to access the view entity. The program asks you of you want to use the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)).

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

The following CDS view entity DEMO\_CDS\_SELECT\_T100\_VE accesses the CDS view entity DEMO\_CDS\_SELECT\_T100\_LANGU\_VE, which contains a language input parameter to which the annotation [environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) with the value system\_language is assigned. Unlike in ABAP SQL, there is no implicit pass of the actual parameter to the input parameter here and the corresponding session variable $session.system\_language is passed instead. The program DEMO\_CDS\_T100\_VE uses ABAP SQL to access both view entities and the result is identical. When DEMO\_CDS\_SELECT\_T100\_LANGU\_VE is accessed, the value of the system field sy-langu is passed implicitly to the input parameter. When DEMO\_CDS\_SELECT\_T100 is accessed, the session variable $session.system\_language is filled with this value.

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