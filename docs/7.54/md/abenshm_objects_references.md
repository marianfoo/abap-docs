---
title: "Shared Objects - References"
description: |
  Objects in area instance versions are instances of classes or anonymous data objects and thus can only really be addressed using heap references(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_reference_glosry.htm 'Glossary Entry'). Access to Shared Objects To use a reference o
version: "7.54"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_references.htm"
abapFile: "abenshm_objects_references.htm"
keywords: ["do", "if", "try", "method", "class", "data", "types", "abenshm", "objects", "references"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects.htm) → 

Shared Objects - References

Objects in area instance versions are instances of classes or anonymous data objects and thus can only really be addressed using [heap references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenheap_reference_glosry.htm "Glossary Entry").

Access to Shared Objects

To use a reference of this type to perform reads or writes on objects in area instances of the shared memory from an [internal session](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_session_glosry.htm "Glossary Entry"), a suitable [area lock](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_lock_glosry.htm "Glossary Entry") must be set by binding an [area handle](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_handle_glosry.htm "Glossary Entry") to an area instance version. The [root object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_object_glosry.htm "Glossary Entry"), that can reference additional objects, is used for the initial access to the objects in an area instance version.

Objects of the area instance version can be used in the internal session and references can be made from the area instance version to objects in the session (but only if an area handle exists for an area instance version in the session). The references can be used as usual for lifetime of an area lock, with the restriction that the type of lock determines whether or not the referenced objects of the area instance version can be modified. If a read or write is performed on the content of an object in the area instance version despite there being no associated lock, a runtime error occurs.

Note

The static methods [GET\_HANDLE\_BY\_OREF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_cl_abap_memory_area.htm), [GET\_HANDLE\_BY\_DREF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_cl_abap_memory_area.htm), and [GET\_HANDLE\_BY\_DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_cl_abap_memory_area.htm) can be used to get a reference to the area handle of an object. The corresponding return value is of general type [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_cl_abap_memory_area.htm), which is why this kind of reference is generally only suitable for [creating objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_objects_create_object.htm).

Completed Area Instance Versions

Area instances that are not bound to any area handles are self-contained. If the lock is released using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_cl_shm_area.htm) of the area handle after writes, no references from an area instance version are allowed to point to anything external. After the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshm_cl_shm_area.htm), any external references that reference objects of the area instance version can no longer be used to access these objects. The shared objects within a completed area instance version can be associated using object references and data references.

A special restriction applies to data references in completed area instance versions: the [dynamic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_type_glosry.htm "Glossary Entry") of these references must be a known type when a program is loaded in an internal session. The data types that cannot be used to create anonymous data objects as shared objects are specified under the addition [AREA HANDLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm) of the statement CREATE DATA.