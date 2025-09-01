# ABAP - Keyword Documentation / ABAP - RAP Business Objects / ABAP for RAP Business Objects / ABAP for Providing RAP Business Objects / ABAP EML - Providing RAP BOs

Included pages: 11


### abeneml_in_abp.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20Providing%20RAP%20BOs%2C%20ABENEML_IN_ABP%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - Providing RAP BOs

The following EML language elements can only be used in behavior implementations:

-   [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)
-   [MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_aug_entity_entities.htm)
-   [AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check_disable.htm)
-   [RAISE ENTITY EVENT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_entity_event.htm)

Further Information

When implementing RAP operations, ensure that you comply with [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). Follow the implementation guidelines in the development guide for the ABAP RESTful Application Programming Model, section [RAP Business Object Contract](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

You can find a selected set of guidelines in [here](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaprap_impl_rules.htm).

Continue
[ABAP EML - IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm)
[ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_aug_entity_entities.htm)
[ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check_disable.htm)
[SET ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_entities.htm)


### abapin_local_mode.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20IN%20LOCAL%20MODE%2C%20ABAPIN_LOCAL_MODE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP EML - IN LOCAL MODE

Syntax

... IN LOCAL MODE ...

Effect

The addition is used to exclude feature controls and authorization checks. It can be added to the following EML statements:

-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm)
-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm)

It can currently only be used in RAP BO implementations for the particular RAP BO itself, i. e. not for other RAP BOs. That means IN LOCAL MODE can only be used for this RAP BO's implementation classes in the behavior pool or other classes that are called from those implementation classes (for example, legacy code or other reused logic contained elsewhere). The reused logic contained elsewhere cannot be referred to by RAP statically. In that case, a warning is displayed in [ADT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadt_glosry.htm "Glossary Entry"). Yet, at runtime, there will not be an issue if this logic is called via the implementation classes of this RAP BO. If the reused logic is not called from the implementation classes of this RAP BO or it is called indirectly, a short dump is the consequence. For example, if the logic is called from a report (the implementation class of the RAP BO is not called at all) or if, at runtime, another RAP BO is meanwhile involved.

Example use case: A field to display the booking status of a trip on an SAP Fiori UI is specified as readonly in a [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Hence, it cannot be modified by a user on the UI directly. For example, the status of a trip is set to and displayed as not booked. A button on the UI triggers an action to book the trip. With clicking the button, the status gets changed and booked is displayed. To enable this, the underlying modify operation with the action to be executed in the ABP has the addition IN LOCAL MODE that ignores the feature control.

Hints

-   ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) and [READ](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm) statements using the addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm) are not allowed in [BAdIs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbadi_glosry.htm "Glossary Entry") and should only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
-   When specifying the REPORTED response parameter for an ABAP EML READ request, the related [RAP state messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_state_mes_glosry.htm "Glossary Entry") of the instances and child entities of a [CDS composition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_glosry.htm "Glossary Entry") are returned for the instances with the keys specified. This leads to increased runtime and, usually, retrieving the messages of the REPORTED response parameter for read requests is not required. If the read request is triggered by a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") and an entity instance contains a state message, the component [%state\_area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapderived_types_state_area.htm) of the REPORTED response contains %STATE as an indicator for state messages. When using ABAP EML READ statements with the addition IN LOCAL MODE in behavior implementations, the original value of %state\_area can be retrieved. See the example [RAP Messages: Transition and State Messages](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_messages_abexa.htm).

Example

The following source code section is taken from the CCIMP include of a behavior pool (the global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3). It is used in the context of the get\_instance\_features method of the executable example CL\_DEMO\_RAP\_EML\_GET\_PERMISSION.

READ ENTITIES OF demo\_managed\_root\_3 IN LOCAL MODE
  ENTITY demo\_managed\_root\_3
  FIELDS ( data\_field3\_root data\_field4\_root )
  WITH CORRESPONDING #( keys )
  RESULT DATA(lt\_numbers)
  FAILED DATA(failed).


### abapmodify_aug_entity_entities.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20MODIFY%20AUGMENTING%20ENTITY%2C%20ENTITIES%2C%20ABAPMODIFY_AUG_ENTITY_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES

Syntax

