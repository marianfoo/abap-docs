  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Example%20for%20Message-Related%20BDEF%20Derived%20Type%20Components%2C%20ABENDERIVED_TYPES_REPORTED_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion%20for%20improvement:)

Example for Message-Related BDEF Derived Type Components

This example demonstrates the use of the following message-related [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") components with a [managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_impl_type.htm) [RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry"):

-   [%element](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_element.htm)
-   [%global](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_global.htm)
-   [%msg](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_msg.htm)
-   [%other](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_other.htm)
-   [%own](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_own.htm)
-   [%path](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_path.htm)
-   [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm)

Further Information

See more details on message handling in the Development Guide for the ABAP RESTful Application Programming Model, section [Messages](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/ac74189b5cae49c1b091f04393bac069?version=sap_cross_product_abap).

Data model

The CDS data model consists of the [root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_entity_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_REPORTED and its [child entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_entity_glosry.htm "Glossary Entry") DEMO\_MANAGED\_CHILD\_REPORTED.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT\_REPORTED
  as select from demo\_tab\_root\_5
  composition \[1..\*\] of DEMO\_MANAGED\_CHILD\_REPORTED as \_child
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
define view entity DEMO\_MANAGED\_CHILD\_REPORTED
  as select from demo\_tab\_child\_5
  association to parent DEMO\_MANAGED\_ROOT\_REPORTED  
  as \_parent on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key key\_field,
    key key\_field\_child,
        ch\_field1,
        ch\_field2,
        ch\_field3,
        ch\_field4
  }

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_REPORTED is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root\_reported unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT\_REPORTED
persistent table DEMO\_TAB\_ROOT\_5
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  field(readonly:update) key\_field;
}
define behavior for DEMO\_MANAGED\_CHILD\_REPORTED
persistent table DEMO\_TAB\_CHILD\_5
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent;
  validation ValidateNum on save { field ch\_field1; create; }
  field(readonly:update) key\_field\_child;
}

Behavior implementation

For the above RAP behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_REPORTED. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following methods are relevant for the example:

-   get\_global\_authorizations
    
    The method is implemented in a way that RAP create, update and delete operations are only enabled for users with the appropriate authorizations. In the interest of having a simple demo, the example goes without an authorization object which is, for example, a way to handle the authorization granting in production applications. The variable auth\_flag represents the authorization that is granted or not. In this case, the permission for the operations is granted and the [reported](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm) response parameter is filled by adding a message to the %msg component. Furthermore, the components [%create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_create.htm), [%update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_update.htm) and [%delete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_delete.htm) are filled in case the respective requested\_authorizations parameter is marked as enabled. The %global component is marked as enabled, too, because the message is a [RAP transition message](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_trans_mes_glosry.htm "Glossary Entry") and, thus, related to a specific entity of the business object.
    
    For demonstration purposes, a RAP unbound message is added to the %other component in the context of this method.
    
