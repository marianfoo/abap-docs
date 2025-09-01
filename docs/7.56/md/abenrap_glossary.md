  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) → 

RAP Glossary

RAP stands for the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"). In the following, terms of the [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) are listed, that are relevant for RAP.

ABAP EML

→ [ABAP Entity Manipulation Language](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry")

ABAP behavior implementation

An ABAP behavior implementation implements the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). The implementation takes place in local classes of an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

ABAP behavior pool

ABP for short. A special [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") for an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"). A behavior pool is based on a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). The name of the [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") of a behavior pool is usually prefixed with BP\_ but does not implement the behavior itself. The [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") is coded in local [ABP handler classes](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") and [ABP saver classes](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of the behavior pool. These classes implement the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") that is called by the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") when the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is accessed.

ABAP Entity Manipulation Language

ABAP EML or EML for short. Subset of ABAP that allows access to [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"). When EML statements are executed for a RAP BO, [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") are called to access the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of the BO. The communication between EML and the RAP BO consists of sending and receiving internal tables of special [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). ABAP EML can be used in any program to access RAP BOs and especially in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") in order to access the transactional buffer of the RAP BO.

ABAP RESTful Application Programming Model

Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") or that meets the requirements of a [REST](javascript:call_link\('abenrest_glosry.htm'\) "Glossary Entry") architecture. In ABAP RAP, [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") plays the role of a stateless Web server. [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The modeling is based on [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and special [CDS RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry").

For queries, CDS entities can be directly exposed by [business services](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") and all data can be retrieved by the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"). For transactional access to data, the model offers [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), whose behavior is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"), or is implemented in [ABAP behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

BDEF derived type

Type of an internal table or structure that is derived by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") from the [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). Such internal tables are used for the communication between [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") and [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry"). For that, the parameters of a method that implements [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") are typed with BDEF derived types. In [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"), BDEF derived types can be used to declare internal tables or structures to be passed to parameters of [RAP handler](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") and [saver classes](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry").

BDEF extension

A [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that extends a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

BDEF privileged mode

With BDEF privileged mode, [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") can circumvent [authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"), such as  [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") or  [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"). BDEF privileged mode is prerequisite to use the addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) in [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") when consuming the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").  

BDEF strict mode

In BDEF strict mode, there is a stricter syntax check that produces a syntax error for outdated syntax.

BOPF-managed RAP BO provider

Part of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") that provides the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") for BOPF-managed [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

BOPF-managed RAP draft provider

Draft provider of [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") with BOPF-managed draft. The [draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") is managed by BOPF.

business service

BS for short. A business service is a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") service in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). It consists of a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") and a [service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry").

CCIMP include

[Include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") of a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") that is included behind the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") and in front of the [implementation part](javascript:call_link\('abenimplementation_part_glosry.htm'\) "Glossary Entry") of the [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). It can be edited in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") by navigating to Local Definitions/Implementations and in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") by navigating to Local Types. The internal name of the include program ends with CCIMP. See also [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry").

CDS abstract behavior definition

CDS abstract BDEF or abstract BDEF for short. A CDS abstract behavior definition is a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") abstract. It is based on a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") and it mainly serves as typing mechanism for deep action or function parameters.

CDS behavior definition

CDS BDEF or BDEF for short. A CDS behavior definition is a [RAP object](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry") that describes a [RAP business object (RAP BO)](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") by defining its behavior for all its [BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). A BDEF is written in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry") using language elements in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") of [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry").

CDS projection behavior definition

CDS projection BDEF or projection BDEF for short. A CDS projection behavior definition is a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") projection. It is based on a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") and it represents a projection of a base behavior definition. It exposes a subset of the base BDEF's operations and characteristics. In addition, it can define specific new behavior, such as [augmentation](javascript:call_link\('abenrap_bo_augmentation_glosry.htm'\) "Glossary Entry"). 

cross-BO association

[Association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") that is not part of a [RAP business object's](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"), but has an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") that is part of a foreign business object.

CRUD operations

Acronym for Create, Read, Update, and Delete, which are the four basic operations for persistent data storage.

