  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml.htm) →  [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) →  [Examples for ABAP EML COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencommit_entities_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20COMMIT%20ENTITIES%20BEGIN%2C%20END%20with%20CONVERT%20KEY%20OF%2C%20ABENCOMMIT_ENTITIES_BEGINEND_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - COMMIT ENTITIES BEGIN, END with CONVERT KEY OF

This example demonstrates the COMMIT ENTITIES variant COMMIT ENTITIES ... END including CONVERT KEY OF with a simple [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM
  as select from demo\_tab\_root\_3
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_umanaged\_root\_late\_num unique;
strict(2);
define behavior for DEMO\_UMANAGED\_ROOT\_LATE\_NUM
lock master
authorization master ( global )
late numbering
{
  create;
  update;
  field ( readonly ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NUM. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool:

-   lcl\_buffer constitutes the transactional buffer. It includes an internal table to handle the data.
-   lhc\_demo\_unmanaged\_root\_late\_nu is the handler class of the behavior pool. The only relevant methods in this example are create and update.
-   lsc\_demo\_unmanaged\_root\_late\_nu is the saver class of the behavior pool. The methods of this class implement the actual modification of the persistent data.

Details of the ABP

-   lcl\_buffer
    
    In this local class, an internal table is constructed that serves as transactional buffer. root\_late\_num\_buffer is the transactional buffer for the root entity. The underlying structured data type is built in a way that simplifies the handling of the buffer. gty\_late\_num\_buffer, as the structured data type for root\_buffer, contains all the key and data fields of the root entity's underlying CDS view with the same type. Plus, the structure includes the components cid and pid to hold the content and preliminary ID. The preliminary ID is necessary for late numbering. Plus, for a more comfortable processing of saving and deleting instances, it includes two fields (changed and deleted) acting as flags (while deleting is not relevant in this example). These flags are set in the course of modify operations, i. e. if an instance is created or changed, the changed field is given an X.
    
-   Method create
    
    Note that the method implementation is intentionally kept simple. For example, a filling of the REPORTED parameter or checking if an instance already exists are not included so as not to overload the code. The method only covers the creation of %pid and the filling of the transactional buffer as well as the MAPPED response parameter. A LOOP statement is responsible for processing the transactional buffer with the individual instances that come in as input parameters (entities). In this case, the following steps are implemented: At first, a preliminary ID (%pid) is created for the instance that is processed. Here, it is a UUID. The transactional buffer is then filled with all the provided input including %cid, the new %pid, the data fields and a flag in the changed field so that the instance can be created. The keys do actually not play a role here since the final keys are not drawn until the save phase. Finally, the MAPPED response structure is filled with %cid and the new %pid. At this stage, the MAPPED response structure is of type MAPPED EARLY.
    
-   Method update
    
    Note that the method implementation is intentionally kept simple. For example, a filling of the FAILED and REPORTED parameters or checking whether an instance exists are not included so as not to overload the code. The method only covers the update of fields if they are provided. This is done within a LOOP statement that processes the transactional buffer with the individual instances that come in as input parameters (entities). The implementation is done in a way that the instances to be updated are identified by the preliminary ID %pid. Only data fields, not the keys, are relevant. A flag is set for the changed field so that the instance can be updated.
    
-   Class lsc\_demo\_unmanaged\_root
    
    The finalize method deletes all the content IDs from the transactional buffer since they must not be used during the save phase.
    
    The adjust\_numbers method assigns the real and final key value to the instance. The lines of the transactional buffer table are processed using a LOOP statement. In this oversimplified example, the key field is given a (dummy) value and the MAPPED response structure is filled. Here, the structure is typed with MAPPED LATE.
    
    The save method includes statements that are responsible for saving the instances from the transactional buffer, i. e. from the internal table root\_late\_num\_buffer, to the database table (demo\_tab\_root\_3). Here, an internal helper table is created to store those instances that have a flag for the changed field. This helper table is then used for an ABAP SQL MODIFY statement that finally changes the database tables with only those instances a change is intended for.
    
    The cleanup method clears the buffer table.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_commit\_3 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    TYPES: ls\_mapped TYPE STRUCTURE FOR MAPPED
                      demo\_umanaged\_root\_late\_num,
           BEGIN OF ls\_keys,
             pid       TYPE abp\_behv\_pid,
             key\_field TYPE i,
           END OF ls\_keys.
    DATA:
      mapped\_early TYPE RESPONSE FOR MAPPED EARLY
                    demo\_umanaged\_root\_late\_num,
      lt\_root\_key  TYPE TABLE OF ls\_mapped,
      lt\_keys      TYPE TABLE OF ls\_keys.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_commit\_3 IMPLEMENTATION.
  METHOD main.
    MODIFY ENTITY demo\_umanaged\_root\_late\_num
       CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
              ( %cid = 'cid1' field1 = 'A' field2 = 'B'
                              field3 = 1 field4 = 2  )
              ( %cid = 'cid2' field1 = 'C' field2 = 'D'
                              field3 = 3 field4 = 4  )
              ( %cid = 'cid3' field1 = 'E' field2 = 'F'
                              field3 = 5 field4 = 6  )
              )
        MAPPED mapped\_early.
    MODIFY ENTITY demo\_umanaged\_root\_late\_num
        UPDATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
( %pid = mapped\_early-demo\_umanaged\_root\_late\_num\[ %cid = 'cid1' \]-%pid
  field1 = 'G' field2 = 'H' field3 = 7  field4 = 8  )
( %pid = mapped\_early-demo\_umanaged\_root\_late\_num\[ %cid = 'cid2' \]-%pid
  field1 = 'I' field2 = 'J' field3 = 9 field4 = 10  )
( %pid = mapped\_early-demo\_umanaged\_root\_late\_num\[ %cid = 'cid3' \]-%pid
  field1 = 'K' field2 = 'L' field3 = 11 field4 = 12  )
              ).
    COMMIT ENTITIES BEGIN.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    LOOP AT mapped\_early-demo\_umanaged\_root\_late\_num
      ASSIGNING FIELD-SYMBOL(<mapped\_early>).
      CONVERT KEY OF demo\_umanaged\_root\_late\_num
        FROM <mapped\_early>-%pid
        TO FINAL(lv\_root\_key).
      APPEND VALUE #( %pid = <mapped\_early>-%pid
                      %key = lv\_root\_key )
                      TO lt\_root\_key.
    ENDLOOP.
    COMMIT ENTITIES END.
    out->begin\_section( \`COMMIT ENTITIES Variant: \` &&
         \`COMMIT ENTITIES BEGIN ... END including CONVERT KEY OF\`
      )->write\_text( \`Result of CONVERT KEY OF statement:\` ).
    lt\_keys = CORRESPONDING #( lt\_root\_key MAPPING pid = %pid ).
    out->write( lt\_keys ).
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3
    INTO TABLE @FINAL(lt\_result).
    out->write\_text( \`Database table entries after EML MODIFY \` &&
    \`operations:\`
      )->write( lt\_result ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the [unmanaged RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") from an ABAP class.

An ABAP EML MODIFY statement that includes a CREATE operation for creating new [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") is followed by an UPDATE operation updating these new created instances. The MODIFY statement with CREATE also includes the filling of the MAPPED response parameter (mapped\_early). When the create method is called, this parameter is given the provided %cid and also %pid, which is created by the method. This information is used to identify the instances for the UPDATE operation.

The save sequence is initiated by COMMIT ENTITIES BEGIN and ends with COMMIT ENTITIES END. A CONVERT KEY OF statement is available, which is not necessary in this non-business related example. Yet, for showcasing purposes, the assumption is that getting the keys is indeed of interest here. Hence, the final keys that are drawn in the adjust\_numbers method are retrieved. Since the preliminary IDs (%pid) are available until the [RAP transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_luw_glosry.htm "Glossary Entry") is terminated, the conversion of the keys can be done on those %pid components. In the example, a LOOP statement processes the lines of the MAPPED table for the RAP BO entity. The CONVERT KEY statement is given the final keys of the individual instances based on the preliminary ID identifying these instances. The individual key is written to a local variable. For demonstration purposes, %pid and the key values are then stored in an internal table.

The output window shows the result of the CONVERT KEY OF statement, i. e. a table that includes %pid and the corresponding key values, and the instances, that are successfully saved to the database, as a result of the ABAP EML MODIFY operations.