---
title: "ABAP Behavior Pools (ABP)"
description: |
  The ABAP behavior pool (ABP)(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm 'Glossary Entry') is a special class pool for an ABAP behavior implementation and based on a CDS behavior definition (BDEF)(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_behavior_pools.htm"
abapFile: "abenabap_behavior_pools.htm"
keywords: ["do", "try", "class", "abenabap", "behavior", "pools"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_provide_rap_bos.htm) → 

ABAP Behavior Pools (ABP)

The [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is a special class pool for an ABAP behavior implementation and based on a [CDS behavior definition (BDEF)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The [global class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_behavior_of.htm) of the behavior pool does not implement the behavior itself. Instead, the behavior implementation is coded in one or more local RAP [handler classes](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class.htm) and one RAP [saver class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm) in the [CCIMP include](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenccimp_glosry.htm "Glossary Entry") of the behavior pool. These classes provide the unmanaged parts that are called by the [RAP runtime engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") when the [RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") is accessed.

-   [CLASS, FOR BEHAVIOR OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_behavior_of.htm)
-   [RAP Handler Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class.htm)
-   [RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm)

Continue
[CLASS, FOR BEHAVIOR OF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_for_behavior_of.htm)
[RAP Handler Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_class.htm)
[RAP Saver Class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_saver_class.htm)