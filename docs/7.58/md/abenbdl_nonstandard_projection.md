---
title: "RAP - Actions and Functions, Projection BDEF"
description: |
  Syntax Forms New Action Definition internal(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm)staticfactorystatic default factory action ( features: instance  global(https://help.sap.com/doc/abapdocu_758
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_nonstandard_projection.htm"
abapFile: "abenbdl_nonstandard_projection.htm"
keywords: ["update", "delete", "loop", "do", "if", "try", "method", "class", "data", "abenbdl", "nonstandard", "projection"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_projection_bo.htm) →  [RAP - Entity Behavior Definition, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_projection.htm) →  [RAP - Entity Behavior Body, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body_projection.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Actions%20and%20Functions%2C%20Projection%20BDEF%2C%20ABENBDL_NONSTANDARD_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%2
0for%20improvement:)

RAP - Actions and Functions, Projection BDEF

Syntax Forms

New Action Definition

*\[*[internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm)*\]**\[*static*\]**\[*factory*\]**\[**{*static *\[*default*\]* factory*}**\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm)*\]*
                  *\[*[lock:none](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm)*\]*
                   )*\]*
                   ActionName *\[* [external 'ExternalName'](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm)*\]*
                  *\[*[InputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_input_param.htm)*\]*
                  *\[* [OutputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm)*\]*

New Function Definition
*\[*internal*\]* *\[*static*\]* function FunctionName
                   *\[*external 'ExternalName'*\]*
                   *\[* [InputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_input_param.htm)*\]*
                    [OutputParameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action_output_para.htm)

Effect

You can specify new [actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm) and [functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_function.htm) for a [projection BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry") in the projection layer. This works similar to defining actions and functions in a base BDEF; see topic [RAP - action](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_action.htm) and topic [RAP - function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_function.htm).

There is a difference however regarding the [authorization concept](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm) of an action defined in a projection BDEF: In a projection BDEF, no authorization master from the base BDEF is available. If an authorization concept is required, this must be specified for each node of a BO node as described in topic [RAP BDL - authorization, projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic [Action Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/14ddc6b2442b4b97842af9158a1c9c44?version=sap_cross_product_abap).
-   Development guide for the ABAP RESTful Application Programming Model, topic [Function Definition](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/30708173550d4a358f87f38bcc77f6d2?version=sap_cross_product_abap).

Example - Defining an Action in the Projection Layer

The following example shows a projection BDEF that defines a new action in the projection layer. It is based on the underlying base BO DEMO\_RAP\_UNMANAGED\_AUTH. It defines the new action deductDiscount in the projection layer. For this action, global [authorization control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") is specified.

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

The ABAP class CL\_DEMO\_RAP\_PROJ\_NEW\_ACTION uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access to [RAP business object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_glosry.htm "Glossary Entry"). It first creates two new entity instances and then executes the action deductDiscount for both of them.

Result: The specified discount percentage is subtracted from the initial value.

![Figure](abdoc_new_action.jpg)

Example - Defining a Function in the Projection Layer

The following example shows a projection BDEF that defines a new function in the projection layer. It is based on the underlying base BO DEMO\_RAP\_STRICT. It defines the new function getDetails in the projection layer.

projection implementation in class bp\_demo\_rap\_proj\_new\_function unique;
strict;
define behavior for DEMO\_RAP\_PROJ\_NEW\_FUNCTION alias Root
{
  use create;
  use update;
  use delete;
  function getDetails result \[0..\*\] $self;
}

The ABAP behavior pool implements the new function getDetails. This function reads the values of the fields key\_field and data\_field and returns them in its result structure.

METHOD getDetails.
  DATA(lt\_keys) = keys.
  CHECK lt\_keys IS NOT INITIAL.
  READ ENTITIES OF demo\_rap\_proj\_new\_function IN LOCAL MODE
    ENTITY Root
      FIELDS ( key\_field data\_field )
      WITH CORRESPONDING #( lt\_keys )
    RESULT DATA(lt\_item)
    FAILED DATA(read\_failed).
  failed = CORRESPONDING #( DEEP read\_failed ).
  LOOP AT lt\_item ASSIGNING FIELD-SYMBOL(<fs\_item>).
    APPEND VALUE #( %tky   = <fs\_item>-%tky
                    %param = CORRESPONDING #( <fs\_item> ) ) TO result.
  ENDLOOP.
ENDMETHOD.

The ABAP class CL\_DEMO\_RAP\_PROJ\_NEW\_FUNCTION uses [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") to access to RAP business object. It first creates two new entity instances and then executes the function getDetails for both of them.

Result: The content of the fields key\_field and data\_field is returned in the result structure.

![Figure](abdoc_new_function.jpg)