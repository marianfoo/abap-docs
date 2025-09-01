---
title: "RAP - Extend Determine Action"
description: |
  This example demonstrates how a determine action is extended via a BDEF extension. Data model The CDS data model consists of the root entity DEMO_RAP_EXTENSIBILITY_DET_ACT and its child entity DEMO_RAP_EXT_DET_ACT_CHILD. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUse
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_det_action_ext_abexa.htm"
abapFile: "abenbdl_det_action_ext_abexa.htm"
keywords: ["select", "insert", "update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "det", "action", "ext", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension.htm) →  [RAP - Base BDEF Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extensibility_managed_unm.htm) →  [RAP - extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extension_syntax.htm) →  [RAP - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_extend_beh.htm) →  [RAP - extension\_body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_entity_beh_extension.htm) →  [RAP - Extending Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_ext_elem_ext.htm) →  [RAP - extend determine action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_determine_action_ext.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Extend%20Determine%20Action%2C%20ABENBDL_DET_ACTION_EXT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Extend Determine Action

This example demonstrates how a determine action is extended via a BDEF extension.

Data model

The CDS data model consists of the root entity DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT and its child entity DEMO\_RAP\_EXT\_DET\_ACT\_CHILD.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, so, RAP managed'
define root view entity DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT
  as select from demo\_sales\_order
  composition of exact one to many DEMO\_RAP\_EXT\_DET\_ACT\_CHILD as \_child
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
     \_child
}

CDS transactional interface, root entity:

@EndUserText.label: 'CDS transactional interface'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_RAP\_EXT\_DET\_ACT\_INT  
provider contract transactional\_interface
as projection on DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT
{
  key SoKey,
  SalesOrderId,
  BuyerId,
  Status,
  CreatedBy,
  CreatedOn,
  CreatedAt,
  LastChangedBy,
  LastChangedOn,
  LastChangedAt,
  ShipToId,
  QuantitySum,
  UomSum,
  AmountSum,
  CurrencySum,
  CompanyCode,
  /\* Associations \*/
  \_child: redirected to composition child DEMO\_RAP\_EXT\_DET\_ACT\_INT\_CH
}

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, o\_,i RAP managed'
define view entity DEMO\_RAP\_EXT\_DET\_ACT\_CHILD
  as select from demo\_sales\_so\_i
  association to parent DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT as \_parent  
    on \_parent.SoKey = $projection.ParentKey
{
  key so\_item\_key  as SoItemKey,
      parent\_key   as ParentKey,
      material     as Material,
      posnr        as Posnr,
      @Semantics.amount.currencyCode: 'Currency'
      gross\_amount as GrossAmount,
      currency     as Currency,
      @Semantics.quantity.unitOfMeasure: 'Unit'
      quantity     as Quantity,
      unit         as Unit,
      \_parent
}

CDS transactional interface, child entity:

@EndUserText.label: 'CDS transactional interface, child'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_RAP\_EXT\_DET\_ACT\_INT\_CH  
as projection on DEMO\_RAP\_EXT\_DET\_ACT\_CHILD
{
  key SoItemKey,
  ParentKey,
  Material,
  Posnr,
  GrossAmount,
  Currency,
  Quantity,
  Unit,
  /\* Associations \*/
  \_parent: redirected to parent DEMO\_RAP\_EXT\_DET\_ACT\_INT
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It defines the determine action trigger\_all, which triggers two determinations. The behavior definition is extensible and explicitly allows extensions to the determine action trigger\_all.

managed implementation in class bp\_demo\_rap\_extensibility\_det\_ unique;
strict(2);
extensible
{ with determinations on modify;
  with determinations on save;
  with validations on save; }
with draft;
define behavior for DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT alias Root
persistent table demo\_sales\_order
draft table demo\_sales\_draft
lock master
total etag LastChangedAt
authorization master ( instance )
extensible
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
  field(readonly:update) SoKey;
  draft action Activate optimized;
  draft action Discard;
  draft action Edit;
  draft action Resume;
  draft determine action Prepare extensible
  { determination (always) setID; }
  determination setID on save { create; }
determine action trigger\_all extensible
  {
    determination ( always ) setID;
    determination ( always ) Child ~ TotalPrice;
  }
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
define behavior for DEMO\_RAP\_EXT\_DET\_ACT\_CHILD alias Child
persistent table demo\_sales\_so\_i
draft table sales\_i\_draft
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly : update ) ParentKey, SoItemKey;
  determination TotalPrice on save { create; }
  association \_parent { with draft; }
  mapping for DEMO\_SALES\_SO\_I corresponding
  {
    SoItemKey = so\_item\_key;
    ParentKey = parent\_key;
    GrossAmount = gross\_amount;
  }
}

RAP BO interface

