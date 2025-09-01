  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP10](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-740_sp10.htm) → 

ABAP CDS in Release 7.40, SP10

[1\. CDS access control](#!ABAP_MODIFICATION_1@1@)

Modification 1

CDS Access Control

A dedicated [access control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_access_control_glosry.htm "Glossary Entry") was introduced for [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry"). The new [CDS DCL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_dcl_syntax.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_cds_glosry.htm "Glossary Entry") makes it possible to define [CDS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_role_glosry.htm "Glossary Entry") roles. If a [CDS entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entity_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_glosry.htm "Glossary Entry") is associated with a CDS role, additional [access conditions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are evaluated by default when the CDS entity is accessed in an [SADL query](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensadl_glosry.htm "Glossary Entry") and only that data is read for which the current user has an authorization or that matches a literal condition.

Hint

From Release 7.51, SADL uses ABAP SQL to access CDS entities. From Release 7.50, ABAP SQL evaluates CDS roles implicitly.