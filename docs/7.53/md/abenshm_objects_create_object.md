  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Objects](javascript:call_link\('abenshm_objects.htm'\)) → 

Shared Objects - Creating Objects

A [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") in an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the shared memory is created using one of the following statements:

-   [CREATE OBJECT oref AREA HANDLE handle ...](javascript:call_link\('abapcreate_object_area_handle.htm'\))

-   [CREATE DATA dref AREA HANDLE handle ...](javascript:call_link\('abapcreate_data_area_handle.htm'\))

Here, handle is an object reference variable that points to an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") bound (using an exclusive lock) to an area instance version currently being built. The new object is saved in this area instance version and oref or dref points to the object. When the class instance is created, it must be shared-memory-enabled.

Before the area instance version is built using the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)), the method [SET\_ROOT](javascript:call_link\('abenshm_area_class.htm'\)) of the area handle must be used to define the [root object](javascript:call_link\('abenroot_object_glosry.htm'\) "Glossary Entry"). Once the area instance version is built using the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)), no references from the area instance version are allowed to point to anything external.

The handleable exceptions specified for the above statements can be raised when objects are created.