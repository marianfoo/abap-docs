  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior body](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body.htm) →  [CDS BDL - RAP BO operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations.htm) →  [CDS BDL - non-standard operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard.htm) →  [CDS BDL - action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) →  [CDS BDL - Examples of actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action_abexas.htm) → 

CDS BDL - action with input parameter

This example demonstrates how a [RAP action](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_action_glosry.htm "Glossary Entry") with input parameter is defined, implemented, and consumed in a managed RAP BO.

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CDS\_ACTION\_INPUT\_PARAM is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cds\_action\_input\_param unique;
strict;
define behavior for DEMO\_CDS\_ACTION\_INPUT\_PARAM alias PurchaseItem
persistent table demo\_purch\_doc\_i
lock master
authorization master (instance)
{
  create;
  update;
  delete;
  action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;
  mapping for DEMO\_PURCH\_DOC\_I corresponding;
}

Action definition

The behavior definition defines one action: deductDiscount. The action has one input parameter that is typed with the CDS abstract entity DEMO\_CDS\_ABSTRACT\_DISCOUNT and it defines the output parameter as the same type as the entity for which the action is executed. The purpose is to reduce the purchase order item price by the discount specified via the input parameter.

action deductDiscount
       parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT
       result \[1\] $self;

The following [CDS abstract entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") is used for typing the input parameter:

@EndUserText.label: 'CDS abstract entity, discount'
define abstract entity DEMO\_CDS\_ABSTRACT\_DISCOUNT
{
  discount\_percent : abap.int1;
}

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CDS\_ACTION\_INPUT\_PARAM. This global class implements the local handler class LHC\_DEMO\_CDS\_ACTION\_INPUT\_PARA, which contains the method deductDiscount to implement the action. This method is a FOR MODIFY method and it is typed based on the PurchaseItem entity. Its signature includes the result parameter. The actual implementation takes place in the CCIMP include.

Source Code

REPORT demo\_cds\_action\_reduce.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(  ).
    DATA(percentage) = 10.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = percentage
      )->request( ).
    IF percentage > 100
    OR percentage < 0.
      out->display( 'Enter a valid percentage between 0 and 100' ).
    ENDIF.
    DELETE FROM demo\_purch\_doc\_i.
    TYPES: BEGIN OF structure,
             PurchaseDocumentItem TYPE c LENGTH 10,
             PurchaseDocument     TYPE c LENGTH 10,
             Price                TYPE i,
           END OF structure.
    MODIFY ENTITIES OF demo\_cds\_action\_input\_param
    ENTITY PurchaseItem
    CREATE SET FIELDS WITH VALUE #(
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
    RESULT DATA(no\_discount1).
    MOVE-CORRESPONDING no\_discount1 TO no\_discount.
    out->next\_section(  'full price'
    )->write( no\_discount ).
\*
    TRY.
        MODIFY ENTITIES OF demo\_cds\_action\_input\_param
    ENTITY PurchaseItem
    EXECUTE deductDiscount
    FROM VALUE #( ( PurchaseDocumentItem = 'a' PurchaseDocument = '1'
                   %param-discount\_percent = percentage )
                   ( PurchaseDocumentItem = 'b' PurchaseDocument = '2'
                   %param-discount\_percent = percentage ) )
    RESULT DATA(result)
    FAILED failed
    REPORTED reported.
      CATCH cx\_sy\_conversion\_overflow INTO DATA(exc).
        out->display( 'percentage not accepted' ).
    ENDTRY.
    COMMIT ENTITIES RESPONSE OF demo\_cds\_action\_input\_param
    FAILED DATA(commit\_failed)
    REPORTED DATA(commit\_reported).
    SELECT purchasedocumentitem, purchasedocument, Price
      FROM demo\_purch\_doc\_i
      INTO TABLE @DATA(demo\_discount).
    out->next\_section( 'price with discount'
      )->write( percentage
      )->next\_section( 'amount with discount'
      )->write( demo\_discount
      )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   The user is requested to enter the discount percentage.
-   Two BO instances are created with the statement MODIFY ENTITY.
-   The action deductDiscount is executed on one of the two instances with the statement EXECUTE.
-   The result, failed, and reported parameters are returned.
-   The changes that were performed by the action in the transactional buffer are committed to the database using the statement COMMIT ENTITIES RESPONSE OF.
-   A SELECT statement is used to read the changed data from the persistent table DEMO\_PURCH\_DOC\_I. As a result of the action, the price of a purchase order item is reduced by the percentage specified via the input parameter.