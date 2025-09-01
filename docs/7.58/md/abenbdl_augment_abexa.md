  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_projection_bo.htm) →  [RAP - Entity Behavior Definition, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_projection.htm) →  [RAP - Entity Behavior Body, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body_projection.htm) →  [RAP - augment, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_augment_projection.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Operation%20Augmentation%2C%20ABENBDL_AUGMENT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Operation Augmentation

This example demonstrates how to define and implement the operation augmentation in a RAP projection business object.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

Base BDEF

The base BDEF is the managed RAP behavior definition DEMO\_RAP\_MANAGED\_ASSOC\_ROOT. It defines the behavior for two entities which are connected via a [CDS composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") relation.

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
  field ( readonly:update ) KeyFieldRoot;
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
  field ( readonly:update ) KeyField, KeyFieldChild;
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

In the ABAP behavior pool, the operation augmentation is implemented in three methods: augment\_create, augment\_update, and augment\_cba\_child.

augment\_create implements the following:

-   It augments an original base instance for the operation create. Whenever new instances are created, the value of field CharFieldRoot is set to A.
-   It augments the operation create by adding new instances. Whenever a create operation is performed, the augmentation adds an additional entity instance. The key value for this new entity instance is a random integer.
    
    METHOD augment\_create.
      "when new instance is created, set CharFieldRoot to value A
      DATA: variable\_create
             TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root,
            rel\_tab         TYPE abp\_behv\_relating\_tab.
      LOOP AT entities\_create ASSIGNING FIELD-SYMBOL(<fs1>).
        APPEND VALUE #( %cid            = <fs1>-%cid
                        %key            = CORRESPONDING #( <fs1>-%key )
                        CharFieldRoot = 'A'
                        %control-CharFieldRoot = if\_abap\_behv=>mk-on
                      ) TO variable\_create.
        APPEND sy-tabix TO rel\_tab.
      ENDLOOP.
      MODIFY AUGMENTING ENTITIES OF demo\_rap\_managed\_assoc\_root
      ENTITY \_Root
      CREATE FROM variable\_create.
      "whenever a new instance is created,
      "add an additional entity instance
      DATA: variable\_create\_new
           TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root.
      "Determine max integer of key field
      SORT variable\_create BY keyfieldroot DESCENDING.
      IF variable\_create IS NOT INITIAL.
        DATA(max\_nom) = variable\_create\[ 1 \]-KeyFieldRoot.
      ENDIF.
      LOOP AT variable\_create ASSIGNING FIELD-SYMBOL(<fs2>).
        APPEND VALUE #( KeyFieldRoot =
          cl\_abap\_random\_int=>create(
            seed = cl\_abap\_random=>seed(
               ) min = max\_nom + 1 max = 100 )->get\_next( )
                        DataFieldRoot = 'ccc'
                        CharFieldRoot = <fs2>-CharFieldRoot
                        %control         = VALUE #(
                          KeyFieldRoot = if\_abap\_behv=>mk-on
                          DataFieldRoot = if\_abap\_behv=>mk-on
                          CharFieldRoot = if\_abap\_behv=>mk-on )
                      ) TO variable\_create\_new.
      ENDLOOP.
      MODIFY AUGMENTING ENTITIES OF demo\_rap\_managed\_assoc\_root
      ENTITY \_Root
      CREATE AUTO FILL CID WITH variable\_create\_new
      RELATING TO entities\_create
      BY rel\_tab.
    ENDMETHOD.
    

augment\_update augments an original base instance for the operation update. Whenever an existing entity instance is updated, the value of field DecFieldRoot is set to 100.2.

METHOD augment\_update.
  "when an instance is updated, set DecFieldRoot to value 100.2
  DATA: variable\_update
          TYPE TABLE FOR UPDATE demo\_rap\_managed\_assoc\_root,
        relates\_update  TYPE abp\_behv\_relating\_tab.
  LOOP AT entities\_update INTO DATA(perform\_update).
    APPEND VALUE #( %key             = CORRESPONDING #( perform\_update-%key )
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
ENDMETHOD.

augment\_cba\_child implements the following:

