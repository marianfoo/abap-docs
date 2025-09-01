---
title: "Shared Objects - Area Classes"
description: |
  An area class is generated as a subclass of class CL_SHM_AREA(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) when an area is created using transaction SHMA. Its instances are used as area handles(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/ab
version: "7.52"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_class.htm"
abapFile: "abenshm_area_class.htm"
keywords: ["update", "delete", "do", "while", "if", "case", "try", "method", "class", "data", "internal-table", "abenshm", "area"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_classes.htm) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_abap_memory_area.htm) →  [Shared Objects - CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) → 

Shared Objects - Area Classes

An area class is generated as a subclass of class [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_cl_shm_area.htm) when an area is created using transaction SHMA. Its instances are used as [area handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_handle_glosry.htm "Glossary Entry") for the [area instance versions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of this area. The name of an area class is the same as the name of the area, which should therefore start with CL\_.

Area classes can be displayed in Class Builder, although they cannot be changed there. The structure of an area class depends on the definition of the area in transaction SHMA. After the properties of an area have been changed, the area class is regenerated if necessary.

-   [Static Attributes](#abenshm-area-class-1--------area--name---@ITOC@@ABENSHM_AREA_CLASS_2)

-   [Instance Attributes](#abenshm-area-class-3--------root---@ITOC@@ABENSHM_AREA_CLASS_4)

-   [Static Methods](#abenshm-area-class-5--------attach--for--read---@ITOC@@ABENSHM_AREA_CLASS_6)

-   [ATTACH\_FOR\_WRITE](#abenshm-area-class-7--------attach--for--update---@ITOC@@ABENSHM_AREA_CLASS_8)

-   [DETACH\_AREA](#abenshm-area-class-9--------invalidate--instance---@ITOC@@ABENSHM_AREA_CLASS_10)

-   [INVALIDATE\_AREA](#abenshm-area-class-11--------free--instance---@ITOC@@ABENSHM_AREA_CLASS_12)

-   [FREE\_AREA](#abenshm-area-class-13--------get--instance--infos---@ITOC@@ABENSHM_AREA_CLASS_14)

-   [BUILD](#abenshm-area-class-15--------propagate--instance--obsolete----@ITOC@@ABENSHM_AREA_CLASS_16)

-   [PROPAGATE\_AREA (obsolete)](#abenshm-area-class-17--------instance-methods---@ITOC@@ABENSHM_AREA_CLASS_18)

-   [SET\_ROOT](#@@ITOC@@ABENSHM_AREA_CLASS_19)

Note

If a component specified here is missing in an existing area class, the component may be a release-specific enhancement. All components should be present once the class is generated again in transaction SHMA.

Static Attributes

AREA\_NAME

Constant of type SHM\_AREA\_NAME: Contains the name of the current class or area.

Instance Attributes

ROOT

Reference variable of the type REF TO area\_root\_class, where area\_root\_class is the [area root class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_data_class_glosry.htm "Glossary Entry") of the area. This attribute has the READ-ONLY property and is used for direct reads of the [root object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_object_glosry.htm "Glossary Entry") of an area instance version. Access using the GET\_ROOT method is necessary in exceptional cases only, such as when using generic programming.

Static Methods

ATTACH\_FOR\_READ

Creates an area handle with a shared lock for an area instance version and returns a reference to the area handle.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. The name is optional. The default value is CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The client ID is optional. The default value is the ID of the current client.

Return Code

-   HANDLE of the type REF TO area\_class.

Reference to the new area handle, where area\_class is the current area class.

Exceptions

-   CX\_SHM\_INCONSISTENT

The type of an object saved in the area instance does not match the definition of the object with the same name in the current [internal session](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_session_glosry.htm "Glossary Entry"). If the time stamp for the type of the shared objects is newer than the time stamp in the internal session, the application should be restarted, to ensure the internal session also uses the current version of the type. If the time stamp of the type in the internal session is newer than the time stamp of the shared object, a new area instance version should be constructed, so that the current type is used there.

-   CX\_SHM\_NO\_ACTIVE\_VERSION

This exception is raised in the following cases:

-   The area instance version does not exist and an automatic build is not possible because there is no area constructor or displaced version (exception text: NEITHER\_BUILD\_NOR\_LOAD).

-   The area instance version does not exist and the area constructor was called (exception text: BUILD\_STARTED). The system does not wait for the automatic area build to be terminated when the exception is caught. If this exception is raised twice in succession with this exception text, the area constructor was not ended correctly.

-   The area instance version does not exist although the area constructor is already being executed (exception text: BUILD\_NOT\_FINISHED).

-   The area instance version is not available and a displaced version was started (exception text: LOAD\_STARTED).

-   The area instance version does not exist but a displaced version is already being loaded (exception text: LOAD\_NOT\_FINISHED).

-   CX\_SHM\_READ\_LOCK\_ACTIVE

The area instance version is already locked for reading in the same internal session.

-   CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE

This exception is raised in the following cases:

-   The area instance does not support versioning and is already locked against changes (exception text: LOCKED\_BY\_ACTIVE\_CHANGER).

-   The area instance does not support versioning and a user is waiting for an exclusive lock (exception text: LOCKED\_BY\_PENDING\_CHANGER).

-   The area instance is transactional, does not support versioning, and an exclusive lock was released, but the database commit has not yet taken place (exception text: WAITING\_FOR\_DB\_COMMIT).

-   CX\_SHM\_PARAMETER\_ERROR

The value of CL\_SHM\_AREA=>ALL\_CLIENTS was specified for the input parameter CLIENT.

The first four exception classes are subclasses of CX\_SHM\_ATTACH\_ERROR.

ATTACH\_FOR\_WRITE

Creates an area handle with an exclusive lock for an area instance version and returns a reference to the area handle.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. The name is optional. The default value is CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The client ID is optional. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   ATTACH\_MODE of type SHM\_ATTACH\_MODE

Controls the lock mode. This information is optional. The default value is CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT. Possible values are:

-   CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT
    If there are shared locks on the area instance of the specified name, these are not released. For areas with versioning, the system attempts to create a new version. In the case of areas without versioning, the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised.

-   CL\_SHM\_AREA=>ATTACH\_MODE\_DETACH\_READER
    For areas with versioning, if there are shared locks on all area instance versions of the specified name, the shared locks on the oldest version are released. This deactivates them so that a new version can be created. All shared locks are released for areas without versioning.

-   CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT
    If the exclusive lock cannot be set, the program waits for the time specified in the WAIT\_TIME parameter and tries to set the lock again before the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised. For an area without versioning, no further shared locks can be set on the area instance during the wait time. It is still possible to set shared locks for an area with versioning.

-   WAIT\_TIME of the type i

Wait time in milliseconds, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE. If a value not equal to 0 is passed for WAIT\_TIME, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is not passed to ATTACH\_MODE, or if a negative value is specified for WAIT\_TIME, the exception CX\_SHM\_PARAMETER\_ERROR is raised.

An attempt is made to set an exclusive lock again in the wait time. Only one program with the parameter WAIT\_TIME can wait for an area instance at any one time. If a different program tries to set another exclusive lock with the parameter WAIT\_TIME, this raises the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE directly (exception text LOCKED\_BY\_PENDING\_CHANGER).

If the exclusive lock can be set within the wait time, the program flow continues. Note that there may be a delay until the waiting program can be restarted. During this delay, no other program can set an exclusive lock. This guarantees that the waiting program is given the exclusive lock next.

If the exclusive lock cannot be set within the wait time, the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE is raised after the wait time (exception text:. LOCKED\_BY\_ACTIVE\_CHANGER) or CX\_SHM\_VERSION\_LIMIT\_EXCEEDED.

Return Code

-   HANDLE of the type REF TO area\_class.

Reference to the new area handle, where area\_class is the current area class.

Exceptions

-   CX\_SHM\_VERSION\_LIMIT\_EXCEEDED

The exclusive lock could not be set since there was already a shared lock on the area instance version and no new version could be created because this would overwrite the maximum number of possible versions.

-   CX\_SHM\_CHANGE\_LOCK\_ACTIVE

An area instance version is already locked for changing in the same internal session. If a previous exclusive lock was released in a transactional area, but there has been no database commit yet, this raises the exception with the exception text WAITING\_FOR\_DB\_COMMIT.

-   CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE

This exception is raised in the following cases:

-   The area instance is already locked for changes in a different internal session (exception text: LOCKED\_BY\_ACTIVE\_CHANGER).

-   A user in a different internal session is waiting for an exclusive lock (exception text: LOCKED\_BY\_PENDING\_CHANGER).

-   The area instance is transactional and an exclusive lock was released in a different internal session, but the database commit has not yet taken place (exception text: WAITING\_FOR\_DB\_COMMIT).

-   CX\_SHM\_PENDING\_LOCK\_REMOVED

This exception is raised if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE, but the lock was deleted in transaction SHMM during a wait period.

-   CX\_SHM\_PARAMETER\_ERROR

This exception is raised in the following cases:

-   An invalid value was passed for the input parameter ATTACH\_MODE.

-   A negative number was passed for the input parameter WAIT\_TIME .

-   The value of CL\_SHM\_AREA=>ALL\_CLIENTS was specified for the input parameter CLIENT.

The first four exception classes are subclasses of CX\_SHM\_ATTACH\_ERROR.

ATTACH\_FOR\_UPDATE

Creates an area handle with an update lock for an area instance version and returns a reference to the area handle.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. The name is optional. The default value is CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The client ID is optional. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   ATTACH\_MODE of type SHM\_ATTACH\_MODE

Controls the lock mode. This information is optional. The default value is CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT. Possible values are:

-   CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT
    If there are shared locks on the area instance of the specified name, these are not released. For areas with versioning, the system attempts to create a new version. In the case of areas without versioning, the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised.

-   CL\_SHM\_AREA=>ATTACH\_MODE\_DETACH\_READER
    For areas with versioning, if there are shared locks on all area instance versions of the specified name, the shared locks on the oldest version are released. This deactivates them so that a new version can be created. All shared locks are released for areas without versioning.

-   CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT
    If the update lock cannot be set, the program waits for the time specified in the WAIT\_TIME parameter and tries to set the lock again before the exception CX\_SHM\_VERSION\_LIMIT\_EXCEEDED is raised. For an area without versioning, no further shared locks can be set on the area instance during the wait time. It is still possible to set shared locks for an area with versioning.

-   WAIT\_TIME of the type i

Wait time in milliseconds, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE. If a value not equal to 0 is passed for WAIT\_TIME, if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is not passed to ATTACH\_MODE, or if a negative value is specified for WAIT\_TIME, the exception CX\_SHM\_PARAMETER\_ERROR is raised.

An attempt is made to set an update lock again in the wait time. Only one program with the parameter WAIT\_TIME can wait for an area instance at any one time. If a different program tries to set another exclusive lock with the parameter WAIT\_TIME, this raises the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE directly (exception text LOCKED\_BY\_PENDING\_CHANGER).

If the update lock can be set within the wait time, the program flow continues. Note that there may be a delay until the waiting program can be restarted. During this delay, no other program can set an exclusive lock. This guarantees that the waiting program receives the update lock next.

If the update lock cannot be set within the wait time, the exception CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE is raised after the wait time (exception text:. LOCKED\_BY\_ACTIVE\_CHANGER).

Note

Since an active area instance version is required for setting an update lock, an area constructor called automatically is started when the ATTACH\_FOR\_UPDATE method is called. The following applies when using the parameter WAIT\_TIME: If the area constructor can be started, there is a wait period. If the area constructor ends before the end of the wait time, the update lock is set. If the area constructor ends without being able to construct an active version, the wait is terminated before the end of the wait time. If the area constructor does not end within the wait time, the exception CX\_SHM\_NO\_ACTIVE\_VERSION is raised (exception text: BUILD\_NOT\_FINISHED).

Return Code

-   HANDLE of the type REF TO area\_class.

Reference to the new area handle, where area\_class is the current area class.

Exceptions

-   CX\_SHM\_INCONSISTENT

The type of an object saved in the area instance does not match the definition of the object with the same name in the current program.

-   CX\_SHM\_NO\_ACTIVE\_VERSION

This exception is raised in the following cases:

-   The area instance version does not exist and an automatic build is not possible because an area constructor or a displaced version does not exist (exception text: NEITHER\_BUILD\_NOR\_LOAD).

-   The area instance version does not exist and the area constructor was called (exception text: BUILD\_STARTED).

-   The area instance version does not exist although the area constructor is already being executed (exception text: BUILD\_NOT\_FINISHED).

-   The area instance version is not available and a displaced version was started (exception text: LOAD\_STARTED).

-   The area instance version does not exist but a displaced version is already being loaded (exception text: LOAD\_NOT\_FINISHED).

-   CX\_SHM\_VERSION\_LIMIT\_EXCEEDED

The update lock could not be set since there was already a shared lock on the area instance version and no new version could be created because this would overwrite the maximum number of possible versions.

-   CX\_SHM\_CHANGE\_LOCK\_ACTIVE

An area instance version is already locked for changing in the same internal session. If a previous exclusive lock was released in a transactional area, but there has been no database commit yet, this raises the exception with the exception text WAITING\_FOR\_DB\_COMMIT.

-   CX\_SHM\_EXCLUSIVE\_LOCK\_ACTIVE

This exception is raised in the following cases:

-   The area instance is already locked for changes in a different internal session (exception text: LOCKED\_BY\_ACTIVE\_CHANGER).

-   A user in a different internal session is waiting for an exclusive lock (exception text: LOCKED\_BY\_PENDING\_CHANGER).

-   The area instance is transactional and an exclusive lock was released in a different internal session, but the database commit has not yet taken place (exception text: WAITING\_FOR\_DB\_COMMIT).

-   CX\_SHM\_PENDING\_LOCK\_REMOVED

This exception is raised if the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is passed for ATTACH\_MODE, but the lock was deleted in transaction SHMM during a wait period.

-   CX\_SHM\_PARAMETER\_ERROR

This exception is raised in the following cases:

-   An invalid value was passed for the input parameter ATTACH\_MODE.

-   A negative number was passed for the input parameter WAIT\_TIME .

-   The value of CL\_SHM\_AREA=>ALL\_CLIENTS was specified for the input parameter CLIENT.

The first six exception classes are subclasses of CX\_SHM\_ATTACH\_ERROR.

DETACH\_AREA

Releases all locks of the current internal session on the area instances versions of the associated area. This deactivates all of the area handles in the current internal session. If an exclusive lock or an update lock is released, this rejects any changes that were made to the area instance versions up to then.

Input Parameters

-   CLIENT of type SHM\_CLIENT

Optional client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

Return Code

-   RC of type SHM\_RC

Possible values:

-   CL\_SHM\_AREA=>RC\_DONE if all locks were released.

-   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no locks were released because no locks existed in the current session.

INVALIDATE\_INSTANCE

For non-transactional areas, this method immediately sets the state of the active area instance version of the area instance of the name passed to obsolete. For transactional areas, this is done using the next database commit. No new locks can be set on this area instance version afterwards. Any existing shared locks are not released. How existing exclusive locks are handled depends on the input parameter TERMINATE\_CHANGER.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. The name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   TERMINATE\_CHANGER of the type ABAP\_BOOL

Controls the handling of exclusive locks. Possible values are:

-   ABAP\_TRUE (existing exclusive locks are released (default setting)).

-   ABAP\_FALSE (existing exclusive locks are not released).

-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER (only in transactional areas with the Application Server area binding)

Specifies cross-server invalidation. Possible values are:

-   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER (only the area instance versions of the current application server are invalidated (default setting)).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS (the area instance versions of all application servers are invalidated).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL (the area instance versions of all application servers are invalidated, apart from the current application server). This enables changes to be made to areas of the current application server directly, without the database having to create the entire area again.

Caution

Once this method is executed and ABAP\_TRUE is passed to TERMINATE\_CHANGER, all programs where there is still an exclusive lock for the invalidated area instance are terminated with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

Return Code

-   RC of type SHM\_RC

Possible values in non-transactional areas:

-   CL\_SHM\_AREA=>RC\_DONE if the active area instance version was set to obsolete. If the value ABAP\_TRUE was passed to TERMINATE\_CHANGER (even if an exclusive lock was released).

-   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no active area instance version is available and (if the value ABAP\_TRUE was passed to TERMINATE\_CHANGER) if no exclusive lock exists .

-   CL\_SHM\_AREA=>RC\_INSTANCE\_NAME\_NOT\_FOUND if no area instance of the specified name exists.

In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR

An invalid value was passed for the input parameter TERMINATE\_CHANGER.

INVALIDATE\_AREA

In non-transactional areas, this method immediately sets the state of all active area instance versions of the area in the current internal session to obsolete. For transactional areas this is done by the next database commit. No new locks can be set on these area instance versions afterwards. Any existing shared locks are not released. How existing exclusive locks are handled depends on the input parameter TERMINATE\_CHANGER.

Input Parameters

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   TERMINATE\_CHANGER of the type ABAP\_BOOL

Controls the handling of exclusive locks. Possible values are:

-   ABAP\_TRUE (existing exclusive locks are released (default setting)).

-   ABAP\_FALSE (existing exclusive locks are not released).

-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER (only in transactional areas with the Application Server area binding)

Specifies cross-server invalidation. Possible values are:

-   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER (only the area instance versions of the current application server are invalidated (default setting)).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS (the area instance versions of all application servers are invalidated).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL (the area instance versions of all application servers are invalidated, apart from the current application server). This enables changes to be made to areas of the current application server directly, without the database having to create the entire area again.

Caution

Once this method is executed and ABAP\_TRUE is passed to TERMINATE\_CHANGER, all programs where there are still exclusive locks for the invalidated area instance versions are terminated with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

Return Code

-   RC of type SHM\_RC

Possible values in non-transactional areas:

-   CL\_SHM\_AREA=>RC\_DONE if at least one active area instance version was set to obsolete. If the value ABAP\_TRUE was passed to TERMINATE\_CHANGER (even if one or more exclusive locks were released).

-   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no active area instance version exists and (if the value ABAP\_TRUE was passed to TERMINATE\_CHANGER) if no exclusive lock exists.

In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR

An invalid value was passed for the input parameter TERMINATE\_CHANGER.

FREE\_INSTANCE

This method sets the state of all (active and obsolete) area instance versions of the area instance for the name passed to "expired", and all shared locks are released. No new shared locks and update locks can be set on this area instance version afterwards. How existing exclusive locks are handled depends on the input parameter TERMINATE\_CHANGER. In non-transactional areas, the state of the area instance version is changed immediately; in transactional areas, the state changes after the next database commit.

Caution

After this method has been executed, all programs in which area handles still exist for the released area instance versions terminate with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. The name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   TERMINATE\_CHANGER of the type ABAP\_BOOL

Controls the handling of exclusive locks. Possible values are:

-   ABAP\_TRUE (existing exclusive locks are released (default setting)).

-   ABAP\_FALSE (existing exclusive locks are not released).

-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER (only in transactional areas with the Application Server area binding)

Specifies cross-server invalidation. Possible values are:

-   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER (only the area instance versions of the current application server are invalidated (default setting)).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS (the area instance versions of all application servers are invalidated).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL (the area instance versions of all application servers are invalidated, apart from the current application server). This enables changes to be made to areas of the current application server directly, without the database having to create the entire area again.

Return Code

-   RC of type SHM\_RC

Possible values in non-transactional areas:

-   CL\_SHM\_AREA=>RC\_DONE if an active or an obsolete area instance version was set to expired. If the value ABAP\_TRUE was passed to TERMINATE\_CHANGER (even if an exclusive lock was released).

-   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE, if no active or obsolete area instance versions exist and (if the value ABAP\_TRUE was passed to TERMINATE\_CHANGER) if no exclusive lock exists.

-   CL\_SHM\_AREA=>RC\_INSTANCE\_NAME\_NOT\_FOUND if no area instance of the specified name exists.

In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR

An invalid value was passed for the input parameter TERMINATE\_CHANGER.

FREE\_AREA

This method sets the state of all (active and obsolete) area instance versions of the area to "expired", and all shared locks are released. No new locks can be set on these area instance versions afterwards. How existing exclusive locks are handled depends on the input parameter TERMINATE\_CHANGER. In non-transactional areas, the change takes place immediately; in transactional areas, the change takes place after the next database commit.

Input Parameters

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   TERMINATE\_CHANGER of the type ABAP\_BOOL

Controls the handling of exclusive locks. Possible values are:

-   ABAP\_TRUE (existing exclusive locks are released (default setting)).

-   ABAP\_FALSE (existing exclusive locks are not released).

-   AFFECT\_SERVER of the type SHM\_AFFECT\_SERVER (only in transactional areas with the Application Server area binding)

Specifies cross-server invalidation. Possible values are:

-   CL\_SHM\_AREA=>AFFECT\_LOCAL\_SERVER (only the area instance versions of the current application server are invalidated (default setting)).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS (the area instance versions of all application servers are invalidated).

-   CL\_SHM\_AREA=>AFFECT\_ALL\_SERVERS\_BUT\_LOCAL (the area instance versions of all application servers are invalidated, apart from the current application server). This enables changes to be made to areas of the current application server directly, without the database having to create the entire area again.

Return Code

-   RC of type SHM\_RC

-   Possible values in non-transactional areas:

-   CL\_SHM\_AREA=>RC\_DONE if at least one active or obsolete area instance version was set to "expired". If the value ABAP\_TRUE was passed to TERMINATE\_CHANGER (even if one or more exclusive locks were released).

-   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no active or obsolete area instance versions exist and (if the value ABAP\_TRUE was passed to TERMINATE\_CHANGER) if no exclusive lock exists.

In transactional areas, RC always has the value CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE.

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR

An invalid value was passed for the input parameter TERMINATE\_CHANGER.

Caution

After this method has been executed, all programs in which area handles still exist for the released area instance versions terminate with the runtime error SYSTEM\_SHM\_AREA\_OBSOLETE.

GET\_INSTANCE\_INFOS

Returns the names of all instances of the area on the current application server that are currently being built, are active, or are obsolete.

Input Parameters

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

Return Code

-   INFOS of type SHM\_INST\_INFOS

SHM\_INST\_INFOS is an internal table of row type SHM\_INST\_INFO with the following components:

-   CLIENT of type MANDT. The client ID if areas are client-specific. Initial if areas are cross-client.

-   NAME of type SHM\_INST\_NAME (area name). This name is CL\_SHM\_AREA=>DFAULT\_INSTANCE for areas with the default name.

-   VERSIONS\_IN\_BUILD of type SHM\_VERS\_CNT. The number of area instance versions that are currently being built. Possible values are 0 or 1.

-   VERSIONS\_ACTIVE of type SHM\_VERS\_CNT. The number of currently active area instance versions. Possible values are 0 or 1.

-   VERSIONS\_OBSOLETE of type SHM\_VERS\_CNT. The number of obsolete area instance versions. Possible values range from 0 to the maximum number of area instance versions (component MAX\_VERSIONS of the PROPERTIES attribute of the CL\_SHM\_AREA class).

An empty table is returned if there are no area instances for the area. The number of expired area instance versions is ignored.

BUILD

Calls the [area constructor](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm) explicitly . The area constructor is executed in the current internal session. If the areas are client-specific, the area of the current client is built.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. The name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

Exceptions

-   CX\_SHM\_BUILD\_FAILED

An error occurred when the area constructor was executed.

-   CX\_SHMA\_NOT\_CONFIGURED

No area constructor class is bound to the area class.

-   CX\_SHMA\_INCONSISTENT

The area class has to be generated again.

PROPAGATE\_INSTANCE (obsolete)

This method is only available if the area is transactional. It has the same effect as executing the INVALIDATE\_INSTANCE method and passing the value of ABAP\_TRUE to the input parameter TERMINATE\_CHANGER on all application servers in the current AS ABAP. This propagation takes place after the next database commit.

Caution

Do not use this method any more. Instead, use the parameter AFFECT\_SERVER of the FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE methods.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. The name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   AFFECTING\_LOCAL\_SERVER of the type ABAP\_BOOL

Controls whether the change in state is also performed on the current application server. Possible values are:

-   ABAP\_TRUE. The active area instance version is set to obsolete on the current application server. This setting can be used if the content of the area instance is to be changed using the area constructor, after the database content has been changed.

-   ABAP\_FALSE. The active area instance version is not set to obsolete on the current application server (default setting). This means that a new version can be preserved on an application server while only the current versions on other servers are invalidated.

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR

An invalid value was passed for the input parameter AFFECTING\_LOCAL\_SERVER.

PROPAGATE\_AREA (obsolete)

This method is only available if the area is transactional. It has the same effect as executing the INVALIDATE\_AREA method and passing the value of ABAP\_TRUE to the input parameter TERMINATE\_CHANGER on all application servers in the current AS ABAP. This propagation takes place after the next database commit.

Caution

Do not use this method any more. Instead, use the parameter AFFECT\_SERVER of the FREE\_AREA, FREE\_INSTANCE, INVALIDATE\_AREA, and INVALIDATE\_INSTANCE methods.

Input Parameters

-   CLIENT of type SHM\_CLIENT

Client ID if the area is client-specific. The default value is the ID of the current client. In [tenant-isolation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentenant_isolation_glosry.htm "Glossary Entry") systems, the CLIENT parameter cannot be passed in [application clients](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenapplication_client_glosry.htm "Glossary Entry").

-   AFFECTING\_LOCAL\_SERVER of the type ABAP\_BOOL

Controls whether the change in state is also performed on the current application server. Possible values are:

-   ABAP\_TRUE. The active area instance versions are set to obsolete on the current application server.

-   ABAP\_FALSE. The active area instance versions are not set to obsolete on the current application server (default setting).

Exceptions

-   CX\_SHM\_PARAMETER\_ERROR

An invalid value was passed for the input parameter AFFECTING\_LOCAL\_SERVER.

Instance Methods

SET\_ROOT

This method defines the [root object](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_object_glosry.htm "Glossary Entry") (instance of the area root class) of the area instance version. Before an exclusive lock can be released using the DETACH\_COMMIT method, the root object has to be reset at least once using SET\_ROOT. Updates are possible. The SET\_ROOT method can only be called in area handles with exclusive locks.

Input Parameters

-   REF TO of the type area\_root\_class, where [area\_root\_class](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenroot_data_class_glosry.htm "Glossary Entry") is the area root class of the area.

Exceptions

-   CX\_SHM\_WRONG\_HANDLE

The method was called using an area handle with a shared lock or an area handle in which the DETACH\_COMMIT method failed.

-   CX\_SHM\_INITIAL\_REFERENCE

The reference variable passed to ROOT is initial.