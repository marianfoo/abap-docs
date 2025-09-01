  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20%25pid%2C%20ABENDERIVED_TYPES_PID_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using %pid

This example demonstrates the use of %pid with an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") in a [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\)) scenario.

Data model

The CDS data model consists of the root entity DEMO\_UMANAGED\_ROOT\_LATE\_NUM.

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

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_UMANAGED\_ROOT\_LATE\_NUM is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

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

For the above RAP behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UMANAGED\_ROOT\_LATE\_NUM. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. See more details on the implementation in the example [COMMIT ENTITIES BEGIN, END with CONVERT KEY OF](javascript:call_link\('abencommit_entities_beginend_abexa.htm'\)).

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_drvd\_types\_pid DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      mapped\_early   TYPE RESPONSE FOR MAPPED EARLY
                      demo\_umanaged\_root\_late\_num,
      lt\_mapped\_late TYPE TABLE FOR MAPPED LATE
                       demo\_umanaged\_root\_late\_num.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_drvd\_types\_pid IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type component: \` &&
                        \`%pid\` ).
    MODIFY ENTITY demo\_umanaged\_root\_late\_num
       CREATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
              ( %cid = 'cid1' field1 = 'aaa' field2 = 'bbb'
                              field3 = 10 field4 = 11  )
              ( %cid = 'cid2' field1 = 'ccc' field2 = 'ddd'
                              field3 = 20 field4 = 21  )
              ( %cid = 'cid3' field1 = 'eee' field2 = 'fff'
                              field3 = 30 field4 = 31 )
              )
        MAPPED mapped\_early.
    IF mapped\_early IS NOT INITIAL.
      out->write\_doc( \`MAPPED EARLY response:\`
        )->write( mapped\_early ).
    ENDIF.
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
                      %key = lv\_root\_key
                      )
                      TO lt\_mapped\_late.
    ENDLOOP.
    COMMIT ENTITIES END.
    IF lt\_mapped\_late IS NOT INITIAL.
      out->write\_doc( \`MAPPED LATE response:\`
        )->write( lt\_mapped\_late ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
      FROM demo\_tab\_root\_3
      INTO TABLE @FINAL(db\_tab\_entries).
    out->write\_html(
  \`<b>Database table entries after RAP operations with final keys:</b>\`
      )->write( db\_tab\_entries ).
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

There is one ABAP EML modify request that creates several [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry"). Here, the keys are left empty because a preliminary ID %pid is assigned in the course of the create method in the behavior pool.

With a [COMMIT ENTITIES BEGIN ... END](javascript:call_link\('abapemlcommit_entities_late.htm'\)) statement, which includes a [CONVERT KEY OF](javascript:call_link\('abapconvert_key.htm'\)) statement, the instances are saved to the database table. The [adjust\_numbers](javascript:call_link\('abensaver_adjust_numbers.htm'\)) method assigns the final keys to the instances. Using the CONVERT KEY OF statement, the key information for the instances is retrieved.

The output shows two tables for the mapping information. The first one includes the [MAPPED EARLY](javascript:call_link\('abaptype_response_for.htm'\)) mapping information that shows initial values for the key. The second one shows the [MAPPED LATE](javascript:call_link\('abaptype_response_for.htm'\)) mapping information including the final keys. Note that %tmp is not used and relevant in this scenario, hence, %tmp shows initial values. Another table shows the database table entries after the create operation.