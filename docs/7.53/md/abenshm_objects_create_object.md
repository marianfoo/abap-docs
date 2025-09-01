---
title: "Shared Objects - Creating Objects"
description: |
  A shared object(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_object_glosry.htm 'Glossary Entry') in an area instance version(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm 'Glossary Entry') of the shared memory is created
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_objects_create_object.htm"
abapFile: "abenshm_objects_create_object.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenshm", "objects", "create", "object"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_objects.htm) → 

Shared Objects - Creating Objects

A [shared object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_object_glosry.htm "Glossary Entry") in an [area instance version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the shared memory is created using one of the following statements:

-   [CREATE OBJECT oref AREA HANDLE handle ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_object_area_handle.htm)

-   [CREATE DATA dref AREA HANDLE handle ...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_area_handle.htm)

Here, handle is an object reference variable that points to an [area handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_handle_glosry.htm "Glossary Entry") bound (using an exclusive lock) to an area instance version currently being built. The new object is saved in this area instance version and oref or dref points to the object. When the class instance is created, it must be shared-memory-enabled.

Before the area instance version is built using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_shm_area.htm), the method [SET\_ROOT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_class.htm) of the area handle must be used to define the [root object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenroot_object_glosry.htm "Glossary Entry"). Once the area instance version is built using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_shm_area.htm), no references from the area instance version are allowed to point to anything external.

The handleable exceptions specified for the above statements can be raised when objects are created.