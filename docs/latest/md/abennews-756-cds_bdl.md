  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.56](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-756.htm) →  [ABAP RESTful Application Programming Model in ABAP Release 7.56](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-756-restful.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20BDL%20in%20ABAP%20Release%207.56%2C%20ABENNEWS-756-CDS_BDL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP BDL in ABAP Release 7.56

[1\. BDEF Strict Mode](#!ABAP_MODIFICATION_1@1@)
[2\. Nested Determinations on Modify](#!ABAP_MODIFICATION_2@2@)
[3\. RAP BO Operation Addition authorization:update](#!ABAP_MODIFICATION_3@3@)
[4\. Always Flag in Determine Actions](#!ABAP_MODIFICATION_4@4@)
[5\. Global Feature Control](#!ABAP_MODIFICATION_5@5@)
[6\. Global Authorization Control](#!ABAP_MODIFICATION_6@6@)
[7\. Non-Locking Actions](#!ABAP_MODIFICATION_7@7@)
[8\. Unmanaged Early Numbering in Managed BOs](#!ABAP_MODIFICATION_8@8@)
[9\. Implementing Cleanup in Managed BOs](#!ABAP_MODIFICATION_9@9@)
[10\. Define Authorization Context](#!ABAP_MODIFICATION_10@10@)
[11\. With Privileged Mode Disabling](#!ABAP_MODIFICATION_11@11@)
[12\. Projection BDEF, New Actions and Functions](#!ABAP_MODIFICATION_12@12@)
[13\. Projection BDEF, Authorization Concept](#!ABAP_MODIFICATION_13@13@)
[14\. Projection BDEF, Augmented Fields](#!ABAP_MODIFICATION_14@14@)
[15\. Projection BDEF, New Field Characteristic](#!ABAP_MODIFICATION_15@15@)
[16\. Projection BDEF, Operation Augment](#!ABAP_MODIFICATION_16@16@)
[17\. CDS Abstract Behavior Definitions](#!ABAP_MODIFICATION_17@17@)
[18\. Abstract BDEF, with control](#!ABAP_MODIFICATION_18@18@)

Modification 1   

BDEF Strict Mode

[BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") is now available. It can be enabled using the syntax addition [strict](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict_1.htm) and it applies additional syntax checks to [RAP behavior definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry").

Modification 2   

Nested Determinations on Modify

It is now possible to trigger a [determination on modify](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm) by another determination on modify.

Modification 3   

RAP BO Operation Addition authorization:update

The new [RAP BO operation addition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) [authorization:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_update.htm) is available for managed and unmanaged BOs. It delegates the authorization control for an operation to the authorization control that is specified for the update operation.

Modification 4   

Always Flag in Determine Actions

The new addition [always](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm) can be used for determinations and validations assigned to a [determine action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm). When the determine action is called, determinations and validations with this flag are executed regardless of their trigger conditions.

Modification 5   

Global Feature Control

The new RAP BO operation addition [features:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm) can be used to define global feature control for RAP BO operations.

Modification 6   

Global Authorization Control

Global authorization control is available. It can be defined using [authorization master (global)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm).

Modification 7   

Non-Locking Actions

The new RAP BO operation addition [lock:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) can be used to suppress the locking mechanism for an action.

Modification 8   

Unmanaged Early Numbering in Managed BOs

The entity behavior characteristic [early numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_early_numb.htm) can be used to define unmanaged early numbering for all primary key fields of a managed RAP BO.

Modification 9   

Implementing Cleanup in Managed BOs

The new addition [and cleanup](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_saving.htm) is available for additional and unmanaged save in managed RAP BOs. It allows the application developer to implement the cleanup method.

Modification 10   

Define Authorization Context

It is now possible to define [authorization contexts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm) in a RAP behavior definition using the keyword define authorization context. There are different ways to activate an authorization context. When activated, all authorization objects listed in the respective context are always successful, that means, the respective authorization checks are skipped.

Modification 11   

With Privileged Mode Disabling

The new syntax with privileged mode disabling supersedes the deprecated version with privileged mode. The new syntax version disables an [authorization contexts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_context.htm) when accessing the RAP BO in question with a privileged EML call.

Modification 12   

Projection BDEF, New Actions and Functions

It is now possible to define and implement [new actions and functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 13   

Projection BDEF, Authorization Concept

It is now possible to define an [authorization concept](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") that controls access to the newly defined actions and functions in a projection BDEF.

Modification 14   

Projection BDEF, Augmented Fields

[Field characteristics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_projection.htm) can be specified for [augmented fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 15   

Projection BDEF, New Field Characteristic

In [projection BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_projection.htm). It removes the field in question from the BDEF derived types and from all RAP APIs.

Modification 16   

Projection BDEF, Operation Augment

For [projections BDEFs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), the [operation augment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_augment_projection.htm) is available. Augmentation allows incoming requests with a custom implementation to be enhanced, for example with default values.

Modification 17   

CDS Abstract Behavior Definitions

A new implementation type is available: the [CDS abstract behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_abstract.htm). Such abstract BDEFs mainly serve as typing mechanism for deep action or function parameters.

Modification 18   

Abstract BDEF, with control

The optional addition [with control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_abstract.htm) is available for abstract BDEFs. It adds a [%control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) structure to the corresponding derived type structure.