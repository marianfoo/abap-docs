  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP and SAP HANA](javascript:call_link\('abenabap_hana.htm'\)) → 

ABAP-Specific Session Variables in SAP HANA

Session variables are global variables in the SAP HANA database. They can be read there with the built-in function [SESSION\_CONTEXT](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html) and given a value using the statement [SET](https://help.sap.com/viewer/4fe29514fd584807ac9f2a04f6754767/2.0.04/en-US/b4b0eec1968f41a099c828a4a6c8ca0f.html) 'VAR' = :value; (SAP HANA Platform SPS12 and higher). Session variables contain global information about the current context and are hence similar to [ABAP system fields](javascript:call_link\('abensystem_field_glosry.htm'\) "Glossary Entry"). In particular, their value should only be changed in exceptional application logic cases, for example, in [SQLScript](javascript:call_link\('abensql_script_glosry.htm'\) "Glossary Entry").

When a SAP HANA database is used as the [standard AS ABAP database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"), the following session variables are filled with ABAP-specific values in ABAP reads:

-   CLIENT contains the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of the ABAP system field [sy-mandt](javascript:call_link\('abensystem_fields.htm'\)).
-   CDS\_CLIENT like CLIENT but with the following differences:
    -   CDS\_CLIENT is set to the specified value when the database is accessed with an ABAP SQL statement with the addition [USING CLIENT](javascript:call_link\('abapselect_client.htm'\)).
    -   During an [AMDP method](javascript:call_link\('abenamdp_method_glosry.htm'\) "Glossary Entry") call from ABAP, where the addition [AMDP OPTIONS CDS SESSION CLIENT](javascript:call_link\('abapmethods_amdp_options.htm'\)) is specified in the declaration, CDS\_CLIENT is set to the value specified there.
-   APPLICATIONUSER contains the current [user name](javascript:call_link\('abenuser_name_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of the ABAP system field [sy-uname](javascript:call_link\('abensystem_fields.htm'\)).
-   LOCALE\_SAP contains the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") in accordance with the nominal value of the ABAP system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)).
-   SAP\_SYSTEM\_DATE contains the current [system date](javascript:call_link\('abensystem_date_glosry.htm'\) "Glossary Entry") of the AS ABAP in accordance with the nominal value of ABAP system field [sy-datum](javascript:call_link\('abensystem_fields.htm'\)).

Hints

-   The ABAP-specific session variables can be read, for example, in [AMDP methods](javascript:call_link\('abenamdp_hdb_sqlscript.htm'\)) and make the corresponding input parameters superfluous. Such a method should only be called up from ABAP programs. Otherwise, it cannot be guaranteed that the variables will be provided with the correct values. However, writes to session variables with the SQLScript statement SET are not allowed in AMDP methods.
-   In the CDS DDL of the [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"), the syntax $session.vname can be used in the definition of a [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or a [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") to access the ABAP-specific session variables. The name vname is then different from the name shown here. The CDS session variable client accesses CDS\_CLIENT, not CLIENT. When a CDS view is accessed using [ABAP SQL](javascript:call_link\('abenabap_sql_glosry.htm'\) "Glossary Entry"), the session variables are available on all supported database platforms and not just on the SAP HANA database.
-   In ABAP reads, regardless of whether they are in ABAP SQL, Native SQL, or AMDP, the session variable LOCALE\_SAP contains the current value of the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry"), which can be set by the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

Example

Reading of the session variable APPLICATIONUSER using [ADBC](javascript:call_link\('abenadbc_glosry.htm'\) "Glossary Entry").

DATA uname TYPE sy-uname.
TRY.
    DATA(result) = NEW cl\_sql\_statement( )->execute\_query(
        \`select SESSION\_CONTEXT('APPLICATIONUSER') from DUMMY\` ).
    result->set\_param( REF #( uname ) ).
    result->next( ).
    cl\_demo\_output=>display( uname ).
  CATCH cx\_sql\_exception.
    ...
ENDTRY.

Executable Example

The example [SAP HANA, ABAP-Specific Session Variables](javascript:call_link\('abenhana_session_variables_abexa.htm'\)) shows different ways of accessing the session variables specified here.