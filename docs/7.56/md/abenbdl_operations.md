  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) → 

CDS BDL - RAP BO operations

The following types of [RAP BO operations](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") are available:

-   [Standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)): Create, Read, Update, Delete.
    -   In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), these operations, known as [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") are completely handled by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry")
    -   In an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), they must be implemented in the ABAP behavior pool in a [RAP handler method](javascript:call_link\('abapmethods_for_rap_behv.htm'\)).
-   [Operations for associations](javascript:call_link\('abenbdl_association.htm'\)): [Create by association](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") and [read by association](javascript:call_link\('abenrap_rba_operation_glosry.htm'\) "Glossary Entry"). These operations allow [RAP BO consumers](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") to read from the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") or to create new entity instances of the association target entity.
-   [Nonstandard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)): Actions and [functions](javascript:call_link\('abenrap_function_glosry.htm'\) "Glossary Entry"). These operations are self-implemented. They can offer scenario-specific functionality and they can consist of multiple standard operations.
-   [Determine actions](javascript:call_link\('abenbdl_determine_action.htm'\)): Actions that allow the [business object consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") to call [validations](javascript:call_link\('abenbdl_validations.htm'\)) and [determinations](javascript:call_link\('abenbdl_determinations.htm'\)) on request.
-   [Draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)): Actions that allow manipulating the data on the [draft database table](javascript:call_link\('abendraft_table_glosry.htm'\) "Glossary Entry"). Draft actions are completely handled by the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry"), both in a managed and an unmanaged RAP BO.
-   [RAP BO operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) can optionally be used for different types of RAP BO operations.

Hint

In a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), these RAP BO operations can be reused using the keyword use. It is also possible to specify new actions and functions in the projection layer.

-   For further details on reuse, see the topic [CDS BDL - use, projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   For further details on new actions and functions in a projection BDEF, see topic [CDS BDL - actions and functions, projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).

Continue
[CDS BDL - standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\))
[CDS BDL - operations for associations](javascript:call_link\('abenbdl_association.htm'\))
[CDS BDL - non-standard operations](javascript:call_link\('abenbdl_nonstandard.htm'\))
[CDS BDL - determine actions](javascript:call_link\('abenbdl_determine_action.htm'\))
[CDS BDL - draft actions](javascript:call_link\('abenbdl_draft_action.htm'\))
[CDS BDL - RAP BO operation, additions](javascript:call_link\('abenbdl_operations_additions.htm'\))