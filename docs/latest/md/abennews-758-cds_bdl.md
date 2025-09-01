  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.58](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-758.htm) →  [ABAP RESTful Application Programming Model in ABAP Release 7.58](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-758-restful.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20in%20ABAP%20Release%207.58%2C%20ABENNEWS-758-CDS_BDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL in ABAP Release 7.58

[1\. Interface BDEF, New Field Characteristics](#!ABAP_MODIFICATION_1@1@)
[2\. Interface BDEF, use event](#!ABAP_MODIFICATION_2@2@)
[3\. Managed and Unmanaged RAP BO, New Field Characteristic](#!ABAP_MODIFICATION_3@3@)
[4\. Static Default Factory Actions](#!ABAP_MODIFICATION_4@4@)
[5\. RAP Derived Events](#!ABAP_MODIFICATION_5@5@)
[6\. RAP Side Effects](#!ABAP_MODIFICATION_6@6@)
[7\. Draft Action Activate Optimized](#!ABAP_MODIFICATION_7@7@)
[8\. Authorization Control on Action Level](#!ABAP_MODIFICATION_8@8@)
[9\. with managed instance filter](#!ABAP_MODIFICATION_9@9@)
[10\. Abstract BDEF Extensions](#!ABAP_MODIFICATION_10@10@)
[11\. Abstract BDEF, mandatory:execute for Associations](#!ABAP_MODIFICATION_11@11@)
[12\. Redefined Parameters, Projection or Interface BDEF](#!ABAP_MODIFICATION_12@12@)
[13\. Draft Action AdditionalSave](#!ABAP_MODIFICATION_13@13@)
[14\. BOPF-Based RAP Business Objects](#!ABAP_MODIFICATION_14@14@)

Modification 1   

Interface BDEF, New Field Characteristics

In [RAP interface behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), the following [RAP field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_field_char_glosry.htm "Glossary Entry") are now available:

-   [readonly](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_interface.htm)
-   [mandatory:create](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_interface.htm)
-   [readonly:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_interface.htm)

Modification 2   

Interface BDEF, use event

In [RAP interface behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"), [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") can be reused using the syntax [use event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm).

Modification 3   

Managed and Unmanaged RAP BO, New Field Characteristic

A new [RAP field characteristic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_field_char_glosry.htm "Glossary Entry") is available for managed and unmanaged RAP BOs: [notrigger*\[*:warn*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm). Fields with this attribute must not be used in a trigger condition of a [RAP validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_validation_glosry.htm "Glossary Entry") or a [RAP determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_determination_glosry.htm "Glossary Entry").

Modification 4   

Static Default Factory Actions

The syntax addition [default](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_default_factory.htm) is available for static factory actions in managed, unmanaged, and projection BDEFs. Exactly one static factory action per [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") can be defined as default static factory action. The addition default is evaluated by consuming frameworks, such as OData.

Modification 5   

RAP Derived Events

[RAP derived events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_event_glosry.htm "Glossary Entry") allow the reuse of existing [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") with a custom payload. RAP derived events are available in managed and unmanaged RAP BOs and in [base BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_base_bdef_ext_glosry.htm "Glossary Entry"). They are defined using the syntax [managed event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_managed_event.htm).

Modification 6   

RAP Side Effects

[RAP side effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_side_effects_glosry.htm "Glossary Entry") define interdependencies among RAP BO properties that trigger a reload of the affected properties on the user interface. Side effects are translated into annotations in the OData metadata of a RAP service. The syntax for defining RAP side effects is [side effects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_side_effects.htm).

Modification 7   

Draft Action Activate Optimized

The optional addition [optimized](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm) is now available for the [draft action Activate](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm). SAP recommends always using this addition, since it speeds up the activation of draft instances.

Modification 8   

Authorization Control on Action Level

Two new [RAP BO operation additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) are available for [actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") and [determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry"):

-   [authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm)
-   [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm)

Both of these additions are specified on the action level and they replace the [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm) that is specified in the [authorization master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry").

In managed, unmanaged, and projection BDEFs, these additions are optional. In [base BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_base_bdef_ext_glosry.htm "Glossary Entry"), authorization control on the action level is mandatory.

Modification 9   

with managed instance filter

The optional addition [with managed instance filter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_mngd_instance_check_proj.htm) is available for [projection BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") and [interface BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry"). If specified, the [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_view_cond_expr.htm) condition of the underlying [CDS transactional query](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_transactional_pv_glosry.htm "Glossary Entry") or [CDS transactional interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") is evaluated when the BDEF is accessed with [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry") requests from Web clients.

Modification 10   

Abstract BDEF Extensions

The new statement [extension for abstract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_for_abstract.htm) of the RAP BDL makes it possible to add [abstract BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_abs_bdef_ext_glosry.htm "Glossary Entry") to [abstract behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"). Abstract BDEFs are mainly used as parameters for RAP actions, RAP functions, and RAP business events. An abstract BDEF extension allows you to extend these parameters.

Modification 11   

Abstract BDEF, mandatory:execute for Associations

The optional addition [mandatory:execute](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association_abstract.htm) is now available for associations in [abstract BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"). It declares the association in question as mandatory, that is, whenever the abstract BDEF is used as an [input parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm) for a [RAP action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") or a [RAP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry"), the [%control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_control.htm) flag must be set for this association.

Modification 12   

Redefined Parameters, Projection or Interface BDEF

The input or output parameter of a [RAP action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry"), [RAP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry"), or a [RAP business event](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") that is [reused](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") or an [interface BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_interface_bdef_glosry.htm "Glossary Entry") can optionally be replaced with a dedicated projection-specific structure using the syntax additions [deep parameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_redefine_param.htm) or [deep result](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_redefine_param.htm).

Modification 13   

Draft Action AdditionalSave

A new [draft action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_draft_action_glosry.htm "Glossary Entry") is available, [draft action AdditionalSave](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm). This draft action allows users to define a custom saving strategy for draft instances. It is intended in particular for draft actions with a user-defined implementation, defined using the addition [with additional implementation](abenbdl_draft_action.htm#!ABAP_ADDITION_1@1@).

Modification 14   

BOPF-Based RAP Business Objects

A migration tool has been released to migrate [CDS-based BOPF business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bopf_bo_glosry.htm "Glossary Entry") to [BOPF-based RAP business objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bopf_bo_glosry.htm "Glossary Entry"). For details on BOPF-based RAP business objects, see the topic [RAP - BOPF-Based RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bopf.htm).