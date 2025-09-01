---
title: "ABAP EML - MODIFY AUGMENTING ENTITY"
description: |
  This example demonstrates the ABAP EML MODIFY statement with the addition AUGMENTING with a RAP projection business object. Base BDEF The base BDEF is the managed CDS behavior definition DEMO_MANAGED_ROOT_WAS. It defines the behavior for two entities which are connected via a CDS composition rela
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_augmenting_abexa.htm"
abapFile: "abeneml_modify_augmenting_abexa.htm"
keywords: ["select", "update", "delete", "do", "if", "try", "method", "class", "data", "abeneml", "modify", "augmenting", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) →  [ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_aug_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - MODIFY AUGMENTING ENTITY, ABENEML_MODIFY_AUGMENTING_ABEXA, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - MODIFY AUGMENTING ENTITY

This example demonstrates the ABAP EML MODIFY statement with the addition AUGMENTING with a RAP projection business object.

Base BDEF

The base BDEF is the managed CDS behavior definition DEMO\_MANAGED\_ROOT\_WAS. It defines the behavior for two entities which are connected via a CDS composition relation.

managed implementation in class bp\_demo\_managed\_root\_was unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT\_WAS alias \_Root
persistent table demo\_tab\_root\_3
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  association \_child { create; }
}
define behavior for DEMO\_MANAGED\_CHILD\_WAS alias \_Child
persistent table demo\_tab\_child\_3
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  association \_parent;
}

Projection BDEF

The projection BDEF reuses the standard operations from the base BDEF and augments the create, update, and create-by-association operations.

projection implementation in class bp\_demo\_managed\_root\_proj unique;
strict(2);
define behavior for DEMO\_MANAGED\_ROOT\_PROJ alias \_Parent
{
  use create(augment);
  use update(augment);
  use delete;
  use association \_child { create(augment); }
  field(modify) VirtualElement;
}
define behavior for DEMO\_MANAGED\_CHILD\_PROJ alias \_Child
{
  use update;
  use delete;
  use association \_parent;
}

Behavior implementation

For the above projection BDEF, one [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_PROJ. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. In the behavior pool, operation augmentation is implemented in the following methods:

-   augment\_create
    
    Augments an original base instance for the operation create. Whenever new instances are created, the value of field field1 is set to create\_augment.
    
-   augment\_update
    
    Augments an original base instance for the operation update. Whenever an existing entity instance is updated, the value of field field4 is set to 222.
    
-   augment\_cba\_child
    
    Augments an original base instance for the operation create by association. Whenever new child instances are created via the parent entity, the value of field field2 is set to cba\_augment.
    

Source Code   

REPORT demo\_rap\_eml\_modify\_augmenting.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      out TYPE REF TO if\_demo\_output.
    CLASS-METHODS:
      initialize\_dbtabs.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    MODIFY ENTITY demo\_managed\_root\_proj
       CREATE FIELDS ( key\_field
            field2 field3 field4 ) with  VALUE #(
          ( %cid = 'cid1'
            key\_field = 1
            field2 = 'create\_1'
            field3 = 1
            field4 = 2 )
          ( %cid = 'cid2'
            key\_field = 2
            field2 = 'create\_2'
            field3 = 3
            field4 = 4 ) )
       MAPPED FINAL(m1)
       FAILED FINAL(f1)
       REPORTED FINAL(r1).
    COMMIT ENTITIES.
   MODIFY ENTITY demo\_managed\_root\_proj
         UPDATE FIELDS ( field3 ) WITH VALUE #(
             ( key\_field = 1
               field3 = 111 ) )
         FAILED FINAL(f2)
         REPORTED FINAL(r2).
    COMMIT ENTITIES.
    SELECT key\_field, field1, field2, field3, field4
      FROM demo\_tab\_root\_3
      ORDER BY key\_field
      INTO TABLE @FINAL(root\_tab).
    out->begin\_section( \`Demo for MODIFY AUGMENTING\`
      )->write\_doc(
\`Database table entries after the create and update operations:\`
      )->write( root\_tab ).
    MODIFY ENTITY demo\_managed\_root\_proj
       CREATE BY \\\_Child FIELDS ( key\_field\_child field1
            field3 field4 ) WITH VALUE #(
          ( key\_field = 1
            %target = VALUE #( ( %cid = 'cid3'
                                 key\_field\_child = 1
                                 field1 = 'cba1'
                                 field3 = 1
                                 field4 = 2 ) ) )
          ( key\_field = 2
            %target = VALUE #( ( %cid = 'cid4'
                                 key\_field\_child = 2
                                 field1 = 'cba2'
                                 field3 = 3
                                 field4 = 4 ) ) ) )
       MAPPED FINAL(m3)
       FAILED FINAL(f3)
       REPORTED FINAL(r4).
    COMMIT ENTITIES.
SELECT key\_field, key\_field\_child, field1, field2, field3, field4
      FROM demo\_tab\_child\_3
      ORDER BY key\_field
      INTO TABLE @FINAL(child\_tab).
    out->write\_doc(
\`Database table entries after the create-by-association operation:\`
      )->write( child\_tab
      )->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   Using an ABAP EML MODIFY statement, two parent entity instances are created. In the same request, one of the created instances gets updated. The operation augmentation automatically adds the value create\_augment for field field1 for each entity instance. For the updated entity instance, field4 is set to 222.
-   With a further ABAP EML MODIFY statement, a child entity instance for each parent entity instance is created via a create-by-association operation. The operation augmentation automatically adds the value cba\_augment for field field2 for each newly created child entity instance.
-   The output window shows the database entries of the root and child entities' tables.