MODIFY AUGMENTING *{* ENTITY bdef
                      [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]* *}*
                *|* *{* ENTITIES OF bdef
                      ENTITY bdef1 [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]*
                     *\[*ENTITY bdef2 [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]**\]*
                     *\[*...*\]* *}*.

Alternatives:

[1\. MODIFY AUGMENTING ENTITY ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. MODIFY AUGMENTING ENTITIES OF ...](#!ABAP_ALTERNATIVE_2@2@)

Addition:

[... RELATING TO orig BY rela](#!ABAP_ONE_ADD@1@)

Effect

A special variant of [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) that is only possible in the context of [projections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_as_projection.htm). The variant can only be used by a [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and is used to manipulate the request for the base BO in the handler implementation. Only entities of the base BO can be modified by this statement. All [standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrud_glosry.htm "Glossary Entry") are allowed including actions.

Hints

-   For the statements, no [response parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) can be specified, i.e. the additions FAILED, MAPPED or REPORTED cannot be used.
-   An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation. An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.

Further Information

-   [RAP BDL - augment, projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_augment_projection.htm)
-   Development guide for the ABAP RESTful Application Programming Model, section [Operation Augmentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/346c2b7516ce4176bbb4daebaa80c2ca?version=sap_cross_product_abap).

Alternative 1   

MODIFY AUGMENTING ENTITY ...

Effect

Short form. Used to manipulate the request for the base BO in the handler implementation. bdef must be the full name, i. e. not the alias name, of the projected root BO. Multiple operations can be specified for [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) within a single MODIFY statement. However, in this case, it must be ensured that the importing parameters for the corresponding methods are available.

Alternative 2   

MODIFY AUGMENTING ENTITIES ...

Effect

Long form. Used to manipulate the request for the base BO in the handler implementation including one or more RAP BO entities. bdef must be the full name, i. e. not the alias name, of the projected root BO.

bdef must be the full name, i. e. not the alias name, of the projected root BO followed by a list of operations grouped by individual entities. bdef1, bdef2, and so on, must be entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") bdef. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after MODIFY AUGMENTING ENTITIES OF bdef has the same syntax as the short form. At least one entry (ENTITY bdef/bdef1/... with an operation) must be specified. The same entity can be specified after ENTITY repeatedly, however, the same operation in that combination is allowed only once. operations must be specified as outlined in the topic [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm).

Addition   

... RELATING TO orig BY rela

Effect

Used to relate augment instances to original instances. When the augmented request is passed to the base handler, it may return FAILED instances. If this happens for new instances that are not contained in the original request but added by the augment exit, it may be problematic for the consumer to relate these responses to the actual request. The runtime uses this information to transform FAILED keys of new instances back to the keys of the related original instances which the consumer can be expected to handle.

Each operation can be followed by this clause.

In the example code below, orig1 (the same is true for orig2) is an original instance table (i. e. the input for the augment exit), and rela1 is a variable of type ABP\_BEHV\_RELATING\_TAB that is a standard table of integers. The number of lines in augm1 and rela1 must be equal. All entries in rela1 must be integers between 0 and lines( orig1 ). A violation of these conditions leads to a runtime error. If the entry in rela1 is an integer greater than 0, for example, 2, it means that the second entry in augm1 is related to the second entry in orig1. If the entry is 0, it means that an entry in augm1 is not related to an entry in orig1, for example, because it is an original instance. It is possible that many augment instances are related in this way to the same original instance.

If augmentations are needed with the same operation, for example CREATE, but with instances relating to different original tables, it can be achieved by splitting the augmentation in several MODIFY AUGMENTING statements. If an instance from augm1 fails, for example when trying to lock it or when processing the base handler, the related orig1 instance is included in the FAILED response of the overall request. If the failure occurs when locking, the related orig1 instance is not passed to the base handler.

Example

MODIFY AUGMENTING ENTITY ...
  CREATE FROM augm1 RELATING TO orig1 BY rela1
  UPDATE FROM augm2 RELATING TO orig2 BY rela2 ...

Executable Example

The example [ABAP EML - MODIFY ENTITY AUGMENTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_modify_augmenting_abexa.htm) demonstrates the addition AUGMENTING with a RAP projection business object.

Continue
![Example](exa.gif "Example") [ABAP EML - MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_modify_augmenting_abexa.htm)


### abeneml_modify_augmenting_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) →  [ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_aug_entity_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20MODIFY%20AUGMENTING%20ENTITY%2C%20ABENEML_MODIFY_AUGMENTING_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

ABAP EML - MODIFY AUGMENTING ENTITY

This example demonstrates the ABAP EML MODIFY statement with the addition AUGMENTING with a RAP projection business object.

Base BDEF

The base BDEF is the managed RAP behavior definition DEMO\_MANAGED\_ROOT\_WAS. It defines the behavior for two entities which are connected via a CDS composition relation.

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
  field(readonly:update) key\_field;
}
define behavior for DEMO\_MANAGED\_CHILD\_WAS alias \_Child
persistent table demo\_tab\_child\_3
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) key\_field;
  field(readonly:update) key\_field\_child;
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

For the above projection BDEF, one [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_PROJ. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. In the behavior pool, operation augmentation is implemented in the following methods:

-   augment\_create
    
    Augments an original base instance for the operation create. Whenever new instances are created, the value of field field1 is set to create\_augment.
    
-   augment\_update
    
    Augments an original base instance for the operation update. Whenever an existing entity instance is updated, the value of field field4 is set to 222.
    
-   augment\_cba\_child
    
    Augments an original base instance for the operation create by association. Whenever new child instances are created via the parent entity, the value of field field2 is set to cba\_augment.
    

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_modify\_agmntng DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_modify\_agmntng IMPLEMENTATION.
  METHOD main.
    MODIFY ENTITY demo\_managed\_root\_proj
       CREATE FIELDS ( key\_field
            field2 field3 field4 ) WITH  VALUE #(
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    MODIFY ENTITY demo\_managed\_root\_proj
          UPDATE FIELDS ( field3 ) WITH VALUE #(
              ( key\_field = 1
                field3 = 111 ) )
          FAILED FINAL(f2)
          REPORTED FINAL(r2).
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
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
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT key\_field, key\_field\_child, field1, field2, field3, field4
          FROM demo\_tab\_child\_3
          ORDER BY key\_field
          INTO TABLE @FINAL(child\_tab).
    out->write\_doc(
\`Database table entries after the create-by-association operation:\`
      )->write( child\_tab ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_3.
    DELETE FROM demo\_tab\_child\_3.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Using an ABAP EML MODIFY statement, two parent entity instances are created. In the same request, one of the created instances gets updated. The operation augmentation automatically adds the value create\_augment for field field1 for each entity instance. For the updated entity instance, field4 is set to 222.
-   With a further ABAP EML MODIFY statement, a child entity instance for each parent entity instance is created via a create-by-association operation. The operation augmentation automatically adds the value cba\_augment for field field2 for each newly created child entity instance.
-   The output window shows the database entries of the root and child entities' tables.


### abapmodify_aug_entity_entities.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20MODIFY%20AUGMENTING%20ENTITY%2C%20ENTITIES%2C%20ABAPMODIFY_AUG_ENTITY_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES

Syntax

MODIFY AUGMENTING *{* ENTITY bdef
                      [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]* *}*
                *|* *{* ENTITIES OF bdef
                      ENTITY bdef1 [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]*
                     *\[*ENTITY bdef2 [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]**\]*
                     *\[*...*\]* *}*.

Alternatives:

[1\. MODIFY AUGMENTING ENTITY ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. MODIFY AUGMENTING ENTITIES OF ...](#!ABAP_ALTERNATIVE_2@2@)

Addition:

[... RELATING TO orig BY rela](#!ABAP_ONE_ADD@1@)

Effect

A special variant of [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm) that is only possible in the context of [projections](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_as_projection.htm). The variant can only be used by a [RAP BO provider](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and is used to manipulate the request for the base BO in the handler implementation. Only entities of the base BO can be modified by this statement. All [standard operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrud_glosry.htm "Glossary Entry") are allowed including actions.

Hints

-   For the statements, no [response parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapeml_response.htm) can be specified, i.e. the additions FAILED, MAPPED or REPORTED cannot be used.
-   An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation. An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.

Further Information

-   [RAP BDL - augment, projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_augment_projection.htm)
-   Development guide for the ABAP RESTful Application Programming Model, section [Operation Augmentation](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/346c2b7516ce4176bbb4daebaa80c2ca?version=sap_cross_product_abap).

Alternative 1   

MODIFY AUGMENTING ENTITY ...

Effect

Short form. Used to manipulate the request for the base BO in the handler implementation. bdef must be the full name, i. e. not the alias name, of the projected root BO. Multiple operations can be specified for [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm) within a single MODIFY statement. However, in this case, it must be ensured that the importing parameters for the corresponding methods are available.

Alternative 2   

MODIFY AUGMENTING ENTITIES ...

Effect

Long form. Used to manipulate the request for the base BO in the handler implementation including one or more RAP BO entities. bdef must be the full name, i. e. not the alias name, of the projected root BO.

bdef must be the full name, i. e. not the alias name, of the projected root BO followed by a list of operations grouped by individual entities. bdef1, bdef2, and so on, must be entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") bdef. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after MODIFY AUGMENTING ENTITIES OF bdef has the same syntax as the short form. At least one entry (ENTITY bdef/bdef1/... with an operation) must be specified. The same entity can be specified after ENTITY repeatedly, however, the same operation in that combination is allowed only once. operations must be specified as outlined in the topic [operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities_op.htm).

Addition   

... RELATING TO orig BY rela

Effect

Used to relate augment instances to original instances. When the augmented request is passed to the base handler, it may return FAILED instances. If this happens for new instances that are not contained in the original request but added by the augment exit, it may be problematic for the consumer to relate these responses to the actual request. The runtime uses this information to transform FAILED keys of new instances back to the keys of the related original instances which the consumer can be expected to handle.

Each operation can be followed by this clause.

In the example code below, orig1 (the same is true for orig2) is an original instance table (i. e. the input for the augment exit), and rela1 is a variable of type ABP\_BEHV\_RELATING\_TAB that is a standard table of integers. The number of lines in augm1 and rela1 must be equal. All entries in rela1 must be integers between 0 and lines( orig1 ). A violation of these conditions leads to a runtime error. If the entry in rela1 is an integer greater than 0, for example, 2, it means that the second entry in augm1 is related to the second entry in orig1. If the entry is 0, it means that an entry in augm1 is not related to an entry in orig1, for example, because it is an original instance. It is possible that many augment instances are related in this way to the same original instance.

If augmentations are needed with the same operation, for example CREATE, but with instances relating to different original tables, it can be achieved by splitting the augmentation in several MODIFY AUGMENTING statements. If an instance from augm1 fails, for example when trying to lock it or when processing the base handler, the related orig1 instance is included in the FAILED response of the overall request. If the failure occurs when locking, the related orig1 instance is not passed to the base handler.

Example

MODIFY AUGMENTING ENTITY ...
  CREATE FROM augm1 RELATING TO orig1 BY rela1
  UPDATE FROM augm2 RELATING TO orig2 BY rela2 ...

Executable Example

The example [ABAP EML - MODIFY ENTITY AUGMENTING](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_modify_augmenting_abexa.htm) demonstrates the addition AUGMENTING with a RAP projection business object.

Continue
![Example](exa.gif "Example") [ABAP EML - MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_modify_augmenting_abexa.htm)


### abapauthority-check_disable.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20AUTHORITY-CHECK%20DISABLE%2C%20ABAPAUTHORITY-CHECK_DISABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP EML - AUTHORITY-CHECK DISABLE

Syntax

AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context\_name
  ...
AUTHORITY-CHECK DISABLE END.

Effect

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... and AUTHORITY-CHECK DISABLE END. form a statement block to activate and deactivate an [authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_auth_context_glosry.htm "Glossary Entry"). The statement can only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... activates the authorization context context\_name that is defined in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") bdef. An authorization context is active until the corresponding AUTHORITY-CHECK DISABLE END. statement is reached or until the statement block is left, for example, by a [RETURN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn.htm) or a [RAISE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm) statement.

The authorization context is active for all methods or functions that are called between AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END.. Statements with AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END. can be nested. In this case, the superset of all [authorization objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_object_glosry.htm "Glossary Entry") listed in all the active authorization contexts is disabled.

AUTHORITY-CHECK DISABLE END. deactivates the authorization context of the corresponding AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... statement.

The statement can only be used if the BDEF that defines the authorization context is on the stack. Since release 7.57, the statement can only be used in implementation classes of the BDEF that defines the authorization context.

Hint

The activation of an authorization context is either done explicitly by this statement or implicitly by registering a context for a handler method in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") with the notation [... for disabled ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_context.htm). In the latter case, an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statement block is implicitly generated for the corresponding methods in the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The explicit use of the statement block is not required.

Further Information

[RAP BDL - define authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_context.htm)

Executable Example

The example [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_auth_check_disable_abexa.htm) demonstrates AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statements with an unmanaged RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_auth_check_disable_abexa.htm)


### abeneml_auth_check_disable_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) →  [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check_disable.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20AUTHORITY-CHECK%20DISABLE%2C%20ABENEML_AUTH_CHECK_DISABLE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ABAP EML - AUTHORITY-CHECK DISABLE

This example demonstrates the ABAP EML statement AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. with an unmanaged RAP business object.

Data model

The CDS data model consists of the root entity DEMO\_UNMANAGED\_AUTH:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity DEMO\_UNMANAGED\_AUTH
as select from demo\_tab\_root\_7 {
  key key\_field,
  char1,
  char2,
  num1,
  num2
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UNMANAGED\_AUTH is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

unmanaged implementation in class bp\_demo\_unmanaged\_auth unique;
strict(2);
define authorization context ac1
{
  'AUTHOBJ1';
}
define authorization context ac2
for disable ( read )
{
  'AUTHOBJ2';
}
define behavior for DEMO\_UNMANAGED\_AUTH
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly ) key\_field;
}

Behavior implementation

For the above BDEF, one [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_AUTH. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The [handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_for_rap_behv.htm) do not contain any implementations. To demonstrate the statement AUTHORITY-CHECK DISABLE, multiple [AUTHORITY-CHECK OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm) statements are included in the read method that check the authorization. One of these statements is inside an AUTHORITY-CHECK DISABLE statement. An internal table that is declared in the global class is filled to log sy-subrc values that are returned by the individual AUTHORITY-CHECK OBJECT statements.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_auth\_check\_disable DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    METHODS:
      initialize\_dbtabs.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_auth\_check\_disable IMPLEMENTATION.
  METHOD main.
    READ ENTITY demo\_unmanaged\_auth
      FROM VALUE #( ( key\_field = 1 ) )
      RESULT FINAL(res).
    out->begin\_section( \`Demo for AUTHORITY-CHECK DISABLE\`
      )->write( bp\_demo\_unmanaged\_auth=>itab ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_7.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

A [RAP read operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_read_operation_glosry.htm "Glossary Entry") is carried out.

As shown above, the BDEF defines two [RAP authorization contexts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_auth_context_glosry.htm "Glossary Entry") using the demo authorization objects AUTHOBJ1 and AUTHOBJ2. For AUTHOBJ2, an authority check is disabled for read.

The output shows the entries of an internal which demonstrates the effect of the AUTHORITY-CHECK DISABLE statements that are implemented in the local class of the behavior pool. When an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement is used, the field EML\_STMNT\_USED is flagged. When an authorization context is activated, authority checks for the associated authorization objects are always successful and the returned value for sy-subrc is 0. See more information on the sy-subrc values returned by AUTHORITY-CHECK OBJECT statements in the [ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapauthority-check.htm).

Table entries:

-   The first two entries show the sy-subrc values returned by AUTHORITY-CHECK OBJECT statements that are used with the respective authorization objects. sy-subrc is only 0 for AUTHOBJ2 because the authorization context is defined with the addition ... for disable ( read ) in the BDEF which shows that the AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END is implicitly wrapped around this authorization context. This is not true for the authorization context ac1.
-   The third entry shows the effect of AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement which is used for the authorization context ac1. An AUTHORITY-CHECK OBJECT statement that is used within an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement has the effect that the sy-subrc value shows 0 indicating that the authorization context is disabled.
-   Note that putting the authorization context ac2 inside an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement is irrelevant because it is implicitly there due to the BDEF specification.


### abapauthority-check_disable.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20EML%20-%20AUTHORITY-CHECK%20DISABLE%2C%20ABAPAUTHORITY-CHECK_DISABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

ABAP EML - AUTHORITY-CHECK DISABLE

Syntax

AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context\_name
  ...
AUTHORITY-CHECK DISABLE END.

Effect

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... and AUTHORITY-CHECK DISABLE END. form a statement block to activate and deactivate an [authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_auth_context_glosry.htm "Glossary Entry"). The statement can only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... activates the authorization context context\_name that is defined in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") bdef. An authorization context is active until the corresponding AUTHORITY-CHECK DISABLE END. statement is reached or until the statement block is left, for example, by a [RETURN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn.htm) or a [RAISE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception.htm) statement.

The authorization context is active for all methods or functions that are called between AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END.. Statements with AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END. can be nested. In this case, the superset of all [authorization objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenauthorization_object_glosry.htm "Glossary Entry") listed in all the active authorization contexts is disabled.

AUTHORITY-CHECK DISABLE END. deactivates the authorization context of the corresponding AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... statement.

The statement can only be used if the BDEF that defines the authorization context is on the stack. Since release 7.57, the statement can only be used in implementation classes of the BDEF that defines the authorization context.

Hint

The activation of an authorization context is either done explicitly by this statement or implicitly by registering a context for a handler method in the [BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") with the notation [... for disabled ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_context.htm). In the latter case, an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statement block is implicitly generated for the corresponding methods in the [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The explicit use of the statement block is not required.

Further Information

[RAP BDL - define authorization context](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_context.htm)

Executable Example

The example [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_auth_check_disable_abexa.htm) demonstrates AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statements with an unmanaged RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_auth_check_disable_abexa.htm)


### abapset_entities.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20ENTITIES%2C%20ABAPSET_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET ENTITIES

Syntax

SET ENTITIES OF root\_ent BLOCKED*|*UNBLOCKED.

Additions:

[1\. ... BLOCKED](#!ABAP_ADDITION_1@1@)
[2\. ... UNBLOCKED](#!ABAP_ADDITION_2@2@)

Effect

Blocks or unblocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry"). The statement can only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

root\_ent stands for the full name of a [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") which must be specified. The statement is only allowed in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") of the specified RAP BO root entity. The following restrictions apply to the specification of root\_ent. These are not allowed:

-   [Child entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_entity_glosry.htm "Glossary Entry")
-   [Abstract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") root entities
-   [Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") root entities
-   [Projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") root entities
-   [Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_extension_glosry.htm "Glossary Entry")

ABAP EML requests are blocked or unblocked for the following statements when using the SET ENTITIES statements for the specified root entities:

-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm)
-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm)
-   [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions.htm)
-   [SET LOCKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks.htm)

The blocking is valid until the end of a [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry"). For each RAP BO root entity blocked in one or more statements, an internal counter is incremented in case of a SET ENTITIES OF ... BLOCKED statement and decremented in case of a SET ENTITIES OF ... UNBLOCKED statement. The counter cannot be negative. The value 0 in the counter means unblocked and a value greater than 0 means blocked. The value in the counter is only visible in the short dump message mentioned below.

sy-subrc is set by the statement with both additions BLOCKED and UNBLOCKED in the same way:

-   0: The blocking status has changed successfully.
-   4: Set whenever the status blocked or unblocked has not changed for the specified root entity.

Hints

-   A [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") is raised for blocked statements with the exception CX\_ABAP\_BEHV\_RUNTIME\_ERROR. The short dump contains the following information:
    -   The affected RAP BO root entity
    -   The current blocking counter for the affected root entity
    -   The source position of the last SET ENTITIES OF ... BLOCKED statement for the affected root entity
-   ABAP EML statements with the addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm) are affected in the same way as ABAP EML statements without the addition.
-   In [RAP create-by-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") and [read-by-association operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") in the context of [cross-BO associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cross_bo_assoc_glosry.htm "Glossary Entry"), the affected source root entity and affected target root entity are checked for blockings.

Addition 1   

... BLOCKED.

Effect

Blocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Addition 2   

... UNBLOCKED.

Effect

Unblocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Executable Example

The example [SET ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_set_entities_abexa.htm) demonstrates the SET ENTITIES statements with a managed RAP BO. Note that this example produces a short dump.

Continue
![Example](exa.gif "Example") [SET ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_set_entities_abexa.htm)


### abeneml_set_entities_abexa.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) →  [SET ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_entities.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20ENTITIES%2C%20ABENEML_SET_ENTITIES_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET ENTITIES

This example demonstrates the SET ENTITIES statements with a managed RAP BO. Note that this example produces a short dump.

Data model

The CDS data model consists of the root entity DEMO\_ROOT\_M:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define root view entity demo\_root\_m as select from demo\_tab\_root
{
  key key\_field,
  data\_field1\_root,
  data\_field2\_root
}

Behavior definition

The [RAP behavior definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_ROOT\_M is defined in [RAP BDL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

managed implementation in class bp\_demo\_root\_m unique;
strict ( 2 );
define behavior for demo\_root\_m alias root
persistent table demo\_tab\_root
lock master
authorization master ( global )
{
  create;
  update;
  delete;
  field ( readonly : update ) key\_field;
  action act;
  action act\_block;
}

Behavior implementation

For the above BDEF, one [behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_ROOT\_M. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The [handler methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_for_rap_behv.htm) for the two actions are implemented in a way to demonstrate the effect of the statement SET ENTITIES.

Source Code   

\* Public class definition
CLASS cl\_demo\_rap\_eml\_set\_entities DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
    METHODS constructor.
  PRIVATE SECTION.
    DATA:
      i TYPE REF TO if\_demo\_input,
      a TYPE abap\_bool,
      b TYPE abap\_bool,
      f TYPE RESPONSE FOR FAILED demo\_root\_m,
      r TYPE RESPONSE FOR REPORTED demo\_root\_m.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rap\_eml\_set\_entities IMPLEMENTATION.
  METHOD main.
    out->begin\_section(
    \`Demo: SET ENTITIES ... BLOCKED/UNBLOCKED\` ).
    "Creating instances
    MODIFY ENTITY demo\_root\_m
       CREATE FIELDS ( key\_field data\_field1\_root
                       data\_field2\_root )
       WITH VALUE #(
         ( %cid = 'cid1'
           key\_field = 1
           data\_field1\_root = \`aaa\`
           data\_field2\_root = \`bbb\` )
          ( %cid = 'cid2'
            key\_field = 2
            data\_field1\_root = \`ccc\`
            data\_field2\_root = \`ddd\` ) )
       FAILED f
       REPORTED r.
    COMMIT ENTITIES.
    IF sy-subrc <> 0.
      out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
    ENDIF.
    SELECT \* FROM demo\_tab\_root
      ORDER BY key\_field
      INTO TABLE @DATA(itab).
    out->write\_doc( \`Entries after RAP modify operation\` ).
    out->write( itab ).
    "Providing input
    i->add\_text( \`Select one of the following options:\` ).
    i->add\_field(
      EXPORTING as\_checkbox = abap\_true
                text = \`without SET ENTITIES OF ... BLOCKED/UNBLOCKED\`
      CHANGING field = a ).
    i->add\_line( ).
    "Note: When executing this action, a short dump occurs
    "for demonstration purposes.
    i->add\_field(
      EXPORTING as\_checkbox = abap\_true
      text = \`with SET ENTITIES OF ... BLOCKED/UNBLOCKED (Dump!)\`
      CHANGING field = b ).
    i->request( ).
    IF ( a = abap\_true AND b = abap\_true )
    OR ( a = abap\_false AND b = abap\_false ).
      out->write\_doc( \`Action execution has not been triggered. \` &&
      \`Select one of the options.\` ).
    ENDIF.
    IF a = abap\_true AND b = abap\_false.
      MODIFY ENTITY demo\_root\_m
             EXECUTE act FROM VALUE #( ( key\_field = 1 )
                                       ( key\_field = 2 ) )
             FAILED f
             REPORTED r.
      COMMIT ENTITIES.
      IF sy-subrc <> 0.
        out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
      ENDIF.
      SELECT \* FROM demo\_tab\_root
        ORDER BY key\_field
        INTO TABLE @DATA(itab1).
      out->write\_doc( \`Entries after executing action without SET \` &&
      \`ENTITIES OF ... BLOCKED/UNBLOCKED statement\` ).
      out->write( itab1 ).
    ENDIF.
    IF a = abap\_false AND b = abap\_true.
      MODIFY ENTITY demo\_root\_m
         EXECUTE act\_block FROM VALUE #( ( key\_field = 1 )
                                         ( key\_field = 2 ) )
         FAILED f
         REPORTED r.
      COMMIT ENTITIES.
      IF sy-subrc <> 0.
        out->write\_doc( \`An issue occurred in the RAP save sequence.\` ).
      ENDIF.
    ENDIF.
  ENDMETHOD.
  METHOD constructor.
    super->constructor( ).
    i = cl\_demo\_input=>new( ).
    DELETE FROM demo\_tab\_root.
  ENDMETHOD.
ENDCLASS.

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP class:

-   Two RAP BO instances are created in a [RAP modify operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") and persisted to the database.
-   Depending on the selection, either the first or the second action is executed. Both actions include another modify operation to update instances. One action includes SET ENTITIES statements. If this action is executed, a short dump is produced. In the short dump message, you will also see value for the counter.


### abapset_entities.htm

  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20ENTITIES%2C%20ABAPSET_ENTITIES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET ENTITIES

Syntax

SET ENTITIES OF root\_ent BLOCKED*|*UNBLOCKED.

Additions:

[1\. ... BLOCKED](#!ABAP_ADDITION_1@1@)
[2\. ... UNBLOCKED](#!ABAP_ADDITION_2@2@)

Effect

Blocks or unblocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry"). The statement can only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

root\_ent stands for the full name of a [RAP BO root entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_root_entity_glosry.htm "Glossary Entry") which must be specified. The statement is only allowed in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") of the specified RAP BO root entity. The following restrictions apply to the specification of root\_ent. These are not allowed:

-   [Child entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenchild_entity_glosry.htm "Glossary Entry")
-   [Abstract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_abstract_entity_glosry.htm "Glossary Entry") root entities
-   [Interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_interface_glosry.htm "Glossary Entry") root entities
-   [Projection](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") root entities
-   [Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_extension_glosry.htm "Glossary Entry")

ABAP EML requests are blocked or unblocked for the following statements when using the SET ENTITIES statements for the specified root entities:

-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmodify_entity_entities.htm)
-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_entity_entities.htm)
-   [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_permissions.htm)
-   [SET LOCKS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locks.htm)

The blocking is valid until the end of a [RAP transaction](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_luw_glosry.htm "Glossary Entry"). For each RAP BO root entity blocked in one or more statements, an internal counter is incremented in case of a SET ENTITIES OF ... BLOCKED statement and decremented in case of a SET ENTITIES OF ... UNBLOCKED statement. The counter cannot be negative. The value 0 in the counter means unblocked and a value greater than 0 means blocked. The value in the counter is only visible in the short dump message mentioned below.

sy-subrc is set by the statement with both additions BLOCKED and UNBLOCKED in the same way:

-   0: The blocking status has changed successfully.
-   4: Set whenever the status blocked or unblocked has not changed for the specified root entity.

Hints

-   A [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") is raised for blocked statements with the exception CX\_ABAP\_BEHV\_RUNTIME\_ERROR. The short dump contains the following information:
    -   The affected RAP BO root entity
    -   The current blocking counter for the affected root entity
    -   The source position of the last SET ENTITIES OF ... BLOCKED statement for the affected root entity
-   ABAP EML statements with the addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapin_local_mode.htm) are affected in the same way as ABAP EML statements without the addition.
-   In [RAP create-by-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") and [read-by-association operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_rba_operation_glosry.htm "Glossary Entry") in the context of [cross-BO associations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_cross_bo_assoc_glosry.htm "Glossary Entry"), the affected source root entity and affected target root entity are checked for blockings.

Addition 1   

... BLOCKED.

Effect

Blocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Addition 2   

... UNBLOCKED.

Effect

Unblocks the ABAP EML access to [RAP business objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry").

Executable Example

The example [SET ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_set_entities_abexa.htm) demonstrates the SET ENTITIES statements with a managed RAP BO. Note that this example produces a short dump.

Continue
![Example](exa.gif "Example") [SET ENTITIES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_set_entities_abexa.htm)
