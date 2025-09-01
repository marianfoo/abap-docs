---
title: "Shared Objects - States of Area Instance Versions"
description: |
  Area instance versions can have the following states. -   Under Construction An area instance version that has a change lock(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_area_instance_locks.htm) is being built. Change locks automatically create a version under constructi
version: "latest"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_area_instance_state.htm"
abapFile: "abenshm_area_instance_state.htm"
keywords: ["update", "delete", "do", "if", "case", "method", "data", "abenshm", "area", "instance", "state"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Area Instance Versions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_area_instance_access.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20States%20of%20Area%20Instance%20Versions%2C%20ABENSHM_AREA_INSTANCE_STATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
%20for%20improvement:)

Shared Objects - States of Area Instance Versions

Area instance versions can have the following states.

-   Under Construction
    
    An area instance version that has a [change lock](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_area_instance_locks.htm) is being built. Change locks automatically create a version under construction.
    
-   Active
    
    The area instance version whose construction or update was last released using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_cl_shm_area.htm) (and a database commit in the case of transactional areas) is active. All read locks are automatically set to the currently active version.
    
-   Obsolete
    
    If the construction of a new version is completed during read access on the currently active version, the new version becomes active and the version that was previously active becomes obsolete. The [read locks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_area_instance_locks.htm) on the obsolete version remain until the read is completed, but new read locks for the area instance, however, are always set on the active version.
    
-   Expired
    
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