---
title: "RAP - RAP BO Operations"
description: |
  The following types of RAP BO operations(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_operation_glosry.htm 'Glossary Entry') are available: -   Standard operations(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm): Create, Read,
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations.htm"
abapFile: "abenbdl_operations.htm"
keywords: ["update", "delete", "do", "if", "try", "method", "data", "types", "abenbdl", "operations"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20RAP%20BO%20Operations%2C%20ABENBDL_OPERATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - RAP BO Operations

The following types of [RAP BO operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") are available:

-   [Standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm): Create, Read, Update, Delete.
    -   In a [managed RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), these operations, known as [CRUD operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrud_glosry.htm "Glossary Entry") are completely handled by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry")
    -   In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), they must be implemented in the ABAP behavior pool in a [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_for_rap_behv.htm).
-   [Operations for associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_association.htm): [Create by association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") and [read by association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry"). These operations allow [RAP BO consumers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") to read from the [association target](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenassociation_target_glosry.htm "Glossary Entry") or to create new entity instances of the association target entity.
-   [Nonstandard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_nonstandard.htm): Actions and [functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_function_glosry.htm "Glossary Entry"). These operations are user-implemented. They can offer scenario-specific functionality and they can consist of multiple standard operations.
-   [Determine actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determine_action.htm): Actions that allow the [business object consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") to call [validations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_validations.htm) and [determinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determinations.htm) on request.
-   [Draft actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm): Actions that allow manipulating the data on the [draft database table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_table_glosry.htm "Glossary Entry"). Draft actions are completely handled by the [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry"), both in a managed and an unmanaged RAP BO.
-   [RAP BO operation additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations_additions.htm) can optionally be used for different types of RAP BO operations.

Hint

In a [projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), these RAP BO operations can be reused using the keyword use. It is also possible to specify new actions and functions in the projection layer.

-   For further details on reuse, see the topic [RAP BDL - use, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm).
-   For further details on new actions and functions in a projection BDEF, see topic [RAP - Actions and Functions, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_nonstandard_projection.htm).

Continue
[RAP - Standard Operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm)
[RAP - Operations for Associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_association.htm)
[RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_nonstandard.htm)
[RAP - determine action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determine_action.htm)
[RAP - draft action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_action.htm)
[RAP - RAP BO Operation, Additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations_additions.htm)