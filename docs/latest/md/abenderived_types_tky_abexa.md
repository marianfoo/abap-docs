  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20%25tky%2C%20ABENDERIVED_TYPES_TKY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using %tky

This example demonstrates the use of %tky in two scenarios:

1.  a [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm) [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry") in a non-draft scenario
2.  a managed RAP BO in a [draft](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_with_draft.htm) scenario

Data models

Non-draft scenario: The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_4 and its child entity DEMO\_MANAGED\_CHILD\_4. The child entity is not used in the example.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_managed\_root\_4
  as select from demo\_tab\_root\_3
  composition \[1..\*\] of demo\_managed\_child\_4 as \_child
  {
    key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Draft scenario: The CDS data model consists of the root entity DEMO\_MANAGED\_DRAFT\_ROOT and its child entity DEMO\_MANAGED\_DRAFT\_CHILD. The child entity is not used in the example.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP unmanaged, draft'
define root view entity DEMO\_MANAGED\_DRAFT\_ROOT
  as select from DEMO\_TAB\_ROOT\_4
  composition \[1..\*\] of DEMO\_MANAGED\_DRAFT\_CHILD as \_child
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

Non-draft scenario: The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_4 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_4 unique;
strict(2);
define behavior for demo\_managed\_root\_4
persistent table DEMO\_TAB\_ROOT\_3
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  field(readonly:update) key\_field;
}
define behavior for demo\_managed\_child\_4 alias \_child
persistent table DEMO\_TAB\_CHILD\_3
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent;
  field(readonly:update) key\_field\_child;
}

Draft scenario: The BDEF is DEMO\_MANAGED\_DRAFT\_ROOT. It is defined as follows:

managed implementation in class bp\_demo\_managed\_draft\_root unique;
strict;
with draft;
define behavior for DEMO\_MANAGED\_DRAFT\_ROOT
persistent table demo\_tab\_root\_4
draft table demo\_tab\_dr\_ro
lock master
total etag crea\_date\_time
etag master lchg\_date\_time
authorization master ( instance )
{
  create;
  update;
  delete;
  association \_child { create; with draft; }
  draft action Edit;
  draft action Activate optimized;
  draft action Discard;
  draft action Resume;
  draft determine action Prepare;
  field ( readonly : update ) key\_field;
}
define behavior for DEMO\_MANAGED\_DRAFT\_CHILD
persistent table demo\_tab\_child\_4
draft table demo\_tab\_dr\_ch
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  field ( readonly : update ) key\_field\_child;
  association \_parent { with draft; }
}

Behavior implementation

