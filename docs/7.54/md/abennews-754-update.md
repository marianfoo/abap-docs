  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abennews-754.htm) → 

Updates in Release 7.54

[1\. Authorization checks in updates](#!ABAP_MODIFICATION_1@1@)

Modification 1

Authorization Checks in Updates

[No authorization checks](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenauthority_during_update.htm) must be made in [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry").

-   This rule was not always applied before Release 7.54:
    

-   The statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapauthority-check.htm) only omitted authorization checks in [update sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_session_glosry.htm "Glossary Entry") and always set sy-subrc to 0 here.

-   In [local updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_update_glosry.htm "Glossary Entry"), on the other hand, AUTHORITY-CHECK made an authorization check.

-   When using ABAP SQL to access a CDS entity for which a CDS role is defined, implicit [CDS access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") was applied in local updates and in update sessions by default.

-   The following applies to [local updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_update_glosry.htm "Glossary Entry") and to [update sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_session_glosry.htm "Glossary Entry") from Release 7.54:
    

-   In updates, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapauthority-check.htm) always sets the value sy-subrc to 0 and does not make any authorization checks.

-   [CDS access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") cannot take place. If the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) is used in an update to access a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") for which access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) clause, the [runtime error](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry") SYSTEM\_UPDATE\_TASK\_ILL\_STMT occurs.