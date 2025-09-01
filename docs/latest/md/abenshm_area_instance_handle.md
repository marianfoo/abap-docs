  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Area Instance Versions](javascript:call_link\('abenshm_area_instance_access.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20Area%20Handles%2C%20ABENSHM_AREA_INSTANCE_HANDLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Shared Objects - Area Handles

Creating Area Handles   

Area handles are instances of the [area class](javascript:call_link\('abenarea_class_glosry.htm'\) "Glossary Entry") of an area. An individual area handle is created using one of the following static methods from the area class, whereby an associated [area lock](javascript:call_link\('abenshm_area_instance_locks.htm'\)) is set:

-   [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\))
-   [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\))
-   [ATTACH\_FOR\_READ](javascript:call_link\('abenshm_area_class.htm'\))

There is also the method [MULTI\_ATTACH](javascript:call_link\('abenshm_cl_shm_area.htm'\)) to create multiple area handles at once. These methods return a reference to a created area handle. Each area handle is bound to exactly one area instance version. This area instance version has a certain [state](javascript:call_link\('abenshm_area_instance_state.htm'\)), depending on the method used.

Binding an area handle to an area instance version is equivalent to setting one of the following [area locks](javascript:call_link\('abenshm_area_instance_locks.htm'\)) on the area instance:

-   [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\)) and [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\)) both create a change lock
-   [ATTACH\_FOR\_READ](javascript:call_link\('abenshm_area_class.htm'\)) creates a read lock

Creating Area Instance Versions   

The method [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\)) creates a new area instance version if existing locks allow it. By specifying a name, different area instances of an area can be created with their own versioning each. If no name is specified, the content of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE is used as the default value. It is recommended that explicit and unique names are always used. Until the binding is removed, the bound area instance version can be accessed for changes in the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Changing Area Instance Versions   

The method [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\)) does one of the following, if existing locks allow it:

-   In areas with [versioning](javascript:call_link\('abenshm_area_fixed_properties.htm'\)), it creates a new version as a copy of the active area instance version.
-   In areas without [versioning](javascript:call_link\('abenshm_area_fixed_properties.htm'\)), it binds the area handle to an existing active area instance version.

When a name is specified, an area instance is selected. If no name is specified, the content of the constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE is used as the default value. Until the binding is removed, the bound area instance version can be accessed for changes in the current internal session.

Reading Area Instance Versions   

The method [ATTACH\_FOR\_READ](javascript:call_link\('abenshm_area_class.htm'\)) binds the area handle to an existing area instance version if existing locks allow it. When a name is specified, an area instance is selected. If no name is specified, the content of the constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE is used as the default value. Until the binding is removed, the bound area instance version can be accessed for reads in the current internal session.

Detaching Area Handles   

The following instance methods of the area class remove the binding of an individual area handle:

-   [DETACH](javascript:call_link\('abenshm_cl_shm_area.htm'\)) removes a read lock.
-   [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)) removes a change lock and confirms the changes that were made.
-   [DETACH\_ROLLBACK](javascript:call_link\('abenshm_cl_shm_area.htm'\)) removes a change lock without confirming the changes that were made.

In addition, there are the static methods, [DETACH\_AREA](javascript:call_link\('abenshm_area_class.htm'\)) and [DETACH\_ALL\_AREAS](javascript:call_link\('abenshm_cl_shm_area.htm'\)), are used to remove multiple bindings at once. Once the binding between an area handle and the area instance version is removed, the area handle is inactive and can no longer be used. Removing a binding also removes the corresponding area lock and might change the state of the relevant area instance version.

Additional Methods   

The methods of the area handles mentioned above are normally used when working with shared objects. There are also additional methods also exist for special applications. Transaction SHMM provides a program-independent user interface for such methods.

-   Invalidating versions
    
    The methods [INVALIDATE\_INSTANCE](javascript:call_link\('abenshm_area_class.htm'\)) or [INVALIDATE\_AREA](javascript:call_link\('abenshm_area_class.htm'\)) can be used to set one or more active area instance versions to obsolete. This prevents new read locks from being set for this version, while existing read locks are retained.
    
-   Deleting versions
    
    The methods [FREE\_INSTANCE](javascript:call_link\('abenshm_area_class.htm'\)) or [FREE\_AREA](javascript:call_link\('abenshm_area_class.htm'\)) can be used to set one or more active or obsolete area instance versions to expired. This removes all read locks and no new read locks can be set on these versions.
    
-   Information about area instances
    
    The method [GET\_INSTANCE\_INFOS](javascript:call_link\('abenshm_area_class.htm'\)) returns information about all area instances of an AS instance in an internal table.
    
-   Information about area handles
    
    The methods [GET\_LOCK\_KIND](javascript:call_link\('abenshm_cl_shm_area.htm'\)), IS\_VALID, [IS\_ACTIVE\_VERSION](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), [IS\_SHARED](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), [HAS\_ACTIVE\_PROPERTIES](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), and [GET\_DETACH\_INFO](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) return information about locks and the state of an area handle.
    
-   Explicit call of the area constructor
    
    The method [BUILD](javascript:call_link\('abenshm_area_class.htm'\)) can be used to call the [area constructor](javascript:call_link\('abenshm_area_constructor_class.htm'\)) of an area explicitly in the current internal session. This method is a standardized mechanism for building area instances.