  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - RAP BO Operation, Additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20internal%2C%20ABENBDL_INTERNAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - internal

Syntax

... internal ...

Effect

Defines a [RAP BO operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") as [internal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_internal_operation_glosry.htm "Glossary Entry"). That means that the operation in question can only be accessed from within the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), for example from an [action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm), a [validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validations.htm), or a [determination](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determinations.htm). When an external [RAP BO consumer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") tries to execute an internal RAP BO operation, a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry") occurs.

internal can be applied to the following operations:

-   [standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm)
-   [operations for associations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_association.htm)
-   [actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm)
-   [functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_function.htm)
-   [determine actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action.htm)
-   [draft actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm)

This feature is provided by the [RAP framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_framework_glosry.htm "Glossary Entry"). No implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is required.

Hints

-   If an operation is marked as internal, [feature control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm) is not supported. Feature control is for external access control and is not required for internal operations.
-   [precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm) is not available for internal operations.
-   [authorization:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_update.htm), [authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm), and [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm) are not available for internal operations.

Example

The following example shows a managed BDEF that defines the internal action calculateTotalAmount and the on modify determination calcTotal.

managed implementation in class bp\_demo\_rap\_internal unique;
strict(2);
define behavior for DEMO\_RAP\_INTERNAL alias RootEntity
persistent table demo\_dbtab\_field
lock master
authorization master (global)
{
  create;
  update;
  delete;
  field(numbering:managed, readonly) KeyField;
  internal action calculateTotalAmount;
  determination calcTotal on modify { create; }
  mapping for demo\_dbtab\_field
  {
    KeyField = key\_field;
    CharField = char\_field1;
    Amount = int\_field1;
    Quantity = int\_field2;
    Total = int\_field3;
  }
}

The internal action multiplies the value of field Quantity with the value of field Amount and inserts the result into field Total per entity instance. It is executed from the ABAP behavior pool by the on modify determination calcTotal.

Code snippet: determination that triggers the internal action:

METHOD calcTotal.
  MODIFY ENTITIES OF demo\_rap\_internal IN LOCAL MODE
      ENTITY RootEntity
        EXECUTE calculateTotalAmount
          FROM CORRESPONDING #( keys )
          REPORTED DATA(lt\_reported).
ENDMETHOD.

For the full ABAP behavior pool implementation, see CCIMP include.

The ABAP class CL\_DEMO\_RAP\_INTERNAL uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object:

-   It creates five new entity instances by specifying values for the fields Amount and Quantity.
    
    Code snippet:
    

DELETE FROM demo\_dbtab\_field.
    MODIFY ENTITIES OF demo\_rap\_internal
       ENTITY RootEntity
       CREATE FIELDS ( Amount Quantity Total ) WITH VALUE #(
       ( %cid = '1' Amount = 16  Quantity = 1 )
       ( %cid = '2' Amount = 211 Quantity = 2 )
       ( %cid = '3' Amount = 3   Quantity = 3 )
       ( %cid = '4' Amount = 18  Quantity = 4 )
       ( %cid = '5' Amount = 10  Quantity = 5 ) )
          MAPPED FINAL(mapped)
          FAILED  FINAL(failed)
          REPORTED FINAL(reported).
    COMMIT ENTITIES.

-   Using the ABAP SQL SELECT statement, the content of the underlying database table is displayed.

Result: for each entity instance, the value of the field Total is calculated.

![Figure](abdoc_internal.png)