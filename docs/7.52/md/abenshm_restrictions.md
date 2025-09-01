---
title: "Shared Objects - Restrictions"
description: |
  At present, the following restrictions apply to shared objects: -   On 32-bit systems, only a limited amount of memory space is available for storing shared objects, due to the restricted address space. For this reason, shared objects can only be used on 32-bit systems under certain conditions. -
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_restrictions.htm"
abapFile: "abenshm_restrictions.htm"
keywords: ["do", "if", "class", "data", "types", "abenshm", "restrictions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Restrictions

At present, the following restrictions apply to shared objects:

-   On 32-bit systems, only a limited amount of memory space is available for storing shared objects, due to the restricted address space. For this reason, shared objects can only be used on 32-bit systems under certain conditions.

-   When data objects that are referenced using data references are stored, there is also the restriction that the dynamic type cannot be created at program runtime. A direct reference to data elements and table types belonging to ABAP Dictionary is possible however.

-   The memory consumption of shared objects in the shared memory cannot be monitored using Memory Inspector.

-   Memory bottlenecks can occur in the shared objects memory, but they can be dealt with. The associated exception class is CX\_SHM\_OUT\_OF\_MEMORY.

-   There is no memory restriction for logical areas, which generally consist of multiple area instances. There are currently only memory restrictions for individual area instances.

-   The lifetime of area instances cannot be bound to that of user sessions, ABAP sessions, or transactions. Area instances currently exist as long as the application server instance.