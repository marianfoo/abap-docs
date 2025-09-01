---
title: "Shared Objects - Area Instance Versions"
description: |
  Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively using area handles. Here, area locks are set and area instance versions can acquire different states. -   Area handles(https://help.sap.com/d
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_access.htm"
abapFile: "abenshm_area_instance_access.htm"
keywords: ["do", "if", "class", "abenshm", "area", "instance", "access"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Area Instance Versions

Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively using area handles. Here, area locks are set and area instance versions can acquire different states.

-   [Area handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_handle.htm)

-   [Area locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_locks.htm)

-   [States of area instance versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_state.htm)

The transaction SHMM provides an overview of the area instances in the shared objects memory of the current AS Instance, the corresponding locks, and the states of the area instance versions. The class CL\_SHM\_UTILITIES is used to query the attributes of area instances in programs.

Continue
[Shared Objects - Area Handles](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_handle.htm)
[Shared Objects - Area Locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_locks.htm)
[Shared Objects - States of Area Instance Versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_state.htm)