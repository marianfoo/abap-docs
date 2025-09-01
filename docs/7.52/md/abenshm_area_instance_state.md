---
title: "Shared Objects - States of Area Instance Versions"
description: |
  Area instance versions can have the following states. 1.  'Building' An area instance version that has a change lock(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm) is being built. Change locks automatically create a building version. 1.  'Active' The ar
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_state.htm"
abapFile: "abenshm_area_instance_state.htm"
keywords: ["update", "delete", "do", "if", "case", "method", "data", "abenshm", "area", "instance", "state"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Area Instance Versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_access.htm) → 

Shared Objects - States of Area Instance Versions

Area instance versions can have the following states.

1.  "Building"

An area instance version that has a [change lock](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm) is being built. Change locks automatically create a building version.

1.  "Active"

The area instance version whose build or update was last released using the [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) method (and a database commit in the case of transactional areas) is active. All shared locks are set automatically to the current active version.

1.  "Obsolete"

If a new version becomes complete when reads are performed on the currently active version of the build, the new version becomes active and the version that was previously active becomes obsolete. The [shared locks](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm) on the obsolete version remain until the read process is complete; new shared locks for the area instance are always set on the active version, however.

1.  "Expired"

Once the last shared lock on an obsolete version is removed, the version expires (it is deleted by the garbage collector). No locks can be set on expired versions and they are ignored when the version number is determined.

In an area without area instance versioning, there is always only one area instance version, which is available in one of the states mentioned above. In an area with versioning, there can be different states in an area instance at the same time:

-   Since there can be a maximum of one change lock on an area instance, there is a maximum of one building version for each area instance at any given time.

-   There is a maximum of one active version for each area instance.

-   Depending on the maximum version number, multiple obsolete versions can exist in parallel.

Note

If there are a large number of obsolete area instance versions for an area that still have shared locks, but there is an updated version in an active state, this can indicate a problem with the use of shared objects.

Example

In a simple case with a maximum of two version, there can be a maximum of:

-   One active version and one building version

-   One active version and one obsolete version

-   One building version and one obsolete version