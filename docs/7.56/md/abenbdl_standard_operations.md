  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [ABAP CDS - managed and unmanaged behavior definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [CDS BDL - entity behavior definition](javascript:call_link\('abenbdl_define_beh.htm'\)) →  [CDS BDL - entity behavior body](javascript:call_link\('abenbdl_body.htm'\)) →  [CDS BDL - RAP BO operations](javascript:call_link\('abenbdl_operations.htm'\)) → 

CDS BDL - standard operations

Syntax

... *\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]* create *\[*[(*\[*features:global*\]*](javascript:call_link\('abenbdl_actions_fc.htm'\))
                      *\[*,[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                      *\[*,[authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*)*\]*;
  *|* *\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]* update *\[*[(*{*features:instance *|* features:global](javascript:call_link\('abenbdl_actions_fc.htm'\))*}*
                      *\[*,[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*)*\]*;
  *|* *\[*[internal](javascript:call_link\('abenbdl_internal.htm'\))*\]* delete *\[*[(*{*features:instance *|* features:global](javascript:call_link\('abenbdl_actions_fc.htm'\))*}*
                      *\[*,[precheck](javascript:call_link\('abenbdl_precheck.htm'\))*\]*
                      *\[*,[authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))*\]*
                      *\[*,[authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))*\]*)*\]*;

Effect

[Create](javascript:call_link\('abenrap_create_operation_glosry.htm'\) "Glossary Entry"), [update](javascript:call_link\('abenrap_update_operation_glosry.htm'\) "Glossary Entry"), and [delete](javascript:call_link\('abenrap_delete_operation_glosry.htm'\) "Glossary Entry") are standard operations. They are also known as [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry"), which is an acronym for create, read, update, delete. The [read operation](javascript:call_link\('abenrap_read_operation_glosry.htm'\) "Glossary Entry") is always implicitly enabled for each entity listed in a [CDS behavior definition (BDEF)](javascript:call_link\('abencds_behavior_definition_glosry.htm'\) "Glossary Entry") and it mustn't be declared explicitly.

In a [managed](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry") scenario, the CRUD operations don't require an [ABAP behavior pool (ABP)](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry"), since they are completely handled by the managed RAP BO provider. (However, some of the optional additions do require implementation. This is documented in the respective topics.)

In an [unmanaged](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry") scenario, each standard operation must be implemented in the ABAP behavior pool in the [RAP handler method](javascript:call_link\('abapmethods_for_rap_behv.htm'\)) [FOR MODIFY](javascript:call_link\('abaphandler_meth_modify.htm'\)).

In a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), the standard operations can be reused from the base BDEF. This can be done using the keyword use. For further details, see topic [CDS BDL - use, projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).

create
create is a modifying operation that creates new instances of a business object entity.

-   In a managed RAP BO, create can only be declared for [root nodes](javascript:call_link\('abenroot_node_glosry.htm'\) "Glossary Entry"). Child nodes are implicitly create-enabled for [internal usage](javascript:call_link\('abenbdl_internal.htm'\)). That means, an external consumer can only create a new instance of a child entity via its parent, see [create-by-association](javascript:call_link\('abenbdl_association.htm'\)) operation. A direct create can only take place from the BO's own implementation in the [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").
-   In an unmanaged RAP BO, direct creates on child entities are possible but not recommended.

update
update is a modifying operation that changes instances of a business object entity.

delete
delete is a modifying operation that deletes instances of a business object entity.

create, update, and delete are optional components of a BDEF. If, for example, update is defined for an entity, then it is allowed to update this entity. If update is not defined, then a [RAP BO consumer](javascript:call_link\('abenrap_bo_consumer_glosry.htm'\) "Glossary Entry") is not allowed to perform update calls.

The following [CDS BDL operation additions](javascript:call_link\('abenbdl_operations_additions.htm'\)) are possible:

-   [internal](javascript:call_link\('abenbdl_internal.htm'\)): create, update, and delete can be defined as internal operations.
-   [(features:instance)](javascript:call_link\('abenbdl_actions_fc.htm'\)): Dynamic feature control can be specified for update or delete, not for create.
-   [(features:global)](javascript:call_link\('abenbdl_actions_fc.htm'\)): Global feature control can be specified for create, update, or delete.
-   [precheck](javascript:call_link\('abenbdl_precheck.htm'\)): A precheck can be specified for create, update, or delete.
-   [authorization:none](javascript:call_link\('abenbdl_actions_auth.htm'\))
    
    \- Excludes the operation in question from [authorization checks](javascript:call_link\('abenbdl_authorization.htm'\)).
    
    \- Can be specified for create (only for global authorization) and delete and only for the [authorization master entity](javascript:call_link\('abenrap_auth_ma_ent_glosry.htm'\) "Glossary Entry").
    
-   [authorization:update](javascript:call_link\('abenbdl_actions_auth_update.htm'\))
    
    \- Delegates the [authorization control](javascript:call_link\('abenbdl_authorization.htm'\)) for the authorization in question to the authorization check that is implemented for the update operation.
    
    \- Only available for delete.
    

Further Information

Development guide for the ABAP RESTful Application Programming Model, section about Standard Operations.

Example - managed

The following example shows a managed BDEF based on the CDS root view entity DEMO\_SALES\_CDS\_BUPA\_2. The transactional behavior of the root view entity is defined by the standard operations create, update, and delete. The read operation is implicitly available for both, parent and child entity. For the composition \_BuPa that connects both entities, the create-by-association operation is defined in the entity behavior body.

managed;
define behavior for DEMO\_SALES\_CDS\_BUPA\_2
persistent table demo\_sales\_bupa
lock master
{
  create;
  update;
  delete;
  association \_BuPa {create; }
}
define behavior for DEMO\_SALES\_CDS\_BUPA\_ADDRESS
persistent table demo\_sales\_bupa1
lock dependent by \_Address
{
  field ( readonly ) Id;
  update;
  delete;
association \_Address { }
}

The program DEMO\_SALES\_CDS\_BUPA\_1 accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and creates, deletes, and updates BO instances. These operations all work without implementation in the ABAP behavior pool.

Example - unmanaged

The following example shows an unmanaged BDEF based on the CDS root view entity DEMO\_RAP\_UNMANAGED\_AUTH. The transactional behavior of the root view entity is defined by the standard operations create, update, and delete. The read operation is implicitly available for both, parent and child entity. For the composition \_child that connects both entities, the create-by-association operation is defined in the entity behavior body.

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

For the implementation in the ABAP behavior pool, see CCIMP include.

The program DEMO\_RAP\_EML\_UNMANAGED accesses the business object using [EML](javascript:call_link\('abeneml_glosry.htm'\) "Glossary Entry") and reads, creates, deletes, and updates BO instances.

Executable Example

[ABAP EML - MODIFY, Standard Operations (Unmanaged)](javascript:call_link\('abeneml_modify_op_u_abexa.htm'\))