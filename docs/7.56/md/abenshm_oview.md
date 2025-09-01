  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Overview

Shared objects are instances of classes or anonymous data objects in [shared memory](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshared_memory_glosry.htm "Glossary Entry"). Named data objects can be stored as attributes of classes. The memory area of the shared memory for shared objects is known as the shared object memory whose size is determined by the profile parameter abap/shared\_objects\_size\_MB.

Shared objects are managed using [areas](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_glosry.htm "Glossary Entry"). Areas and their properties are created and maintained using transaction SHMA.

Shared-Memory-Enabled Classes

The prerequisite for the storage of an instance of a class to be stored in the shared memory is that the class of the object is defined using the addition [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapclass_options.htm) of the statement CLASS or the property Shared-memory-enabled is selected in the Class Builder. Each area is linked to a global [area root class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_data_class_glosry.htm "Glossary Entry"), whose attributes can contain their own data and references to other instances of shared-memory-enabled classes or to anonymous data objects.

Areas and Area Instances

An area is the template for area instances in the shared memory. Multiple area instances with different names can be created from one area. In addition, there can also be multiple versions of an area instance (called [area instance versions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_instance_version_glosry.htm "Glossary Entry")), which are distinguished by a version ID. All area instance versions of the same area instance name form an area instance. In the simplest case (without versioning), an area instance consists of a single area instance version.

Area Classes and Area Handles

When an area is defined using transaction SHMA, a global and final [area class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_area_class.htm) (with the same name) is generated as a subclass of [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_cl_shm_area.htm). The class CL\_SHM\_AREA is itself a direct subclass of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_cl_abap_memory_area.htm). In an ABAP program, an area is accessed exclusively using the methods of the generated area class. Static methods (known as attach methods) can be used to bind an ABAP program (or its [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry")) to area instances in the shared memory . Bindings create an instance of the area class as an [area handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_handle_glosry.htm "Glossary Entry") and simultaneously set an [area lock](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_lock_glosry.htm "Glossary Entry"). The ABAP program can access the bound area instance version using the area handle and thus access the shared objects that are stored there. The area handle also contains the methods (detach methods) used to unbind the connection or the lock .

Access to Objects

The shared objects in an area instance version are addressed using [references](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_objects_references.htm), which are obtained using the area handle. The shared objects within an area instance version can refer to each other without restrictions. An ABAP program can contain references to shared objects as long as it is bound to an area instance version. Area instance versions themselves are self-contained, which means that they cannot contain references to other area instance versions or an [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Exceptions to this rule are possible only when an area instance is bound to an internal session to perform writes or updates. During this time, there can be references in the area instance to objects in the internal session or to other area instances that are also bound.

Hint

Area instances or area instance versions must not be confused with [instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninstance_glosry.htm "Glossary Entry") of classes. In particular, an area instance is not an instance of an area class. Area instances are managed areas (the actual areas) in the shared memory in which shared objects can be stored, and which can be addressed by area handles.