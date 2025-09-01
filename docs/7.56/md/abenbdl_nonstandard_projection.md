  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS projection behavior definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [CDS BDL - entity behavior definition, projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) →  [CDS BDL - entity behavior body, projection BDEF](javascript:call_link\('abenbdl_body_projection.htm'\)) → 

CDS BDL - actions and functions, projection BDEF

Syntax Forms

New action definition

*\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[*static*\]**\[*factory*\]**\[**{*static factory*}**\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_authorization_projection.htm'\))*\]*
                  *\[* [authorization:update](javascript:call_link\('abenbdl_authorization_projection.htm'\))*\]*
                  *\[*[lock:none](javascript:call_link\('abenbdl_action.htm'\))*\]*
                   )*\]*
                   ActionName *\[* [external 'ExternalName'](javascript:call_link\('abenbdl_action.htm'\))*\]*
                  *\[*[InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                  *\[* [OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\))*\]*
New function definition
*\[*internal*\]* *\[*static*\]* function FunctionName
                   *\[*external 'ExternalName'*\]*
                   *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                    [OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\))

Effect

You can specify new [actions](javascript:call_link\('abenbdl_action.htm'\)) and [functions](javascript:call_link\('abenbdl_function.htm'\)) for a [projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry") in the projection layer. This works similar to defining actions and functions in a base BDEF; see topics [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\)) and [CDS BDL - function](javascript:call_link\('abenbdl_function.htm'\)).

There is a difference however regarding the [authorization concept](javascript:call_link\('abenbdl_authorization.htm'\)) of an action defined in a projection BDEF: In a projection BDEF, no authorization master from the base BDEF is available. If an authorization concept is required, this must be specified for each node of a BO node as described in topic [CDS BDL - authorization, projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, topic Action Definition.
-   Development guide for the ABAP RESTful Application Programming Model, topic Function Definition.

Example - defining an action in the projection layer

The following example shows a projection BDEF that defines a new action in the projection layer. It is based on the underlying base BO DEMO\_RAP\_UNMANAGED\_AUTH. It defines the new action deductDicounts in the projection layer. For this action, global [authorization control](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") is specified.

projection implementation in class bp\_demo\_rap\_proj\_new\_action unique;
strict;
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

The ABAP program DEMO\_RAP\_PROJ\_NEW\_ACTION uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access to [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry"). It first creates two new entity instances and then executes the action deductDiscount for both of them.

Result: The specified discount percentage is subtracted from the initial value.

![Figure](bdoc_new_action.jpg)

Example - defining a function in the projection layer

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

The ABAP program DEMO\_RAP\_PROJ\_NEW\_FUNCTION uses [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") to access to RAP business object. It first creates two new entity instances and then executes the function getDetails for both of them.

Result: The content of the fields key\_field and data\_field is returned in the result structure.

![Figure](bdoc_new_function.jpg)