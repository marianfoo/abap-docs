  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - RAP Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_objects.htm) →  [ABAP CDS - RAP Business Objects (RAP BO)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_rap_business_objects.htm) →  [ABAP CDS - Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_bdef.htm) →  [ABAP CDS - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl.htm) →  [ABAP CDS - managed and unmanaged behavior definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_rap_bo.htm) →  [CDS BDL - entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_define_beh.htm) →  [CDS BDL - entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_character.htm) → 

CDS BDL - authorization

Syntax Forms

Declaration on entity level

... authorization master *{*( global )
                         *|*( instance )
                         *|*( global,instance )*}*
  *|* authorization dependent by \_Assoc ...
[RAP BO operation additions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm), declaration in the entity behavior body

... authorization:none

... authorization:update

Variants:

[1\. ... authorization master (  )](#!ABAP_VARIANT_1@1@)
[2\. ... authorization dependent by \_Assoc](#!ABAP_VARIANT_2@2@)
[3\. ... authorization:none](#!ABAP_VARIANT_3@3@)
[4\. ... authorization:update](#!ABAP_VARIANT_4@4@)

Effect

[Authorization control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") in RAP protects your business object against unauthorized access to data. Authorization control is defined in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") for each [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") separately and must be implemented in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). In the ABAP behavior pool, there are different methods for implementation for global and for instance authorization.

The following variants are available:

-   global
    -   Limits access to data or the permission to perform certain operations for a complete RAP BO, independent of individual instances, for example, depending on user roles.
    -   Can be specified for the following operations of an entity: [create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm), [create by association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry"), [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm), [delete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm), [static actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm), [instance actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm).
    -   Must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_global_auth.htm).
-   instance
    -   Authorization check that is dependent on the state of an entity instance.
    -   Can be specified for the following operations of an entity: [create by association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_association.htm), [update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm), [delete](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm), [instance actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm).
    -   Must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR INSTANCE AUTHORIZATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_auth.htm).
-   global,instance
    -   Global and instance authorization control can be combined. In this case, instance-based operations are checked in the global and in the instance authority check. Both RAP handler methods, [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaphandler_meth_global_auth.htm) and FOR INSTANCE AUTHORIZATION, must be implemented. The checks are executed at different points in time during runtime.

authorization master and authorization dependent are defined on entity level in the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") for each [entity behavior definition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entity_bdef_glosry.htm "Glossary Entry") separately. Currently, only [root entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_entity_glosry.htm "Glossary Entry") can be [authorization master entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry"). If a root entity is defined as authorization master entity, then it is recommended that each [child entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenchild_entity_glosry.htm "Glossary Entry") that is behavior-enabled is defined as an [authorization dependent entity](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_auth_dep_ent_glosry.htm "Glossary Entry").

Authorization checks must be implemented in the ABAP behavior pool. This can be done, for example, using [authorization objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenauthorization_object_glosry.htm "Glossary Entry").

Managed RAP BO

In a [managed RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry"), if the root entity is specified as authorization master, the [RAP framework](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_framework_glosry.htm "Glossary Entry") checks for each [RAP BO operation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_operation_glosry.htm "Glossary Entry") if there are any access restrictions.

Unmanaged RAP BO

In an [unmanaged RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry"), and if global authorization control is specified, the RAP framework checks for each RAP BO operation for are any access restrictions.

Caution: If instance authorization control is specified, this is not the case. The RAP framework does not call the method for instance authorization in unmanaged non-draft scenarios. If authorization control is relevant, it must be implemented in the respective method for each [modify operation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry"). Only in UI scenarios, the instance authorization control method has an effect on the [RAP consumer hints](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_consumer_hint_glosry.htm "Glossary Entry").

Draft-enabled RAP BO

In a [draft-enabled RAP BO](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_with_draft.htm), the RAP framework checks for each [standard operation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) on a draft instance whether there are any access restrictions. For the [draft actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_draft_action.htm) Resume and Edit, the authorization control for [create](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_standard_operations.htm) is checked. For the draft actions Activate, Discard, and Prepare, the authorization methods are not called. To prevent a draft instance from activation, the authorization check has to be implemented in a [validation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm).

Projection BO

In a [projection business object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), the authorization from the base business object is automatically inherited. If [new actions or functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_nonstandard_projection.htm) are defined in the projection layer, a new authorization control for these actions and functions can be defined. For further details, see topic [CDS BDL - authorization, projection BDEF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_projection.htm).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Authorization Control.

Hints

-   If [BDEF strict mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_strict.htm) is enabled, it is mandatory that each entity is marked either as authorization master or as authorization dependent.
-   The EML statement [IN LOCAL MODE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapin_local_mode.htm) can be used to skip authorization control.
-   A [RAP BO consumer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") can use the EML statement [GET PERMISSIONS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_permissions.htm) to check whether a RAP BO has authorization control implemented.
-   To limit read access to a business object, [Data Control Language (DCL)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendcl_glosry.htm "Glossary Entry") can be used.
-   Authorizations can also be checked in other ABP methods, for example, in [validations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_validations.htm).
-   In UI scenarios, authorization control is displayed as RAP consumer hint.

Example - managed, instance authorization

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_AUTHORIZATION. The root entity is defined as authorization master for instance authorization control.

managed implementation in class bp\_demo\_rap\_managed\_authorizat unique;
strict;
define behavior for DEMO\_RAP\_MANAGED\_AUTHORIZATION alias AuthMaster
persistent table demo\_dbtab\_root
lock master
authorization master ( instance )
{
  create;
  update;
  delete;
  mapping for demo\_dbtab\_root
  {
    KeyFieldRoot = key\_field;
    DataFieldRoot = data\_field;
    CharFieldRoot = char\_field;
  }
}

The implementation in the ABAP behavior pool specifies that delete operations are not allowed if an instance has the value B in the field DataFieldRoot.

METHOD get\_instance\_auth.
  READ ENTITIES OF demo\_rap\_managed\_authorization IN LOCAL MODE
        ENTITY AuthMaster
          FIELDS ( DataFieldRoot )
          WITH CORRESPONDING #( keys )
        RESULT DATA(lt\_status)
        FAILED failed.
  result = VALUE #( FOR ls\_status IN lt\_status
                     ( %tky    = ls\_status-%tky
                       %delete = COND #( WHEN ls\_status-DataFieldRoot = 'B'
                                         THEN if\_abap\_behv=>auth-unauthorized
                                         ELSE if\_abap\_behv=>auth-allowed ) ) ).
  IF requested\_authorizations-%delete EQ if\_abap\_behv=>auth-unauthorized.
    APPEND VALUE #( %msg = new\_message\_with\_text(
                    text = 'No authorization to delete this instance'
                    severity = if\_abap\_behv\_message=>severity-error )
                    %global   = if\_abap\_behv=>mk-on )
                    TO reported-authmaster.
  ENDIF.
ENDMETHOD.

The program DEMO\_RAP\_MANAGED\_AUTHORIZATION accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following actions:

-   It creates two instances of the root entity. One of them has the value B in field DataFieldRoot and therefore, the instance authorization control does not allow deleting this instance.
-   It tries to delete both entity instances. For one instance, the delete operation is successful. For the second entity instance, the delete operation is prevented by the authorization check. An error message is returned.

Result: For one entity instance, the delete operation fails. An error message is returned.

![Figure](bdoc_auth1.jpg)

Example - unmanaged, global authorization

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_AUTH. The parent entity is defined as authorization master for global authorization control and the child entity is defined as authorization dependent entity.

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

The implementation in the ABAP behavior pool specifies that update requests are generally authorized and delete requests are generally unauthorized.
Note: This example is simplistic. A realistic implementation requires a user-dependent authorization concept, for example, based on authorization objects.

METHOD get\_global\_auth.
  DATA: update\_granted TYPE abap\_bool,
        delete\_granted TYPE abap\_bool.
  " global authorization for update requests
  IF requested\_authorizations-%update EQ if\_abap\_behv=>mk-on.
    " full access granted
    update\_granted = abap\_true.
    IF update\_granted = abap\_true.
      result-%update = if\_abap\_behv=>auth-allowed.
    ELSE.
      result-%update = if\_abap\_behv=>auth-unauthorized.
      APPEND VALUE #( %msg      = new\_message\_with\_text(
                      severity = if\_abap\_behv\_message=>severity-error
                      text = 'operation not authorized!' ) )
                      TO reported-demo\_rap\_unmanaged\_auth.
    ENDIF.
  ENDIF.
  " global authorization for delete requests
  IF requested\_authorizations-%delete EQ if\_abap\_behv=>mk-on.
    " access for delete operations denied globally
    delete\_granted = abap\_false.
    IF delete\_granted = abap\_true.
      result-%delete = if\_abap\_behv=>auth-allowed.
    ELSE.
      result-%delete = if\_abap\_behv=>auth-unauthorized.
      APPEND VALUE #( %msg      = new\_message\_with\_text(
                      severity = if\_abap\_behv\_message=>severity-error
                      text = 'operation not authorized!' ) )
                      TO reported-demo\_rap\_unmanaged\_auth.
    ENDIF.
  ENDIF.
