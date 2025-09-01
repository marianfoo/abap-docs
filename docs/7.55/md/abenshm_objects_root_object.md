---
title: "Shared Objects - Root Object"
description: |
  Each area instance version(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_instance_version_glosry.htm 'Glossary Entry') contains an instance of the area root class(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_data_class_glosry.htm 'Glossary Entry') tha
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_objects_root_object.htm"
abapFile: "abenshm_objects_root_object.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenshm", "objects", "root", "object"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_objects.htm) → 

Shared Objects - Root Object

Each [area instance version](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") contains an instance of the [area root class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenroot_data_class_glosry.htm "Glossary Entry") that is marked as the root object.

The figure below shows how shared objects are accessed using the root object. The shared objects of an area instance version are accessed initially from an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry"), always using the reference variable [ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm) of the area handle that points to the root object.

![Figure](abdoc_shm.gif)

The root object must be specified using the instance method [SET\_ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm) of the area handle before the lock is released with the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm) of the area handle after writes.

After binding an [area handle](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenarea_handle_glosry.htm "Glossary Entry") to an existing area instance version, a reference to the root object can be obtained by accessing the attribute [ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm) (or the instance method [GET\_ROOT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm)) of the area handle. The root object can then contain and/or return object and data references to further shared objects of the area instance version.