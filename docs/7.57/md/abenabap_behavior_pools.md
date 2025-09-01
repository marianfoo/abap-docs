---
title: "ABAP Behavior Pools (ABP)"
description: |
  The ABAP behavior pool (ABP)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm 'Glossary Entry') is a special class pool for an ABAP behavior implementation and based on a CDS behavior definition (BDEF)(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm"
abapFile: "abenabap_behavior_pools.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abenabap", "behavior", "pools"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP Behavior Pools \(ABP\), ABENABAP_BEHAVIOR_POOLS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ABAP Behavior Pools (ABP)

The [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is a special class pool for an ABAP behavior implementation and based on a [CDS behavior definition (BDEF)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). The [global class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_for_behavior_of.htm) of the behavior pool does not implement the behavior itself. Instead, the behavior implementation is coded in one or more local RAP [handler classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm) and one RAP [saver class](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm) in the [CCIMP include](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenccimp_glosry.htm "Glossary Entry") of the behavior pool. These classes provide the unmanaged parts that are called by the [RAP runtime engine](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_runtime_engine_glosry.htm "Glossary Entry") when the [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") is accessed.

-   [CLASS, FOR BEHAVIOR OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_for_behavior_of.htm)
-   [RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm)
-   [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm)

Further Information

Make sure that you fulfill the [RAP Business Object Contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_bo_contract.htm).

Continue
[CLASS, FOR BEHAVIOR OF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapclass_for_behavior_of.htm)
[RAP Handler Class and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm)
[RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm)