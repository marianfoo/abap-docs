  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20validation%2C%20ABENBDL_VALIDATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - validation

Syntax

validation ValName on save { CUD1; CUD2; ... }
                         *|* { field Field1, Field2, ... ; }

Effect

Checks the consistency of RAP business object instances based on trigger conditions. A [validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_validation_glosry.htm "Glossary Entry") is automatically invoked by the [RAP framework](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_framework_glosry.htm "Glossary Entry") if the trigger condition of the validation is fulfilled. Trigger conditions can be [modify operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") ([create, update, delete](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm)) CUD1; CUD2; ..., or modified fields Field1; Field2; .... Validations are always invoked during the save sequence at the end of a transaction and this is indicated by the mandatory addition on save. An invoked validation can reject inconsistent instance data from being saved and return messages to the consumer. Validations must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR VALIDATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_validate.htm) in the local [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

Trigger Conditions

There can be one or more trigger conditions. The trigger conditions can be changes of field values or the execution of one of the [standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm) create, update, or delete. When one of these operations is executed for a draft instance or for an active instance, validations with the respective trigger operations are triggered. Multiple trigger conditions can be combined.

-   create: validation is executed when an instance is created.
-   update: validation is executed when an instance is updated.
    
    Note: Update works only in combination with the trigger operation create.
    
-   delete: validation is executed when an instance is deleted.
-   field: validation is executed when the value of the specified field(s) Field1, Field2, ... are changed by a create or update operation. The fields that are used for the trigger conditions must belong to the same entity the validation is assigned to.
    
    Note: If a field is tagged with the [RAP field characteristic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_field_char_glosry.htm "Glossary Entry") [notrigger*\[*:warn*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_field_char.htm), it must not be used in a trigger condition.
    

Validation Fails, Reactions

If a validation fails for a certain entity instance, the following reactions occur:

-   An error message can be written to the [reported](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) structure of the [MODIFY ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) statement.
-   An entry is returned in the [failed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) and [reported](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_response.htm) structures of the [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement.
-   The operation fails and the complete content of the [transactional buffer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") of the current [RAP transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_luw_glosry.htm "Glossary Entry") is rejected. A commit to the database happens only if all data changes are consistent. One inconsistency leads to a rejection of all the content in the transactional buffer.
-   no further data changes are possible as long as the invalid instances aren't corrected. An invalid entity instance must either be corrected using an [update operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_standard_operations.htm), or the transactional buffer must be cleared using the EML statement [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprollback_entities.htm). The reason for this is that the [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement aborts the save sequence in case of invalid instances and the transactional buffer is not emptied.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") and [draft-enabled](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry") RAP BOs.
    
    Caution: Not available for unmanaged, non-draft RAP BOs.
    

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Validations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/171e26c36cca42699976887b4c8a83bf?version=sap_cross_product_abap).

Hints

-   The execution order of validations is not fixed. If there is more than one validation triggered by the same condition, the execution order is not predictable.
-   It is not allowed to use EML [MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities.htm) statements in the implementation of validations.

Example

The following example shows a managed BDEF that defines the validation ValidateBuyerId.

managed implementation in class bp\_demo\_sales\_cds\_so\_1 unique;
strict(2);
define behavior for DEMO\_SALES\_CDS\_SO\_1 alias SalesOrder
persistent table demo\_sales\_order
lock master
authorization master (global)
{
  create;
  update;
  field ( readonly, numbering : managed ) SoKey;
  validation ValidateBuyerId on save { field BuyerId; }
  mapping for DEMO\_SALES\_ORDER corresponding
  {
    SoKey = so\_key;
    BuyerId = buyer\_id;
    ShipToId = ship\_to\_id;
    QuantitySum = quantity\_sum;
    UomSum = uom\_sum;
    AmountSum = amount\_sum;
    CurrencySum = currency\_sum;
    CompanyCode = company\_code;
  }
}

The validation is implemented in the ABAP behavior pool. It checks if the buyer ID specified in a sales order is valid by checking whether this buyer ID exists in the database table that lists all business partners. It is triggered as soon as the field BuyerId is changed. If the buyer ID is not valid, the data changes are rejected and An error message is returned.

EML access 1: valid instances are committed to the database, for invalid instances, an error message is returned.

The class CL\_DEMO\_CDS\_VALIDATION accesses the business object using [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry"). It creates three BO instances - one of them is valid, two are invalid. The valid entity instance is committed to the database, while for the invalid instances, error messages are returned. The valid entity instance is created in a different RAP transaction than the invalid ones. If all three entity instances were created in one RAP transaction - in this case, with the same COMMIT ENTITIES statement - all three of them would be rejected.

Result: valid instances are committed to the database, for invalid instances, an error message is returned.

![Figure](abdoc_validation.png)

EML access 2: if a RAP transaction contains only one inconsistent instance, the complete content of the transactional buffer is rejected.

The class CL\_DEMO\_CDS\_VALIDATION\_1 demonstrates that validations accept or reject data changes per RAP transaction. It creates the same three BO instances as the report DEMO\_CDS\_VALIDATION, one of them valid, the other two invalid.

Code snippet:

DELETE FROM demo\_sales\_order.
    MODIFY ENTITIES OF demo\_sales\_cds\_so\_1
          ENTITY SalesOrder
            CREATE FIELDS ( BuyerId ) WITH VALUE #(
               ( %cid = '1' BuyerId = \`a\` )
               ( %cid = '2' BuyerId = \`CCC\` )
               ( %cid = '3' BuyerId = 'DDD' ) )
               MAPPED FINAL(mapped)
               FAILED FINAL(failed)
               REPORTED FINAL(reported).
    COMMIT ENTITIES.

Since this RAP transaction contains two inconsistent instances, all data changes are rejected, even the valid instance.

Result: The valid instance is not committed to the database.

![Figure](abdoc_validation_failed.png)

EML access 3: if an invalid instance is not corrected or deleted proactively, no further data changes are possible.

The class CL\_DEMO\_CDS\_VALIDATION\_2 demonstrates how an invalid instance blocks further changes:

-   it creates one valid instance and commits it to the database.
-   it tries to create an invalid instance. This is rejected by the validation.
-   it tries to create another valid instance. This is rejected. It is required to first correct or delete the invalid instance.

Code snippet:

" valid instance: commit works.
MODIFY ENTITIES OF demo\_sales\_cds\_so\_1
          ENTITY SalesOrder
          CREATE FIELDS ( BuyerId ) WITH VALUE #(
               ( %cid = '1' BuyerId = \`a\` ) )
               MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.
" invalid instances: commit fails.
    MODIFY ENTITIES OF demo\_sales\_cds\_so\_1
         ENTITY SalesOrder
         CREATE FIELDS ( BuyerId ) WITH VALUE #(
              ( %cid = '2' BuyerId = \`CCC\` )
              ( %cid = '3' BuyerId = 'DDD' ) )
               MAPPED FINAL(mapped1)
               FAILED FINAL(failed1)
               REPORTED FINAL(reported1).
    COMMIT ENTITIES RESPONSE OF demo\_sales\_cds\_so\_1
    FAILED FINAL(failed\_commit)
    REPORTED FINAL(reported\_commit).
" valid instance: commit fails. Invalid instances must be
" corrected or deleted first.
    MODIFY ENTITIES OF demo\_sales\_cds\_so\_1
         ENTITY SalesOrder
         CREATE FIELDS ( BuyerId ) WITH VALUE #(
              ( %cid = '1' BuyerId = \`b\` ) )
              MAPPED mapped
              FAILED failed
              REPORTED reported.
    COMMIT ENTITIES.

Result: only the first valid instance is committed to the database. The second valid instance is blocked.

![Figure](abdoc_validation_failed_1.png)

Executable Example

The example above is explained in detail in the executable example [RAP BDL - validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validation_abexa.htm).

Continue
![Example](exa.gif "Example") [RAP - Validation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_validation_abexa.htm)