---
title: "RAP - Entity Behavior Characteristics, Projection BDEF"
description: |
  Syntax ... use etag(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm) extensible(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm) authorization(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_character_projection.htm"
abapFile: "abenbdl_character_projection.htm"
keywords: ["do", "if", "try", "method", "abenbdl", "character", "projection"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - RAP Business Objects](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_rap.htm) →  [RAP - Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_bdef.htm) →  [RAP - BDL for Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl.htm) →  [RAP - Projection Behavior Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_projection_bo.htm) →  [RAP - Entity Behavior Definition, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_define_beh_projection.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RAP%20-%20Entity%20Behavior%20Characteristics%2C%20Projection%20BDEF%2C%20ABENBDL_CHARACTER_PROJECTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion%20for%20improvement:)

RAP - Entity Behavior Characteristics, Projection BDEF

Syntax

... *\[*[use etag](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm)*\]*
    *\[*[extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm)*\]*
    *\[*[authorization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm)*\]*  ...

Effect

This topic gives an overview of the [entity behavior characteristics](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entity_properties_glosry.htm "Glossary Entry") that can be reused in a [projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_proj_bdef_glosry.htm "Glossary Entry"). It also explains which ones of the behavior characteristics from the [projected BO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_projected_bo_glosry.htm "Glossary Entry") are automatically reused or inherited. These characteristics does not need to be specified explicitly.

Characteristics that must be specified explicitly, if required:

-   [use etag](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm)
    
    An ETag field for [optimistic concurrency control](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoptimistic_conc_control_glosry.htm "Glossary Entry") can be reused if it is specified in the base BO.
    
    -   For details on optimistic concurrency control, see topic [RAP - etag](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_etag.htm).
    -   For details on reuse, see topic [RAP - use, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_use_projection.htm).
-   [extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm)
    
    To enable [BDEF extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_extension_glosry.htm "Glossary Entry"), a declaration in the entity behavior definition header is required and the keyword extensible must also be declared in the entity behavior characteristics for each individual entity that allows BDEF extensions. In projection BDEFs, only the keyword extensible is possible, without any further additions. For details, see topic [RAP - extensible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_extensible.htm).
    

Characteristic that can be specified explicitly or reused, depending on the context:

-   authorization
    -   All [authorization controls](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_auth_control_glosry.htm "Glossary Entry") that are specified in the base BO is automatically and implicitly passed on to the projection BO. For details, see topic [RAP - authorization](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization.htm).
    -   If new [actions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_action_glosry.htm "Glossary Entry") are specified in a projection BDEF, it is possible to specify authorization control for these new actions in the projection layer. For details, see topic [RAP - authorization, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm).

Automatic reuse and/or inheriting:

-   [persistent table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_persistent_table.htm)
    
    Implementation aspect that is reused automatically.
    
-   [draft table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_draft_table.htm)
    
    Implementation aspect that is reused automatically.
    
-   [saving options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_saving.htm)
    
    Implementation aspect that is reused automatically.
    
-   [locking](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_locking.htm)
    
    Implementation aspect that is reused automatically. Projection BOs inherit the lock master and lock dependent relations. On each [modify operation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrap_modify_operation_glosry.htm "Glossary Entry") on a projection BO instance, the method [FOR LOCK](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaphandler_meth_lock.htm) is called and the respective entities are locked.
    
-   [early numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_early_numb.htm)
    
    Implementation aspect that is reused automatically.
    
-   [late numbering](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_late_numbering.htm)
    
    Implementation aspect that is reused automatically.
    

Continue
[RAP - authorization, Projection BDEF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenbdl_authorization_projection.htm)