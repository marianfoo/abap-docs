  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Overview

Shared objects are instances of classes or anonymous data objects in [shared memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_memory_glosry.htm "Glossary Entry"). Named data objects can be stored as attributes of classes. The memory area of the shared memory for shared objects is known as the shared object memory. Its size is determined by the profile parameter abap/shared\_objects\_size\_MB.

Shared objects are managed using [areas](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_glosry.htm "Glossary Entry"). Areas and their properties can be created and edited using transaction SHMA.

Shared-Memory-Enabled Classes

Before a class can be saved to shared memory, it must be defined using the addition [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass_options.htm) of the statement CLASS or the property Shared-memory-enabled must be selected in Class Builder. Each area is associated with a global [area root class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenroot_data_class_glosry.htm "Glossary Entry"), whose attributes can contain its own data plus references to other instances of shared-memory-enabled classes or to anonymous data objects.

Areas and Area Instances

An area is the template for area instances in the shared memory. Multiple area instances with different names can be created from a single area instance. In addition, multiple versions of an area instance (called [area instance versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry")) are possible. Version IDs are used to distinguish between the versions. Together, all area instance versions of the same area instance name construct an area instance. In the simplest case (without versioning), an area instance consists of a single area instance version.

Area Classes and Area Handles

When an area is defined in transaction SHMA, a global and final [area class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_class.htm) (with the same name) is generated as a subclass of [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_shm_area.htm). The class CL\_SHM\_AREA is itself a direct subclass of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_abap_memory_area.htm). In an ABAP program, an area is accessed exclusively using the methods of the generated area class. Static methods (known as attach methods) can be used to bind an ABAP program (or its [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry")) to area instances in the shared memory . Bindings create an instance of the area class as an [area handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_handle_glosry.htm "Glossary Entry") and set an [area lock](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_lock_glosry.htm "Glossary Entry") at the same time. The ABAP program can access the bound area instance version using the area handle and thus access the shared objects that are stored there. The area handle also contains the methods (known as detach methods) used to unbind the connection or the lock .

Access to Objects

The shared objects in an area instance version are addressed by [references](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_objects_references.htm), which are obtained using the area handle. The shared objects within an area instance version can reference each other without any restrictions. An ABAP program can contain references to shared objects as long as it is bound to an area instance version. Area instances themselves are self-contained, which means that they cannot contain references to other area instance versions and cannot be contained in an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Exceptions to this rule are possible only when an area instance is bound to an internal session to perform writes or updates. During this time, there can be references in the area instance to objects in the internal session or to other area instances that are similarly bound.

Note

Area instances or area instance versions should not be confused with [instances](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninstance_glosry.htm "Glossary Entry") of classes. In particular, an area instance is not an instance of an area class. Area instances are managed areas (the actual areas) in the shared memory in which shared objects can be stored, and that are addressed by area handles.