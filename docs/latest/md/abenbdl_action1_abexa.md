---
title: "RAP - Action"
description: |
  This example demonstrates how a RAP action(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm 'Glossary Entry') is defined, implemented, and consumed in a managed RAP BO. Data model The CDS data model consists of the root entity DEMO_CDS_PURCH_DOC_M and i
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action1_abexa.htm"
abapFile: "abenbdl_action1_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abenbdl", "action1", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard.htm) →  [RAP - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) →  [RAP - Examples of Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Action%2C%20ABENBDL_ACTION1_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Action

This example demonstrates how a [RAP action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") is defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_CDS\_PURCH\_DOC\_M and its child entity DEMO\_CDS\_PURCH\_DOC\_I\_M. The root entity represents a purchase order and the child entity represents a purchase order item.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, purcdoc, RAP managed'
define root view entity DEMO\_CDS\_PURCH\_DOC\_M
  as select from DEMO\_CDS\_OVERALL\_PRICE
  composition of exact one to many DEMO\_CDS\_PURCH\_DOC\_I\_M  
    as \_PurchaseDocumentItem
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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CDS\_PURCH\_DOC\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cds\_purch\_doc\_m unique;
strict(2);
define behavior for DEMO\_CDS\_PURCH\_DOC\_M alias PurchaseDocument
persistent table demo\_purch\_doc
lock master
etag master crea\_date\_time
authorization master (global)
{
  create;
  update;
  delete;
  association \_PurchaseDocumentItem { create; }
  action Approve\_Order result \[1\] $self;
  action Reject\_Order  result \[1\] $self;
  field(readonly:update) PurchaseDocument;
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

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CDS\_PURCH\_DOC\_M. This global class implements the local handler class LHC\_PURCHASEDOCUMENT, which contains two methods, Approve\_Order and Reject\_Order, to implement the actions. The actual implementation takes place in the CCIMP include and it works as follows:

-   For the passed entity instance, column Status is updated with A for Approved or R for Rejected, using the MODIFY ENTITIES statement.
-   A local structure lt\_purchase is created and filled with the entity instance using the statement READ ENTITIES.
-   The output parameter result is filled. If an output parameter is defined, then it must always be filled.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_purchase DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_purchase IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_purch\_doc\_i.
    DELETE FROM demo\_purch\_doc.
    MODIFY ENTITY demo\_cds\_purch\_doc\_m
          CREATE FIELDS ( PurchaseDocument Description )
          WITH VALUE #(
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
    RESULT FINAL(result)
    FAILED failed
    REPORTED reported.
    COMMIT ENTITIES RESPONSE OF demo\_cds\_purch\_doc\_m
    FAILED FINAL(commit\_failed)
    REPORTED FINAL(commit\_reported).
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT PurchaseDocument, Description, Status
    FROM demo\_purch\_doc
    INTO TABLE @FINAL(demo\_purch\_doc\_approved).
    out->next\_section( 'approve order'
        )->write( demo\_purch\_doc\_approved ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two BO instances are created with the statement MODIFY ENTITY.
-   The action Approve\_Order is executed on one of the two instances with the statement EXECUTE.
-   The result, failed, and reported parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database with the statement COMMIT ENTITIES.
-   A SELECT statement is used to read the changed data from the persistent table DEMO\_PURCH\_DOC. As a result of the action, the column Status of the respective instance is filled with A for Accepted.