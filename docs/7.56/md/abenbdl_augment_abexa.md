---
title: "CDS BDL - operation augmentation"
description: |
  This example demonstrates how to define and implement the operation augmentation in a RAP projection business object. Base BDEF The base BDEF is the managed CDS behavior definition DEMO_RAP_MANAGED_ASSOC_ROOT. It defines the behavior for two entities which are connected via a CDS composition rel
version: "7.56"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_abexa.htm"
abapFile: "abenbdl_augment_abexa.htm"
keywords: ["select", "insert", "update", "delete", "loop", "do", "if", "try", "method", "class", "data", "abenbdl", "augment", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [CDS BDL - CDS projection behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_projection_bo.htm) →  [CDS BDL - entity behavior definition, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh_projection.htm) →  [CDS BDL - entity behavior body, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_body_projection.htm) →  [CDS BDL - augment, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_augment_projection.htm) → 

CDS BDL - operation augmentation

This example demonstrates how to define and implement the operation augmentation in a RAP projection business object.

Base BDEF

The base BDEF is the managed CDS behavior definition DEMO\_RAP\_MANAGED\_ASSOC\_ROOT. It defines the behavior for two entities which are connected via a CDS composition relation.

managed;
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_ROOT alias \_Root
persistent table demo\_dbtab\_root
lock master
{
  create;
  update;
  delete;
  association \_child { create; }
  association \_ext { create; }
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
    DecFieldRoot = dec\_field;
  }
}
define behavior for DEMO\_RAP\_MANAGED\_ASSOC\_CHILD alias \_Child
persistent table demo\_dbtab\_child
lock dependent by \_parent
{
  update;
  delete;
  association \_parent { }
  field ( readonly:update ) KeyField;
  mapping for demo\_dbtab\_child
  {
    KeyField = key\_field;
    KeyFieldChild = key\_field\_child;
    DataField = data\_field;
    CharField = char\_field;
  }
}

Projection BDEF

The projection behavior definition is defined as shown below. It reuses the standard operations from the base BDEF and augments the create, update, and create-by-association operations.

projection
implementation in class bp\_demo\_rap\_proj\_augment unique;
define behavior for DEMO\_RAP\_PROJ\_AUGMENT alias \_Parent
{
  use create(augment);
  use update(augment);
  use delete;
  use association \_child { create(augment); }
  field(modify) VirtualElement;
}
define behavior for DEMO\_RAP\_PROJ\_AUGMENT\_CHILD alias \_Child
{
  use update;
  use delete;
  use association \_parent;
}

Behavior implementation

In the ABAP behavior pool, the operation augmentation is implemented in the method augment\_operations. This method implements five variants of the operation augmentation:

