  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Characteristics](javascript:call_link\('abenbdl_character.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - authorization, ABENBDL_AUTHORIZATION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

CDS BDL - authorization

Syntax Forms

Declaration on entity level

... authorization master *{*( global )
                         *|*( instance )
                         *|*( global, instance )*}*
  *|* authorization dependent by \_Assoc ...
[RAP BO operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)), declaration in the entity behavior body

... authorization:none

... authorization:update

Variants:

[1\. ... authorization master (  )](#!ABAP_VARIANT_1@1@)
[2\. ... authorization dependent by \_Assoc](#!ABAP_VARIANT_2@2@)
[3\. ... authorization:none](#!ABAP_VARIANT_3@3@)
[4\. ... authorization:update](#!ABAP_VARIANT_4@4@)

Effect

[Authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") in RAP protects your business object against unauthorized access to data. Authorization control is defined in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") for each [entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry") separately and must be implemented in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"). In the ABAP behavior pool, there are different methods for implementation for global and for instance authorization.

The following variants are available:

-   global
    -   Limits access to data or the permission to perform certain operations for a complete RAP BO, independent of individual instances, for example, depending on user roles.
    -   Can be specified for the following operations of an entity: [create](javascript:call_link\('abenbdl_standard_operations.htm'\)), [create by association](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenbdl_standard_operations.htm'\)), [delete](javascript:call_link\('abenbdl_standard_operations.htm'\)), [static actions](javascript:call_link\('abenbdl_action.htm'\)), [instance actions](javascript:call_link\('abenbdl_action.htm'\)).
    -   Must be implemented in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR GLOBAL AUTHORIZATION](javascript:call_link\('abaphandler_meth_global_auth.htm'\)).
-   instance
    -   Authorization check that is dependent on the state of an entity instance.
    -   Can be specified for the following operations of an entity: [create by association](javascript:call_link\('abenbdl_association.htm'\)), [update](javascript:call_link\('abenbdl_standard_operations.htm'\)), [delete](javascript:call_link\('abenbdl_standard_operations.htm'\)), [instance actions](javascript:call_link\('abenbdl_action.htm'\)).
    -   Must be implemented in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR INSTANCE AUTHORIZATION](javascript:call_link\('abaphandler_meth_auth.htm'\)).
-   global, instance
    -   Global and instance authorization control can be combined. In this case, instance-based operations are checked in the global and in the instance authority check. Both RAP handler methods, [FOR GLOBAL AUTHORIZATION](javascript:call_link\('abaphandler_meth_global_auth.htm'\)) and FOR INSTANCE AUTHORIZATION, must be implemented. The checks are executed at different points in time during runtime.

authorization master and authorization dependent are defined on entity level in the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") for each [entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry") separately. Currently, only [root entities](javascript:call_link\('abenroot_entity_glosry.htm'\) "Glossary Entry") can be [authorization master entities](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry"). If a root entity is defined as authorization master entity, then it is recommended that each [child entity](javascript:call_link\('abenchild_entity_glosry.htm'\) "Glossary Entry") that is behavior-enabled is defined as an [authorization dependent entity](javascript:call_link\('abenrap_auth_dep_ent_glosry.htm'\) "Glossary Entry").

Authorization checks must be implemented in the ABAP behavior pool. This can be done, for example, using [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry").

Managed RAP BO

In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), if the root entity is specified as authorization master, the [RAP framework](javascript:call_link\('abenrap_framework_glosry.htm'\) "Glossary Entry") checks each [RAP BO operation](javascript:call_link\('abenrap_bo_operation_glosry.htm'\) "Glossary Entry") for any access restrictions.

Unmanaged RAP BO

In an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), and if global authorization control is specified, the RAP framework checks each RAP BO operation for any access restrictions.

Caution: If instance authorization control is specified, this is not the case. The RAP framework does not call the method for instance authorization in unmanaged non-draft scenarios. If authorization control is relevant, it must be implemented in the respective method for each [modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry"). Only in UI scenarios, the instance authorization control method has an effect on the [RAP consumer hints](javascript:call_link\('abenrap_consumer_hint_glosry.htm'\) "Glossary Entry").

Draft-enabled RAP BO

In a [draft-enabled RAP BO](javascript:call_link\('abenbdl_with_draft.htm'\)), the RAP framework checks for each [standard operation](javascript:call_link\('abenbdl_standard_operations.htm'\)) on a draft instance whether there are any access restrictions. For the [draft actions](javascript:call_link\('abenbdl_draft_action.htm'\)) Resume and Edit, the authorization control for [create](javascript:call_link\('abenbdl_standard_operations.htm'\)) is checked. For the draft actions Activate, Discard, and Prepare, the authorization methods are not called. To prevent a draft instance from activation, the authorization check has to be implemented in a [validation](javascript:call_link\('abenbdl_validations.htm'\)).

Projection BO

In a [projection business object](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), the authorization from the base business object is automatically inherited. If [new actions or functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)) are defined in the projection layer, a new authorization control for these actions and functions can be defined. For further details, see topic [CDS BDL - authorization, projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section Authorization Control.

Hints

-   If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, it is mandatory that each entity is marked either as authorization master or as authorization dependent.
-   The EML statement [IN LOCAL MODE](javascript:call_link\('abapin_local_mode.htm'\)) can be used to skip authorization control.
-   A [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") can use the EML statement [GET PERMISSIONS](javascript:call_link\('abapget_permissions.htm'\)) to check whether a RAP BO has authorization control implemented.
-   To limit read access to a business object, [Data Control Language (DCL)](javascript:call_link\('abendcl_glosry.htm'\) "Glossary Entry") can be used.
-   Authorizations can also be checked in other ABP methods, for example, in [validations](javascript:call_link\('abenbdl_validations.htm'\)).
-   In UI scenarios, authorization control is displayed as RAP consumer hint.

Example - Managed, Instance Authorization

The following example shows a managed BDEF based on the CDS root view entity DEMO\_RAP\_MANAGED\_AUTHORIZATION. The root entity is defined as authorization master for instance authorization control.

managed implementation in class bp\_demo\_rap\_managed\_authorizat unique;
strict(2);
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

The program DEMO\_RAP\_MANAGED\_AUTHORIZATION accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and performs the following actions:

-   It creates two instances of the root entity. One of them has the value B in field DataFieldRoot and therefore the instance authorization control does not allow this instance to be deleted.
-   It tries to delete both entity instances. For one instance, the delete operation is successful. For the second entity instance, the delete operation is prevented by the authorization check. An error message is returned.

Result: For one entity instance, the delete operation fails. An error message is returned.

![Figure](abdoc_auth1.jpg)

Example - Unmanaged, Global Authorization

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_AUTH. The parent entity is defined as authorization master for global authorization control and the child entity is defined as authorization dependent entity.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_auth unique;
strict(2);
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

The program DEMO\_RAP\_UNMANAGED\_AUTH accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and performs the following actions:

-   It creates three instances of the parent entity and two instances of the child entity. This is allowed, since no authorization restrictions are implemented for the create operation.
-   It updates two of the instances of the parent entity. This is allowed, the authorization check is successful.
-   It tries to delete an instance of the parent entity. This is prevented by the authorization check, since delete operations are forbidden. An error message is returned.
-   It deletes an instance of the child entity. This request is directed to the authorization master entity and it is interpreted as update request of the authorization master entity. The authorization check is successful and the child entity instance is deleted.

Executable Example

The example above is explained in detail in the executable example [CDS BDL - global authorization](javascript:call_link\('abenbdl_authorization_abexa.htm'\)).

Variant 1   

... authorization master( )

Effect

Declares an entity as authorization master entity. Currently only available for root nodes. An entity is defined as authorization master if the operations of this entity have their own authorization implementation. That means in the behavior implementation of this entity, the authorization control must be implemented in the corresponding method for authorization (global or instance).

Variant 2   

... authorization dependent by \_Assoc

Effect

Defines an entity as authorization dependent. Modifying requests for this entity are directed to the authorization master entity. For update, delete, and [create-by-association operations](javascript:call_link\('abenrap_cba_operation_glosry.htm'\) "Glossary Entry") on an authorization-dependent entity, the authorization check for update of the authorization master entity is applied.

In the following cases, the authorization control must be implemented in separate methods for authorization in the behavior pool of the authorization-dependent entity:

-   [actions](javascript:call_link\('abenbdl_action.htm'\)) of authorization dependent entities
-   create-enabled [cross-BO associations](javascript:call_link\('abencds_cross_bo_assoc_glosry.htm'\) "Glossary Entry")
-   create-enabled associations which are not compositions

If the authorization master entity is not the parent entity of the authorization-dependent entity, then the association to the authorization master entity must be explicitly defined in the entity behavior definition using the syntax association \_AssocToAuthMaster { }.

The following syntax short form is available to summarize lock dependent, ETag dependent, and authorization dependent:

(*\[*lock*\]**\[*, authorization*\]**\[*, etag*\]*) dependent by \_assoc

For details, see topic [syntax\_short\_form](javascript:call_link\('abenbdl_short_syntax.htm'\)).

Variant 3   

... authorization:none

Effect

Can be used as [RAP BO operation addition](javascript:call_link\('abenbdl_operations_additions.htm'\)) to exclude the operation in question from authorization checks. See [CDS BDL - authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\)).

Variant 4   

... authorization:update

Effect

Can be used as [RAP BO operation addition](javascript:call_link\('abenbdl_operations_additions.htm'\)) to delegate the authorization check. An operation specified as authorization:update has the same authorization control that is defined for the update operation. See [CDS BDL - authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\)).

Continue
![Example](exa.gif "Example") [CDS BDL - Global Authorization](javascript:call_link\('abenbdl_authorization_abexa.htm'\))