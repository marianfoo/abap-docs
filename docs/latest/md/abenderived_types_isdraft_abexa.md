  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20%25is_draft%2C%20ABENDERIVED_TYPES_ISDRAFT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using %is\_draft

This example demonstrates the use of the draft indicator %is\_draft with an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") in a [draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) scenario.

Data model

The CDS data model consists of the root entity DEMO\_UNMANAGED\_ROOT\_DRAFT and its child entity DEMO\_UNMANAGED\_CHILD\_DRAFT. The child entity is not used in the example.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP unmanaged, draft'
define root view entity DEMO\_UNMANAGED\_ROOT\_DRAFT
  as select from DEMO\_TAB\_ROOT\_4
  composition \[1..\*\] of DEMO\_UNMANAGED\_CHILD\_DRAFT as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        @Semantics.systemDateTime.lastChangedAt: true
        crea\_date\_time,
        @Semantics.systemDateTime.localInstanceLastChangedAt: true
        lchg\_date\_time,
        \_child
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UNMANAGED\_ROOT\_DRAFT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_unmanaged\_root\_draft unique;
strict(2);
with draft;
define behavior for DEMO\_UNMANAGED\_ROOT\_DRAFT
draft table demo\_tab\_dr\_ro
lock master
total etag crea\_date\_time
etag master lchg\_date\_time
authorization master ( global, instance )
early numbering
{
  create;
  update( features : global );
  delete( features : global );
  association \_child { create; with draft; }
  field ( features : instance ) field3;
  action action1;
  action action2 result \[1\] $self;
  action action3 parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT
      result selective \[1\] $self;
  factory action( precheck ) action4 \[1\];
  static function function1 result \[1\] DEMO\_CDS\_ABSTRACT\_SUM;
  function function2 parameter DEMO\_CDS\_DEDUCT\_DISCOUNT
      result \[1\] $self;
  function function3 result selective \[1\] $self;
  validation validation on save { field field3; }
  determination det\_on\_save on save { create; }
  determination det\_on\_modify on modify { create; }
  draft action Resume with additional implementation;
  draft action Edit with additional implementation;
  draft action Activate optimized with additional implementation;
  draft action Discard with additional implementation;
  draft determine action Prepare { determination det\_on\_save;
                                   validation validation; }
  field ( readonly:update ) key\_field;
}
define behavior for DEMO\_UNMANAGED\_CHILD\_DRAFT
draft table demo\_tab\_dr\_ch
lock dependent by \_parent
etag dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly:update ) key\_field, key\_field\_child;
  association \_parent { with draft; }
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_ROOT\_DRAFT. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. See a detailed description of the [RAP handler methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmethods_for_rap_behv.htm) in this topic: [Example for RAP Handler Methods](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_handler_methods_abexa.htm).

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_drvd\_types\_isdraft DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      mapped       TYPE RESPONSE FOR MAPPED demo\_unmanaged\_root\_draft,
      activate\_tab TYPE TABLE FOR ACTION IMPORT
                   demo\_unmanaged\_root\_draft~activate.
    METHODS:
      initialize\_dbtabs,
      display\_mapped.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_drvd\_types\_isdraft IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type component: \` &&
                        \`%is\_draft\` ).
    out->line(
     )->next\_section( \`1) Creating and updating active instances\` ).
    "Draft indicator %is\_draft is disabled.
    MODIFY ENTITY demo\_unmanaged\_root\_draft
       CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
            ( %cid = 'cid1' %is\_draft = if\_abap\_behv=>mk-off
              key\_field = 1
              field1 = 'aaa' field2 = 'bbb'
              field3 = 10 field4 = 11 )
            ( %cid = 'cid2' %is\_draft = if\_abap\_behv=>mk-off
              key\_field = 2
              field1 = 'ccc' field2 = 'ddd'
              field3 = 20 field4 = 21 )
            ( %cid = 'cid3' %is\_draft = if\_abap\_behv=>mk-off
              key\_field = 3
              field1 = 'eee' field2 = 'fff'
              field3 = 30 field4 = 31 ) )
        "Note: For demo purposes, the key is referred to in
        "diverse ways. All options have the same effect.
        UPDATE FIELDS ( field2 ) WITH VALUE #(
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-off
                              %key-key\_field = 1 )
              field2 = 'zzz' )
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-off
                              key\_field = 2 )
              field2 = 'yyy' )
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-off
                              %pky-%key-key\_field = 3 )
              field2 = 'xxx' )
             )
          FAILED   FINAL(failed)
          REPORTED FINAL(reported)
          MAPPED mapped.
    display\_mapped(  ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
       FROM demo\_tab\_root\_4
       ORDER BY key\_field
       INTO TABLE @FINAL(db\_entries).
    out->write\_html(
      '<b>Database table entries after RAP operations</b>'
            )->write( data = db\_entries  ).
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
    out->line(
      )->next\_section( \`2) Creating draft instances\` ).
    "Draft indicator %is\_draft is enabled.
    MODIFY ENTITY demo\_unmanaged\_root\_draft
     CREATE FIELDS ( field1 field2 field3 field4 )
     WITH VALUE #(
        ( %cid = 'cid4' %is\_draft = if\_abap\_behv=>mk-on
          key\_field = 4 field1 = 'ggg' field2 = 'hhh'
          field3 = 40 field4 = 41 )
        ( %cid = 'cid5' %is\_draft = if\_abap\_behv=>mk-on
          key\_field = 5 field1 = 'iii' field2 = 'jjj'
          field3 = 50 field4 = 51 )
        ( %cid = 'cid6' %is\_draft = if\_abap\_behv=>mk-on
          key\_field = 6 field1 = 'kkk' field2 = 'lll'
          field3 = 60 field4 = 61 ) )
        FAILED FINAL(failed2)
        REPORTED FINAL(reported2)
        MAPPED mapped.
    out->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
    \`The MAPPED responses before and after committing the\` &&
    \` draft instances demonstrate the change of the \` &&
    \`draft indicator flag from enabled to disabled.\` )
       )->write\_doc( \`<b>a) Responses before committing the \` &&
                       \`created draft instances</b>\` ).
    display\_mapped(  ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
     FROM demo\_tab\_dr\_ro
     ORDER BY key\_field
     INTO TABLE @FINAL(draft\_parent\_before\_act).
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
     FROM demo\_tab\_root\_4
     ORDER BY key\_field
     INTO TABLE @FINAL(db\_tab\_root\_before\_act).
    "Get keys for activate action.
    LOOP AT mapped-demo\_unmanaged\_root\_draft
      ASSIGNING FIELD-SYMBOL(<key>).
      APPEND VALUE #( key\_field = <key>-%key-key\_field )
                             TO activate\_tab.
    ENDLOOP.
    MODIFY ENTITY demo\_unmanaged\_root\_draft
      EXECUTE activate AUTO FILL CID WITH activate\_tab
      MAPPED mapped
      FAILED FINAL(failed3)
      REPORTED FINAL(reported4).
    CLEAR activate\_tab.
    out->write\_html( \`<b>b) Responses of the ACTIVATE action \` &&
                     \`before committing</b>\` ).
    display\_mapped(  ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time, draftentitycreationdatetime,
           draftentitylastchangedatetime
      FROM demo\_tab\_dr\_ro
      ORDER BY key\_field
      INTO TABLE @FINAL(draft\_parent\_afer\_act).
    SELECT key\_field, field1, field2,
           field3, field4, crea\_date\_time,
           lchg\_date\_time
      FROM demo\_tab\_root\_4
      ORDER BY key\_field
      INTO TABLE @FINAL(db\_tab\_root\_after\_act).
    out->write\_html( \`<b>c) Draft and database tables</b>\`
      )->write\_doc( cl\_demo\_output\_helper=>get\_infobox\_html(
    \`The following tables demonstrate the effect on the draft and \` &&
    \`database tables. \` &&
    \`The first two tables show the state \` &&
    \`of the draft and database table before the activation, i. e. \` &&
    \`new draft instances are created and, thus, available in the \` &&
    \`draft table. The data fields are changed due to the \` &&
    \`implementation in the ABAP behavior pool.\` &&
    \` There have not been any changes to the database table.\` &&
    \` The next two tables show the state of the draft and database\` &&
    \` tables after the activation.\` &&
    \` The database table now includes the former draft instances\` &&
    \` that have been persisted to the database while the \` &&
    \`draft table is empty.\` )
      )->write( data = draft\_parent\_before\_act exclude = \`client\`
                name = 'Draft table before activation'
      )->write( data = db\_tab\_root\_before\_act exclude = \`client\`
                name = 'Database table before activation'
      )->write( data = draft\_parent\_afer\_act exclude = \`client\`
                name = 'Draft table after activation'
      )->write( data = db\_tab\_root\_after\_act exclude = \`client\`
                name = 'Database table after activation'
      ).
  ENDMETHOD.
  METHOD display\_mapped.
    IF mapped IS NOT INITIAL.
      out->write\_doc( \`MAPPED response:\`
        )->write( mapped ).
    ENDIF.
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_4.
    DELETE FROM demo\_tab\_child\_4.
    DELETE FROM demo\_tab\_dr\_ro.                         "#EC CI\_NOWHERE
    DELETE FROM demo\_tab\_dr\_ch.                         "#EC CI\_NOWHERE
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

There are two ABAP EML modify requests that cover RAP modify operations:

1.  The first ABAP EML modify request covers a create operation to create new [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") and an update operation on those newly created instances. In this case, the RAP operations are executed on active instances since the draft indicator %is\_draft is disabled for all instances. For demonstration purposes, the instances in the update operation are referred to using [%tky](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_tky.htm). Within %tky, the key is referred in different ways just to visualize the [component groups](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomponent_group_glosry.htm "Glossary Entry"). All options have the same effect and refer to the same. With a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement, the instances are saved to the database. The output shows the database table entries as well as the mapped responses for the root entity to visualize the mapping of %cid and the keys, including the draft indicator.
2.  The second ABAP EML modify request covers the creation of draft instances. In this case, the draft indicator %is\_draft is enabled for all instances. With a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement, the draft instances are saved to the draft table. The [draft action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm) activate which is followed by a COMMIT ENTITIES statement that finally saves the instances to the database table. The output shows the following:
    -   Mapped responses after the RAP create operation and after the execution of the activate action, but before committing. It shows the change of the draft indicator, i. e. it is changed from disabled to enabled.
    -   Tables are displayed that demonstrate the effect on the draft and database tables. The first two tables show the state of the draft and database table before the activation, i. e. new draft instances are created and, thus, available in the draft table. The data fields are changed due to the implementations in the ABAP behavior pool. At this stage, there have not been any changes to the database table. The next two tables show the state of the draft and database tables after the activation. The database table now includes the former draft instances that have been persisted to the database. The draft table is empty.