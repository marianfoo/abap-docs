  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_consistency.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Authorization%20Checks%20During%20an%20Update%2C%20ABENAUTHORITY_DURING_UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Authorization Checks During an Update

No authorization checks can be performed during an [update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_glosry.htm "Glossary Entry"), that is, when processing an [update function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") triggered by [COMMIT WORK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm)).

-   During an update, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapauthority-check.htm) always sets the value sy-subrc to 0 and does not perform any authorization checks.
-   During an update, [CDS access control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_access_control_glosry.htm "Glossary Entry") is not allowed. If the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) is used during an update to access a [CDS entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entity_glosry.htm "Glossary Entry") for which access control is not disabled, the [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry") SYSTEM\_UPDATE\_TASK\_ILL\_STMT occurs. Access control can be disabled as follows:
    -   In the CDS entity: Using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_anno_v1.htm).
    -   In ABAP SQL: Using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfrom_clause.htm) clause.

This applies to [local updates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocal_update_glosry.htm "Glossary Entry") and [update sessions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_session_glosry.htm "Glossary Entry").