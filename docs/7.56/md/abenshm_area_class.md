  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_classes.htm) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_cl_abap_memory_area.htm) →  [Shared Objects - CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_cl_shm_area.htm) → 

Shared Objects - Area Classes

An area class is generated as a subclass of the class [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_cl_shm_area.htm) when an area is created using transaction SHMA. Its instances serve as [area handles](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_handle_glosry.htm "Glossary Entry") for the [area instance versions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of this area. The name of an area class is the same as the name of the area, which should therefore start with CL\_.

Area classes can be displayed in the Class Builder, but cannot be changed there. The structure of an area class depends on the definition of the area in transaction SHMA. After the properties of an area have been changed, the area class is regenerated if necessary.

-   [Static Attributes](#@@ITOC@@ABENSHM_AREA_CLASS_1)
    -   [AREA\_NAME](#@@ITOC@@ABENSHM_AREA_CLASS_2)
-   [Instance Attributes](#@@ITOC@@ABENSHM_AREA_CLASS_3)
    -   [ROOT](#@@ITOC@@ABENSHM_AREA_CLASS_4)
-   [Static Methods](#@@ITOC@@ABENSHM_AREA_CLASS_5)
    -   [ATTACH\_FOR\_READ](#@@ITOC@@ABENSHM_AREA_CLASS_6)
    -   [ATTACH\_FOR\_WRITE](#@@ITOC@@ABENSHM_AREA_CLASS_7)
    -   [ATTACH\_FOR\_UPDATE](#@@ITOC@@ABENSHM_AREA_CLASS_8)
    -   [DETACH\_AREA](#@@ITOC@@ABENSHM_AREA_CLASS_9)
    -   [INVALIDATE\_INSTANCE](#@@ITOC@@ABENSHM_AREA_CLASS_10)
    -   [INVALIDATE\_AREA](#@@ITOC@@ABENSHM_AREA_CLASS_11)
    -   [FREE\_INSTANCE](#@@ITOC@@ABENSHM_AREA_CLASS_12)
    -   [FREE\_AREA](#@@ITOC@@ABENSHM_AREA_CLASS_13)
    -   [GET\_INSTANCE\_INFOS](#@@ITOC@@ABENSHM_AREA_CLASS_14)
    -   [BUILD](#@@ITOC@@ABENSHM_AREA_CLASS_15)
    -   [PROPAGATE\_INSTANCE (Obsolete)](#@@ITOC@@ABENSHM_AREA_CLASS_16)
    -   [PROPAGATE\_AREA (Obsolete)](#@@ITOC@@ABENSHM_AREA_CLASS_17)
-   [Instance Methods](#@@ITOC@@ABENSHM_AREA_CLASS_18)
    -   [SET\_ROOT](#@@ITOC@@ABENSHM_AREA_CLASS_19)

Hint

If a component specified here is missing in an existing area class, it may be a release-specific enhancement. All components should be available once the class is generated again in transaction SHMA.

Static Attributes

AREA\_NAME

Constant of the type SHM\_AREA\_NAME: Contains the name of the current class or area.

Instance Attributes

ROOT

Reference variable of the type REF TO area\_root\_class, where area\_root\_class is the [area root class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_data_class_glosry.htm "Glossary Entry") of the area. This attribute has the READ-ONLY property and is used for direct reads of the [root object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_object_glosry.htm "Glossary Entry") of an area instance version. Access using the GET\_ROOT method is necessary in exceptional cases only, such as when using generic programming.

Static Methods

ATTACH\_FOR\_READ

Creates an area handle with a read lock for an area instance version and returns a reference to the area handle.

Input Parameters

-   INST\_NAME of the type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    
-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. Specifying the client ID is optional. The default value is the ID of the current client.
    

Return Value

-   HANDLE of the type REF TO area\_class.
    
    Reference to the created area handle, where area\_class is the current area class.
    

Exceptions

-   CX\_SHM\_INCONSISTENT
    
    The type of an object saved in the area instance does not match the definition of the object with the same name in the current [internal session](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_session_glosry.htm "Glossary Entry"). If the time stamp for the type of the shared objects is newer than the time stamp in the internal session, the application should be restarted, to ensure the internal session also uses the current version of the type. If the time stamp of the type in the internal session is newer than the time stamp of the shared object, a new area instance version should be constructed, so that the current type is used there.
    
-   CX\_SHM\_NO\_ACTIVE\_VERSION
    
    This exception is raised in the following cases:
    
    -   The area instance version does not exist, and an automatic build is not possible because there is no area constructor or displaced version (exception text: NEITHER\_BUILD\_NOR\_LOAD).
    -   The area instance version does not exist, and the area constructor was called (exception text: BUILD\_STARTED). The system does not wait for the automatic area build to be terminated when the exception is caught. If this exception is raised twice in succession with this exception text, the area constructor was not ended correctly.
    -   The area instance version does not exist but the area constructor is already being executed (exception text: BUILD\_NOT\_FINISHED).
    -   The area instance version does not exist, and the loading of a displaced version was started (exception text: LOAD\_STARTED).
    -   The area instance version does not exist, but a displaced version is already being loaded (exception text: LOAD\_NOT\_FINISHED).
-   CX\_SHM\_READ\_LOCK\_ACTIVE
    
    The area instance version is already locked for reading in the same internal session.
    
-   CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE
    
    This exception is raised in the following cases:
    
    -   The area instance does not support versioning and is already locked for changes (exception text: LOCKED\_BY\_ACTIVE\_CHANGER).
    -   The area instance does not support versioning and a user is waiting for a change lock (exception text: LOCKED\_BY\_PENDING\_CHANGER).
    -   The area instance is transactional, does not support versioning, and a change lock was released, but the database commit has not yet taken place (exception text: WAITING\_FOR\_DB\_COMMIT).
-   CX\_SHM\_PARAMETER\_ERROR
    
    The value of CL\_SHM\_AREA=>ALL\_CLIENTS was specified for the input parameter CLIENT.
    

The first four exception classes are subclasses of CX\_SHM\_ATTACH\_ERROR.

ATTACH\_FOR\_WRITE

Creates an area handle with a write lock for an area instance version and returns a reference to the area handle.

Input Parameters

-   INST\_NAME of the type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    
-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. Specifying the client ID is optional. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   ATTACH\_MODE of the type SHM\_ATTACH\_MODE
    
    Controls the lock mode. This specification is optional. The default value is CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT. Possible values are:
    
    -   CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT
        
        If there are read locks on the area instance of the specified name, they are not released. For areas with versioning, the system attempts to create a new version, whereas in areas without versioning, the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised.
        
    -   CL\_SHM\_AREA=>ATTACH\_MODE\_DETACH\_READER
        
        For areas with versioning, if there are read locks on all area instance versions of the specified name, the read locks on the oldest version are released, which deactivates them so that a new version can be created. All read locks are released for areas without versioning.
        
    -   CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT
        
        If the write lock cannot be set, the program waits for the time specified in the WAIT\_TIME parameter and tries to set the lock again before the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised. For an area without versioning, no further read locks can be set on the area instance during the wait time. It is still possible to set read locks for an area with versioning.
        
-   WAIT\_TIME of the type i
    
    Wait time in milliseconds, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE. If a value not equal to 0 is passed for WAIT\_TIME, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is not passed to ATTACH\_MODE, or if a negative value is specified for WAIT\_TIME, the exception CX\_SHM\_PARAMETER\_ERROR is raised.
    
    An attempt is made to set a write lock again in the wait time. Only one program with the parameter WAIT\_TIME can wait for an area instance at any one time. If another program tries to set another change lock with the parameter WAIT\_TIME, the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE is raised directly (exception text LOCKED\_BY\_PENDING\_CHANGER).
    
    If the write lock can be set successfully within the wait time, the program flow continues. Note that there may be a delay until the waiting program can be restarted. During this delay, no other program can set a change lock. This guarantees that the waiting program is given the write lock next.
    
    If the write lock cannot be set within the wait time, the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE is raised after the wait time (exception text:. LOCKED\_BY\_ACTIVE\_CHANGER) or CX\_SHM\_VERSION\_LIMIT\_EXCEEDED.
    

Return Value

-   HANDLE of the type REF TO area\_class.
    
    Reference to the new area handle, where area\_class is the current area class.
    

Exceptions

-   CX\_SHM\_VERSION\_LIMIT\_EXCEEDED
    
    The write lock could not be set since there was already a read lock on the area instance version and no new version could be created because this would exceed the maximum number of possible versions.
    
-   CX\_SHM\_CHANGE\_LOCK\_ACTIVE
    
    An arbitrary area instance version is already locked for changing in the same internal session. If a previous change lock was released in a transactional area, but there has been no database commit yet, this raises the exception with the exception text WAITING\_FOR\_DB\_COMMIT.
    
-   CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE
    
    This exception is raised in the following cases:
    
    -   The area instance is already locked for changes in a different internal session (exception text: LOCKED\_BY\_ACTIVE\_CHANGER).
    -   A user in a different internal session is waiting for a change lock (exception text: LOCKED\_BY\_PENDING\_CHANGER).
    -   The area instance is transactional, and a change lock was released in a different internal session, but the database commit has not yet taken place (exception text: WAITING\_FOR\_DB\_COMMIT).
-   CX\_SHM\_PENDING\_LOCK\_REMOVED
    
    This exception is raised if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE, but the lock was deleted in transaction SHMM during the wait.
    
-   CX\_SHM\_PARAMETER\_ERROR
    
    This exception is raised in the following cases:
    
    -   An invalid value was passed for the input parameter ATTACH\_MODE.
    -   A negative number was passed for the input parameter WAIT\_TIME .
    -   The value of CL\_SHM\_AREA=>ALL\_CLIENTS was specified for the input parameter CLIENT.

The first four exception classes are subclasses of CX\_SHM\_ATTACH\_ERROR.

ATTACH\_FOR\_UPDATE

Creates an area handle with an update lock for an area instance version and returns a reference to the area handle.

Input Parameters

-   INST\_NAME of the type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    
-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. Specifying the client ID is optional. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   ATTACH\_MODE of the type SHM\_ATTACH\_MODE
    
    Controls the lock mode. This specification is optional. The default value is CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT. Possible values are:
    
    -   CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT
        
        If there are read locks on the area instance of the specified name, they are not released, whereas in areas with versioning, the system attempts to create a new version. In the case of areas without versioning, the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised.
        
    -   CL\_SHM\_AREA=>ATTACH\_MODE\_DETACH\_READER
        
        For areas with versioning, if there are read locks on all area instance versions of the specified name, the read locks on the oldest version are released. This deactivates them so that a new version can be created. All read locks are released for areas without versioning.
        
    -   CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT
        
        If the update lock cannot be set, the program waits for the time specified in the WAIT\_TIME parameter and tries to set the lock again before the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised. For an area without versioning, no further shared locks can be set on the area instance during the wait time. It is still possible to set read locks for an area with versioning.
        
-   WAIT\_TIME of the type i
    
    Wait time in milliseconds, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE. If a value not equal to 0 is passed for WAIT\_TIME, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is not passed to ATTACH\_MODE, or if a negative value is specified for WAIT\_TIME, the exception CX\_SHM\_PARAMETER\_ERROR is raised.
    
    An attempt is made to set an update lock again during the wait time. Only one program with the parameter WAIT\_TIME can wait for an area instance at any one time. If a different program tries to set another change lock with the parameter WAIT\_TIME, the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE is raised directly (exception text LOCKED\_BY\_PENDING\_CHANGER).
    
    If the update lock can be set within the wait time, the program flow continues. Note that there may be a delay until the waiting program can be restarted. During this delay, no other program can set a change lock. This guarantees that the waiting program receives the update lock next.
    
    If the update lock cannot be set within the wait time, the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE is raised after the wait time (exception text: LOCKED\_BY\_ACTIVE\_CHANGER).
    

Note

Since an active area instance version is required for setting an update lock, an area constructor called automatically is started when the ATTACH\_FOR\_UPDATE method is called. The following applies when using the parameter WAIT\_TIME: If the area constructor can be started, there is a wait period. If the area constructor is ended before the end of the wait time, the update lock is set. If the area constructor ends without being able to construct an active version, the wait is terminated before the end of the wait time. If the area constructor does not end within the wait time, the exception CX\_SHM\_NO\_ACTIVE\_VERSION is raised (exception text: BUILD\_NOT\_FINISHED).

Return Value

-   HANDLE of the type REF TO area\_class.
    
    Reference to the created area handle, where area\_class is the current area class.
    

Exceptions

-   CX\_SHM\_INCONSISTENT
    
    The type of an object saved in the area instance does not match the definition of the object with the same name in the current program.
    
-   CX\_SHM\_NO\_ACTIVE\_VERSION
    
    This exception is raised in the following cases:
    
    -   The area instance version does not exist, and an automatic build is not possible because an area constructor or a displaced version does not exist (exception text: NEITHER\_BUILD\_NOR\_LOAD).
    -   The area instance version does not exist, and the area constructor was called (exception text: BUILD\_STARTED).
    -   The area instance version does not exist but the area constructor is already being executed (exception text: BUILD\_NOT\_FINISHED).
    -   The area instance version does not exist and a displaced version was started (exception text: LOAD\_STARTED).
    -   The area instance version does not exist, but the loading of a displaced version has already started (exception text: LOAD\_NOT\_FINISHED).
-   CX\_SHM\_VERSION\_LIMIT\_EXCEEDED
    
    The update lock could not be set since there was already a read lock on the area instance version and no new version could be created because this would exceed the maximum number of possible versions.
    
-   CX\_SHM\_CHANGE\_LOCK\_ACTIVE
    
    An arbitrary area instance version is already locked for changing in the same internal session. If a previous change lock was released in a transactional area, but there has been no database commit yet, this raises the exception with the exception text WAITING\_FOR\_DB\_COMMIT.
    
-   CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE
    
    This exception is raised in the following cases:
    
    -   The area instance is already locked for changes in a different internal session (exception text: LOCKED\_BY\_ACTIVE\_CHANGER).
    -   A user in a different internal session is waiting for a change lock (exception text: LOCKED\_BY\_PENDING\_CHANGER).
    -   The area instance is transactional, and a change lock was released in a different internal session, but the database commit has not yet taken place (exception text: WAITING\_FOR\_DB\_COMMIT).
-   CX\_SHM\_PENDING\_LOCK\_REMOVED
    
    This exception is raised if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE, but the lock was deleted in transaction SHMM during the wait.
    
-   CX\_SHM\_PARAMETER\_ERROR
    
    This exception is raised in the following cases:
    
    -   An invalid value was passed for the input parameter ATTACH\_MODE.
    -   A negative number was passed for the input parameter WAIT\_TIME .
    -   The value of CL\_SHM\_AREA=>ALL\_CLIENTS was specified for the input parameter CLIENT.

The first six exception classes are subclasses of CX\_SHM\_ATTACH\_ERROR.

DETACH\_AREA

Releases all locks of the current internal session on the area instances versions of the associated area and deactivates all of the area handles in the current internal session. If a write lock or an update lock is released, any changes that were made to the area instance versions are discarded until then.

Input Parameters

-   CLIENT of the type SHM\_CLIENT
    
    Optional client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    

Return Value

-   RC of the type SHM\_RC
    
    Possible values:
    
    -   CL\_SHM\_AREA=>RC\_DONE if all locks were released.
    -   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no locks were released because no locks existed in the current session.

INVALIDATE\_INSTANCE

For non-transactional areas, this method immediately sets the state of the active area instance version of the area instance of transferred name to obsolete and for transactional areas with the next database commit. No new locks can be set on this area instance version afterwards. Any existing read locks are not released. How existing change locks are handled depends on the input parameter TERMINATE\_CHANGER.

Input Parameters

-   INST\_NAME of the type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    
-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   TERMINATE\_CHANGER of the type abap\_bool
    
    Controls how change locks are handled. Possible values are:
    
    -   abap\_true existing change locks are released (default setting).
    -   abap\_false existing change locks are not released.
-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER (only in areas with the Application Server area binding)
    
    Controls cross-server invalidation. Possible values are:
    
    -   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER, only the area instance versions of the current AS instance are invalidated (default setting).
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS, the area instance versions of all AS instances are invalidated.
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

Caution: Once this method is executed and abap\_true is passed to TERMINATE\_CHANGER, all programs in which there is still a write lock for the invalidated area instance are terminated with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

Return Value

-   RC of the type SHM\_RC
    
    Possible values in non-transactional areas:
    
    -   CL\_SHM\_AREA=>RC\_DONE if the active area instance version was set to obsolete. If the value abap\_true was passed to TERMINATE\_CHANGER even if a change lock was released.
    -   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no active area instance version is available and if the value abap\_true was passed to TERMINATE\_CHANGER, if no change lock exists .
    -   CL\_SHM\_AREA=>RC\_INSTANCE\_NAME\_NOT\_FOUND if no area instance of the specified name exists.
    
    In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.
    

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR
    
    An invalid value was passed for the input parameter TERMINATE\_CHANGER.
    

INVALIDATE\_AREA

In non-transactional areas, this method immediately sets the state of all active area instance versions of the area in the current internal session to obsolete and for transactional areas with the next database commit. No new locks can be set on these area instance versions afterwards. Any read locks are not released. How existing change locks are handled depends on the input parameter TERMINATE\_CHANGER.

Input Parameters

-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   TERMINATE\_CHANGER of the type abap\_bool
    
    Controls how change locks are handled. Possible values are:
    
    -   abap\_true existing change locks are released (default setting).
    -   abap\_false existing change locks are not released.
-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER (only in areas with the Application Server area binding)
    
    Controls cross-server invalidation. Possible values are:
    
    -   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER, only the area instance versions of the current AS instance are invalidated (default setting).
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS, the area instance versions of all AS instances are invalidated.
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL, the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

Caution

Once this method is executed and abap\_true is passed to TERMINATE\_CHANGER, all programs in which there are still change locks for the invalidated area instance versions are terminated with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

Return Value

-   RC of the type SHM\_RC
    
    Possible values in non-transactional areas:
    
    -   CL\_SHM\_AREA=>RC\_DONE if at least one active area instance version was set to obsolete. If the value abap\_true was passed to TERMINATE\_CHANGER, even if one or more change locks were released.
    -   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no active area instance version exists and if the value abap\_true was passed to TERMINATE\_CHANGER, if no change lock exists.
    
    In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.
    

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR
    
    An invalid value was passed for the input parameter TERMINATE\_CHANGER.
    

FREE\_INSTANCE

This method sets the state of all (active and obsolete) area instance versions of the area instance for the passed name to expired, and all read locks are released. No new read locks and update locks can be set on this area instance version afterwards. How existing change locks are handled depends on the input parameter TERMINATE\_CHANGER. In non-transactional areas, the state of the area instance version is changed immediately; in transactional areas, the state changes after the next database commit.

Caution

After this method has been executed, all programs in which area handles still exist for the released area instance versions are terminated with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

Input Parameters

-   INST\_NAME of the type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    
-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   TERMINATE\_CHANGER of the type abap\_bool
    
    Controls how change locks are handled. Possible values are:
    
    -   abap\_true existing change locks are released (default setting).
    -   abap\_false existing change locks are not released.
-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER, only in areas with the Application Server area binding
    
    Specifies cross-server invalidation. Possible values are:
    
    -   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER, only the area instance versions of the current AS instance are invalidated (default setting).
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS, the area instance versions of all AS instances are invalidated.
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL, the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

Return Value

-   RC of the type SHM\_RC
    
    Possible values in non-transactional areas:
    
    -   CL\_SHM\_AREA=>RC\_DONE if an active or an obsolete area instance version was set to expired. If the value abap\_true was passed to TERMINATE\_CHANGER, even if a change lock was released.
    -   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE, if no active or obsolete area instance versions exist and if the value abap\_true was passed to TERMINATE\_CHANGER, if no change lock exists.
    -   CL\_SHM\_AREA=>RC\_INSTANCE\_NAME\_NOT\_FOUND if no area instance of the specified name exists.
    
    In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.
    

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR
    
    An invalid value was passed for the input parameter TERMINATE\_CHANGER.
    

FREE\_AREA

This method sets the state of all (active and obsolete) area instance versions of the area to expired, and all read locks are released. No new locks can be set on these area instance versions afterwards. How existing change locks are handled depends on the input parameter TERMINATE\_CHANGER. In non-transactional areas, the change takes place immediately; in transactional areas, the change takes place after the next database commit.

Input Parameters

-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   TERMINATE\_CHANGER of the type abap\_bool
    
    Controls how change locks are handled. Possible values are:
    
    -   abap\_true existing change locks are released (default setting).
    -   abap\_false existing change locks are not released.
-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER, only in areas with the Application Server area binding
    
    Specifies cross-server invalidation. Possible values are:
    
    -   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER, only the area instance versions of the current AS instance are invalidated (default setting).
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS, the area instance versions of all AS instances are invalidated.
    -   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL, the area instance versions of all AS instances are invalidated, apart from the current AS instance. This enables changes to be made to areas of the current AS instance directly, without the database having to create the entire area again.

Return Value

-   RC of the type SHM\_RC
-   Possible values in non-transactional areas:
    
    -   CL\_SHM\_AREA=>RC\_DONE if at least one active or obsolete area instance version was set to expired. If the value abap\_true was passed to TERMINATE\_CHANGER, even if one or more change locks were released.
    -   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no active or obsolete area instance versions exist and if the value abap\_true was passed to TERMINATE\_CHANGER, if no change lock exists.
    
    In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.
    

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR
    
    An invalid value was passed for the input parameter TERMINATE\_CHANGER.
    

Caution

After this method has been executed, all programs in which area handles still exist for the released area instance versions are terminated with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

GET\_INSTANCE\_INFOS

Returns the names of all active or obsolete instances of the area on the current AS instance that are under construction.

Input Parameters

-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    

Return Value

-   INFOS of the type SHM\_INST\_INFOS
    
    SHM\_INST\_INFOS is an internal table of line type SHM\_INST\_INFO with the following components:
    
    -   CLIENT of the type MANDT. The client ID in client-dependent areas. Initial if areas are client-independent.
    -   NAME of the type SHM\_INST\_NAME, area name. This name is CL\_SHM\_AREA=>DEFAULT\_INSTANCE for areas with the default name.
    -   VERSIONS\_IN\_BUILD of the type SHM\_VERS\_CNT. The number of area instance versions that are currently being built. Possible values are 0 or 1.
    -   VERSIONS\_ACTIVE of the type SHM\_VERS\_CNT. The number of currently active area instance versions. Possible values are 0 or 1.
    -   VERSIONS\_OBSOLETE of the type SHM\_VERS\_CNT. The number of obsolete area instance versions. Possible values range from 0 to the maximum number of area instance versions (component MAX\_VERSIONS of the PROPERTIES attribute of the class CL\_SHM\_AREA).
    
    An empty table is returned if there are no area instances for the area. The number of expired area instance versions is ignored.
    

BUILD

Calls the [area constructor](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenshm_area_constructor_class.htm) explicitly . The area constructor is executed in the current internal session. If the areas are client-dependent, the area of the current client is built.

Input Parameters

-   INST\_NAME of the type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    

Exceptions

-   CX\_SHM\_BUILD\_FAILED
    
    An error occurred when the area constructor was executed.
    
-   CX\_SHMA\_NOT\_CONFIGURED
    
    No area constructor class is bound to the area class.
    
-   CX\_SHMA\_INCONSISTENT
    
    The area class must be regenerated.
    

PROPAGATE\_INSTANCE (Obsolete)

This method is only available if the area is transactional. It has the same effect as executing the INVALIDATE\_INSTANCE method and passing the value of abap\_true to the input parameter TERMINATE\_CHANGER on all AS instances in the current AS ABAP. This propagation takes place with the next database commit.

Caution

This method should no longer be used. Instead, the parameter AFFECT\_SERVER of the FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE methods are available.

Input Parameters

-   INST\_NAME of the type SHM\_INST\_NAME
    
    Name of the area instance version. Specifying the name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.
    
-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   AFFECTING\_LOCAL\_SERVER of the type abap\_bool
    
    Controls whether the status change is also performed on the current AS instance. Possible values are:
    
    -   abap\_true. The active area instance version is set to obsolete on the current AS instance. This setting can be used if the content of the area instance is to be changed using the area constructor, after the database content has been changed.
    -   abap\_false. The active area instance version is not set to obsolete on the current AS instance (default setting). This means that a new version created on an AS instance can be retained while only the active versions on other servers are invalidated.

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR
    
    An invalid value was passed for the input parameter AFFECTING\_LOCAL\_SERVER.
    

PROPAGATE\_AREA (Obsolete)

This method is only available if the area is transactional. It has the same effect as executing the INVALIDATE\_AREA method and passing the value of abap\_true to the input parameter TERMINATE\_CHANGER on all AS instances in the current AS ABAP. This propagation takes place with the next database commit.

Caution

This method should no longer be used. Instead, the parameter AFFECT\_SERVER of the FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE methods are available.

Input Parameters

-   CLIENT of the type SHM\_CLIENT
    
    Client ID if the area is client-dependent. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter must not be passed in [application clients](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenapplication_client_glosry.htm "Glossary Entry").
    
-   AFFECTING\_LOCAL\_SERVER of the type abap\_bool
    
    Controls whether the status change is also performed on the current AS instance. Possible values are:
    
    -   abap\_true. The active area instance versions are set to obsolete on the current AS instance.
    -   abap\_false. The active area instance versions are not set to obsolete on the current AS instance (default setting).

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR
    
    An invalid value was passed for the input parameter AFFECTING\_LOCAL\_SERVER.
    

Instance Methods

SET\_ROOT

This method defines the [root object](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_object_glosry.htm "Glossary Entry") (instance of the area root class) of the area instance version. Before a change lock can be released using the DETACH\_COMMIT method, the root object must be reset at least once using SET\_ROOT. Updates are possible. The SET\_ROOT method can only be called in area handles with change locks.

Input Parameters

-   ROOT of the type REF TO area\_root\_class, where [area\_root\_class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenroot_data_class_glosry.htm "Glossary Entry") is the area root class of the area.

Exceptions

-   CX\_SHM\_WRONG\_HANDLE
    
    The method was called using an area handle with a read lock or an area handle in which the DETACH\_COMMIT method failed.
    
-   CX\_SHM\_INITIAL\_REFERENCE
    
    The reference variable passed to ROOT is initial.