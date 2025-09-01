  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [Data Consistency](javascript:call_link\('abentransaction.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) → 

Authorization Checks in Updates

No authorization checks can be made during [updates](javascript:call_link\('abenupdate_glosry.htm'\) "Glossary Entry") (that is when processing an [update function module](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") triggered by [COMMIT WORK](javascript:call_link\('abapcommit.htm'\))).

-   In updates, the statement [AUTHORITY-CHECK](javascript:call_link\('abapauthority-check.htm'\)) always sets the value sy-subrc to 0 and does not make any authorization checks.

-   [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry") cannot take place. If the ABAP SQL statement [SELECT](javascript:call_link\('abapselect.htm'\)) is used in an update to access a [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for which access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](javascript:call_link\('abencds_f1_view_entity_annotations.htm'\)) or using the addition [WITH PRIVILEGED ACCESS](javascript:call_link\('abapselect_data_source.htm'\)) in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause, the [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry") SYSTEM\_UPDATE\_TASK\_ILL\_STMT occurs.

This applies to [local updates](javascript:call_link\('abenlocal_update_glosry.htm'\) "Glossary Entry") and to [update sessions](javascript:call_link\('abenupdate_session_glosry.htm'\) "Glossary Entry").