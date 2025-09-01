  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) → 

ABAP CDS - Behavior Definitions

\* Work in progress \*

A [CDS behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") is created using [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm "Glossary Entry") in [BDL source code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbdl_source_code_glosry.htm "Glossary Entry").

A business object behavior definition (behavior definition for short) is an ABAP repository object (a source text artifact) that represents the behavior of the [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") in the context of [ABAP RAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_rap_glosry.htm "Glossary Entry").

A behavior definition always references a CDS data model. The matching name of the CDS entity ensures that a behavior definition has a reference to the data model. This also means that the data model must always exist before the behavior definition, as shown in the following example:

The CDS definition define root view /DMO/I\_Travel ... must exist before a behavior definition /DMO/I\_Travel can be created. The CDS view /DMO/I\_Travel is the [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparent_entity_glosry.htm "Glossary Entry") in the data structure.

Once the behavior definition is created, the root entity becomes a transactional entity and can, in principle, be used in modifying REST operations. All operations in the specific business object that have transactional support must be specified in this behavior definition.

The transactional behavior of a CDS entity is modeled using CDS Behavior Definition Language ([CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm "Glossary Entry")).

Rules

-   A root entity can have at most one behavior definition, in which the behavior of the child entities may need to be specified too. Conversely, a behavior definition has exactly one root entity.

-   The [implementation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_behavior_pools.htm) of a behavior definition can be made in both a single ABAP class (a [behavior pool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_pool_glosry.htm "Glossary Entry")) or spread across any number of ABAP classes (behavior pools). This means that any number of behavior pools can be assigned to a behavior definition (a 1:n relation).

Continue
[ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_bdl_syntax.htm)