---
title: "Data model"
description: |
  The CDS data model consists of the root entity DEMO_CS_RAP_RO_M and its child entity DEMO_CS_RAP_CH_M. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define root view entity demo_cs_rap_ro_m as select from demo_cs_rap_tab1 composition 0.. of demo_cs_rap_ch_m
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensheet_rap_ext_num_m_abexa.htm"
abapFile: "abensheet_rap_ext_num_m_abexa.htm"
keywords: ["select", "update", "delete", "loop", "do", "if", "case", "try", "method", "class", "data", "abensheet", "rap", "ext", "num", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Related ABAP Language Elements and Topics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap_other.htm) →  [RAP Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20in%20Use%3A%20Managed%20RAP%20BO%20with%20External%20Numbering%2C%20ABENSHEET_RAP_EXT_NUM_M_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion%20for%20improvement:)

ABAP EML in Use: Managed RAP BO with External Numbering

This example demonstrates various [RAP BO standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_standard_operation_glosry.htm "Glossary Entry") and [non-standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_nstandard_operation_glosry.htm "Glossary Entry") using ABAP EML in the context of a [managed RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") with [RAP external numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_ext_numbering_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_CS\_RAP\_RO\_M and its child entity DEMO\_CS\_RAP\_CH\_M.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_cs\_rap\_ro\_m  
as select from demo\_cs\_rap\_tab1  
composition \[0..\*\] of demo\_cs\_rap\_ch\_m as \_child
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
define view entity demo\_cs\_rap\_ch\_m  
as select from DEMO\_CS\_RAP\_TAB2  
association to parent demo\_cs\_rap\_ro\_m  
  as \_parent on $projection.key\_field = \_parent.key\_field
{
  \_parent,
  key key\_field,
  key key\_ch,
  field\_ch1,
  field\_ch2
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_CS\_RAP\_RO\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_cs\_rap\_ro\_m unique;
strict ( 2 );
define behavior for demo\_cs\_rap\_ro\_m alias root
persistent table DEMO\_CS\_RAP\_TAB1
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  action multiply\_by\_2;
  validation val on save { field field3; }
  determination det\_add\_text on save { create; }
  field(readonly:update) key\_field;
}
define behavior for demo\_cs\_rap\_ch\_m alias child
persistent table DEMO\_CS\_RAP\_TAB2
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  field(readonly:update) key\_ch;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_CS\_RAP\_RO\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. See comments in the code for more information on the implementation.

Source Code   

\* Public class definition
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*        RAP BO consumer for a RAP Demo Scenario
\*
\* Notes on the scenario:
\*  - Implementation type of the RAP BO: managed
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
\* in this case, and RAP BO provider can work. Additionally, it shows
\* how the methods for non-standard RAP BO operations might might be
\* self-implemented in an ABP.
\*
\* The report demonstrates various RAP BO operations and aspects:
\*  - create (including a determination on save)
\*  - update
\*  - delete
\*  - executing an action
\*  - validation
\*  - create-by-association (parent to child)
\*  - read (root entity)
\*  - read-by-association (parent to child)
\*  - read (child entity)
\*  - read-by-association (child to parent)
\*  - Excursion: Dynamic EML statement
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
CLASS cl\_demo\_cs\_rap\_ext\_num\_m DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      failed   TYPE RESPONSE FOR FAILED   demo\_cs\_rap\_ro\_m,
      reported TYPE RESPONSE FOR REPORTED demo\_cs\_rap\_ro\_m,
      mapped   TYPE RESPONSE FOR MAPPED demo\_cs\_rap\_ro\_m.
    METHODS:
      initialize\_dbtabs,
      "If there are entries in the response parameters following EML
      "requests, they should be processed for displaying purposes.
      extract\_from\_reported RETURNING VALUE(messages) TYPE string\_table,
      extract\_from\_failed RETURNING VALUE(errors) TYPE string\_table,
      fill\_db\_tab.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_cs\_rap\_ext\_num\_m IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`RAP Demo: RAP BO Operations Using a \` &&
                      \`Managed RAP BO\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Create operation
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
    )->next\_section( \`Create operation\` ).
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
\* - The example BDEF includes the definition of a determination on
\*   save for create operations. In this case, the determination
\*   adds some text to the value in field2.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_m
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
                        field1    = 'eee'
                        field2    = 'fff'
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
    IF mapped IS NOT INITIAL.
      out->write( mapped-root ).
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
    out->next\_section( \`Update operation\` ).
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
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_m
        ENTITY root
        CREATE FROM VALUE #(
            %control-key\_field = if\_abap\_behv=>mk-on
            %control-field1 = if\_abap\_behv=>mk-on
            %control-field2 = if\_abap\_behv=>mk-on
            %control-field3 = if\_abap\_behv=>mk-on
            %control-field4 = if\_abap\_behv=>mk-on
          ( %cid = 'cid5'
            key\_field = 5
            field1    = 'iii'
            field2    = 'jjj'
            field3    = 50
            field4    = 51 ) )
        UPDATE FIELDS ( field1 field3 field4 )
          WITH VALUE #(
          "Update via cid\_ref
          ( %cid\_ref = 'cid5'
            field1   = 'up\_kkk'
            field2   = 'up\_lll' "Value not considered
            field3   = 500
            field4   = 501 )
          "Updates via key
          ( key\_field = 1
            field1    = 'up\_mmm'
            field3    = 100
            field4    = 101 )
          ( key\_field = 2
            field1    = 'up\_ooo'
            field3    = 200
            field4    = 201 )
          ( key\_field = 99   "Instance to fail
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
    IF mapped IS NOT INITIAL.
      out->write( mapped-root ).
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
    out->next\_section( \`Delete operation\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create and an delete request. The
\*   create request is included to have a %cid to refer to for demo
\*   purposes. This instance has not yet been persisted.
\* - EML statements for delete operations can only be used with the
\*   ABAP word FROM ....
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_m
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
          ( %cid      = 'cid\_del'
            key\_field = 6
            field1    = 'mmm'
            field2    = 'nnn'
            field3    = 60
            field4    = 61 ) )
        DELETE FROM VALUE #(
          "Deletion via %cid\_ref
          ( %cid\_ref = 'cid\_del' )
          "Deletions via key
          ( key\_field = 4 )
          ( key\_field = 5 )
          "Instance to fail
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
    out->write( mapped ).
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
    out->next\_section( \`Action execution: mutliply\_by\_2\` ).
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
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_m
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
          ( %cid = 'cid\_x2'
            key\_field = 7
            field1    = 'ooo'
            field2    = 'ppp'
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
    out->write( mapped ).
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
\* Create-by-association operation (from root to child entitiy)
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Create-by-association operation \` &&
                  \`(from parent to child)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create and create-by-association
\*   request, i. e. a "deep create". An instance is created for the
\*   parent entity and, in the same request and based on this
\*   instance, instances are created for the child entity, too.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_m
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
              WITH VALUE #(
              ( %cid      = 'cid\_cba'
                key\_field = 9
                field1    = 'qqq'
                field2    = 'rrr'
                field3    = 90
                field4    = 91 ) )
        CREATE BY \\\_child
        FIELDS ( key\_ch field\_ch1 field\_ch2 ) WITH VALUE #(
          "CBA operation via %cid\_ref
          ( %cid\_ref = 'cid\_cba'
            %target = VALUE #( ( %cid      = 'cid\_ch1'
                                 key\_ch    = 9
                                 field\_ch1 = 'aaa\_ch'
                                 field\_ch2 = 99 )
                               ( %cid      = 'cid\_ch2'
                                 key\_ch    = 10
                                 field\_ch1 = 'bbb\_ch'
                                 field\_ch2 =  100 ) ) )
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
                                 field\_ch2 = 3 ) ) )
                                 )
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
    out->write( mapped ).
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
\* Validation val
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Validation val\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a create request. The validation's
\*   handler method is implementation in a way that the saving of
\*   instances is disabled if a field value is not allowed. In this
\*   example, the value of the integer in field3 shall not exceed 1000.
\*   Here, the third instance will fail for the validation.
\*   Consequently, all instances of this request are not saved to the
\*   database. Either all is ok and will be saved or nothing.
\* - Note that the response information for the validation is only
\*   available in the response parameters of the COMMIT ENTITIES
\*   statement. Here, the BDEF derived type is
\*   ... TYPE RESPONSE FOR ... LATE ....
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    MODIFY ENTITIES OF demo\_cs\_rap\_ro\_m
        ENTITY root
        CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
          ( %cid = 'cid\_val1'
            key\_field = 123
            field1    = 'sss'
            field2    = 'ttt'
            field3    = 1
            field4    = 2 )
          ( %cid = 'cid\_val2'
            key\_field = 456
            field1    = 'uuu'
            field2    = 'vvv'
            field3    = 3
            field4    = 4 )
          ( %cid = 'cid\_val3'
            key\_field = 789
            field1    = 'www'
            field2    = 'xxx'
            field3    = 1001
            field4    = 5 ) )
        MAPPED mapped
        FAILED failed
        REPORTED reported.
    COMMIT ENTITIES RESPONSES FAILED FINAL(failed\_late)
      REPORTED FINAL(reported\_late).
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
    out->write( mapped ).
    IF failed\_late IS NOT INITIAL.
      out->write( data = failed\_late
                name = \`Entries in FAILED LATE response parameter\` ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( data = reported\_late
                name = \`Entries in REPORTED LATEresponse parameter\` ).
    ENDIF.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\*
\* Read operation (root entity)
\*
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line( ).
    out->next\_section( \`Read operation (root entity)\` ).
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
    READ ENTITIES OF demo\_cs\_rap\_ro\_m
        ENTITY root
        ALL FIELDS WITH VALUE #(
          ( key\_field = 1 )
          ( key\_field = 2 )
          ( key\_field = 7 )
          ( key\_field = 5 ) ) "Instance to fail
        RESULT FINAL(result)
        FAILED failed
        REPORTED reported.
    "Displaying the read result
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
    out->next\_section( \`Read operation (child entity)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a read request. The read operation is
\*   executed on the child entity directly by specifying the alias, as
\*   it is defined in the BDEF, following the ABAP word ENTITY.
\* - All field values are read using the addition ALL FIELDS WITH.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    READ ENTITIES OF demo\_cs\_rap\_ro\_m
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
    out->next\_section( \`Read-by-association operation \` &&
                     \`(from parent to child)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a read-by-association request from the
\*   parent to the child.
\* - All field values are read using the addition ALL FIELDS WITH.
\* - Specifying the parameter for RESULT is mandatory.
\* - Additionally, the optional association links are retrieved.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    READ ENTITIES OF demo\_cs\_rap\_ro\_m
          ENTITY root
          BY \\\_child
          ALL FIELDS WITH VALUE #(
            ( key\_field = 2 )
            ( key\_field = 9 )
            ( key\_field = 999 ) ) "Instance to fail
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
    out->next\_section( \`Read-by-association operation \` &&
                     \`(from child to parent)\` ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
\* Notes:
\* - The EML request includes a read-by-association request from the
\*   child to the parent.
\* - All field values are read using the addition ALL FIELDS WITH.
\* - Specifying the parameter for RESULT is mandatory.
\* - Additionally, the optional association links are retrieved.
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    READ ENTITIES OF demo\_cs\_rap\_ro\_m
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
    out->next\_section( \`Excursion: Read and read-by-association \` &&
                     \`operations using dynamic EML\` ).
    DATA:
      op\_tab          TYPE abp\_behv\_retrievals\_tab,
      read\_dyn        TYPE TABLE FOR READ IMPORT demo\_cs\_rap\_ro\_m,
      read\_dyn\_result TYPE TABLE FOR READ RESULT demo\_cs\_rap\_ro\_m,
      rba\_dyn         TYPE TABLE FOR READ IMPORT
                        demo\_cs\_rap\_ro\_m\\\_child,
      rba\_dyn\_result  TYPE TABLE FOR READ RESULT
                        demo\_cs\_rap\_ro\_m\\\_child,
      rba\_dyn\_link    TYPE TABLE FOR READ LINK demo\_cs\_rap\_ro\_m\\\_child.
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
    op\_tab = VALUE #(
       ( op = if\_abap\_behv=>op-r-read
         entity\_name = 'DEMO\_CS\_RAP\_RO\_M'
         instances   = REF #( read\_dyn )
         results     = REF #( read\_dyn\_result ) )
       ( op = if\_abap\_behv=>op-r-read\_ba
         entity\_name = 'DEMO\_CS\_RAP\_RO\_M'
         sub\_name    = '\_CHILD'
         full        = abap\_true
         instances   = REF #( rba\_dyn )
         results     = REF #( rba\_dyn\_result )
         links       = REF #( rba\_dyn\_link ) ) ).
    READ ENTITIES OPERATIONS op\_tab.
    out->write\_doc( \`Read result (root)\` ).
    out->write( read\_dyn\_result ).
    out->write\_doc( \`Read result (read-by-association)\` ).
    out->write( rba\_dyn\_result ).
    out->write\_doc( \`Links\` ).
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
        APPEND \`Error for child instance with key\_field = \` &&
        <err\_ch>-key\_field && \` and key\_ch = \` &&
        <err\_ch>-key\_ch && \`: Fail cause \`
        && <err\_ch>-%fail-cause && \`.\` TO errors.
      ENDLOOP.
    ENDIF.
  ENDMETHOD.
  METHOD extract\_from\_reported.
    CLEAR messages.
    LOOP AT reported-root ASSIGNING FIELD-SYMBOL(<rep>).
      IF <rep>-%global = if\_abap\_behv=>mk-on.
        APPEND <rep>-%msg->m\_severity &&
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
             field1   = 'ggg'
             field2   = 'hhh'
             field3   = 40
             field4   = 41 ) ) ).
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

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class.

The class demonstrates various RAP BO operations and aspects:

-   Create (including a determination on save)
-   Update
-   Delete
-   Executing an action
-   Validation
-   Create-by-association (parent to child)
-   Read
-   Read-by-association (parent to child)
-   Read (child entity)
-   Read-by-association (child to parent)
-   Excursion: Dynamic EML statement

See comments in the code for more information.