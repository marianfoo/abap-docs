  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [RAP - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [RAP - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20static%2C%20ABENBDL_STATIC%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - static

Syntax

... static ...

Effect

Defines a [RAP BO non-standard operation](javascript:call_link\('abenrap_nstandard_operation_glosry.htm'\) "Glossary Entry") as [static](javascript:call_link\('abenrap_static_operation_glosry.htm'\) "Glossary Entry"). Static RAP BO operations are not bound to any [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") but relate to the complete [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry").

The following non-standard operations can be static:

-   [Non-factory actions](javascript:call_link\('abenrap_non_fac_action_glosry.htm'\) "Glossary Entry")
-   [Factory actions](javascript:call_link\('abenrap_factory_action_glosry.htm'\) "Glossary Entry")
-   [Save actions](javascript:call_link\('abenrap_save_action_glosry.htm'\) "Glossary Entry")
-   [Functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry")

Static operations support [global feature control](javascript:call_link\('abenrap_glo_feature_control_glosry.htm'\) "Glossary Entry") ([features:global](javascript:call_link\('abenbdl_actions_fc.htm'\))) and global [authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") ([authorization:global](javascript:call_link\('abenbdl_actions_auth_global.htm'\))).

Restrictions

-   [Repeatable operations](javascript:call_link\('abenrap_repeatable_action_glosry.htm'\) "Glossary Entry") defined using the addition [repeatable](javascript:call_link\('abenbdl_action_repeatable.htm'\)) cannot be static.
-   [Instance feature control](javascript:call_link\('abenrap_ins_feature_control_glosry.htm'\) "Glossary Entry") defined using [features:instance](javascript:call_link\('abenbdl_actions_fc.htm'\)) is not supported for static operations, because static operations are not bound to any entity instance.
-   Instance [authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") defined using [authorization:instance](javascript:call_link\('abenbdl_actions_auth_instance.htm'\)) is not supported for static operations, because static operations are not bound to any entity instance.