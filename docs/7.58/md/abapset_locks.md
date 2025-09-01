  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20LOCKS%2C%20ABAPSET_LOCKS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET LOCKS

Syntax Forms

[SET LOCKS ENTITY, Short Form](javascript:call_link\('abapset_locks_entity.htm'\))

1\. SET LOCKS ENTITY entity FROM inst *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

[SET LOCKS OF, Long Form](javascript:call_link\('abapset_locks_of.htm'\))

2\. SET LOCKS OF bdef
   ENTITY entity1 FROM inst1
  *\[*ENTITY entity2 FROM inst2*\]*
  *\[*...*\]*
  *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

[SET LOCKS lock\_tab, Dynamic Form](javascript:call_link\('abapset_locks_dyn.htm'\))

3\. SET LOCKS lock\_tab *\[*[response\_param](javascript:call_link\('abapeml_response.htm'\))*\]*.

Effect

Used to set [enqueue locks](javascript:call_link\('abensap_lock.htm'\)) for [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") to prevent the concurrent modification of instances. The [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") implicitly performs the lock for a subsequent modification. However, if the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") requires an exclusive lock so that no other user can modify the same instance in parallel, the statements can be used. The lock remains active until the end of a [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry").

In the BDEF, the [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry") must always be specified with lock master. All child entities are always lock dependent. Consequently, when child entities are requested to be locked, their corresponding instance of the root entity is locked. See more details on the BDEF prerequisites in the RAP BDL documentation for [locking](javascript:call_link\('abenbdl_locking.htm'\)).

The addition [response\_param](javascript:call_link\('abapeml_response.htm'\)) is optional. If an instance is already locked in parallel, information with the failure cause IF\_ABAP\_BHEV-LOCKED (see types contained in the interface IF\_ABAP\_BEHV) is returned in the FAILED response parameter.

The following variants of the statement SET LOCKS enable the exclusive locking of instances:

-   [SET LOCKS ENTITY, Short Form](javascript:call_link\('abapset_locks_entity.htm'\))
    
    The short form of the SET LOCKS statement allows instances of a single entity to be locked.
    
-   [SET LOCKS OF, Long Form](javascript:call_link\('abapset_locks_of.htm'\))
    
    The long form of the SET LOCKS statement allows instances of multiple entities to be locked.
    
-   [SET LOCKS lock\_tab, Dynamic Form](javascript:call_link\('abapset_locks_dyn.htm'\))
    
    The dynamic form of the SET LOCKS statement allows multiple instances to be collected and locked in multiple entities in one SET LOCKS statement.
    

Hints

-   SET LOCKS statements are only allowed in the [FOR LOCK](javascript:call_link\('abaphandler_meth_lock.htm'\)) and [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)) handler methods.
-   ABAP EML statements should not be used in loops. Using them can have a performance impact because it can result in multiple single database accesses. There should be only one ABAP EML statement to read the necessary data, and then the data should be modified with an ABAP EML modify request.

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](javascript:call_link\('abenrap_bo_contract_glosry.htm'\) "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](javascript:call_link\('abaprap_impl_rules.htm'\)).

Continue
[SET LOCKS ENTITY, Short Form](javascript:call_link\('abapset_locks_entity.htm'\))
[SET LOCKS OF, Long Form](javascript:call_link\('abapset_locks_of.htm'\))
[SET LOCKS lock\_tab, Dynamic Form](javascript:call_link\('abapset_locks_dyn.htm'\))