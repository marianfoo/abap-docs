  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_bdef.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20Providers%20of%20RAP%20Behavior%20Definitions%2C%20ABENC0_PROVIDER_RULES_BDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

C0 Contract Rules for Providers of RAP Behavior Definitions

BDEFs with the [implementation type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry") [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), [unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), [projection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), [interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), and [abstract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry") can be released under the [C0 contract, extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_glosry.htm "Glossary Entry"). Generally, a [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") (BDEF) that is released under the [C0 contract, extend](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_glosry.htm "Glossary Entry") must not be deleted after being released as an API but can become deprecated. [BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extension_glosry.htm "Glossary Entry") themselves must not be C0 released.

The following sections show the most important C0 contract rules for BDEFs.

-   [Prerequisites for the C0 Release](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_1)
-   [Naming Rules](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_2)
-   [Stability Rules After Release](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_3)
-   [Example Topics](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_4)

Prerequisites for the C0 Release   

BDEF Implementation Type

Rules

All

\- A C0 release is possible for the language version [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry"). C0 release for the language version [ABAP for Key Users](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_key_users_glosry.htm "Glossary Entry") is not possible within ABAP development tools for Eclipse.
\- The BDEF to be released must not have any syntax errors.
\- [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry"), version 2 ( [strict(2)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict_2.htm)) must be used.
\- The respective BDEF must be enabled for RAP extensibility as described in topic [RAP BDL - BDEF Extension, Extensibility Enabling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_enabling.htm).

Managed and Unmanaged

\- Each [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") must at least have one [RAP BO interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") that is released under the C0 contract, extend. If this requirement is not met, a C0 release is still possible, but a warning message occurs.
\- The RAP BO must be [draft-enabled](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry") using the addition [with draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm).
\- A [draft query view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_query_view_glosry.htm "Glossary Entry"), specified using the syntax addition [query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_query_view.htm), should be specified for each extensible [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry"). This [draft query view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_query_view_glosry.htm "Glossary Entry") must be C0 released. If no draft query view is specified, release is still possible, but a warning message occurs.
\- If the RAP BO has the implementation type unmanaged, the annotation [@AbapCatalog.extensibility.allowNewCompositions: true](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm) is not allowed in the underlying CDS data model.
\- If the RAP BO has the implementation type managed, all RAP BO entities annotated with [@AbapCatalog.extensibility.allowNewCompositions: true](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_entity_annotations.htm) in the underlying CDS data model must be marked as extensible.

Projection

\- If a projection BDEF has already been released under the [C1 contract, use system-internally](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc1_contract_glosry.htm "Glossary Entry"), then a C0 release is not possible.
\- Projection BDEFs with use draft as dependent cannot be C0 released.

Interface

\- The underlying base BDEF must be released under the C0 contract, extend.
\- The interface BDEF must first be released for C1.
\- If the underlying base BDEF is [draft-enabled](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_draft_handling_glosry.htm "Glossary Entry"), [use draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body_interface.htm) is a prerequisite for a C0 release.

Abstract

\- The [abstract BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_abstract.htm) must specify [with hierarchy](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_bdef_abstract_header.htm) in the BDEF header.
\- The optional addition [with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@) must be specified for each entity behavior definition in an abstract BDEF.

Naming Rules   

-   If the RAP BO has a [namespace prefix](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"), such as /PREFIX/, its elements must also have this prefix. The element names must not start with a different namespace prefix, nor with Z, nor with Y.
-   If the name of the RAP BO starts with Z or Y, there is no check.
-   In all other cases, the names of the elements must not start with Z, or Y, nor a namespace prefix.

The checks apply to the following elements:

-   [Alias names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalias_glosry.htm "Glossary Entry") of [RAP BO entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").
-   External names of RAP BO entities, specified using the addition [external](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm).
-   Alias names of associations, specified using the addition [abbreviation](abenbdl_association.htm#!ABAP_ADDITION_1@1@).
-   Alias names of [RAP foreign entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry").
-   Names of [RAP actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") and [RAP functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry").
-   External names of RAP actions and RAP functions, specified using the addition external.
-   External names of action and function results, specified using the addition [external](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm).
-   Names of [RAP determinations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [RAP validations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_validation_glosry.htm "Glossary Entry").
-   Names of [RAP BO determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry").
-   Names of [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry").

Stability Rules After Release   

BDEF Implementation Type

Rules

All

\- The [RAP extensibility enablement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_ext_enablement_glosry.htm "Glossary Entry") must not be removed. RAP BO entities and components that are explicitly marked as extensible must not be deleted or renamed and they must remain extensible.
\- The BDEF implementation type must not be changed.
\- The key fields of the [RAP BO root entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") must remain stable. Their type and order must not be changed and no new key fields must be added.
\- [RAP late numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_late_numbering_glosry.htm "Glossary Entry") must not be added to or deleted from extensible entities after release.
\- If available, the [RAP own authorization context](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_own_ac_glosry.htm "Glossary Entry") must not be removed (even if it is empty).

Managed and Unmanaged

\- The name of the [RAP persistent table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_persistent_table_glosry.htm "Glossary Entry") of an extensible RAP BO entity must not be changed and the RAP persistent table must not be deleted or replaced by an [unmanaged save](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_unman_save_glosry.htm "Glossary Entry").
Note: The reverse case is possible though. An unmanaged save can be replaced by a persistent table.
\- A draft query view in an extensible entity must not be added, nor replaced, nor deleted.
\- The [RAP field characteristic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_field_char_glosry.htm "Glossary Entry") [notrigger](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm) must not be added to a field if determinations and validations are allowed in extensions.

Projection

\- The name of the projected BDEF must not be changed.

Interface

\- The name of the projected BDEF must not be changed.
\- All associations exposed in an interface, including [cross-BO associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cross_bo_assoc_glosry.htm "Glossary Entry") and [ancestor associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ancestor_ext.htm), must remain stable. They must not be deleted or disabled.

Abstract

\- The addition with hierarchy must not be removed.

Example Topics   

[Example for a C0 released RAP BO which is extended from ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_rap_bo.htm).

[Example for a C0 released projection BDEF which is extended from ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_service_proj.htm).