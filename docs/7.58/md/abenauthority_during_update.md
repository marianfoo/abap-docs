  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Authorization%20Checks%20During%20an%20Update%2C%20ABENAUTHORITY_DURING_UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Authorization Checks During an Update

No authorization checks can be performed during an [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), that is, when processing an [update function module](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") triggered by [COMMIT WORK](javascript:call_link\('abapcommit.htm'\))).

-   During an update, the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) always sets the value sy-subrc to 0 and does not perform any authorization checks.
-   During an update, [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") is not allowed. If the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used during an update to access a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for which access control is not disabled, the [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") SYSTEM\_UPDATE\_TASK\_ILL\_STMT occurs. Access control can be disabled as follows:
    -   In the CDS entity: Using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_view_anno_v1.htm'\)).
    -   In ABAP SQL: Using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause.

This applies to [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry") and [update sessions](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry").