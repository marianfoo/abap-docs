  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) →  [RAP - determination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_determinations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Determination%2C%20ABENBDL_DETERMINATION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Determination

This example demonstrates how determinations are defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_SALES\_CDS\_SO\_2 and its child entity DEMO\_SALES\_CDS\_SO\_I\_2. The root entity represents a sales order and the child entity represents a sales order item.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, so, RAP managed'
define root view entity DEMO\_SALES\_CDS\_SO\_2
  as select from demo\_sales\_order
  composition of exact one to many DEMO\_SALES\_CDS\_SO\_I\_2 as \_SalesOrderItem
{
  key so\_key           as SoKey,
      id               as SalesOrderId,
      buyer\_id         as BuyerId,
      lifecycle\_status as Status,
      created\_by       as CreatedBy,
      created\_on       as CreatedOn,
      created\_at       as CreatedAt,
      last\_changed\_by  as LastChangedBy,
      last\_changed\_on  as LastChangedOn,
      last\_changed\_at  as LastChangedAt,
      ship\_to\_id       as ShipToId,
      quantity\_sum     as QuantitySum,
      uom\_sum          as UomSum,
      amount\_sum       as AmountSum,
      currency\_sum     as CurrencySum,
      company\_code     as CompanyCode,
      \_SalesOrderItem // Make association public
}

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, o\_,i RAP managed'
define view entity DEMO\_SALES\_CDS\_SO\_I\_2  
as select from demo\_sales\_so\_i  
association to parent DEMO\_SALES\_CDS\_SO\_2 as \_SalesOrder  
on \_SalesOrder.SoKey = $projection.ParentKey
{
  key so\_item\_key as SoItemKey,
  parent\_key as ParentKey,
  material as Material,
  posnr as Posnr,
  @Semantics.amount.currencyCode: 'Currency'
  gross\_amount as GrossAmount,
  currency as Currency,
  @Semantics.quantity.unitOfMeasure: 'Unit'
  quantity as Quantity,
  unit as Unit,
  \_SalesOrder
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_SALES\_CDS\_SO\_2 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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

Definition of determinations

The following determinations are defined in the root entity:

-   setID is a determination on save that is triggered whenever a new instance of the root entity is created. It assigns values to the semantic key field SalesOrderId during the [save sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_save_seq_glosry.htm "Glossary Entry"). The technical key field SoKey is populated by means of internal numbering using the statement [numbering:managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_field_numbering.htm).
-   setStatustoNew sets the status of a newly created sales order to O for open. It is triggered whenever a new sales order is created.
-   TotalPrice sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.

The child entity defines one determination on modify:

-   TotalPrice\_1 is the counterpart to TotalPrice. If a sales order is created without any items, then this determination ensures that the overall price of a sales order is calculated as soon as sales order items are added.

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_SALES\_CDS\_SO\_2. The actual implementation takes place in the CCIMP include and it works as follows:

-   setID generates a random value of type i for the field SalesOrderId of each BO instance.
-   setStatustoNew inserts the value O for Open into column Status for each newly created BO instance.
-   TotalPrice reads the fields GrossAmount and Quantity from the child entity via a [read-by-association operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_association.htm). It first calculates the total price per item and then sums up the prices of all items for each sales order to get the overall price.
-   TotalPrice\_1 works exactly like TotalPrice, but it has different trigger conditions.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_determination DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_determination IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_sales\_order.
    DELETE FROM demo\_sales\_so\_i.
    MODIFY ENTITIES OF demo\_sales\_cds\_so\_2
      ENTITY SalesOrder
        CREATE FIELDS ( BuyerId Status ) WITH VALUE #(
           ( %cid = '1' BuyerId = \`AAA\` )
           ( %cid = '2' BuyerId = \`BBB\` ) )
     ENTITY SalesOrder
        CREATE BY \\\_SalesOrderItem
          FIELDS ( Material GrossAmount Quantity ) WITH VALUE #(
          ( %cid\_ref  = '1'
            %target   = VALUE #(
            ( %cid = 'cid\_child1' material = 'aaa'
              GrossAmount = 123 Quantity = 5 )
            ( %cid = 'cid\_child2' material = 'bbb'
              GrossAmount = 40 Quantity = 1 ) ) )
          ( %cid\_ref  = '2'
            %target   = VALUE #(
            ( %cid = 'cid\_child3' material = \`xxx\`
              GrossAmount = 50 Quantity = 2 )
            ( %cid = 'cid\_child4' material = \`yyy\`
              GrossAmount = 12 Quantity = 1 ) ) ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT so\_key, id, lifecycle\_status, buyer\_id, amount\_sum
    FROM demo\_sales\_order
    INTO TABLE @FINAL(determination).
    out->next\_section( 'Determination result'
        )->write( determination ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two BO instances are created with the statement MODIFY ENTITY. Two child entities are created for each root entity instance so both sales orders have two sales order items.
-   All three determinations of the root entity are triggered by the creation of new instances and they insert values into the fields ID, LIFECYCLE\_STATUS, and AMOUNT\_SUM.
-   The technical key field SO\_KEY is filled by means of internal numbering.