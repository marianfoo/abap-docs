  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP for RAP Business Objects](javascript:call_link\('abenabap_for_rap_bos.htm'\)) →  [ABAP for Consuming RAP Business Objects](javascript:call_link\('abenabap_consume_rap_bos.htm'\)) →  [ABAP EML - Consuming RAP BOs](javascript:call_link\('abeneml.htm'\)) →  [MODIFY ENTITY, ENTITIES](javascript:call_link\('abapmodify_entity_entities.htm'\)) →  [Examples for ABAP EML MODIFY](javascript:call_link\('abapeml_modify_examples.htm'\)) → 

ABAP EML - MODIFY, Standard Operations (Managed)

This example demonstrates diverse standard operations to manipulate a simple managed [RAP BO](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). It also includes the use of READ statements.

Data model

The CDS data model consists of the root entity DEMO\_MANAGED\_ROOT and its child entity DEMO\_MANAGED\_CHILD. Furthermore, it contains an association to an entity (DEMO\_MANAGED\_ASSOC) that is not part of the [composition tree](javascript:call_link\('abencds_composition_tree_glosry.htm'\) "Glossary Entry").

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_MANAGED\_ROOT
  as select from demo\_tab\_root
  composition \[1..1\] of DEMO\_MANAGED\_CHILD as \_child
  association \[1..1\] to DEMO\_MANAGED\_ASSOC as \_assoc  
    on $projection.key\_field = \_assoc.key\_field
  {
        \_child,
        \_assoc,
    key demo\_tab\_root.key\_field,
        demo\_tab\_root.data\_field1\_root,
        demo\_tab\_root.data\_field2\_root
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

managed;
define behavior for DEMO\_MANAGED\_ROOT
persistent table DEMO\_TAB\_ROOT
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_assoc { create; }
}
define behavior for DEMO\_MANAGED\_CHILD alias child
persistent table DEMO\_TAB\_CHILD
lock dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
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
    DELETE FROM demo\_tab\_assoc.
    "CREATE Operations
    MODIFY ENTITY demo\_managed\_root
    CREATE SET FIELDS WITH VALUE #(
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
    SET FIELDS WITH VALUE #(
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
    "CREATE BY assoc (cross-BO)
    TYPES create\_assoc TYPE TABLE FOR CREATE demo\_managed\_root\\\_assoc.
    DATA(create\_assoc) =
      VALUE create\_assoc(
        ( key\_field = 1
          %target = VALUE #( ( %cid = 'cid5'
                               key\_field = 1
                               data\_field1\_assoc = 'mmm'
                               data\_field2\_assoc = 'nnn' )
                                         ) )
        ( key\_field = 2
          %target = VALUE #( ( %cid = 'cid6'
                               key\_field = 2
                               data\_field1\_assoc = 'ooo'
                               data\_field2\_assoc = 'ppp' )
                                         ) )
        ).
    MODIFY ENTITY demo\_managed\_root
    CREATE BY \\\_assoc
    SET FIELDS WITH create\_assoc.
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @DATA(create\_root\_tab).
    SELECT \* FROM demo\_tab\_child INTO TABLE @DATA(create\_child\_tab).
    SELECT \* FROM demo\_tab\_assoc INTO TABLE @DATA(create\_assoc\_tab).
    "UPDATE Operation
    MODIFY ENTITY demo\_managed\_root
    UPDATE SET FIELDS WITH VALUE #(
       ( key\_field = 3
         data\_field1\_root = 'qqq'
         data\_field2\_root = 'rrr')
       ( key\_field = 4
         data\_field1\_root = 'sss'
         data\_field2\_root = 'ttt')
      ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @DATA(update\_tab).
    "DELETE Operation
    MODIFY ENTITY demo\_managed\_root
    DELETE  FROM VALUE #(
      ( key\_field = 4  )
             ).
    COMMIT ENTITIES.
    SELECT \* FROM demo\_tab\_root INTO TABLE @DATA(delete\_tab).
    "READ Operations
    "READ bdef (root entity)
    READ ENTITY demo\_managed\_root
    ALL FIELDS WITH VALUE #(
          ( key\_field = 1  )
          ( key\_field = 2  )
          ( key\_field = 3  )
          )
    RESULT DATA(read\_result).
    "READ BY assoc (child)
    READ ENTITY demo\_managed\_root
    BY \\\_child
    ALL FIELDS WITH VALUE #(
          ( key\_field = 1  )
          ( key\_field = 2  )
          )
    RESULT DATA(read\_by\_child\_tab).
    "READ BY assoc (cross-BO)
    READ ENTITY demo\_managed\_root
    BY \\\_assoc
    ALL FIELDS WITH VALUE #(
     (  key\_field = 1  )
             )
    RESULT DATA(read\_by\_assoc\_tab).
    "Display
    DATA(out) = cl\_demo\_output=>new( ).
    out->next\_section( 'CREATE (root entity)'
            )->write( create\_root\_tab
            )->next\_section( 'CREATE BY assoc (child entity)'
            )->write( create\_child\_tab
            )->next\_section( 'CREATE BY assoc (cross-BO)'
            )->write( create\_assoc\_tab
            )->next\_section( 'UPDATE'
            )->write( update\_tab
            )->next\_section( 'DELETE'
            )->write( delete\_tab
            )->next\_section( 'READ (root entity)'
            )->write( read\_result
            )->next\_section( 'READ BY assoc (child entity)'
            )->write( read\_by\_child\_tab
            )->next\_section( 'READ BY assoc (cross-BO)'
            )->write( read\_by\_assoc\_tab
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
    
    Data sets are read from the root, child and cross-BO entity.
    

For demonstration purposes, several internal tables with the required [BDEF derived type](javascript:call_link\('abenrap_derived_type_glosry.htm'\) "Glossary Entry") are created to be used with the modify operations. They include demo values to be shown in the output. The [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") reads the data from the respective database tables into a managed [transactional buffer](javascript:call_link\('abentransactional_buffer_glosry.htm'\) "Glossary Entry") in which the operations take place. The changes are saved with the statement [COMMIT ENTITIES](javascript:call_link\('abapcommit_entities.htm'\)), and, thus, the changed data are persisted to the database tables.