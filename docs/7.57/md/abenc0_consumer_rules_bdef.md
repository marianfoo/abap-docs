  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Rules for Strict ABAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_strict_rules.htm) →  [Contract Rules for Released APIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrestricted_apis.htm) →  [C0 Contract Rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules.htm) →  [C0 Contract Rules for CDS Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_contract_rules_bdef.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: C0 Contract Rules for Consumers of CDS Behavior Definitions, ABENC0_CONSUMER_RULES_BD
EF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

C0 Contract Rules for Consumers of CDS Behavior Definitions

The [provider rules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_provider_rules_cds.htm) for objects with C0 contract ensure that released objects are changed only in a very restricted way and help to avoid errors and interruptions after an SAP upgrade. Nevertheless, the rules do not prescribe full downward compatibility and leave some room for necessary enhancements to released APIs. Therefore, users of released APIs still have to consider the allowed compatible changes and access the APIs in such a way that the following errors and interruptions are avoided:

-   Problems during the upgrade.
-   Syntax errors after the upgrade.
-   Runtime errors after an upgrade.
-   Wrong behavior after an upgrade.

When extending [CDS behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), consumers must obey the following naming rules to avoid naming conflicts.

Naming   

-   If the extension has a namespace prefix, such as /PREFIX/, the names of its elements must not start with a different namespace prefix, nor with Z, nor with Y.
-   If the name of the extension starts with Z or with Y, there is no check.
-   In all other cases, the names of the elements must not start with Z, nor Y, nor with a namespace prefix.

The checks apply to the following elements:

-   [Alias names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalias_glosry.htm "Glossary Entry") of [RAP BO entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").
-   External names of RAP BO entities.
-   Alias names of associations, specified using abbreviation.
-   Alias names of [RAP foreign entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry").
-   Names of [RAP actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_action_glosry.htm "Glossary Entry") and [RAP functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry").
-   External names of RAP actions and RAP functions.
-   External names of action and function results.
-   Names of [RAP determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_determination_glosry.htm "Glossary Entry") and [RAP validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_validation_glosry.htm "Glossary Entry").
-   Names of [RAP BO determine actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_det_action_glosry.htm "Glossary Entry").
-   Names of RAP events.

Example Topics   

[Example for a C0 released RAP BO which is extended from ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_demo_rap_bo.htm).

[Example for a C0 released service projection view which is extended from ABAP for Cloud Development](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenc0_demo_service_proj.htm).