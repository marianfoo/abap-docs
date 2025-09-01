---
title: "Shared Objects - Creating Objects"
description: |
  A shared object(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_object_glosry.htm 'Glossary Entry') in an area instance version(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm 'Glossary Entry') of the shared memory is created
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_objects_create_object.htm"
abapFile: "abenshm_objects_create_object.htm"
keywords: ["do", "try", "method", "class", "data", "abenshm", "objects", "create", "object"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_objects.htm) → 

Shared Objects - Creating Objects

A [shared object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_object_glosry.htm "Glossary Entry") in an [area instance version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the shared memory is created with the following statements:

-   [CREATE OBJECT oref AREA HANDLE handle ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_object_area_handle.htm)

-   [CREATE DATA dref AREA HANDLE handle ...](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcreate_data_area_handle.htm)

handle is an object reference variable that points to an [area handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_handle_glosry.htm "Glossary Entry"), which is connected by a change lock to an area instance version currently being built. The created object is stored in this area instance version and oref or dref refer to the object. When the class instance is created, it must be shared-memory-enabled.

Before the area instance version is built with the [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) method, the [SET\_ROOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) method of the area handle must be used to define the [root object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_object_glosry.htm "Glossary Entry"). Once the area instance version has been built with the [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) method, no references from the area instance version are allowed to point to anything external.

The treatable exceptions listed for the above statements can occur when objects are created.