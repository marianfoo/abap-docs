---
title: "ABAP CDS - RAP Objects"
description: |
  RAP objects(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_object_glosry.htm 'Glossary Entry') are special CDS objects(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_object_glosry.htm 'Glossary Entry') that support ABAP RAP(https://help.sap.com/doc/a
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm"
abapFile: "abencds_rap_objects.htm"
keywords: ["do", "case", "try", "class", "data", "abencds", "rap", "objects"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) → 

ABAP CDS - RAP Objects

[RAP objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_object_glosry.htm "Glossary Entry") are special [CDS objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_object_glosry.htm "Glossary Entry") that support [ABAP RAP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_glosry.htm "Glossary Entry"):

-   [Service definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_service_definitions.htm) for [RAP business services (BS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_business_services.htm)
-   [Behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) for [RAP business objects (BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm)

RAP business services provide access to CDS entities by Web clients from outside an AS ABAP. Such an access can be a pure read access (query) or a transactional request.

-   For read accesses (queries), all accesses from the AS ABAP to the underlying database are encapsulated by the [RAP transactional engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry"). Normally, no own ABAP programming is necessary. Only in exceptional cases, special [CDS custom entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_custom_entity_glosry.htm "Glossary Entry") can be used, that are implemented in ABAP classes.
-   For transactional requests, RAP business objects (RAP BOs) are required. In a RAP BO, a behavior is defined by a CDS behavior definition for a CDS entity, that can be exposed by a RAP business service. The behavior is implemented by the managed RAP BO provider or in ABAP behavior implementations.

More information about ABAP RAP can be found under [ABAP RESTful Programming Model](https://help.sap.com/viewer/c0d02c4330c34b3abca88bdd57eaccfc/Cloud/en-US/3b77569ca8ee4226bdab4fcebd6f6ea6.html).

Continue
[ABAP CDS - RAP Business Services (BS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_business_services.htm)
[ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm)