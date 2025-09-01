  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations.htm) →  [RAP - Non-Standard Operations](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard.htm) →  [RAP - action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action.htm) →  [RAP - action, Non-Factory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_nonfactory.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20repeatable%2C%20ABENBDL_ACTION_REPEATABLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - repeatable

Syntax

... repeatable ...

Effect

Defines a non-factory [RAP action](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_action_glosry.htm "Glossary Entry") or a [RAP function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_function_glosry.htm "Glossary Entry") as [repeatable RAP BO operation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_repeatable_action_glosry.htm "Glossary Entry"). A repeatable RAP BO operation can be executed multiple times on the same [RAP BO entity instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_entity_inst_glosry.htm "Glossary Entry") within the same [ABAP EML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_eml_glosry.htm "Glossary Entry") or [OData](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenodata_glosry.htm "Glossary Entry") request. The [BDEF derived type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_derived_type_glosry.htm "Glossary Entry") of a repeatable RAP BO operation contains a [%cid](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapderived_types_cid.htm) component and the [RAP response parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_response_param_glosry.htm "Glossary Entry") are filled for each execution individually.

Regarding actions, only non-factory, instance-bound RAP actions can be declared as repeatable. Other kinds of RAP actions must not be declared as repeatable for the following reasons:

-   [RAP factory actions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_factory_action_glosry.htm "Glossary Entry") are always repeatable and an explicit declaration is not necessary. The BDEF derived type of a RAP factory action contains the %cid component and multiple executions are possible.
-   [Static](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_static.htm) RAP actions are always repeatable and an explicit declaration is not necessary. Static RAP actions are identified by means of a %cid component and multiple executions are possible.
-   Draft actions must not be executed multiple times on the same [RAP draft instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_draft_instance_glosry.htm "Glossary Entry") within one request. This is not useful and not supported.

The same rules apply and the same [RAP BDL operation additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) are available as for non-factory actions, see topic [RAP - action, Non-Factory](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_action_nonfactory.htm). There is only one exception: the syntax addition static is not available for repeatable actions.

Regarding functions, only instance-bound functions can be declared as repeatable. Static RAP functions are always repeatable and they are identified by means of a %cid component. Therefore, an explicit declaration of the repeatable characteristic is not required and not supported.

The same rules apply and the same [RAP BDL operation additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_operations_additions.htm) are available as for functions, see topic [RAP - function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_function.htm). There is only one exception: the syntax addition static is not available for repeatable functions.

Availability

-   [Managed RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Unmanaged RAP BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry")
-   [Projection BO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_projection_bo_glosry.htm "Glossary Entry"): Reuse of repeatable RAP BO operations as well as definition of new repeatable RAP BO operations. For details on reuse, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_use_projection.htm). For details on action definition, see topic [RAP - Actions and Functions, Projection BDEF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbdl_nonstandard_projection.htm).
-   [BDEF extensions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_extension_glosry.htm "Glossary Entry")

Hint

When executing a RAP repeatable action or function, a %cid must be provided.

Further Information

-   Development guide for the ABAP RESTful Application Programming Model, section about [Actions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/83bad707a5a241a2ae93953d81d17a6b?version=sap_cross_product_abap).
-   Development guide for the ABAP RESTful Application Programming Model, section about [Functions](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/d401150cfdb1454d9f55d80aead9579a?version=sap_cross_product_abap).

Example

The following example shows a managed BDEF with multiple actions and functions.

Note: This example is intentionally kept short and simple and focuses on specific RAP aspects. It does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry").

managed implementation in class bp\_demo\_rap\_repeatable\_action unique;
strict ( 2 );
define behavior for DEMO\_RAP\_REPEATABLE\_ACTION alias Root
persistent table demo\_cs\_rap\_tab1
lock master
authorization master ( global )
{
  field ( readonly : update ) key\_field;
  create;
  update;
  delete;
// dup-key check
  action Action;
  // no dup-key check
  repeatable action RepeatAction;
  // no dup-key check (implicitly "repeatable")
  factory action FactoryAction \[1\];
// no dup-key check (implicitly "repeatable")
  static action StaticAction;
  function Function result \[1\] $self;
  repeatable function RepeatFunction result \[1\] $self;
}

The BDEF derived type of the non-factory instance-bound action Action does not have a %cid component. It looks as follows:

![Figure](derived_type_action.jpg)

The BDEF derived type of the repeatable action RepeatAction has a %cid component. It looks as follows:

![Figure](repeat_action.jpg)

The non-factory instance-bound action Action must not be executed multiple times on the same RAP BO entity instance. The following execution results in a runtime error.

DELETE FROM demo\_cs\_rap\_tab1.
MODIFY ENTITIES OF demo\_rap\_repeatable\_action
      ENTITY Root
      CREATE FIELDS ( key\_field field3 )
      WITH VALUE #( ( %cid = 'cid1' key\_field = 3 field3 = 77 ) )
    EXECUTE Action
FROM VALUE #( ( %cid\_ref = 'cid1'  ) ( %cid\_ref = 'cid1'  ) ).
COMMIT ENTITIES.

The repeatable action RepeatAction can be executed multiple times on the same RAP BO entity instance as follows:

Note: RepeatAction is not implemented in this example.

DELETE FROM demo\_cs\_rap\_tab1.
MODIFY ENTITIES OF demo\_rap\_repeatable\_action
      ENTITY Root
      CREATE FIELDS ( key\_field field3 )
      WITH VALUE #( ( %cid = 'cid1' key\_field = 3 field3 = 77 ) )
    EXECUTE RepeatAction
FROM VALUE #( ( %cid = 'cid3' %cid\_ref = 'cid1'  )
              ( %cid = 'cid4' %cid\_ref = 'cid1'  ) ).
COMMIT ENTITIES.