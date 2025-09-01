  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Authorization Checks During an Update, ABENAUTHORITY_DURING_UPDATE, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Authorization Checks During an Update

No authorization checks can be performed during an [update](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry"), that is, when processing an [update function module](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") triggered by [COMMIT WORK](javascript:call_link\('abapcommit.htm'\))).

-   During an update, the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) always sets the value sy-subrc to 0 and does not perform any authorization checks.
-   During an update, [PFCG conditions](javascript:call_link\('abenpfcg_condition_glosry.htm'\) "Glossary Entry") of the [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") that are based on authorizations in transaction PFCG are implicitly evaluated in such a way as if the current user had full authorization for all authorization fields of the respective authorization object.

This applies to [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry") and [update sessions](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry").