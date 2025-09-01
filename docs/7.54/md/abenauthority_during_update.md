  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [Data Consistency](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentransaction.htm) →  [SAP LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_luw.htm) → 

Authorization Checks in Updates

No authorization checks can be made during [updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_glosry.htm "Glossary Entry") (that is when processing an [update function module](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") triggered by [COMMIT WORK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcommit.htm)).

-   In updates, the statement [AUTHORITY-CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapauthority-check.htm) always sets the value sy-subrc to 0 and does not make any authorization checks.

-   [CDS access control](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_access_control_glosry.htm "Glossary Entry") cannot take place. If the ABAP SQL statement [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect.htm) is used in an update to access a [CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_entity_glosry.htm "Glossary Entry") for which access control is not disabled using the value #NOT\_ALLOWED for the annotation [@AccessControl.authorizationCheck](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_view_entity_annotations.htm) or using the addition [WITH PRIVILEGED ACCESS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in the [FROM](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) clause, the [runtime error](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenruntime_error_glosry.htm "Glossary Entry") SYSTEM\_UPDATE\_TASK\_ILL\_STMT occurs.

This applies to [local updates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlocal_update_glosry.htm "Glossary Entry") and to [update sessions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_session_glosry.htm "Glossary Entry").