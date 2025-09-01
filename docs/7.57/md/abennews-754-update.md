  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Updates in Release 7.54, ABENNEWS-754-UPDATE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

Updates in Release 7.54

Modification

Authorization Checks in Updates

[No authorization checks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthority_during_update.htm) must be made in [updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_glosry.htm "Glossary Entry").

-   This rule was not always applied before Release 7.54:
    -   The statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm) only omitted authorization checks in [update sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_session_glosry.htm "Glossary Entry") and always set sy-subrc to 0 here.
    -   In [local updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocal_update_glosry.htm "Glossary Entry"), on the other hand, AUTHORITY-CHECK made an authorization check.
    -   When using ABAP SQL to access a CDS entity for which a CDS role is defined, implicit [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") was applied in local updates and in update sessions by default.
-   The following applies to [local updates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocal_update_glosry.htm "Glossary Entry") and to [update sessions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_session_glosry.htm "Glossary Entry") from Release 7.54:
    -   In updates, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm) always sets the value sy-subrc to 0 and does not make any authorization checks.
    -   [CDS access control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_access_control_glosry.htm "Glossary Entry") cannot take place. If the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) is used in an update to access a [CDS entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entity_glosry.htm "Glossary Entry") for which access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_anno_v1.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfrom_clause.htm) clause, the [runtime error](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenruntime_error_glosry.htm "Glossary Entry") SYSTEM\_UPDATE\_TASK\_ILL\_STMT occurs.