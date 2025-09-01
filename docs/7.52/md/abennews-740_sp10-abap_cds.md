  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740.htm) →  [Changes in Release 7.40, SP10](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-740_sp10.htm) → 

ABAP CDS in Release 7.40, SP10

[1\. CDS access control](#!ABAP_MODIFICATION_1@1@)

Modification 1

CDS Access Control

A dedicated [access control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_access_control_glosry.htm "Glossary Entry") was introduced for [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry"). The new [CDS DCL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_dcl_syntax.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_cds_glosry.htm "Glossary Entry") makes it possible to define [CDS roles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_role_glosry.htm "Glossary Entry"). If a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") is associated with a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") with a CDS role, additional [access conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are evaluated by default when the CDS entity is accessed in an [SADL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensadl_glosry.htm "Glossary Entry") query and only that data is read for which the current user has an authorization or that matches a literal condition.

Note

From Release 7.51, SADL uses Open SQL to access CDS entities. Open SQL evaluates CDS roles implicitly from Release 7.50.