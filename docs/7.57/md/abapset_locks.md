---
title: "SET LOCKS"
description: |
  Syntax Forms SET LOCKS ENTITY, Short Form(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_entity.htm) 1. SET LOCKS ENTITY bdef FROM inst response_param(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm). SET LOCKS OF, Long Form(h
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks.htm"
abapFile: "abapset_locks.htm"
keywords: ["select", "loop", "do", "if", "try", "abapset", "locks"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET LOCKS, ABAPSET_LOCKS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

SET LOCKS

Syntax Forms

[SET LOCKS ENTITY, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_entity.htm)
1\. SET LOCKS ENTITY bdef FROM inst *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
[SET LOCKS OF, Long Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_of.htm)
2\. SET LOCKS OF bdef
   ENTITY bdef1 FROM inst1
  *\[*ENTITY bdef2 FROM inst2*\]*
  *\[*...*\]*
  *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.
[SET LOCKS lock\_tab, Dynamic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_dyn.htm)
3\. SET LOCKS lock\_tab *\[*[response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm)*\]*.

Effect

Used to set [enqueue locks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_lock.htm) for [RAP BO instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") to prevent the concurrent modification of instances. The locking for a subsequent modification is implicitly done by the [RAP framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_framework_glosry.htm "Glossary Entry"). However, if the [RAP BO consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") requires an exclusive locking so that no other user can change the same instance in parallel, the statements can be used. The lock is active until the end of a [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry").

In the BDEF, the root entity must always be specified with lock master. All child entities are always lock dependent. Consequently, when child entities are requested to be locked, their corresponding instance of the root entity is locked. See more details on the BDEF prerequisites in the CDS BDL documentation for [locking](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_locking.htm).

The addition [response\_param](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) is optional. If an instance is already locked in parallel, information with the failure cause IF\_ABAP\_BHEV-LOCKED is returned in the FAILED response parameter. See the interface IF\_ABAP\_BEHV.

The following variants of the statement SET LOCKS enable the exclusive locking of instances:

-   [SET LOCKS ENTITY, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_entity.htm)
    
    The short form of the SET LOCKS statement allows instances of a single entity to be locked.
    
-   [SET LOCKS OF, Long Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_of.htm)
    
    The long form of the SET LOCKS statement allows instances of multiple entities to be locked.
    
-   [SET LOCKS lock\_tab, Dynamic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_dyn.htm)
    
    The dynamic form of the SET LOCKS statement allows multiple instances to be collected and locked in multiple entities in one SET LOCKS statement.
    

Hint

-   ABAP EML statements should not be used within loops.

Further Information

Make sure that you fulfill the [RAP Business Object Contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_bo_contract.htm).

Continue
[SET LOCKS ENTITY, Short Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_entity.htm)
[SET LOCKS OF, Long Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_of.htm)
[SET LOCKS lock\_tab, Dynamic Form](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locks_dyn.htm)