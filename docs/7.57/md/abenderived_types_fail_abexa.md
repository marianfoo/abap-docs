---
title: "Data model"
description: |
  The CDS data model consists of the root entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm 'Glossary Entry') DEMO_MANAGED_ROOT_FAILED and its child entity(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchild_entity_glosry.htm 'Glossary
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_fail_abexa.htm"
abapFile: "abenderived_types_fail_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenderived", "fail", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [Other RAP-Supporting ABAP Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_rap_other.htm) →  [ABAP for RAP, BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrpm_derived_types.htm) →  [Components of BDEF Derived Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapderived_types_comp.htm) →  [Examples for BDEF Derived Type Components](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenderived_types_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Using %fail, ABENDERIVED_TYPES_FAIL_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

Using %fail

This example demonstrates the use of %fail with a [managed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_impl_type.htm) [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Data model

The CDS data model consists of the [root entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenroot_entity_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_FAILED and its [child entity](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenchild_entity_glosry.htm "Glossary Entry") DEMO\_MANAGED\_CHILD\_FAILED. The child entity is not used in the example.

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT\_FAILED is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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
}

Behavior implementation

For the above CDS behavior definition, one [ABP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_FAILED. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool.

The following methods are relevant for the example:

-   get\_instance\_authorizations: If an instance has a specific value in a field, the update and delete operations should be denied, i. e. the operations are marked as unauthorized. %fail-cause is assigned accordingly. %fail-cause and the key of the RAP BO instance is stored in the failed response structure.
-   get\_instance\_features: If an instance has a specific value in a field, update operations should be denied, i. e. the operations are marked as readonly. %fail-cause is assigned accordingly. %fail-cause and the key of the RAP BO instance is stored in the failed response structure.

Source Code   

REPORT demo\_rap\_derived\_types\_fail.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out      TYPE REF TO if\_demo\_output,
      mapped   TYPE RESPONSE FOR MAPPED   demo\_managed\_root\_failed,
      failed   TYPE RESPONSE FOR FAILED   demo\_managed\_root\_failed,
      reported TYPE RESPONSE FOR REPORTED demo\_managed\_root\_failed.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
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
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_5.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The program includes multiple ABAP EML requests:

1.  ABAP EML modify request: Multiple RAP BO instances are created. A [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm) statement triggers the saving of the instances to the database. The output shows for all requests the content of the [failed](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptype_response_for.htm) response. In this case, none of the instances show any failures. Furthermore, an internal table is filled with the database table entries. In the output, all newly created RAP BO instances have been saved to the database and are displayed in the internal table.
2.  ABAP EML update and delete requests: Specific RAP BO instances are updated and deleted. The outcome of calling the get\_instance\_authorizations and get\_instance\_features is that several instances cannot be updated and deleted because of the conditions implemented in the methods. Since these methods fill the failed responses, an internal table that contains the entries of the failed response consequently shows the different failure causes for those RAP BO instances that could not be saved to or deleted from the database table. %fail-cause is in this case READONLY and UNAUTHORIZED. As above, a COMMIT ENTITIES statement saves those instances that did not show any failures. The outcome of these ABAP EML requests is also shown in an internal table.
3.  ABAP EML read request: Multiple RAP BO instances are read from the database table. The read result is stored in an internal table which is displayed in the output. Since not all instances that are requested exist on the database table, an internal table containing the failed response consequently shows entries. %fail-cause is in this case NOT\_FOUND.