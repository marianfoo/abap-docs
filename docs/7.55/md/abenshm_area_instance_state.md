  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Area Instance Versions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_instance_access.htm) → 

Shared Objects - States of Area Instance Versions

Area instance versions can have the following states.

1.  "Under Construction"
    

An area instance version that has a [change lock](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_instance_locks.htm) is being built. Change locks automatically create a version under construction.

1.  "Active"
    

The area instance version whose construction or update was last released using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm) (and a database commit in the case of transactional areas) is active. All read locks are automatically set to the currently active version.

1.  "Obsolete"
    

If the construction of a new version is completed during read access on the currently active version, the new version becomes active and the version that was previously active becomes obsolete. The [read locks](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_instance_locks.htm) on the obsolete version remain until the read is completed, but new read locks for the area instance, however, are always set on the active version.

1.  "Expired"
    

Once the last read lock on an obsolete version is removed, the version expires, that is, it is deleted by the Garbage Collector. No locks can be set on expired versions and they are ignored when the version number is determined.

In an area without area instance versioning, there is always only one area instance version that exists in one of the states listed above. In an area with versioning, there can be multiple versions of different states in an area instance at the same time:

-   Since there can be a maximum of one change lock on an area instance, there is a maximum of one version under construction for each area instance at any given time.

-   There is a maximum of one active version for each area instance.

-   Depending on the maximum number of versions, there can be multiple obsolete versions can exist in parallel.

Hint

If a large number of obsolete area instance versions in an area still have read locks, but there is an updated version in an active state, this can indicate problematic use of shared objects.

Example

In a simple case with a maximum of two versions, the following maximums apply:

-   One active version and one version under construction

-   One active version and one obsolete version

-   One version under construction and one obsolete version