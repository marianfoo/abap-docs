---
title: "Shared Objects - Area Locks"
description: |
  An area lock is set on the area instance version each time an area instance version is accessed, that is, each time an area handle(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_handle.htm) is bound. The lock exists as long as an area handle is bound to an area in
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_locks.htm"
abapFile: "abenshm_area_instance_locks.htm"
keywords: ["update", "delete", "do", "while", "if", "case", "try", "method", "class", "data", "abenshm", "area", "instance", "locks"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Area Instance Versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_access.htm) → 

Shared Objects - Area Locks

An area lock is set on the area instance version each time an area instance version is accessed, that is, each time an [area handle](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_instance_handle.htm) is bound. The lock exists as long as an area handle is bound to an area instance version and rejects any attempts made to bind other area handles to the area instance. As long as no lock is set, a program cannot access area instances.

Shared Locks

A shared lock is set when an area handle is bound to an area instance version using the method [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm). There can be a maximum of one shared lock on an area instance within an [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Across multiple sessions, there can be multiple shared locks on an area instance version.

Once a shared lock is set in an internal session, reads can be performed on the corresponding area instance version and its objects until the method [DETACH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) is executed.

Note

If a shared lock is always set immediately before an access and is then deleted again afterwards, note that the same version may not necessarily be accessed the next time. A shared lock is always set on the active area instance version.

Exclusive Locks

An change lock is either an exclusive lock or an update lock. An exclusive lock is set if an area handle is bound to an area instance version using the method [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm), and an update lock is set if an area handle is bound using the method [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm).

On an application server, there can be a maximum of one exclusive lock on an area instance. An exclusive lock locks an area instance exclusively, that is, no parallel shared locks are possible on this version. Parallel reads are possible on the same area instance if area instance versioning is activated.

Once an exclusive lock has been set in an internal session, reads and changes on the area instance version and its objects are possible until the methods [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) or [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) are executed.

-   A new, empty area instance version is created when writes are performed.

-   The update:

-   Binds the existing active version for changing in the case of areas without versioning

-   Creates a copy of the active area instance version and binds it for changing in the case of areas with versioning

Within an internal session, a maximum of one exclusive lock can be set for an area instance, using [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm) and [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm). These methods cannot be used to set an exclusive lock if an exclusive lock already exists within the same internal session for any area instance version; attempting to do so raises the exception CX\_SHM\_CHANGE\_LOCK\_ACTIVE. On the other hand, the method [MULTI\_ATTACH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) can be used to set multiple parallel exclusive locks on multiple area instance versions.

Releasing Locks

Unless the method [DETACH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) is used, shared locks are released automatically when an internal session ends. Exclusive locks must always be released explicitly using [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) or [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm). In the following situations, there must not be any exclusive locks for an area instance version, since this would produce the runtime error SYSTEM\_SHM\_CHANGE\_LOCK\_ACTIVE:

-   Closing of an internal session (except when using the statement LEAVE TRANSACTION (or function "/n")). The statement LEAVE TRANSACTION releases all exclusive locks using the method [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm).

-   Database commit in the case of transactional areas.

-   Program calls with SUBMIT AND RETURN and CALL TRANSACTION in the case of transactional areas.

If all reference variables to an area handle are initialized and the area handle is then deleted by the garbage collector while it holds a lock, the lock remains and is not deleted. The area instance version can still be accessed, although exclusive locks can no longer be released. This produces the runtime error above.

Note

In transactional areas, note that an exclusive lock released using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) has to be released finally with a database commit before an internal session or program call (SUBMIT, CALL TRANSACTION, or LEAVE TO TRANSACTION) is closed.