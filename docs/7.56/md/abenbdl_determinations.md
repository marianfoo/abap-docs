  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) → 

CDS BDL - determinations

Syntax

determination DetName *{*on modify { CUD1; CUD2; ... }
                               *|* { field Field1, Field2, ... ; }*}*
                     *|**{*on save   { CUD1; CUD2; ... }
                               *|* { field Field1, Field2, ... ; }*}*

Effect

A [determination](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_determination_glosry.htm "Glossary Entry") modifies instances of [RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") based on trigger conditions. A determination is implicitly invoked by the [RAP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_framework_glosry.htm "Glossary Entry") if the trigger condition of the determination is fulfilled. Trigger conditions can be [modify operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") ([create, update, delete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm)) CUD1; CUD2; ..., or modified fields Field1; Field2; .... Two types of determinations are distinguished, depending on the stage of the program flow the determination is executed: on modify determinations and on save determinations. A determination can compute data, modify entity instances, and return messages.

Determinations can be carried out at different points in time during the program logic:

-   on modify
    
    The determination is executed immediately after data changes take place in the [transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") so that the result is available during the transaction.
    
    Determinations on modify must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR DETERMINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_det.htm) in the local [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
    
-   on save
    
    The determination is executed during the [save sequence](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_save_seq_glosry.htm "Glossary Entry") at the end of an transaction, when changes from the transactional buffer are persistent on the database.
    
    Determinations on save must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR DETERMINE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_det.htm) in the local [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). .
    

Trigger conditions

There can be one or more trigger conditions. The trigger conditions can be changes of field values or the execution of one of the [standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) create, update, or delete.

-   create: determination is executed when an instance is created.
-   update: determination is executed when an instance is updated. For determinations defined as on save, update works only in combination with the trigger operation create.
-   delete: determination is executed when an instance is deleted.
-   field: determination is executed when the value of the specified field(s) field1, field2, ... are changed by a create or update operation. The fields that are used for the trigger conditions must belong to the same entity the determination is assigned to.

Availability

-   [Managed RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") and [draft-enabled](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendraft_rap_bo_glosry.htm "Glossary Entry") RAP BOs.
    
    Caution: Not available for unmanaged, non-draft RAP BOs.
    
    In [unmanaged RAP BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), determinations are only supported for draft instances, not for active instances.
    
-   [Projection BOs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry")

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about Determinations.

Hints

-   The determination result must not change if the determination is executed several times under the same conditions (idempotence).
-   The execution order of determinations is not fixed. If there is more than one determination triggered by the same condition, the execution order is arbitrary.
-   Once a determination has been triggered, it must run independently from other determinations.
-   If an instance is created and deleted with the same request, it can happen that an [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") read operation in a determination defined as on modify fails as instances with the given key can't be found.

Example

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_SO\_2. The root view entity represents a sales order and the child entity DEMO\_SALES\_CDS\_SO\_I\_2 represents a sales order item. Three determinations are defined in the root entity:

-   setID assigns values to the semantic key field SalesOrderId during the save sequence. The technical key field SoKey is populated by means of internal numbering using the statement [numbering:managed](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_field_numbering.htm).
-   setStatustoNew sets the status of a newly created sales order to O for open. It is triggered whenever a new sales order is created. This status can be changed to Accepted or Rejected during further processing.
-   TotalPrice sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.

The child entity defines one on modify determination:

-   TotalPrice\_1 is the counterpart to TotalPrice. If a sales order is created without any items, then this determination ensures that the overall price of a sales order is calculated as soon as sales order items are added.
    
    managed implementation in class bp\_demo\_sales\_cds\_so\_2 unique;
    strict;
    define behavior for DEMO\_SALES\_CDS\_SO\_2 alias SalesOrder
    persistent table demo\_sales\_order
    lock master
    authorization master (instance)
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

The program DEMO\_CDS\_DETERMINATION accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry"). It creates two BO instances, providing only a value for the field BuyerID for each.
Code snippet:

MODIFY ENTITIES OF demo\_sales\_cds\_so\_2
      ENTITY SalesOrder
        CREATE
          SET FIELDS WITH VALUE #(
           ( %cid = '1' BuyerId = \`AAA\` )
           ( %cid = '2' BuyerId = \`BBB\` ) ).

Result: The values for the fields so\_key, id, lifecycle\_status, and amount\_sum are determined by the RAP framework.

![Figure](bdoc_determination.png)

Executable Example

The example above is explained in detail in the executable example [CDS BDL - determination](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determination_abexa.htm).

Continue
![Example](exa.gif "Example") [CDS BDL - determination](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_determination_abexa.htm)