-   It augments an original base instance for the operation create by association. Whenever new child instances are created via the parent entity, the value of field DataField is set to AAA.
-   It augments the operation create by association by adding new child instances. For each parent instance, an additional child instance with the key value 26 is added.
    
    METHOD augment\_cba\_Child.
    "whenever a new child instance is created, set DataField to value AAA
      DATA: variable\_cba
             TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root\\\_child.
      LOOP AT entities\_cba ASSIGNING FIELD-SYMBOL(<variable\_cba>).
        LOOP AT <variable\_cba>-%target ASSIGNING FIELD-SYMBOL(<fs2>).
          APPEND VALUE #(
          %cid\_ref = <variable\_cba>-%cid\_ref
         KeyFieldRoot = <variable\_cba>-KeyFieldRoot
                               %target            = VALUE #( (
                               %cid            = <fs2>-%cid
                               KeyFieldChild = <fs2>-KeyFieldChild
                               DataField = 'AAA'
                               %control-DataField = if\_abap\_behv=>mk-on
                              ) ) ) TO variable\_cba.
        ENDLOOP.
      ENDLOOP.
      MODIFY AUGMENTING ENTITY demo\_rap\_managed\_assoc\_root
          CREATE BY \\\_Child AUTO FILL CID WITH variable\_cba.
      "whenever a new child instance is created,
      "add an additional child instance
      "with key value 26.
      DATA: variable\_cba\_new
       TYPE TABLE FOR CREATE demo\_rap\_managed\_assoc\_root\\\_child.
      LOOP AT entities\_cba INTO DATA(hallo\_cba).
        APPEND VALUE #( %cid\_ref = hallo\_cba-%cid\_ref
                        KeyFieldRoot = hallo\_cba-KeyFieldRoot
                        %target            = VALUE #( (
                        KeyField = hallo\_cba-KeyFieldRoot
                        KeyFieldChild = 26
                        %control         = VALUE #(
                          KeyField = if\_abap\_behv=>mk-on
                          KeyFieldChild = if\_abap\_behv=>mk-on
                           ) ) )
                     )  TO variable\_cba\_new.
      ENDLOOP.
    \*
      MODIFY AUGMENTING ENTITY demo\_rap\_managed\_assoc\_root
              CREATE BY \\\_Child AUTO FILL CID WITH variable\_cba\_new.
    ENDMETHOD.
    

For the full implementation, see CCIMP include.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_proj\_augment DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_proj\_augment IMPLEMENTATION.
  METHOD main.
    DELETE FROM demo\_dbtab\_root.
    DELETE FROM demo\_dbtab\_child.
    MODIFY ENTITIES OF demo\_rap\_proj\_augment
    ENTITY \_Parent
          CREATE FIELDS ( KeyFieldRoot  )
          WITH VALUE #(
           ( %cid = 'cid1' KeyFieldRoot = 1  )
           ( %cid = 'cid2' KeyFieldRoot = 2 ) )
           UPDATE FIELDS ( DataFieldRoot ) WITH VALUE #(
           ( %cid\_ref = 'cid1'
             DataFieldRoot = 'bbb' ) )
          FAILED DATA(failed)
          REPORTED DATA(reported).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, data\_field, char\_field, dec\_field
    FROM demo\_dbtab\_root
    INTO TABLE @FINAL(result).
    MODIFY ENTITIES OF demo\_rap\_proj\_augment
       ENTITY \_Parent
       CREATE BY \\\_Child
       FIELDS ( KeyFieldChild CharField  )
       WITH VALUE #(
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \*
    FROM demo\_dbtab\_child
    INTO TABLE @FINAL(result\_child).
    out->next\_section( 'root'
        )->write( result
        )->next\_section( 'child'
        )->write( result\_child ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   It creates two parent entity instances. The operation augmentation automatically adds the value A for field CharFieldRoot for each entity instance. Moreover, for each created entity instance, another entity instance is added by the operation augment with a random integer as key value.
-   It updates one of the entity instances. The operation augmentation automatically adds the value 100.2 for field DecFieldRoot for all updated entity instances.
-   It creates a child entity instance for each parent entity instance via a create-by-association operation. The operation augmentation automatically adds the value AAA for field DataFieldRoot for each newly created child entity instance. Moreover, it adds an additional child entity instance for each parent entity instance with the child entity key 26.