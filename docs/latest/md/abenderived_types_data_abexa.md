---
title: "Data model"
description: |
  The CDS data model consists of the root entity DEMO_MANAGED_ROOT_4 and its child entity DEMO_MANAGED_CHILD_4. Root entity: @AccessControl.authorizationCheck: #NOT_REQUIRED define root view entity demo_managed_root_4 as select from demo_tab_root_3 composition 1.. of demo_managed_
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_data_abexa.htm"
abapFile: "abenderived_types_data_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "abenderived", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20%25data%20%2F%20%25target%2C%20ABENDERIVED_TYPES_DATA_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using %data / %target

This example demonstrates the use of %data and %target with a [managed](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_impl_type.htm) [RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_glosry.htm "Glossary Entry").

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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_4 is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_4. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. In this case, the behavior pool does not include any implementations that are relevant for the example.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_drvd\_types\_data DEFINITION
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
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_drvd\_types\_data IMPLEMENTATION.
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
          FIELDS ( key\_field\_child field1 field2 field3 field4 )
          WITH VALUE #(
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_3
    ORDER BY key\_field
    INTO TABLE @FINAL(root\_tab).
    SELECT key\_field, key\_field\_child, field1, field2, field3, field4
    FROM demo\_tab\_child\_3
    ORDER BY key\_field
    INTO TABLE @FINAL(child\_tab).
    IF failed IS NOT INITIAL.
      out->write( failed ).
    ENDIF.
    IF reported IS NOT INITIAL.
      out->write( reported ).
    ENDIF.
    out->write\_html(
        \`<b>Root entity: Database table entries \` &&
        \`after the operations</b>\`
       )->write( root\_tab
       )->write\_html(
        \`<b>Child entity: Database table entries \` &&
        \`after the operations</b>\`
       )->write( child\_tab ).
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

There is one ABAP EML modify request that covers several RAP modify operations:

1.  The first ABAP EML modify operation is a RAP create operation that creates two [RAP BO instances](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_instance_glosry.htm "Glossary Entry") for the root entity. The first instance is created by specifying the key and data fields with %data individually with the [structure component selector](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstructure_component_sel_glosry.htm "Glossary Entry"). The second instance is created by specifying %data with the [VALUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_value.htm). In principle, the use of %data is optional. For example, the data fields can be specified directly without %data.
2.  The second ABAP EML modify operation is a create-by-association focusing on the %target component. Two RAP BO instances are created for the child entity. The reference to instances from the root entity is made via [%cid\_ref](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid_ref.htm). Also here, the key and data fields of the instance that is to be created for the child entity within %target are specified using %data which is optional in this case, too.
3.  The third ABAP EML modify request is an update operation. It just shows the optional use of %data when referring to key and data fields.

With a [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit_entities.htm) statement, the instances are saved to the database. The output shows the database table entries of the root and child entity.