---
title: "ABAP EML - MODIFY, Standard Operations (Managed)"
description: |
  This example demonstrates various standard operations to manipulate a simple managed RAP BO(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm 'Glossary Entry'). It also includes the use of READ statements. Data model The CDS data model consists of the root entity DEM
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_modify_op_abexa.htm"
abapFile: "abeneml_modify_op_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "internal-table", "abeneml", "modify", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Consuming RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_consume_rap_bos.htm) →  [ABAP EML - Consuming RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml.htm) →  [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) →  [Examples for ABAP EML MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_modify_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20MODIFY%2C%20Standard%20Operations%20%28Managed%29%2C%20ABENEML_MODIFY_OP_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

ABAP EML - MODIFY, Standard Operations (Managed)

This example demonstrates various standard operations to manipulate a simple managed [RAP BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry"). It also includes the use of READ statements.

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

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_MANAGED\_ROOT is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_managed\_root unique;
strict ( 2 );
define behavior for DEMO\_MANAGED\_ROOT
persistent table demo\_tab\_root
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
  field ( readonly : update ) key\_field;
}
define behavior for DEMO\_MANAGED\_CHILD alias child
persistent table demo\_tab\_child
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly : update ) key\_field;
  association \_parent;
}

Behavior implementation

For the above RAP behavior definition, there is no [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") created and needed since only standard [CRUD](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrud_glosry.htm "Glossary Entry") operations are used in the example.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_modify\_op\_2 DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_modify\_op\_2 IMPLEMENTATION.
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
          data\_field1\_root = 'eee' data\_field2\_root = 'fff' )
        ( %cid = 'cid4' key\_field = 4
          data\_field1\_root = 'ggg' data\_field2\_root = 'hhh' )
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root
      INTO TABLE @FINAL(create\_root\_tab).     "#EC CI\_ALL\_FIELDS\_NEEDED
    SELECT \* FROM demo\_tab\_child
      INTO TABLE @FINAL(create\_child\_tab).    "#EC CI\_ALL\_FIELDS\_NEEDED
    SELECT \* FROM demo\_tab\_assoc
      INTO TABLE @FINAL(create\_assoc\_tab).    "#EC CI\_ALL\_FIELDS\_NEEDED
    "UPDATE Operation
    MODIFY ENTITY demo\_managed\_root
    UPDATE FIELDS ( data\_field1\_root data\_field2\_root ) WITH VALUE #(
       ( key\_field = 3
         data\_field1\_root = 'qqq'
         data\_field2\_root = 'rrr' )
       ( key\_field = 4
         data\_field1\_root = 'sss'
         data\_field2\_root = 'ttt' )
      ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root INTO TABLE @FINAL(update\_tab).
    "DELETE Operation
    MODIFY ENTITY demo\_managed\_root
    DELETE  FROM VALUE #(
      ( key\_field = 4  )
             ).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
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
            )->write( read\_by\_child\_tab ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Modify operations with CREATE and CREATE BY
    
    Three MODIFY ENTITY operations are executed to create data sets for the root entity using the CREATE statement as well as data sets for associations defined in the BDEF using CREATE BY. One associated entity is part of the composition tree, the other is not (cross-BO entity).
    
-   Modify operation with UPDATE
    
    Data sets of the root entity are updated.
    
-   Modify operation with DELETE
    
    Data sets of the root entity are deleted.
    
-   Read operation with READ and READ BY
    
    Data sets are read from the root and child entities.
    

For demonstration purposes, several internal tables with the required [BDEF derived type](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") are created to be used with the modify operations. They include demo values to be shown in the output. The [RAP framework](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_framework_glosry.htm "Glossary Entry") reads the data from the respective database tables into a managed [transactional buffer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") in which the operations take place. The changes are saved with the statement [COMMIT ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcommit_entities.htm), and, thus, the changed data are persisted to the database tables.