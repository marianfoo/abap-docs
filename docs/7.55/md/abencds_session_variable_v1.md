  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - DDIC-Based Entities](javascript:call_link\('abencds_ddic_entity.htm'\)) →  [ABAP CDS - DDIC-Based Views](javascript:call_link\('abencds_v1_views.htm'\)) →  [CDS DDL - DEFINE VIEW ddic\_based](javascript:call_link\('abencds_define_view_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT](javascript:call_link\('abencds_select_statement_v1.htm'\)) →  [CDS DDL - DDIC-based View, SELECT, Operands and Expressions](javascript:call_link\('abencds_operands_and_expr_v1.htm'\)) →  [CDS DDL - DDIC-based View, Elementary CDS Operands](javascript:call_link\('abencds_operands_v1.htm'\)) → 

CDS DDL - DDIC-based View, session\_variable

Syntax

... $session.vname ...

Effect

Specifies a [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") vname in an operand position in a [SELECT statement](javascript:call_link\('abencds_select_statement_v1.htm'\)) of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry"). The variable must be prefixed by $session.. The prefix and the variable are case-sensitive. $session.vname, $Session.Vname, and $SESSION.VNAME can all be used. No other spellings are allowed.

Session variables have a predefined name and are set to a predefined value when the CDS view is used in ABAP SQL. This also applies to CDS views that are used as data sources in other CDS views. The following session variables exist:

vname

Value when accessed using ABAP SQL

user

Current [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-uname](javascript:call_link\('abensystem_fields.htm'\)). The returned value has the data type CHAR.

client

Current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"). The default value is the nominal value of the ABAP system field [sy-mandt](javascript:call_link\('abensystem_fields.htm'\)). In reads with an ABAP SQL statement (with the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\))) and in calls of an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") from ABAP (in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) is specified, the value specified here. The returned value has the data type CLNT, length 3.

system\_language

[Text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)). The returned value has the data type LANG, length 1.

system\_date

Current [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of the AS ABAP, nominal value of the ABAP system field [sy-datum](javascript:call_link\('abensystem_fields.htm'\)). The returned value has the data type DATS, length 8.

user\_timezone

[User time zone](javascript:call_link\('abenuser_time_zone_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-zonlo](javascript:call_link\('abensystem_fields.htm'\)). The returned value has the data type CHAR, length 6.

user\_date

Current [user date](javascript:call_link\('abenuser_date_glosry.htm'\) "Glossary Entry"), nominal value of the ABAP system field [sy-datlo](javascript:call_link\('abensystem_fields.htm'\)). The returned value is of data type DATS, length 8.

Hints

-   From a technical perspective, session variables indicate global variables of the current database that are set to their value when the CDS view is used in ABAP SQL. If ABAP SQL is not used to access a CDS view with session variables, the content of the variables is undefined (with the exception of the [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry")).

-   On a [SAP HANA database](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") used as a [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"), the [ABAP-specific session variables](javascript:call_link\('abenhana_session_variables.htm'\)) are called APPLICATIONUSER, CDS\_CLIENT, LOCALE\_SAP, and SAP\_SYSTEM\_DATE and exist and are set independently of ABAP CDS and ABAP SQL. They can be accessed using the database function SESSION\_CONTEXT.

-   A further [ABAP-specific session variable](javascript:call_link\('abenhana_session_variables.htm'\)) CLIENT in the SAP HANA database always contains the current client of the ABAP session and is not modified by the ABAP SQL addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) or by ABAP calls of an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") (in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) is specified). The HANA session variable CLIENT does not have a corresponding variable in ABAP CDS.

-   For [input parameters](javascript:call_link\('abencds_parameter_list_v1.htm'\)) of CDS views annotated with the special annotation [environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)), ABAP SQL can pass the values of the session variables specified here automatically too. It is generally preferable to use this type of local input parameter.

-   In existing CDS views without corresponding input parameters, session variables can be passed to the input parameters of CDS views or CDS table functions used there.

-   When the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used to access a CDS view that uses the session client client, the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) can be used and sets the value of the session variable client for the duration of the ABAP SQL statement. The additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](javascript:call_link\('abapselect_client.htm'\)) plus the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) cannot be used.

-   In the [CDS-managed DDIC view](javascript:call_link\('abencds_mngdddic_view_glosry.htm'\) "Glossary Entry") of a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") whose [client handling](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) is set by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](javascript:call_link\('abencds_view_client_handling_v1.htm'\)), the value of the session variable client is used in WHERE conditions for the [client column](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry").

-   A CDS view that accesses a session variable directly or using a view cannot usually be [buffered](javascript:call_link\('abencds_v1_buffering.htm'\)). Only [client-dependent](javascript:call_link\('abencds_view_client_handling_v1.htm'\)) views that access the session variable client directly can be buffered.

Example

The following CDS view contains the possible session variables in the SELECT list. The program DEMO\_CDS\_SESSION\_VARIABLES uses ABAP SQL to access the view and fills the session variables with the associated values. Here, it is possible to define whether [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)) is used or not.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SESSVAR'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view demo\_cds\_session\_variables
  as select from
    demo\_expressions  
    {
      id,
      $session.user            as system\_user,
      $session.client          as system\_client,
      $session.system\_language as system\_language,
      $session.system\_date     as system\_date
    }

Example

The following CDS view DEMO\_CDS\_SELECT\_T100 accesses a further CDS view DEMO\_CDS\_SELECT\_T100\_LANGU with a language input parameter to which the annotation [environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) with the value system\_language is assigned. Unlike in ABAP SQL, there is no implicit pass of the actual parameter to the input parameter here and the corresponding session variable $session.system\_language is passed instead. The program DEMO\_CDS\_T100 uses ABAP SQL to access both views and the result is identical. When DEMO\_CDS\_SELECT\_T100\_LANGU is accessed, the value of the system field sy-langu is passed implicitly to the input parameter. When DEMO\_CDS\_SELECT\_T100 is accessed, the session variable $session.system\_language is filled with this value.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_T100'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_select\_t100
  as select from
    demo\_cds\_select\_t100\_langu( p\_langu: $session.system\_language )
    {
      \*
    }

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_T100\_LG'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_select\_t100\_langu
  with parameters
    @Environment.systemField:#SYSTEM\_LANGUAGE
    p\_langu : lang
  as select from
    t100
    {
      \*
    }
    where
          sprsl = :p\_langu
      and arbgb = 'SABAPDEMOS'