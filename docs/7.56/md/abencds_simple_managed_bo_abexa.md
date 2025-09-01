---
title: "RAP - Simple Managed RAP Business Object"
description: |
  This example demonstrates a simple managed RAP business object(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm 'Glossary Entry') and uses EML(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm 'Glossary Entry') to access it. Data model
version: "7.56"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_simple_managed_bo_abexa.htm"
abapFile: "abencds_simple_managed_bo_abexa.htm"
keywords: ["select", "update", "do", "if", "try", "method", "class", "data", "internal-table", "abencds", "simple", "managed", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) → 

RAP - Simple Managed RAP Business Object

This example demonstrates a simple managed [RAP business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_glosry.htm "Glossary Entry") and uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access it.

Data model

The CDS data model consists of one single [root entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry") without [child entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry"):

@AbapCatalog.sqlViewName: 'DEMOSIMPLEMNGDBO'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view DEMO\_CDS\_SIMPLE\_MANAGED\_BO
  as select from sflight
{
  key carrid,
  key connid,
  key fldate,
      price,
      currency
}

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CDS\_SIMPLE\_MANAGED\_BO is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cds\_simple\_managed\_bo unique;
define behavior for DEMO\_CDS\_SIMPLE\_MANAGED\_BO alias demo\_simple\_mngd\_bo
persistent table sflight
lock master
{
  update ;
}

One [CRUD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrud_glosry.htm "Glossary Entry") operation is specified with update.

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CDS\_SIMPLE\_MANAGED\_BO. There is no self-defined behavior implementation in the CCIMP include of the behavior pool and the global class has no components. For [managed RAP business objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), the managed RAP BO provider can take over all operations. In fact, you don't need to create an behavior pool at all.

Business service

There is no [business service](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbusiness_service_glosry.htm "Glossary Entry") and no [service binding](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenservice_binding_glosry.htm "Glossary Entry") defined for the above root entity. The business object should be accessed by [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") only.

Source Code

REPORT demo\_eml\_simple\_managed\_bo.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new( ).
    DATA(carrid)     = CONV sflight-carrid( 'LH' ).
    DATA(connid)     = CONV sflight-connid( '0400' ).
    DATA(percentage) = 10.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = carrid
      )->add\_field( CHANGING field = connid
      )->add\_field( CHANGING field = percentage
      )->request( ).
    DATA fields TYPE TABLE FOR READ IMPORT demo\_cds\_simple\_managed\_bo.
    SELECT \*
           FROM demo\_cds\_simple\_managed\_bo
           WHERE carrid = @carrid AND connid = @connid
           INTO  TABLE @DATA(before).
    MOVE-CORRESPONDING before TO fields.
    READ
      ENTITY demo\_cds\_simple\_managed\_bo
      ALL FIELDS WITH fields
      RESULT DATA(read\_data)
      FAILED DATA(read\_failed).
    IF read\_failed-demo\_simple\_mngd\_bo IS NOT INITIAL.
      out->display( 'Read failed' ).
      RETURN.
    ENDIF.
    MODIFY
      ENTITY demo\_cds\_simple\_managed\_bo
      UPDATE SET FIELDS WITH
        VALUE #( FOR <wa> IN read\_data (
          carrid   = <wa>-carrid
          connid   = <wa>-connid
          fldate   = <wa>-fldate
          price    = <wa>-price \* ( 1 + percentage / 100 )
          currency = <wa>-currency ) )
      FAILED DATA(update\_failed).
    IF update\_failed-demo\_simple\_mngd\_bo IS NOT INITIAL.
      out->display( 'Update failed' ).
      RETURN.
    ENDIF.
    COMMIT ENTITIES.
    SELECT \*
           FROM demo\_cds\_simple\_managed\_bo
           WHERE carrid = @carrid AND connid = @connid
           INTO  TABLE @DATA(after).
    out->next\_section( 'Data before'
      )->write( before
      )->next\_section( 'Data after'
      )->write( after
      )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   A read operation is executed with the statement READ ENTITY.
    
    An internal table fields specifies the data to be read. The [RAP transactional engine](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_transac_engine_glosry.htm "Glossary Entry") reads the data from the respective database table into a [managed transactional buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_trans_buff_glosry.htm "Glossary Entry") and returns them in internal table read\_data.
    
-   An update operation is executed with the statement MODIFY ENTITY.
    
    With the addition SET FIELDS the data to be updated are passed to the business object. For that the flight price is enhanced by an amount given by the input value percentage. The update takes place in the internal buffer of the business object.
    
-   The changes are saved with the statement COMMIT ENTITIES.
    
    The internal buffer of the business object is used to update the respective table on the database.
    

No self-written code of the ABAP behavior pool is involved here. All actions are performed by the managed RAP BO provider. ABAP SQL queries before and after using EML show, that the prices are increased according to the input.