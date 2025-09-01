---
title: "Naming Rules"
description: |
  The following applies to extensions in ABAP for Cloud Development(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_cloud_dev_glosry.htm 'Glossary Entry'): 1.  If the extension has a namespace prefix(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenname_space_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_consumer_rules_bdef.htm"
abapFile: "abenc0_consumer_rules_bdef.htm"
keywords: ["do", "if", "try", "abenc0", "consumer", "rules", "bdef"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Rules for ABAP Cloud](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_strict_rules.htm) →  [Contract Rules for ABAP Released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for RAP Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_contract_rules_bdef.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20C0%20Contract%20Rules%20for%20Consumers%20of%20RAP%20Behavior%20Definitions%2C%20ABENC0_CONSUMER_RULES_BDEF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion%20for%20improvement:)

C0 Contract Rules for Consumers of RAP Behavior Definitions

The [provider rules](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_provider_rules_cds.htm) for objects with a C0 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to [released APIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreleased_api_glosry.htm "Glossary Entry"). Therefore, the users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during an upgrade.
-   Syntax errors after an upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

When extending BDEFs, consumers must obey the following naming rules to avoid naming conflicts.

Naming Rules   

The following applies to extensions in [ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_cloud_dev_glosry.htm "Glossary Entry"):

1.  If the extension has a [namespace prefix](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenname_space_prefix_glosry.htm "Glossary Entry"), such as /PREFIX/, its elements must also have this prefix.
2.  If the name of the extension starts with Z or with Y, its element names must begin with ZZ or with YY. Additionally, if the element name begins with YY, this prefix YY must not be followed by A, M, S, or the digits 1 to 9.
3.  Otherwise, if the name of the extension does not start with Z or with Y, the element name must not begin with a namespace prefix, nor with ZZ or YY.
4.  If the behavior for an extension node is defined ([extension entity behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_extend.htm)), the element names inside this entity must either be without prefix, or they are checked against the name of the extension according to the rules above.

The following applies to extensions in [Standard ABAP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_abap_glosry.htm "Glossary Entry"):

-   Element names must either be without prefix, or the element names are checked against the name of the extension according to rules 1 - 3 listed above.

The checks apply to the following elements:

-   [Alias names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenalias_glosry.htm "Glossary Entry") of [RAP BO entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").
-   External names of RAP BO entities, specified using the addition [external](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm).
-   Alias names of associations, specified using the addition [abbreviation](abenbdl_association.htm#!ABAP_ADDITION_1@1@).
-   Alias names of [RAP foreign entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry").
-   Names of [RAP actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry") and [RAP functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_function_glosry.htm "Glossary Entry").
-   External names of RAP actions and RAP functions, specified using the addition external.
-   External names of action and function results, specified using the addition [external](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm).
-   Names of [RAP determinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [RAP validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_validation_glosry.htm "Glossary Entry").
-   Names of [RAP BO determine actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry").
-   Names of [RAP business events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_entity_event_glosry.htm "Glossary Entry").

Example Topics   

[Example for a C0 released RAP BO which is extended from ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_demo_rap_bo.htm).

[Example for a C0 released projection BDEF which is extended from the language version ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenc0_demo_service_proj.htm).