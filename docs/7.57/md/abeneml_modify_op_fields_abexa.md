  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) →  [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_modify_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - MODIFY, Field Specification Expressions, ABENEML_MODIFY_OP_FIELDS_ABEXA, 7
57%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - MODIFY, Field Specification Expressions

This example demonstrates various standard operations and variants of field specification expressions to set up internal tables for ABAP EML MODIFY ENTITY statements to manipulate a simple managed [RAP BO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_glosry.htm "Glossary Entry").

The following standard operations and field specification alternatives are covered in the example:

Operations

-   CREATE
-   CREATE BY association
-   UPDATE
-   DELETE

Field specification alternatives

-   FROM
-   FIELDS (...) WITH
-   SET FIELDS WITH

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT and its child entity DEMO\_MANAGED\_CHILD.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT
  as select from demo\_tab\_root
  composition \[1..1\] of DEMO\_MANAGED\_CHILD as \_child
  {      
    key demo\_tab\_root.key\_field,
        demo\_tab\_root.data\_field1\_root,
        demo\_tab\_root.data\_field2\_root,
        \_child
  }

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_MANAGED\_CHILD
  as select from demo\_tab\_child
  association to parent DEMO\_MANAGED\_ROOT as \_parent  
    on $projection.key\_field = \_parent.key\_field
  {
        \_parent,
    key demo\_tab\_child.key\_field,
        demo\_tab\_child.data\_field1\_child,
        demo\_tab\_child.data\_field2\_child
  }

Behavior definition

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT
persistent table DEMO\_TAB\_ROOT
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
}
define behavior for DEMO\_MANAGED\_CHILD alias child
persistent table DEMO\_TAB\_CHILD
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent;
}

Behavior implementation

