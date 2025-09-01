  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Area Instance Versions

Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively by means of area handles. Area locks are set and area instance versions can acquire different states.

-   [Area Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_handle.htm)

-   [Area Locks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm)

-   [States of Area Instance Versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_state.htm)

The transaction SHMM provides an overview of the area instances in the shared objects memory of the current application server, the corresponding locks, and the states of the area instance versions. The class CL\_SHM\_UTILITIES is used to query the attributes of area instances in programs.

Continue
[Shared Objects - Area Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_handle.htm)
[Shared Objects - Area Locks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm)
[Shared Objects - States of Area Instance Versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_state.htm)