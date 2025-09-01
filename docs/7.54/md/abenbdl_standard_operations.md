  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP RESTful Programming Model](javascript:call_link\('abenrestful_abap_programming.htm'\)) →  [Behavior Definitions](javascript:call_link\('abenabap_behavior_definitions.htm'\)) →  [ABAP BDL](javascript:call_link\('abenabap_bdl.htm'\)) →  [ABAP BDL - DEFINE BEHAVIOR](javascript:call_link\('abenbdl_define_behavior.htm'\)) → 

ABAP BDL - DEFINE BEHAVIOR, Standard Operations

Syntax

... *\[*internal*\]* create;
    *\[*internal*\]* update;
    *\[*internal*\]* delete;

Effect

The standard operations create, update, and delete (known as the CUD operations) are the most important operations for the transactional behavior of a [business object](javascript:call_link\('abenbusiness_object_glosry.htm'\) "Glossary Entry"). The operations create, update, and delete must be declared appropriately in the [behavior definition](javascript:call_link\('abenbehavior_definition_glosry.htm'\) "Glossary Entry") for an entity whenever an entity is created, updated, or deleted.

A standard operation can be given the addition internal. This makes it possible to implement the action without making it consumable from outside. Example: internal update;

CUD operations can be made available for an entity simply by declaring them in the body of the entity in question.

The [behavior](javascript:call_link\('abenbehavior_glosry.htm'\) "Glossary Entry") for the operations create, update, and delete is implemented in the method [FOR MODIFY](javascript:call_link\('abenhandler_method_modify.htm'\)) of the [handler class](javascript:call_link\('abenrpm_handler_class.htm'\)).

Note

The [FOR LOCK](javascript:call_link\('abenhandler_method_lock.htm'\)) method of the handler class is called automatically before a change operation (such as update) is triggered. However, the corresponding entity must have the lock property in its behavior definition.

Example

In the following example, the data from the ABAP flight data reference scenario (or flight data scenario for short) is used. It represents a legacy business logic that can be used to create and edit flight bookings. The CDS view /DMO/I\_Travel represents the root node of the business object for managing flight trips. The underlying business model is described in [ABAP BDL - Example](javascript:call_link\('abenbdl_example.htm'\)).

The following example shows the behavior definition for the root entity Travel.

implementation unmanaged;
define behavior for /DMO/I\_Travel alias Travel
lock master
{
  create;
  update;
  delete;
}

The transactional behavior of the business object is defined by the standard operations create, update, and delete. These operations are [implemented](javascript:call_link\('abenabap_behavior_implementations.htm'\)) in the association [behavior pools](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry").