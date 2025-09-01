---
title: "RAP - static"
description: |
  Syntax ... static ... Effect Defines a RAP BO non-standard operation(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_nstandard_operation_glosry.htm 'Glossary Entry') as static(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_static_operation_glosry.
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_static.htm"
abapFile: "abenbdl_static.htm"
keywords: ["do", "if", "try", "abenbdl", "static"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - RAP BO Operation, Additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20static%2C%20ABENBDL_STATIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - static

Syntax

... static ...

Effect

Defines a [RAP BO non-standard operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_nstandard_operation_glosry.htm "Glossary Entry") as [static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_static_operation_glosry.htm "Glossary Entry"). Static RAP BO operations are not bound to any [RAP BO entity instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") but relate to the complete [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry").

The following non-standard operations can be static:

-   [Non-factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_non_fac_action_glosry.htm "Glossary Entry")
-   [Factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_factory_action_glosry.htm "Glossary Entry")
-   [Save actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_save_action_glosry.htm "Glossary Entry")
-   [Functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry")

Static operations support [global feature control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_glo_feature_control_glosry.htm "Glossary Entry") ([features:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm)) and global [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") ([authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm)).

Restrictions

-   [Repeatable operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_repeatable_action_glosry.htm "Glossary Entry") defined using the addition [repeatable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_repeatable.htm) cannot be static.
-   [Instance feature control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_ins_feature_control_glosry.htm "Glossary Entry") defined using [features:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm) is not supported for static operations, because static operations are not bound to any entity instance.
-   Instance [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") defined using [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm) is not supported for static operations, because static operations are not bound to any entity instance.