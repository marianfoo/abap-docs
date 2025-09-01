  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Overview

Shared objects are instances of classes or anonymous data objects in [shared memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_memory_glosry.htm "Glossary Entry"). Named data objects can be stored as attributes of classes. The memory area of the shared memory for shared objects is the shared object memory. Its size is determined by the profile parameter abap/shared\_objects\_size\_MB.

Shared objects are managed using [areas](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_glosry.htm "Glossary Entry"). Areas and their properties can be created and edited using transaction SHMA.

Shared Memory-Enabled Classes

The prerequisite for storing an instance of a class in the shared memory is that the class of the object has to be defined with the [SHARED MEMORY ENABLED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass_options.htm) addition of the CLASS statement, or that the property Shared memory-enabled has to be selected in Class Builder. Each area is linked to a global [area root class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_data_class_glosry.htm "Glossary Entry"), which can contain separate data and references to other instances of shared memory-enabled classes or to anonymous data objects in its attributes.

Areas and Area Instances

An area is the template for area instances in the shared memory. Multiple area instances with different names can be created from one area instance. In addition, there can be multiple versions of an area instance ([area instance versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm "Glossary Entry")). Version IDs are used to distinguish between the versions. All area instance versions of the same area instance name make up an area instance. In the simplest case (without versioning), an area instance consists of a single area instance version.

Area Classes and Area Handles

When an area is defined in transaction SHMA, a global and final [area class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) (with the same name) is generated as a subclass of [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm). Class CL\_SHM\_AREA itself is a direct subclass of [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm). In an ABAP program, an area is accessed exclusively using the methods of the generated area class. There are static methods for binding an ABAP program (or its [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry")) to area instances in the shared memory (attach methods). Binding creates an instance of the area class as an [area handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_handle_glosry.htm "Glossary Entry"), and creates an [area lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_lock_glosry.htm "Glossary Entry") at the same time. The ABAP program can access the bound area instance version using the area handle and thus access the shared objects that are stored there. The area handle also contains the methods for deleting the connection or the lock (detach methods).

Access to Objects

The shared objects in an area instance version are addressed by [references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_objects_references.htm), which are obtained using the area handle. The shared objects within an area instance version can refer to each other without any restrictions. An ABAP program can contain references to shared objects provided that it is bound to an area instance version. Area instances themselves are self-contained so that they cannot contain any references to other area instance versions or be contained in an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"). There is one exception to this rule, provided that an area instance is bound to an internal session for writing or updating. During this time, there can be references in the area instance to objects in the internal session or to other area instances that are similarly bound.

Note

Do not confuse area instances or area instance versions with [instances](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninstance_glosry.htm "Glossary Entry") of classes. In particular, an area instance is not an instance of an area class. Area instances are managed areas (the actual areas) in the shared memory in which shared objects can be stored, and that are addressed by area handles.