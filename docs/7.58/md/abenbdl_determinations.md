  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20determination%2C%20ABENBDL_DETERMINATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - determination

Syntax

determination DetName *{*on modify { CUD1; CUD2; ... }
                               *|* { field Field1, Field2, ... ; }*}*
                     *|**{*on save   { CUD1; CUD2; ... }
                               *|* { field Field1, Field2, ... ; }*}*

Effect

A [determination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_determination_glosry.htm "Glossary Entry") modifies instances of [RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry") based on trigger conditions. A determination is implicitly invoked by the [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry") if the trigger condition of the determination is fulfilled. Trigger conditions can be [modify operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") ([create, update, delete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm)) CUD1; CUD2; ..., or modified fields Field1; Field2; .... Two types of determinations are distinguished, depending on the stage of the program flow the determination is executed: on modify determinations and on save determinations. A determination can compute data, modify entity instances, and return messages.

Determinations can be carried out at different points in time during the program logic:

-   on modify
    
    The determination is executed immediately after data changes take place in the [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") so that the result is available during the transaction.
    
    Determinations on modify must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR DETERMINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphandler_meth_det.htm) in the local [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
    
-   on save
    
    The determination is executed during the [save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") at the end of an transaction, when changes from the transactional buffer are persistent on the database.
    
    Determinations on save must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR DETERMINE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphandler_meth_det.htm) in the local [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
    

Trigger Conditions

There can be one or more trigger conditions. The trigger conditions can be changes of field values or the execution of one of the [standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_standard_operations.htm) create, update, or delete.

-   create: determination is executed when an instance is created.
-   update: determination is executed when an instance is updated. For determinations defined as on save, update works only in combination with the trigger operation create.
-   delete: determination is executed when an instance is deleted.
-   field: determination is executed when the value of the specified field(s) field1, field2, ... are changed by a create or update operation. The fields that are used for the trigger conditions must belong to the same entity the determination is assigned to.
    
    Note: If a field is tagged with the [RAP field characteristic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_field_char_glosry.htm "Glossary Entry") [notrigger*\[*:warn*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_char.htm), it must not be used in a trigger condition.
    

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") and [draft-enabled](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry") RAP BOs.
    
    Caution: Not available for unmanaged, non-draft RAP BOs.
    
    In [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), determinations are only supported for draft instances, not for active instances.
    
-   [Projection BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry")

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Determinations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/6edb0438d3e14d18b3c403c406fbe209?version=sap_cross_product_abap).

Hints

-   The determination result must not change if the determination is executed several times under the same conditions (idempotence).
-   The execution order of determinations is not fixed. If there is more than one determination triggered by the same condition, the execution order is arbitrary.
-   Once a determination has been triggered, it must run independently from other determinations.
-   If an instance is created and deleted with the same request, it can happen that an [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") read operation in a determination defined as on modify fails as instances with the given key cannot be found.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_SO\_2. The root view entity represents a sales order and the child entity DEMO\_SALES\_CDS\_SO\_I\_2 represents a sales order item. Three determinations are defined in the [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry"):

-   setID assigns values to the semantic key field SalesOrderId during the save sequence. The technical key field SoKey is populated by means of internal numbering using the statement [numbering:managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_numbering.htm).
-   setStatustoNew sets the status of a newly created sales order to O for open. It is triggered whenever a new sales order is created. This status can be changed to Accepted or Rejected during further processing.
-   TotalPrice sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.

The child entity defines one on modify determination:

-   TotalPrice\_1 is the counterpart to TotalPrice. If a sales order is created without any items, then this determination ensures that the overall price of a sales order is calculated as soon as sales order items are added.
    
    managed implementation in class bp\_demo\_sales\_cds\_so\_2 unique;
    strict(2);
    define behavior for DEMO\_SALES\_CDS\_SO\_2 alias SalesOrder
    persistent table demo\_sales\_order
    lock master
    authorization master (global)
    {
      create;
      update;
      association \_SalesOrderItem { create; }
      field ( readonly, numbering : managed ) SoKey;
      field ( readonly ) AmountSum;
      determination setID on save { create; }
      determination setStatustoNew on modify { create; }
      determination TotalPrice on modify { create; }
      mapping for DEMO\_SALES\_ORDER
      {
        SoKey = so\_key;
        SalesOrderId = id;
        BuyerId = buyer\_id;
        Status = lifecycle\_status;
        ShipToId = ship\_to\_id;
        QuantitySum = quantity\_sum;
        UomSum = uom\_sum;
        AmountSum = amount\_sum;
        CurrencySum = currency\_sum;
        CompanyCode = company\_code;
      }
    }
    define behavior for DEMO\_SALES\_CDS\_SO\_I\_2 alias SalesOrderItem
    persistent table demo\_sales\_so\_i
    lock dependent by \_SalesOrder
    authorization dependent by \_SalesOrder
    {
      update;
      delete;
      field ( readonly : update ) ParentKey;
      field ( readonly, numbering : managed ) SoItemKey;
      association \_SalesOrder { }
      determination TotalPrice\_1 on modify { field Quantity,GrossAmount; }
      mapping for DEMO\_SALES\_SO\_I corresponding
      {
        SoItemKey = so\_item\_key;
        ParentKey = parent\_key;
        GrossAmount = gross\_amount;
      }
    }
    

The determinations are implemented in the behavior poolBP\_DEMO\_SALES\_CDS\_SO\_2, see CCIMP include.

The class CL\_DEMO\_CDS\_DETERMINATION accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry"). It creates two BO instances, providing only a value for the field BuyerID for each.
Code snippet:

MODIFY ENTITIES OF demo\_sales\_cds\_so\_2
      ENTITY SalesOrder
        CREATE FIELDS ( buyerid ) WITH VALUE #(
           ( %cid = '1' BuyerId = \`AAA\` )
           ( %cid = '2' BuyerId = \`BBB\` ) ).

Result: The values for the fields so\_key, id, lifecycle\_status, and amount\_sum are determined by the RAP framework.

![Figure](abdoc_determination.png)

Executable Example

The example above is explained in detail in the executable example [RAP BDL - determination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determination_abexa.htm).

Continue
![Example](exa.gif "Example") [RAP - Determination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determination_abexa.htm)