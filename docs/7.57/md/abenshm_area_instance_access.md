---
title: "Shared Objects - Area Instance Versions"
description: |
  Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively using area handles. Here, area locks are set and area instance versions can acquire different states. -   Area handles(https://help.sap.com/d
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_access.htm"
abapFile: "abenshm_area_instance_access.htm"
keywords: ["do", "if", "class", "abenshm", "area", "instance", "access"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Area Instance Versions, ABENSHM_AREA_INSTANCE_ACCESS, 757%0D%0A%0D%0
AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Area Instance Versions

Shared objects are stored and managed in area instance versions. In an ABAP program, area instance versions and thus shared objects are accessed exclusively using area handles. Here, area locks are set and area instance versions can acquire different states.

-   [Area handles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_handle.htm)
-   [Area locks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_locks.htm)
-   [States of area instance versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_state.htm)

The transaction SHMM provides an overview of the area instances in the shared objects memory of the current AS instance, the associated locks, and the states of the area instance versions. The class CL\_SHM\_UTILITIES is used to query the properties of area instances in programs.

Continue
[Shared Objects - Area Handles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_handle.htm)
[Shared Objects - Area Locks](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_locks.htm)
[Shared Objects - States of Area Instance Versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_state.htm)