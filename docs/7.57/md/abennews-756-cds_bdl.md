  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.56](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-756.htm) →  [ABAP RESTful Application Programming Model in Release 7.56](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-756-restful.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL in Release 7.56, ABENNEWS-756-CDS_BDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

CDS BDL in Release 7.56

[1\. Nested Determinations on Modify](#!ABAP_MODIFICATION_1@1@)
[2\. RAP BO Operation Addition authorization:update](#!ABAP_MODIFICATION_2@2@)
[3\. Always Flag in Determine Actions](#!ABAP_MODIFICATION_3@3@)
[4\. Global Feature Control](#!ABAP_MODIFICATION_4@4@)
[5\. Global Authorization Control](#!ABAP_MODIFICATION_5@5@)
[6\. Non-Locking Actions](#!ABAP_MODIFICATION_6@6@)
[7\. Unmanaged Early Numbering in Managed BOs](#!ABAP_MODIFICATION_7@7@)
[8\. Implementing Cleanup in Managed BOs](#!ABAP_MODIFICATION_8@8@)
[9\. Define Authorization Context](#!ABAP_MODIFICATION_9@9@)
[10\. With Privileged Mode Disabling](#!ABAP_MODIFICATION_10@10@)
[11\. Projection BDEF, New Actions and Functions](#!ABAP_MODIFICATION_11@11@)
[12\. Projection BDEF, Authorization Concept](#!ABAP_MODIFICATION_12@12@)
[13\. Projection BDEF, Augmented Fields](#!ABAP_MODIFICATION_13@13@)
[14\. Projection BDEF, New Field Characteristic](#!ABAP_MODIFICATION_14@14@)
[15\. Projection BDEF, Operation Augment](#!ABAP_MODIFICATION_15@15@)
[16\. CDS Abstract Behavior Definitions](#!ABAP_MODIFICATION_16@16@)

Modification 1   

Nested Determinations on Modify

It is now possible to trigger a [determination on modify](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm) by another determination on modify.

Modification 2   

RAP BO Operation Addition authorization:update

The new [RAP BO operation addition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations_additions.htm) [authorization:update](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_auth_update.htm) is available for managed and unmanaged BOs. It delegates the authorization control for an operation to the authorization control that is specified for the update operation.

Modification 3   

Always Flag in Determine Actions

The new addition [always](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm) can be used for determinations and validations assigned to a [determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm). When the determine action is called, determinations and validations with this flag are executed regardless of their trigger conditions.

Modification 4   

Global Feature Control

The new RAP BO operation addition [features:global](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_actions_fc.htm) can be used to define global feature control for RAP BO operations.

Modification 5   

Global Authorization Control

Global authorization control is available. It can be defined using [authorization master (global)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization.htm).

Modification 6   

Non-Locking Actions

The new RAP BO operation addition [lock:none](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_action.htm) can be used to suppress the locking mechanism for an action.

Modification 7   

Unmanaged Early Numbering in Managed BOs

The entity behavior characteristic [early numbering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_early_numb.htm) can be used to define unmanaged early numbering for all primary key fields of a managed RAP BO.

Modification 8   

Implementing Cleanup in Managed BOs

The new addition [and cleanup](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_saving.htm) is available for additional and unmanaged save in managed RAP BOs. It allows the application developer to implement the cleanup method.

Modification 9   

Define Authorization Context

It is now possible to define [authorization contexts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm) in a CDS behavior definition using the keyword define authorization context. There are different ways to activate an authorization context. When activated, all authorization objects listed in the respective context are always successful, that means, the respective authorization checks are skipped.

Modification 10   

With Privileged Mode Disabling

The new syntax with privileged mode disabling supersedes the deprecated version with privileged mode. The new syntax version disables an [authorization contexts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm) when accessing the RAP BO in question with a privileged EML call.

Modification 11   

Projection BDEF, New Actions and Functions

It is now possible to define and implement [new actions and functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 12   

Projection BDEF, Authorization Concept

It is now possible to define an [authorization concept](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry") that controls access to the newly defined actions and functions in a projection BDEF.

Modification 13   

Projection BDEF, Augmented Fields

[Field characteristics](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_projection.htm) can be specified for [augmented fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_augment_projection.htm) in a [projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry").

Modification 14   

Projection BDEF, New Field Characteristic

In [projection BDEFs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), a new field characteristic is available: [field(suppress)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_field_projection.htm). It removes the field in question from the BDEF derived types and from all RAP APIs.

Modification 15   

Projection BDEF, Operation Augment

For [projections BDEFs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), the [operation augment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_augment_projection.htm) is available. Augmentation allows incoming requests with a custom implementation to be enhanced, for example with default values.

Modification 16   

CDS Abstract Behavior Definitions

A new implementation type is available: the [CDS abstract behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_abstract.htm). Such abstract BDEFs mainly serve as typing mechanism for deep action or function parameters.