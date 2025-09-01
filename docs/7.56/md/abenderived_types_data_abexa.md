  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [Other RAP-Supporting ABAP Language Elements](javascript:call_link\('abenabap_rap_other.htm'\)) →  [ABAP for RAP, BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)) → 

Using %data / %target

This example demonstrates the use of %data and %target with a [managed](javascript:call_link\('abenbdl_impl_type.htm'\)) [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT\_4 and its child entity DEMO\_MANAGED\_CHILD\_4.

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

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity demo\_managed\_child\_4
  as select from demo\_tab\_child\_3
  association to parent demo\_managed\_root\_4  
  as \_parent on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key key\_field,
    key key\_field\_child,
        field1,
        field2,
        field3,
        field4
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

REPORT demo\_rap\_derived\_types\_data.
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
    out->begin\_section( \`Demo for BDEF derived type components: \` &&
                        \`%data and %target\` ).
    MODIFY ENTITY demo\_managed\_root\_4
          CREATE FROM VALUE #(
            ( %cid = 'cid1'
              %data-key\_field = 1
              %data-field1 = 'aaa'
              %data-field2 = 'bbb'
              %data-field3 = 10
              %data-field4 = 11
              %control-key\_field = if\_abap\_behv=>mk-on
              %control-field1 = if\_abap\_behv=>mk-on
              %control-field2 = if\_abap\_behv=>mk-on
              %control-field3 = if\_abap\_behv=>mk-on
              %control-field4 = if\_abap\_behv=>mk-on )
            ( %cid = 'cid2'
              %data = VALUE #( key\_field = 2
                               field1 = 'ccc'
                               field2 = 'ddd'
                               field3 = 20
                               field4 = 21 )
              %control = VALUE #(  key\_field = if\_abap\_behv=>mk-on
                                   field1 = if\_abap\_behv=>mk-on
                                   field2 = if\_abap\_behv=>mk-on
                                   field3 = if\_abap\_behv=>mk-on
                                   field4 = if\_abap\_behv=>mk-on ) ) )
          CREATE BY \\\_child
          SET FIELDS WITH VALUE #(
            ( %cid\_ref = 'cid1'
              %target = VALUE #(
                ( %cid = 'cid\_child1'
                  %data = VALUE #( key\_field\_child = 1
                                   field1 = 'eee'
                                   field2 = 'fff'
                                   field3 = 10
                                   field4 = 11 ) ) ) )
            ( %cid\_ref = 'cid2'
              %target = VALUE #(
                ( %cid = 'cid\_child2'
                  %data = VALUE #( key\_field\_child = 2
                                   field1 = 'ggg'
                                   field2 = 'hhh'
                                   field3 = 20
                                   field4 = 21 ) ) ) ) )
        UPDATE FROM VALUE #(
            ( %data-key\_field = 1
              %data-field1 = 'UPDATED\_1'
              field2 = 'UPDATED\_2'
              %control = VALUE #( field1 = if\_abap\_behv=>mk-on
                                  field2 = if\_abap\_behv=>mk-off ) )
            ( key\_field = 2
              field1 = 'UPDATED\_3'
              %data-field2 = 'UPDATED\_4'
              %control = VALUE #( field1 = if\_abap\_behv=>mk-off
                                  field2 = if\_abap\_behv=>mk-on ) ) )
           MAPPED mapped
           FAILED failed
           REPORTED reported.
    COMMIT ENTITIES.
     SELECT key\_field, field1, field2, field3, field4
     FROM demo\_tab\_root\_3 INTO TABLE @DATA(root\_tab)
     ORDER BY key\_field.
     SELECT key\_field, key\_field\_child, field1, field2, field3, field4
     FROM demo\_tab\_child\_3 INTO TABLE @DATA(child\_tab)
     ORDER BY key\_field.
     display\_responses(  ).
      out->write\_html(
          \`<b>Root entity: Database table entries \` &&
          \`after the operations</b>\`
         )->write( root\_tab
         )->write\_html(
          \`<b>Child entity: Database table entries \` &&
          \`after the operations</b>\`
         )->write( child\_tab
         )->line( ).
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

There is one ABAP EML modify request that covers several RAP modify operations:

1.  The first ABAP EML modify operation is a RAP create operation that creates two [RAP BO instances](javascript:call_link\('abenrap_bo_instance_glosry.htm'\) "Glossary Entry") for the root entity. The first instance is created by specifying the key and data fields with %data individually with the [structure component selector](javascript:call_link\('abenstructure_component_sel_glosry.htm'\) "Glossary Entry"). The second instance is created by specifying %data with the [VALUE](javascript:call_link\('abenconstructor_expression_value.htm'\)). In principle, the use of %data is optional. For example, the data fields can be specified directly without %data.
2.  The second ABAP EML modify operation is a create-by-association focusing on the %target component. Two RAP BO instances are created for the child entity. The reference to instances from the root entity is made via [%cid\_ref](javascript:call_link\('abapderived_types_cid_ref.htm'\)). Also here, the key and data fields of the instance that is to be created for the child entity within %target are specified using %data which is optional in this case, too.
3.  The third ABAP EML modify request is an update operation. It just shows the optional use of %data when referring to key and data fields.

With a [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement, the instances are saved to the database. The output shows the database table entries of the root and child entity.