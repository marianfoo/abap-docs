  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) → 

Shared Objects - Area Instance Versions

Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively by means of area handles. Area locks are set and area instance versions can acquire different states.

-   [Area Handles](javascript:call_link\('abenshm_area_instance_handle.htm'\))

-   [Area Locks](javascript:call_link\('abenshm_area_instance_locks.htm'\))

-   [States of Area Instance Versions](javascript:call_link\('abenshm_area_instance_state.htm'\))

The transaction SHMM provides an overview of the area instances in the shared objects memory of the current application server, the corresponding locks, and the states of the area instance versions. The class CL\_SHM\_UTILITIES is used to query the attributes of area instances in programs.

Continue
[Shared Objects - Area Handles](javascript:call_link\('abenshm_area_instance_handle.htm'\))
[Shared Objects - Area Locks](javascript:call_link\('abenshm_area_instance_locks.htm'\))
[Shared Objects - States of Area Instance Versions](javascript:call_link\('abenshm_area_instance_state.htm'\))