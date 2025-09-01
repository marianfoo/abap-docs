  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) → 

Shared Objects - Area Instance Versions

Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively using area handles. Here, area locks are set and area instance versions can acquire different states.

-   [Area handles](javascript:call_link\('abenshm_area_instance_handle.htm'\))

-   [Area locks](javascript:call_link\('abenshm_area_instance_locks.htm'\))

-   [States of area instance versions](javascript:call_link\('abenshm_area_instance_state.htm'\))

The transaction SHMM provides an overview of the area instances in the shared objects memory of the current AS instance, the associated locks, and the states of the area instance versions. The class CL\_SHM\_UTILITIES is used to query the properties of area instances in programs.

Continue
[Shared Objects - Area Handles](javascript:call_link\('abenshm_area_instance_handle.htm'\))
[Shared Objects - Area Locks](javascript:call_link\('abenshm_area_instance_locks.htm'\))
[Shared Objects - States of Area Instance Versions](javascript:call_link\('abenshm_area_instance_state.htm'\))