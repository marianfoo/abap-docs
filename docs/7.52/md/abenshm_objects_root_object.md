---
title: "Shared Objects - Root Object"
description: |
  Each area instance version(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm 'Glossary Entry') contains an instance of the area root class(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_data_class_glosry.htm 'Glossary Entry') tha
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_objects_root_object.htm"
abapFile: "abenshm_objects_root_object.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenshm", "objects", "root", "object"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_objects.htm) → 

Shared Objects - Root Object

Each [area instance version](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") contains an instance of the [area root class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_data_class_glosry.htm "Glossary Entry") that is identified as the root object.

The figure below shows how shared objects are accessed using the root object. The shared objects of an area instance version are accessed initially from an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"), always by using the reference variable [ROOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) of the area handle that points to the root object.

![Figure](abdoc_shm.gif)

The root object has to be defined with the instance method [SET\_ROOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) of the area handle before the lock is released with the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) of the area handle after writes.

Once an [area handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_handle_glosry.htm "Glossary Entry") has been bound to an existing area instance version, a reference to the root object can be obtained by reading the attribute [ROOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) (or even using the instance method [GET\_ROOT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm)) of the area handle. The root object can then contain object and data references to further shared objects of the area instance version and also return them.