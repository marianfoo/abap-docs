  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [MODIFY ENTITY, ENTITIES](javascript:call_link\('abapmodify_entity_entities.htm'\)) →  [Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - MODIFY, Standard Operations \(Managed\), ABENEML_MODIFY_OP_ABEXA, 757%0D%0A%
0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - MODIFY, Standard Operations (Managed)

This example demonstrates various standard operations to manipulate a simple managed [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). It also includes the use of READ statements.

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

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_MANAGED\_ROOT is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as follows:

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

For the above CDS behavior definition, there is no [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") created and needed since only standard [CRUD](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry") operations are used in the example.

Source Code   

REPORT demo\_rap\_eml\_modify\_op\_2.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    "Empty tables
    DELETE FROM demo\_tab\_root.
    DELETE FROM demo\_tab\_child.
    "CREATE Operations
    MODIFY ENTITY demo\_managed\_root
    CREATE FIELDS ( key\_field data\_field1\_root data\_field2\_root )
    WITH VALUE #(
        ( %cid = 'cid1' key\_field = 1
          data\_field1\_root = 'aaa' data\_field2\_root = 'bbb' )
        ( %cid = 'cid2' key\_field = 2
          data\_field1\_root = 'ccc' data\_field2\_root = 'ddd' )
        ( %cid = 'cid3' key\_field = 3
          data\_field1\_root = 'eee' data\_field2\_root = 'fff')
        ( %cid = 'cid4' key\_field = 4
          data\_field1\_root = 'ggg' data\_field2\_root = 'hhh')
              ).
    "CREATE BY assoc (child entity)
    MODIFY ENTITY demo\_managed\_root
    CREATE BY \\\_child
    FIELDS ( data\_field1\_child data\_field2\_child ) WITH VALUE #(
        ( key\_field = 1
          %target = VALUE #( ( %cid = 'cid3'
                               data\_field1\_child = 'iii'
                               data\_field2\_child = 'jjj' )
                                         ) )
        ( key\_field = 2
          %target = VALUE #( ( %cid = 'cid4'
                               data\_field1\_child = 'kkk'
                               data\_field2\_child = 'lll' )
                           ) )
              ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root
      INTO TABLE @FINAL(create\_root\_tab). "#EC CI\_ALL\_FIELDS\_NEEDED
    SELECT \* FROM demo\_tab\_child
      INTO TABLE @FINAL(create\_child\_tab). "#EC CI\_ALL\_FIELDS\_NEEDED
    SELECT \* FROM demo\_tab\_assoc
      INTO TABLE @FINAL(create\_assoc\_tab). "#EC CI\_ALL\_FIELDS\_NEEDED
    "UPDATE Operation
    MODIFY ENTITY demo\_managed\_root
    UPDATE FIELDS ( data\_field1\_root data\_field2\_root ) WITH VALUE #(
       ( key\_field = 3
         data\_field1\_root = 'qqq'
         data\_field2\_root = 'rrr')
       ( key\_field = 4
         data\_field1\_root = 'sss'
         data\_field2\_root = 'ttt')
      ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @FINAL(update\_tab).
    "DELETE Operation
    MODIFY ENTITY demo\_managed\_root
    DELETE  FROM VALUE #(
      ( key\_field = 4  )
             ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @FINAL(delete\_tab).
    "READ Operations
    "READ bdef (root entity)
    READ ENTITY demo\_managed\_root
    ALL FIELDS WITH VALUE #(
          ( key\_field = 1  )
          ( key\_field = 2  )
          ( key\_field = 3  )
          )
    RESULT FINAL(read\_result).
    "READ BY assoc (child)
    READ ENTITY demo\_managed\_root
    BY \\\_child
    ALL FIELDS WITH VALUE #(
          ( key\_field = 1  )
          ( key\_field = 2  )
          )
    RESULT FINAL(read\_by\_child\_tab).
    "Display
    FINAL(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'CREATE (root entity)'
            )->write( create\_root\_tab
            )->next\_section( 'CREATE BY assoc (child entity)'
            )->write( create\_child\_tab
            )->next\_section( 'UPDATE'
            )->write( update\_tab
            )->next\_section( 'DELETE'
            )->write( delete\_tab
            )->next\_section( 'READ (root entity)'
            )->write( read\_result
            )->next\_section( 'READ BY assoc (child entity)'
            )->write( read\_by\_child\_tab
            )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the RAP business object from an ABAP program:

-   Modify operations with CREATE and CREATE BY
    
    Three MODIFY ENTITY operations are executed to create data sets for the root entity using the CREATE statement as well as data sets for associations defined in the BDEF using CREATE BY. One associated entity is part of the composition tree, the other is not (cross-BO entity).
    
-   Modify operation with UPDATE
    
    Data sets of the root entity are updated.
    
-   Modify operation with DELETE
    
    Data sets of the root entity are deleted.
    
-   Read operation with READ and READ BY
    
    Data sets are read from the root and child entities.
    

For demonstration purposes, several internal tables with the required [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") are created to be used with the modify operations. They include demo values to be shown in the output. The [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") reads the data from the respective database tables into a managed [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") in which the operations take place. The changes are saved with the statement [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), and, thus, the changed data are persisted to the database tables.