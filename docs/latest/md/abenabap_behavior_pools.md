---
title: "ABAP Behavior Pools (ABP)"
description: |
  The ABAP behavior pool (ABP)(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm 'Glossary Entry') is a special class pool for an ABAP behavior implementation and based on a RAP behavior definition (BDEF)(https://help.sap.com/doc/abapdocu_latest_index_htm
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_behavior_pools.htm"
abapFile: "abenabap_behavior_pools.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abenabap", "behavior", "pools"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_provide_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20Behavior%20Pools%20%28ABP%29%2C%20ABENABAP_BEHAVIOR_POOLS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP Behavior Pools (ABP)

The [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is a special class pool for an ABAP behavior implementation and based on a [RAP behavior definition (BDEF)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The [global class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_for_behavior_of.htm) of the behavior pool does not implement the behavior itself. Instead, the behavior implementation is coded in one or more local RAP [handler classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class.htm) and one RAP [saver class](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class.htm) in the [CCIMP include](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenccimp_glosry.htm "Glossary Entry") of the behavior pool. These classes provide the unmanaged parts that are called by the [RAP runtime engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") when the [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") is accessed.

-   [CLASS, FOR BEHAVIOR OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_for_behavior_of.htm)
-   [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class.htm)
-   [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class.htm)

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_impl_rules.htm).

Continue
[CLASS, FOR BEHAVIOR OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapclass_for_behavior_of.htm)
[RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_class.htm)
[RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_saver_class.htm)