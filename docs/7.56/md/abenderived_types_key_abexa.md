  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)) → 

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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT\_4 is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_4 unique;
strict;
define behavior for demo\_managed\_root\_4
persistent table DEMO\_TAB\_ROOT\_3
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  association \_child { create; }
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
}

Behavior implementation

For the above CDS behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_4. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. In this case, the behavior pool does not include any implementations that are relevant for the example.

Source Code

REPORT demo\_rap\_derived\_types\_key.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out       TYPE REF TO if\_demo\_output,
       mapped   TYPE RESPONSE FOR MAPPED   demo\_managed\_root\_4,
       failed   TYPE RESPONSE FOR FAILED   demo\_managed\_root\_4,
       reported TYPE RESPONSE FOR REPORTED demo\_managed\_root\_4.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_responses.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
     SELECT key\_field, field1, field2, field3, field4
     FROM demo\_tab\_root\_3 INTO TABLE @DATA(root\_tab)
     ORDER BY key\_field.
     display\_responses(  ).
      out->write\_html(
          \`<b>Database table entries \` &&
          \`after the operations</b>\`
         )->write( root\_tab
          ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
  ENDMETHOD.
  METHOD display\_responses.
      "MAPPED
       TYPES: BEGIN OF mapped\_structure,
        cid TYPE abp\_behv\_cid,
        key\_field type i,
      END OF mapped\_structure.
      TYPES mapped\_table\_type TYPE TABLE OF mapped\_structure.
      DATA mapped\_table\_root TYPE mapped\_table\_type.
      DATA mapped\_table\_child TYPE mapped\_table\_type.
      LOOP AT mapped-demo\_managed\_root\_4
      ASSIGNING FIELD-SYMBOL(<mapped>).
              APPEND VALUE #( cid       = <mapped>-%cid
                              key\_field =  <mapped>-%key-key\_field
                            ) TO mapped\_table\_root.
      ENDLOOP.
      "FAILED
      TYPES: BEGIN OF failed\_structure,
               fail\_cause TYPE if\_abap\_behv=>t\_fail\_cause,
               cid        TYPE string,
               key\_field  TYPE i,
               update     TYPE abp\_behv\_flag,
               create     TYPE abp\_behv\_flag,
               delete     TYPE abp\_behv\_flag,
               assoc      TYPE abp\_behv\_flag,
             END OF failed\_structure.
      TYPES failed\_table\_type TYPE TABLE OF failed\_structure.
      DATA failed\_table\_root TYPE failed\_table\_type.
      DATA failed\_table\_child TYPE failed\_table\_type.
      LOOP AT failed-demo\_managed\_root\_4
        ASSIGNING FIELD-SYMBOL(<fail>).
        APPEND VALUE #( fail\_cause = <fail>-%fail-cause
                        cid        = <fail>-%cid
                        key\_field  =  <fail>-%key-key\_field
                        create     = <fail>-%create
                        update     = <fail>-%update
                        delete     = <fail>-%delete
                        assoc      = <fail>-%assoc-\_child
                       )
                       TO failed\_table\_root.
      ENDLOOP.
      "REPORTED
      TYPES: BEGIN OF reported\_structure,
               severity  TYPE if\_abap\_behv\_message=>t\_severity,
               cid       TYPE string,
               key\_field TYPE i,
               message   TYPE string,
             END OF reported\_structure.
      TYPES reported\_table\_type TYPE TABLE OF reported\_structure.
      DATA reported\_table TYPE reported\_table\_type.
      DATA reported\_table\_child TYPE reported\_table\_type.
      LOOP AT reported-demo\_managed\_root\_4
        ASSIGNING FIELD-SYMBOL(<reported>).
        APPEND VALUE #( cid       =  <reported>-%cid
                        key\_field =  <reported>-%key-key\_field
                    message   = <reported>-%msg->if\_message~get\_text( )
                        severity  = <reported>-%msg->m\_severity
                      )
                      TO reported\_table.
      ENDLOOP.
      "Display responses
      IF mapped\_table\_root IS NOT INITIAL
      OR failed\_table\_root IS NOT INITIAL
      OR reported\_table IS NOT INITIAL.
        out->write\_html( \`<b>Responses of RAP operations</b>\` ).
      ENDIF.
      IF mapped\_table\_root IS NOT INITIAL.
        out->write( \`MAPPED response (root entity):\`
          )->write( mapped\_table\_root ).
      ENDIF.
      IF failed\_table\_root IS NOT INITIAL.
        out->write\_text( \`FAILED response:\`
               )->write( failed\_table\_root ).
      ENDIF.
      IF reported\_table IS NOT INITIAL.
        out->write\_text( \`REPORTED response:\`
          )->write( reported\_table ).
      ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

There is one ABAP EML modify request that covers a RAP create and update operation. In both create and update operation, %key is specified in different ways just to demonstrate the variety of specification options of this [component group](javascript:call_link\('abencomponent_group_glosry.htm'\) "Glossary Entry"). See more information on this in the topic [Use of keys and RAP BO instance identifiers in a nutshell](javascript:call_link\('abapderived_types_keys_identifiers.htm'\)).

With a [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement, the instances are saved to the database. The output shows the database table entries as well as the mapped and failed responses for the root entity.