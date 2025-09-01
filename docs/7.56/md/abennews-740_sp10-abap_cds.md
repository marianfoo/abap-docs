  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.40 and Its SPs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740.htm) →  [News for Release 7.40, SP10](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-740_sp10.htm) → 

ABAP CDS in Release 7.40, SP10

Modification

CDS Access Control

A dedicated [access control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_access_control_glosry.htm "Glossary Entry") was introduced for [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry"). The new [CDS DCL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_dcl_syntax.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_cds_glosry.htm "Glossary Entry") makes it possible to define [CDS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_role_glosry.htm "Glossary Entry") roles. If a [CDS entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_glosry.htm "Glossary Entry") of a [CDS view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_glosry.htm "Glossary Entry") is linked with a CDS role, additional [access conditions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenaccess_condition_glosry.htm "Glossary Entry") are evaluated by default when the CDS entity is accessed by a query processed by [SADL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensadl_glosry.htm "Glossary Entry") and only that data is read for which the current user has an authorization or that matches a literal condition.

Hint

From Release 7.51, SADL uses ABAP SQL to access CDS entities. From Release 7.50, ABAP SQL evaluates CDS roles implicitly.