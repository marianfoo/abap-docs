  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Objects](javascript:call_link\('abenshm_objects.htm'\)) → 

Shared Objects - References

Objects in area instance versions are instances of classes or anonymous data objects and therefore can only be addressed using [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry").

Access to Shared Objects

To use a reference of this type to perform reads or writes on objects in area instances of the shared memory from an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), a suitable [area lock](javascript:call_link\('abenarea_lock_glosry.htm'\) "Glossary Entry") must be set by binding an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") to an area instance version. The [root object](javascript:call_link\('abenroot_object_glosry.htm'\) "Glossary Entry"), that can refer to additional objects, is used for the initial access to the objects of an area instance version.

Only if an area handle exists in an internal session for an area instance version can objects of the area instance version be used in the internal session and references can be made from the area instance version to objects in the session. The references can be used as usual during the lifetime of an area lock, with the restriction that the type of lock determines whether or not the referenced objects of the area instance version can be changed. If a read or write is performed on the content of an object in the area instance version despite there being no associated lock, a runtime error occurs.

Hint

The static methods [GET\_HANDLE\_BY\_OREF](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), [GET\_HANDLE\_BY\_DREF](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), and [GET\_HANDLE\_BY\_DATA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) can be used to get a reference to the area handle of an object. The corresponding return value is of general type [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), which is why such a reference is generally only suitable for [creating objects](javascript:call_link\('abenshm_objects_create_object.htm'\)).

Completed Area Instance Versions

Area instances versions to which no area handles are bound are self-contained. If the lock is released using the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)) of the area handle after writes, no references from an area instance version are allowed to point outside. After the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)), any external references that reference objects of the area instance version can no longer be used to access these objects. The shared objects within a completed area instance version can be linked using object references and data references.

A special restriction applies to data references in completed area instance versions: their [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") must be a known type when a program is loaded in an internal session. The data types that cannot be used to create anonymous data objects as shared objects are specified in the addition [AREA HANDLE](javascript:call_link\('abapcreate_data_area_handle.htm'\)) of the statement CREATE DATA.