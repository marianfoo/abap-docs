  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Objects](javascript:call_link\('abenshm_objects.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20Memory%20Bottlenecks%2C%20ABENSHM_OBJECTS_OUT_OF_MEMORY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improveme
nt:)

Shared Objects - Memory Bottlenecks

The [shared memory](javascript:call_link\('abenshared_memory_glosry.htm'\) "Glossary Entry") of an AS instance is a limited resource. The ABAP runtime framework uses it to store programs, program data, buffers and so on. With explicit ABAP programming, either [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") in [cross-transaction application buffers](javascript:call_link\('abencrosstrans_app_buffer_glosry.htm'\) "Glossary Entry") or shared objects in the shared objects memory can be accessed.

The maximum amount of shared memory that can be occupied by the different users is defined statically using [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry"). Transaction ST02 shows the current utilization of the shared memory and the associated profile parameters.

If the memory allocated for the shared objects memory using the profile parameter abap/shared\_objects\_size\_MB is exceeded when shared objects are used, a catchable exception of class CX\_SHM\_OUT\_OF\_MEMORY is raised. This exception can be raised in the following situations:

-   When shared objects are created or changed in the shared memory
-   When locks are removed using [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\))
-   When locks are created using [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_area_class.htm'\)) or [ATTACH\_FOR\_UPDATE](javascript:call_link\('abenshm_area_class.htm'\)), and even using [ATTACH\_FOR\_READ](javascript:call_link\('abenshm_area_class.htm'\)) if there is no longer sufficient space for the administration information.

For this reason, it is recommended that the exception CX\_SHM\_OUT\_OF\_MEMORY is handled each time the shared objects memory is accessed. This is easiest when all accesses to shared objects, which in [ideal](javascript:call_link\('abenuse_shared_objects_guidl.htm'\) "Guideline") situations only occur within a single wrapper class, also take place in a single [TRY control structure](javascript:call_link\('abaptry.htm'\)) in which the exception is handled. If there is still a change lock on the area when the exception is handled, which can be determined using the method [GET\_LOCK\_KIND](javascript:call_link\('abenshm_cl_shm_area.htm'\)) of the area handle), it should be removed using [DETACH\_ROLLBACK](javascript:call_link\('abenshm_cl_shm_area.htm'\)).

Hint

A suitable fallback strategy should be implemented to handle the exception CX\_SHM\_OUT\_OF\_MEMORY that for example creates the required objects in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") and copies the previous content from the shared memory to these objects.