  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Objects](javascript:call_link\('abenshm_objects.htm'\)) → 

Shared Objects - Memory Bottlenecks

The [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of an application server is a limited resource. The ABAP runtime environment uses it to store programs, program data, buffers etc. Explicit ABAP programming can access either [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in [cross-transaction application buffers](javascript:call_link\('abencrosstrans_app_buffer_glosry.htm'\) "Glossary Entry") or shared objects in the shared objects memory.

The maximum amount of shared memory that can be occupied by the different users is defined statically using [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry"). Transaction ST02 shows the current utilization of the shared memory and the related profile parameters.

If the amount of memory allocated to the shared objects memory (by the profile parameter abap/shared\_objects\_size\_MB) is exceeded when shared objects are used, a handleable exception of class CX\_SHM\_OUT\_OF\_MEMORY is raised. This exception can occur in different situations:

-   When shared objects are created or changed in the shared memory

-   When locks are removed with [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\))

-   When locks are created with [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\)), [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\)), and even with [ATTACH\_FOR\_READ](javascript:call_link\('abenshm_area_class.htm'\)) (if there is no longer sufficient space for the administration information)

For this reason, it is best to handle the exception CX\_SHM\_OUT\_OF\_MEMORY each time the shared objects memory is accessed. The easiest way to do this is when all accesses to shared objects (in an [ideal](javascript:call_link\('abenuse_shared_objects_guidl.htm'\) "Guideline") situation, these only occur within one wrapper class) also take place in only one single [TRY control structure](javascript:call_link\('abaptry.htm'\)), in which this exception is handled. If an exclusive lock on the area still exists when the exception is handled (this can be identified using the method [GET\_LOCK\_KIND](javascript:call_link\('abenshm_cl_shm_area.htm'\)) of the area handle), it should be removed using [DETACH\_ROLLBACK](javascript:call_link\('abenshm_cl_shm_area.htm'\)).

Note

To handle the exception CX\_SHM\_OUT\_OF\_MEMORY, a suitable fallback strategy should be implemented, for example a strategy to create the required objects in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and copy the previous content from the shared memory to these objects.