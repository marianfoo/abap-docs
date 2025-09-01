  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Area Instance Versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_access.htm) → 

Shared Objects - States of Area Instance Versions

Area instance versions can have the following states.

1.  "Building"

An area instance version that has a [change lock](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_locks.htm) is being built. Change locks create a building version automatically.

1.  "Active"

The area instance version whose build or update was last released using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_shm_area.htm) (and a database commit in the case of transactional areas) is active. All shared locks are set automatically to the current active version.

1.  "Obsolete"

If a new version becomes complete when reads are performed on the currently active version of the build, the new version becomes active and the version that was previously active becomes obsolete. The [shared locks](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_instance_locks.htm) on the obsolete version remain until the read is complete. Any new shared locks for the area instance, however, are always set on the active version.

1.  "Expired"

Once the last shared lock on an obsolete version is removed, the version expires (it is deleted by the garbage collector). No locks can be set on expired versions and they are ignored when the version number is determined.

In an area without area instance versioning, there is always only one area instance version and this version exists in one of the states mentioned. In an area with versioning, there can be multiple states in an area instance at the same time:

-   There can be a maximum of one change lock on an area instance, which means there is a maximum of one building version for each area instance at any given time.

-   There is a maximum of one active version for each area instance.

-   Depending on the maximum number of versions, multiple obsolete versions can exist in parallel.

Note

If a large number of obsolete area instance versions in an area still have shared locks, but there is an updated version in an active state, this can indicate a problem with the use of shared objects.

Example

In a simple case with a maximum of two versions, the following maximums apply:

-   One active version and one building version

-   One active version and one obsolete version

-   One building version and one obsolete version