-   In [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry"), the four operations are implemented by the [DML](javascript:call_link\('abendml_glosry.htm'\) "Glossary Entry") statements INSERT, SELECT, UPDATE, and DELETE.
-   In the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"), the four operations can be specified in a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") using the [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") syntax elements create, read, update, and delete.
    
    [→ More about](javascript:call_link\('abenbdl_standard_operations.htm'\))
    

CUD operations

Synonym for [RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry"). [Create](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenrap_update_operation_glosry.htm'\) "Glossary Entry"), and [delete](javascript:call_link\('abenrap_delete_operation_glosry.htm'\) "Glossary Entry") operations in [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

draft-enabled RAP business object

Draft-enabled RAP BO for short. A [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that supports [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"). A RAP BO is draft-enabled with the CDS BDL syntax addition [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).

EML

→ [ABAP Entity Manipulation Language](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry")

extended RAP business object

A [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that was extended by a [RAP BO extension](javascript:call_link\('abenrap_bo_extension_glosry.htm'\) "Glossary Entry").

instance RAP BO operation

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that is bound to a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

internal RAP BO operation

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that can only be executed by the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") of the same [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

managed RAP BO provider

Part of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") that provides [managed transactional buffers](javascript:call_link\('abenmanaged_trans_buff_glosry.htm'\) "Glossary Entry") and managed behavior of [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") based on their [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

managed RAP business object

Managed RAP BO for short. Provisioning type of the [business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of a managed RAP BO is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). The implementation can partly be provided by an [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

managed transactional buffer

[Transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). A managed transactional buffer can be accessed in [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") by [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") only.

mandatory RAP BO field

A [field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") in a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined as mandatory in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). A non-initial value must be passed to this field in every create request and it cannot be initialized in a [modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry").

optimistic concurrency control

Optimistic [concurrency control](javascript:call_link\('abenrap_conc_control_glosry.htm'\) "Glossary Entry") enables transactional access to data by multiple users while avoiding inconsistencies by unintentional changes of already modified data. In [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") this is ensured by using an [ETag field](javascript:call_link\('abenbdl_etag.htm'\)) in the [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

pessimistic concurrency control

Pessimistic [concurrency control](javascript:call_link\('abenrap_conc_control_glosry.htm'\) "Glossary Entry") prevents simultaneous modification access to data on the database by more than one user. In [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") this is ensured by the [RAP locking mechanism](javascript:call_link\('abenrap_locking_glosry.htm'\) "Glossary Entry").

RAP

→ [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry")

RAP action

A [RAP BO non-standard operation](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry") that modifies the state of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

There are different types or RAP actions:

-   [RAP factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry")
-   [RAP non-factory actions](javascript:call_link\('abenrap_non_fac_action_glosry.htm'\) "Glossary Entry")

RAP active instance

[RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") in a [draft-enabled RAP business object](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") for which a commit triggers the saving to the [persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry"). The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") of such an instance has the [draft indicator](javascript:call_link\('abenrap_draft_indicator_glosry.htm'\) "Glossary Entry") set to false. An active instance can be produced by a [create operation](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry") or by the [draft action](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") Activate in draft scenarios.

RAP additional save

Save logic which can be added to [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") to enhance the default [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). It can be applied for the complete [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") by defining it in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry"), or for an individual entity by defining it in the [behavior entity characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"). It is implemented in the redefined [saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") save\_modified.

RAP authorization control

An access restriction that protects a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") against unauthorized access to data. It limits access to data or the permission to perform [operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"). Authorization control can be global or instance or both.

-   Global authorization is independent of individual [instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry").
-   Instance authorization is dependent on the state of an [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP authorization dependent entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that uses the [authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") that is defined on its [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry"). It delegates authorization requests to the implementation of the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry"). 

RAP authorization master entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that has its own authorization implementation. The implementation is used when requesting access to the authorization master entity or to any of its [authorization dependent entities](javascript:call_link\('abenrap_auth_dep_ent_glosry.htm'\) "Glossary Entry").

RAP behavior extension

Any [RAP extension](javascript:call_link\('abenrap_bo_extension_glosry.htm'\) "Glossary Entry") element that is part of the [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") or the [projection BDEF extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry").

RAP BO augmentation

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") addition that must be implemented by an [ABP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry"). Augmentation is defined in the [projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") for [RAP standard operations](javascript:call_link\('abenrap_standard_operation_glosry.htm'\) "Glossary Entry").

The implementation is called when a [modify request](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") reaches the [business object projection](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") to add data to the request before it is passed to the corresponding handler of the [projected business object](javascript:call_link\('abenrap_projected_bo_glosry.htm'\) "Glossary Entry").

RAP BO consumer

Software that consumes the implementation of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). A RAP BO consumer is either the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") that handles requests from outside the [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") or an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") using [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry").

RAP BO determine action

Determine actions are specific [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") that execute [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") on request. Their implementation is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

RAP BO draft action

Draft actions are specific [actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") whose implementation is provided by the [RAP managed draft provider](javascript:call_link\('abenrap_man_draft_provider_glosry.htm'\) "Glossary Entry"). They are invoked during the lifecycle of a [draft-enabled RAP BO](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") to manage the state of [draft](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry") and [active instances](javascript:call_link\('abenrap_active_instance_glosry.htm'\) "Glossary Entry").

RAP BO entity

Also RAP BO node. [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for which behavior is defined in a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP BO entity instance

Also RAP BO node instance. Concrete data set of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that is identified by a key. During a [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), a RAP BO entity instance is processed in the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). Then it is saved to the database table during the [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

RAP BO extension

A [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that extends a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). Examples are [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") or [CDS view extensions](javascript:call_link\('abencds_view_extend_glosry.htm'\) "Glossary Entry").

RAP BO field

An element of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

RAP BO instance

Concrete data set of a [BO composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"). One BO instance at least consists of one [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") instance. Furthermore, it includes all [entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") with a compositional relationship to the root entity instance.

RAP BO interface

A [development object](javascript:call_link\('abendevelopment_object_glosry.htm'\) "Glossary Entry") that projects a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") for stable consumption. If released as a [released API](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry") with the [C1 contract](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry"), a BO interface is used as an API and consolidates the data model and behavior of a RAP BO for consumption.

RAP BO non-standard operation

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that does not provide canonical transactional behavior for a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), for example [actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"). Most non-standard operations must be implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

RAP BO operation

Operation of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). RAP BO operations are [CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") operations, [non-standard operations](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry"), and the [lock operation](javascript:call_link\('abenlock_operation_glosry.htm'\) "Glossary Entry"). The implementation of a RAP BO operation implements the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") by accessing the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). A RAP BO can be accessed by using RAP operations. The parameters of a RAP BO method are mainly typed with special [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

RAP BO precheck

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") addition that must be implemented by a [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry"). A precheck is defined for operations in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of a base business object or in the [projection business object](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry").

The implementation method is called before a modify request is executed on the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") to prevent unwanted changes from reaching the transactional buffer.

RAP BO provider

Software that provides the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the implementation of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") based on its [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

-   A [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") is provided fully or partly by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").
-   An [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") is fully provided by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

RAP BO standard operation

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that provides canonical transactional behavior for a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), standard operations can be provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

[Create](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), [read](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenrap_update_operation_glosry.htm'\) "Glossary Entry"), [delete](javascript:call_link\('abenrap_delete_operation_glosry.htm'\) "Glossary Entry") ([CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry")) and [lock](javascript:call_link\('abenlock_operation_glosry.htm'\) "Glossary Entry") are standard operations. [Actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), in contrast, are [non-standard operations](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry"). That means they are application-specific and self-implemented.

RAP buffer data

Data on the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") that is either in an active or a draft state.

RAP business object

RAP BO for short. [Business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") in the context of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). A RAP BO is mainly described by a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") that defines the [RAP business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") for a set of special hierarchical [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in form of RAP behavior operations and behavior characteristics. A RAP BO has [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") to handle its data that are available in a [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). There are two kinds of RAP BOs:

-   [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that are fully or partly provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry")
-   [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that are provided by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") that is implemented in an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

A RAP BO can be exposed as a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") for access from outside [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") and is consumed by the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") then. For access to RAP BOs from inside AS ABAP, ABAP contains a subset called [ABAP Entity Manipulation Language (EML)](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry").

RAP business object behavior

Transactional behavior of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined in a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

It includes [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"), [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"), [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry"), and [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") all of which are either provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") or implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") ([unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry")).

RAP concurrency control

A concept in [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") that ensures correct results for concurrent operations.

See also:

-   [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry")
-   [pessimistic concurrency control](javascript:call_link\('abenpessimist_conc_control_glosry.htm'\) "Glossary Entry")

RAP consumer hint

RAP BO field or behavior characteristic that is propagated to the [consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") via the chosen protocol. It can be used to optimize usability of the [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry"), for example if fields are marked as [mandatory](javascript:call_link\('abenmandatory_rap_bo_field_glosry.htm'\) "Glossary Entry") on a UI.

RAP content identifier

[RAP input identifier](javascript:call_link\('abenrap_input_identifier_glosry.htm'\) "Glossary Entry") that uniquely identifies an operation on one [instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). The content identifier is reflected in the [derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") component %cid. It identifies an instance during the consumption of [static operations](javascript:call_link\('abenrap_static_operation_glosry.htm'\) "Glossary Entry") before the instance is identified by an [instance identifier](javascript:call_link\('abenrap_inst_identifier_glosry.htm'\) "Glossary Entry").

RAP create operation

A [RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") that creates new [instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

RAP create-by-association operation

[RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") that creates new [instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") of an associated [business object entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

RAP data model extension

An [append structure](javascript:call_link\('abenappend_structure_glosry.htm'\) "Glossary Entry") for [DDIC database tables](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") and a [CDS entity extension](javascript:call_link\('abencds_entity_extend_glosry.htm'\) "Glossary Entry") to extend the data model of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP delete operation

A [RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") that deletes [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP determination

An optional part of the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") that modifies [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") based on trigger conditions. 

RAP draft handling

A concept in RAP that allows to store the contents of the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") in intermediate storages ([draft tables](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry")) in order to allow transactions to expand over different [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry"). Introduced by the keyword [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)) in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

RAP draft indicator

[BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") component that is used to indicate whether a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") is a [draft instance](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry") or an [active instance](javascript:call_link\('abenrap_active_instance_glosry.htm'\) "Glossary Entry"). It is contained in the component group [%tky](javascript:call_link\('abapderived_types_tky.htm'\)) as [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)).

RAP draft instance

[RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") in a [draft-enabled RAP business object](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") for which a commit triggers the saving to the [RAP draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry"). The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") of such an instance has the [draft indicator](javascript:call_link\('abenrap_draft_indicator_glosry.htm'\) "Glossary Entry") set to true. A draft instance can be produced by a [create operation](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry") or by the [draft action](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") Edit in draft scenarios.

There are [edit-draft instances](javascript:call_link\('abenrap_edit_draft_inst_glosry.htm'\) "Glossary Entry") and [new-draft instances](javascript:call_link\('abenrap_new_draft_inst_glosry.htm'\) "Glossary Entry").

RAP draft table

Special [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") that is generated for a [draft-enabled RAP business object](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry"). It contains draft administrative data that is used for [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"). A draft table should be accessed by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") only.

RAP dynamic field characteristic

[Field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") that defines usage restrictions for a [RAP BO field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") depending on the state of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") or the [operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") in which the field is used. A field can be dynamically defined as [read-only](javascript:call_link\('abenread_only_rap_bo_field_glosry.htm'\) "Glossary Entry"), [mandatory](javascript:call_link\('abenmandatory_rap_bo_field_glosry.htm'\) "Glossary Entry"), or without restrictions.

RAP early numbering

A [numbering](javascript:call_link\('abenrap_numbering_glosry.htm'\) "Glossary Entry") concept in which key values are assigned during the [interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

RAP edit-draft instance

[Draft instance](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry") that is produced by the [draft action](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") Edit.

RAP ETag

ETag is short for entity tag. A RAP ETag field is a field of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that is used to describe the state of the instance as an entity tag for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry"). It is updated on every change of the [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP ETag dependent entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that uses the [ETag](javascript:call_link\('abenrap_etag_glosry.htm'\) "Glossary Entry") field of another entity for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry"). Defined using the keyword [etag dependent by \_Assoc](javascript:call_link\('abenbdl_etag.htm'\)).

RAP ETag master entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that has its own [ETag](javascript:call_link\('abenrap_etag_glosry.htm'\) "Glossary Entry") field defined using the keyword [etag master MasterField](javascript:call_link\('abenbdl_etag.htm'\)).

RAP extensibility enablement

Preparing a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") to fulfill all technical requirements for extensibility like [release contracts](javascript:call_link\('abenrelease_contract_glosry.htm'\) "Glossary Entry") and [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry").

RAP external numbering

A [numbering concept](javascript:call_link\('abenrap_numbering_glosry.htm'\) "Glossary Entry") in which key values are provided by the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry").

RAP factory action

A [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") that creates new [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") where you can add functionality to the create process, for example, retrieving BO-specific default values.

RAP feature control

An access restriction that enables or disables [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") or defines field attributes dynamically for [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry"). Feature control can be static or dynamic, [instance-based](javascript:call_link\('abenrap_ins_feature_control_glosry.htm'\) "Glossary Entry") or [global](javascript:call_link\('abenrap_glo_feature_control_glosry.htm'\) "Glossary Entry").

RAP field characteristic

Property of a [RAP BO field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") that defines how a field can be used on [modify access](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry"). Field characteristics can be [static](javascript:call_link\('abenrap_static_field_char_glosry.htm'\) "Glossary Entry") or [dynamic](javascript:call_link\('abenrap_dyn_field_char_glosry.htm'\) "Glossary Entry").

RAP foreign entity

A [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") which is not part of the [BO composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") for which it is defined. Defining a foreign entity in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") enables cross-BO message mapping between the two [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP framework

Framework for the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") on [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). It consists of the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") and the RAP development environment (language, [RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry"), APIs).

RAP function

A [non-standard RAP BO operation](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry") that returns information without modifying [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP global feature control

[Feature control](javascript:call_link\('abenrap_feature_control_glosry.htm'\) "Glossary Entry") that defines access restrictions independently of the state of a [BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Global feature control can be defined for [operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") only.

RAP handler class

[Local class](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") in a [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for implementing [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") that is executed during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

RAP handler method

Special method in a [RAP handler class](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") that is called during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). The names of handler methods can be freely chosen except for [draft actions](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") and [augmentation](javascript:call_link\('abenrap_bo_augmentation_glosry.htm'\) "Glossary Entry").

RAP input derived type

[BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that is used for importing parameters in methods in the [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

RAP input identifier

[Structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") that is imported into implementation methods in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). It consists of all components that are relevant to identify one [instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") for the current method.

An input identifier can either be the [instance identifier](javascript:call_link\('abenrap_inst_identifier_glosry.htm'\) "Glossary Entry") or the [content identifier](javascript:call_link\('abenrap_cont_identifier_glosry.htm'\) "Glossary Entry"), or both.

RAP instance feature control

[Feature control](javascript:call_link\('abenrap_feature_control_glosry.htm'\) "Glossary Entry") that defines access restrictions depending on the state of a [BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Instance feature control can be defined for [fields](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") and [operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry").

RAP instance identifier

[Structure](javascript:call_link\('abenstructure_glosry.htm'\) "Glossary Entry") that uniquely identifies a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). It consists of the primary key fields and all relevant [derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") components, for example %is\_draft, %pid. The instance identifier is represented by the component groups %tky or %pky.

See also: [RAP input identifier](javascript:call_link\('abenrap_input_identifier_glosry.htm'\) "Glossary Entry").

RAP instance transition message

A [transition message](javascript:call_link\('abenrap_trans_mes_glosry.htm'\) "Glossary Entry") that refers to an [instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") of a business object entity and contains a key reference in the implementation.

RAP interaction phase

A part of the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") runtime during which data is modified on the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry").

RAP internal numbering

A [numbering concept](javascript:call_link\('abenrap_numbering_glosry.htm'\) "Glossary Entry") in which key values are assigned by the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry").

RAP late numbering

A [numbering concept](javascript:call_link\('abenrap_numbering_glosry.htm'\) "Glossary Entry") in which key values are assigned during the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

The final key value is only assigned in the [RAP saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)). 

RAP lock dependent entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") whose locking requests are delegated to the [lock master entity](javascript:call_link\('abenrap_lock_ma_ent_glosry.htm'\) "Glossary Entry"). Defined using the keyword [lock dependent by \_Assoc](javascript:call_link\('abenbdl_locking.htm'\)).

RAP lock master entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that is locked on each locking request of one of its [lock dependent entities](javascript:call_link\('abenrap_lock_dep_ent_glosry.htm'\) "Glossary Entry"). On each locking request the lock master and all its lock dependent entities are locked.

RAP lock operation

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that locks [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") on the [persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") during a [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry").

RAP locking

Locking mechanism that is based on the [SAP lock](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") concept. It uses [lock function modules](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry") for [pessimistic concurrency control](javascript:call_link\('abenpessimist_conc_control_glosry.htm'\) "Glossary Entry").

RAP LUW

The LUW in RAP is the sum of all operations and workflows that are used to transfer data from one consistent state to another. A RAP LUW begins with creating new data on the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") or by retrieving data from the database to the transactional buffer. It is terminated with [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) or [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)).

RAP managed draft provider

Part of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") that manages draft data on the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") during the [interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") and provides [draft actions](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") and the total ETag handling in draft-enabled [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP message

Message that is represented by an instance of a class that implements the interface IF\_ABAP\_BEHV\_MESSAGE and is used in [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") implementations.

Each application can create its own classes. For convenience, each [behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") contains a predefined local [exception class](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") CL\_ABAP\_BEHV\_MSG inherited from CX\_NO\_CHECK that implements IF\_ABAP\_BEHV\_MESSAGE in a minimalistic way. It can be used for RAP messages as well as for raising [exceptions](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") where appropriate.

RAP modify operation

Synonym for [CUD operations](javascript:call_link\('abencud_glosry.htm'\) "Glossary Entry"). [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that changes data of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). [Create](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenrap_update_operation_glosry.htm'\) "Glossary Entry"), and [delete](javascript:call_link\('abenrap_delete_operation_glosry.htm'\) "Glossary Entry") are RAP modify operations.

RAP new-draft instance

[Draft instance](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry") that is produced by a [create operation](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry") with the [draft indicator](javascript:call_link\('abenrap_draft_indicator_glosry.htm'\) "Glossary Entry") set to true.

RAP non-factory action

A [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") that is not a factory action.

RAP numbering

A concept that deals with setting values for primary key fields of [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

The following numbering concepts are available:

-   [early numbering](javascript:call_link\('abenrap_early_numbering_glosry.htm'\) "Glossary Entry")
-   [external numbering](javascript:call_link\('abenrap_ext_numbering_glosry.htm'\) "Glossary Entry")
-   [internal numbering](javascript:call_link\('abenrap_int_numbering_glosry.htm'\) "Glossary Entry")
-   [late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry")

RAP object

[Repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that is defined in the [RAP](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") context. Examples are [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"), [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry"), and [service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry").

RAP output derived type

[BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that is used for changing parameters in methods in the [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

RAP persistent data

Data on the [RAP persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry").

RAP persistent state

The state of a [business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") or its [instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") as it is on the [persistent database table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry").

RAP persistent table

[DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is based on. For transactional changes of RAP persistent table data, the data is loaded into the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). At the end of a [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), changes in the transactional buffer are either written back to the persistent table (commit) or discarded (rollback).

RAP projected business object

A [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is used as a basis of a [RAP projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"). It can be of [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

RAP projection BDEF extension

A [development object](javascript:call_link\('abendevelopment_object_glosry.htm'\) "Glossary Entry") that extends a [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry").

RAP projection business object

A [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined in a [CDS projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). It has a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") as [root view](javascript:call_link\('abencds_define_view_as_projection.htm'\)).

RAP query

A consumption option in RAP that provides read-only consumption of data defined in [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). A RAP query is executed by the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry").

RAP query engine

Part of the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") that handles the non-transactional consumption of [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). The RAP query engine is provided by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") but can be adapted by implementing an [unmanaged query](javascript:call_link\('abenrap_unmanged_query_glosry.htm'\) "Glossary Entry").

RAP read operation

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that retrieves data of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") from the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") or from the database table if the instance in not available in the transactional buffer.

See also: [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry")

RAP read-by-association operation

[RAP read operation](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry") that retrieves data of an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

RAP runtime engine

Processor that handles the consumption of [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). There is the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry") for non-transactional consumption and the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") for transactional consumption.

RAP runtime framework

Part of the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") that is provided by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") for consuming [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") from outside [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") or from [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"). In order to handle open protocols such as [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") when a RAP BO is exposed as a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry"), the RAP runtime framework involves components of [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry"). In order to control the runtime behavior of a RAP business object, the RAP runtime framework uses [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") as an orchestration framework. [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") statements that are used to access RAP BOs from inside an ABAP program, also trigger processes in the RAP runtime framework.

RAP save sequence

The RAP save sequence is part of the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") runtime and is triggered after at least one successful modification was performed during the [interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). It saves data from the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") on the database.

RAP saver class

[Local class](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") in a [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for implementing [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") that are called during the [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

RAP saver method

Special method in a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") that is called during the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). The names of saver methods are predefined and cannot be changed. 

RAP state message

A [message](javascript:call_link\('abenrap_message_glosry.htm'\) "Glossary Entry") in the [reported](javascript:call_link\('abapeml_response.htm'\)) structure of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that refers to the state of an [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). A state message is defined with the parameter [%state\_area](javascript:call_link\('abapderived_types_state_area.htm'\)), which assigns it to the corresponding state area. A state message is persisted with the instance it refers to in [draft-enabled BOs](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") in the [draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry").

RAP static field characteristic

[Field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") that defines usage restrictions for a [RAP BO field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") independently of the state of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Currently, there are the following static field characteristics:

-   [read-only](javascript:call_link\('abenread_only_rap_bo_field_glosry.htm'\) "Glossary Entry")
-   [mandatory](javascript:call_link\('abenmandatory_rap_bo_field_glosry.htm'\) "Glossary Entry")

RAP static transition message

A [transition message](javascript:call_link\('abenrap_trans_mes_glosry.htm'\) "Glossary Entry") that refers to a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"), but not to a specific [instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP total ETag

A field of a [draft-enabled RAP BO](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") that enables [optimistic concurrency checks](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry") during the transition form draft to [persistent data](javascript:call_link\('abenrap_persistent_data_glosry.htm'\) "Glossary Entry").

RAP transactional buffer

Storage where the data that is used during one [RAP LUW](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") is kept. It includes the [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that are being worked on.

A distinction is drawn between the following kinds of transactional buffer:

-   [managed transactional buffer](javascript:call_link\('abenmanaged_trans_buff_glosry.htm'\) "Glossary Entry") for [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
-   [unmanaged transactional buffer](javascript:call_link\('abenunmanaged_trans_buff_glosry.htm'\) "Glossary Entry") for [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

RAP transactional engine

Part of the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") that handles the transactional consumption of [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP transactional framework

Part of the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") that consists of the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") and the development environment for [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP transition message

A message in the [reported](javascript:call_link\('abapeml_response.htm'\)) structure that is independent of the state of the [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Transition messages are [RAP messages](javascript:call_link\('abenrap_message_glosry.htm'\) "Glossary Entry") that do not have a state area assigned.

There are [instance transition messages](javascript:call_link\('abeninstance_rap_trans_mes_glosry.htm'\) "Glossary Entry") and [static transition messages](javascript:call_link\('abenstatic_rap_trans_mes_glosry.htm'\) "Glossary Entry").

RAP type mapping

Mapping between data types of the data model that is defined in CDS for a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") to other data types that do not match a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") component pattern.

For example, it is used in the behavior definition to map database field names to CDS element names.

RAP unmanaged draft provider

Draft [provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") of [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") with unmanaged draft. The [draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") is implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

RAP unmanaged query

An implementation type of the RAP query for which parts of the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry") must be implemented in an [ABAP class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") that is referenced in a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").

RAP unmanaged save

Save logic which replaces the default save method in [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"). It can be applied for the complete [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") by defining it in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry"), or for an individual entity by defining it in the [behavior entity characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"). It is implemented in the redefined [saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") save\_modified.

RAP update operation

A [RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") that changes [field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") values of existing [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP validation

An optional part of the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") that checks the consistency of [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") based on trigger conditions.

read-only RAP BO field

A [field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") in a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined as read-only in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). Changes to this field are only allowed by the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") in local mode.

static RAP BO operation

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that is not bound to any [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") but relates to the complete [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

unmanaged RAP BO provider

Part of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") that must be implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

unmanaged RAP business object

Unmanaged RAP BO for short. Provisioning type of the [business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of an unmanaged RAP BO is provided by an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"). The implementation of an unmanaged RAP BO is fully provided by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

unmanaged transactional buffer

[Transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that is provided and accessed by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

web API

[OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") consumer of a [RAP business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") that serves as an API without UI-specific metadata.