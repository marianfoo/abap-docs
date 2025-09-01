  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Area Instance Versions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_access.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Area Locks, ABENSHM_AREA_INSTANCE_LOCKS, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Area Locks

An area lock is set on the area instance version each time an area instance version is accessed, that is, each time an [area handle](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_instance_handle.htm) is bound. The lock exists as long as an area handle is bound to an area instance version and it rejects any attempts to bind other area handles to the area instance. As long as no lock is set, a program cannot access area instances.

Read Locks   

A read lock is set when an area handle is bound to an area instance version using the method [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_class.htm). There can be a maximum of one read lock on an area instance within an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"). Across multiple sessions, there can be multiple read locks on an area instance version.

Once a read lock has been set in an internal session, reads can be performed on the corresponding area instance version and its objects until the method [DETACH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) is executed.

Hint

If a read lock is always set immediately before an access, and then deleted afterwards, note that the same version may not necessarily be accessed the next time. A read lock is always set on the active area instance version.

Change Locks   

A change lock is either a write lock or an update lock. A write lock is set if an area handle is bound to an area instance version using the method [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_class.htm) and an update lock is set if an area handle is bound using the method [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_class.htm).

On an AS instance, there can be a maximum of one change lock on an area instance. A change lock locks an area instance exclusively, which means that no parallel read locks are possible on this version. Parallel reads are only possible on the same area instance if area instance versioning is activated.

Once a change lock has been set in an internal session, reads and writes can be performed on the area instance version and its objects until the methods [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) or [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) are executed.

-   A new, empty area instance version is created during write access.
-   The update does the following:
    -   Binds the existing active version for writes in areas without versioning
    -   Creates a copy of the active area instance version and binds it for writes in areas with versioning

Within an internal session, a maximum of one change lock can be set for an area instance using [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_class.htm) and [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_area_class.htm). These methods cannot be used to set a change lock if one already exists within the same internal session on any area instance version, otherwise the exception CX\_SHM\_CHANGE\_LOCK\_ACTIVE would be raised. The method [MULTI\_ATTACH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm), on the other hand, can be used to set multiple parallel change locks on multiple area instance versions.

Releasing Locks   

In addition to using the method [DETACH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm), read locks are also released automatically when an internal session is ended. Change locks must always be released explicitly using [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) or [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm). In the following situations, there can be no change locks for an area instance version, otherwise the runtime error SYSTEM\_SHM\_CHANGE\_LOCK\_ACTIVE would occur:

-   Closing an internal session except with the statement LEAVE TRANSACTION (or the function "/n")). The statement LEAVE TRANSACTION releases all change locks using the method [DETACH\_ROLLBACK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm).
-   Database commit in the case of transactional areas.
-   Program calls using SUBMIT AND RETURN and CALL TRANSACTION in the case of transactional areas.

If all reference variables are initialized to an area handle and the area handle is then deleted by the Garbage Collector while it holds a lock, the lock remains and is not deleted. The area instance version can still be accessed, but change locks can no longer be released and the above runtime error occurs.

Hint

In transactional areas, note that a change lock released using the method [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) still has to be released with a database commit before an internal session or program call (SUBMIT, CALL TRANSACTION, or LEAVE TO TRANSACTION) is closed.