  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756.htm) →  [ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abennews-756-restful.htm) → 

CDS BDL in Release 7.56

[1\. Nested Determinations on Modify](#!ABAP_MODIFICATION_1@1@)
[2\. RAP BO operation addition authorization:update](#!ABAP_MODIFICATION_2@2@)
[3\. Always Flag in Determine Actions](#!ABAP_MODIFICATION_3@3@)
[4\. Global Feature Control](#!ABAP_MODIFICATION_4@4@)
[5\. Global Authorization Control](#!ABAP_MODIFICATION_5@5@)
[6\. Non-Locking Actions](#!ABAP_MODIFICATION_6@6@)
[7\. Unmanaged Early Numbering in Managed BOs](#!ABAP_MODIFICATION_7@7@)
[8\. Implementing Cleanup in Managed BOs](#!ABAP_MODIFICATION_8@8@)
[9\. Define authorization context](#!ABAP_MODIFICATION_9@9@)
[10\. With privileged mode disabling](#!ABAP_MODIFICATION_10@10@)
[11\. Projection BDEF, new actions and functions](#!ABAP_MODIFICATION_11@11@)
[12\. Projection BDEF, authorization concept](#!ABAP_MODIFICATION_12@12@)
[13\. Projection BDEF, augmented fields](#!ABAP_MODIFICATION_13@13@)
[14\. Projection BDEF, new field characteristic](#!ABAP_MODIFICATION_14@14@)
[15\. Projection BDEF, Operation Augment](#!ABAP_MODIFICATION_15@15@)
[16\. CDS Abstract Behavior Definitions](#!ABAP_MODIFICATION_16@16@)

Modification 1   

Nested Determinations on Modify

It is now possible to trigger a [determination on modify](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determinations.htm) by another determination on modify.

Modification 2   

RAP BO operation addition authorization:update

The new [RAP BO operation addition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) [authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm) is available for managed and unmanaged BOs. It delegates the authorization control for an operation to the authorization control that is specified for the update operation.

Modification 3   

Always Flag in Determine Actions

The new addition [always](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm) can be used for determinations and validations assigned to a [determine action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determine_action.htm). When the determine action is called, determinations and validations with this flag are executed regardless of their trigger conditions.

Modification 4   

Global Feature Control

The new RAP BO operation addition [features:global](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_fc.htm) can be used to define global feature control for RAP BO operations.

Modification 5   

Global Authorization Control

Global authorization control is available. It can be defined using [authorization master (global)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization.htm).

Modification 6   

Non-Locking Actions

The new RAP BO operation addition [lock:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) can be used to suppress the locking mechanism for an action.

Modification 7   

Unmanaged Early Numbering in Managed BOs

The entity behavior characteristic [early numbering](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_early_numb.htm) can be used to define unmanaged early numbering for all primary key fields of a managed RAP BO.

Modification 8   

Implementing Cleanup in Managed BOs

The new addition [and cleanup](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_saving.htm) is available for additional and unmanaged save in managed RAP BOs. It allows the application developer to implement the cleanup method.

Modification 9   

Define authorization context

It is now possible to define [authorization contexts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm) in a CDS behavior definition using the keyword define authorization context. There are different ways to activate an authorization context. When activated, all authorization objects listed in the respective context are always successful.

Modification 10   

With privileged mode disabling

The new syntax with privileged mode disabling supersedes the deprecated version with privileged mode. The new syntax version allows to disable an [authorization contexts](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_context.htm) when accessing the RAP BO in question with a privileged EML call.

Modification 11   

Projection BDEF, new actions and functions

It is now possible to define and implement [new actions and functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 12   

Projection BDEF, authorization concept

It is now possible to define an [authorization concept](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") that controls access to the newly defined actions and functions in a projection BDEF.

Modification 13   

Projection BDEF, augmented fields

[Field characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_projection.htm) can be specified for [augmented fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 14   

Projection BDEF, new field characteristic

In [projection BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_projection.htm). It removes the field in question from the BDEF derived types and from all RAP APIs.

Modification 15   

Projection BDEF, Operation Augment

For [projections BDEFs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), the [operation augment](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm) is available. Augmentation allows to enhance incoming requests with a custom implementation, for example with default values.

Modification 16   

CDS Abstract Behavior Definitions

A new implementation type is available: the [CDS abstract behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_abstract.htm). Such abstract BDEFs mainly serve as typing mechanism for deep action or function parameters.