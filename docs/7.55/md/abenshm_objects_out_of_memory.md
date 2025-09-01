  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_objects.htm) → 

Shared Objects - Memory Bottlenecks

The [shared memory](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshared_memory_glosry.htm "Glossary Entry") of an AS instance is a limited resource. The ABAP runtime environment uses it to store programs, program data, buffers and so on. With explicit ABAP programming, either [data clusters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_cluster_glosry.htm "Glossary Entry") in [cross-transaction application buffers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") or shared objects in the shared objects memory can be accessed.

The maximum amount of shared memory that can be occupied by the different users is defined statically using [profile parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprofile_parameter_glosry.htm "Glossary Entry"). Transaction ST02 shows the current utilization of the shared memory and the associated profile parameters.

If the memory allocated for the shared objects memory using the profile parameter abap/shared\_objects\_size\_MB is exceeded when shared objects are used, a catchable exception of class CX\_SHM\_OUT\_OF\_MEMORY is raised. This exception can be raised in the following situations:

-   When shared objects are created or changed in the shared memory

-   When locks are removed using [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm)

-   When locks are created using [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm) or [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm), and even using [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm) if there is no longer sufficient space for the administration information.

For this reason, it is recommended to handle the exception CX\_SHM\_OUT\_OF\_MEMORY each time the shared objects memory is accessed. This is easiest when all accesses to shared objects, which in [ideal](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_shared_objects_guidl.htm "Guideline") situations only occur within a single wrapper class, also take place in a single [TRY control structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptry.htm) in which the exception is handled. If there is still a change lock on the area when the exception is handled, which can be determined using the method [GET\_LOCK\_KIND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm) of the area handle), it should be removed using [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm).

Hint

A suitable fallback strategy should be implemented to handle the exception CX\_SHM\_OUT\_OF\_MEMORY that for example creates the required objects in the [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") and copies the previous content from the shared memory to these objects.