---
title: "CDS BDL - action"
description: |
  This example demonstrates how a RAP action(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_action_glosry.htm 'Glossary Entry') is defined, implemented, and consumed in a managed RAP BO. Data model The CDS data model consists of the root entity DEMO_CDS_PURCH_DOC_M and its ch
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action1_abexa.htm"
abapFile: "abenbdl_action1_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "action1", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - non-standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard.htm) →  [CDS BDL - action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) →  [CDS BDL - Examples of actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_abexas.htm) → 

CDS BDL - action

This example demonstrates how a [RAP action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_action_glosry.htm "Glossary Entry") is defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_CDS\_PURCH\_DOC\_M and its child entity DEMO\_CDS\_PURCH\_DOC\_I\_M. The root entity represents a purchase order and the child entity represents a purchase order item.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, purcdoc, RAP managed'
define root view entity DEMO\_CDS\_PURCH\_DOC\_M
  as select from PurchDocOverallPrice
  composition \[0..\*\] of DEMO\_CDS\_PURCH\_DOC\_I\_M as \_PurchaseDocumentItem
{
  key PurchaseDocument,
      Description,
      Status,
      Priority,
      Currency,
      PurchasingOrganization,
      crea\_date\_time,
      crea\_uname,
      /\* Associations \*/
      \_PurchaseDocumentItem
}

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, purchdocitem, RAP\_m'
define view entity DEMO\_CDS\_PURCH\_DOC\_I\_M
  as select from DEMO\_CDS\_PURCH\_DOC\_I
  association to parent DEMO\_CDS\_PURCH\_DOC\_M as \_PurchaseDocument  
    on $projection.PurchaseDocument = \_PurchaseDocument.PurchaseDocument
{
  key PurchaseDocumentItem,
  key PurchaseDocument,
      Description,
      Vendor,
      VendorType,
      @Semantics.amount.currencyCode: 'Currency'
      Price,
      Currency,
      @Semantics.quantity.unitOfMeasure: 'QuantityUnit'
      Quantity,
      QuantityUnit,
      // Admin Data
      crea\_date\_time,
      crea\_uname,
      /\* Associations \*/
      \_PurchaseDocument
}

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CDS\_PURCH\_DOC\_M is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cds\_purch\_doc\_m unique;
strict;
define behavior for DEMO\_CDS\_PURCH\_DOC\_M alias PurchaseDocument
persistent table demo\_purch\_doc
lock master
etag master crea\_date\_time
authorization master (instance)
{
  create;
  update;
  delete;
  association \_PurchaseDocumentItem { create; }
  action Approve\_Order result \[1\] $self;
  action Reject\_Order  result \[1\] $self;
  field ( readonly )  crea\_uname , crea\_date\_time;
  mapping for demo\_purch\_doc corresponding;
}
define behavior for DEMO\_CDS\_PURCH\_DOC\_I\_M alias PurchaseDocumentItem
persistent table DEMO\_PURCH\_DOC\_I
lock dependent by \_PurchaseDocument
authorization dependent by \_PurchaseDocument
{
  update;
  delete;
  field ( readonly )  PurchaseDocumentItem , PurchaseDocument;
  field ( mandatory ) Price , Quantity , QuantityUnit;
  association \_PurchaseDocument;
  mapping for DEMO\_PURCH\_DOC\_I corresponding;
}

Action definition

Two actions are defined: Approve\_Order and Reject\_Order. If an employee wants to order equipment, the employee creates a purchase order and the manager can approve or reject this purchase order. Both actions have the output parameter $self with cardinality 1, so the parameter result has the same type as the entity for which the action is executed.

action Approve\_Order result \[1\] $self;

action Reject\_Order result \[1\] $self;

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CDS\_PURCH\_DOC\_M. This global class implements the local handler class LHC\_PURCHASEDOCUMENT, which contains two methods, Approve\_Order and Reject\_Order, to implement the actions. The actual implementation takes place in the CCIMP include and it works as follows:

-   For the passed entity instance, column Status is updated with A for Approved or R for Rejected, using the MODIFY ENTITIES statement.
-   A local structure lt\_purchase is created and filled with the entity instance using the statement READ ENTITIES.
-   The output parameter result is filled. If an output parameter is defined, then it must always be filled.

Source Code

REPORT demo\_cds\_purchase.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(  ).
    DELETE FROM demo\_purch\_doc\_i.
    DELETE FROM demo\_purch\_doc.
    MODIFY ENTITY demo\_cds\_purch\_doc\_m
          CREATE SET FIELDS WITH VALUE #(
           ( %cid = 'cid1'
             PurchaseDocument = 'a'
             Description = \`aaa\` )
           ( %cid = 'cid2'
             PurchaseDocument = 'b'
             Description = \`bbb\` ) )
          FAILED DATA(failed)
          REPORTED DATA(reported).
    MODIFY ENTITIES OF demo\_cds\_purch\_doc\_m
    ENTITY PurchaseDocument
    EXECUTE approve\_order
    FROM VALUE #( ( PurchaseDocument = 'a' ) )
    RESULT DATA(result)
    FAILED failed
    REPORTED reported.
    COMMIT ENTITIES RESPONSE OF demo\_cds\_purch\_doc\_m
    FAILED DATA(commit\_failed)
    REPORTED DATA(commit\_reported).
    SELECT PurchaseDocument, Description, Status
    FROM demo\_purch\_doc
    INTO TABLE @DATA(demo\_purch\_doc\_approved).
    out->next\_section( 'approve order'
        )->write( demo\_purch\_doc\_approved
         )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   Two BO instances are created with the statement MODIFY ENTITY.
-   The action Approve\_Order is executed on one of the two instances with the statement EXECUTE.
-   The result, failed, and reported parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database with the statement COMMIT ENTITIES.
-   A SELECT statement is used to read the changed data from the persistent table DEMO\_PURCH\_DOC. As a result of the action, the column Status of the respective instance is filled with A for Accepted.