  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - determinations](javascript:call_link\('abenbdl_determinations.htm'\)) → 

CDS BDL - determination

This example demonstrates how determinations are defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_SALES\_CDS\_SO\_2 and its child entity DEMO\_SALES\_CDS\_SO\_I\_2. The root entity represents a sales order and the child entity represents a sales order item.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, so, RAP managed'
define root view entity DEMO\_SALES\_CDS\_SO\_2
  as select from demo\_sales\_order
  composition \[0..\*\] of DEMO\_SALES\_CDS\_SO\_I\_2 as \_SalesOrderItem
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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_SALES\_CDS\_SO\_2 is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

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

Definition of determinations

The following determinations are defined in the root entity:

-   setID is a determination on save that is triggered whenever a new instance of the root entity is created. It assigns values to the semantic key field SalesOrderId during the [save sequence](javascript:call_link\('abenrap_save_seq_glosry.htm'\) "Glossary Entry"). The technical key field SoKey is populated by means of internal numbering using the statement [numbering:managed](javascript:call_link\('abenbdl_field_numbering.htm'\)).
-   setStatustoNew sets the status of a newly created sales order to O for open. It is triggered whenever a new sales order is created.
-   TotalPrice sums up the price of all items of a sales order. It is triggered whenever a new sales order is created.

The child entity defines one determination on modify:

-   TotalPrice\_1 is the counterpart to TotalPrice. If a sales order is created without any items, then this determination ensures that the overall price of a sales order is calculated as soon as sales order items are added.

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_SALES\_CDS\_SO\_2. The actual implementation takes place in the CCIMP include and it works as follows:

-   setID generates a random value of type i for the field SalesOrderId of each BO instance.
-   setStatustoNew inserts the value O for Open into column Status for each newly created BO instance.
-   TotalPrice reads the fields GrossAmount and Quantity from the child entity via a [read-by-association operation](javascript:call_link\('abenbdl_association.htm'\)). It first calculates the total price per item and then sums up the prices of all items for each sales order to get the overall price.
-   TotalPrice\_1 works exactly like TotalPrice, but it has different trigger conditions.

Source Code

REPORT demo\_cds\_determination.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(  ).
    DELETE FROM demo\_sales\_order.
    DELETE FROM demo\_sales\_so\_i.
    MODIFY ENTITIES OF demo\_sales\_cds\_so\_2
      ENTITY SalesOrder
        CREATE
          SET FIELDS WITH VALUE #(
           ( %cid = '1' BuyerId = \`AAA\` )
           ( %cid = '2' BuyerId = \`BBB\` ) )
     ENTITY SalesOrder
        CREATE BY \\\_SalesOrderItem
          SET FIELDS WITH VALUE #(
          ( %cid\_ref  = '1'
            %target   = VALUE #(
            ( material = 'aaa' GrossAmount = 123 Quantity = 5 )
            ( material = 'bbb' GrossAmount = 40 Quantity = 1 ) ) )
          ( %cid\_ref  = '2'
            %target   = VALUE #(
            ( material = \`xxx\` GrossAmount = 50 Quantity = 2 )
            ( material = \`yyy\` GrossAmount = 12 Quantity = 1 ) ) ) ).
    COMMIT ENTITIES.
    SELECT so\_key, id, lifecycle\_status, buyer\_id, amount\_sum
    FROM demo\_sales\_order
    INTO TABLE @DATA(determination).
    out->next\_section( 'Determination result'
        )->write( determination
         )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program:

-   Two BO instances are created with the statement MODIFY ENTITY. Two child entities are created for each root entity instance so both sales orders have two sales order items.
-   All three determinations of the root entity are triggered by the creation of new instances and they insert values into the fields ID, LIFECYCLE\_STATUS, and AMOUNT\_SUM.
-   The technical key field SO\_KEY is filled by means of internal numbering.