For the above CDS behavior definition, there is no [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") created and needed since only standard [CRUD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrud_glosry.htm "Glossary Entry") operations are used in the example.

Source Code   

REPORT demo\_rap\_eml\_modify\_operations.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out      TYPE REF TO if\_demo\_output,
      failed   TYPE RESPONSE FOR FAILED   demo\_managed\_root,
      reported TYPE RESPONSE FOR REPORTED demo\_managed\_root.
    CLASS-METHODS:
      initialize\_dbtabs,
      display\_dbtabs
        IMPORTING title TYPE string,
      display\_errors.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    "MODIFY operations with the addition FROM
    MODIFY ENTITY demo\_managed\_root
      CREATE FROM VALUE #(
        ( %cid = 'cid1'
          key\_field = 1
          %control-key\_field = if\_abap\_behv=>mk-on
          data\_field1\_root = 'aaa'
          %control-data\_field1\_root = if\_abap\_behv=>mk-on
          data\_field2\_root = 'bbb'
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
        ( %cid = 'cid2'
          key\_field = 2
          %control-key\_field = if\_abap\_behv=>mk-on
          data\_field1\_root = 'ccc'
          %control-data\_field1\_root = if\_abap\_behv=>mk-on
          data\_field2\_root = 'ddd'
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
        ( %cid = 'cid3'
          key\_field = 3
          %control-key\_field = if\_abap\_behv=>mk-on
          data\_field1\_root = 'eee'
          %control-data\_field1\_root = if\_abap\_behv=>mk-on
          data\_field2\_root = 'fff'
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
        ( %cid = 'cid4'
          key\_field = 4
          %control-key\_field = if\_abap\_behv=>mk-on
          data\_field1\_root = 'ggg'
          %control-data\_field1\_root = if\_abap\_behv=>mk-on
          data\_field2\_root = 'hhh'
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
         )
      CREATE BY \\\_child FROM  VALUE #(
        ( %cid\_ref = 'cid1'
          %target = VALUE #( ( %cid = 'cid5'
                   data\_field1\_child = 'zzz'
                   %control-data\_field1\_child = if\_abap\_behv=>mk-on
                   data\_field2\_child = 'yyy'
                   %control-data\_field2\_child = if\_abap\_behv=>mk-on )
                           ) )
        ( %cid\_ref = 'cid2'
          %target = VALUE #( ( %cid = 'cid6'
                    data\_field1\_child = 'xxx'
                    %control-data\_field1\_child = if\_abap\_behv=>mk-on
                    data\_field2\_child = 'www'
                    %control-data\_field2\_child = if\_abap\_behv=>mk-on )
                            ) )
        )
      UPDATE FROM VALUE #(
        ( %cid\_ref = 'cid3'
          data\_field1\_root = 'iii'
          %control-data\_field1\_root = if\_abap\_behv=>mk-on
          data\_field2\_root = 'jjj'
          %control-data\_field2\_root = if\_abap\_behv=>mk-on )
         )
      DELETE FROM VALUE #( ( %cid\_ref = 'cid4' ) )
        FAILED   failed
        REPORTED reported.
    display\_errors( ).
    COMMIT ENTITIES.
    display\_dbtabs( \`Modify Operations with FROM\` ).
    "MODIFY operations with the addition FIELDS ( ... ) WITH
    MODIFY ENTITY demo\_managed\_root
      CREATE FIELDS ( key\_field data\_field1\_root
                      data\_field2\_root )
        WITH VALUE #(
        ( %cid = 'cid7'
          key\_field = 5
          data\_field1\_root = 'kkk'
          data\_field2\_root = 'lll'  )
        ( %cid = 'cid8'
          key\_field = 6
          data\_field1\_root = 'mmm'
          data\_field2\_root = 'nnn'  )
        )
      CREATE BY \\\_child FIELDS ( data\_field1\_child
                                 data\_field2\_child )
        WITH VALUE #(
        ( %cid\_ref = 'cid8'
          %target = VALUE #( ( %cid = 'cid9'
                               data\_field1\_child = 'vvv'
                               data\_field2\_child = 'uuu' )
                           ) )
        )
      UPDATE FIELDS ( key\_field data\_field1\_root
                      data\_field2\_root )
        WITH VALUE #(
       ( %cid\_ref = 'cid7'
         data\_field1\_root = 'ooo'
         data\_field2\_root = 'ppp' )
         )
        FAILED   failed
        REPORTED reported.
    display\_errors( ).
    COMMIT ENTITIES.
    display\_dbtabs(
     \`Modify Operations with FIELDS ( ... ) WITH\`
     ).
    "MODIFY operations with the addition SET FIELDS WITH
    MODIFY ENTITY demo\_managed\_root
      CREATE SET FIELDS
      WITH VALUE #(
        ( %cid = 'cid10'
          key\_field = 7
          data\_field1\_root = 'qqq'
          data\_field2\_root = 'rrr'  )
        ( %cid = 'cid11'
          key\_field = 8
          data\_field1\_root = 'sss'
          data\_field2\_root = 'ttt'  )
        )
      CREATE BY \\\_child SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid10'
          %target = VALUE #( ( %cid = 'cid12'
                               data\_field1\_child = 'ttt'
                               data\_field2\_child = 'sss' )
                           ) )
        ( %cid\_ref = 'cid11'
          %target = VALUE #( ( %cid = 'cid13'
                               data\_field1\_child = 'rrr'
                               data\_field2\_child = 'qqq' )
                           ) )
        )
      UPDATE SET FIELDS WITH VALUE #(
        ( %cid\_ref = 'cid11'
          data\_field1\_root = 'uuu'
          data\_field2\_root = 'vvv' )
         )
        FAILED   failed
        REPORTED reported.
    display\_errors( ).
    COMMIT ENTITIES.
    display\_dbtabs(
    \`Modify Operations with SET FIELDS WITH\`
    ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root.
    DELETE FROM demo\_tab\_child.
    DELETE FROM demo\_tab\_assoc.
  ENDMETHOD.
  METHOD display\_dbtabs.
    SELECT \* FROM demo\_tab\_root
      INTO TABLE @FINAL(modifiy\_parent).
    SELECT \* FROM demo\_tab\_child
      INTO TABLE @FINAL(modifiy\_child).
    out->next\_section( title
      )->write( modifiy\_parent
      )->write( modifiy\_child ).
  ENDMETHOD.
  METHOD display\_errors.
    LOOP AT reported-demo\_managed\_root
      ASSIGNING FIELD-SYMBOL(<reported>).
      out->write( <reported>-%msg->if\_message~get\_text( ) ).
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   Modify operations with FROM
    
    Two MODIFY ENTITY operations are executed with FROM for both root and child entity. To cover several operations in one go, four new data sets are created for the root entity of which one is updated and deleted in the same MODIFY statement. Furthermore, two data sets are created for the child entity via a create-by-association operation.
    
-   Modify operations with FIELDS (...) WITH
    
    A CREATE, CREATE BY and UPDATE operation is demonstrated within one MODIFY ENTITY statement using the addition FIELDS (...) WITH.
    
-   Modify operations with SET FIELDS WITH
    
    A CREATE, CREATE BY and UPDATE operation is demonstrated within one MODIFY ENTITY statement using the addition SET FIELDS WITH.
    

For demonstration purposes, several internal tables with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") are created to be used with the modify operations. They include demo values to be shown in the output. The [RAP framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_framework_glosry.htm "Glossary Entry") reads the data from the respective database tables into a managed [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") in which the operations take place. The changes are saved with the statement [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit_entities.htm), and, thus, the changed data are persisted to the database tables.