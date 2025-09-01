  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [Data Consistency](javascript:call_link\('abendata_consistency.htm'\)) →  [SAP LUW](javascript:call_link\('abensap_luw.htm'\)) →  [Controlled SAP LUW](javascript:call_link\('abencontrolling_sap_luw.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20API%20Classifications%2C%20ABAPAPI_CLASSIFICATION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

API Classifications

[Released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") can contain classifications to ensure transactional consistency within the [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"). In the context of the [controlled SAP LUW](javascript:call_link\('abencontrolled_sap_luw_glosry.htm'\) "Glossary Entry"), the classifications are used to control that functionality encapsulated by the APIs is only used in [transactional phases](javascript:call_link\('abentr_phase_glosry.htm'\) "Glossary Entry") where allowed.

This affects both a consumer and a provider of such an API. A consumer is not allowed to use classified APIs in certain contexts. Likewise, a provider is not allowed to use certain operations in its implementations. Violations of the transactional consistency are either logged or result in a runtime error.

The classifications are typically included as type definitions in interfaces, classes (in a local class include for all public and protected methods) and function modules (in the top include of the function group).

The [structured type](javascript:call_link\('abenstructured_type_glosry.htm'\) "Glossary Entry") tx\_contract contains components whose names are the names of those methods that are to be classified. tx\_contract is a predefined name. The individual components are typed with an [enumerated type](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") (ty) available in the IF\_ABAP\_TX\_\* interfaces. When used as shown below, the ABAP compiler interprets the methods as classified.

TYPES: BEGIN OF tx\_contract,
         method\_a TYPE if\_abap\_tx\_read=>ty,
         method\_b TYPE if\_abap\_tx\_modify=>ty,
         ...
       END OF tx\_contract.

The following table shows the classifications and what is allowed and what not:

Classification

Notes

Allowed

Not Allowed

IF\_ABAP\_TX\_FUNCTIONAL

Since such an API should have the character of a pure function, that is, it should only compute a mapping between its input and output parameters, the implementation scope for a provider of the API is very restricted.

ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)),
calling APIs tagged with IF\_ABAP\_TX\_FUNCTIONAL

ABAP EML requests,
[locks](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry"),
[authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"),
database modifying operations ([standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry")),
calling [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"),
calling [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"),
[PERFORM, ON COMMIT, ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\)),
[COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)),
implicit and explicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_SAVE, IF\_ABAP\_TX\_MODIFY, IF\_ABAP\_TX\_READ and IF\_ABAP\_TX\_SURFACE

IF\_ABAP\_TX\_READ

A consumer can call an API with this classification in the modify transactional phase. Permitted operations for a provider of the API include read requests.

ABAP EML read and permission requests,
ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)),
implicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
[authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_FUNCTIONAL and IF\_ABAP\_TX\_READ

ABAP EML modify requests,
ABAP EML requests [in local mode](javascript:call_link\('abapin_local_mode.htm'\)),
ABAP EML [key conversion](javascript:call_link\('abapconvert_key.htm'\)),
[locks](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry"),
database modifying operations ([standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry")),
calling [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"),
calling [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"),
[PERFORM, ON COMMIT, ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\)),
[COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)),
explicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_SAVE, IF\_ABAP\_TX\_MODIFY and IF\_ABAP\_TX\_SURFACE

IF\_ABAP\_TX\_MODIFY

A consumer can only call an API with this classification in the modify transactional phase. A provider of the API must not perform illegal operations.

ABAP EML read, modify, permission and lock requests,
ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)), [locks](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry"),
[authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"),
implicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_MODIFY, IF\_ABAP\_TX\_FUNCTIONAL and IF\_ABAP\_TX\_READ

ABAP EML requests [in local mode](javascript:call_link\('abapin_local_mode.htm'\)),
ABAP EML [key conversion](javascript:call_link\('abapconvert_key.htm'\)),
database modifying operations ([standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry")),
calling [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"),
calling [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"),
[PERFORM, ON COMMIT, ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\)),
[COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)),
explicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_SAVE and IF\_ABAP\_TX\_SURFACE

IF\_ABAP\_TX\_SAVE

A consumer can only call an API with this classification in the save transactional phase. A provider of the API must not perform illegal operations.

ABAP EML [RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\)),
ABAP EML read requests,
ABAP EML [key conversion](javascript:call_link\('abapconvert_key.htm'\)),
ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)),
[locks](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry"),
database modifying operations ([standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry")),
calling [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"),
calling [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"),
[PERFORM, ON COMMIT, ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\)),
calling APIs tagged with IF\_ABAP\_TX\_SAVE, IF\_ABAP\_TX\_FUNCTIONAL and IF\_ABAP\_TX\_READ

ABAP EML modify, permission and lock requests,
ABAP EML requests [in local mode](javascript:call_link\('abapin_local_mode.htm'\)),
[authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"),
[COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)),
implicit and explicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_SURFACE and IF\_ABAP\_TX\_MODIFY

IF\_ABAP\_TX\_SURFACE

A consumer cannot call an API with this classification from RAP BO implementations and from APIs with the other classifications. There are no restrictions for an API provider.

Each of the following operations is allowed within the API, but not in [behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry")
ABAP EML requests,
ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)),
[locks](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry"),
[authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"),
Database modifying operations ([standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry")),
calling [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"),
calling [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"),
[COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)),
implicit and explicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with each of the tags available

[PERFORM, ON COMMIT, ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\)),
ABAP EML requests [in local mode](javascript:call_link\('abapin_local_mode.htm'\)),
Note: Not to be called in [behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

IF\_ABAP\_TX\_COMPLETE

The call of the classified API is put under transactional control. When called, an API with this classification always starts in the modify transactional phase, as if the transactional phase had been explicitly set by calling cl\_abap\_tx=>modify( ). At any time during its execution, the API can enter the save transactional phase by calling cl\_abap\_tx=>save( ). From this point on, operations that violate the SAVE transactional contract are not allowed. When the API is exited, transactional control ends. An API with this classification must not be called from within a transactional contract, i.e. [ABAP behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"), APIs classified with a transactional contract (including IF\_ABAP\_TX\_COMPLETE itself) and a transactional phase that has been explicitly set (e.g. using cl\_abap\_tx=>modify( )).

[Locks](javascript:call_link\('abenlock_glosry.htm'\) "Glossary Entry"),
ABAP SQL [SELECT](javascript:call_link\('abapselect.htm'\)),
calling APIs tagged with IF\_ABAP\_TX\_FUNCTIONAL
Allowed in the modify phase in the API implementation:
ABAP EML read, permission, modify and lock requests,
[authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"),
implicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_READ and IF\_ABAP\_TX\_MODIFY
Allowed in the save phase in the API implementation:
[RAISE ENTITY EVENT](javascript:call_link\('abapraise_entity_event.htm'\)),
ABAP EML [key conversion](javascript:call_link\('abapconvert_key.htm'\)),
database modifying operations ([standard connection](javascript:call_link\('abenstandard_db_connection_glosry.htm'\) "Glossary Entry")),
calling [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry"),
calling [remote-enabled function modules](javascript:call_link\('abenremote_enabled_fm_glosry.htm'\) "Glossary Entry"),
[PERFORM, ON COMMIT, ROLLBACK](javascript:call_link\('abapperform_on_commit.htm'\)),
calling APIs tagged with IF\_ABAP\_TX\_SAVE

ABAP EML requests [in local mode](javascript:call_link\('abapin_local_mode.htm'\)),
[COMMIT WORK](javascript:call_link\('abapcommit.htm'\)), [ROLLBACK WORK](javascript:call_link\('abaprollback.htm'\)), [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)),
explicit [database commits](javascript:call_link\('abendatabase_commit_glosry.htm'\) "Glossary Entry"),
calling APIs tagged with IF\_ABAP\_TX\_SURFACE

Hint

The classifications have no dependency on RAP.

Example

The following code snippet demonstrates an interface that contains methods that are typed with classifications.

INTERFACE if\_some\_interface
  PUBLIC.
  TYPES: BEGIN OF tx\_contract,
           meth\_complete   TYPE if\_abap\_tx\_complete=>ty,
           meth\_read       TYPE if\_abap\_tx\_read=>ty,
           meth\_functional TYPE if\_abap\_tx\_functional=>ty,
           meth\_modify     TYPE if\_abap\_tx\_modify=>ty,
           meth\_save       TYPE if\_abap\_tx\_save=>ty,
           meth\_surface    TYPE if\_abap\_tx\_surface=>ty,
         END OF tx\_contract.
  METHODS:
    meth\_complete ...,
    meth\_functional ...,
    meth\_read ...,
    meth\_modify ...,
    meth\_save ...,
    meth\_surface ....
ENDINTERFACE.

Example

The following source code uses the GET\_CONTRACTS method of the CL\_ABAP\_BEHVDESCR class to retrieve the API classifications of methods contained in a class. See the classifications in the CCDEF include of the example class.

cl\_abap\_behvdescr=>get\_contracts(
  EXPORTING name      = 'CL\_DEMO\_CLASSIFIED\_APIS'
            kind      = 'K'
  IMPORTING contracts = DATA(contracts) ).
cl\_demo\_output=>display( contracts ).

Further Information

-   ABAP Concepts, topic [Controlled SAP LUW](https://help.sap.com/docs/ABAP_Cloud/f2961be2bd3d403585563277e65d108f/80fe04141e30456c80cc90c5cc838e94?version=sap_cross_product_abap)
-   [CL\_ABAP\_TX](javascript:call_link\('abaprap_cl_abap_tx.htm'\))
-   [RAP Implementation Rules](javascript:call_link\('abaprap_impl_rules.htm'\))
-   [Restrictions in RAP Handler and Saver Methods](javascript:call_link\('abapinvalid_stmts_in_rap_methods.htm'\))

Executable Example

The example [CL\_ABAP\_TX and API Classifications](javascript:call_link\('abencl_abap_tx_abexa.htm'\)) demonstrates classified APIs.