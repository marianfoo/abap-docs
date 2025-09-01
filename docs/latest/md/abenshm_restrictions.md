  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shared_objects.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20Restrictions%2C%20ABENSHM_RESTRICTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Shared Objects - Restrictions

Currently, the following restrictions apply to shared objects:

-   When data objects referenced using data references are stored, there is a restriction that the dynamic type cannot have been created at program runtime. Direct references to data elements and table types in the ABAP Dictionary are, however, possible.
-   Memory bottlenecks can occur in the shared objects memory, but can also be handled. The associated exception class is CX\_SHM\_OUT\_OF\_MEMORY.
-   There is no memory restriction for logical areas, which generally consist of many area instances. There are currently only memory restrictions for individual area instances.
-   The lifetime of area instances cannot be bound to the lifetime of user sessions, ABAP sessions, or transactions. Area instances currently exist as long as the AS instance.

Hint

On 32-bit systems, only a limited amount of memory space is available for storing shared objects, due to the limited address space. For this reason, shared objects could only be used on 32-bit systems under certain conditions.