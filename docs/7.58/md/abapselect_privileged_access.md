  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [SELECT, clauses](javascript:call_link\('abenselect_clauses.htm'\)) →  [SELECT, abap\_options](javascript:call_link\('abapselect_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SELECT%2C%20PRIVILEGED%20ACCESS%2C%20ABAPSELECT_PRIVILEGED_ACCESS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SELECT, PRIVILEGED ACCESS

Syntax

... PRIVILEGED ACCESS ...

Effect

The addition PRIVILEGED ACCESS disables [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") for all [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") accessed in the current SELECT statement. Any [access conditions](javascript:call_link\('abenaccess_condition_glosry.htm'\) "Glossary Entry") that are defined for a CDS entity by a [CDS role](javascript:call_link\('abencds_role_glosry.htm'\) "Glossary Entry") are not evaluated.

The addition PRIVILEGED ACCESS cannot be used together with the following additions:

-   [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) of the FROM clause that affects only one CDS entity.
-   [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) for disabling the implicit ABAP SQL [client handling](javascript:call_link\('abenclient_handling_glosry.htm'\) "Glossary Entry"), It can be used with [USING CLIENT, CLIENTS](javascript:call_link\('abapselect_client.htm'\)).

Hints

-   The addition PRIVILEGED ACCESS overrides all delivered and user-defined roles.
-   CDS access control can also be disabled using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED when a non-abstract CDS entity is defined.
-   In contrast to the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) of the FROM clause, PRIVILEGED ACCESS prevents the evaluation of any conditions from CDS access control for the complete SELECT statement. In particular, CDS access control is also disabled for entities that are addressed by a [SQL path expression](javascript:call_link\('abenabap_sql_path.htm'\)).
-   If the addition PRIVILEGED ACCESS is specified, the syntax check is performed in [strict mode from ABAP release 7.58](javascript:call_link\('abenabap_sql_strictmode_758.htm'\)).
-   In [updates](javascript:call_link\('abenauthority_during_update.htm'\)), either the addition PRIVILEGED ACCESS or [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) must be specified for all CDS entities for which CDS access control is not disabled using the annotation @AccessControl.authorizationCheck:#NOT\_ALLOWED.

Example

Use of the addition PRIVILEGED ACCESS for a SELECT statement that accesses the CDS view DEMO\_CDS\_AUTHORITY\_LITERAL\_2, which is linked with the following CDS role:

@MappingRole: true
define role demo\_cds\_role\_literal\_2 {
  grant select on demo\_cds\_authority\_literal\_2
  where carrid = 'LH'; }

Unlike using the class CL\_DEMO\_CDS\_AUTH\_LITERAL, all data of the view are read.

SELECT \*
       FROM demo\_cds\_authority\_literal\_2
       ORDER BY carrid
       INTO TABLE @FINAL(result)
       PRIVILEGED ACCESS.
cl\_demo\_output=>display( result ).