  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [RAP - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20RAP%20BO%20Operations%2C%20ABENBDL_OPERATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - RAP BO Operations

The following types of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") are available:

-   [Standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)): Create, Read, Update, Delete.
    -   In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), these operations, known as [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") are completely handled by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry")
    -   In an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), they must be implemented in the ABAP behavior pool in a [RAP handler method](javascript:call_link\('abapmethods_for_rap_behv.htm'\)).
-   [Operations for associations](javascript:call_link\('abenbdl_association.htm'\)): [Create by association](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") and [read by association](javascript:call_link\('abenrap_rba_operation_glosry.htm'\) "Glossary Entry"). These operations allow [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") to read from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") or to create new entity instances of the association target entity.
-   [Nonstandard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)): Actions and [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"). These operations are user-implemented. They can offer scenario-specific functionality and they can consist of multiple standard operations.
-   [Determine actions](javascript:call_link\('abenbdl_determine_action.htm'\)): Actions that allow the [business object consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") to call [validations](javascript:call_link\('abenbdl_validations.htm'\)) and [determinations](javascript:call_link\('abenbdl_determinations.htm'\)) on request.
-   [Draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)): Actions that allow manipulating the data on the [draft database table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry"). Draft actions are completely handled by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry"), both in a managed and an unmanaged RAP BO.
-   [RAP BO operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) can optionally be used for different types of RAP BO operations.

Hint

In a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), these RAP BO operations can be reused using the keyword use. It is also possible to specify new actions and functions in the projection layer.

-   For further details on reuse, see the topic [RAP BDL - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   For further details on new actions and functions in a projection BDEF, see topic [RAP - Actions and Functions, Projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).

Continue
[RAP - Standard Operations](javascript:call_link\('abenbdl_standard_operations.htm'\))
[RAP - Operations for Associations](javascript:call_link\('abenbdl_association.htm'\))
[RAP - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\))
[RAP - determine action](javascript:call_link\('abenbdl_determine_action.htm'\))
[RAP - draft action](javascript:call_link\('abenbdl_draft_action.htm'\))
[RAP - RAP BO Operation, Additions](javascript:call_link\('abenbdl_operations_additions.htm'\))