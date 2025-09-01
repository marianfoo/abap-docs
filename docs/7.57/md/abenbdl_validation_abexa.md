  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl.htm) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_define_beh.htm) →  [CDS BDL - Entity Behavior Body](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_body.htm) →  [CDS BDL - validation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_validations.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Validation, ABENBDL_VALIDATION_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

CDS BDL - Validation

This example demonstrates how a validation is defined, implemented, and consumed in a managed RAP BO.

Data model

The CDS data model consists of the root view entity DEMO\_SALES\_CDS\_SO\_1, which represents a sales order.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, so, RAP managed'
define root view entity DEMO\_SALES\_CDS\_SO\_1  
as select from demo\_sales\_order
{
  key so\_key as SoKey,
  id as Id,
  lifecycle\_status as LifecycleStatus,
  created\_by as CreatedBy,
  created\_on as CreatedOn,
  created\_at as CreatedAt,
  last\_changed\_by as LastChangedBy,
  last\_changed\_on as LastChangedOn,
  last\_changed\_at as LastChangedAt,
  buyer\_id as BuyerId,
  ship\_to\_id as ShipToId,
  quantity\_sum as QuantitySum,
  uom\_sum as UomSum,
  amount\_sum as AmountSum,
  currency\_sum as CurrencySum,
  company\_code as CompanyCode  
}

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_SALES\_CDS\_SO\_1 is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_sales\_cds\_so\_1 unique;
strict(2);
define behavior for DEMO\_SALES\_CDS\_SO\_1 alias SalesOrder
persistent table demo\_sales\_order
lock master
authorization master (global)
{
  create;
  update;
  field ( readonly, numbering : managed ) SoKey;
  validation ValidateBuyerId on save { field BuyerId; }
  mapping for DEMO\_SALES\_ORDER corresponding
  {
    SoKey = so\_key;
    BuyerId = buyer\_id;
    ShipToId = ship\_to\_id;
    QuantitySum = quantity\_sum;
    UomSum = uom\_sum;
    AmountSum = amount\_sum;
    CurrencySum = currency\_sum;
    CompanyCode = company\_code;
  }
}

Definition of validation

The validation ValidateBuyerId checks if the value entered in field BuyerId is valid by checking whether this buyer ID exists in the database table DEMO\_SALES\_BUPA, which lists all business partners. It is triggered as soon as the field BuyerId is changed. If the buyer ID is not valid, the data changes are rejected and an error message is returned.

validation ValidateBuyerId on save { field BuyerId; }

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_SALES\_CDS\_SO\_1. The actual implementation takes place in the CCIMP include.

Source Code   

REPORT demo\_cds\_validation.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main, fill\_table.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    FINAL(out) = cl\_demo\_output=>new( ).
    DELETE FROM demo\_sales\_order.
    MODIFY ENTITIES OF demo\_sales\_cds\_so\_1
          ENTITY SalesOrder
            CREATE
              FIELDS ( BuyerId ) WITH VALUE #(
               ( %cid = '1' BuyerId = \`a\` ) )
               MAPPED FINAL(mapped)
               FAILED FINAL(failed)
               REPORTED FINAL(reported).
    COMMIT ENTITIES.
    MODIFY ENTITIES OF demo\_sales\_cds\_so\_1
         ENTITY SalesOrder
           CREATE
             FIELDS ( BuyerId ) WITH VALUE #(
              ( %cid = '2' BuyerId = \`CCC\` )
              ( %cid = '3' BuyerId = 'DDD' ) )
               MAPPED FINAL(mapped1)
               FAILED FINAL(failed1)
               REPORTED FINAL(reported1).
    COMMIT ENTITIES RESPONSE OF demo\_sales\_cds\_so\_1
    FAILED FINAL(failed\_commit)
    REPORTED FINAL(reported\_commit).
    READ ENTITY demo\_sales\_cds\_so\_1
    ALL FIELDS WITH CORRESPONDING #( mapped1-salesorder )
    RESULT FINAL(result)
    FAILED FINAL(failed2)
    REPORTED FINAL(reported2).
    TYPES: BEGIN OF reported\_structure,
             key\_field TYPE i,
             message   TYPE if\_abap\_behv\_message=>t\_severity,
             msgv1     TYPE symsgv,
             msgv1\_2   TYPE c LENGTH 50,
           END OF reported\_structure.
    TYPES reported\_table\_type TYPE TABLE OF reported\_structure.
    DATA failed\_entities TYPE reported\_table\_type.
    LOOP AT reported2-salesorder ASSIGNING FIELD-SYMBOL(<rep>).
      APPEND VALUE #(  key\_field = <rep>-%key-SoKey
      message = <rep>-%msg->m\_severity
      msgv1 = <rep>-%msg->if\_t100\_dyn\_msg~msgv1
       msgv1\_2 = <rep>-%msg->if\_message~get\_text(  )
       ) TO failed\_entities.
    ENDLOOP.
    SELECT so\_key, buyer\_id
    FROM demo\_sales\_order
    INTO TABLE @FINAL(valid\_entities).
    out->next\_section( 'Valid entities'
     )->write( valid\_entities
     )->next\_section( 'Invalid entities'
     )->write( failed\_entities
     )->display(  ).  ENDMETHOD.
  METHOD fill\_table.
    DELETE FROM demo\_sales\_bupa.
    INSERT demo\_sales\_bupa FROM TABLE @(  VALUE #(
    ( id = 'a' gender = 'f'  family\_name = 'Doe' )
    ( id = 'b' gender = 'm'  family\_name = 'Smith' )
    ( id = 'c' gender = 'd'  family\_name = 'Walker' )
    ) ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>fill\_table(  ).
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   A BO entity instance with the buyer ID a is created. This is a valid buyer ID, so the instance is committed to the database.
-   Two further BO entity instances are created with invalid buyer IDs. These entity instances are rejected by the validation and they are inserted into an error table instead.
-   The valid and the invalid entity instances are created in separate [RAP LUWs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry"). If all three entity instances were created in one RAP LUW, all three of them would be rejected. All data changes in one RAP LUW must be consistent, otherwise, the complete content of the transactional buffer is rejected.