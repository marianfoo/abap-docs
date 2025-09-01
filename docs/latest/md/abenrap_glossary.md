  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20Glossary%2C%20ABENRAP_GLOSSARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP Glossary

RAP stands for the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"). In the following, terms of the [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) are listed, that are relevant for RAP.

CDS SDL

The Service Definition Language of [ABAP CDS](javascript:call_link\('abenabap_cds_glosry.htm'\) "Glossary Entry"). CDS SDL contains language elements for [CDS service definitions](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") in [SDL source code](javascript:call_link\('abensdl_source_code_glosry.htm'\) "Glossary Entry").

ABAP EML

→ [ABAP Entity Manipulation Language](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry")

ABAP behavior pool

ABP for short. A special [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") for an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"). A behavior pool is based on a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). The name of the [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") of a behavior pool is usually prefixed with BP\_ but does not implement the behavior itself. The [behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry") is coded in local [ABP handler classes](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") and [ABP saver classes](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") in the [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of the behavior pool. These classes implement the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") that is called by the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") when the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is accessed.

ABAP Entity Manipulation Language

ABAP EML or EML for short. Subset of ABAP that allows access to [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in an [ABAP program](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"). When EML statements are executed for a RAP BO, [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") are called to access the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of the BO. The communication between EML and the RAP BO consists of sending and receiving internal tables of special [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry"). ABAP EML can be used in any program to access RAP BOs and especially in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") in order to access the transactional buffer of the RAP BO.

ABAP RESTful Application Programming Model

Also ABAP RESTful Programming Model, ABAP RAP, or RAP for short. ABAP programming model that is [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") or that meets the requirements of a [REST](javascript:call_link\('abenrest_glosry.htm'\) "Glossary Entry") architecture. In ABAP RAP, [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") plays the role of a stateless Web server. [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") serves as the RESTful protocol for requests from Web clients and the state of a session can be saved to the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry"). The modeling is based on [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") and special [RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry").

For queries, CDS entities can be directly exposed by [business services](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") and all data can be retrieved by the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry"). For transactional access to data, the model offers [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), whose behavior is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"), or is implemented in [ABAP behavior implementations](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

RAP is the transactional programming model for [ABAP Cloud](javascript:call_link\('abenabap_cloud_glosry.htm'\) "Glossary Entry").

abstract BDEF extension

A [development object](javascript:call_link\('abendevelopment_object_glosry.htm'\) "Glossary Entry") that extends a [RAP abstract behavior definition](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") using the statement [extension for abstract](javascript:call_link\('abenbdl_extensibility_abstract.htm'\)).

base BDEF extension

A [development object](javascript:call_link\('abendevelopment_object_glosry.htm'\) "Glossary Entry") that extends a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") using the statement [extension](javascript:call_link\('abenbdl_extension_syntax.htm'\)).

BDEF derived type

Type of an internal table or structure that is derived by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") from the [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). Such internal tables and structures are used for the communication between [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") and [RAP BO providers](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry"). For that, the parameters of a method that implements [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") are typed with BDEF derived types. In [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"), BDEF derived types can be used to declare internal tables or structures to be passed to parameters of [RAP handler](javascript:call_link\('abenabp_handler_class_glosry.htm'\) "Glossary Entry") and [saver classes](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry").

BDEF extension

A [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that extends a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

BDEF extension header

Part of a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") that includes the first one to three lines of [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry"). It starts with  [extension](javascript:call_link\('abenbdl_extensibility_managed_unm.htm'\)) and may additionally define an implementation class and enable BDEF privileged mode.

BDEF privileged mode

With BDEF privileged mode, [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") can circumvent [authorization checks](javascript:call_link\('abenauthorization_check_glosry.htm'\) "Glossary Entry"), such as  [RAP authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") or  [CDS access control](javascript:call_link\('abencds_access_control_glosry.htm'\) "Glossary Entry"). BDEF privileged mode is prerequisite to use the addition [PRIVILEGED](javascript:call_link\('abapeml_privileged.htm'\)) in [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") when consuming the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").  

BDEF projection extension

A [development object](javascript:call_link\('abendevelopment_object_glosry.htm'\) "Glossary Entry") that extends a [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry") using the statement [extension for projection](javascript:call_link\('abenbdl_extensibility_projection.htm'\)).

BDEF projection extension header

Part of a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") that starts with  [extension for projection](javascript:call_link\('abenbdl_extension_for_projection.htm'\)).

BDEF strict mode

BDEF strict mode applies additional syntax checks to [RAP behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). It ensures, for example, that no outdated syntax is used, implicitly available operations are declared explicitly, and that a RAP BO complies to best practices. BDEF strict mode is continually enhanced with stricter versions that apply additional checks.

BDL source code

Source code for [RAP behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry").

BOPF-based RAP business object

BOPF-based RAP BO for short. A BOPF-based RAP BO is the result of the migration of a [CDS-based BOPF business object](javascript:call_link\('abencds_bopf_bo_glosry.htm'\) "Glossary Entry") to a RAP business object. Special syntax statements for BOPF-based RAP BOs are [managed by BOPF](javascript:call_link\('abenbdl_rap_managed_by_bopf.htm'\)) and [with BOPF draft](javascript:call_link\('abenbdl_rap_with_bopf_draft.htm'\)). The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of a BOPF-based RAP BO is provided by the [BOPF-managed RAP BO provider](javascript:call_link\('abenbopf_man_rap_bo_prov_glosry.htm'\) "Glossary Entry"). BOPF-based RAP BOs that are [draft-enabled](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") are handled by the [BOPF-managed RAP draft provider](javascript:call_link\('abenbopf_man_rap_dra_prov_glosry.htm'\) "Glossary Entry").

BOPF-managed RAP BO provider

Part of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") that provides the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") for BOPF-managed [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

BOPF-managed RAP draft provider

Draft provider of [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") with BOPF-managed draft. The [draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") is managed by BOPF.

CCIMP include

[Include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") of a [class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") that is included behind the [declaration part](javascript:call_link\('abendeclaration_part_glosry.htm'\) "Glossary Entry") and in front of the [implementation part](javascript:call_link\('abenimplementation_part_glosry.htm'\) "Glossary Entry") of the [global class](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry"). It can be edited in the [Class Builder](javascript:call_link\('abenclass_builder_glosry.htm'\) "Glossary Entry") by navigating to Local Definitions/Implementations and in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") by navigating to Local Types. The internal name of the include program ends with CCIMP. See also [CCDEF include](javascript:call_link\('abenccdef_glosry.htm'\) "Glossary Entry").

CDS parent entity

A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") that uses a [to-child association](javascript:call_link\('abento_child_association_glosry.htm'\) "Glossary Entry") to define a [child entity](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry"). A parent entity can have multiple child entities. Each child entity must define and expose a [to-parent association](javascript:call_link\('abento_parent_association_glosry.htm'\) "Glossary Entry") to its parent entity.

CDS root entity

The top [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"). The addition ROOT must be specified in the definition of a root entity with [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry"). A root entity can be part of exactly one [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). A CDS root entity is typically a [CDS parent entity](javascript:call_link\('abenparent_entity_glosry.htm'\) "Glossary Entry") and it is typically used as a [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry") in the context of the [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry").

CDS service definition extension

A transportable extension of a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") using the [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry") statement [EXTEND SERVICE](javascript:call_link\('abensrvd_extend_service.htm'\)). A CDS service definition extension can add further entities to an existing CDS service definition without modifying the original service definition.

CDS virtual element

Element in the element list of a [projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") which is not included in the [projected entity](javascript:call_link\('abencds_pv_projected_entity_glosry.htm'\) "Glossary Entry"). Virtual elements are not persistent on the database, but calculated during runtime, usually in [ABAP classes](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry"). In order to fill and analyze the virtual elements of a projection view, special frameworks like the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry") have to be involved.

cross-BO association

[Association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") that is not part of a [RAP business object's](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"), but has an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") that is part of a foreign business object.

CRUD operations

Acronym for Create, Read, Update, and Delete, which are the four basic operations for persistent data storage.

-   In [SQL](javascript:call_link\('abensql_glosry.htm'\) "Glossary Entry"), the four operations are implemented by the [DML](javascript:call_link\('abendml_glosry.htm'\) "Glossary Entry") statements INSERT, SELECT, UPDATE, and DELETE.
-   In the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry"), the four operations can be specified in a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") using the [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") syntax elements create, read, update, and delete.
    
    [→ More about](javascript:call_link\('abenbdl_standard_operations.htm'\))
    

CUD operations

Synonym for [RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry"). [Create](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenrap_update_operation_glosry.htm'\) "Glossary Entry"), and [delete](javascript:call_link\('abenrap_delete_operation_glosry.htm'\) "Glossary Entry") operations in [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

draft-enabled RAP business object

Draft-enabled RAP BO for short. A [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that supports [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"). A RAP BO is draft-enabled with the RAP BDL syntax addition [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).

EML

→ [ABAP Entity Manipulation Language](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry")

instance RAP BO operation

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that is bound to a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

internal RAP BO operation

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that can only be executed by the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") of the same [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

leaf entity

A [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") of a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that does not have any [child entities](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry"). The [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") can also be a leaf entity.

managed RAP BO provider

Part of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") that provides [managed transactional buffers](javascript:call_link\('abenmanaged_trans_buff_glosry.htm'\) "Glossary Entry") and managed behavior of [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") based on their [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

managed RAP business object

Managed RAP BO for short. Provisioning type of the [business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of a managed RAP BO is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). The implementation can partly be provided by an [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

managed transactional buffer

[Transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that is provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). A managed transactional buffer can be accessed in [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry") by [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") only.

mandatory RAP BO field

A [field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") in a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined as mandatory in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). A non-initial value must be passed to this field in every create request and it cannot be initialized in a [modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry").

optimistic concurrency control

Optimistic [concurrency control](javascript:call_link\('abenrap_conc_control_glosry.htm'\) "Glossary Entry") enables transactional access to data by multiple users while avoiding inconsistencies by unintentional changes of already modified data. In [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") this is ensured by using an [ETag field](javascript:call_link\('abenbdl_etag.htm'\)) in the [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

pessimistic concurrency control

Pessimistic [concurrency control](javascript:call_link\('abenrap_conc_control_glosry.htm'\) "Glossary Entry") prevents simultaneous modification access to data on the database by more than one user. In [RAP](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") this is ensured by the [RAP locking mechanism](javascript:call_link\('abenrap_locking_glosry.htm'\) "Glossary Entry").

prefix extension

Used in the context of [RAP BO extensions](javascript:call_link\('abenrap_bo_extension_glosry.htm'\) "Glossary Entry") to refer to an element or [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") from a RAP BO extension. Examples: extension behavior, extension node, extension field.

RAP

→ [ABAP RESTful Application Programming Model](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry")

RAP abstract behavior definition

RAP abstract BDEF or abstract BDEF for short. A RAP abstract behavior definition is a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") abstract. It is based on a [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") and it mainly serves as typing mechanism for deep action or function parameters.

RAP action

A [RAP BO non-standard operation](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry") that modifies the state of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

There are different types or RAP actions:

-   [RAP factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry")
-   [RAP non-factory actions](javascript:call_link\('abenrap_non_fac_action_glosry.htm'\) "Glossary Entry")

RAP active instance

[RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") in a [draft-enabled RAP business object](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") for which a commit triggers the saving to the [persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry"). The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") of such an instance has the [draft indicator](javascript:call_link\('abenrap_draft_indicator_glosry.htm'\) "Glossary Entry") set to false. An active instance can be produced by a [create operation](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry") or by the [draft action](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") Activate in draft scenarios.

RAP additional save

Save logic which can be added to [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") to enhance the default [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). It can be applied to the complete [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") by defining it in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry"), or for an individual entity by defining it in the [behavior entity characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"). It is implemented in the redefined [saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") save\_modified.

RAP authorization context

A container for [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") that lists one or more authorization objects. There are different types of authorization contexts:

-   [Full authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry")
-   [Authorization context for disable](javascript:call_link\('abencds_auth_context_glosry.htm'\) "Glossary Entry")

Optional component of a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

RAP authorization context for disable

A [RAP authorization context](javascript:call_link\('abencds_auth_con_glosry.htm'\) "Glossary Entry") that lists [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry") which can be skipped if the authorization context for disable in question is activated.

RAP authorization control

An access restriction that protects a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") against unauthorized access to data. It limits access to data or the permission to perform [operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"). Authorization control can be global or instance or both.

-   Global authorization is independent of individual [instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry").
-   Instance authorization is dependent on the state of an [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP authorization dependent entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that uses the [authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") that is defined on its [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry"). It delegates authorization requests to the implementation of the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry"). 

RAP authorization master entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that has its own authorization implementation. The implementation is used when requesting access to the authorization master entity or to any of its [authorization dependent entities](javascript:call_link\('abenrap_auth_dep_ent_glosry.htm'\) "Glossary Entry").

RAP BDL

Behavior Definition Language in ABAP RAP. RAP BDL contains language elements for [RAP behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry").

RAP behavior

The part of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that describes the abilities of the RAP BO in question. It is defined in a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") and implemented in the [RAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

RAP behavior definition

RAP BDEF or BDEF for short. A RAP behavior definition is a [RAP object](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry") that describes a [RAP business object (RAP BO)](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") by defining its behavior for all its [BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). A BDEF is written in [BDL source code](javascript:call_link\('abenbdl_source_code_glosry.htm'\) "Glossary Entry") using language elements in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry").

RAP behavior extension body

That part of an [entity behavior extension](javascript:call_link\('abenrap_behavior_extension_glosry.htm'\) "Glossary Entry") that is defined within curly brackets after the statement [extend behavior for](javascript:call_link\('abenbdl_extend_beh.htm'\)). The entity behavior extension body can define [new extension elements](javascript:call_link\('abenbdl_new_elem_ext.htm'\)), such as extension determinations, extension validations, and extension actions. It may also [extend existing elements](javascript:call_link\('abenbdl_ext_elem_ext.htm'\)), such as RAP type mapping, and determine actions.

RAP behavior implementation

A RAP behavior implementation implements the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"). The implementation takes place in local classes of an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

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

Also RAP BO node. [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") for which behavior is defined in a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP BO entity instance

Also RAP BO node instance. Concrete data set of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that is identified by a key. During a [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), a RAP BO entity instance is processed in the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). Then it is saved to the database table during the [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

RAP BO extension

A [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that extends a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). The following types of RAP BO extensions exist:

-   [DDIC extensions](javascript:call_link\('abenddic_extension_glosry.htm'\) "Glossary Entry") defined in [DDIC DDL](javascript:call_link\('abenddic_dcl_glosry.htm'\) "Glossary Entry") or in [transaction](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") SE11.
-   [CDS entity extension](javascript:call_link\('abencds_entity_extend_glosry.htm'\) "Glossary Entry") in [CDS DDL](javascript:call_link\('abencds_ddl_glosry.htm'\) "Glossary Entry").
-   [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry").
-   [Service definition extensions](javascript:call_link\('abencds_service_def_ext_glosry.htm'\) "Glossary Entry") in [CDS SDL](javascript:call_link\('abencds_sdl_glosry.htm'\) "Glossary Entry").

RAP BO field

An element of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

RAP BO instance

Concrete data set of a [BO composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry"). One BO instance at least consists of one [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry") instance. Furthermore, it includes all [entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") with a compositional relationship to the root entity instance.

RAP BO interface

A [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that serves as interface for stable consumption. A RAP BO interface consists of a [CDS transactional interface](javascript:call_link\('abencds_trans_interface_glosry.htm'\) "Glossary Entry") and a [RAP interface behavior definition](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"). A RAP BO interface does not have a runtime handler and cannot specify an implementation class for [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"). A RAP BO interface can only project behavior from the underlying RAP BO.

RAP BO interface entity

A component of a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"). It describes the part of the [RAP data model](javascript:call_link\('abenrap_data_model_glosry.htm'\) "Glossary Entry") that is included in the interface. A RAP BO interface entity is represented by a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") with the provider contract [TRANSACTIONAL\_INTERFACE](javascript:call_link\('abencds_pv_provider_contract.htm'\)).

RAP BO non-standard operation

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that does not provide canonical transactional behavior for a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"), for example [actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"). Most non-standard operations must be implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

RAP BO operation

Operation of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). RAP BO operations are [CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") operations, [non-standard operations](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry"), and the [lock operation](javascript:call_link\('abenlock_operation_glosry.htm'\) "Glossary Entry"). The implementation of a RAP BO operation implements the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") by accessing the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). A RAP BO can be accessed by using RAP operations. The parameters of a RAP BO method are mainly typed with special [BDEF derived types](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry").

RAP BO precheck

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") addition that must be implemented by a [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry"). A precheck is defined for operations in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of a base business object or in the [projection business object](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry").

The implementation method is called before a modify request is executed on the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") to prevent unwanted changes from reaching the transactional buffer.

RAP BO provider

Software that provides the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") and the implementation of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") based on its [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

-   A [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") is provided fully or partly by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").
-   An [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") is fully provided by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

RAP BO root entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that defines the behavior of a [CDS root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry"). The RAP BO root entity is the top-most entity of the hierarchical structure of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") and it represents the RAP business object.

RAP BO service projection entity

A component of a RAP BO service projection. It describes the [RAP data model](javascript:call_link\('abenrap_data_model_glosry.htm'\) "Glossary Entry") that is included in the service projection. The RAP BO service projection entity is represented by a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") with the provider contract [TRANSACTIONAL\_QUERY](javascript:call_link\('abencds_pv_provider_contract.htm'\)).

RAP BO standard operation

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that provides canonical transactional behavior for a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), standard operations can be provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

[Create](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), [read](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenrap_update_operation_glosry.htm'\) "Glossary Entry"), [delete](javascript:call_link\('abenrap_delete_operation_glosry.htm'\) "Glossary Entry") ([CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry")) and [lock](javascript:call_link\('abenlock_operation_glosry.htm'\) "Glossary Entry") are standard operations. [Actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"), in contrast, are [non-standard operations](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry"). That means they are application-specific and user-implemented.

RAP buffer data

Data on the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") that is either in an active or a draft state.

RAP business event

A RAP business event is a business event that usually represents a piece of information about the outcome of a [CUD operation](javascript:call_link\('abencud_glosry.htm'\) "Glossary Entry") in the context of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). For example, the creation of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") raises a RAP business event. Then, an interested party that has subscribed to this event can consume and process it. The information that is passed (i. e. the payload of the event) always includes the instance key and, if need be, further information like the action (CUD).

RAP business object

RAP BO for short. [Business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry") in the context of [ABAP RAP](javascript:call_link\('abenabap_rap_glosry.htm'\) "Glossary Entry"). A RAP BO is mainly described by a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") that defines the [RAP business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") for a set of special hierarchical [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") in form of RAP behavior operations and behavior characteristics. A RAP BO has [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") to handle its data that are available in a [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). There are two kinds of RAP BOs:

-   [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that are fully or partly provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry")
-   [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that are provided by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") that is implemented in an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry").

A RAP BO can be exposed as a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") for access from outside [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") and is consumed by the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") then. For access to RAP BOs from inside AS ABAP, ABAP contains a subset called [ABAP Entity Manipulation Language (EML)](javascript:call_link\('abenaeml_glosry.htm'\) "Glossary Entry").

RAP business object behavior

Transactional behavior of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined in a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

It includes [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"), [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry"), [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry"), and [determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") all of which are either provided by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") or implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") ([unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry")).

RAP business service

BS for short. A RAP business service is a [RESTful](javascript:call_link\('abenrestful_glosry.htm'\) "Glossary Entry") service in [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). It consists of a [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry") and a [RAP service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry").

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

RAP data model

Part of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that defines the data that is used in the RAP BO. It consists of [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that are related by a [CDS composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

RAP data model extension

Extension of the data model of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). May consist of [DDIC extensions](javascript:call_link\('abenddic_extension_glosry.htm'\) "Glossary Entry") and [CDS entity extensions](javascript:call_link\('abencds_entity_extend_glosry.htm'\) "Glossary Entry").

RAP delete operation

A [RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") that deletes [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP derived event

A RAP derived event redefines the payload of an existing [RAP business event](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry"). A RAP derived event is defined with reference to an already implemented event and allows the definition of a payload that deviates from the one of the referenced event. A derived event is automatically raised when the referenced event is raised. No implementation in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is required.

RAP determination

An optional part of the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") that modifies [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") based on trigger conditions. 

RAP draft handling

A concept in RAP that allows the content of the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") to be stored in intermediate storages ([draft tables](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry")) in order to allow transactions to expand over different [ABAP sessions](javascript:call_link\('abenabap_session_glosry.htm'\) "Glossary Entry"). Introduced by the keyword [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)) in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry") of a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry").

RAP draft indicator

[BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") component that is used to indicate whether a [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") is a [draft instance](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry") or an [active instance](javascript:call_link\('abenrap_active_instance_glosry.htm'\) "Glossary Entry"). It is contained in the component group [%tky](javascript:call_link\('abapderived_types_tky.htm'\)) as [%is\_draft](javascript:call_link\('abapderived_types_is_draft.htm'\)).

RAP draft instance

[RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") in a [draft-enabled RAP business object](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") for which a commit triggers the saving to the [RAP draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry"). The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") of such an instance has the [draft indicator](javascript:call_link\('abenrap_draft_indicator_glosry.htm'\) "Glossary Entry") set to true. A draft instance can be produced by a [create operation](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry") or by the [draft action](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") Edit in draft scenarios.

There are [edit-draft instances](javascript:call_link\('abenrap_edit_draft_inst_glosry.htm'\) "Glossary Entry") and [new-draft instances](javascript:call_link\('abenrap_new_draft_inst_glosry.htm'\) "Glossary Entry").

RAP draft query view

[CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") or [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") that selects from the [RAP draft table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry") and contains all fields from the draft table including the administrative fields. It can be specified in a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") using the syntax addition  [query](javascript:call_link\('abenbdl_draft_query_view.htm'\)). A draft query view allows developers to define read access limitations for the draft data of a [draft-enabled RAP business object](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") using the CDS data control language [CDS DCL](javascript:call_link\('abencds_dcl_glosry.htm'\) "Glossary Entry").

RAP draft table

Special [DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") that is generated for a [draft-enabled RAP business object](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry"). It contains draft administrative data that is used for [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"). A draft table should be accessed by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") only.

RAP dynamic field characteristic

[Field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") that defines usage restrictions for a [RAP BO field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") depending on the state of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") or the [operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") in which the field is used. For example, a field can be dynamically defined as [read-only](javascript:call_link\('abenread_only_rap_bo_field_glosry.htm'\) "Glossary Entry"), [mandatory](javascript:call_link\('abenmandatory_rap_bo_field_glosry.htm'\) "Glossary Entry"), or without restrictions.

RAP early numbering

A [numbering](javascript:call_link\('abenrap_numbering_glosry.htm'\) "Glossary Entry") concept in which key values are assigned during the [interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

RAP edit-draft instance

[Draft instance](javascript:call_link\('abenrap_draft_instance_glosry.htm'\) "Glossary Entry") that is produced by the [draft action](javascript:call_link\('abenrap_bo_draft_action_glosry.htm'\) "Glossary Entry") Edit.

RAP entity behavior extension

Short behavior extension. Component of a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") that extends the behavior of an existing RAP BO entity. An entity behavior extension is defined using [extend behavior for EntityName](javascript:call_link\('abenbdl_extend_beh.htm'\)).

RAP entity projection extension

Projection extension for short. Component of a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") that extends the behavior of an existing RAP BO entity in a [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). An entity projection extension is defined using [extend behavior for EntityName](javascript:call_link\('abenbdl_extend_beh_proj.htm'\)).

RAP ETag

ETag is short for entity tag. A RAP ETag field is a field of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that is used to describe the state of the instance as an entity tag for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry"). It is updated on every change of the [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP ETag dependent entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that uses the [ETag](javascript:call_link\('abenrap_etag_glosry.htm'\) "Glossary Entry") field of another entity for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry"). Defined using the keyword [etag dependent by \_Assoc](javascript:call_link\('abenbdl_etag.htm'\)).

RAP ETag master entity

[RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that has its own [ETag](javascript:call_link\('abenrap_etag_glosry.htm'\) "Glossary Entry") field defined using the keyword [etag master MasterField](javascript:call_link\('abenbdl_etag.htm'\)).

RAP extensibility

Extending a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") with the respective [RAP BO extensions](javascript:call_link\('abenrap_bo_extension_glosry.htm'\) "Glossary Entry"). Before a RAP BO can be extended, extensions must be technically enabled by means of [RAP extensibility enablement](javascript:call_link\('abenrap_ext_enablement_glosry.htm'\) "Glossary Entry"). Extensibility use cases include field extensibility, behavior extensibility, and node extensibility.

RAP extensibility is used as part of [developer extensibility](javascript:call_link\('abendev_extensibility_glosry.htm'\) "Glossary Entry"), available in on-premise and cloud environments. In the context of [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry"), RAP extensibility relies on the [C0 (extend) contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") to ensure stability at the dedicated extension points.

RAP extensibility enablement

Preparing a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") to fulfill all technical requirements for [RAP extensibility](javascript:call_link\('abenrap_extensibility_glosry.htm'\) "Glossary Entry"). This may include preparing the RAP data model for extensibility by means of extensibility annotations and preparing the [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") for extensibility by defining dedicated extension points.

RAP extension entity behavior

Node extension for short. Component of a [BDEF extension](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") that defines the behavior for an extension node. Extension entity behavior is defined using [define behavior for](javascript:call_link\('abenbdl_define_beh_extend.htm'\)). The extension node must be added to the current RAP BO's data model via [RAP data model extensions](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").

RAP external numbering

A [numbering concept](javascript:call_link\('abenrap_numbering_glosry.htm'\) "Glossary Entry") in which key values are provided by the [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry").

RAP factory action

A [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") that creates new [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") where you can add functionality to the create process, for example, retrieving BO-specific default values.

RAP feature control

An access restriction that enables or disables [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") or defines field attributes dynamically for [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry"). Feature control can be static or dynamic, [instance-based](javascript:call_link\('abenrap_ins_feature_control_glosry.htm'\) "Glossary Entry") or [global](javascript:call_link\('abenrap_glo_feature_control_glosry.htm'\) "Glossary Entry").

RAP field characteristic

Property of a [RAP BO field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") that restricts access to the field in question. Field characteristics can be [static](javascript:call_link\('abenrap_static_field_char_glosry.htm'\) "Glossary Entry") or [dynamic](javascript:call_link\('abenrap_dyn_field_char_glosry.htm'\) "Glossary Entry").

RAP foreign entity

A [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") which is not part of the [BO composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry") for which it is defined. Defining a foreign entity in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") enables cross-BO message mapping between the two [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP framework

Framework for the [ABAP RESTful Application Programming Model (RAP)](javascript:call_link\('abenrap_glosry.htm'\) "Glossary Entry") on [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry"). It consists of the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") and the RAP development environment (language, [RAP objects](javascript:call_link\('abencds_rap_object_glosry.htm'\) "Glossary Entry"), APIs).

RAP full authorization context

A [RAP authorization context](javascript:call_link\('abencds_auth_con_glosry.htm'\) "Glossary Entry") that serves as a container for [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry"). Specified using the syntax [define own authorization context](javascript:call_link\('abenbdl_def_own_auth_context.htm'\)). A full authorization context documents the authorization objects used in the implementation of the RAP BO in question.

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

A [transition message](javascript:call_link\('abenrap_trans_mes_glosry.htm'\) "Glossary Entry") that refers to an [instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") of a business object entity and contains a key reference.

RAP interaction phase

A part of the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") runtime during which data is modified on the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry").

RAP interface behavior definition

Interface BDEF for short. A component of a [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry"). It defines the behavior that is included in the interface. A RAP BO interface behavior definition is represented by a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") with the [BDEF implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") interface.

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

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that locks [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") on the [persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") during a [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry").

RAP locking

Locking mechanism that is based on the [SAP lock](javascript:call_link\('abensap_lock_glosry.htm'\) "Glossary Entry") concept. It uses [lock function modules](javascript:call_link\('abenlock_function_module_glosry.htm'\) "Glossary Entry") for [pessimistic concurrency control](javascript:call_link\('abenpessimist_conc_control_glosry.htm'\) "Glossary Entry").

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

[Repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that is defined in the [RAP](javascript:call_link\('abenarap_glosry.htm'\) "Glossary Entry") context. Examples are [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"), [CDS service definition](javascript:call_link\('abencds_service_definition_glosry.htm'\) "Glossary Entry"), and [RAP service binding](javascript:call_link\('abenservice_binding_glosry.htm'\) "Glossary Entry").

RAP output derived type

[BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") that is used for changing parameters in methods in the [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

RAP persistent data

Data on the [RAP persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry").

RAP persistent state

The state of a [business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") or its [instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") as it is on the [persistent database table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry").

RAP persistent table

[DDIC database table](javascript:call_link\('abenddic_db_table_glosry.htm'\) "Glossary Entry") a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") is based on. For transactional changes of RAP persistent table data, the data is loaded into the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry"). At the end of a [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry"), changes in the transactional buffer are either written back to the persistent table (commit) or discarded (rollback).

RAP projected business object

A [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is used as a basis of a [RAP projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"). It can be of [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") or [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

RAP projection behavior definition

RAP projection BDEF or projection BDEF for short. A RAP projection behavior definition is a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") projection. It is based on a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") and it represents a projection of a base behavior definition. It exposes a subset of the base BDEF's operations and characteristics. In addition, it can define specific new behavior, such as [augmentation](javascript:call_link\('abenrap_bo_augmentation_glosry.htm'\) "Glossary Entry"). 

RAP projection business object

A [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined in a [RAP projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). It has a [CDS projection view](javascript:call_link\('abencds_projection_view_glosry.htm'\) "Glossary Entry") as [root view](javascript:call_link\('abencds_define_view_as_projection.htm'\)).

RAP projection extension entity

Defines the node extension in the projection layer. Component of a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry") that defines the behavior for an extension node in the projection layer. Projection extension entity behavior is defined using [define behavior for](javascript:call_link\('abenbdl_proj_ext_entity.htm'\)) in the context of a [BDEF projection extension](javascript:call_link\('abenrap_projec_bdef_ext_glosry.htm'\) "Glossary Entry"). The extension node must be added to the current RAP BO's data model via [RAP data model extensions](javascript:call_link\('abenrap_data_model_ext_glosry.htm'\) "Glossary Entry").

RAP query

A consumption option in RAP that provides read-only consumption of data defined in [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry"). A RAP query is executed by the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry").

RAP query engine

Part of the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") that handles the non-transactional consumption of [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). The RAP query engine is provided by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") but can be adapted by implementing an [unmanaged query](javascript:call_link\('abenrap_unmanged_query_glosry.htm'\) "Glossary Entry").

RAP read operation

[RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that retrieves data of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") from the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") or from the database table if the instance in not available in the transactional buffer.

See also: [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry")

RAP read-by-association operation

[RAP read operation](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry") that retrieves data of an [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

RAP repeatable operation

[RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") or [RAP function](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry") that can be executed multiple times on the same [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") within the same [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") or [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") request. The [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") of a repeatable operation contains a [%cid](javascript:call_link\('abapderived_types_cid.htm'\)) component and the [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") are filled for each execution individually.

RAP response

Information a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") is provided with by a [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") via the [RAP response parameters](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") mapped, failed and reported of individual [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") and [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry").

Depending on the availability of these response parameters in the said methods, the information that is provided can comprise the following:

-   mapped: Used to provided mapping information on [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"), for example, which key values were created for given content IDs ([%cid](javascript:call_link\('abapderived_types_cid.htm'\))).
-   failed: Information for identifying the data set for which an error occurred in a RAP operation.
-   reported: Used to exchange error messages for each entity defined in the BDEF and [not related to a specific entity](javascript:call_link\('abapderived_types_other.htm'\)).

RAP response parameter

Implicit changing parameters of [RAP handler methods](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") and [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") (implicitly) typed with the [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") [... TYPE RESPONSE FOR ...](javascript:call_link\('abaptype_response_for.htm'\)). Depending on the RAP handler or saver method, the signatures of the individual methods can include all of the following three formal parameters mapped, failed and reported, a subset or none of them. The names of the parameters are predefined. They are used to provide a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") with information by a [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry").

Parameters:

-   failed: Information for identifying the data set for which an error occurred in a RAP operation
-   reported: Used to exchange messages (for example, error messages) for each entity defined in the BDEF and [not related to a specific entity](javascript:call_link\('abapderived_types_other.htm'\)).
-   mapped: Used to provide mapping information on [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"), for example, which key values were created for given content IDs ([%cid](javascript:call_link\('abapderived_types_cid.htm'\))).

RAP runtime engine

Processor that handles the consumption of [RAP queries](javascript:call_link\('abenrap_query_glosry.htm'\) "Glossary Entry") and [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). There is the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry") for non-transactional consumption and the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") for transactional consumption.

RAP runtime framework

Part of the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") that is provided by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") for consuming [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") from outside [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") or from [ABAP programs](javascript:call_link\('abenabap_program_glosry.htm'\) "Glossary Entry"). In order to handle open protocols such as [OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") when a RAP BO is exposed as a [business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry"), the RAP runtime framework involves components of [SAP Gateway](javascript:call_link\('abensap_gateway_glosry.htm'\) "Glossary Entry"). In order to control the runtime behavior of a RAP business object, the RAP runtime framework uses [SADL](javascript:call_link\('abensadl_glosry.htm'\) "Glossary Entry") as an orchestration framework. [ABAP EML](javascript:call_link\('abenabap_eml_glosry.htm'\) "Glossary Entry") statements that are used to access RAP BOs from inside an ABAP program, also trigger processes in the RAP runtime framework.

RAP save action

[RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") that can only be executed during the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). Any attempt to execute a RAP save action during the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry") results in a [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry").

RAP save sequence

The RAP save sequence is part of the [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") runtime and is triggered after at least one successful modification was performed during the [interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry"). It saves data from the [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") on the database.

The RAP save sequence is divided into three phases that are entered in this order:

-   [RAP early save phase](javascript:call_link\('abenearly_rap_save_phase_glosry.htm'\) "Glossary Entry")
-   [RAP late save phase](javascript:call_link\('abenlate_rap_save_phase_glosry.htm'\) "Glossary Entry")
-   [RAP cleanup phase](javascript:call_link\('abenrap_cleanup_phase_glosry.htm'\) "Glossary Entry")

RAP saver class

[Local class](javascript:call_link\('abenlocal_class_glosry.htm'\) "Glossary Entry") in a [CCIMP include](javascript:call_link\('abenccimp_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for implementing [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") that are called during the [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry").

RAP saver method

Special method in a [RAP saver class](javascript:call_link\('abenabp_saver_class_glosry.htm'\) "Glossary Entry") of an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") that is called during the [RAP save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). The names of saver methods are predefined and cannot be changed. 

RAP side effect

An optional part of a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") that defines interdependencies among BO properties that trigger a reload of the affected properties on the user interface. Introduced by the keyword [side effects](javascript:call_link\('abenbdl_side_effects.htm'\)) in the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") of a RAP behavior definition.

RAP state message

A [message](javascript:call_link\('abenrap_message_glosry.htm'\) "Glossary Entry") in the [reported](javascript:call_link\('abapeml_response.htm'\)) [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that refers to the state of an [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). A state message is defined with the parameter [%state\_area](javascript:call_link\('abapderived_types_state_area.htm'\)), which assigns it to the corresponding state area. A state message is persisted with the instance it refers to in [draft-enabled BOs](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry").

RAP state messages are relevant in the following contexts:

-   Draft-enabled RAP BOs
-   The [cleanup\_finalize](javascript:call_link\('abapsaver_class_cleanup_finalize.htm'\)) and [check\_before\_save](javascript:call_link\('abensaver_check_before_save.htm'\)) [RAP saver methods](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") in [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry") in [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")

RAP static field characteristic

[Field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") that defines usage restrictions for a [RAP BO field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") independently of the state of a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). For example, [read-only](javascript:call_link\('abenread_only_rap_bo_field_glosry.htm'\) "Glossary Entry") and [mandatory](javascript:call_link\('abenmandatory_rap_bo_field_glosry.htm'\) "Glossary Entry") are static field characteristics.

RAP static transition message

A [transition message](javascript:call_link\('abenrap_trans_mes_glosry.htm'\) "Glossary Entry") that refers to a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"), but not to a specific [instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Unlike a [RAP instance transition message](javascript:call_link\('abeninstance_rap_trans_mes_glosry.htm'\) "Glossary Entry"), it does not contain a key reference.

RAP total ETag

A field of a [draft-enabled RAP BO](javascript:call_link\('abendraft_rap_bo_glosry.htm'\) "Glossary Entry") that enables [optimistic concurrency checks](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry") during the transition form draft to [persistent data](javascript:call_link\('abenrap_persistent_data_glosry.htm'\) "Glossary Entry").

RAP transaction

A RAP transaction ...

-   is the sum of all operations and workflows that are used to transfer data from one consistent state to another.
-   begins with creating new data on the [RAP transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") or by retrieving data from the database to the transactional buffer.
-   is terminated with [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) or [ROLLBACK ENTITIES](javascript:call_link\('abaprollback_entities.htm'\)).

RAP transactional buffer

Storage where the data that is used during one [RAP transaction](javascript:call_link\('abenrap_luw_glosry.htm'\) "Glossary Entry") is kept. It includes the [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") that are being worked on.

A distinction is drawn between the following kinds of transactional buffer:

-   [managed transactional buffer](javascript:call_link\('abenmanaged_trans_buff_glosry.htm'\) "Glossary Entry") for [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry").
-   [unmanaged transactional buffer](javascript:call_link\('abenunmanaged_trans_buff_glosry.htm'\) "Glossary Entry") for [unmanaged RAP BOs](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry").

RAP transactional engine

Part of the [RAP runtime engine](javascript:call_link\('abenrap_runtime_engine_glosry.htm'\) "Glossary Entry") that handles the transactional consumption of [RAP BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP transactional framework

Part of the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") that consists of the [RAP transactional engine](javascript:call_link\('abenrap_transac_engine_glosry.htm'\) "Glossary Entry") and the development environment for [RAP business objects](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

RAP transition message

A message in the [reported](javascript:call_link\('abapeml_response.htm'\)) [RAP response parameter](javascript:call_link\('abenrap_response_param_glosry.htm'\) "Glossary Entry") that is semantically related to the current ABAP EML MODIFY request and independent of the state of the [entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry"). Unlike [RAP state messages](javascript:call_link\('abenrap_state_mes_glosry.htm'\) "Glossary Entry"), transition messages are [RAP messages](javascript:call_link\('abenrap_message_glosry.htm'\) "Glossary Entry") that do not have a state area assigned ([%state\_area](javascript:call_link\('abapderived_types_state_area.htm'\))) and are not persisted with the state. Therefore, these messages cannot be accessed at a later point in time.

There are [instance transition messages](javascript:call_link\('abeninstance_rap_trans_mes_glosry.htm'\) "Glossary Entry") and [static transition messages](javascript:call_link\('abenstatic_rap_trans_mes_glosry.htm'\) "Glossary Entry").

RAP type mapping

Mapping between data types of the data model that is defined in CDS for a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") to other data types that do not match a [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") component pattern.

For example, it is used in the behavior definition to map database field names to CDS element names.

RAP unmanaged draft provider

Draft [provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") of [BOs](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") with unmanaged draft. The [draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") is implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

RAP unmanaged query

An implementation type of the RAP query for which parts of the [RAP query engine](javascript:call_link\('abenrap_query_engine_glosry.htm'\) "Glossary Entry") must be implemented in an [ABAP class](javascript:call_link\('abenclass_glosry.htm'\) "Glossary Entry") that is referenced in a [CDS custom entity](javascript:call_link\('abencds_custom_entity_glosry.htm'\) "Glossary Entry").

RAP unmanaged save

Save logic which replaces the default save method in [managed RAP BOs](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"). It can be applied to the complete [BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") by defining it in the [behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry"), or for an individual entity by defining it in the [behavior entity characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry"). It is implemented in the redefined [saver method](javascript:call_link\('abenabp_saver_method_glosry.htm'\) "Glossary Entry") save\_modified.

RAP update operation

A [RAP modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") that changes [field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") values of existing [RAP BO entity instances](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry").

RAP validation

An optional part of the [RAP BO behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") that checks the consistency of [RAP BO instance](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") based on trigger conditions.

read-only RAP BO field

A [field](javascript:call_link\('abenrap_bo_field_glosry.htm'\) "Glossary Entry") in a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") that is defined as read-only in the [behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"). Changes to this field are only allowed by the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") in local mode.

static RAP BO operation

A [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") that is not bound to any [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") but relates to the complete [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). Defined using the optional addition [static](javascript:call_link\('abenbdl_static.htm'\)).

unmanaged RAP BO provider

Part of the [RAP BO provider](javascript:call_link\('abenrap_bo_provider_glosry.htm'\) "Glossary Entry") that must be implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

unmanaged RAP business object

Unmanaged RAP BO for short. Provisioning type of the [business object behavior](javascript:call_link\('abenrap_bo_behavior_glosry.htm'\) "Glossary Entry") of a [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). The [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of an unmanaged RAP BO is provided by an [ABAP behavior implementation](javascript:call_link\('abenbehavior_implement_glosry.htm'\) "Glossary Entry"). The implementation of an unmanaged RAP BO is fully provided by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry") in an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").

unmanaged transactional buffer

[Transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") of an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") that is provided and accessed by the [unmanaged RAP BO provider](javascript:call_link\('abenunmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry").

web API

[OData](javascript:call_link\('abenodata_glosry.htm'\) "Glossary Entry") consumer of a [RAP business service](javascript:call_link\('abenbusiness_service_glosry.htm'\) "Glossary Entry") that serves as an API without UI-specific metadata.