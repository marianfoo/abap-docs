---
title: "Syntax"
description: |
  ... $session.vname ... Effect Specifies a session variable(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm 'Glossary Entry') vname in an operand position in a SELECT statement(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_session_variable.htm"
abapFile: "abencds_f1_session_variable.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abencds", "session", "variable"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_view.htm) →  [ABAP CDS - SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) →  [ABAP CDS - SELECT, Operands and Expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_operands_and_expressions.htm) → 

ABAP CDS - session\_variable

Syntax

... $session.vname ...

Effect

Specifies a [session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensession_variable_glosry.htm "Glossary Entry") vname in an operand position in a [SELECT statement](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_statement.htm) of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry"). The variable is case-sensitive. $session.vname, $Session.Vname, and $SESSION.VNAME can all be used. No other spellings are allowed.

Session variables have a predefined name and are set to a predefined value when the CDS view is used in ABAP SQL. This also applies to CDS views that are used as data sources in other CDS views. The following session variables exist:

vname

Valued when accessed using ABAP SQL

user

Current [user name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenuser_name_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-uname](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

client

Current [client](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_glosry.htm "Glossary Entry"). The default value is the nominal value of the ABAP system field [sy-mandt](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm). In reads with an ABAP SQL statement (with the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm)) and in calls of an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry") from ABAP (in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_amdp_options.htm) is specified, the value specified here.

system\_language

[Text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry"), nominal value of the ABAP system field [sy-langu](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

system\_date

Current [system date](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_date_glosry.htm "Glossary Entry") of the AS ABAP, nominal value of the ABAP system field [sy-datum](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensystem_fields.htm)

Notes

-   From a technical perspective, session variables indicate global variables of the current database that are set to their value when the CDS view is used in ABAP SQL. If ABAP SQL is not used to access a CDS view with session variables, the content of the variables is undefined (with the exception of the [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry")).

-   On a [SAP HANA database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_database_glosry.htm "Glossary Entry") used as a [standard AS ABAP database](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_db_glosry.htm "Glossary Entry"), the [ABAP-specific session variables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_session_variables.htm) are called APPLICATIONUSER, CDS\_CLIENT, LOCALE\_SAP, and SAP\_SYSTEM\_DATE and exist and are set independently of ABAP CDS and ABAP SQL. They can be accessed using the database function SESSION\_CONTEXT.

-   A further [ABAP-specific session variable](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhana_session_variables.htm) CLIENT in the SAP HANA database always contains the current client of the ABAP session and is not modified by the ABAP SQL addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) or by ABAP calls of an [AMDP method](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenamdp_method_glosry.htm "Glossary Entry") (in whose declaration the addition [AMDP OPTIONS CDS SESSION CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmethods_amdp_options.htm) is specified). The HANA session variable CLIENT does not have a corresponding variable in ABAP CDS.

-   For [input parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_list.htm) of CDS views annotated with the special annotation [environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm), ABAP SQL can pass the values of the session variables specified here automatically too. It is generally preferable to use this type of local input parameter.

-   In existing CDS views without corresponding input parameters, session variables can be passed to the input parameters of CDS views or CDS table functions used there.

-   When the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) is used to access a CDS view that uses the session client client, the addition [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) can be used and is respected in the session variable for the duration of the ABAP SQL statement. The additions [USING *\[*ALL*\]* CLIENTS *\[*IN*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) plus the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) cannot be used.

-   In the [CDS database view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_database_view_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") whose [client handling](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) is set by the annotation [@ClientHandling.algorithm: #SESSION\_VARIABLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm), the value of the session variable client is used in WHERE conditions for the [client column](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenclient_column_glosry.htm "Glossary Entry").

-   A CDS view that accesses a session variable directly or using a view cannot usually be [buffered](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_sap_puffer.htm). Only [client-specific](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_client_handling.htm) views that access the session variable client directly can be buffered.

Example

The following CDS view contains the possible session variables in the SELECT list. The program DEMO\_CDS\_SESSION\_VARIABLES uses ABAP SQL to access the view and fills the session variables with the associated values. Here, it is possible to define whether [USING CLIENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) is used or not.

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

The following CDS view DEMO\_CDS\_SELECT\_T100 accesses a further CDS view DEMO\_CDS\_SELECT\_T100\_LANGU with a language input parameter to which the annotation [environment.systemField](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_parameter_annotations.htm) with the value system\_language is assigned. Unlike in ABAP SQL, there is no implicit pass of the actual parameter to the input parameter here and the corresponding session variable $session.system\_language is passed instead. The program DEMO\_CDS\_T100 uses ABAP SQL to access both views and the result is identical. When DEMO\_CDS\_SELECT\_T100\_LANGU is accessed, the value of the system field sy-langu is passed implicitly to the input parameter. When DEMO\_CDS\_SELECT\_T100 is accessed, the session variable $session.system\_language is filled with this value.

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