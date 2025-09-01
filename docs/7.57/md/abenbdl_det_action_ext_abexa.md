  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [CDS BDL - BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension.htm) →  [CDS BDL - Base BDEF Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extensibility_managed_unm.htm) →  [CDS BDL - extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extension_syntax.htm) →  [CDS BDL - Entity Behavior Extension](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_extend_beh.htm) →  [CDS BDL - extension\_body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_entity_beh_extension.htm) →  [CDS BDL - Extending Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_ext_elem_ext.htm) →  [CDS BDL - extend determine action](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_determine_action_ext.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Extend Determine Action, ABENBDL_DET_ACTION_EXT_ABEXA, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Extend Determine Action

This example demonstrates how a determine action is extended via a BDEF extension.

Data model

The CDS data model consists of the root entity DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT and its child entity DEMO\_RAP\_EXT\_DET\_ACT\_CHILD.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, so, RAP managed'
define root view entity DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT
  as select from demo\_sales\_order
  composition \[0..\*\] of DEMO\_RAP\_EXT\_DET\_ACT\_CHILD as \_child
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

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_EXTENSIBILITY\_DET\_ACT is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as shown below. It defines the determine action trigger\_all, which triggers two determinations. The behavior definition is extensible and explicitly allows extensions to the determine action trigger\_all.

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
  draft action Activate;
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
  field ( readonly : update ) ParentKey;
  determination TotalPrice on save { create; }
  association \_parent { with draft; }
  mapping for DEMO\_SALES\_SO\_I corresponding
  {
    SoItemKey = so\_item\_key;
    ParentKey = parent\_key;
    GrossAmount = gross\_amount;
  }
}

Behavior extension

The BDEF extension DEMO\_RAP\_DET\_ACT\_EXT extends the determine action trigger\_all by adding a new determination on save.

extension implementation in class bp\_demo\_rap\_det\_act\_ext unique;
extend behavior for Root
{
  determination setStatustoNew on save { create; }
  extend determine action trigger\_all
  {
    determination (always) setStatustoNew;
  }
}

Behavior implementation

For the CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_EXTENSIBILITY\_DET\_, see CCIMP include. This global class implements three methods:

-   get\_instance\_authorizations: Checks the value of field CompanyCode. If the company code is ABCD, update requests are not allowed. If the company code has any other value, updates are allowed.
-   setID: determination on save that inserts a randomly generated integer into field SalesOrderId.
-   TotalPrice: determination on save that multiplies the number of sales order items with the price and adds the result of all categories, thus calculating the total price of all items of a sales order.

For the CDS extension behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_DET\_ACT\_EXT, see CCIMP include. This global class implements the determination setStatustoNew. When called, this determination inserts value O (meaning open), into the field Status.

Note: This is a simple example that serves demonstration purposes.

Source Code   

REPORT demo\_cds\_ext\_det\_act.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: class\_constructor, main.
  PRIVATE SECTION.
    CLASS-DATA:
      out       TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      initialize\_dbtabs,
      fill\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status
   FROM demo\_sales\_order
   INTO TABLE @FINAL(before\_determination).
    MODIFY ENTITIES OF demo\_rap\_extensibility\_det\_act
       ENTITY Root
       EXECUTE trigger\_all
       FROM VALUE #( ( sokey = '0894EF1643A01EDB90EE45FBFB0C7DAA' )
                     ( sokey = '0894EF1643A01EDB90EE45FBFB0C9DAA'   ) )
       MAPPED FINAL(mapped)
       FAILED FINAL(failed)
       REPORTED FINAL(reported) .
    COMMIT ENTITIES.
    SELECT so\_key, id, buyer\_id, amount\_sum, lifecycle\_status
    FROM demo\_sales\_order
    INTO TABLE @FINAL(determination\_successful).
    out->next\_section( 'Before determine action'
     )->write( before\_determination
     )->next\_section( 'Determine action successful'
     )->write( determination\_successful
     )->display(  ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
    fill\_dbtabs(  ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_sales\_order.
    DELETE FROM demo\_sales\_so\_i.
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
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses ABAP SQL and [ABAP EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the [RAP business object](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry") from an ABAP program:

-   It inserts two parent instances and two child instances directly into the database tables using ABAP SQL [INSERT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapinsert_itab.htm). This is done to avoid triggering the determinations (all three of them are triggered by EML [MODIFY ENTITIES CREATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm)).
-   It executes the determine action trigger\_all.
-   Using the ABAP SQL [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) statement, the content of the parent table before and after executing the determine action is displayed. The fields SalesOrderId, AmountSum, and Status have values that were inserted via the determinations.

The RAP framework executes the implementations in the original and extension ABAP behavior pools in the following order:

-   get\_instance\_authorizations: Checks whether the operation on the root node is authorized.
-   setID, a determination from the root node of the original BDEF.
-   setStatustoNew, a determination from the root node extension.
-   get\_instance\_authorizations: Checks whether the operation on the child node is authorized.
-   TotalPrice, a determination from the child node of the original BDEF.