# ABAP - Keyword Documentation / ABAP - Rules for ABAP Cloud / Contract Rules for ABAP Released APIs / C0 Contract Rules / C0 Contract Rules for RAP Behavior Definitions

Included pages: 5



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenc0_contract_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_bdef.htm)
- [abenc0_provider_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_provider_rules_bdef.htm)
- [abenc0_consumer_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_consumer_rules_bdef.htm)
- [abenc0_demo_rap_bo.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_rap_bo.htm)
- [abenc0_demo_service_proj.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_service_proj.htm)

**Bundle Contains**: 5 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.960Z

---

### abenc0_contract_rules_bdef.htm

> **📖 Official SAP Documentation**: [abenc0_contract_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_bdef.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20RAP%20Behavior%20Definitions%2C%20ABENC0_CONTRACT_RULES_BDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

C0 Contract Rules for RAP Behavior Definitions

Currently, [RAP behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") (BDEFs) with the [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [projection](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), [interface](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"), and [abstract](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") can be released with a [C0 contract for extensibility](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry").

The following topics list the most important C0 contract rules for BDEFs.

-   [C0 Contract Rules for Providers of RAP Behavior Definitions](javascript:call_link\('abenc0_provider_rules_bdef.htm'\))
-   [C0 Contract Rules for Consumers of RAP Behavior Definitions](javascript:call_link\('abenc0_consumer_rules_bdef.htm'\))
-   [Example: C0 Released RAP BO, Design and Consumption](javascript:call_link\('abenc0_demo_rap_bo.htm'\))
-   [Example: C0 Released Projection BDEF, Design and Consumption](javascript:call_link\('abenc0_demo_service_proj.htm'\))

The general rules for [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") are described in the topic [BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)).

Continue
[C0 Contract Rules for Providers of RAP Behavior Definitions](javascript:call_link\('abenc0_provider_rules_bdef.htm'\))
[C0 Contract Rules for Consumers of RAP Behavior Definitions](javascript:call_link\('abenc0_consumer_rules_bdef.htm'\))
[Example: C0 Released RAP BO, Design and Consumption](javascript:call_link\('abenc0_demo_rap_bo.htm'\))
[Example: C0 Released Projection BDEF, Design and Consumption](javascript:call_link\('abenc0_demo_service_proj.htm'\))



**📖 Source**: [abenc0_contract_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_contract_rules_bdef.htm)

### abenc0_provider_rules_bdef.htm

> **📖 Official SAP Documentation**: [abenc0_provider_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_provider_rules_bdef.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for RAP Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20Providers%20of%20RAP%20Behavior%20Definitions%2C%20ABENC0_PROVIDER_RULES_BDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

C0 Contract Rules for Providers of RAP Behavior Definitions

BDEFs with the [implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [projection](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), [interface](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry"), and [abstract](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") can be released under the [C0 contract, extend](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"). Generally, a [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") (BDEF) that is released under the [C0 contract, extend](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") must not be deleted after being released as an API but can become deprecated. [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") themselves must not be C0 released.

The following sections show the most important C0 contract rules for BDEFs.

-   [Prerequisites for the C0 Release](#abenc0-provider-rules-bdef-1-------naming-rules---@ITOC@@ABENC0_PROVIDER_RULES_BDEF_2)
-   [Stability Rules After Release](#abenc0-provider-rules-bdef-3-------example-topics---@ITOC@@ABENC0_PROVIDER_RULES_BDEF_4)

Prerequisites for the C0 Release   

BDEF Implementation Type

Rules

All

\- A C0 release is possible for the language version [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry"). C0 release for the language version [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry") is not possible within ABAP development tools for Eclipse.
\- The BDEF to be released must not have any syntax errors.
\- [BDEF strict mode](javascript:call_link\('abenrap_strict_mode_glosry.htm'\) "Glossary Entry"), version 2 ( [strict(2)](javascript:call_link\('abenbdl_strict_2.htm'\))) must be used.
\- The respective BDEF must be enabled for RAP extensibility as described in topic [RAP BDL - BDEF Extension, Extensibility Enabling](javascript:call_link\('abenbdl_extensibility_enabling.htm'\)).

Managed and Unmanaged

\- Each [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") must at least have one [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry") that is released under the C0 contract, extend. If this requirement is not met, a C0 release is still possible, but a warning message occurs.
\- The RAP BO must be [draft-enabled](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") using the addition [with draft](javascript:call_link\('abenbdl_with_draft.htm'\)).
\- A [draft query view](javascript:call_link\('abendraft_query_view_glosry.htm'\) "Glossary Entry"), specified using the syntax addition [query](javascript:call_link\('abenbdl_draft_query_view.htm'\)), should be specified for each extensible [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry"). This [draft query view](javascript:call_link\('abendraft_query_view_glosry.htm'\) "Glossary Entry") must be C0 released. If no draft query view is specified, release is still possible, but a warning message occurs.
\- If the RAP BO has the implementation type unmanaged, the annotation [@AbapCatalog.extensibility.allowNewCompositions: true](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) is not allowed in the underlying CDS data model.
\- If the RAP BO has the implementation type managed, all RAP BO entities annotated with [@AbapCatalog.extensibility.allowNewCompositions: true](javascript:call_link\('abencds_f1_entity_annotations.htm'\)) in the underlying CDS data model must be marked as extensible.

Projection

\- If a projection BDEF has already been released under the [C1 contract, use system-internally](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry"), then a C0 release is not possible.
\- Projection BDEFs with use draft as dependent cannot be C0 released.

Interface

\- The underlying base BDEF must be released under the C0 contract, extend.
\- The interface BDEF must first be released for C1.
\- If the underlying base BDEF is [draft-enabled](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"), [use draft](javascript:call_link\('abenbdl_body_interface.htm'\)) is a prerequisite for a C0 release.

Abstract

\- The [abstract BDEF](javascript:call_link\('abenbdl_abstract.htm'\)) must specify [with hierarchy](javascript:call_link\('abenbdl_bdef_abstract_header.htm'\)) in the BDEF header.
\- The optional addition [with control](abenbdl_define_beh_abstract.htm#!ABAP_ALTERNATIVE_1@1@) must be specified for each entity behavior definition in an abstract BDEF.

Naming Rules   

-   If the RAP BO has a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry"), such as /PREFIX/, its elements must also have this prefix. The element names must not start with a different namespace prefix, nor with Z, nor with Y.
-   If the name of the RAP BO starts with Z or Y, there is no check.
-   In all other cases, the names of the elements must not start with Z, or Y, nor a namespace prefix.

The checks apply to the following elements:

-   [Alias names](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") of [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").
-   External names of RAP BO entities, specified using the addition [external](javascript:call_link\('abenbdl_define_beh.htm'\)).
-   Alias names of associations, specified using the addition [abbreviation](abenbdl_association.htm#!ABAP_ADDITION_1@1@).
-   Alias names of [RAP foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry").
-   Names of [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry").
-   External names of RAP actions and RAP functions, specified using the addition external.
-   External names of action and function results, specified using the addition [external](javascript:call_link\('abenbdl_action_output_para.htm'\)).
-   Names of [RAP determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [RAP validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry").
-   Names of [RAP BO determine actions](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").
-   Names of [RAP business events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry").

Stability Rules After Release   

BDEF Implementation Type

Rules

All

\- The [RAP extensibility enablement](javascript:call_link\('abenrap_ext_enablement_glosry.htm'\) "Glossary Entry") must not be removed. RAP BO entities and components that are explicitly marked as extensible must not be deleted or renamed and they must remain extensible.
\- The BDEF implementation type must not be changed.
\- The key fields of the [RAP BO root entity](javascript:call_link\('abenrap_bo_root_entity_glosry.htm'\) "Glossary Entry") must remain stable. Their type and order must not be changed and no new key fields must be added.
\- [RAP late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry") must not be added to or deleted from extensible entities after release.
\- If available, the [RAP own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") must not be removed (even if it is empty).

Managed and Unmanaged

\- The name of the [RAP persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") of an extensible RAP BO entity must not be changed and the RAP persistent table must not be deleted or replaced by an [unmanaged save](javascript:call_link\('abenrap_unman_save_glosry.htm'\) "Glossary Entry").
Note: The reverse case is possible though. An unmanaged save can be replaced by a persistent table.
\- A draft query view in an extensible entity must not be added, nor replaced, nor deleted.
\- The [RAP field characteristic](javascript:call_link\('abenrap_field_char_glosry.htm'\) "Glossary Entry") [notrigger](javascript:call_link\('abenbdl_field_char.htm'\)) must not be added to a field if determinations and validations are allowed in extensions.

Projection

\- The name of the projected BDEF must not be changed.

Interface

\- The name of the projected BDEF must not be changed.
\- All associations exposed in an interface, including [cross-BO associations](javascript:call_link\('abencds_cross_bo_assoc_glosry.htm'\) "Glossary Entry") and [ancestor associations](javascript:call_link\('abenbdl_ancestor_ext.htm'\)), must remain stable. They must not be deleted or disabled.

Abstract

\- The addition with hierarchy must not be removed.

Example Topics   

[Example for a C0 released RAP BO which is extended from ABAP for Cloud Development](javascript:call_link\('abenc0_demo_rap_bo.htm'\)).

[Example for a C0 released projection BDEF which is extended from ABAP for Cloud Development](javascript:call_link\('abenc0_demo_service_proj.htm'\)).



**📖 Source**: [abenc0_provider_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_provider_rules_bdef.htm)

### abenc0_consumer_rules_bdef.htm

> **📖 Official SAP Documentation**: [abenc0_consumer_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_consumer_rules_bdef.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for RAP Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20Consumers%20of%20RAP%20Behavior%20Definitions%2C%20ABENC0_CONSUMER_RULES_BDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

C0 Contract Rules for Consumers of RAP Behavior Definitions

The [provider rules](javascript:call_link\('abenc0_provider_rules_cds.htm'\)) for objects with a C0 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to [released APIs](javascript:call_link\('abenreleased_api_glosry.htm'\) "Glossary Entry"). Therefore, the users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during an upgrade.
-   Syntax errors after an upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

When extending BDEFs, consumers must obey the following naming rules to avoid naming conflicts.

Naming Rules   

The following applies to extensions in [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry"):

1.  If the extension has a [namespace prefix](javascript:call_link\('abenname_space_prefix_glosry.htm'\) "Glossary Entry"), such as /PREFIX/, its elements must also have this prefix.
2.  If the name of the extension starts with Z or with Y, its element names must begin with ZZ or with YY. Additionally, if the element name begins with YY, this prefix YY must not be followed by A, M, S, or the digits 1 to 9.
3.  Otherwise, if the name of the extension does not start with Z or with Y, the element name must not begin with a namespace prefix, nor with ZZ or YY.
4.  If the behavior for an extension node is defined ([extension entity behavior definition](javascript:call_link\('abenbdl_define_beh_extend.htm'\))), the element names inside this entity must either be without prefix, or they are checked against the name of the extension according to the rules above.

The following applies to extensions in [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry"):

-   Element names must either be without prefix, or the element names are checked against the name of the extension according to rules 1 - 3 listed above.

The checks apply to the following elements:

-   [Alias names](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") of [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").
-   External names of RAP BO entities, specified using the addition [external](javascript:call_link\('abenbdl_define_beh.htm'\)).
-   Alias names of associations, specified using the addition [abbreviation](abenbdl_association.htm#!ABAP_ADDITION_1@1@).
-   Alias names of [RAP foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry").
-   Names of [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry").
-   External names of RAP actions and RAP functions, specified using the addition external.
-   External names of action and function results, specified using the addition [external](javascript:call_link\('abenbdl_action_output_para.htm'\)).
-   Names of [RAP determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [RAP validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry").
-   Names of [RAP BO determine actions](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").
-   Names of [RAP business events](javascript:call_link\('abenrap_entity_event_glosry.htm'\) "Glossary Entry").

Example Topics   

[Example for a C0 released RAP BO which is extended from ABAP for Cloud Development](javascript:call_link\('abenc0_demo_rap_bo.htm'\)).

[Example for a C0 released projection BDEF which is extended from the language version ABAP for Cloud Development](javascript:call_link\('abenc0_demo_service_proj.htm'\)).



**📖 Source**: [abenc0_consumer_rules_bdef.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_consumer_rules_bdef.htm)

### abenc0_demo_rap_bo.htm

> **📖 Official SAP Documentation**: [abenc0_demo_rap_bo.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_rap_bo.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for RAP Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20C0%20Released%20RAP%20BO%2C%20Design%20and%20Consumption%2C%20ABENC0_DEMO_RAP_BO%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20
for%20improvement:)

Example: C0 Released RAP BO, Design and Consumption

This topic provides an example for the design of a C0 released RAP BO. It also shows an example for an extension to this released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry").

Managed BDEF as C0 released API

The following BDEF DEMO\_RAP\_BASE\_DET\_VAL is based on the CDS view entity DEMO\_RAP\_BASE\_DET\_VAL and it fulfills all requirements for a C0 release:

-   It uses BDEF strict mode, version 2.
-   It is enabled for RAP extensibility.

Note: This BDEF shows how to create a released API. It meets all the requirements for a C0 release. However, it is not released under the C0 contract, extend, because it is not intended to be used as an API.

managed implementation in class bp\_demo\_rap\_base\_det\_val unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
define behavior for DEMO\_RAP\_BASE\_DET\_VAL
persistent table DEMO\_DBTAB\_ROOT
lock master
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  field(readonly:update) key\_field;
}

BDEF extension to a C0 released API

The following BDEF extension DEMO\_RAP\_EXT\_DET\_VAL extends the RAP BO displayed above and it obeys the naming rules.

extension using interface DEMO\_RAP\_INT\_DET\_VAL
implementation in class bp\_demo\_rap\_ext\_det\_val unique;
extend behavior for RootInterface
{
  determination setStatus on save { create; }
}



**📖 Source**: [abenc0_demo_rap_bo.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_rap_bo.htm)

### abenc0_demo_service_proj.htm

> **📖 Official SAP Documentation**: [abenc0_demo_service_proj.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_service_proj.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenc0_demo_service_proj.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenc0_demo_service_proj.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for ABAP Cloud](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for ABAP Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for RAP Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%3A%20C0%20Released%20Projection%20BDEF%2C%20Design%20and%20Consumption%2C%20ABENC0_DEMO_SERVICE_PROJ%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion%20for%20improvement:)

Example: C0 Released Projection BDEF, Design and Consumption

This topic provides an example for the design of a C0 released projection BDEF. It also shows an example for an extension to this released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry").

Projection BDEF as C0 released API

The following projection BDEF DEMO\_RAP\_PROJ\_EXT\_BEH is based on the CDS projection view DEMO\_RAP\_PROJ\_EXT\_BEH and it fulfills all requirements for C0 release:

-   It uses BDEF strict mode, version 2.
-   It is enabled for RAP extensibility.

Note: This projection BDEF shows how to create a released API. It meets all the requirements for C0 release. However, it is not released under the C0 contract, extend, because it is not intended to be used as an API.

projection;
strict(2);
extensible;
define behavior for demo\_rap\_proj\_ext\_beh alias Root
extensible
{
  use create;
  use update;
  use delete;
}

BDEF projection extension to a C0 released API

The following BDEF projection extension DEMO\_RAP\_PROJ\_EXT\_BEH\_1 extends the projection BDEF displayed above and it obeys the naming rules.

extension for projection;
extend behavior for Root
authorization (global)
{
  use association \_child {create;}
  use action setValue;
  mapping for demo\_rap\_struc corresponding;
}
define behavior for DEMO\_RAP\_PROJ\_EXT\_BEH\_CH alias Child
{
  use association \_parent;
  use action ActionExt;
  field ( readonly ) int\_field3;
}
