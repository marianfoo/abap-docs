  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [ABAP for RAP Business Events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_events.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Local%20Consumption%20of%20RAP%20Business%20Events%2C%20ABENRAP_EVENTS_LOCAL_CONSUME_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for
%20improvement:)

Local Consumption of RAP Business Events

This example demonstrates the local consumption of [RAP business events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_entity_event_glosry.htm "Glossary Entry") using a [managed RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_RAP\_EVENT\_M.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_rap\_event\_m as select from demo\_tab\_root\_5 {
  key key\_field,
  field1,
  field2,
  field3,
  field4
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_RAP\_EVENT\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

// Note:
// The RAP event handler class for this example is the class
// cl\_demo\_rap\_event\_handler. In the CCIMP include of the class,
// the RAP event handler methods are implemented.
managed with additional save with full data
implementation in class bp\_demo\_rap\_event\_m unique;
strict ( 2 );
define behavior for demo\_rap\_event\_m
persistent table demo\_tab\_root\_5
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  event created;
  event updated parameter DEMO\_ABSTRACT\_ROOT\_1;
  event deleted parameter DEMO\_ABSTRACT\_ROOT\_1;
  field ( readonly : update ) key\_field;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_EVENT\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

RAP event handler class

The global class of the RAP event handler class is CL\_DEMO\_RAP\_EVENT\_HANDLER. The events are handled in the CCIMP include.

Source Code   

\* Public class definition
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Note:
\*
\* - The RAP event handler class for this example is the class
\*   cl\_demo\_rap\_event\_handler. In the CCIMP include of the class,
\*   the RAP event handler methods are implemented.
\*
\* - The RAP business events in this example are raised using RAISE
\*   ENTITY EVENT statements in the save\_modified saver method that
\*   is implemented in the CCIMP include of the ABAP behavior pool
\*   bp\_demo\_rap\_event\_m.
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS cl\_demo\_rap\_events DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA filter TYPE REF TO if\_xco\_bal\_log\_filter.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_events IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`RAP Demo: Local Consumption of \` &&
    \`RAP Business Events \` ).
    "RAP create operation
    MODIFY ENTITY demo\_rap\_event\_m
      CREATE FIELDS ( key\_field field1 field2 field3 field4 )
      WITH VALUE #( ( %cid = 'cid1'
                      key\_field = 1
                      field1 = 'aaa'
                      field2 = 'bbb'
                      field3 = 11
                      field4 = 111 )
                    ( %cid = 'cid2'
                      key\_field = 2
                      field1 = 'ccc'
                      field2 = 'ddd'
                      field3 = 22
                      field4 = 222 )
                    ( %cid = 'cid3'
                      key\_field = 3
                      field1 = 'eee'
                      field2 = 'fff'
                      field3 = 33
                      field4 = 333 )
                    ( %cid = 'cid4'
                      key\_field = 4
                      field1 = 'ggg'
                      field2 = 'hhh'
                      field3 = 44
                      field4 = 444 ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "RAP update operation
    MODIFY ENTITY demo\_rap\_event\_m
      UPDATE FIELDS ( field1 field2 field3 field4 )
      WITH VALUE #( ( key\_field = 2
                      field1 = 'iii\_up'
                      field2 = 'jjj\_up'
                      field3 = 222
                      field4 = 22 )
                    ( key\_field = 3
                      field1 = 'kkk\_up'
                      field2 = 'lll\_up'
                      field3 = 333
                      field4 = 33 ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "RAP delete operation
    MODIFY ENTITY demo\_rap\_event\_m
      DELETE FROM VALUE #( ( key\_field = 4 ) ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    "Note: Due to the asynchronous call of the events, a WAIT statement
    "is included to wait for messages that are raised by events to be
    "written to the business application log so that they can be
    "displayed here.
    WAIT UP TO 3 SECONDS.
    "Retrieving persisted instances
    SELECT key\_field, field1, field2, field3, field4
     FROM demo\_tab\_root\_5
     ORDER BY key\_field
     INTO TABLE @DATA(dbtab\_entries).
    out->write( \`Database table entries after the RAP operations\`
    )->write( dbtab\_entries ).
    "Getting messages from the business application log to demonstrate
    "that the event handler methods have been called
    DATA(log) = cl\_demo\_rap\_event\_handler=>log\_get( filter ).
    out->write( \`Business application log entries created by the \` &&
    \`raised events\`
    )->write( log ).
    IF lines( log ) < 7.
      out->write( \`Note: Not all RAP business events raised in this \` &&
      \`example could be retrieved. Try and run the example again.\` ).
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    DELETE FROM demo\_tab\_root\_5.
    "Deleting existing messages from the business application log
    "create filter
    filter = cl\_demo\_rap\_event\_handler=>log\_filter(
      cl\_demo\_rap\_event\_handler=>external\_id ).
    "delete existing messages from log
    cl\_demo\_rap\_event\_handler=>log\_delete( filter ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The example contains three ABAP EML modify requests: a RAP create, update and delete operation. For each of the operations, an event is raised using a [RAISE ENTITY EVENT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_entity_event.htm) statement. The events are raised in the [save\_modified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaprap_saver_meth_save_modified.htm) RAP saver method.

When the events are raised, the [RAP event handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_event_handler_meth_glosry.htm "Glossary Entry"), which are implemented in the CCIMP include of the CL\_DEMO\_RAP\_EVENT\_HANDLER class, are called asynchronously. To demonstrate the effect of the events, messages are created and added to the Business Application Log.

In the output of the example, the content of an internal table is displayed that demonstrates the effect of the RAP operations. The internal table is filled by selecting from the database table where the [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") are persisted to. Additionally, the content of an internal table is displayed including the messages that have been inserted into the Business Application Log by the event handler methods.