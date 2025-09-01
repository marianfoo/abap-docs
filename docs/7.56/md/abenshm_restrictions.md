  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) → 

Shared Objects - Restrictions

Currently, the following restrictions apply to shared objects:

-   When data objects referenced using data references are stored, there is a restriction that the dynamic type cannot have been created at program runtime. Direct references to data elements and table types in the ABAP Dictionary are, however, possible.
-   Memory bottlenecks can occur in the shared objects memory, but can also be handled. The associated exception class is CX\_SHM\_OUT\_OF\_MEMORY.
-   There is no memory restriction for logical areas, which generally consist of many area instances. There are currently only memory restrictions for individual area instances.
-   The lifetime of area instances cannot be bound to the lifetime of user sessions, ABAP sessions, or transactions. Area instances currently exist as long as the AS instance.

Hint

On 32-bit systems, only a limited amount of memory space is available for storing shared objects, due to the limited address space. For this reason, shared objects could only be used on 32-bit systems under certain conditions.