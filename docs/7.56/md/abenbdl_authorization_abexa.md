  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior characteristics](javascript:call_link\('abenbdl_character.htm'\)) →  [CDS BDL - authorization](javascript:call_link\('abenbdl_authorization.htm'\)) → 

CDS BDL - global authorization

This example demonstrates how a global authorization check is defined, implemented, and consumed in an unmanaged RAP BO.

Data model

The CDS data model consists of the root entity DEMO\_RAP\_UNMANAGED\_AUTH and its child entity DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD.

Root entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'CDS view entity, RAP unmanaged, auth'
define root view entity DEMO\_RAP\_UNMANAGED\_AUTH
  as select from demo\_dbtab\_root
  composition \[1..\*\] of DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD as \_child
  association \[1..1\] to DEMO\_RAP\_MANAGED\_ASSOC\_EXT   as \_ext
    on $projection.KeyFieldRoot = \_ext.KeyFieldExt
{
  key key\_field      as KeyFieldRoot,
      data\_field     as DataFieldRoot,
      char\_field     as CharFieldRoot,
      dec\_field      as DecFieldRoot,
      @Semantics.systemDateTime.lastChangedAt: true
      crea\_date\_time as Timestamp,
      @Semantics.systemDateTime.localInstanceLastChangedAt: true
      lchg\_date\_time as LastChangedAt,
      \_child,
      \_ext
}

Child entity:

@AccessControl.authorizationCheck: #NOT\_REQUIRED            
@EndUserText.label: 'CDS view entity, RAP unmanaged, auth'
define view entity DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD
  as select from demo\_dbtab\_child
  association to parent DEMO\_RAP\_UNMANAGED\_AUTH as \_parent  
  on $projection.KeyField = \_parent.KeyFieldRoot
{
  key key\_field       as KeyField,
  key key\_field\_child as KeyFieldChild,
      data\_field      as DataFieldChild,
      \_parent
}

Behavior definition

The [CDS behavior definition](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") DEMO\_RAP\_UNMANAGED\_AUTH is defined in [CDS BDL](javascript:call_link\('abencds_bdl_glosry.htm'\) "Glossary Entry") as shown below. It defines the root view entity as [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry") and the child entity as authorization dependent entity.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_auth unique;
strict;
define behavior for DEMO\_RAP\_UNMANAGED\_AUTH
lock master
authorization master (global)
{
  create;
  update;
  delete;
  association \_child {create;}
}
define behavior for DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly ) KeyField;
  association \_parent { }
}

Behavior implementation

