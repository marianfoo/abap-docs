  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [BDEF Derived Types](javascript:call_link\('abenrpm_derived_types.htm'\)) →  [Components of BDEF Derived Types](javascript:call_link\('abapderived_types_comp.htm'\)) →  [Examples for BDEF Derived Type Components](javascript:call_link\('abenderived_types_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Using%20%25fail%2C%20ABENDERIVED_TYPES_FAIL_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Using %fail

This example demonstrates the use of %fail with a [managed](javascript:call_link\('abenbdl_impl_type.htm'\)) [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

Data model

The CDS data model consists of the [root entity](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT\_FAILED and its [child entity](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_CHILD\_FAILED. The child entity is not used in the example.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_FAILED
  as select from demo\_tab\_root\_5
  composition \[1..\*\] of DEMO\_MANAGED\_CHILD\_FAILED as \_child
  {        
     key key\_field,
        field1,
        field2,
        field3,
        field4,
        \_child
  }

Behavior definition

The [RAP behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT\_FAILED is defined in [RAP BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_failed unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT\_FAILED
persistent table DEMO\_TAB\_ROOT\_5
lock master
authorization master ( instance )
{
  create;
  update( features : instance );
  delete;
  association \_child { create; }
  field(readonly:update) key\_field;
}
define behavior for DEMO\_MANAGED\_CHILD\_FAILED
persistent table DEMO\_TAB\_CHILD\_5
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

For the above RAP behavior definition, one [ABP](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_FAILED. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following methods are relevant for the example:

-   get\_instance\_authorizations: If an instance has a specific value in a field, the update and delete operations should be denied, i. e. the operations are marked as unauthorized. %fail-cause is assigned accordingly. %fail-cause and the key of the RAP BO instance is stored in the failed response structure.
-   get\_instance\_features: If an instance has a specific value in a field, update operations should be denied, i. e. the operations are marked as readonly. %fail-cause is assigned accordingly. %fail-cause and the key of the RAP BO instance is stored in the failed response structure.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_drvd\_types\_fail DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      mapped   TYPE RESPONSE FOR MAPPED   demo\_managed\_root\_failed,
      failed   TYPE RESPONSE FOR FAILED   demo\_managed\_root\_failed,
      reported TYPE RESPONSE FOR REPORTED demo\_managed\_root\_failed.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_drvd\_types\_fail IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type component: %fail\`
    )->line(
    )->next\_section( \`RAP modify operation\` ).
    MODIFY ENTITY demo\_managed\_root\_failed
       CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
            ( %cid = 'cid1' %key-key\_field = 1
              field1 = 'aaa' field2 = 'bbb' field3 = 10 field4 = 11 )
            ( %cid = 'cid2' %key-key\_field = 2
              field1 = 'ccc' field2 = 'ZZZ' field3 = 20 field4 = 21 )
            ( %cid = 'cid3' %key-key\_field = 3
              field1 = 'YYY' field2 = 'ddd' field3 = 30 field4 = 31 )
            ( %cid = 'cid4' %key-key\_field = 4
              field1 = 'YYY' field2 = 'eee' field3 = 40 field4 = 41 )
              )
           MAPPED mapped
           FAILED failed
           REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_5
    ORDER BY key\_field
    INTO TABLE @FINAL(root\_tab).
    IF failed IS INITIAL.
      out->write( \`No FAILED responses.\` ).
    ELSE.
      out->write( \`FAILED responses:\`
        )->write( failed ).
    ENDIF.
    out->write\_html(
        \`<b>Database table entries \` &&
        \`after the operations</b>\`
       )->write( root\_tab
       )->line(
       )->next\_section( \`RAP update and delete operations\` ).
    MODIFY ENTITY demo\_managed\_root\_failed
       UPDATE FIELDS ( field1 field2 field3 field4 ) WITH VALUE #(
            ( %key-key\_field = 1
              field1 = 'up1' field2 = 'up2' field3 = 99 field4 = 98 )
            ( %key-key\_field = 2
              field1 = 'up3' field2 = 'up4' field3 = 97 field4 = 96 )
            ( %key-key\_field = 3
              field1 = 'up5' field2 = 'up6' field3 = 95 field4 = 94 )
              )
       DELETE FROM VALUE #( ( %key-key\_field = 4 ) )
           MAPPED mapped
           FAILED failed
           REPORTED reported.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_5
    ORDER BY key\_field
    INTO TABLE @FINAL(root\_tab2).
    IF failed IS INITIAL.
      out->write( \`No FAILED responses.\` ).
    ELSE.
      out->write( \`FAILED responses:\`
        )->write( failed ).
    ENDIF.
    out->write\_html(
       \`<b>Database table entries \` &&
       \`after the operations</b>\`
      )->write( root\_tab2
      )->line(
      )->next\_section( \`RAP read operation\` ).
    READ ENTITY demo\_managed\_root\_failed
    ALL FIELDS WITH VALUE #( ( %key-key\_field = 1 )
                             ( %key-key\_field = 2 )
                             ( %key-key\_field = 3 )
                             ( %key-key\_field = 4 )
                             ( %key-key\_field = 5 )
                             ( %key-key\_field = 6 )
                             ( %key-key\_field = 7 ) )
     RESULT FINAL(read\_result)
     FAILED failed.
    IF failed IS INITIAL.
      out->write( \`No FAILED responses.\` ).
    ELSE.
      out->write( \`FAILED responses:\`
        )->write( failed ).
    ENDIF.
    out->write\_html(
      \`<b>Result of read operation:</b>\`
     )->write( read\_result ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The class includes multiple ABAP EML requests:

1.  ABAP EML modify request: Multiple RAP BO instances are created. A [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)) statement triggers the saving of the instances to the database. The output shows for all requests the content of the [failed](javascript:call_link\('abaptype_response_for.htm'\)) response. In this case, none of the instances show any failures. Furthermore, an internal table is filled with the database table entries. In the output, all newly created RAP BO instances have been saved to the database and are displayed in the internal table.
2.  ABAP EML update and delete requests: Specific RAP BO instances are updated and deleted. The outcome of calling the get\_instance\_authorizations and get\_instance\_features is that several instances cannot be updated and deleted because of the conditions implemented in the methods. Since these methods fill the failed responses, an internal table that contains the entries of the failed response consequently shows the different failure causes for those RAP BO instances that could not be saved to or deleted from the database table. %fail-cause is in this case READONLY and UNAUTHORIZED. As above, a COMMIT ENTITIES statement saves those instances that did not show any failures. The outcome of these ABAP EML requests is also shown in an internal table.
3.  ABAP EML read request: Multiple RAP BO instances are read from the database table. The read result is stored in an internal table which is displayed in the output. Since not all instances that are requested exist on the database table, an internal table containing the failed response consequently shows entries. %fail-cause is in this case NOT\_FOUND.