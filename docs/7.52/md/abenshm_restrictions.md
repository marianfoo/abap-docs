  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) → 

Shared Objects - Restrictions

At present, the following restrictions apply to shared objects:

-   On 32-bit systems, only a limited amount of memory space is available for storing shared objects, due to the restricted address space. For this reason, shared objects can only be used on 32-bit systems under certain conditions.

-   When data objects that are referenced using data references are stored, there is also the restriction that the dynamic type cannot be created at program runtime. A direct reference to data elements and table types belonging to ABAP Dictionary is possible however.

-   The memory consumption of shared objects in the shared memory cannot be monitored using Memory Inspector.

-   Memory bottlenecks can occur in the shared objects memory, but they can be dealt with. The associated exception class is CX\_SHM\_OUT\_OF\_MEMORY.

-   There is no memory restriction for logical areas, which generally consist of multiple area instances. There are currently only memory restrictions for individual area instances.

-   The lifetime of area instances cannot be bound to that of user sessions, ABAP sessions, or transactions. Area instances currently exist as long as the application server instance.