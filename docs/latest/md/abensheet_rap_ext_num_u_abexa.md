  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap_other.htm) →  [RAP Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapeml_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20in%20Use%3A%20Unmanaged%20RAP%20BO%20with%20External%20Numbering%2C%20ABENSHEET_RAP_EXT_NUM_U_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion%20for%20improvement:)

ABAP EML in Use: Unmanaged RAP BO with External Numbering

This example demonstrates various [RAP BO standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_standard_operation_glosry.htm "Glossary Entry") and [non-standard operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_nstandard_operation_glosry.htm "Glossary Entry") using ABAP EML in the context of an [unmanaged RAP business object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") with [RAP external numbering](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_ext_numbering_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_CS\_RAP\_RO\_U and its child entity DEMO\_CS\_RAP\_CH\_U.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_CS\_RAP\_RO\_U  
as select from demo\_cs\_rap\_tab1  
composition \[0..\*\] of demo\_cs\_rap\_ch\_u as \_child
{
  key key\_field,
  field1,
  field2,
  field3,
  field4,
  \_child
}

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CS\_RAP\_CH\_U  
as select from DEMO\_CS\_RAP\_TAB2  
association to parent demo\_cs\_rap\_ro\_u  
  as \_parent on $projection.key\_field = \_parent.key\_field
{
  \_parent,
  key key\_field,
  key key\_ch,
  field\_ch1,
  field\_ch2
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CS\_RAP\_RO\_U is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_cs\_rap\_ro\_u unique;
strict ( 2 );
define behavior for DEMO\_CS\_RAP\_RO\_U alias root
lock master
authorization master ( global, instance )
{
  create;
  update;
  delete;
  association \_child { create; }
  action multiply\_by\_2;
  action ( features : instance ) multiply\_by\_3;
  action ( features : global ) set\_z;
  field ( readonly : update ) key\_field;
}
define behavior for DEMO\_CS\_RAP\_CH\_U alias child
lock dependent by \_parent
authorization dependent by \_parent
{
  field ( readonly ) key\_field;
  field ( readonly : update ) key\_ch;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CS\_RAP\_RO\_U. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. See comments in the code for more information on the implementation.

Source Code   

\* Public class definition
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*        RAP BO consumer for a RAP Demo Scenario
\*
\* Notes on the scenario:
\*  - Implementation type of the RAP BO: unmanaged
\*  - Numbering technique: external numbering
\*  - Data model: Consists of a root entity and one child entity. The
\*      BDEF defines the behavior for these two entities which are
\*      connected via a CDS composition relation. The definitions in the
\*      BDEF determine which methods must be implemented in the ABAP
\*      behavior pool (ABP).
\*
\* This simplified example is not a real life scenario and rather
\* focuses on the technical side by giving an idea how the communication
\* and data exchange between a RAP BO consumer, which is an ABAP report
\* in this case, and RAP BO provider can work and how the methods of
\* an ABP might be self-implemented.
\*
\* The report demonstrates various RAP BO operations:
\*  - create
\*  - update
\*  - delete
\*  - executing actions
\*  - create-by-association (parent to child)
\*  - read (from root + child entity)
\*  - read-by-association (parent to child)
\*  - read-by-association (child to parent)
\*
\* Note: For demonstration purposes, some of the operations are
\* impacted by feature controls and instance authorization as specified
\* in the BDEF.
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS cl\_demo\_cs\_rap\_ext\_num\_u DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      failed   TYPE RESPONSE FOR FAILED demo\_cs\_rap\_ro\_u,
      reported TYPE RESPONSE FOR REPORTED demo\_cs\_rap\_ro\_u,
      mapped   TYPE RESPONSE FOR MAPPED demo\_cs\_rap\_ro\_u.
    METHODS:
      initialize\_dbtabs,
      "If there are entries in the response parameters following EML
      "requests, they should be processed for displaying purposes.
      extract\_from\_reported RETURNING VALUE(messages) TYPE string\_table,
      extract\_from\_failed RETURNING VALUE(errors) TYPE string\_table,
      fill\_db\_tab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cs\_rap\_ext\_num\_u IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`RAP Demo: RAP BO Operations Using an \` &&
                      \`Unmanaged RAP BO (External Numbering)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Create operation
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
    )->next\_section( \`Create Operation\` ).
    "Adding an entry to the database table to provoke an error for the
    "EML create request.
    fill\_db\_tab( ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - field4 is purposely not included in the FIELDS list
\* - Effect:
\*   - %control value for field4 is set to if\_abap\_behv=>mk-off
\*   - Although the derived type (created inline here) includes a
\*     value assignment for field4 in an instance, the field value is
\*     not saved. The initial value is used.
\* - The instance with key\_field = 4 will not be saved since an entry
\*   already exists in the database table with the same key.
\* - Response parameters are specified to receive information.
\* - A COMMIT ENTITIES statement triggers the saving of the instances.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_u
      ENTITY root
      CREATE FIELDS ( key\_field field1 field2 field3 )
        WITH VALUE #( ( %cid = 'cid1'
                        key\_field = 1
                        field1    = 'aaa'
                        field2    = 'bbb'
                        field3    = 10
                        field4    = 11 ) "Value not considered
                      ( %cid      = 'cid2'
                        key\_field = 2
                        field1    = 'ccc'
                        field2    = 'ddd'
                        field3    = 20 )
                      ( %cid      = 'cid3'
                        key\_field = 3
                        field1    = 'X'
                        field2    = 'eee'
                        field3    = 30 )
                      ( %cid      = 'cid4' "Instance to fail
                        key\_field = 4
                        field1    = 'error'
                        field2    = 'error'
                        field3    = 99 ) )
        MAPPED mapped
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving and displaying database content
    SELECT FROM demo\_cs\_rap\_tab1
      FIELDS key\_field, field1, field2, field3, field4
      ORDER BY key\_field
      INTO TABLE @DATA(tab\_root).
    out->write( tab\_root ).
    "Displaying response information
    IF mapped-root IS NOT INITIAL.
      out->write( data = mapped-root
                name = \`Entries in MAPPED response parameter \` &&
                       \`(root entity)\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Update operations
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Update Operation\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create and an update request. The
\*   create request is included to have a %cid to refer to for demo
\*   purposes. This instance has not yet been persisted.
\* - The EML statement for the create operation includes the ABAP
\*   FROM ... (instead of FIELDS ( ... ) WITH ...) for demo purposes.
\*   Here, the %control values must be set explicitly.
\* - The update request purposely excludes field2 so as not to update
\*   the value of this particular field.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_u
        ENTITY root
        CREATE FROM VALUE #(
            %control-key\_field = if\_abap\_behv=>mk-on
            %control-field1 = if\_abap\_behv=>mk-on
            %control-field2 = if\_abap\_behv=>mk-on
            %control-field3 = if\_abap\_behv=>mk-on
            %control-field4 = if\_abap\_behv=>mk-on
          ( %cid = 'cid5'
            key\_field = 5
            field1    = 'hhh'
            field2    = 'iii'
            field3    = 50
            field4    = 51 ) )
        UPDATE FIELDS ( field1 field3 field4 )
          WITH VALUE #(
          "Update via cid\_ref
          ( %cid\_ref = 'cid5'
            field1   = 'up\_jjj'
            field2   = 'up\_kkk' "Value not considered
            field3   = 500
            field4   = 501 )
          "Updates via key
          ( key\_field = 1
            field1    = 'up\_lll'
            field3    = 100
            field4    = 101 )
          ( key\_field = 2
            field1    = 'up\_mmm'
            field3    = 200
            field4    = 201 )
          ( key\_field = 99       "Instance to fail
            field1    = 'error'
            field3    = 99
            field4    = 99 ) )
        MAPPED mapped
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving and displaying database content
    SELECT FROM demo\_cs\_rap\_tab1
      FIELDS key\_field, field1, field2, field3, field4
      ORDER BY key\_field
      INTO TABLE @tab\_root.
    out->write( tab\_root ).
    "Displaying response information
    IF mapped-root IS NOT INITIAL.
      out->write( data = mapped-root
                name = \`Entries in MAPPED response parameter \` &&
                       \`(root entity)\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Delete operation
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Delete Operation\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create and an delete request. The
\*   create request is included to have a %cid to refer to for demo
\*   purposes. This instance has not yet been persisted.
\* - EML statements for delete operations can only be used with the
\*   ABAP word FROM ....
\* - Note: Instance authorization is defined in the BDEF. In this
\*   example, the corresponding handler method is implemented in a way
\*   that disables the deletion of instances if a field has a certain
\*   value. If field1 has the value 'X', a deletion is disabled.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_u
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
          ( %cid      = 'cid\_del'
            key\_field = 6
            field1    = 'a'
            field2    = 'b'
            field3    = 60
            field4    = 61 ) )
        DELETE FROM VALUE #(
          "Deletion via %cid\_ref
          ( %cid\_ref = 'cid\_del' )
          "Deletions via key
          ( key\_field = 4 )
          ( key\_field = 5 )
          "Instances to fail
          ( key\_field = 3 )      "Deletion disabled
          ( key\_field = 100 ) )  "Key not available
        MAPPED mapped
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving and displaying database content
    SELECT FROM demo\_cs\_rap\_tab1
      FIELDS key\_field, field1, field2, field3, field4
      ORDER BY key\_field
      INTO TABLE @tab\_root.
    out->write( tab\_root ).
    "Displaying response information
    IF mapped-root IS NOT INITIAL.
      out->write( data = mapped-root
                name = \`Entries in MAPPED response parameter \` &&
                       \`(root entity)\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Action multiply\_by\_2
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Executing Action mutliply\_by\_2\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create request and a request to execute
\*   an action. The create request is included to have a %cid to refer
\*   to for demo purposes. This instance has not yet been persisted.
\* - EML statements for executing actions can only be used with the
\*   ABAP word FROM ....
\* - As the name implies, the action multiplies field
\*   values (field3 and field4) by 2 for requested instances.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_u
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
          ( %cid = 'cid\_x2'
            key\_field = 7
            field1    = 'nnn'
            field2    = 'ooo'
            field3    = 70
            field4    = 71 ) )
        EXECUTE multiply\_by\_2 FROM VALUE #(
          "Executing action via %cid\_ref
          ( %cid\_ref = 'cid\_x2' )
          "Executing action via key
          ( key\_field  =  1  )
          ( key\_field  =  2  )
          ( key\_field  =  1234 ) ) "Instance to fail
        MAPPED mapped
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving and displaying database content
    SELECT FROM demo\_cs\_rap\_tab1
      FIELDS key\_field, field1, field2, field3, field4
      ORDER BY key\_field
      INTO TABLE @tab\_root.
    out->write( tab\_root ).
    "Displaying response information
    IF mapped-root IS NOT INITIAL.
      out->write( data = mapped-root
                name = \`Entries in MAPPED response parameter \` &&
                       \`(root entity)\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Action multiply\_by\_3
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Executing Action mutliply\_by\_3\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create request and a request to execute
\*   an action. The create request is included to have a %cid to refer
\*   to for demo purposes. This instance has not yet been persisted.
\* - As the name implies, the action multiplies field
\*   values (field3 and field4) by 3 for requested instances.
\* - Note: In the BDEF of this example, this action is defined with
\*   instance feature control. Here, the action execution is disabled
\*   if both integer values are 0.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_u
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
          ( %cid = 'cid\_x3'
            key\_field = 8
            field1    = 'ppp'
            field2    = 'qqq'
            field3    = 80
            field4    = 81 ) )
        EXECUTE multiply\_by\_3 FROM VALUE #(
          "Executing action via %cid\_ref
          ( %cid\_ref = 'cid\_x3' )
          "Executing action via key
          ( key\_field =  1  )
          ( key\_field =  2  )
          "Instances to fail
          ( key\_field =  3 )      "Action execution disabled
          ( key\_field =  1234 ) ) "Key not available
        MAPPED mapped
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving and displaying database content
    SELECT FROM demo\_cs\_rap\_tab1
      FIELDS key\_field, field1, field2, field3, field4
      ORDER BY key\_field
      INTO TABLE @tab\_root.
    out->write( tab\_root ).
    "Displaying response information
    IF mapped-root IS NOT INITIAL.
      out->write( data = mapped-root
                name = \`Entries in MAPPED response parameter \` &&
                       \`(root entity)\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Action set\_z
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Executing ACTION set\_z\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create request and a request to execute
\*   an action. The create request is included to have a %cid to refer
\*   to for demo purposes. This instance has not yet been persisted.
\* - As the name implies, the action sets the value 'Z' for a
\*   particular field (field2) for requested instances.
\* - Note: In the BDEF of this example, this action is defined with
\*   global feature control. Here, the action execution is disabled
\*   based on a certain time frame in which you run this example. You
\*   might want to change the time frame values in the ABP to check the
\*   effect.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_u
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
          ( %cid      = 'cid\_setz'
            key\_field = 9
            field1    = 'rrr'
            field2    = 'sss'
            field3    = 90
            field4    = 91 ) )
        EXECUTE set\_z FROM VALUE #(
          "Executing action via %cid\_ref
          ( %cid\_ref = 'cid\_setz' )
          "Executing action via key
          ( key\_field =  2 ) )
        MAPPED mapped
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving and displaying database content
    SELECT FROM demo\_cs\_rap\_tab1
      FIELDS key\_field, field1, field2, field3, field4
      ORDER BY key\_field
      INTO TABLE @tab\_root.
    out->write( tab\_root ).
    "Displaying response information
    IF mapped-root IS NOT INITIAL.
      out->write( data = mapped-root
                name = \`Entries in MAPPED response parameter \` &&
                       \`(root entity)\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Create-by-Association Operation (from Root to Child Entity)
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Create-by-Association Operation \` &&
                  \`(from Root to Child Entity)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create and create-by-association
\*   request, i. e. a "deep create". An instance is created for the
\*   root entity and, in the same request and based on this root
\*   instance, instances are created for the child entity, too.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_u
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
              WITH VALUE #(
              ( %cid      = 'cid\_cba'
                key\_field = 10
                field1    = 'ttt'
                field2    = 'uuu'
                field3    = 100
                field4    = 101 ) )
        CREATE BY \\\_child
        FIELDS ( key\_ch field\_ch1 field\_ch2 ) WITH VALUE #(
          "CBA operation via %cid\_ref
          ( %cid\_ref = 'cid\_cba'
            %target = VALUE #( ( %cid      = 'cid\_ch1'
                                 key\_ch    = 11
                                 field\_ch1 = 'aaa\_ch'
                                 field\_ch2 = 110 )
                               ( %cid      = 'cid\_ch2'
                                 key\_ch    = 12
                                 field\_ch1 = 'bbb\_ch'
                                 field\_ch2 =  120 ) ) )
          "CBA operation via root key
          ( key\_field = 1
            %target = VALUE #( ( %cid      = 'cid\_ch3'
                                 key\_ch    = 1
                                 field\_ch1 = 'ccc\_ch'
                                 field\_ch2 = 11 )
                               ( %cid      = 'cid\_ch4'
                                 key\_ch    = 2
                                 field\_ch1 = 'ddd\_ch'
                                 field\_ch2 = 22 ) ) )
          ( key\_field = 2
            %target = VALUE #( ( %cid      = 'cid\_ch5'
                                 key\_ch    = 3
                                 field\_ch1 = 'ccc\_ch'
                                 field\_ch2 = 33 )
                               ( %cid      = 'cid\_ch6'
                                 key\_ch    = 4
                                 field\_ch1 = 'ddd\_ch'
                                 field\_ch2 = 44 ) ) )
          "Instance to fail
          ( key\_field = 123
            %target = VALUE #( ( %cid      = 'cid\_ch7'
                                 key\_ch    = 1
                                 field\_ch1 = 'error'
                                 field\_ch2 = 2 )
                               ( %cid      = 'cid\_ch8'
                                 key\_ch    = 2
                                 field\_ch1 = 'error'
                                 field\_ch2 = 3 ) ) ) )
          MAPPED mapped
          FAILED failed
          REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Retrieving and displaying database content
    SELECT FROM demo\_cs\_rap\_tab1
      FIELDS key\_field, field1, field2, field3, field4
      ORDER BY key\_field
      INTO TABLE @tab\_root.
    SELECT FROM demo\_cs\_rap\_tab2
      FIELDS key\_field, key\_ch, field\_ch1, field\_ch2
      ORDER BY key\_field, key\_ch
      INTO TABLE @FINAL(tab\_child).
    out->write( tab\_root ).
    out->write( tab\_child ).
    "Displaying response information
    IF mapped IS NOT INITIAL.
      out->write( data = mapped
                name = \`Entries in MAPPED response parameter \` &&
                       \`(root & child entity)\` ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Read operation
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Read Operation (Root Entity)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a read request. The EML statement uses
\*   the ABAP words ALL FIELDS WITH. In this case, as the name implies,
\*   all field values are retrieved. The %control values for all fields
\*   are set to if\_abap\_behv=>mk-on.
\* - When using the ABAP words FIELDS ( ... ) WITH and specifying the
\*   concrete fields to be read, only for those fields %control is
\*   set accordingly.
\* - Filling the parameter for RESULT is mandatory.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    READ ENTITIES OF demo\_cs\_rap\_ro\_u
        ENTITY root
        ALL FIELDS WITH VALUE #(
          ( key\_field = 1 )
          ( key\_field = 2 )
          ( key\_field = 5 ) ) "Instance to fail
        RESULT FINAL(result)
        FAILED failed
        REPORTED reported.
    "Displaying the read result and response information
    out->write( result ).
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Read operation (child entity)
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Read Operation (Child Entity)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a read request. The read operation is
\*   executed on the child entity directly by specifying the alias, as
\*   it is defined in the BDEF, following the ABAP word ENTITY.
\* - All field values are read using the addition ALL FIELDS WITH.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    READ ENTITIES OF demo\_cs\_rap\_ro\_u
          ENTITY child
          ALL FIELDS WITH VALUE #(
            ( key\_field = 1 key\_ch = 1 )
            ( key\_field = 2 key\_ch = 4 )
            "Instances to fail
            ( key\_field = 9 )
            ( key\_field = 9 key\_ch = 11 ) )
          RESULT FINAL(read\_ch)
          FAILED failed
          REPORTED reported.
    "Displaying read result
    out->write( read\_ch ).
    "Displaying response information
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Read-by-association operation (from parent to child)
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Read-by-Association Operation \` &&
                  \`(from Parent to Child)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a read-by-association request from the
\*   parent to the child entity.
\* - All field values are read using the addition ALL FIELDS WITH.
\* - Specifying the parameter for RESULT is mandatory.
\* - Additionally, the optional association links are retrieved.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    READ ENTITIES OF demo\_cs\_rap\_ro\_u
          ENTITY root
          BY \\\_child
          ALL FIELDS WITH VALUE #(
            ( key\_field = 2 )
            ( key\_field = 10 )
            ( key\_field = 111 ) ) "Instance to fail
          RESULT FINAL(rba\_result)
          LINK FINAL(association\_links)
          FAILED failed
          REPORTED reported.
    "Displaying read result and association links
    out->write( rba\_result ).
    out->write( association\_links ).
    "Displaying response information
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Read-by-association operation (from child to parent)
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Read-by-Association Operation \` &&
                  \`(from Child to Parent)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a read-by-association request from the
\*   child to the parent.
\* - All field values are read using the addition ALL FIELDS WITH.
\* - Specifying the parameter for RESULT is mandatory.
\* - Additionally, the optional association links are retrieved.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    READ ENTITIES OF demo\_cs\_rap\_ro\_u
      ENTITY child
      BY \\\_parent ALL FIELDS WITH VALUE #(
         ( key\_field = 1 key\_ch = 1 )
         ( key\_field = 2 key\_ch = 4 )
         "Instances to fail
         ( key\_field = 1 key\_ch = 3 )
         ( key\_field = 543 key\_ch = 1 ) )
       RESULT FINAL(rba\_parent)
       LINK FINAL(association\_links\_parent)
       FAILED failed
       REPORTED reported.
    "Displaying read result and association links
    out->write( rba\_parent ).
    out->write( association\_links\_parent ).
    "Displaying response information
    IF failed IS NOT INITIAL.
      out->write( data = extract\_from\_failed( )
                name = \`Entries in FAILED response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = extract\_from\_reported( )
                name = \`Entries in REPORTED response parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Excursion: Read and read-by-association operation using dynamic
\* EML statements
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Read and Read-by-Association Operations \` &&
                     \`Using Dynamic Variants of EML Statements\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - If the parameter for FULL is not flagged, only the association
\*   links are returned. The parameter for RESULT will be empty.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    DATA:
      op\_tab          TYPE abp\_behv\_retrievals\_tab,
      read\_dyn        TYPE TABLE FOR READ IMPORT demo\_cs\_rap\_ro\_u,
      read\_dyn\_result TYPE TABLE FOR READ RESULT demo\_cs\_rap\_ro\_u,
      rba\_dyn         TYPE TABLE FOR READ IMPORT
                        demo\_cs\_rap\_ro\_u\\\_child,
      rba\_dyn\_result  TYPE TABLE FOR READ RESULT
                        demo\_cs\_rap\_ro\_u\\\_child,
      rba\_dyn\_link    TYPE TABLE FOR READ LINK demo\_cs\_rap\_ro\_u\\\_child.
    read\_dyn = VALUE #(
      ( %key-key\_field = 1
        %control = VALUE #(
          field1 = if\_abap\_behv=>mk-on
          field2 = if\_abap\_behv=>mk-on
          field3 = if\_abap\_behv=>mk-on
          field4 = if\_abap\_behv=>mk-on ) )
      ( %key-key\_field = 2
        %control = VALUE #(
          field1 = if\_abap\_behv=>mk-on
          field2 = if\_abap\_behv=>mk-on
          field3 = if\_abap\_behv=>mk-on
          field4 = if\_abap\_behv=>mk-on ) ) ).
    rba\_dyn = VALUE #(
     ( %key-key\_field = 1
       %control = VALUE #(
          key\_field = if\_abap\_behv=>mk-on
          key\_ch    = if\_abap\_behv=>mk-on
          field\_ch1 = if\_abap\_behv=>mk-on
          field\_ch2 = if\_abap\_behv=>mk-on ) )
      ( %key-key\_field = 2
        %control = VALUE #(
          key\_field = if\_abap\_behv=>mk-on
          key\_ch    = if\_abap\_behv=>mk-on
          field\_ch1 = if\_abap\_behv=>mk-on
          field\_ch2 = if\_abap\_behv=>mk-on ) ) ).
    out->write\_doc( \`<b>Result if FULL parameter is \` &&
                  \`not flagged for RBA</b>\` ).
    op\_tab = VALUE #(
       ( op = if\_abap\_behv=>op-r-read
         entity\_name = 'DEMO\_CS\_RAP\_RO\_U'
         instances   = REF #( read\_dyn )
         results     = REF #( read\_dyn\_result ) )
       ( op = if\_abap\_behv=>op-r-read\_ba
         entity\_name = 'DEMO\_CS\_RAP\_RO\_U'
         sub\_name    = '\_CHILD'
         full        = ''
         instances   = REF #( rba\_dyn )
         results     = REF #( rba\_dyn\_result )
         links       = REF #( rba\_dyn\_link ) ) ).
    READ ENTITIES OPERATIONS op\_tab.
    out->write( read\_dyn\_result ).
    out->write( rba\_dyn\_result ).
    out->write( rba\_dyn\_link ).
    out->write\_doc( \`<b>Result if FULL parameter is \` &&
                  \`flagged for RBA</b>\` ).
    op\_tab = VALUE #(
           ( op = if\_abap\_behv=>op-r-read
             entity\_name = 'DEMO\_CS\_RAP\_RO\_U'
             instances   = REF #( read\_dyn )
             results     = REF #( read\_dyn\_result ) )
           ( op = if\_abap\_behv=>op-r-read\_ba
             entity\_name = 'DEMO\_CS\_RAP\_RO\_U'
             sub\_name    = '\_CHILD'
             full        = 'X'
             instances   = REF #( rba\_dyn )
             results     = REF #( rba\_dyn\_result )
             links       = REF #( rba\_dyn\_link ) ) ).
    READ ENTITIES OPERATIONS op\_tab.
    out->write( read\_dyn\_result ).
    out->write( rba\_dyn\_result ).
    out->write( rba\_dyn\_link ).
  ENDMETHOD.
  METHOD extract\_from\_failed.
    CLEAR errors.
    LOOP AT failed-root ASSIGNING FIELD-SYMBOL(<err>).
      DATA op TYPE string.
      CASE if\_abap\_behv=>mk-on.
        WHEN <err>-%op-%create.
          op = \`create operation\`.
        WHEN <err>-%op-%update.
          op = \`update operation\`.
        WHEN <err>-%op-%delete.
          op = \`delete operation\`.
        WHEN <err>-%op-%assoc-\_child.
          op = \`operation involving the child entity\`.
        WHEN <err>-%op-%action-multiply\_by\_2.
          op = \`executing action multiply\_by\_2\`.
        WHEN <err>-%op-%action-multiply\_by\_3.
          op = \`executing action multiply\_by\_3\`.
        WHEN <err>-%op-%action-set\_z.
          op = \`executing action set\_z\`.
        WHEN OTHERS. op = \`operation\`.
      ENDCASE.
      APPEND \`Error for instance with \` &&
           COND #( WHEN <err>-%cid IS NOT INITIAL THEN \`%cid = \`
                   && <err>-%cid
                   ELSE \`key = \` && <err>-key\_field ) &&
           \`: Fail cause \` &&  <err>-%fail-cause && \` for \` &&  op
           && \`.\` TO errors.
    ENDLOOP.
    IF failed-child IS NOT INITIAL.
      LOOP AT failed-child ASSIGNING FIELD-SYMBOL(<err\_ch>).
        APPEND \`Error for child instance with \` &&
             COND #( WHEN <err\_ch>-%cid IS NOT INITIAL THEN \`%cid = \`
                     && <err\_ch>-%cid
                     ELSE \`key\_field = \` && <err\_ch>-key\_field &&
                      \` and key\_ch = \` && <err\_ch>-key\_ch ) &&
             \`: Fail cause \` &&  <err\_ch>-%fail-cause &&
             \` for operation.\`
             TO errors.
      ENDLOOP.
    ENDIF.
  ENDMETHOD.
  METHOD extract\_from\_reported.
    CLEAR messages.
    LOOP AT reported-root ASSIGNING FIELD-SYMBOL(<rep>).
      IF <rep>-%global = if\_abap\_behv=>mk-on.
        APPEND <rep>-%msg->m\_severity && \` \` &&
                <rep>-%msg->if\_t100\_dyn\_msg~msgv1 TO messages.
      ELSE.
        APPEND \`Message for instance with \` &&
               COND #( WHEN <rep>-%cid IS NOT INITIAL
                       THEN \`%cid = \` && <rep>-%cid
                       ELSE \`key = \` && <rep>-key\_field ) &&
               \`: \` &&  <rep>-%msg->m\_severity && \` \` &&
               <rep>-%msg->if\_t100\_dyn\_msg~msgv1 TO messages.
      ENDIF.
    ENDLOOP.
    IF reported-child IS NOT INITIAL.
      LOOP AT reported-child ASSIGNING FIELD-SYMBOL(<rep\_ch>).
        APPEND \`Message for child instance with key\_field = \` &&
        <rep\_ch>-key\_field && \` and key\_ch = \`
        && <rep\_ch>-key\_ch && \`: \` && <rep\_ch>-%msg->m\_severity &&
        \` \` && <rep\_ch>-%msg->if\_t100\_dyn\_msg~msgv1 TO messages.
      ENDLOOP.
    ENDIF.
  ENDMETHOD.
  METHOD fill\_db\_tab.
    MODIFY demo\_cs\_rap\_tab1 FROM TABLE @( VALUE #(
          ( key\_field = 4
            field1    = 'fff'
            field2    = 'ggg'
            field3    = 40
            field4    = 41 ) ) ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_cs\_rap\_tab1.                       "#EC CI\_NOWHERE
    DELETE FROM demo\_cs\_rap\_tab2.                       "#EC CI\_NOWHERE
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The class demonstrates various RAP BO operations and aspects:

-   Create
-   Update
-   Delete
-   Executing actions
-   Instance and global feature control
-   Instance authorization
-   Create-by-association (parent to child)
-   Read
-   Read-by-association (parent to child)
-   Read (child entity)
-   Read-by-association (child to parent)
-   Excursion: Dynamic EML statement

See comments in the code for more information.