For the above CDS behavior definition, one [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") is created. The global class of the behavior pool is BP\_DEMO\_RAP\_UNMANAGED\_AUTH. This global class implements the method get\_global\_auth for global authorization control (see CCIMP include). It works as follows:

-   For incoming update requests, authorization is always granted.
-   For incoming delete requests, authorization is always rejected and an error message is written into the [REPORTED](javascript:call_link\('abapeml_response.htm'\)) structure.
    
    Note: This is a very simple example to demonstrate how to implement global authorizations. A realistic implementation requires an instance-independent authorization check, for example, based on authorization objects.
    

Source Code

REPORT demo\_rap\_unmanaged\_auth.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA(out) = cl\_demo\_output=>new(  ).
DELETE FROM demo\_dbtab\_root.
DELETE FROM demo\_dbtab\_child.
    MODIFY ENTITIES OF demo\_rap\_unmanaged\_auth
         ENTITY demo\_rap\_unmanaged\_auth
           CREATE
             SET FIELDS WITH VALUE #(
              ( %cid = '1' KeyFieldRoot = 1 CharFieldRoot = 'A' )
              ( %cid = '2' KeyFieldRoot = 2 CharFieldRoot = 'B' )
              ( %cid = '3' KeyFieldRoot = 3 CharFieldRoot = 'C' ) )
     ENTITY demo\_rap\_unmanaged\_auth
        CREATE BY \\\_child
          SET FIELDS WITH VALUE #(
          (
          %cid\_ref  = '1'
            %target   = VALUE #(
            ( KeyFieldChild = 111 DataFieldChild = 'AAA' )
            ( KeyFieldChild = 222 DataFieldChild = 'BBB' ) ) ) )
               MAPPED DATA(mapped)
               FAILED DATA(failed)
               REPORTED DATA(reported).
    COMMIT ENTITIES.
    SELECT key\_field, data\_field, char\_field
    FROM demo\_dbtab\_root
    ORDER BY key\_field ASCENDING
    INTO TABLE @DATA(result).
    SELECT key\_field, key\_field\_child, data\_field
    FROM demo\_dbtab\_child
    INTO TABLE @DATA(result\_child).
    MODIFY ENTITIES OF demo\_rap\_unmanaged\_auth
       ENTITY demo\_rap\_unmanaged\_auth
       UPDATE SET FIELDS WITH VALUE #(
       ( KeyFieldRoot = 1 DataFieldRoot = 'aa' )
       ( KeyFieldRoot = 2 DataFieldRoot = 'bb' ) )
          MAPPED mapped
          FAILED  failed
          REPORTED reported.
    COMMIT ENTITIES.
    SELECT key\_field, data\_field, char\_field
    FROM demo\_dbtab\_root
    ORDER BY key\_field ASCENDING
    INTO TABLE @DATA(result1).
    MODIFY ENTITIES OF demo\_rap\_unmanaged\_auth
       ENTITY demo\_rap\_unmanaged\_auth
   DELETE  FROM VALUE #( ( KeyFieldRoot = 3  ) )
   ENTITY demo\_rap\_unmanaged\_auth\_child
   DELETE FROM VALUE #( (  KeyField = 1 KeyFieldChild = 111 ) )
   FAILED failed
   REPORTED reported.
    TYPES: BEGIN OF reported\_structure,
             message TYPE if\_abap\_behv\_message=>t\_severity,
             msgv1   TYPE symsgv,
           END OF reported\_structure.
    TYPES reported\_table\_type TYPE TABLE OF reported\_structure.
    DATA failed\_entities TYPE reported\_table\_type.
    LOOP AT reported-demo\_rap\_unmanaged\_auth
      ASSIGNING FIELD-SYMBOL(<rep>).
      APPEND VALUE #(
      message = <rep>-%msg->m\_severity
      msgv1 = <rep>-%msg->if\_t100\_dyn\_msg~msgv1
       ) TO failed\_entities.
    ENDLOOP.
    COMMIT ENTITIES.
    SELECT key\_field, key\_field\_child, data\_field
    FROM demo\_dbtab\_child
    INTO TABLE @DATA(result\_child1).
    out->next\_section( 'Parent table after create'
    )->write( result
    )->next\_section( 'Child table after create'
    )->write( result\_child
    )->next\_section( 'Parent table after update'
    )->write( result1
    )->next\_section( 'Delete: authorization failed'
    )->write( failed\_entities
    )->next\_section( 'Child table after delete'
    )->write( result\_child1
    )->display(  ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Access with ABAP using EML

The above source code uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") from an ABAP program:

-   Three instances of the parent entity and two instances of the child entity are created with the statement MODIFY ENTITY.
-   Two instances of the parent entity are updated. This update is authorized.
-   The EML consumer tries to delete an instance of the parent entity and an instance of the child entity. The delete operation on the parent entity is not authorized and the operation fails. The delete operation on the child entity is directed to the authorization master entity (in this example the same as the parent entity). It is interpreted as update request of the authorization master entity. Update operations are authorized, so the delete operation of the child entity instance is successful.
-   Using the ABAP SQL SELECT statement, the content of the parent and child tables after the create, update, and delete operations are displayed. For the failed delete operation of the parent entity, an error message is returned.