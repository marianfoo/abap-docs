  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - RAP Objects](javascript:call_link\('abencds_rap_objects.htm'\)) →  [ABAP CDS - RAP Business Objects (RAP BO)](javascript:call_link\('abencds_rap_business_objects.htm'\)) →  [ABAP CDS - Behavior Definitions](javascript:call_link\('abencds_bdef.htm'\)) →  [ABAP CDS - BDL for Behavior Definitions](javascript:call_link\('abenbdl.htm'\)) →  [CDS BDL - CDS Projection Behavior Definitions](javascript:call_link\('abenbdl_projection_bo.htm'\)) →  [CDS BDL - Entity Behavior Definition, Projection BDEF](javascript:call_link\('abenbdl_define_beh_projection.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS BDL - Entity Behavior Characteristics, Projection BDEF, ABENBDL_CHARACTER_PROJECT
ION, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS BDL - Entity Behavior Characteristics, Projection BDEF

Syntax

... *\[*[use etag](javascript:call_link\('abenbdl_use_projection.htm'\))*\]*
    *\[*[extensible](javascript:call_link\('abenbdl_extensible.htm'\))*\]*
    *\[*[authorization](javascript:call_link\('abenbdl_authorization_projection.htm'\))*\]*  ...

Effect

This topic gives an overview of the [entity behavior characteristics](javascript:call_link\('abencds_entity_properties_glosry.htm'\) "Glossary Entry") that can be reused in a [projection BDEF](javascript:call_link\('abencds_proj_bdef_glosry.htm'\) "Glossary Entry"). It also explains which ones of the behavior characteristics from the [projected BO](javascript:call_link\('abenrap_projected_bo_glosry.htm'\) "Glossary Entry") are automatically reused or inherited. These characteristics does not need to be specified explicitly.

Characteristics that must be specified explicitly, if required:

-   [use etag](javascript:call_link\('abenbdl_use_projection.htm'\))
    
    An ETag field for [optimistic concurrency control](javascript:call_link\('abenoptimistic_conc_control_glosry.htm'\) "Glossary Entry") can be reused if it is specified in the base BO.
    
    -   For details on optimistic concurrency control, see topic [CDS BDL - ETag](javascript:call_link\('abenbdl_etag.htm'\)).
    -   For details on reuse, see topic [CDS BDL - use](javascript:call_link\('abenbdl_use_projection.htm'\)).
-   [extensible](javascript:call_link\('abenbdl_extensible.htm'\))
    
    To enable [BDEF extensions](javascript:call_link\('abenrap_extension_glosry.htm'\) "Glossary Entry"), a declaration in the entity behavior definition header is required and the keyword extensible must also be declared in the entity behavior characteristics for each individual entity that allows BDEF extensions. In projection BDEFs, only the keyword extensible is possible, without any further additions. For details, see topic [CDS BDL - extensible](javascript:call_link\('abenbdl_extensible.htm'\)).
    

Characteristic that can be specified explicitly or reused, depending on the context:

-   authorization
    -   All [authorization controls](javascript:call_link\('abenrap_auth_control_glosry.htm'\) "Glossary Entry") that are specified in the base BO is automatically and implicitly passed on to the projection BO. For details, see topic [CDS BDL - authorization](javascript:call_link\('abenbdl_authorization.htm'\)).
    -   If new [actions](javascript:call_link\('abenrap_action_glosry.htm'\) "Glossary Entry") are specified in a projection BDEF, it is possible to specify authorization control for these new actions in the projection layer. For details, see topic [CDS BDL - authorization, projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\)).

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
[CDS BDL - authorization, Projection BDEF](javascript:call_link\('abenbdl_authorization_projection.htm'\))