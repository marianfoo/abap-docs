---
title: "RAP - function"
description: |
  This example demonstrates how a function is defined, implemented, and consumed in a managed RAP BO. Data model The CDS data model consists of the root entity DEMO_CDS_FUNCTION_1, which represents a purchase order. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED @EndUserText.label:
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_function_abexa.htm"
abapFile: "abenbdl_function_abexa.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "try", "method", "class", "data", "types", "internal-table", "abenbdl", "function", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard.htm) →  [RAP - function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_function.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20function%2C%20ABENBDL_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - function

This example demonstrates how a function is defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_CDS\_FUNCTION\_1, which represents a purchase order.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, function'
define root view entity DEMO\_CDS\_FUNCTION\_1
  as select from demo\_purch\_doc
{
  key purchasedocument         as Purchasedocument,
      description              as Description,
      status                   as Status,
      priority                 as Priority,
      price                    as Price,
      currency                 as Currency,
      purchasingorganization   as Purchasingorganization,
      purchasedocumentimageurl as Purchasedocumentimageurl,
      crea\_date\_time           as CreaDateTime,
      crea\_uname               as CreaUname,
      lchg\_date\_time           as LchgDateTime,
      lchg\_uname               as LchgUname
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CDS\_FUNCTION\_1 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cds\_function\_1 unique;
strict(2);
define behavior for DEMO\_CDS\_FUNCTION\_1 alias PurchaseDocument
persistent table demo\_purch\_doc
lock master
authorization master (instance)
{
  create;
  update;
  delete;
  // instance function
  function getDetails result \[0..\*\] $self;
  // static function
  static function calculateTotal result \[1\] demo\_sales\_total\_price;
  //function with input parameter
  function calculateDiscount parameter DEMO\_CDS\_DEDUCT\_DISCOUNT
                             result \[1\] $self;
field(readonly:update) Purchasedocument;
  mapping for demo\_purch\_doc corresponding;
}

Function definition

Three functions are defined:

-   getDetails: instance function that reads the values of the fields PurchaseDocument, Price, and Status for the specified entity instances and returns them in the result structure.
-   calculateTotal: static function that sums up the prices of all entity instances with status 'O' and returns the total in its result structure.
    
    Note: This function uses a DDIC data element as output parameter. Note that the recommended procedure is to use only CDS abstract entities as BDEF parameters.
    
-   calculateDiscount: function with an input parameter for a discount percentage. It subtracts the discount in percent from the initial price of an entity instance and returns the reduced price in its result structure.

All three functions merely deliver information in their result structure. No modify operation is carried out and no data is changed on the database.

Behavior implementation

For the above RAP behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. It can be accessed under CCIMP include.

Source Code   

\* Public class definition
CLASS cl\_demo\_cds\_function DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS fill\_table.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cds\_function IMPLEMENTATION.
  METHOD main.
    fill\_table(  ).
    "Read operation executing a function
    READ ENTITIES OF demo\_cds\_function\_1
     ENTITY PurchaseDocument
      EXECUTE getDetails
      FROM VALUE #( ( %tky-PurchaseDocument =  '1' )
                    ( %tky-PurchaseDocument =  '2' ) )
     RESULT FINAL(result)
     FAILED FINAL(failed)
     REPORTED FINAL(reported).
    "Set up internal table to output
    "the result of the function execution
    TYPES: BEGIN OF result\_structure,
             purchasedocument TYPE purchdocde,
             price            TYPE p LENGTH 15 DECIMALS 2,
             status           TYPE c LENGTH 1,
           END OF result\_structure.
    TYPES result\_table\_type TYPE TABLE OF result\_structure.
    DATA instance\_function TYPE result\_table\_type.
    LOOP AT result   ASSIGNING FIELD-SYMBOL(<result>).
      APPEND VALUE #( purchasedocument =
                      <result>-%param-purchasedocument
                      price =  <result>-%param-price
                      status =  <result>-%param-status
                    ) TO instance\_function.
    ENDLOOP.
    out->next\_section(
        'Instance function that reads data'
        )->write( instance\_function ).
