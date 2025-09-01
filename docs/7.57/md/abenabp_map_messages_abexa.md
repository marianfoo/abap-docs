  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP Behavior Pools (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_behavior_pools.htm) →  [RAP Saver Classes and Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm) →  [RAP Saver Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_methods.htm) →  [Examples for RAP Saver Methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_saver_methods_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Example for RAP Saver Method map_messages, ABENABP_MAP_MESSAGES_ABEXA, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Example for RAP Saver Method map\_messages

This example demonstrates the RAP saver method map\_messages within a RAP saver class using unmanaged RAP BOs.

Data model

The CDS data model consists of the root entity DEMO\_UNMANAGED\_MAP\_MESSAGES, which represents the exposed RAP BO, and the [foreign entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_foreign_entity_glosry.htm "Glossary Entry") DEMO\_UNMANAGED\_FOREIGN\_ENTITY, i. e. the RAP BO that is not exposed.

CDS data model of the exposed BO:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Root entity for unmanaged BO'
define root view entity DEMO\_UNMANAGED\_MAP\_MESSAGES  
as select from demo\_tab\_root\_5 {
  key key\_field,
  field1,
  field2,
  field3,
  field4
}

CDS data model of foreign entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'Root entity for unmanaged BO'
define root view entity DEMO\_UNMANAGED\_FOREIGN\_ENTITY  
as select from demo\_tab\_root\_7 {
  key key\_field,
  char1,
  char2,
  num1,
  num2
}

Behavior definition

The following [CDS behavior definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"), that are defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry"), are relevant for the example:

-   DEMO\_UNMANAGED\_MAP\_MESSAGES
    
    unmanaged
    implementation in class bp\_demo\_unmanaged\_map\_messages unique;
    strict(2);
    foreign entity DEMO\_UNMANAGED\_FOREIGN\_ENTITY;
    define behavior for DEMO\_UNMANAGED\_MAP\_MESSAGES
    lock master
    authorization master ( global )
    {
      create;
      update;
      delete;
    }
    
-   DEMO\_UNMANAGED\_MAP\_MESSAGES
    
    unmanaged
    implementation in class bp\_demo\_unmanaged\_foreign\_enti unique;
    strict(2);
    define behavior for DEMO\_UNMANAGED\_FOREIGN\_ENTITY
    lock master
    authorization master ( global )
    {
      create;
      update;
      delete;
    }
    

Behavior implementation

For each of the above CDS behavior definitions, one [ABP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created:

-   Global class of the behavior pool: BP\_DEMO\_UNMANAGED\_MAP\_MESSAGES. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.
-   Global class of the behavior pool: BP\_DEMO\_UNMANAGED\_FOREIGN\_ENTI. The CCIMP include contains the actual behavior implementation.

The ABPs purposely include only a few method implementations to keep the example small. In this case, only the create method is implemented on [handler](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_class.htm) side. On [saver](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_saver_class.htm) side, only the save method is implemented. The ABP of the exposed BO also includes the implementation of the map\_messages method.

In this simple example, the map\_messages method is implemented as follows: The messages that are available in the [REPORTED LATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_table_for.htm) table of the foreign entity are sequentially processed within a [LOOP AT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaploop_at_itab_variants.htm) statement. Here, the message from the foreign entity is first replaced, and then inserted into the REPORTED LATE table of the exposed BO. After the loop, the content of the REPORTED LATE table of the foreign entity is deleted.

Source Code   

REPORT demo\_rap\_unm\_map\_messages.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    MODIFY ENTITY demo\_unmanaged\_map\_messages
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH VALUE #(
       ( %cid = 'cid\_exposed\_bo\_1'
         key\_field = 1
         field1 = 'exp\_bo\_1'
         field2 = 'exp\_bo\_2'
         field3 = 100
         field4 = 200
          )
        ( %cid = 'cid\_exposed\_bo\_2'
         key\_field = 2
         field1 = 'exp\_bo\_3'
         field2 = 'exp\_bo\_4'
         field3 = 200
         field4 = 300
          )
       ).
    MODIFY ENTITY demo\_unmanaged\_foreign\_entity
      CREATE FIELDS ( key\_field num1 num2 char1 char2 )
      WITH VALUE #(
        ( %cid = 'cid\_foreign\_bo\_1'
          key\_field = 11
          char1 = 'foreign\_1'
          char2 = 'foreign\_2'
          num1 = 1000
          num2 = 2000
           )
        ( %cid = 'cid\_foreign\_bo\_2'
          key\_field = 22
          char1 = 'foreign\_3'
          char2 = 'foreign\_4'
          num1 = 3000
          num2 = 4000
           )
        ).
   COMMIT ENTITIES RESPONSES REPORTED FINAL(rep).
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(exposed\_bo).
    SELECT key\_field, char1, char2, num1, num2
       FROM demo\_tab\_root\_7
         ORDER BY key\_field
         INTO TABLE @FINAL(foreign\_entity).
    out->begin\_section( 'Demo: Mapping Messages'
     )->write\_doc( 'Database table entries after the create operations:'
     )->write( exposed\_bo
     )->write( foreign\_entity
     )->write\_doc( 'REPORTED LATE entries:'
     )->write( rep
     ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
    DELETE FROM demo\_tab\_root\_7.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The example includes two ABAP EML MODIFY requests within one [RAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_luw_glosry.htm "Glossary Entry"). Each of the MODIFY requests includes a [create operation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_create_operation_glosry.htm "Glossary Entry") using [CREATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) statements that create two instances for the exposed BO and the foreign entity. A [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapemlcommit_entities_dyn.htm) statement triggers the save sequence and terminates the RAP LUW.

The output shows the result of the MODIFY requests. The instances that have been saved to the database table are selected from the database table into an internal table. The COMMIT ENTITIES statement includes the REPORTED response. The content of this response is output, too, demonstrating the effect of the map\_messages method. The original messages for the instances of the foreign entity are available for the exposed BO. Furthermore, the messages have been changed and the REPORTED table of the foreign entity does not show any entries since the content has been deleted.