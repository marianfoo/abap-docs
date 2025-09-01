---
title: "Shared Objects - Memory Bottlenecks"
description: |
  The shared memory(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_memory_glosry.htm 'Glossary Entry') of an application server is a limited resource. The ABAP runtime environment uses it to store programs, program data, buffers etc. Explicit ABAP programming can access either
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_objects_out_of_memory.htm"
abapFile: "abenshm_objects_out_of_memory.htm"
keywords: ["update", "do", "if", "try", "method", "class", "data", "abenshm", "objects", "out", "memory"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_objects.htm) → 

Shared Objects - Memory Bottlenecks

The [shared memory](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshared_memory_glosry.htm "Glossary Entry") of an application server is a limited resource. The ABAP runtime environment uses it to store programs, program data, buffers etc. Explicit ABAP programming can access either [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") in [cross-transaction application buffers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") or shared objects in the shared objects memory.

The maximum amount of shared memory that can be occupied by the different users is defined statically using [profile parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprofile_parameter_glosry.htm "Glossary Entry"). Transaction ST02 shows the current utilization of the shared memory and the related profile parameters.

If the amount of memory allocated to the shared objects memory (by the profile parameter abap/shared\_objects\_size\_MB) is exceeded when shared objects are used, a handleable exception of class CX\_SHM\_OUT\_OF\_MEMORY is raised. This exception can occur in different situations:

-   When shared objects are created or changed in the shared memory

-   When locks are removed with [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm)

-   When locks are created with [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm), [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm), and even with [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) (if there is no longer sufficient space for the administration information)

For this reason, it is best to handle the exception CX\_SHM\_OUT\_OF\_MEMORY each time the shared objects memory is accessed. The easiest way to do this is when all accesses to shared objects (in an [ideal](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuse_shared_objects_guidl.htm "Guideline") situation, these only occur within one wrapper class) also take place in only one single [TRY control structure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptry.htm), in which this exception is handled. If an exclusive lock on the area still exists when the exception is handled (this can be identified using the method [GET\_LOCK\_KIND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) of the area handle), it should be removed using [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm).

Note

To handle the exception CX\_SHM\_OUT\_OF\_MEMORY, a suitable fallback strategy should be implemented, for example a strategy to create the required objects in the [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry") and copy the previous content from the shared memory to these objects.