  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrpm_derived_types.htm) →  [TYPE REQUEST FOR](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptype_request_for.htm) → 

ABAP EML - TYPE REQUEST FOR in a managed RAP BO with additional save

This example demonstrates the use of the BDEF-derived types TYPE REQUEST FOR CHANGE and TYPE REQUEST FOR DELETE in the context of a managed RAP BO whose BDEF is specified with with additional save.

In this simplified example, all changes to the root instance of the demo BO are recorded (i. e. they are additionally saved) in the log table DEMO\_TAB\_LOG. This log table contains the following fields:

Log table field

Details

change\_id

Identifier for an individual change. In this case, it is a [UUID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuuid_glosry.htm "Glossary Entry").

key\_field

Key field of the [RAP BO instance](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry").

changing\_operation

Standard operation that has been carried out (CREATE, UPDATE or DELETE).

changed\_field\_name

Name of the RAP BO instance's field that has been created or changed.

changed\_value

Value of a created or changed field of the RAP BO instance.

created\_at

Date and time of the instance data creation, update or deletion.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ADDITIONAL\_SAVE.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ADDITIONAL\_SAVE
  as select from demo\_tab\_root\_3
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ADDITIONAL\_SAVE is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed with additional save
implementation in class bp\_demo\_managed\_additional\_sav unique;
strict;
define behavior for DEMO\_MANAGED\_ADDITIONAL\_SAVE
persistent table DEMO\_TAB\_ROOT\_3
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ADDITIONAL\_SAV. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following method is relevant in this example:

-   save\_modified
    
    At first, several type and variable declarations are available just for demonstration purposes. Among them, there are the [BDEF-derived types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") TYPE REQUEST FOR CHANGE, TYPE REQUEST FOR DELETE, TYPE TABLE FOR CHANGE and TYPE STRUCTURE FOR CHANGE. These BDEF-derived types are only relevant in the context of a managed RAP BO with additional save and unmanaged save. Basically, the structures create and update (that are of type TYPE REQUEST FOR CHANGE) as well as delete (that is of type TYPE REQUEST FOR DELETE) - they contain those instances that are to be created, changed or deleted - are available here by default and can be referred to directly instead of extra variable and type declarations as it is the case in this example. The declarations are followed by further declarations of internal tables that take care of storing the input for the log table in the database.
    
    IF statements then check whether instances have been created, updated or deleted by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") In doing so, the %control structure is used to get information on which fields have been set when creating, updating or deleting the instance. The IF statement processing those instances that have been created is implemented as follows: The internal table lt\_log is filled with the instance data created by the CREATE operation. A LOOP statement processes the individual instances: The changing\_operation receives the value CREATE. The creation time is logged (created\_at field). Then the instance data is read into an internal table to handle the %control information for certain fields. In this case, it is checked if field1 is marked as enabled. If so, a [UUID](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenuuid_glosry.htm "Glossary Entry") is created and assigned to the change\_id field. Since field1 is affected, the field changed\_field\_name gets the value field1. The field changed\_value receives the value that is provided by the RAP BO consumer. Finally, the entries are added to the internal table lt\_log\_c. The same procedure is done for field2. At the end of the IF statement, all the entries in the internal table are inserted in the log table on the database (demo\_tab\_log).
    
    The IF statement processing those instances that have been updated are implemented similarly to above (here, field3 and field4 of the entity are used).
    
    The IF statement taking care of deleted instances does not take the fields changed\_field\_name and changed\_value into consideration. They are not relevant.
    

Source Code

REPORT demo\_rap\_managed\_add\_save.
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
    MODIFY ENTITY demo\_managed\_additional\_save
     CREATE FROM VALUE #(
        ( %cid = 'cid1'
          key\_field = 1
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_2'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 1
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 2
          %control-field4 = if\_abap\_behv=>mk-on )
        ( %cid = 'cid2'
          key\_field = 2
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'create\_3'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'create\_4'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 3
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 4
          %control-field4 = if\_abap\_behv=>mk-on )
        ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 INTO TABLE @DATA(dbtab\_after\_create)
      ORDER BY key\_field.
    SELECT change\_id, key\_field, changing\_operation,
           changed\_field\_name, changed\_value, created\_at
    FROM demo\_tab\_log INTO TABLE @DATA(log\_tab\_after\_create)
      ORDER BY key\_field.
    out->begin\_section( \`Demo for TYPE REQUEST FOR CHANGE/DELETE\`
      )->next\_section( \`CREATE operation\`
      )->write\_text( 'DB table entries after the CREATE operation'
      )->write( dbtab\_after\_create
      )->write\_text(
      'Entries in the log table after the CREATE operation'
      )->write( log\_tab\_after\_create ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITY demo\_managed\_additional\_save
     UPDATE FROM VALUE #(
        ( key\_field = 1
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'update\_1'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_2'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 5
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 6
          %control-field4 = if\_abap\_behv=>mk-on )
        ( key\_field = 2
          %control-key\_field = if\_abap\_behv=>mk-on
          field1 = 'update\_3'
          %control-field1 = if\_abap\_behv=>mk-on
          field2 = 'update\_4'
          %control-field2 = if\_abap\_behv=>mk-on
          field3 = 7
          %control-field3 = if\_abap\_behv=>mk-on
          field4 = 8
          %control-field4 = if\_abap\_behv=>mk-on )
        ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 INTO TABLE @DATA(dbtab\_after\_update)
      ORDER BY key\_field.
    SELECT change\_id, key\_field, changing\_operation,
           changed\_field\_name, changed\_value, created\_at
    FROM demo\_tab\_log INTO TABLE @DATA(log\_tab\_after\_update)
      ORDER BY key\_field.
    out->line(
      )->next\_section( \`UPDATE operation\`
      )->write\_text( 'DB table entries after the UPDATE operation'
      )->write( dbtab\_after\_update
      )->write\_text(
      'Entries in the log table after the UPDATE operation'
      )->write( log\_tab\_after\_update ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITY demo\_managed\_additional\_save
     DELETE FROM VALUE #( ( key\_field = 2 ) ).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3 INTO TABLE @DATA(dbtab\_after\_delete)
      ORDER BY key\_field.
    SELECT change\_id, key\_field, changing\_operation,
           changed\_field\_name, changed\_value, created\_at
    FROM demo\_tab\_log INTO TABLE @DATA(log\_tab\_after\_delete)
      ORDER BY key\_field.
    out->line(
      )->next\_section( \`DELETE operation\`
      )->write\_text( 'DB table entries after the DELETE operation'
      )->write( dbtab\_after\_delete
      )->write\_text(
      'Entries in the log table after the DELETE operation'
      )->write( log\_tab\_after\_delete ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_log.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   An ABAP EML CREATE operation is carried out. Two instances are created. The save sequence is triggered by the COMMIT ENTITIES statement. The underlying BDEF includes the syntax with unmanaged save. Thus, the ABP method save\_modified is called in this example that saves certain entries to a log table in the database as described above.
-   The CREATE operation is followed by an UPDATE operation that modifies the two previously created instances. The changes get committed as well.
-   Finally, one of the existing instances is deleted via a DELETE operation. Another commit takes care of deleting the instance.
-   The output window shows the result of all three operations. For each operation, an internal table is displayed showing the entries of the database table. Another internal table shows the entries of the log table as a result of the implementations in the save\_modified method.