\*      Read operation executing a static function
    READ ENTITIES OF demo\_cds\_function\_1
   ENTITY PurchaseDocument
    EXECUTE calculateTotal
    FROM VALUE #( ( %cid = 'myCid' ) )
   RESULT FINAL(static\_result)
   FAILED FINAL(static\_failed)
   REPORTED FINAL(static\_reported).
    TYPES: BEGIN OF result\_static,
             cid   TYPE c LENGTH 20,
             price TYPE p LENGTH 15 DECIMALS 2,
           END OF result\_static.
    TYPES result\_table\_type\_1 TYPE TABLE OF result\_static.
    DATA static\_function TYPE result\_table\_type\_1.
    LOOP AT static\_result ASSIGNING FIELD-SYMBOL(<static\_result>).
      APPEND VALUE #( cid = <static\_result>-%cid
                     price =  <static\_result>-%param
                    ) TO static\_function.
    ENDLOOP.
    out->next\_section(
     'Static function that calculates the total price'
     )->write( static\_function ).
    READ ENTITIES OF demo\_cds\_function\_1
         ENTITY PurchaseDocument
          EXECUTE calculateDiscount
          FROM VALUE #( (  %tky-purchasedocument   = '1'
                           %param-discount\_percent = 30 ) )
         RESULT FINAL(param\_result)
         FAILED FINAL(param\_failed)
         REPORTED FINAL(param\_reported).
    TYPES: BEGIN OF result\_param,
             purchasedocument TYPE purchdocde,
             reduced\_price    TYPE p LENGTH 15 DECIMALS 2,
           END OF result\_param.
    TYPES result\_table\_type\_2 TYPE TABLE OF result\_param.
    DATA function\_input\_param TYPE result\_table\_type\_2.
    LOOP AT param\_result ASSIGNING FIELD-SYMBOL(<result\_param>).
      APPEND VALUE #( purchasedocument = <result\_param>-purchasedocument
                     reduced\_price =  <result\_param>-%param-price
                    ) TO function\_input\_param.
    ENDLOOP.
    out->next\_section(
     'Function with input parameter that calculates a discount'
     )->write( function\_input\_param ).
  ENDMETHOD.
  METHOD fill\_table.
    DELETE FROM demo\_purch\_doc.
    INSERT demo\_purch\_doc FROM TABLE @(  VALUE #(
    ( purchasedocument = '1' price = 500 status = 'O' )
    ( purchasedocument = '2' price = 77 status = 'O' )
    ( purchasedocument = '3' price = 12 status = 'O' )
    ( purchasedocument = '4' price = 999 status = 'O' )
    ( purchasedocument = '5' price = 234 status = 'O' )
    ( purchasedocument = '6' price = 665 status = 'O' )
    ) ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class and executes all three functions:

-   First, the persistent database table demo\_purch\_doc is filled with values in the method fill\_table using ABAP SQL. This way, BO instances already exist and do not have to be created using EML.
-   The function getDetails is executed for two entity instances. These entity instances are determined via the values of their key fields. The function reads the values of the fields PurchaseDocument, Price, and Status for the specified entity instances and returns them in its result structure. The values from the result structure are appended to the internal structure instance\_function and a screen output is generated.
-   The function calculateTotal is a static function and thus applies to the complete BO, not to any specific entity instance. The function first filters all entity instances that have the status 'O' (in this example, all entity instances have the status 'O). Then, it sums up the values of the field Price of all entity instances with status 'O'. The values from the result structure are appended to the internal structure static\_function and a screen output is generated.
-   The function calculateDiscount is an instance function with an input parameter. To execute the function, it is required to specify an entity instance and also a value for the input parameter. In this example, the input parameter represents a discount percentage and the function subtracts the discount from the value of the field Price of an entity instance. It returns the reduced price in its result structure. The values from the result structure are appended to the internal structure function\_input\_param and a screen output is generated.