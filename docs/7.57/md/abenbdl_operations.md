  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm) →  [CDS BDL - Entity Behavior Body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - RAP BO Operations, ABENBDL_OPERATIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

CDS BDL - RAP BO Operations

The following types of [RAP BO operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") are available:

-   [Standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm): Create, Read, Update, Delete.
    -   In a [managed RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), these operations, known as [CRUD operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrud_glosry.htm "Glossary Entry") are completely handled by the [managed RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmanaged_rap_bo_prov_glosry.htm "Glossary Entry")
    -   In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), they must be implemented in the ABAP behavior pool in a [RAP handler method](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_for_rap_behv.htm).
-   [Operations for associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_association.htm): [Create by association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") and [read by association](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry"). These operations allow [RAP BO consumers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") to read from the [association target](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenassociation_target_glosry.htm "Glossary Entry") or to create new entity instances of the association target entity.
-   [Nonstandard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard.htm): Actions and [functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_function_glosry.htm "Glossary Entry"). These operations are self-implemented. They can offer scenario-specific functionality and they can consist of multiple standard operations.
-   [Determine actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm): Actions that allow the [business object consumer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") to call [validations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm) and [determinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determinations.htm) on request.
-   [Draft actions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action.htm): Actions that allow manipulating the data on the [draft database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendraft_table_glosry.htm "Glossary Entry"). Draft actions are completely handled by the [RAP framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_framework_glosry.htm "Glossary Entry"), both in a managed and an unmanaged RAP BO.
-   [RAP BO operation additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations_additions.htm) can optionally be used for different types of RAP BO operations.

Hint

In a [projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), these RAP BO operations can be reused using the keyword use. It is also possible to specify new actions and functions in the projection layer.

-   For further details on reuse, see the topic [CDS BDL - use, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_use_projection.htm).
-   For further details on new actions and functions in a projection BDEF, see topic [CDS BDL - actions and functions, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard_projection.htm).

Continue
[CDS BDL - Standard Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_standard_operations.htm)
[CDS BDL - Operations for Associations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_association.htm)
[CDS BDL - Non-Standard Operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_nonstandard.htm)
[CDS BDL - determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action.htm)
[CDS BDL - draft action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_draft_action.htm)
[CDS BDL - RAP BO Operation, Additions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_operations_additions.htm)