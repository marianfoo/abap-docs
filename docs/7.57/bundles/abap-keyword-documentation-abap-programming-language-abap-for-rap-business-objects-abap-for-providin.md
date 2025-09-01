# ABAP - Keyword Documentation / ABAP - Programming Language / ABAP for RAP Business Objects / ABAP for Providing RAP Business Objects / ABAP EML - Providing RAP BOs

Included pages: 8


### abeneml_in_abp.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - Providing RAP BOs, ABENEML_IN_ABP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

ABAP EML - Providing RAP BOs

The following EML language elements can only be used in behavior implementations:

-   [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapin_local_mode.htm)
-   [MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_aug_entity_entities.htm)

Further Information

Make sure that you fulfill the [RAP Business Object Contract](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry") when implementing RAP operations. Follow the implementation guidelines as outlined in the development guide for the ABAP RESTful Application Programming Model, section RAP Business Object Contract.

Find a selected set of guidelines in the topic [RAP Business Object Contract - Overview](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaprap_bo_contract.htm).

Continue
[ABAP EML - IN LOCAL MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapin_local_mode.htm)
[ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_aug_entity_entities.htm)
[ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check_disable.htm)


### abapin_local_mode.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - IN LOCAL MODE, ABAPIN_LOCAL_MODE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

ABAP EML - IN LOCAL MODE

Syntax

... IN LOCAL MODE ...

Effect

The addition is used to exclude feature controls and authorization checks. It can be added to the following EML statements:

-   [READ ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm)
-   [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm)

It can currently only be used for in RAP BO implementations for the particular RAP BO itself, i. e. not for other RAP BOs. That means IN LOCAL MODE can only be used for this RAP BO's implementation classes in the behavior pool or other classes that are called from those implementation classes (for example, legacy code or other reused logic contained elsewhere). The reused logic contained elsewhere cannot be referred to by RAP statically. In that case, a warning is displayed in [ADT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadt_glosry.htm "Glossary Entry"). Yet, at runtime, there will not be an issue if this logic is called via the implementation classes of this RAP BO. If the reused logic is not called from the implementation classes of this RAP BO or it is called indirectly, a short dump is the consequence. For example, if the logic is called from a report (the implementation class of the RAP BO is not called at all) or if, at runtime, another RAP BO is meanwhile involved.

Example use case: A field to display the booking status of a trip on an SAP Fiori UI is specified as readonly in a [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry"). Hence, it cannot be modified by a user on the UI directly. For example, the status of a trip is set to and displayed as "not booked". A button on the UI triggers an action to book the trip. With clicking the button, the status gets changed and "booked" is displayed. To enable this, the underlying modify operation with the action to be executed in the ABP has the addition IN LOCAL MODE that ignores the feature control.

Hint

-   ABAP EML [MODIFY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) and [READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapread_entity_entities.htm) statements using the addition [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapin_local_mode.htm) are not allowed in [BAdIs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbadi_glosry.htm "Glossary Entry") and should only be used in [ABAP behavior pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

Example

The following source code section is taken from the CCIMP include of a behavior pool (the global class of the behavior pool is BP\_DEMO\_MANAGED\_ROOT\_3). It is used in the context of the get\_instance\_features method of the executable example DEMO\_RAP\_EML\_GET\_PERMISSIONS.

READ ENTITIES OF demo\_managed\_root\_3 IN LOCAL MODE
  ENTITY demo\_managed\_root\_3
  FIELDS ( data\_field3\_root data\_field4\_root )
  WITH CORRESPONDING #( keys )
  RESULT DATA(lt\_numbers)
  FAILED DATA(failed).


### abapmodify_aug_entity_entities.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES, ABAPMODIFY_AUG_ENTITY_ENTITIES, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES

Syntax

MODIFY AUGMENTING *{* ENTITY bdef
                      [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]* *}*
                *|* *{* ENTITIES OF bdef
                      ENTITY bdef1 [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]*
                     *\[*ENTITY bdef2 [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]**\]*
                     *\[*...*\]* *}*.

Alternatives:

[1\. MODIFY AUGMENTING ENTITY ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. MODIFY AUGMENTING ENTITIES OF ...](#!ABAP_ALTERNATIVE_2@2@)

Addition:

[... RELATING TO orig BY rela](#!ABAP_ONE_ADD@1@)

Effect

A special variant of [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) that is only possible in the context of [projections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_projection.htm). The variant can only be used by a [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and is used to manipulate the request for the base BO in the handler implementation. Only entities of the base BO can be modified by this statement. All [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrud_glosry.htm "Glossary Entry") are allowed including actions.

Hints

-   For the statements, no [response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) can be specified, i.e. the additions FAILED, MAPPED or REPORTED cannot be used.
-   An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation.
-   An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.

Further Information

-   [CDS BDL - augment, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_augment_projection.htm)
-   Development guide for the ABAP RESTful Application Programming Model, section Operation Augmentation.

Alternative 1   

MODIFY AUGMENTING ENTITY ...

Effect

Short form. Used to manipulate the request for the base BO in the handler implementation. bdef must be the full name, i. e. not the alias name, of the projected root BO. Multiple operations can be specified for [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) within a single MODIFY statement. However, in this case, it must be ensured that the importing parameters for the corresponding methods are available.

Alternative 2   

MODIFY AUGMENTING ENTITIES ...

Effect

Long form. Used to manipulate the request for the base BO in the handler implementation including one or more RAP BO entities. bdef must be the full name, i. e. not the alias name, of the projected root BO.

bdef must be the full name, i. e. not the alias name, of the projected root BO followed by a list of operations grouped by individual entities. bdef1, bdef2, and so on, must be entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the root entity bdef. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after MODIFY AUGMENTING ENTITIES OF bdef has the same syntax as the short form. At least one entry (ENTITY bdef/bdef1/... with an operation) must be specified. The same entity can be specified after ENTITY repeatedly, however, the same operation in that combination is allowed only once. operations must be specified as outlined in the topic [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm).

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

The example [ABAP EML - MODIFY ENTITY AUGMENTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_augmenting_abexa.htm) demonstrates the addition AUGMENTING with a RAP projection business object.

Continue
![Example](exa.gif "Example") [ABAP EML - MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_augmenting_abexa.htm)


### abeneml_modify_augmenting_abexa.htm

  

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


### abapmodify_aug_entity_entities.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES, ABAPMODIFY_AUG_ENTITY_ENTITIES, 757%0D
%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - MODIFY AUGMENTING ENTITY, ENTITIES

Syntax

MODIFY AUGMENTING *{* ENTITY bdef
                      [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]* *}*
                *|* *{* ENTITIES OF bdef
                      ENTITY bdef1 [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]*
                     *\[*ENTITY bdef2 [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) *\[*RELATING TO orig BY rela*\]**\]*
                     *\[*...*\]* *}*.

Alternatives:

[1\. MODIFY AUGMENTING ENTITY ...](#!ABAP_ALTERNATIVE_1@1@)
[2\. MODIFY AUGMENTING ENTITIES OF ...](#!ABAP_ALTERNATIVE_2@2@)

Addition:

[... RELATING TO orig BY rela](#!ABAP_ONE_ADD@1@)

Effect

A special variant of [MODIFY ENTITY, ENTITIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities.htm) that is only possible in the context of [projections](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_define_view_as_projection.htm). The variant can only be used by a [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") and is used to manipulate the request for the base BO in the handler implementation. Only entities of the base BO can be modified by this statement. All [standard operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencrud_glosry.htm "Glossary Entry") are allowed including actions.

Hints

-   For the statements, no [response parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapeml_response.htm) can be specified, i.e. the additions FAILED, MAPPED or REPORTED cannot be used.
-   An ABAP EML MODIFY statement using the addition AUGMENTING must not overwrite fields of the original request, i. e. there must not be a flag in %control which is set for the same instance and field both in the original and in the augmenting operation.
-   An ABAP EML MODIFY statement using the addition AUGMENTING containing operations on instances which are not contained in the original request should relate these instances to instances of the original request by use of the RELATING clause so that responses can be associated.

Further Information

-   [CDS BDL - augment, projection BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_augment_projection.htm)
-   Development guide for the ABAP RESTful Application Programming Model, section Operation Augmentation.

Alternative 1   

MODIFY AUGMENTING ENTITY ...

Effect

Short form. Used to manipulate the request for the base BO in the handler implementation. bdef must be the full name, i. e. not the alias name, of the projected root BO. Multiple operations can be specified for [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm) within a single MODIFY statement. However, in this case, it must be ensured that the importing parameters for the corresponding methods are available.

Alternative 2   

MODIFY AUGMENTING ENTITIES ...

Effect

Long form. Used to manipulate the request for the base BO in the handler implementation including one or more RAP BO entities. bdef must be the full name, i. e. not the alias name, of the projected root BO.

bdef must be the full name, i. e. not the alias name, of the projected root BO followed by a list of operations grouped by individual entities. bdef1, bdef2, and so on, must be entities contained in the [composition tree](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_composition_tree_glosry.htm "Glossary Entry") of the root entity bdef. The root entity itself can also be inserted in the position of bdef1, for example. Each part of the list of operations specified after MODIFY AUGMENTING ENTITIES OF bdef has the same syntax as the short form. At least one entry (ENTITY bdef/bdef1/... with an operation) must be specified. The same entity can be specified after ENTITY repeatedly, however, the same operation in that combination is allowed only once. operations must be specified as outlined in the topic [operations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_entity_entities_op.htm).

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

The example [ABAP EML - MODIFY ENTITY AUGMENTING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_augmenting_abexa.htm) demonstrates the addition AUGMENTING with a RAP projection business object.

Continue
![Example](exa.gif "Example") [ABAP EML - MODIFY AUGMENTING ENTITY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_modify_augmenting_abexa.htm)


### abapauthority-check_disable.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - AUTHORITY-CHECK DISABLE, ABAPAUTHORITY-CHECK_DISABLE, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - AUTHORITY-CHECK DISABLE

Syntax

AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context\_name
  ...
AUTHORITY-CHECK DISABLE END.

Effect

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... and AUTHORITY-CHECK DISABLE END. form a statement block to activate and deactivate an [authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry").

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... activates the authorization context context\_name that is defined in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") bdef. An authorization context is active until the corresponding AUTHORITY-CHECK DISABLE END. statement is reached or until the statement block is left, for example, by a [RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm) or a [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm) statement.

The authorization context is active for all methods or functions that are called between AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END.. Statements with AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END. can be nested. In this case, the superset of all [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") listed in all the active authorization contexts is disabled.

AUTHORITY-CHECK DISABLE END. deactivates the authorization context of the corresponding AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... statement.

The statement can only be used if the BDEF that defines the authorization context is on the stack. Since release 7.57, the statement can only be used in implementation classes of the BDEF that defines the authorization context.

Hints

-   The activation of an authorization context is either done explicitly by this statement or implicitly by registering a context for a handler method in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") with the notation [... for disabled ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm). In the latter case, an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statement block is implicitly generated for the corresponding methods in the [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The explicit use of the statement block is not required.
-   AUTHORITY-CHECK DISABLE statements are not allowed outside of [FOR PRECHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_precheck.htm), [FOR *\[*INSTANCE*\]* AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_auth.htm), [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_global_auth.htm) and [FOR READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_read.htm) [RAP handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") since the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must ensure that the data in the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") is always compliant with regard to authorization.

Further Information

[CDS BDL - define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm)

Executable Example

The example [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_auth_check_disable_abexa.htm) demonstrates AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statements with an unmanaged RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_auth_check_disable_abexa.htm)


### abeneml_auth_check_disable_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) →  [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check_disable.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - AUTHORITY-CHECK DISABLE, ABENEML_AUTH_CHECK_DISABLE_ABEXA, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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

The [CDS behavior definition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") DEMO\_UNMANAGED\_AUTH is defined in [CDS BDL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_bdl_glosry.htm "Glossary Entry") as follows:

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
}

Behavior implementation

For the above BDEF, one [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_UNMANAGED\_AUTH. The actual behavior implementation takes place in local classes that are defined and implemented in the CCIMP include of the behavior pool. The [handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmethods_for_rap_behv.htm) do not contain any implementations. To demonstrate the statement AUTHORITY-CHECK DISABLE, multiple [AUTHORITY-CHECK OBJECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm) statements are included in the read method that check the authorization. One of these statements is inside an AUTHORITY-CHECK DISABLE statement. An internal table that is declared in the global class is filled to log sy-subrc values that are returned by the individual AUTHORITY-CHECK OBJECT statements.

Source Code   

REPORT demo\_rap\_auth\_check\_disable.
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
    READ ENTITY DEMO\_UNMANAGED\_AUTH
      FROM VALUE #( ( key\_field = 1 ) )
      RESULT FINAL(res).
    out->begin\_section( \`Demo for AUTHORITY-CHECK DISABLE\`
      )->write( bp\_demo\_unmanaged\_auth=>itab ).
    out->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    out = cl\_demo\_output=>new( ).
    initialize\_dbtabs( ).
  ENDMETHOD.
  METHOD initialize\_dbtabs.
    DELETE FROM demo\_tab\_root\_7.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Access with ABAP using EML

The above source code uses [EML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_glosry.htm "Glossary Entry") to access the RAP business object from an ABAP program:

A [RAP read operation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_read_operation_glosry.htm "Glossary Entry") is carried out.

As shown above, the BDEF defines two [RAP authorization contexts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry") using the demo authorization objects AUTHOBJ1 and AUTHOBJ2. For AUTHOBJ2, an authority check is disabled for read.

The output shows the entries of an internal which demonstrates the effect of the AUTHORITY-CHECK DISABLE statements that are implemented in the local class of the behavior pool. When an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement is used, the field EML\_STMNT\_USED is flagged. When an authorization context is activated, authority checks for the associated authorization objects are always successful and the returned value for sy-subrc is 0. See more information on the sy-subrc values returned by AUTHORITY-CHECK OBJECT statements in the [ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapauthority-check.htm).

Table entries:

-   The first two entries show the sy-subrc values returned by AUTHORITY-CHECK OBJECT statements that are used with the respective authorization objects. sy-subrc is only 0 for AUTHOBJ2 because the authorization context is defined with the addition ... for disable ( read ) in the BDEF which shows that the AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END is implicitly wrapped around this authorization context. This is not true for the authorization context ac1.
-   The third entry shows the effect of AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement which is used for the authorization context ac1. An AUTHORITY-CHECK OBJECT statement that is used within an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement has the effect that the sy-subrc value shows 0 indicating that the authorization context is disabled.
-   Note that putting the authorization context ac2 inside an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END statement is irrelevant because it is implicitly there due to the BDEF specification.


### abapauthority-check_disable.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP for RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_for_rap_bos.htm) →  [ABAP for Providing RAP Business Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_provide_rap_bos.htm) →  [ABAP EML - Providing RAP BOs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_in_abp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP EML - AUTHORITY-CHECK DISABLE, ABAPAUTHORITY-CHECK_DISABLE, 757%0D%0A%0D%0AError
:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP EML - AUTHORITY-CHECK DISABLE

Syntax

AUTHORITY-CHECK DISABLE BEGIN CONTEXT bdef~context\_name
  ...
AUTHORITY-CHECK DISABLE END.

Effect

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... and AUTHORITY-CHECK DISABLE END. form a statement block to activate and deactivate an [authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_auth_context_glosry.htm "Glossary Entry").

AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... activates the authorization context context\_name that is defined in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") bdef. An authorization context is active until the corresponding AUTHORITY-CHECK DISABLE END. statement is reached or until the statement block is left, for example, by a [RETURN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreturn.htm) or a [RAISE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapraise_exception.htm) statement.

The authorization context is active for all methods or functions that are called between AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END.. Statements with AUTHORITY-CHECK DISABLE BEGIN ... and AUTHORITY-CHECK DISABLE END. can be nested. In this case, the superset of all [authorization objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenauthorization_object_glosry.htm "Glossary Entry") listed in all the active authorization contexts is disabled.

AUTHORITY-CHECK DISABLE END. deactivates the authorization context of the corresponding AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... statement.

The statement can only be used if the BDEF that defines the authorization context is on the stack. Since release 7.57, the statement can only be used in implementation classes of the BDEF that defines the authorization context.

Hints

-   The activation of an authorization context is either done explicitly by this statement or implicitly by registering a context for a handler method in the [BDEF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") with the notation [... for disabled ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm). In the latter case, an AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statement block is implicitly generated for the corresponding methods in the [behavior pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). The explicit use of the statement block is not required.
-   AUTHORITY-CHECK DISABLE statements are not allowed outside of [FOR PRECHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_precheck.htm), [FOR *\[*INSTANCE*\]* AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_auth.htm), [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_global_auth.htm) and [FOR READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaphandler_meth_read.htm) [RAP handler methods](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") since the [RAP BO provider](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrap_bo_provider_glosry.htm "Glossary Entry") must ensure that the data in the [transactional buffer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransactional_buffer_glosry.htm "Glossary Entry") is always compliant with regard to authorization.

Further Information

[CDS BDL - define authorization context](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbdl_authorization_context.htm)

Executable Example

The example [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_auth_check_disable_abexa.htm) demonstrates AUTHORITY-CHECK DISABLE BEGIN CONTEXT ... AUTHORITY-CHECK DISABLE END. statements with an unmanaged RAP BO.

Continue
![Example](exa.gif "Example") [ABAP EML - AUTHORITY-CHECK DISABLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeneml_auth_check_disable_abexa.htm)