ENDMETHOD.

The program DEMO\_RAP\_UNMANAGED\_AUTH accesses the business object using [EML](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeneml_glosry.htm "Glossary Entry") and performs the following actions:

-   It creates three instances of the parent entity and two instances of the child entity. This is allowed, since no authorization restrictions are implemented for the create operation.
-   It updates two of the instances of the parent entity. This is allowed, the authorization check is successful.
-   It tries to delete an instance of the parent entity. This is prevented by the authorization check, since delete operations are forbidden. An error message is returned.
-   It deletes an instance of the child entity. This request is directed to the authorization master entity and it is interpreted as update request of the authorization master entity. The authorization check is successful and the child entity instance is deleted.

Executable Example

The example above is explained in detail in the executable example [CDS BDL - global authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_abexa.htm).

Variant 1   

... authorization master( )

Effect

Declares an entity as authorization master entity. Currently only available for root nodes. An entity is defined as authorization master if the operations of this entity have their own authorization implementation. That means in the behavior implementation of this entity, the authorization control must be implemented in the corresponding method for authorization (global or instance).

Variant 2   

... authorization dependent by \_Assoc

Effect

Defines an entity as authorization dependent. Modifying requests for this entity are directed to the authorization master entity. For update, delete, and [create-by-association operations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrap_cba_operation_glosry.htm "Glossary Entry") on an authorization-dependent entity, the authorization check for update of the authorization master entity is applied.

In the following cases, the authorization control must be implemented in separate methods for authorization in the behavior pool of the authorization-dependent entity:

-   [actions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_action.htm) of authorization dependent entities
-   create-enabled [cross-BO associations](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cross_bo_assoc_glosry.htm "Glossary Entry")
-   create-enabled associations which are not compositions

If the authorization master entity is not the parent entity of the authorization-dependent entity, then the association to the authorization master entity must be explicitly defined in the entity behavior definition using the syntax association \_AssocToAuthMaster { }.

Variant 3   

... authorization:none

Effect

Can be used as [RAP BO operation addition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) to exclude the operation in question from authorization checks. See [CDS BDL - authorization:none](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth.htm).

Variant 4   

... authorization:update

Effect

Can be used as [RAP BO operation addition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_operations_additions.htm) to delegate the authorization check. An operation specified as authorization:update has the same authorization control that is defined for the update operation. See [CDS BDL - authorization:update](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_actions_auth_update.htm).

Continue
![Example](exa.gif "Example") [CDS BDL - global authorization](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbdl_authorization_abexa.htm)