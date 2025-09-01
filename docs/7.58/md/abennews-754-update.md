  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.54](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Updates%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-UPDATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Updates in ABAP Release 7.54

Modification

Authorization Checks in Updates

[No authorization checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthority_during_update.htm) must be made in [updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_glosry.htm "Glossary Entry").

-   This rule was not always applied before ABAP release 7.54:
    -   The statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm) made no authorization checks in [update sessions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_session_glosry.htm "Glossary Entry") but always set sy-subrc to 0 here.
    -   The statement AUTHORITY-CHECK made an authorization check In [local updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_update_glosry.htm "Glossary Entry"),
    -   When using ABAP SQL to access a CDS entity for which a CDS role is defined, implicit [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry") was applied by default in update sessions and in local updates.
-   From ABAP release 7.54, the following applies to [update sessions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenupdate_session_glosry.htm "Glossary Entry") and to [local updates](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlocal_update_glosry.htm "Glossary Entry"):
    -   In updates, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm) does not make any authorization checks but sets the value sy-subrc always to 0.
    -   In updates, [CDS access control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_access_control_glosry.htm "Glossary Entry") is not allowed. If the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect.htm) is used during an update to access a [CDS entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_glosry.htm "Glossary Entry") for which access control is not disabled, the [runtime error](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenruntime_error_glosry.htm "Glossary Entry") SYSTEM\_UPDATE\_TASK\_ILL\_STMT occurs. Access control can be disabled as follows:
        
        In the CDS entity: Using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_anno_v1.htm).
        
        In ABAP SQL: Using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfrom_clause.htm) clause.