---
title: "RAP - authorization, Projection BDEF"
description: |
  Syntax Forms Declaration on Entity Level ... authorization ( global ) ( instance ) ( global,instance )  ... Declaration That Can Be Used in the Entity Behavior Body for an Action ... authorization:none authorization:update authorization:global authorization:instance authorization:global,
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization_projection.htm"
abapFile: "abenbdl_authorization_projection.htm"
keywords: ["update", "delete", "loop", "do", "if", "try", "method", "class", "data", "abenbdl", "authorization", "projection"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_projection_bo.htm) →  [RAP - Entity Behavior Definition, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh_projection.htm) →  [RAP - Entity Behavior Characteristics, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_character_projection.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20authorization%2C%20Projection%20BDEF%2C%20ABENBDL_AUTHORIZATION_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20imp
rovement:)

RAP - authorization, Projection BDEF

Syntax Forms

Declaration on Entity Level

... authorization *{*( global )
                  *|*( instance )
                  *|*( global,instance )*}*  ...

Declaration That Can Be Used in the Entity Behavior Body for an Action

... authorization:none
    authorization:update
    authorization:global
    authorization:instance
    authorization:global, authorization:instance ...

Effect

In a [projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), the [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") from the underlying base BDEF is inherited. This controls [CRUD operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencrud_glosry.htm "Glossary Entry") and [actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) that are reused in the projection using the [use action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm) syntax.

Projections can also define their own actions as described in topic [RAP BDL - actions and functions, projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard_projection.htm). For these actions, it is possible to configure authorization control in the projection layer. For global authorization, this is done in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR GLOBAL AUTHORIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_global_auth.htm) in the local [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"). For instance authorization, this is done in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR INSTANCE AUTHORIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_auth.htm) in the local [ABAP behavior pool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").

Authorization control in projection BDEFs is similar to authorizations in base BDEFs (see topic [RAP - authorization](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm)). Here are the main differences:

-   To define authorization control in a projection BDEF, the projection BDEF must enable [BDEF strict mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_strict_mode_glosry.htm "Glossary Entry") using the syntax [strict*\[*(version)*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_strict.htm).
-   There is no master/dependent relation. Each projection definition must declare for itself whether it has instance authorization, global authorization, or both.

Authorization control specified in the entity behavior body on action-level:

-   authorization:none excludes the operation in question from authorization checks. See topic [RAP - authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm) for further details.
-   If authorization:update is used, the operation in question has the same authorization control that is defined in the base BDEF for the update operation. As a prerequisite, it is required that the projection BDEF defines authorization control in its entity behavior characteristics. This configuration in the projection BDEF, however, (instance or global) has no impact, the settings from the base BO (instance, global, or both) are fully reused. See the second example listed in this topic. See topic [RAP - authorization:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_update.htm) for further details.
-   authorization:global specifies global authorization control for the action in question. If authorization control is also defined on entity level, the specification on action level replaces the specification on entity level. Authorization control on entity level is not a prerequisite though. See topic [RAP - authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm) for further details.
-   authorization:instance specifies instance authorization control for the action in question. If authorization control is also defined on entity level, the specification on action level replaces the specification on entity level. Authorization control on entity level is not a prerequisite though. See topic [RAP - authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm) for further details.
-   authorization:global, authorization:instance performs both instance authorization control and global authorization control for the action in question.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic Authorization Definition.

Hint

In UI scenarios, authorization control is displayed as [RAP consumer hint](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_consumer_hint_glosry.htm "Glossary Entry").

Example - Global Authorization Control in Projection BDEF

The following example shows a projection BDEF that defines a new action with authorization control in the projection layer. It is based on the underlying base BO DEMO\_RAP\_UNMANAGED\_AUTH. It defines the new action deductDiscount in the projection layer. For this action, global authorization control is specified.

projection implementation in class bp\_demo\_rap\_proj\_new\_action unique;
strict(2);
define behavior for DEMO\_RAP\_PROJ\_NEW\_ACTION alias Root
authorization ( global )
{
  use create;
  use update;
  use delete;
  action deductDiscount parameter DEMO\_CDS\_ABSTRACT\_DISCOUNT result \[1\] $self;
}

The ABAP behavior pool implements the global authorization control and the new action.

Global authorization control: In this simple example, the condition for global authorization control is always true.

METHOD get\_global\_auth.
  IF requested\_authorizations-%action-deductDiscount EQ if\_abap\_behv=>mk-on.
    "full access granted
    IF sy-uname = sy-uname.
      result-%action-deductDiscount = if\_abap\_behv=>auth-allowed.
    ELSE.
      result-%action-deductDiscount = if\_abap\_behv=>auth-unauthorized.
      APPEND VALUE #( %msg    = new\_message\_with\_text(
                      text     = 'Operation not authorized.'
                      severity = if\_abap\_behv\_message=>severity-error )
                      %global = if\_abap\_behv=>mk-on ) TO reported-root.
    ENDIF.
  ENDIF.
ENDMETHOD.

Action deductDiscount: The user can specify a discount percentage. This discount percentage is subtracted from the initial value of field dec\_field.