-   validatenum:
    
    It contains the method implementation for a [validation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_validations.htm). The validation checks whether the value of a number of a RAP BO instance field in the child entity is between the values of two numbers of two fields in the root entity. If this is not the case, the validation fails and the failed and reported response parameters are filled. Since reported is of type [TYPE RESPONSE FOR REPORTED LATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptype_response_for.htm), the %own component is available and used in the example, although it is optional here, to refer to the child entity. The %path, %element and %state\_area components are also filled. Before looping at the RAP BO instances, the state area is invalidated.
    
    For demonstration purposes, a RAP unbound message is added to the %other component in the context of this method.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_drvd\_types\_repo DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      reported\_late  TYPE RESPONSE FOR REPORTED LATE
        demo\_managed\_root\_reported,
      reported\_early TYPE RESPONSE FOR REPORTED EARLY
        demo\_managed\_root\_reported.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_drvd\_types\_repo IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Demo for BDEF derived type components \` &&
    \`relating to REPORTED messages\`
    )->line(
    )->next\_section( \`RAP create operation\` ).
    MODIFY ENTITY demo\_managed\_root\_reported
       CREATE FIELDS ( key\_field field1 field2 field3 field4 )
          WITH VALUE #(
            ( %cid = 'cid1' %key-key\_field = 1
              field1 = 'aaa' field2 = 'bbb' field3 = 10 field4 = 20 )
            ( %cid = 'cid2' %key-key\_field = 2
              field1 = 'ccc' field2 = 'ddd' field3 = 20 field4 = 40 )
            ( %cid = 'cid3' %key-key\_field = 3
              field1 = 'eee' field2 = 'fff' field3 = 30 field4 = 60 )
            ( %cid = 'cid4' %key-key\_field = 4
              field1 = 'ggg' field2 = 'hhh' field3 = 40 field4 = 80 )
            ( %cid = 'cid5' %key-key\_field = 5
              field1 = 'iii' field2 = 'jjj' field3 = 50 field4 = 100 )
            )
           MAPPED FINAL(map)
           FAILED FINAL(fail)
           REPORTED reported\_early.
    out->write( reported\_early ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, field1, field2, field3, field4
    FROM demo\_tab\_root\_5
    ORDER BY key\_field
    INTO TABLE @FINAL(root\_tab).
    out->write\_html(
        \`<b>Database table entries \` &&
        \`after the operations</b>\`
       )->write( root\_tab
       )->line(
       )->next\_section( \`RAP create-by-association operation (1)\` ).
    MODIFY ENTITY demo\_managed\_root\_reported
       CREATE BY \\\_child FIELDS ( key\_field\_child ch\_field1
              ch\_field2 ch\_field3 ch\_field4 ) WITH VALUE #(
            ( %key-key\_field = 1
              %target = VALUE #(
                       ( %cid = 'cid\_child1'
                         key\_field\_child = 10
                         ch\_field1 = 'kkk'
                         ch\_field2 = 'lll'
                         ch\_field3 = 15
                         ch\_field4 = 30
                     ) ) )
            ( %key-key\_field = 2
              %target = VALUE #(
                       ( %cid = 'cid\_child2'
                         key\_field\_child = 20
                         ch\_field1 = 'mmm'
                         ch\_field2 = 'nnn'
                         ch\_field3 = 25
                         ch\_field4 = 50
                     ) ) )
          ( %key-key\_field = 3
              %target = VALUE #(
                       ( %cid = 'cid\_child3'
                         key\_field\_child = 30
                         ch\_field1 = 'ooo'
                         ch\_field2 = 'ppp'
                         ch\_field3 = 35
                         ch\_field4 = 70
                     ) ) )
                     )
           MAPPED FINAL(map2)
           FAILED FINAL(fail2)
           REPORTED reported\_early.
    COMMIT ENTITIES RESPONSE OF demo\_managed\_root\_reported
      REPORTED reported\_late.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    out->write( reported\_late ).
    SELECT key\_field, key\_field\_child, ch\_field1, ch\_field2,
      ch\_field3, ch\_field4
      FROM demo\_tab\_child\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(child\_tab).
    out->write\_html(
            \`<b>Database table entries \` &&
            \`after the operations</b>\`
      )->write( child\_tab
      )->line(
      )->next\_section( \`RAP create-by-association operation (2)\` ).
    MODIFY ENTITY demo\_managed\_root\_reported
       CREATE BY \\\_child FIELDS ( key\_field\_child ch\_field1
              ch\_field2 ch\_field3 ch\_field4 ) WITH VALUE #(
            ( %key-key\_field = 4
              %target = VALUE #(
                       ( %cid = 'cid\_child4'
                         key\_field\_child = 40
                         ch\_field1 = 'qqq'
                         ch\_field2 = 'rrr'
                         ch\_field3 = 90
                         ch\_field4 = 100
                     ) ) )
            ( %key-key\_field = 5
              %target = VALUE #(
                       ( %cid = 'cid\_child5'
                         key\_field\_child = 50
                         ch\_field1 = 'sss'
                         ch\_field2 = 'ttt'
                         ch\_field3 = 110
                         ch\_field4 = 120
                     ) ) ) )
           MAPPED FINAL(map3)
           FAILED FINAL(fail3)
           REPORTED reported\_early.
    COMMIT ENTITIES RESPONSE OF demo\_managed\_root\_reported
      REPORTED reported\_late.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    out->write( reported\_late ).
    SELECT key\_field, key\_field\_child, ch\_field1, ch\_field2,
      ch\_field3, ch\_field4
      FROM demo\_tab\_child\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(child\_tab2).
    out->write\_html(
        \`<b>Database table entries \` &&
        \`after the operations</b>\`
       )->write( child\_tab2
       )->line(
       )->next\_section( \`REPORTED EARLY response for RAP \` &&
                        \`read-by-association operation\` ).
    READ ENTITY demo\_managed\_root\_reported
           BY \\\_child FROM VALUE #(
               ( %tky-key\_field = 4 )
               ( %tky-key\_field = 5 ) )
           RESULT FINAL(result)
              FAILED FINAL(fail4)
              REPORTED reported\_early.
    out->write( reported\_early ).
    out->line(
      )->next\_section( \`RAP create-by-association operation (3)\` ).
    ROLLBACK ENTITIES.
    MODIFY ENTITY demo\_managed\_root\_reported
          CREATE BY \\\_child FIELDS ( key\_field\_child ch\_field1
              ch\_field2 ch\_field3 ch\_field4 ) WITH VALUE #(
               ( %key-key\_field = 4
                 %target = VALUE #(
                          ( %cid = 'cid\_child6'
                            key\_field\_child = 40
                            ch\_field1 = 'uuu'
                            ch\_field2 = 'vvv'
                            ch\_field3 = 50
                            ch\_field4 = 100
                        ) ) )
               ( %key-key\_field = 5
                 %target = VALUE #(
                          ( %cid = 'cid\_child7'
                            key\_field\_child = 50
                            ch\_field1 = 'www'
                            ch\_field2 = 'xxx'
                            ch\_field3 = 60
                            ch\_field4 = 120
                        ) ) )
                        )
              MAPPED FINAL(map5)
              FAILED FINAL(fail5)
              REPORTED reported\_early.
    COMMIT ENTITIES RESPONSE OF demo\_managed\_root\_reported
      REPORTED reported\_late.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    out->write( reported\_early ).
    out->write( reported\_late ).
    SELECT key\_field, key\_field\_child, ch\_field1, ch\_field2,
      ch\_field3, ch\_field4
      FROM demo\_tab\_child\_5
      ORDER BY key\_field
      INTO TABLE @FINAL(child\_tab3).
    out->write\_html(
            \`<b>Database table entries \` &&
            \`after the operations</b>\`
           )->write( child\_tab3 ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
    DELETE FROM demo\_tab\_child\_5.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The class includes multiple ABAP EML requests:

1.  ABAP EML create request:
    
    Multiple RAP BO instances are created for the root entity. A [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm) triggers the saving of the instances to the database. Apart from an internal table showing the database table entries, the output shows the REPORTED EARLY response that, among other things, includes the %global component that is marked as enabled, and the content of the %other component.
    
2.  First ABAP EML create-by-association request:
    
    Multiple RAP BO instances are created for the child entity. All are purposely specified in a way so that the validation does not fail. Hence, all entries are saved to the database table following a COMMIT ENTITIES statement. The entries are shown in an internal table in the output. Besides this, REPORTED LATE responses are displayed. Since the validation is successful, there are no entries in the reported parameter for the RAP BO entities. For demo purposes, another RAP unbound message that has been added to %other when calling the validatenum method is displayed.
    
3.  Second ABAP EML create-by-association request:
    
    Two RAP BO instances are created for the child entity. All are purposely specified in a way so that the validation fails. Hence, the entries are not saved to the database table following a COMMIT ENTITIES statement. The entries of the database table are shown in an internal table in the output and do not show any changes. Also here, REPORTED LATE responses are displayed in a table. Since the validation fails, the reported parameter shows entries. Among them, there are entries to visualize the content of the %path and %element components. The %state\_area component is initial in this context. A read operation that follows this create-by-association operation is required to visualize an entry. The RAP unbound message in %other is displayed, too.
    
4.  ABAP EML read-by-association request:
    
    A read-by-association operation is executed on the previously failed instances. The entries of the REPORTED EARLY response is displayed in an internal table. The sole purpose of this operation is to visualize the %state\_area component that shows an entry.
    
5.  Third ABAP EML create-by-association request:
    
    A [ROLLBACK ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprollback_entities.htm) statement before the create-by-association request rolls back all changes of the current [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry"). Then, two RAP BO instances are created for the child entity using the same keys as previously. All are purposely specified in a way so that the validation does not fail. Hence, the entries are saved to the database table following a COMMIT ENTITIES statement. The entries of the database table are shown in an internal table. Both REPORTED EARLY and REPORTED LATE responses are displayed in an internal table, too, however, they do not show any entries for the child entity. The RAP unbound messages in %other contained in REPORTED EARLY and REPORTED LATE are displayed.