-   it augments an original base instance for the operation create. Whenever new instances are created, the value of field CharFieldRoot is set to A.
-   it augments an original base instance for the operation update. Whenever an existing entity instance is updated, the value of field DecFieldRoot is set to 100.2.
-   it augments an original base instance for the operation create by association. Whenever new child instances are created via the parent entity, the value of field DataField is set to AAA.
-   it augments the operation create by adding new instances. Whenever a create operation is performed, the augmentation adds an additional entity instance with the key value 3.
-   it augments the operation create by association by adding new child instances. For each parent instance, an additional child instance with the key value 26 is added.
    
    METHOD augment\_operations.
      "augmenting an original base instance, operation CREATE
      DATA: variable\_create
            TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root.
      variable\_create = CORRESPONDING #( entities\_create ).
      LOOP AT variable\_create ASSIGNING FIELD-SYMBOL(<fs1>).
        <fs1>-CharFieldRoot = 'A'.
        <fs1>-%control-CharFieldRoot = if\_abap\_behv=>mk-on.
      ENDLOOP.
      MODIFY AUGMENTING ENTITIES OF demo\_rap\_managed\_assoc\_root
      ENTITY \_Root
      CREATE FROM variable\_create.
      "augmenting an original base instance, operation UPDATE
      DATA: variable\_update
            TYPE TABLE FOR UPDATE demo\_rap\_managed\_assoc\_root,
            relates\_update  TYPE abp\_behv\_relating\_tab.
      LOOP AT entities\_update INTO DATA(perform\_update).
        APPEND VALUE #( %key             = perform\_update-%key
                        %cid\_ref         = perform\_update-%cid\_ref
                        DecFieldRoot      = '100.2'
                        %control         = VALUE #(
                          DecFieldRoot = if\_abap\_behv=>mk-on )
                      ) TO variable\_update.
      ENDLOOP.
      MODIFY AUGMENTING ENTITIES OF demo\_rap\_managed\_assoc\_root
      ENTITY \_Root
          UPDATE FROM variable\_update
          RELATING TO entities\_update BY relates\_update.
      "augmenting an original base instance, operation CBA
      DATA: variable\_cba
            TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root\\\_child.
      LOOP AT entities\_cba ASSIGNING FIELD-SYMBOL(<variable\_cba>).
        LOOP AT <variable\_cba>-%target INTO DATA(hallo).
          INSERT VALUE #(
         KeyFieldRoot = <variable\_cba>-KeyFieldRoot
                               %target            = VALUE #( (
                               KeyFieldChild = hallo-KeyFieldChild
                               DataField = 'AAA'
                               %control          = VALUE #(
                                 DataField = if\_abap\_behv=>mk-on ) ) )
                              ) INTO TABLE variable\_cba.
        ENDLOOP.
      ENDLOOP.
      MODIFY AUGMENTING ENTITIES OF demo\_rap\_managed\_assoc\_root
          ENTITY \_Root
          CREATE BY \\\_Child
          FROM variable\_cba.
      "augment operation CREATE, create new instance
      DATA: variable\_create\_new
            TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root.
      APPEND VALUE #( KeyFieldRoot            = 3
                      DataFieldRoot = 'ccc'
                      %control         = VALUE #(
                        KeyFieldRoot = if\_abap\_behv=>mk-on
                        DataFieldRoot = if\_abap\_behv=>mk-on  )
                    ) TO variable\_create\_new.
      MODIFY AUGMENTING ENTITIES OF demo\_rap\_managed\_assoc\_root
      ENTITY \_Root
      CREATE FROM variable\_create\_new.
      "augment operation CBA, create new instance
      DATA: variable\_cba\_new
            TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root\\\_child.
      LOOP AT entities\_cba INTO DATA(hallo\_cba).
        APPEND VALUE #( KeyFieldRoot = hallo\_cba-KeyFieldRoot
                        %target            = VALUE #( (
                        KeyField = hallo\_cba-KeyFieldRoot
                        KeyFieldChild = 26
                        %control         = VALUE #(
                          KeyField = if\_abap\_behv=>mk-on
                           KeyFieldChild = if\_abap\_behv=>mk-on ) ) )
                     )  TO variable\_cba\_new.
      ENDLOOP.
      MODIFY AUGMENTING ENTITIES OF demo\_rap\_managed\_assoc\_root
          ENTITY \_Root
          CREATE BY \\\_Child
          FROM variable\_cba\_new.
    ENDMETHOD.
    

For the full implementation, seeCCIMP include

Source Code

REPORT demo\_rap\_proj\_augment.
DATA(out) = cl\_demo\_output=>new(  ).
DELETE FROM demo\_dbtab\_root.
DELETE FROM demo\_dbtab\_child.
MODIFY ENTITIES OF demo\_rap\_proj\_augment
ENTITY \_Parent
      CREATE SET FIELDS WITH VALUE #(
       ( %cid = 'cid1' KeyFieldRoot = 1  )
       ( %cid = 'cid2' KeyFieldRoot = 2 ) )
       UPDATE SET FIELDS WITH VALUE #(
       ( %cid\_ref = 'cid1'
         DataFieldRoot = 'bbb' ) )
      FAILED DATA(failed)
      REPORTED DATA(reported).
COMMIT ENTITIES.
MODIFY ENTITIES OF demo\_rap\_proj\_augment
   ENTITY \_Parent
   CREATE BY \\\_Child
   SET FIELDS WITH VALUE #(
   ( KeyFieldRoot = 1
     %target = VALUE #( ( %cid = 'cid3'
                          KeyFieldChild = 1
                          CharField = 'XXX' ) ) )
   ( KeyFieldRoot = 2
     %target = VALUE #( ( %cid = 'cid4'
                          KeyFieldChild = 2
                          CharField = 'YYY' ) ) ) )
    FAILED failed
    REPORTED reported.
COMMIT ENTITIES.
SELECT key\_field, data\_field, char\_field, dec\_field
FROM demo\_dbtab\_root
INTO TABLE @DATA(result).
SELECT \*
FROM demo\_dbtab\_child
INTO TABLE @DATA(result\_child).
out->next\_section( 'root'
    )->write( result
    )->next\_section( 'child'
    )->write( result\_child
     )->display(  ).

Description

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

-   It creates two parent entity instances. The operation augmentation automatically adds the value A for field CharFieldRoot for each entity instance. Moreover, it adds a third entity instance with the key 3.
-   It updates one of the entity instances. The operation augmentation automatically adds the value 100.2 for field DecFieldRoot for all updated entity instances.
-   It creates a child entity instance for each parent entity instance via a create-by-association operation. The operation augmentation automatically adds the value AAA for field DataFieldRoot for each newly created child entity instance. Moreover, it adds an additional child entity instance for each parent entity instance with the child entity key 26.