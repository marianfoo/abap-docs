---
title: "Syntax"
description: |
  ... $session.vname ... Effect Specifies a session variable(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm 'Glossary Entry') vname in an operand position in a SELECT statement(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_session_variable_v1.htm"
abapFile: "abencds_session_variable_v1.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "abencds", "session", "variable"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_and_expr_v1.htm) →  [CDS DDL - DDIC-Based View, Elementary CDS Operands](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_operands_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20session_variable%2C%20ABENCDS_SESSION_VARIABLE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

CDS DDL - DDIC-Based View, session\_variable

Syntax

... $session.vname ...

Effect

Specifies a [session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensession_variable_glosry.htm "Glossary Entry") vname in an operand position in a [SELECT statement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry"). The variable must be prefixed by $session.. The prefix and the variable are case-sensitive. $session.vname, $Session.Vname, and $SESSION.VNAME can all be used. No other spellings are allowed.

Session variables have a predefined name and are set to a predefined value when the CDS view is used in ABAP SQL. This also applies to CDS views that are used as data sources in other CDS views. The following session variables exist:

vname

Value when accessed using ABAP SQL

user

Current [user name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_name_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-uname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm). The returned value has the data type CHAR.

client

Current [client](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_glosry.htm "Glossary Entry"). The default value is the nominal value of the ABAP system field [sy-mandt](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm). In reads with an ABAP SQL statement (with the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm)) and in calls of an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") from ABAP (in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) is specified, the value specified here. The returned value has the data type CLNT, length 3.

system\_language

[Text environment language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_env_langu_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-langu](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm). The returned value has the data type LANG, length 1.

system\_date

Current [system date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_date_glosry.htm "Glossary Entry") of the AS ABAP, nominal value of the ABAP system field [sy-datum](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm). The returned value has the data type DATS, length 8.

user\_timezone

[User time zone](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-zonlo](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm). The returned value has the data type CHAR, length 6.

user\_date

Current [user date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_date_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-datlo](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm). The returned value is of data type DATS, length 8.

Hints

-   From a technical perspective, session variables indicate global variables of the current database that are set to their value when the CDS view is used in ABAP SQL. If ABAP SQL is not used to access a CDS view with session variables, the content of the variables is undefined (with the exception of the [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry")).
-   For [input parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_list_v1.htm) of CDS views annotated with the special annotation [environment.systemField](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm), ABAP SQL can pass the values of the session variables specified here automatically too. It is generally preferable to use this type of local input parameter.
-   In existing CDS views without corresponding input parameters, session variables can be passed to the input parameters of CDS views or CDS table functions used there.
-   In the [CDS-managed DDIC view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_mngdddic_view_glosry.htm "Glossary Entry") of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) is set by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm), the value of the session variable client is used in WHERE conditions for the [client column](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry").
-   A CDS view that accesses a session variable directly or using a view cannot usually be [buffered](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_buffering.htm). Only [client-dependent](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_client_handling_v1.htm) views that access the session variable client directly can be buffered.
-   The obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client_obsolete.htm) cannot be used either.
-   On a [SAP HANA database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") used as a [standard AS ABAP database](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_db_glosry.htm "Glossary Entry"), the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_session_variables.htm) are called APPLICATIONUSER, CDS\_CLIENT, LOCALE\_SAP, and SAP\_SYSTEM\_DATE and exist and are set independently of ABAP CDS and ABAP SQL. They can be accessed using the database function SESSION\_CONTEXT.
-   A further [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_session_variables.htm) CLIENT in the SAP HANA database always contains the current client of the ABAP session and is not modified by the ABAP SQL addition [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) or by ABAP calls of an [AMDP method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp_method_glosry.htm "Glossary Entry") (in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_amdp_options.htm) is specified). The HANA session variable CLIENT does not have a corresponding variable in ABAP CDS.
-   When the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) is used to access a CDS view that uses the session client client, the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) can be used and sets the value of the session variable client for the duration of the ABAP SQL statement. The additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) cannot be used.

Example

The following CDS view contains the possible session variables in the SELECT list. The class CL\_DEMO\_CDS\_SESSION\_VARIABLES uses ABAP SQL to access the view and fills the session variables with the associated values. It is possible to define whether [USING CLIENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_client.htm) is used or not.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_SESSVAR'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define view demo\_cds\_session\_variables
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

The following CDS view DEMO\_CDS\_SELECT\_T100 accesses a further CDS view DEMO\_CDS\_SELECT\_T100\_LANGU with a language input parameter to which the annotation [environment.systemField](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_parameter_annotations.htm) with the value system\_language is assigned. Unlike in ABAP SQL, there is no implicit pass of the actual parameter to the input parameter here and the corresponding session variable $session.system\_language is passed instead. The class CL\_DEMO\_CDS\_T100 uses ABAP SQL to access both views and the result is identical. When DEMO\_CDS\_SELECT\_T100\_LANGU is accessed, the value of the system field sy-langu is passed implicitly to the input parameter. When DEMO\_CDS\_SELECT\_T100 is accessed, the session variable $session.system\_language is filled with this value.

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