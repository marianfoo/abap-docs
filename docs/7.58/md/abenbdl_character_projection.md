  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - RAP Business Objects](javascript:call_link\('abenabap_rap.htm'\)) →  [RAP - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [RAP - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [RAP - Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [RAP - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Characteristics%2C%20Projection%20BDEF%2C%20ABENBDL_CHARACTER_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

RAP - Entity Behavior Characteristics, Projection BDEF

Syntax

... *\[*[use etag](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*
    *\[*[extensible](javascript:call_link\('abenbdl_extensible.htm'\))*\]*
    *\[*[authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\))*\]*  ...

Effect

This topic gives an overview of the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") that can be reused in a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). It also explains which ones of the behavior characteristics from the [projected BO](javascript:call_link\('abenrap_projected_bo_glosry.htm'\) "Glossary Entry") are automatically reused or inherited. These characteristics does not need to be specified explicitly.

Characteristics that must be specified explicitly, if required:

-   [use etag](javascript:call_link\('abenbdl_use_projection.htm'\))
    
    An ETag field for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry") can be reused if it is specified in the base BO.
    
    -   For details on optimistic concurrency control, see topic [RAP - etag](javascript:call_link\('abenbdl_etag.htm'\)).
    -   For details on reuse, see topic [RAP - use, Projection BDEF](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   [extensible](javascript:call_link\('abenbdl_extensible.htm'\))
    
    To enable [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry"), a declaration in the entity behavior definition header is required and the keyword extensible must also be declared in the entity behavior characteristics for each individual entity that allows BDEF extensions. In projection BDEFs, only the keyword extensible is possible, without any further additions. For details, see topic [RAP - extensible](javascript:call_link\('abenbdl_extensible.htm'\)).
    

Characteristic that can be specified explicitly or reused, depending on the context:

-   authorization
    -   All [authorization controls](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") that are specified in the base BO is automatically and implicitly passed on to the projection BO. For details, see topic [RAP - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).
    -   If new [actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") are specified in a projection BDEF, it is possible to specify authorization control for these new actions in the projection layer. For details, see topic [RAP - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).

Automatic reuse and/or inheriting:

-   [persistent table](javascript:call_link\('abenbdl_persistent_table.htm'\))
    
    Implementation aspect that is reused automatically.
    
-   [draft table](javascript:call_link\('abenbdl_draft_table.htm'\))
    
    Implementation aspect that is reused automatically.
    
-   [saving options](javascript:call_link\('abenbdl_saving.htm'\))
    
    Implementation aspect that is reused automatically.
    
-   [locking](javascript:call_link\('abenbdl_locking.htm'\))
    
    Implementation aspect that is reused automatically. Projection BOs inherit the lock master and lock dependent relations. On each [modify operation](javascript:call_link\('abenrap_modify_operation_glosry.htm'\) "Glossary Entry") on a projection BO instance, the method [FOR LOCK](javascript:call_link\('abaphandler_meth_lock.htm'\)) is called and the respective entities are locked.
    
-   [early numbering](javascript:call_link\('abenbdl_early_numb.htm'\))
    
    Implementation aspect that is reused automatically.
    
-   [late numbering](javascript:call_link\('abenbdl_late_numbering.htm'\))
    
    Implementation aspect that is reused automatically.
    

Continue
[RAP - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\))