-   Non-draft scenario: For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_4. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. In this case, the behavior pool does not include any implementations that are relevant for the example.
-   Draft scenario: The global class of the behavior pool is BP\_DEMO\_MANAGED\_DRAFT\_ROOT. The actual implementation is here: CCIMP include. In this case, the behavior pool does not include any implementations that are relevant for the example.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_drvd\_types\_tky DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      failed\_info TYPE RESPONSE FOR FAILED demo\_managed\_root\_4.
    METHODS:
      initialize\_dbtabs,
      display\_failed.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_drvd\_types\_tky IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type component: \` &&
                        \`%tky\` ).
    out->line(
     )->next\_section( \`1) Non-draft scenario\` ).
    MODIFY ENTITY demo\_managed\_root\_4
       CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
            ( %cid = 'cid1' %key-key\_field = 1
              field1 = 'aaa' field2 = 'bbb' field3 = 10 field4 = 11 )
            ( %cid = 'cid2' %key = VALUE #( key\_field = 2 )
              field1 = 'ccc' field2 = 'ddd' field3 = 20 field4 = 21 )
            ( %cid = 'cid3' key\_field = 3
              field1 = 'eee' field2 = 'fff' field3 = 30 field4 = 31 )
            ( %cid = 'cid4' %data-%key-key\_field = 4
              field1 = 'ggg' field2 = 'hhh' field3 = 40 field4 = 41 )
            ( %cid = 'cid5' %data-key\_field = 5
              field1 = 'iii' field2 = 'jjj' field3 = 50 field4 = 51 ) )
          UPDATE FIELDS ( field2 ) WITH VALUE #(
            ( %tky-%key-key\_field = 1 field2 = 'up1' )
            ( %tky-key\_field = 2 field2 = 'up2' )
            ( %tky-%pky-%key-key\_field = 3 field2 = 'up3' )
            ( %tky-%pky-key\_field = 4 field2 = 'up4' )
            ( %key-key\_field = 5 field2 = 'up5' )
            ( key\_field = 6 field2 = 'up6' )
            ( %pky-key\_field = 7 field2 = 'up7' )
            ( %pky-%key-key\_field = 8 field2 = 'up8' )
            ( %data-%key-key\_field = 9 field2 = 'up9' )
            ( %data-key\_field = 10 field2 = 'up10' ) )
           MAPPED FINAL(mapped)
           FAILED failed\_info
           REPORTED FINAL(reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3
    ORDER BY key\_field
    INTO TABLE @FINAL(root\_tab).
    display\_failed(  ).
    out->write\_html(
        \`<b>Database table entries \` &&
        \`after the operations</b>\`
       )->write( root\_tab ).
    out->line(
      )->next\_section( \`2) Draft scenario\`
      )->write\_html(
       \`<b>a) RAP operations on active RAP BO\` &&
       \` instances with a draft BO (%is\_draft is disabled)</b>\` ).
    "Draft indicator %is\_draft is disabled.
    MODIFY ENTITY demo\_managed\_draft\_root
       CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
            ( %cid = 'cid1' %is\_draft = if\_abap\_behv=>mk-off
              key\_field = 4
              field1 = 'aaa' field2 = 'bbb'
              field3 = 10 field4 = 11 )
            ( %cid = 'cid2' %is\_draft = if\_abap\_behv=>mk-off
              key\_field = 5
              field1 = 'ccc' field2 = 'ddd'
              field3 = 20 field4 = 21 )
            ( %cid = 'cid3' %is\_draft = if\_abap\_behv=>mk-off
              key\_field = 6
              field1 = 'eee' field2 = 'fff'
              field3 = 30 field4 = 31 ) )
        "Note: For demo purposes, the key is referred to in
        "diverse ways. All options have the same effect.
        UPDATE FIELDS ( field2 ) WITH VALUE #(
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-off
                              %key-key\_field = 4 )
              field2 = 'up1' )
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-off
                              key\_field = 5 )
              field2 = 'up2' )
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-off
                              %pky-%key-key\_field = 6 )
              field2 = 'up3' )
             )
          FAILED   FINAL(failed\_nodraft)
          REPORTED FINAL(reported\_nodraft)
          MAPPED FINAL(mapped\_nodraft).
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
    out->write\_html( \`<b>Database table entries after\` &&
    \` RAP operations</b>\`
      )->write( data = db\_entries ).
    "Get active instances in draft table.
    MODIFY ENTITY demo\_managed\_draft\_root
     EXECUTE Edit AUTO FILL CID WITH
     VALUE #( ( %key-key\_field = 4
                %param-preserve\_changes = abap\_false )
              ( %key-key\_field = 5
                %param-preserve\_changes = abap\_false )
              ( %key-key\_field = 6
                %param-preserve\_changes = abap\_false ) )
     REPORTED FINAL(reported\_edit)
     FAILED FINAL(failed\_edit)
     MAPPED FINAL(mapped\_edit).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    "Update draft instances. Draft indicator %is\_draft is enabled.
    MODIFY ENTITY demo\_managed\_draft\_root
    UPDATE FIELDS ( field2 ) WITH VALUE #(
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on
                              %key-key\_field = 4 )
              field2 = 'up\_draft1' )
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on
                              key\_field = 5 )
              field2 = 'up\_draft2' )
            ( %tky = VALUE #( %is\_draft = if\_abap\_behv=>mk-on
                              %pky-%key-key\_field = 6 )
              field2 = 'up\_draft3' ) )
        FAILED FINAL(failed\_draft\_up)
        REPORTED FINAL(reported\_draft\_up)
        MAPPED FINAL(mapped\_draft\_up).
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
    MODIFY ENTITY demo\_managed\_draft\_root
      EXECUTE Activate AUTO FILL CID WITH
       VALUE #( ( %key-key\_field = 4 )
                ( %key-key\_field = 5 )
                ( %key-key\_field = 6 ) )
      MAPPED FINAL(mapped\_act)
      FAILED FINAL(failed\_act)
      REPORTED FINAL(reported\_act).
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
    out->write\_html( \`<b>b) RAP operations on draft instances\` &&
                     \` (%is\_draft is enabled)</b>\`
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
  \` that have been persisted to the database while the draft table \` &&
  \`is empty.\` )
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
  METHOD display\_failed.
    IF failed\_info IS NOT INITIAL.
      out->write\_doc( \`FAILED response:\`
        )->write( failed\_info ).
    ENDIF.
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
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

There are two scenarios covered to demonstrate the use of %tky:

1.  Non-draft scenario
    -   An ABAP EML modify request covers a create operation to create new [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") and an update operation on those newly created instances. In the RAP create operation, the key is specified with different options. The update operation on the newly created instances updates a specific field. The instances are referred to using %tky and others to demonstrate that %tky can also be used to refer to the keys in non-draft scenarios. See the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_keys_identifiers.htm) for more information. With a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement, the instances are saved to the database. The output shows the database table entries as well as the failed messages that are returned for those instances for which an update operation cannot be executed.
2.  Draft scenario
    
    ABAP EML modify requests are covered to execute RAP operations on active and draft instances
    
    -   RAP operations on active instances: An ABAP EML modify request covers a create operation to create new, active [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") and an update operation on those newly created instances. The update operation on the newly created instances update a specific field. The instances are referred to using %tky to demonstrate that %tky can also be used to refer to the keys in draft scenarios while disabling the included %is\_draft component to execute RAP operations on active instances. A COMMIT ENTITIES statement saves the instances to the database. The output shows those entries.
    -   RAP operations on draft instances: The previously created active instances are put to the draft table using the [draft action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_draft_action.htm) edit and the COMMIT ENTITIES statement that follows. Then, an update operation on those draft instances is carried out by referring to the keys with %tky. The draft indicator is enabled. The following COMMIT ENTITIES statement save the updated values in the draft table. With the draft action activate and a COMMIT ENTITIES statement, the updates done on the draft table get saved to the database. The output shows different tables to demonstrate the effect on the draft and database tables. The first two tables show the state of the draft and database table before the activation, i. e. the update on the draft instances is shown. At this stage, there have not been any changes to the database table. The next two tables show the state of the draft and database tables after the activation. The database table now includes the former draft instances that have been persisted to the database. The draft table is empty.