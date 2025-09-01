# ABAP - Keyword Documentation / ABAP - Rules for Strict ABAP / Contract Rules for Released APIs / C0 Contract Rules / C0 Contract Rules for CDS Behavior Definitions

Included pages: 5


### abenc0_contract_rules_bdef.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C0 Contract Rules for CDS Behavior Definitions, ABENC0_CONTRACT_RULES_BDEF, 757%0D%0A
%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C0 Contract Rules for CDS Behavior Definitions

Currently, [CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [projection](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), and [interface](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry") can be released with a [C0 contract for extensibility](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry").

The following topics list the most important rules that must be obeyed for CDS behavior definitions by API providers and API consumers.

-   [C0 Contract Rules for Providers of CDS Behavior Definitions](javascript:call_link\('abenc0_provider_rules_bdef.htm'\))
-   [C0 Contract Rules for Consumers of CDS Behavior Definitions](javascript:call_link\('abenc0_consumer_rules_bdef.htm'\))
-   [Example: C0 Released RAP BO, Design and Consumption](javascript:call_link\('abenc0_demo_rap_bo.htm'\))
-   [Example: C0 Released Service Projection, Design and Consumption](javascript:call_link\('abenc0_demo_service_proj.htm'\))

The general rules for [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") are described in topic [BDEF Extension](javascript:call_link\('abenbdl_extension.htm'\)).

Caution

BDEF extensions for unmanaged RAP BOs are currently still under development. They are not fully supported yet.

Continue
[C0 Contract Rules for Providers of CDS Behavior Definitions](javascript:call_link\('abenc0_provider_rules_bdef.htm'\))
[C0 Contract Rules for Consumers of CDS Behavior Definitions](javascript:call_link\('abenc0_consumer_rules_bdef.htm'\))
[Example: C0 Released RAP BO, Design and Consumption](javascript:call_link\('abenc0_demo_rap_bo.htm'\))
[Example: C0 Released Service Projection, Design and Consumption](javascript:call_link\('abenc0_demo_service_proj.htm'\))


### abenc0_provider_rules_bdef.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C0 Contract Rules for Providers of CDS Behavior Definitions, ABENC0_PROVIDER_RULES_BD
EF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C0 Contract Rules for Providers of CDS Behavior Definitions

Generally, a [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") that is classified with the [C0 contract](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry") must not be deleted after being released as an API but can become deprecated. [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry") themselves must not be C0 released.

The following sections show the most important rules that a C0 contract imposes on CDS behavior definitions.

-   [Prerequisites for C0 Release](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_1)
-   [Naming Rules](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_2)
-   [Stability Rules After Release](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_3)
-   [Example Topics](#@@ITOC@@ABENC0_PROVIDER_RULES_BDEF_4)

Prerequisites for C0 Release   

General Rules

-   CDS behavior definitions can be released under the C0 stability contract for [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry"). C0 release for [ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry") is not possible within ABAP Development Tools.
-   [CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") of type [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), [projection](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), and [interface](javascript:call_link\('abencds_interface_bdef_glosry.htm'\) "Glossary Entry") can be released under the [C0 contract for extensibility](javascript:call_link\('abenc0_contract_glosry.htm'\) "Glossary Entry"). [CDS abstract behavior definitions](javascript:call_link\('abencds_abstract_bdef_glosry.htm'\) "Glossary Entry") cannot be released for extensibility.
-   The behavior definition to be released must not have any syntax errors.
-   [Strict mode version 2](javascript:call_link\('abenbdl_strict_2.htm'\)) must be used.
-   The respective BDEF must be enabled for extensibility using the keyword extensible in the [CDS behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry").

BDEF of Type managed or unmanaged

-   As a prerequisite for C0 release, each [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") must at least have one [RAP BO interface](javascript:call_link\('abenrap_bo_interface_glosry.htm'\) "Glossary Entry") that serves as interface for stable consumption. If this requirement is not met, release is still possible, but a warning message occurs.
-   If the RAP BO is [draft-enabled](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"), a draft query view is mandatory for each extensible [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").
-   A draft query view must be C0 released if the RAP BO entity it belongs to is C0 released.
-   If the RAP BO has the implementation type unmanaged, the annotation @AbapCatalog.extensibility.allowNewCompositions: true is not allowed in the CDS view layer.
-   If the RAP BO has the implementation type managed, all RAP BO entities annotated with @AbapCatalog.extensibility.allowNewCompositions: true in the CDS view layer must be marked as extensible.

BDEF of Type projection

-   If a projection has already been released under the [C1 contract, use system-internally](javascript:call_link\('abenc1_contract_glosry.htm'\) "Glossary Entry"), then C0 release is not possible.
-   Projections with use draft as dependent cannot be C0 released.

BDEF of Type interface

-   The base BO must released for C0 before the interface can be released.
-   The interface must first be released for C1.
-   If the base BO is [draft-enabled](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry"), [use draft](javascript:call_link\('abenbdl_body_interface.htm'\)) is a prerequisite for C0 release.

Naming Rules   

-   If the RAP BO has a namespace prefix, such as /PREFIX/, the names of its elements must not start with a different namespace prefix, nor with Z, nor with Y.
-   If the name of the RAP BO starts with Z or Y, there is no check.
-   In all other cases, the names of the elements must not start with Z, or Y, nor a namespace prefix.

The checks apply to the following elements:

-   [Alias names](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") of [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").
-   External names of RAP BO entities.
-   Alias names of associations, specified using abbreviation.
-   Alias names of [RAP foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry").
-   Names of [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry").
-   External names of RAP actions and RAP functions.
-   External names of action and function results.
-   Names of [RAP determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [RAP validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry").
-   Names of [RAP BO determine actions](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").
-   Names of RAP events.

Stability Rules After Release   

General Rules

-   [RAP draft handling](javascript:call_link\('abenrap_draft_handling_glosry.htm'\) "Glossary Entry") must not be added or removed after release.
-   RAP BO entities and components that are explicitly marked as extensible must not be deleted or renamed and they must remain extensible.
-   [RAP late numbering](javascript:call_link\('abenrap_late_numbering_glosry.htm'\) "Glossary Entry") must not be added or deleted for extensible entities after release.

BDEF of Type managed or unmanaged

-   The [BDEF implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") (managed or unmanaged) must not change.
-   The [RAP extensibility enablement](javascript:call_link\('abenrap_ext_enablement_glosry.htm'\) "Glossary Entry") settings must not be removed. This concerns the following properties:
    -   [extensible with determinations on save](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))
    -   [extensible with determinations on modify](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))
    -   [extensible with validations on save](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))
    -   [extensible with additional save](javascript:call_link\('abenbdl_extensibility_enabling_m_u.htm'\))
-   A [RAP own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") must not be removed (even if it is empty).
-   RAP BO entities declared as extensible must not be deleted and must remain extensible.
-   The name of the [RAP persistent table](javascript:call_link\('abenrap_persistent_table_glosry.htm'\) "Glossary Entry") of an extensible RAP BO entity must not changed nor be replaced by an [unmanaged save](javascript:call_link\('abenrap_unman_save_glosry.htm'\) "Glossary Entry") (which would mean that no persistent table is specified).
    
    Note: The reverse case is possible though. An unmanaged save can be replaced by a persistent table.
    
-   A draft query view in an extensible entity must not be added, nor replaced, nor deleted.
-   Extensible [determine actions](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry") must not be deleted and must remain extensible. The name of an extensible determine action must not change.
-   Extensible [RAP type mappings](javascript:call_link\('abenrap_type_mapping_glosry.htm'\) "Glossary Entry") must not be deleted and must remain extensible. If an extensible RAP type mapping uses corresponding, then this addition corresponding must not be removed.

BDEF of Type projection

-   The [BDEF implementation type](javascript:call_link\('abencds_bdef_impl_type_glosry.htm'\) "Glossary Entry") must remain stable and must not change, for example, from projection to interface.
-   [use draft](javascript:call_link\('abenbdl_bdef_projection_header.htm'\)) must not be added or removed.
-   The projection must remain extensible.
-   The name of the projected BO must not change.
-   A [RAP own authorization context](javascript:call_link\('abencds_own_ac_glosry.htm'\) "Glossary Entry") must not be removed (even if it is empty).
-   RAP BO entities declared as extensible must not be deleted and must remain extensible.
-   Alias names of extensible entities must not be changed or deleted. New alias names can be added.
-   Extensible RAP type mappings must not be deleted and must remain extensible.

BDEF of Type interface

-   The name of the projected BO must not change.
-   use draft must not be added or removed.
-   Alias names must not change.
-   All associations exposed in an interface, including [cross-BO associations](javascript:call_link\('abencds_cross_bo_assoc_glosry.htm'\) "Glossary Entry") and [ancestor associations](javascript:call_link\('abenbdl_ancestor_ext.htm'\)), must remain stable. They must not be deleted or disabled.

Example Topics   

[Example for a C0 released RAP BO which is extended from ABAP for Cloud Development](javascript:call_link\('abenc0_demo_rap_bo.htm'\)).

[Example for a C0 released service projection view which is extended from ABAP for Cloud Development](javascript:call_link\('abenc0_demo_service_proj.htm'\)).


### abenc0_consumer_rules_bdef.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C0 Contract Rules for Consumers of CDS Behavior Definitions, ABENC0_CONSUMER_RULES_BD
EF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C0 Contract Rules for Consumers of CDS Behavior Definitions

The [provider rules](javascript:call_link\('abenc0_provider_rules_cds.htm'\)) for objects with C0 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

When extending [CDS behavior definitions](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry"), consumers must obey the following naming rules to avoid naming conflicts.

Naming   

-   If the extension has a namespace prefix, such as /PREFIX/, the names of its elements must not start with a different namespace prefix, nor with Z, nor with Y.
-   If the name of the extension starts with Z or with Y, there is no check.
-   In all other cases, the names of the elements must not start with Z, nor Y, nor with a namespace prefix.

The checks apply to the following elements:

-   [Alias names](javascript:call_link\('abenalias_glosry.htm'\) "Glossary Entry") of [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").
-   External names of RAP BO entities.
-   Alias names of associations, specified using abbreviation.
-   Alias names of [RAP foreign entities](javascript:call_link\('abenrap_foreign_entity_glosry.htm'\) "Glossary Entry").
-   Names of [RAP actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") and [RAP functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry").
-   External names of RAP actions and RAP functions.
-   External names of action and function results.
-   Names of [RAP determinations](javascript:call_link\('abenrap_determination_glosry.htm'\) "Glossary Entry") and [RAP validations](javascript:call_link\('abenrap_validation_glosry.htm'\) "Glossary Entry").
-   Names of [RAP BO determine actions](javascript:call_link\('abenrap_bo_det_action_glosry.htm'\) "Glossary Entry").
-   Names of RAP events.

Example Topics   

[Example for a C0 released RAP BO which is extended from ABAP for Cloud Development](javascript:call_link\('abenc0_demo_rap_bo.htm'\)).

[Example for a C0 released service projection view which is extended from ABAP for Cloud Development](javascript:call_link\('abenc0_demo_service_proj.htm'\)).


### abenc0_demo_rap_bo.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: C0 Released RAP BO, Design and Consumption, ABENC0_DEMO_RAP_BO, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example: C0 Released RAP BO, Design and Consumption

This topic provides an example for the design of a C0 released RAP BO. It also shows an example for an extension to this released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry").

CDS behavior definition of type managed as C0 released API

The following CDS behavior definition DEMO\_RAP\_BASE\_DET\_VAL is based on the CDS view entity DEMO\_RAP\_BASE\_DET\_VAL and it fulfills all requirements for C0 release:

-   It uses [strict mode 2](javascript:call_link\('abenbdl_strict_2.htm'\)).
-   It is declared as extensible.

Note: This CDS behavior definition demonstrates the design of a released API, but it is not actually released for C0, since it is not intended to serve as released API.

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
}

BDEF extension to a C0 released API

The following BDEF extension DEMO\_RAP\_EXT\_DET\_VAL extends the RAP BO displayed above and it obeys the naming rules.

extension implementation in class bp\_demo\_rap\_ext\_det\_val unique;
extend behavior for DEMO\_RAP\_BASE\_DET\_VAL
{
  determination setStatus on save { create; }
}


### abenc0_demo_service_proj.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Rules for Strict ABAP](javascript:call_link\('abenabap_strict_rules.htm'\)) →  [Contract Rules for Released APIs](javascript:call_link\('abenrestricted_apis.htm'\)) →  [C0 Contract Rules](javascript:call_link\('abenc0_contract_rules.htm'\)) →  [C0 Contract Rules for CDS Behavior Definitions](javascript:call_link\('abenc0_contract_rules_bdef.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example: C0 Released Service Projection, Design and Consumption, ABENC0_DEMO_SERVICE_
PROJ, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example: C0 Released Service Projection, Design and Consumption

This topic provides an example for the design of a C0 released service projection. It also shows an example for an extension to this released API from the [restricted ABAP language version](javascript:call_link\('abenrestricted_version_glosry.htm'\) "Glossary Entry") [ABAP for Cloud Development](javascript:call_link\('abenabap_for_sap_cloud_glosry.htm'\) "Glossary Entry").

Service projection as C0 released API

The following CDS projection behavior definition DEMO\_RAP\_PROJ\_EXT\_BEH is based on the CDS projection view DEMO\_RAP\_PROJ\_EXT\_BEH and it fulfills all requirements for C0 release:

-   It uses [strict mode 2](javascript:call_link\('abenbdl_strict_2.htm'\)).
-   It is declared as extensible.

Note: This projection BDEF demonstrates the design of a released API, but it is not actually released for C0, since it is not intended to serve as released API.

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
