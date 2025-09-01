  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard.htm) →  [RAP - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20action%2C%20Non-Factory%2C%20ABENBDL_ACTION_NONFACTORY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - action, Non-Factory

Syntax

*\[*[internal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_internal.htm)*\]**\[* [static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_static.htm)*\]* *\[*[repeatable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_repeatable.htm)*\]* action
                  *\[*(
                  *\[*[features: *{*instance *|* global*}*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm)*\]*
                  *\[*[precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm)*\]*
                  *\[* [authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm)*\]*
                  *\[* [authorization:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_update.htm)*\]*
                  *\[* [authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm)*\]*
                  *\[* [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm)*\]*
                  *\[*lock:none*\]*
                   )*\]*
                   ActionName *\[*external 'ExternalName'*\]*
                  *\[* [InputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm)*\]*
                  *\[*[OutputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm)*\]*

Additions:

[1\. ... lock:none](#!ABAP_ADDITION_1@1@)
[2\. ... external](#!ABAP_ADDITION_2@2@)

Effect

Defines a [RAP action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") which offers non-standard behavior. The custom logic must be implemented in the [RAP handler method](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabp_handler_method_glosry.htm "Glossary Entry") [FOR MODIFY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaphandler_meth_modify.htm). An action per default relates to a [RAP BO entity instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") and changes the state of the instance.

If the optional keyword [static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_static.htm) is used, the action is defined as [static action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_static_operation_glosry.htm "Glossary Entry"). Static actions are not bound to any instance of a [RAP BO entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_glosry.htm "Glossary Entry") but relate to the complete entity. The default is that an action is related to an [instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_instance_operation_glosry.htm "Glossary Entry"), so the keyword static overwrites the default.

The optional addition [repeatable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_repeatable.htm) declares a non-factory, instance-bound action as [RAP repeatable action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_repeatable_action_glosry.htm "Glossary Entry"). A repeatable action can be executed multiple times on the same [RAP BO entity instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") within the same [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry") request. A RAP action without the addition repeatable must not be executed multiple times on the same entity instance within the same request. Otherwise, a runtime error occurs. For further details, see topic [RAP - repeatable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_repeatable.htm).

The following [RAP BDL operation additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) are possible:

-   [internal](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_internal.htm) to make the respective action accessible only from within the business object implementation.
-   Dynamic feature control with [(features:instance)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm). This enables or disables the action depending on preconditions within the business object. For example, the action Accept\_Order might be offered only if the status is not Rejected already.
-   Global feature control with [(features:global)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_fc.htm) enables or disables the action depending on BO-external preconditions.
-   [precheck](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_precheck.htm) prevents unwanted changes from reaching the application buffer.
-   [authorization:none](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth.htm) excludes the operation in question from [authorization checks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm).
    
    Note: For static actions, the addition authorization:none is available only in case of global authorization.
    
-   [authorization:update](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_update.htm) delegates the [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm) to the authorization check that is implemented for the update operation.
-   [authorization:global](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_global.htm) replaces the [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm) that is specified in the [authorization master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry") and applies global authorization checks instead.
-   [authorization:instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_actions_auth_instance.htm) replaces the [authorization control](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_authorization.htm) that is specified in the [authorization master entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry") and applies instance authorization checks instead.
-   Input parameters [InputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_input_param.htm) and output parameters [OutputParameter](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_output_para.htm) can optionally be added to the action signature.

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   In a [projection BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"), actions from the base BDEF can be reused. For details on reuse, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm). It is also possible to specify new actions as described in topic [RAP BDL - actions and functions, projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard_projection.htm).

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).

Example

The following example shows a managed [BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") based on the CDS root view entity DEMO\_CDS\_PURCH\_DOC\_M. The business object represents a purchase order with purchase order items. If an employee wants to order equipment, the manager can approve or reject this purchase. Therefore, the two actions Approve\_Order and Reject\_Order are defined.

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
  field(readonly:update) PurchaseDocument;
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

The actions are implemented in behavior pool BP\_DEMO\_CDS\_PURCH\_DOC\_M. The class CL\_DEMO\_CDS\_PURCHASE accesses the business object using [EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeneml_glosry.htm "Glossary Entry") and performs the Approve\_Order action on one entity instance.

Result: column Status of the respective instance is filled with A for Accepted.

![Figure](abdoc_action.png)

Executable Example

The example above is explained in detail in the executable example [RAP BDL - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action1_abexa.htm).

Addition 1   

... lock:none

Effect

Prevents the [locking mechanism](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_locking_glosry.htm "Glossary Entry") for the entity instance for which an action is executed. Since static actions are not related to a specific instance, they are non-locking by definition and this syntax element is not applicable.
Note: The locking mechanism is only prevented for the action itself. Possible modify calls in the action implementation are not affected by the non-locking specification in the action definition. Consequently, an instance is locked if it is modified by an action even if the action is defined as non-locking.

Addition 2   

... external

Effect

The optional addition external can be used to provide an alias name for the action for external usage. This external name is exposed in the OData metadata, but it is not known by ABAP. It can be much longer than the actual action name.

Continue
[RAP - repeatable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_repeatable.htm)