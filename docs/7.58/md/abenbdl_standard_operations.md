  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Managed and Unmanaged Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_rap_bo.htm) →  [RAP - Entity Behavior Definition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh.htm) →  [RAP - Entity Behavior Body](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_body.htm) →  [RAP - RAP BO Operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Standard%20Operations%2C%20ABENBDL_STANDARD_OPERATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RAP - Standard Operations

Syntax

... *\[*[internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm)*\]* create *\[*[(*\[*features:global*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm)
                      *\[*,[precheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm)*\]*
                      *\[*,[authorization:none](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth.htm)*\]*)*\]*;
  *|* *\[*[internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm)*\]* update *\[*[(*{*features:instance *|* features:global](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm)*}*
                      *\[*,[precheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm)*\]*)*\]*;
  *|* *\[*[internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm)*\]* delete *\[*[(*{*features:instance *|* features:global](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm)*}*
                      *\[*,[precheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm)*\]*
                      *\[*,[authorization:none](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth.htm)*\]*
                      *\[*,[authorization:update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth_update.htm)*\]*)*\]*;

Effect

[Create](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_create_operation_glosry.htm "Glossary Entry"), [update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_update_operation_glosry.htm "Glossary Entry"), and [delete](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_delete_operation_glosry.htm "Glossary Entry") are standard operations. They are also known as [CRUD operations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencrud_glosry.htm "Glossary Entry"), which is an acronym for create, read, update, delete. The [read operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_read_operation_glosry.htm "Glossary Entry") is always implicitly enabled for each entity listed in a [RAP behavior definition (BDEF)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_behavior_definition_glosry.htm "Glossary Entry") and it mustn't be declared explicitly.

In a [managed](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmanaged_rap_bo_glosry.htm "Glossary Entry") scenario, the CRUD operations do not require an [ABAP behavior pool (ABP)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry"), since they are completely handled by the managed RAP BO provider. (However, some of the optional additions do require implementation. This is documented in the respective topics.)

In an [unmanaged](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenunmanaged_rap_bo_glosry.htm "Glossary Entry") scenario, each standard operation must be implemented in the ABAP behavior pool in the [RAP handler method](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapmethods_for_rap_behv.htm) [FOR MODIFY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphandler_meth_modify.htm).

In a [projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"), the standard operations can be reused from the base BDEF. This can be done using the keyword use. For further details, see topic [RAP BDL - use, projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm).

create
create is a modifying operation that creates new instances of a business object entity.

-   In a managed RAP BO, create can only be declared for [root nodes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_node_glosry.htm "Glossary Entry"). Child nodes are implicitly create-enabled for [internal usage](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm). That means, an external consumer can only create a new instance of a child entity via its parent, see [create-by-association](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_association.htm) operation. A direct create can only take place from the BO's own implementation in the [ABAP behavior pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbehavior_pool_glosry.htm "Glossary Entry").
-   In an unmanaged RAP BO, direct creates on child entities are possible but not recommended.

update
update is a modifying operation that changes instances of a business object entity.

delete
delete is a modifying operation that deletes instances of a business object entity.

create, update, and delete are optional components of a BDEF. If, for example, update is defined for an entity, then it is allowed to update this entity. If update is not defined, then a [RAP BO consumer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_consumer_glosry.htm "Glossary Entry") is not allowed to perform update calls.

The following [RAP BDL operation additions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_operations_additions.htm) are possible:

-   [internal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_internal.htm): create, update, and delete can be defined as internal operations.
-   [(features:instance)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm): Dynamic feature control can be specified for update or delete, not for create.
-   [(features:global)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_fc.htm): Global feature control can be specified for create, update, or delete.
-   [precheck](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_precheck.htm): A precheck can be specified for create, update, or delete.
-   [authorization:none](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth.htm)
    
    \- Excludes the operation in question from [authorization checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm).
    
    \- Can be specified for create (only for global authorization) and delete and only for the [authorization master entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_auth_ma_ent_glosry.htm "Glossary Entry").
    
-   [authorization:update](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_actions_auth_update.htm)
    
    \- Delegates the [authorization control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm) for the authorization in question to the authorization check that is implemented for the update operation.
    
    \- Only available for delete.
    

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about [Standard Operations](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/9a701fe447e74e798db0f2a4ef10bc04?version=sap_cross_product_abap).

Example - Managed

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The transactional behavior of the root view entity is defined by the standard operations create, update, and delete. The read operation is implicitly available for both, parent and child entity. For the to-child association \_BuPa that connects both entities, the create-by-association operation is defined in the entity behavior body.

Note: This example does not fully meet the requirements of the [RAP BO contract](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_bo_contract_glosry.htm "Glossary Entry"). It is intentionally kept short and simple and serves demonstration purposes only. See more information on the RAP BO contract in the [Development guide for the ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_Cloud/f055b8bf582d4f34b91da667bc1fcce6/3a402c5cf6a74bc1a1de080b2a7c6978?version=sap_cross_product_abap).

managed;
define behavior for DEMO\_SALES\_CDS\_BUPA\_2
persistent table demo\_sales\_bupa
lock master
{
  create;
  update;
  delete;
  field (readonly:update) id;
  association \_BuPa {create; }
}
define behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS
persistent table demo\_sales\_bupa1
lock dependent by \_Address
{
  field ( readonly:update ) Id, child\_key;
  update;
  delete;
association \_Address { }
}

The class CL\_DEMO\_SALES\_CDS\_BUPA\_1 accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and creates, deletes, and updates BO instances. These operations all work without implementation in the ABAP behavior pool.

Example- Unmanaged

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_AUTH. The transactional behavior of the root view entity is defined by the standard operations create, update, and delete. The read operation is implicitly available for both, parent and child entity. For the to-child association \_child that connects both entities, the create-by-association operation is defined in the entity behavior body.

unmanaged implementation in class bp\_demo\_rap\_unmanaged\_auth unique;
strict(2);
define behavior for DEMO\_RAP\_UNMANAGED\_AUTH
lock master
authorization master (global)
{
  create;
  update;
  delete;
  field ( readonly:update ) KeyFieldRoot;
  association \_child {create;}
}
define behavior for DEMO\_RAP\_UNMANAGED\_AUTH\_CHILD
lock dependent by \_parent
authorization dependent by \_parent
{
  update;
  delete;
  field ( readonly:update ) KeyField, KeyFieldChild;
  association \_parent { }
}

For the implementation in the ABAP behavior pool, see CCIMP include.

The class CL\_DEMO\_RAP\_EML\_UNMANAGED accesses the business object using [EML](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_glosry.htm "Glossary Entry") and reads, creates, deletes, and updates BO instances.

Executable Example

[ABAP EML - MODIFY, Standard Operations (Unmanaged)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeneml_modify_op_u_abexa.htm)