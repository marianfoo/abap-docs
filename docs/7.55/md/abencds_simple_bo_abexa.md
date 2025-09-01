---
title: "RAP - Simple unmanaged RAP business object"
description: |
  This example demonstrates a simple unmanaged RAP business object(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm 'Glossary Entry') and different ways of accessing it. Data model The CDS data model consists of one single root entity(https://help.sap.com/doc/abapdo
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_simple_bo_abexa.htm"
abapFile: "abencds_simple_bo_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abencds", "simple", "abexa"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (BO)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_business_objects.htm) → 

RAP - Simple unmanaged RAP business object

This example demonstrates a simple unmanaged [RAP business object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrap_bo_glosry.htm "Glossary Entry") and different ways of accessing it.

Data model

The CDS data model consists of one single [root entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_entity_glosry.htm "Glossary Entry") without [child entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenchild_entity_glosry.htm "Glossary Entry"):

@AbapCatalog.sqlViewName: 'DEMOROOTSIMPLE'
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view demo\_cds\_simple\_root\_entity
  as select from sflight
{
  key carrid,
  key connid,
  key fldate,
      price,
      currency
}

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged;
define behavior for demo\_cds\_simple\_root\_entity alias demo\_simple\_bo
{
  create;
  action enhancePrice parameter demo\_cds\_param\_for\_simple\_bo;
}

One [CRUD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencrud_glosry.htm "Glossary Entry") operation is specified with create and one additional operation is specified with action. The action expects a parameter that must be typed with a structured CDS entity, for which the following [CDS abstract entity](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") is defined:

define abstract entity demo\_cds\_param\_for\_simple\_bo
{
  percentage : abap.int4;
}

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The global class has two private static attributes:

-   BUFFER, an internal table with the structured line type of the root entity DEMO\_CDS\_SIMPLE\_ROOT\_ENTITY that holds the business data.

-   BUFFER, an internal table of line type i, that logs the lines that were changed by the behavior implementation.

There are two local classes:

-   LHC\_DEMO\_SIMPLE\_BO

The handler class of the behavior pool.

-   LSC\_DEMO\_SIMPLE\_BO

The saver class of the behavior pool.

Business service

DEMO\_SD\_SIMPLE\_ROOT\_ENTITY

Source Code

REPORT demo\_eml\_simple\_bo.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(carrid)     = CONV sflight-carrid( 'LH' ).
    DATA(connid)     = CONV sflight-connid( '0400' ).
    DATA(percentage) = 10.
    cl\_demo\_input=>new(
      )->add\_field( CHANGING field = carrid
      )->add\_field( CHANGING field = connid
      )->add\_field( CHANGING field = percentage
      )->request( ).
    DATA(out) = cl\_demo\_output=>new( ).
    "Using derived type
    TYPES create\_type TYPE TABLE FOR
          CREATE demo\_cds\_simple\_root\_entity.
    DATA create\_tab TYPE create\_type.
    create\_tab = VALUE #( ( carrid  = carrid ) ).
    MODIFY
      ENTITY demo\_cds\_simple\_root\_entity
      CREATE FROM create\_tab
      FAILED DATA(failed).
    IF failed-demo\_simple\_bo IS NOT INITIAL.
      out->display( 'Carrier not found' ).
      RETURN.
    ENDIF.
    "Using derived type
    TYPES read\_type TYPE TABLE FOR
          READ IMPORT demo\_cds\_simple\_root\_entity.
    DATA read\_tab TYPE read\_type.
    TYPES result\_type TYPE TABLE FOR
          READ RESULT demo\_cds\_simple\_root\_entity.
    DATA created\_data TYPE result\_type.
    read\_tab = VALUE #( ( carrid  = carrid connid = connid ) ).
    READ
      ENTITY demo\_cds\_simple\_root\_entity
      FROM read\_tab
      RESULT created\_data.
    out->next\_section( 'After CREATE'
      )->write( created\_data ).
    "Using type inference
    MODIFY
      ENTITY demo\_cds\_simple\_root\_entity
      EXECUTE enhanceprice FROM VALUE #( (
        carrid  = carrid
        connid = connid
        %param = VALUE #( percentage = percentage ) ) )
      FAILED failed.
    IF failed-demo\_simple\_bo IS NOT INITIAL.
      CASE failed-demo\_simple\_bo\[ 1 \]-%fail-cause.
        WHEN if\_abap\_behv=>cause-not\_found.
          out->display( 'Connection not found' ).
        WHEN if\_abap\_behv=>cause-unspecific.
          out->display( 'Percentage not accepted' ).
      ENDCASE.
      RETURN.
    ENDIF.
    "Using type inference
    READ
      ENTITY demo\_cds\_simple\_root\_entity
      FROM VALUE #( ( carrid  = carrid connid = connid ) )
      RESULT DATA(modified\_data).
    out->next\_section( 'After EXECUTE'
      )->write( modified\_data ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->display( 'Error in commit!' ).
      RETURN.
    ENDIF.
    SELECT FROM demo\_cds\_simple\_root\_entity
           FIELDS \*
           WHERE carrid = @carrid  AND
                 connid = @connid
           ORDER BY carrid, connid, fldate
           INTO TABLE @DATA(check).
    ASSERT modified\_data = check.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

DEMO\_ODATA\_SIMPLE\_BO\_GATEWAY

DEMO\_ODATA\_SIMPLE\_BO\_ICF