The following RAP BO interface is used as stable public interface for extensions.

interface;
use draft;
extensible;
define behavior for DEMO\_RAP\_EXT\_DET\_ACT\_INT alias Root
{
  use create;
  use update;
  use delete;
  use action trigger\_all;
  use action Activate;
  use action Discard;
  use action Edit;
  use action Resume;
  use action Prepare;
  use association \_child { create; with draft; }
}
define behavior for DEMO\_RAP\_EXT\_DET\_ACT\_INT\_CH alias Child
{
  use update;
  use delete;
  use association \_parent { with draft; }
}

Behavior extension

The BDEF extension DEMO\_RAP\_DET\_ACT\_EXT extends the determine action trigger\_all by adding a new determination on save.

extension using interface DEMO\_RAP\_EXT\_DET\_ACT\_INT
implementation in class bp\_demo\_rap\_det\_act\_ext unique;
extend behavior for Root
{
  determination setStatustoNew on save { create; }
  extend determine action trigger\_all
  {
    determination (always) setStatustoNew;
  }
}

Behavior implementation

For the RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_EXTENSIBILITY\_DET\_, see CCIMP include. This global class implements three methods:

-   get\_instance\_authorizations: Checks the value of field CompanyCode. If the company code is ABCD, update requests are not allowed. If the company code has any other value, updates are allowed.
-   setID: determination on save that inserts a randomly generated integer into field SalesOrderId.
-   TotalPrice: determination on save that multiplies the number of sales order items with the price and adds the result of all categories, thus calculating the total price of all items of a sales order.

For the RAP extension behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_DET\_ACT\_EXT, see CCIMP include. This global class implements the determination setStatustoNew. When called, this determination inserts value O (meaning open), into the field Status.

Note: This is a simple example that serves demonstration purposes.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_ext\_det\_act DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs,
      fill\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_ext\_det\_act IMPLEMENTATION.
  METHOD main.
    SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status
      FROM demo\_sales\_order
      INTO TABLE @FINAL(before\_determination).
    MODIFY ENTITIES OF demo\_rap\_ext\_det\_act\_int
       ENTITY root
       EXECUTE trigger\_all
       FROM VALUE #( ( sokey = '0894EF1643A01EDB90EE45FBFB0C7DAA' )
                     ( sokey = '0894EF1643A01EDB90EE45FBFB0C9DAA'   ) )
       MAPPED FINAL(mapped)
       FAILED FINAL(failed)
       REPORTED FINAL(reported) .
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status
    FROM demo\_sales\_order
    INTO TABLE @FINAL(determination\_successful).
    out->next\_section( 'Before determine action'
     )->write( before\_determination
     )->next\_section( 'Determine action successful'
     )->write( determination\_successful ).
  ENDMETHOD.
  METHOD fill\_dbtabs.
    INSERT demo\_sales\_order FROM TABLE @(  VALUE #(
    ( so\_key = '0894EF1643A01EDB90EE45FBFB0C7DAA' buyer\_id = 'aa' )
    ( so\_key = '0894EF1643A01EDB90EE45FBFB0C9DAA' buyer\_id = 'bb' )
    ) ).
    INSERT demo\_sales\_so\_i FROM TABLE @(  VALUE #(
    ( so\_item\_key = '0894EF1643A01EEB90EFE37277630A36'
      parent\_key = '0894EF1643A01EDB90EE45FBFB0C7DAA'
      gross\_amount = 123
      quantity = 5 )
    ( so\_item\_key = '0894EF1643A01EEB90EFE37277630A37'
      parent\_key = '0894EF1643A01EDB90EE45FBFB0C9DAA'
      gross\_amount = 40
      quantity = 1 )
    ) ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_sales\_order.
    DELETE FROM demo\_sales\_so\_i.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
    fill\_dbtabs(  ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses ABAP SQL and [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the [RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") from an ABAP class:

-   It inserts two parent instances and two child instances directly into the database tables using ABAP SQL [INSERT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinsert_itab.htm). This is done to avoid triggering the determinations (all three of them are triggered by EML [MODIFY ENTITIES CREATE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_entity_entities_op.htm)).
-   It executes the determine action trigger\_all.
-   Using the ABAP SQL [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statement, the content of the parent table before and after executing the determine action is displayed. The fields SalesOrderId, AmountSum, and Status have values that were inserted via the determinations.

The RAP framework executes the implementations in the original and extension ABAP behavior pools in the following order:

-   get\_instance\_authorizations: Checks whether the operation on the root node is authorized.
-   setID, a determination from the root node of the original BDEF.
-   setStatustoNew, a determination from the root node extension.
-   get\_instance\_authorizations: Checks whether the operation on the child node is authorized.
-   TotalPrice, a determination from the child node of the original BDEF.