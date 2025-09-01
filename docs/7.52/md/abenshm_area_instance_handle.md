  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Area Instance Versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_access.htm) → 

Shared Objects - Area Handles

Creating Area Handles

Area handles are instances of the [area class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_class_glosry.htm "Glossary Entry") of an area. An individual area handle is created using one of the following static methods from the area class. During this process, a corresponding [area lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm) is set:

-   [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm)

-   [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm)

-   [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm)

There is also a [MULTI\_ATTACH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) method for creating multiple area handles at once. The methods return a reference to the area handle that is created. Each area handle is bound to exactly one area instance version. This area instance version has a certain [state](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_state.htm), depending on the method.

Binding an area handle to an area instance version has the same effect as setting one of the following [area locks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm) on the area instance:

-   [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) and [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) create an exclusive lock

-   [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) creates a shared lock

Creating Area Instance Versions

Method [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) creates a new area instance version if the existing locks permit this. Specifying a name makes it possible to create multiple area instances of an area, each with its own versioning. If no name is specified, the content of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE is used as the default value. It is advisable to always work with explicit and unique names. Until the binding is removed, changes can be performed in the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") on the bound area instance version.

Changing Area Instance Versions

Method [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) is created if existing locks allow this,

-   Creates a new version as a copy of the active area instance version, in the case of areas with [versioning](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_fixed_properties.htm), or

-   Binds the area handle to an existing active area instance version in the case of areas without [versioning](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_fixed_properties.htm).

Specify a name to select an area instance. If no name is specified, the content of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE is used as the default value. Until the binding is removed, changes can be performed in the current internal session on the bound area instance version.

Reading Area Instance Versions

Method [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) binds the area handle to an existing area instance version if existing locks allow this. Specify a name to select an area instance. If no name is specified, the content of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE is used as the default value. Until the binding is removed, reads can be performed in the current internal session on the bound area instance version.

Deactivating Area Handles

The following instance methods of the area class removes the binding of individual area handles:

-   [DETACH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) removes a shared lock.

-   [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) removes an exclusive lock and confirms the changes that have been made.

-   [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) removes an exclusive lock without confirming the changes that have been made.

Two other static methods [DETACH\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) and [DETACH\_ALL\_AREAS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) are used to remove multiple bindings at once. Once the binding between an area handle and the area instance version has been removed, the area handle is inactive and can no longer be used. Removing a binding also removes the corresponding area lock and might change the state of the relevant area instance version.

Additional Methods

The methods of area handles listed above are normally used when working with shared objects. There are also additional methods for special applications. Transaction SHMM provides a program-independent user interface for these methods.

-   Invalidating Versions

Methods [INVALIDATE\_INSTANCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) or [INVALIDATE\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) can be used to set one or more active area instance versions to "obsolete". This prevents new shared locks from being set for this version, although existing shared locks continue to exist.

-   Deleting Versions

Methods [FREE\_INSTANCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) or [FREE\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) can be used to set one or more active or obsolete area instance versions to "expired". This removes all shared locks and no new shared locks can be set on these versions.

-   Information About Area Instances

Method [GET\_INSTANCE\_INFOS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) returns information about all of the area instances of an application server in an internal table.

-   Information About Area Handles

The methods [GET\_LOCK\_KIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm), IS\_VALID, [IS\_ACTIVE\_VERSION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm), [IS\_SHARED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm), [HAS\_ACTIVE\_PROPERTIES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm), and [GET\_DETACH\_INFO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm) provide information about locks and the state of an area handle.

-   Explicit Call of the Area Constructor

The method [BUILD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) can be used to call the [area constructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm) of an area explicitly in the current internal session. This method is a standardized mechanism for building area instances.