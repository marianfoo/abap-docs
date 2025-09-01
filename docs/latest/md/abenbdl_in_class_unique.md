  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Managed and Unmanaged Behavior Definitions](javascript:call_link\('abenbdl_rap_bo.htm'\)) →  [RAP - Behavior Definition Header](javascript:call_link\('abenbdl_bdef_header.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20implementation%20in%20class%20unique%2C%20ABENBDL_IN_CLASS_UNIQUE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

RAP - implementation in class unique

Syntax

... implementation in class ClassName unique

Effect

Specifies an [ABAP behavior pool](javascript:call_link\('abenbehavior_pool_glosry.htm'\) "Glossary Entry") for the [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry").

-   In a [managed RAP BO](javascript:call_link\('abenmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), a behavior pool is not necessarily required. [Standard operations](javascript:call_link\('abenbdl_standard_operations.htm'\)) and [operations for associations](javascript:call_link\('abenbdl_association.htm'\)) work without implementation in a behavior pool. A behavior pool is only required if the behavior definition contains components that cannot be handled by the [managed RAP BO provider](javascript:call_link\('abenmanaged_rap_bo_prov_glosry.htm'\) "Glossary Entry"), such as [nonstandard operations](javascript:call_link\('abenbdl_nonstandard.htm'\)) or [validations](javascript:call_link\('abenbdl_validations.htm'\)).
-   In an [unmanaged RAP BO](javascript:call_link\('abenunmanaged_rap_bo_glosry.htm'\) "Glossary Entry"), an ABAP behavior pool is always required.
-   In a [projection behavior definition](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"), an ABAP behavior pool is not necessary, but possible:
    -   functionality that is [reused](javascript:call_link\('abenbdl_use_projection.htm'\)) from the [projected BO](javascript:call_link\('abenrap_projected_bo_glosry.htm'\) "Glossary Entry") does not require its own implementation. The implementation from the projected BO is reused.
    -   if the projection BDEF defines [new actions or functions](javascript:call_link\('abenbdl_nonstandard_projection.htm'\)), an ABAP behavior pool is required.

There exist different options for notation that define how the implementation is distributed:

-   The behavior pool can be defined in the [RAP behavior definition header](javascript:call_link\('abencds_bdef_header_glosry.htm'\) "Glossary Entry").
    
    In this case, all implementation-relevant parts of all [RAP BO entities](javascript:call_link\('abenrap_bo_entity_glosry.htm'\) "Glossary Entry") that do not have an own implementation class are implemented in the same class.
    
    Further behavior pools on entity-level are possible.
    
-   The behavior pool can be defined in the [entity behavior definition](javascript:call_link\('abencds_entity_bdef_glosry.htm'\) "Glossary Entry") for each CDS entity. Each node of a [RAP business object](javascript:call_link\('abenrap_bo_glosry.htm'\) "Glossary Entry") can have an own implementation class.
    
    If there is an additional implementation on header level, this applies to all entities which do not have their own implementation class.
    
-   The behavior pool can be defined within the [entity behavior body](javascript:call_link\('abencds_entity_body_glosry.htm'\) "Glossary Entry") for one or more [implementation groups](javascript:call_link\('abenbdl_grouping.htm'\)). Each group must have an own implementation class, while entities must not have an implementation class. An additional implementation class on header level is possible.

The behavior for a certain entity or group can only be implemented in the specified behavior pool. Any other class that attempts this will get an error message.

The mandatory addition unique defines that each operation can be implemented exactly once.

Hint

If [BDEF strict mode](javascript:call_link\('abenbdl_strict.htm'\)) is enabled, it is mandatory to specify an ABAP behavior pool as soon as there are any implementation-relevant operations (an exception is a managed BDEF that contains, for example, only standard [CRUD operations](javascript:call_link\('abencrud_glosry.htm'\) "Glossary Entry")). The addition unique is also mandatory and leads to a syntax check error if left out.

Example

Behavior definition with behavior pool on header level:

managed implementation in class ClassName unique;
  define behavior for CDSEntityName alias AliasName
   ...

Behavior definition with behavior pool on entity level:

managed;
  define behavior for CDSEntityName alias AliasName
    implementation in class ClassName unique;
   ...

Behavior definition with implementation groups. Each group has its own implementation class. An implementation class on header level is required to implement the [unmanaged save](javascript:call_link\('abenrap_unman_save_glosry.htm'\) "Glossary Entry").

managed implementation in class ClassName unique;
  define behavior for CDSEntityName alias AliasName
    with unmanaged save
{
group one implementation in class Class1 unique { ... }
group two implementation in class Class2 unique { ... }
...
}
   ...