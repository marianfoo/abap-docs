---
title: "Shared Objects - Restrictions"
description: |
  Currently, the following restrictions apply to shared objects: -   When data objects referenced using data references are stored, there is a restriction that the dynamic type cannot have been created at program runtime. Direct references to data elements and table types in the ABAP Dictionary are, h
version: "7.55"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_restrictions.htm"
abapFile: "abenshm_restrictions.htm"
keywords: ["do", "if", "class", "data", "types", "abenshm", "restrictions"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shared_objects.htm) → 

Shared Objects - Restrictions

Currently, the following restrictions apply to shared objects:

-   When data objects referenced using data references are stored, there is a restriction that the dynamic type cannot have been created at program runtime. Direct references to data elements and table types in the ABAP Dictionary are, however, possible.

-   The memory consumption of shared objects in the shared memory cannot be monitored by the Memory Inspector.

-   Memory bottlenecks can occur in the shared objects memory, but can also be handled. The associated exception class is CX\_SHM\_OUT\_OF\_MEMORY.

-   There is no memory restriction for logical areas, which generally consist of many area instances. There are currently only memory restrictions for individual area instances.

-   The lifetime of area instances cannot be bound to the lifetime of user sessions, ABAP sessions, or transactions. Area instances currently exist as long as the AS instance.

Hint

On 32-bit systems, only a limited amount of memory space is available for storing shared objects, due to the limited address space. For this reason, shared objects could only be used on 32-bit systems under certain conditions.