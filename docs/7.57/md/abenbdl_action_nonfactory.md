  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - Entity Behavior Body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO Operations](javascript:call_link\('abenbdl_operations.htm'\)) →  [CDS BDL - Non-Standard Operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) →  [CDS BDL - action](javascript:call_link\('abenbdl_action.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - action, Non-Factory, ABENBDL_ACTION_NONFACTORY, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - action, Non-Factory

Syntax

*\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]**\[*static*\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](javascript:call_link\('abenbdl_actions_fc.htm'\))*\]*
                  *\[*[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                  *\[* [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                  *\[* [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\))*\]*
                  *\[*[OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\))*\]*

Additions:

[1\. ... lock:none](#!ABAP_ADDITION_1@1@)
[2\. ... external](#!ABAP_ADDITION_2@2@)

Effect

Defines a [RAP action](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") which offers non-standard behavior. The custom logic must be implemented in the [RAP handler method](javascript:call_link\('abenabp_handler_method_glosry.htm'\) "Glossary Entry") [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)). An action per default relates to a [RAP BO entity instance](javascript:call_link\('abenrap_bo_entity_inst_glosry.htm'\) "Glossary Entry") and changes the state of the instance.

If the optional keyword static is used, the action is defined as [static action](javascript:call_link\('abenrap_static_operation_glosry.htm'\) "Glossary Entry"). Static actions are not bound to any instance of a [RAP BO entity](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") but relate to the complete entity. The default is that an action is related to an [instance](javascript:call_link\('abenrap_instance_operation_glosry.htm'\) "Glossary Entry"), so the keyword static overwrites the default.

The following [CDS BDL operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) are possible:

-   [internal](javascript:call_link\('abenbdl_internal.htm'\)) to make the respective action accessible only from within the business object implementation.
-   Dynamic feature control with [(features:instance)](javascript:call_link\('abenbdl_actions_fc.htm'\)). This enables or disables the action depending on preconditions within the business object. For example, the action Accept\_Order might be offered only if the status is not Rejected already.
-   Global feature control with [(features:global)](javascript:call_link\('abenbdl_actions_fc.htm'\)) enables or disables the action depending on BO-external preconditions.
-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\)) prevents unwanted changes from reaching the application buffer.
-   [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\)) excludes the operation in question from [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)).
    
    Note: For static actions, the addition authorization:none is available only in case of global authorization.
    
-   [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\)) delegates the [authorization control](javascript:call_link\('abenbdl_authorization.htm'\)) to the authorization check that is implemented for the update operation.
-   Input parameters [InputParameter](javascript:call_link\('abenbdl_action_input_param.htm'\)) and output parameters [OutputParameter](javascript:call_link\('abenbdl_action_output_para.htm'\)) can optionally be added to the action signature.

Availability

-   [Managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   [Unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry")
-   In a [projection BO](javascript:call_link\('abenrap_projection_bo_glosry.htm'\) "Glossary Entry"), actions from the base BDEF can be reused. For details on reuse, see topic [CDS BDL - use, projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)). It is also possible to specify new actions as described in topic [CDS BDL - actions and functions, projection BDEF](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about Actions.

Example

The following example shows a managed [BDEF](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") based on the CDS root view entity DEMO\_CDS\_PURCH\_DOC\_M. The business object represents a purchase order with purchase order items. If an employee wants to order equipment, the manager can approve or reject this purchase. Therefore, the two actions Approve\_Order and Reject\_Order are defined.

managed implementation in class bp\_demo\_cds\_purch\_doc\_m unique;
strict(2);
define behavior for DEMO\_CDS\_PURCH\_DOC\_M alias PurchaseDocument
persistent table demo\_purch\_doc
lock master
etag master crea\_date\_time
authorization master (global)
{
  create;
  update;
  delete;
  association \_PurchaseDocumentItem { create; }
  action Approve\_Order result \[1\] $self;
  action Reject\_Order  result \[1\] $self;
  field ( readonly )  crea\_uname , crea\_date\_time;
  mapping for demo\_purch\_doc corresponding;
}
define behavior for DEMO\_CDS\_PURCH\_DOC\_I\_M alias PurchaseDocumentItem
persistent table DEMO\_PURCH\_DOC\_I
lock dependent by \_PurchaseDocument
authorization dependent by \_PurchaseDocument
{
  update;
  delete;
  field ( readonly )  PurchaseDocumentItem , PurchaseDocument;
  field ( mandatory ) Price , Quantity , QuantityUnit;
  association \_PurchaseDocument;
  mapping for DEMO\_PURCH\_DOC\_I corresponding;
}

The actions are implemented in behavior pool BP\_DEMO\_CDS\_PURCH\_DOC\_M. The program DEMO\_CDS\_PURCHASE accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and performs the Approve\_Order action on one entity instance.

Result: column Status of the respective instance is filled with A for Accepted.

![Figure](abdoc_action.png)

Executable Example

The example above is explained in detail in the executable example [CDS BDL - action](javascript:call_link\('abenbdl_action1_abexa.htm'\)).

Addition 1   

... lock:none

Effect

Prevents the [locking mechanism](javascript:call_link\('abenrap_locking_glosry.htm'\) "Glossary Entry") for the entity instance for which an action is executed. Since static actions are not related to a specific instance, they are non-locking by definition and this syntax element is not applicable.
Note: The locking mechanism is only prevented for the action itself. Possible modify calls in the action implementation are not affected by the non-locking specification in the action definition. Consequently, an instance is locked if it is modified by an action even if the action is defined as non-locking.

Addition 2   

... external

Effect

The optional addition external can be used to provide an alias name for the action for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the actual action name.