  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Objects](javascript:call_link\('abenshm_objects.htm'\)) → 

Shared Objects - References

Objects in area instance versions are instances of classes or anonymous data objects and therefore they can only really be addressed using [heap references](javascript:call_link\('abenheap_reference_glosry.htm'\) "Glossary Entry").

Access to Shared Objects

To use a reference of this type to read or write to objects in area instances of the shared memory from within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), it is necessary to connect an [area handle](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry") to an area instance version, to set a suitable [area lock](javascript:call_link\('abenarea_lock_glosry.htm'\) "Glossary Entry"). The [root object](javascript:call_link\('abenroot_object_glosry.htm'\) "Glossary Entry") that can reference additional objects is used for the initial access to the objects in an area instance version.

References from the area instance version to internal session objects can exist and objects of the area instance version can be used in the internal session (but only if an area handle exists for an area instance version in an internal session). As long as an area lock exists, the references can be used as usual, with the restriction that the type of lock determines whether or not the referenced objects of the area instance version can be changed. If a read or write is performed on the content of an object of the area instance version, a runtime error occurs although there is no corresponding lock.

Note

The static methods [GET\_HANDLE\_BY\_OREF](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), [GET\_HANDLE\_BY\_DREF](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), and [GET\_HANDLE\_BY\_DATA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) can be used to obtain a reference to the area handle of an object. The corresponding return value is of general type [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)), which is why this sort of reference is really only suitable for [creating objects](javascript:call_link\('abenshm_objects_create_object.htm'\)).

Completed Area Instance Versions

Area instances that are not bound to any area handles are self-contained. If the lock is released using the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)) of the area handle after change accesses, no references from an area instance version are allowed to point to anything external. After the method [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)), any external references that refer to objects of the area instance version can no longer be used to access these objects. Links between the shared objects of a completed area instance version can be created by using object references and data references.

A special restriction applies to data references in completed area instance versions: the [dynamic type](javascript:call_link\('abendynamic_type_glosry.htm'\) "Glossary Entry") of these references must be a known type when a program is loaded in an internal session. The data types that cannot be used to create anonymous data objects as shared objects are listed under the addition [AREA HANDLE](javascript:call_link\('abapcreate_data_area_handle.htm'\)) of statement CREATE DATA.