  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20%25key%2C%20ABENDERIVED_TYPES_KEY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using %key

This example demonstrates the use of %key with a [managed](javascript:call_link\('abenbdl_impl_type.htm'\)) [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") in the [RAP interaction phase](javascript:call_link\('abenrap_int_phase_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_4 and its child entity DEMO\_MANAGED\_CHILD\_4. The child entity is not used in the example.

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

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT\_4 is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

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

Behavior implementation

For the above RAP behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_4. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. In this case, the behavior pool does not include any implementations that are relevant for the example.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_drvd\_types\_key DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      mapped   TYPE RESPONSE FOR MAPPED   demo\_managed\_root\_4,
      failed   TYPE RESPONSE FOR FAILED   demo\_managed\_root\_4,
      reported TYPE RESPONSE FOR REPORTED demo\_managed\_root\_4.
    METHODS:
      initialize\_dbtabs,
      display\_responses.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_drvd\_types\_key IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type component: \` &&
                        \`%key\` ).
    MODIFY ENTITY demo\_managed\_root\_4
          CREATE FROM VALUE #(
             %control = VALUE #( key\_field = if\_abap\_behv=>mk-on
                                 field1 = if\_abap\_behv=>mk-on
                                 field2 = if\_abap\_behv=>mk-on
                                 field3 = if\_abap\_behv=>mk-on
                                 field4 = if\_abap\_behv=>mk-on )
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
          "Other options for referring to the key besides using %key
          "are demonstrated.
          UPDATE FIELDS ( field2 ) WITH VALUE #(
            ( %key-key\_field = 1 field2 = 'up1' )
            ( key\_field = 2 field2 = 'up2' )
            ( %tky-%key-key\_field = 3 field2 = 'up3' )
            ( %tky-key\_field = 4 field2 = 'up4' )
            ( %tky-%pky-%key-key\_field = 5 field2 = 'up5' )
            ( %tky-%pky-key\_field = 6 field2 = 'up6' )
            ( %pky-key\_field = 7 field2 = 'up7' )
            ( %pky-%key-key\_field = 8 field2 = 'up8' )
            ( %data-%key-key\_field = 9 field2 = 'up9' )
            ( %data-key\_field = 10 field2 = 'up10' ) )
           MAPPED mapped
           FAILED failed
           REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3
    ORDER BY key\_field
    INTO TABLE @FINAL(root\_tab).
    display\_responses(  ).
    out->write\_html(
        \`<b>Database table entries \` &&
        \`after the operations</b>\`
       )->write( root\_tab
        ).
  ENDMETHOD.
  METHOD display\_responses.
    IF mapped IS NOT INITIAL.
      out->write\_doc( \`MAPPED response:\`
        )->write( mapped ).
    ENDIF.
    IF failed IS NOT INITIAL.
      out->write\_doc( \`FAILED response:\`
        )->write( failed ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write\_doc( \`REPORTED response:\`
        )->write( reported ).
    ENDIF.
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

There is one ABAP EML modify request that covers a RAP create and update operation. In both create and update operation, %key is specified in different ways just to demonstrate the variety of specification options of this [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry"). See more information on this in the topic [Using Keys and Identifying RAP BO Instances in a Nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\)).

With a [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement, the instances are saved to the database. The output shows the database table entries as well as the mapped and failed responses for the root entity.