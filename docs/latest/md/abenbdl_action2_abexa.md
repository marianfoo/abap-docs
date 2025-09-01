---
title: "RAP - Action with Input Parameter"
description: |
  This example demonstrates how a RAP action(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm 'Glossary Entry') with input parameter is defined, implemented, and consumed in a managed RAP BO. Data model The CDS data model consists of only one root entity DEMO
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action2_abexa.htm"
abapFile: "abenbdl_action2_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "catch", "method", "class", "data", "types", "abenbdl", "action2", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard.htm) →  [RAP - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) →  [RAP - Examples of Actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Action%20with%20Input%20Parameter%2C%20ABENBDL_ACTION2_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Action with Input Parameter

This example demonstrates how a [RAP action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") with input parameter is defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of only one root entity DEMO\_CDS\_ACTION\_INPUT\_PARAM. The root entity represents a purchase order item.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, managed, action'
define root view entity DEMO\_CDS\_ACTION\_INPUT\_PARAM
as select from DEMO\_CDS\_PURCH\_DOC\_I
{
  key PurchaseDocumentItem,
  key PurchaseDocument,
  Description,
  Vendor,
  VendorType,
  Price,
  Currency,
  Quantity,
  QuantityUnit,
  OverallItemPrice,
  /\* Associations \*/
  \_PurchaseDocument
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CDS\_ACTION\_INPUT\_PARAM is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cds\_action\_input\_param unique;
strict(2);
define behavior for DEMO\_CDS\_ACTION\_INPUT\_PARAM alias PurchaseItem
persistent table demo\_purch\_doc\_i
lock master
authorization master (global)
{
  create;
  update;
  delete;
  action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;
  field(readonly:update) PurchaseDocument, PurchaseDocumentItem;
  mapping for DEMO\_PURCH\_DOC\_I corresponding;
}

Action definition

The behavior definition defines one action: deductDiscount. The action has one input parameter that is typed with the CDS abstract entity DEMO\_CDS\_ABSTRACT\_DISCOUNT and it defines the output parameter as the same type as the entity for which the action is executed. The purpose is to reduce the purchase order item price by the discount specified via the input parameter.

action deductDiscount
       parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT
       result \[1\] $self;

The following [CDS abstract entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") is used for typing the input parameter:

@EndUserText.label: 'CDS abstract entity, discount'
define abstract entity DEMO\_CDS\_ABSTRACT\_DISCOUNT
{
  discount\_percent : abap.int1;
}

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CDS\_ACTION\_INPUT\_PARAM. This global class implements the local handler class LHC\_DEMO\_CDS\_ACTION\_INPUT\_PARA, which contains the method deductDiscount to implement the action. This method is a FOR MODIFY method and it is typed based on the PurchaseItem entity. Its signature includes the result parameter. The actual implementation takes place in the CCIMP include.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_action\_reduce DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_action\_reduce IMPLEMENTATION.
  METHOD main.
    DATA(percentage) = 10.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = percentage
      )->request( ).
    IF percentage > 100
    OR percentage < 0.
      out->write( 'Enter a valid percentage between 0 and 100' ).
    ENDIF.
    DELETE FROM demo\_purch\_doc\_i.
    TYPES: BEGIN OF structure,
             PurchaseDocumentItem TYPE c LENGTH 10,
             PurchaseDocument     TYPE c LENGTH 10,
             Price                TYPE i,
           END OF structure.
    MODIFY ENTITIES OF demo\_cds\_action\_input\_param
    ENTITY PurchaseItem
    CREATE FIELDS ( PurchaseDocumentItem PurchaseDocument
       Price ) WITH VALUE #(
    ( %cid = 'cid1'
      PurchaseDocumentItem = 'a'
      PurchaseDocument = '1'
      Price  = 200 )
    ( %cid = 'cid2'
      PurchaseDocumentItem = 'b'
      PurchaseDocument = '2'
      Price  = 999 ) )
    FAILED DATA(failed)
    REPORTED DATA(reported).
    DATA no\_discount TYPE SORTED TABLE OF structure
      WITH UNIQUE KEY PurchaseDocumentItem PurchaseDocument.
    READ ENTITY  demo\_cds\_action\_input\_param
    ALL FIELDS WITH VALUE #(
    ( PurchaseDocumentItem = 'a' PurchaseDocument = '1' )
    ( PurchaseDocumentItem = 'b' PurchaseDocument = '2' ) )
    RESULT FINAL(no\_discount1).
    MOVE-CORRESPONDING no\_discount1 TO no\_discount.
    out->next\_section(  'full price'
    )->write( no\_discount ).
    TRY.
        MODIFY ENTITIES OF demo\_cds\_action\_input\_param
    ENTITY PurchaseItem
    EXECUTE deductDiscount
    FROM VALUE #( ( PurchaseDocumentItem = 'a' PurchaseDocument = '1'
                   %param-discount\_percent = percentage )
                   ( PurchaseDocumentItem = 'b' PurchaseDocument = '2'
                   %param-discount\_percent = percentage ) )
    RESULT FINAL(result)
    FAILED failed
    REPORTED reported.
      CATCH cx\_sy\_conversion\_overflow INTO FINAL(exc).
        out->write( 'percentage not accepted' ).
    ENDTRY.
    COMMIT ENTITIES RESPONSE OF demo\_cds\_action\_input\_param
    FAILED FINAL(commit\_failed)
    REPORTED FINAL(commit\_reported).
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT purchasedocumentitem, purchasedocument, Price
      FROM demo\_purch\_doc\_i
      INTO TABLE @FINAL(demo\_discount).
    out->next\_section( 'price with discount'
      )->write( percentage
      )->next\_section( 'amount with discount'
      )->write( demo\_discount ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   The user is requested to enter the discount percentage.
-   Two BO instances are created with the statement MODIFY ENTITY.
-   The action deductDiscount is executed on one of the two instances with the statement EXECUTE.
-   The result, failed, and reported parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database using the statement COMMIT ENTITIES RESPONSE OF.
-   A SELECT statement is used to read the changed data from the persistent table DEMO\_PURCH\_DOC\_I. As a result of the action, the price of a purchase order item is reduced by the percentage specified via the input parameter.