METHOD deductDiscount.
  DATA lt\_update\_item
         TYPE TABLE FOR UPDATE demo\_rap\_proj\_new\_action.
  DATA(lt\_keys) = keys.
  LOOP AT lt\_keys ASSIGNING FIELD-SYMBOL(<fs\_key>)
       WHERE %param-discount\_percent IS INITIAL
       OR %param-discount\_percent > 100
       OR %param-discount\_percent <= 0.
    APPEND VALUE #( %tky = <fs\_key>-%tky ) TO failed-root.
    DELETE lt\_keys.
  ENDLOOP.
  CHECK lt\_keys IS NOT INITIAL.
  "get total price
  READ ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE
    ENTITY Root
      FIELDS ( DecFieldRoot )
      WITH CORRESPONDING #( lt\_keys )
    RESULT DATA(lt\_item)
    FAILED DATA(read\_failed).
  failed = CORRESPONDING #( DEEP read\_failed ).
  LOOP AT lt\_item ASSIGNING FIELD-SYMBOL(<fs\_item>).
    DATA lv\_percentage TYPE decfloat16.
    DATA(lv\_discount\_percent) =
         lt\_keys\[ KEY entity %tky = <fs\_item>-%tky \]-%param-discount\_percent.
    lv\_percentage =  lv\_discount\_percent / 100 .
    DATA(lv\_reduced\_fee) = <fs\_item>-DecFieldRoot \* ( 1 - lv\_percentage ).
    APPEND VALUE #( %tky       = <fs\_item>-%tky
                    DecFieldRoot = lv\_reduced\_fee  ) TO lt\_update\_item.
  ENDLOOP.
  "update total price with reduced price
  MODIFY ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE
    ENTITY Root
     UPDATE FIELDS ( DecFieldRoot )
     WITH lt\_update\_item
  FAILED DATA(update\_failed)
  REPORTED DATA(update\_reported).
  "Read changed data for action result
  READ ENTITIES OF demo\_rap\_proj\_new\_action IN LOCAL MODE
    ENTITY Root
      ALL FIELDS WITH
      CORRESPONDING #( lt\_item )
    RESULT DATA(lt\_item\_with\_discount).
  result = VALUE #( FOR item IN lt\_item\_with\_discount ( %tky   = item-%tky
                                              %param = item ) ).
ENDMETHOD.

The ABAP class CL\_DEMO\_RAP\_PROJ\_NEW\_ACTION uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access to RAP business object. It first creates two new entity instances and then executes the action deductDiscount for both of them.

Before executing the action, the RAP frameworks calls the method for global authorization control and checks whether the RAP BO consumer is allowed to execute the action.

Example - authorization:update

The following example shows a projection BDEF that defines a new action with the syntax addition authorization:update. It is based on the underlying base BO DEMO\_RAP\_EARLY\_NUMBERING.

projection implementation in class bp\_demo\_rap\_proj\_auth unique;
strict(2);
define behavior for DEMO\_RAP\_PROJ\_AUTH alias Root
authorization ( global )
{
  use create;
  use update;
  use delete;
  action (authorization:update) UpdateDataField result \[1\] $self;
}

The ABAP behavior pool implements the action UpdateDataField. This action sets the value of the field DataField to A.

METHOD UpdateDataField.
MODIFY ENTITIES OF demo\_rap\_proj\_auth IN LOCAL MODE
         ENTITY Root
            UPDATE FROM VALUE #( FOR key IN keys
            ( KeyField = key-KeyField
              DataField = 'A'
              %control-DataField = if\_abap\_behv=>mk-on ) )
FAILED failed
REPORTED reported.
  "Read changed data for action result
  READ ENTITIES OF demo\_rap\_proj\_auth IN LOCAL MODE
    ENTITY Root
      ALL FIELDS WITH
      CORRESPONDING #( keys )
    RESULT DATA(lt\_data).
  result = VALUE #( FOR data IN lt\_data
           ( %tky   = data-%tky
             %param = data  ) ).
ENDMETHOD.

The ABAP class CL\_DEMO\_RAP\_PROJ\_AUTH uses [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") to access to RAP business object. It first creates two new entity instances and then executes the action UpdateDataField for one of them. As a result, the field DataField of the respective entity instance is set to A.

Before executing the action, the RAP frameworks calls the base BDEF's method for global authorization control and checks whether the RAP BO consumer is allowed to execute the action. In his example, update authorization is granted.

Example - Authorization Control on Action-Level

The following example shows a projection BDEF that defines new actions with authorization control on action-level. No authorization control is specified on entity-level. The global and instance authorization control must be implemented in the ABAP behavior pool of the projection BDEF.

projection implementation in class bp\_demo\_rap\_global\_auth\_pv unique;
strict ( 2 );
define behavior for DEMO\_RAP\_GLOBAL\_AUTH\_PV alias Root
{
  use create;
  use update;
  use delete;
  action ( authorization : instance ) ext1AuthInstance;
  action ( authorization : global ) ext1AuthGlobal;
  action ( authorization : global, authorization : instance )
  ext1AuthGlobalInstance;
  action ( authorization : none ) ext1AuthNone;
}