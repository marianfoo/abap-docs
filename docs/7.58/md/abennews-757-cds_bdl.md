  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.57](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-757.htm) →  [ABAP RESTful Application Programming Model in ABAP Release 7.57](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-757-restful.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20in%20ABAP%20Release%207.57%2C%20ABENNEWS-757-CDS_BDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL in ABAP Release 7.57

[1\. RAP Late Numbering for Managed and for Draft-Enabled RAP BOs](#!ABAP_MODIFICATION_1@1@)
[2\. Instance-Bound Factory Actions for Managed RAP BOs](#!ABAP_MODIFICATION_2@2@)
[3\. BDEF Privileged Mode for RAP Projection BOs](#!ABAP_MODIFICATION_3@3@)
[4\. CDS Interface Behavior Definitions](#!ABAP_MODIFICATION_4@4@)
[5\. Managed RAP BO, New Field Characteristic](#!ABAP_MODIFICATION_5@5@)
[6\. Unmanaged RAP BO, New Field Characteristic](#!ABAP_MODIFICATION_6@6@)
[7\. Managed RAP BO, with full data](#!ABAP_MODIFICATION_7@7@)
[8\. Variants to Define a RAP Own Authorization Context](#!ABAP_MODIFICATION_8@8@)
[9\. BDEF Extensions for RAP BOs](#!ABAP_MODIFICATION_9@9@)
[10\. BDEF Extensions for RAP Projection BOs](#!ABAP_MODIFICATION_10@10@)
[11\. New Version of BDEF Strict Mode](#!ABAP_MODIFICATION_11@11@)
[12\. Draft Query Views for Draft-Enabled RAP BOs](#!ABAP_MODIFICATION_12@12@)
[13\. Abstract BDEF, New Field Characteristic](#!ABAP_MODIFICATION_13@13@)
[14\. result selective for Deep Result Types](#!ABAP_MODIFICATION_14@14@)
[15\. RAP Business Events](#!ABAP_MODIFICATION_15@15@)
[16\. RAP Save Actions with Phase Specification](#!ABAP_MODIFICATION_16@16@)
[17\. Repeatable RAP Actions and Functions](#!ABAP_MODIFICATION_17@17@)

Modification 1   

RAP Late Numbering for Managed and for Draft-Enabled RAP BOs

[RAP late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm) is now also available for managed RAP BOs, managed draft-enabled RAP BOs, and for unmanaged draft-enabled RAP BOs.

Modification 2   

Instance-Bound Factory Actions for Managed RAP BOs

[Instance-bound factory actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_factory.htm) are now also available for managed RAP BOs.

Modification 3   

BDEF Privileged Mode for RAP Projection BOs

A new syntax variant of [with privileged mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_privileged_mode.htm) is now available for RAP projection BOs.

Modification 4   

CDS Interface Behavior Definitions

A new [implementation type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef_impl_type_glosry.htm "Glossary Entry") is available: the [RAP interface behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo_interface.htm). Such interface BDEFs are based on [CDS transactional interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_trans_interface_glosry.htm "Glossary Entry") and define the behavior of a [RAP BO interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry"). The overall purpose of a RAP BO interface is to project a business object for stable consumption.

Modification 5   

Managed RAP BO, New Field Characteristic

In [managed RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_char.htm). It removes the field in question from the [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and from all RAP APIs.

Modification 6   

Unmanaged RAP BO, New Field Characteristic

In [unmanaged RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_char.htm). It removes the field in question from the [BDEF derived types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") and from all RAP APIs.

Modification 7   

Managed RAP BO, with full data

In [managed RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), the optional addition [with full data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_saving.htm) can be used in combination with one of the [RAP saving options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_saving.htm) to ensure that full instance data is handed over to the save\_modified method of the RAP saver class in the ABAP behavior pool.

Modification 8   

Variants to Define a RAP Own Authorization Context

New variants are available for defining a [RAP own authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_own_ac_glosry.htm "Glossary Entry"):

-   [define own authorization context by privileged mode;](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_def_own_auth_context.htm)
-   [define own authorization context by privileged mode and { ... }](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_def_own_auth_context.htm)

Modification 9   

BDEF Extensions for RAP BOs

[BDEF extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry") for RAP BOs can be defined using the statement [extension](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_managed_unm.htm).

Modification 10   

BDEF Extensions for RAP Projection BOs

[BDEF projection extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projec_bdef_ext_glosry.htm "Glossary Entry") for [RAP projection business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") can be defined using the statement [extension for projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensibility_projection.htm).

Modification 11   

New Version of BDEF Strict Mode

A new version of [BDEF strict mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") is available: Strict mode version 2, specified using [strict(2)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_strict_2.htm). It applies even more syntax checks than the first version.

Modification 12   

Draft Query Views for Draft-Enabled RAP BOs

The new syntax addition [query](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_query_view.htm) is available to define a [draft query view](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_query_view_glosry.htm "Glossary Entry") for a [draft-enabled RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry"). This addition is optional. Only in the context of [RAP extensibility](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extensibility_glosry.htm "Glossary Entry") is it a mandatory prerequisite for the [C0 release](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_provider_rules_bdef.htm) of the [CDS behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") in question.

Modification 13   

Abstract BDEF, New Field Characteristic

In [RAP abstract behavior definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_bdef_glosry.htm "Glossary Entry"), a new [RAP field characteristic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_field_char_glosry.htm "Glossary Entry") is available: [mandatory:execute](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_abstract.htm). It declares the field in question as mandatory. Whenever the hierarchical type is used as input parameter for a RAP action or a RAP function, a value must be supplied.

Modification 14   

result selective for Deep Result Types

The addition [result selective](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm) is now also possible for deep result types. It can be specified for an [output parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm) of a [RAP action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry") or [RAP function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_function_glosry.htm "Glossary Entry") to return only parts of the result structure.

Modification 15   

RAP Business Events

Using [RAP business events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_event_glosry.htm "Glossary Entry"), the ABAP RESTful Application Programming Model now offers native support for event-driven architecture. RAP business events are defined with the language element [event](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_event.htm). A flat or deep output parameter can optionally be specified.

Modification 16   

RAP Save Actions with Phase Specification

[RAP save actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_onsave.htm) can now specify one or both of the [RAP saver methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_saver_method_glosry.htm "Glossary Entry") finalize or adjustnumbers in brackets to indicate the RAP saver method during which the action can be executed.

Modification 17   

Repeatable RAP Actions and Functions

[RAP actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry") and [RAP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_function_glosry.htm "Glossary Entry") can be defined as [repeatable](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_repeatable.htm). This syntax addition explicitly allows multiple executions of the same action or function on the same [RAP BO entity instance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") within the same [ABAP EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenodata_glosry.htm "Glossary Entry") request. The [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") of a repeatable action or function has an extra [%cid](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_cid.htm) component, in contrast to the BDEF derived type of non-repeatable actions or function.