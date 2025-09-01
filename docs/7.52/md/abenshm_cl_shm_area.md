  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Classes and Interfaces](javascript:call_link\('abenshm_classes.htm'\)) →  [Shared Objects - CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) → 

Shared Objects - CL\_SHM\_AREA

The class CL\_SHM\_AREA is a subclass of [CL\_ABAP\_MEMORY\_AREA](javascript:call_link\('abenshm_cl_abap_memory_area.htm'\)) and the superclass of all area classes that are generated when an area is created using transaction SHMA. This class contains general attributes and methods for the corresponding [area handles](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry").

-   [Instance Attributes](#@@ITOC@@ABENSHM_CL_SHM_AREA_1)

-   [PROPERTIES](#@@ITOC@@ABENSHM_CL_SHM_AREA_2)

-   [INST\_NAME](#@@ITOC@@ABENSHM_CL_SHM_AREA_3)

-   [CLIENT](#@@ITOC@@ABENSHM_CL_SHM_AREA_4)

-   [Static Methods](#@@ITOC@@ABENSHM_CL_SHM_AREA_5)

-   [MULTI\_ATTACH](#@@ITOC@@ABENSHM_CL_SHM_AREA_6)

-   [DETACH\_ALL\_AREAS](#@@ITOC@@ABENSHM_CL_SHM_AREA_7)

-   [Instance Methods](#@@ITOC@@ABENSHM_CL_SHM_AREA_8)

-   [DETACH](#@@ITOC@@ABENSHM_CL_SHM_AREA_9)

-   [DETACH\_COMMIT](#@@ITOC@@ABENSHM_CL_SHM_AREA_10)

-   [DETACH\_ROLLBACK](#@@ITOC@@ABENSHM_CL_SHM_AREA_11)

-   [GET\_LOCK\_KIND](#@@ITOC@@ABENSHM_CL_SHM_AREA_12)

-   [GET\_ROOT](#@@ITOC@@ABENSHM_CL_SHM_AREA_13)

-   [Instance Events](#@@ITOC@@ABENSHM_CL_SHM_AREA_14)

-   [SHM\_COMMIT\_EVENT](#@@ITOC@@ABENSHM_CL_SHM_AREA_15)

-   [SHM\_ROLLBACK\_EVENT](#@@ITOC@@ABENSHM_CL_SHM_AREA_16)

Instance Attributes

PROPERTIES

Structure of type SHM\_PROPERTIES with the property READ-ONLY. The components in the structure contain area properties that are generally set using transaction SHMA. The components in the structure are as follows:

-   AUTO\_BUILD

If the value is ABAP\_TRUE, the area instance versions of an area can be built automatically. The prerequisite for the value ABAP\_TRUE is that the component AUTO\_BUILD\_CLASS is not initial. If the value is ABAP\_FALSE, the area instance versions of an area cannot be built automatically.

-   AUTO\_BUILD\_CLASS

Contains the name of the [area constructor class](javascript:call_link\('abenshm_area_constructor_class.htm'\)) that implements the constructor BUILD using the interface [IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\)) to build area instance versions automatically. This component is only filled if the area handle is bound by an change lock to an area instance version and is otherwise initial.

-   BUILD\_KIND

Specifies when area instance versions of the area are built automatically using the area constructor in the [area constructor class](javascript:call_link\('abenshm_area_constructor_class.htm'\)). If the value is CL\_SHM\_AREA=>BUILD\_KIND\_NONE, area instance versions are not built automatically. This is always the case if the component AUTO\_BUILD has the value ABAP\_FALSE. If the component AUTO\_BUILD has the value ABAP\_TRUE, the component BUILD\_KIND can have the values CL\_SHM\_AREA=>BUILD\_KIND\_DUE\_TO\_READ\_REQUEST or CL\_SHM\_AREA=>BUILD\_KIND\_DUE\_TO\_INVALIDATION. If the component has the value CL\_SHM\_AREA=>BUILD\_KIND\_DUE\_TO\_READ\_REQUEST and no active area instance versions exist, the area constructor is called automatically when a read is performed. If the component has the value CL\_SHM\_AREA=>BUILD\_KIND\_DUE\_TO\_INVALIDATION, the area constructor is called in the same way as when using the value CL\_SHM\_AREA=>BUILD\_KIND\_DUE\_TO\_READ\_REQUEST. As before, the constructor is called in transitions from an active version to an obsolete or expired version, without an active area instance version being created.

-   CLIENT\_DEPENDENT

If the value is ABAP\_TRUE, the area is client-specific. Area instance versions of the same area are distinguished using both the current client ID in the attribute CLIENT and using their names. If the component has the value ABAP\_FALSE (default setting), the area is not client-specific and CLIENT is initial.

-   DISPLACE\_KIND

Controls whether area instance versions of the area may be displaced. If the value is CL\_SHM\_AREA=>DISPLACE\_KIND\_NONE, they are not displaceable (default setting). If the value is CL\_SHM\_AREA=>DISPLACE\_KIND\_SERIALIZABLE, they are displaceable. Before displacements, the content is serialized and is saved persistently. It is reloaded into the shared memory using a read or update on the area instance version. The prerequisite for this is that each class instantiated in the area instance has to implement the interface IF\_SERIALIZABLE\_OBJECT. If the component has the value CL\_SHM\_AREA=>DISPLACE\_KIND\_DISPLACABLE, the area instance versions are displaceable. Here, the content is lost in displacements (known as full displacement). Displacements take place only if no area handle is bound to an area instance version of the displaceable area instance at the same time.

-   HAS\_VERSIONS

If the value is ABAP\_TRUE, the area supports versioning. If the value is ABAP\_FALSE, there is a maximum of one single area instance version.

-   IDLE\_TIME

Defines how many minutes an area instance version is preserved in the shared memory (after a change lock or shared lock has been released) before it is deleted automatically. If the value is 0 (default setting), the area instance version is not deleted automatically. Values other than 0 are only possible if the components INVALIDATE\_TIME and REFRESH\_TIME both have the value 0. In the case of transactional areas, time measurement starts with the first database commit after a lock is released using the method DETACH\_COMMIT.

-   INVALIDATE\_TIME

Defines the minutes until an area instance version becomes obsolete after a change lock is released. If the value is 0 (default setting), an area instance version never becomes obsolete. Values other than 0 are only possible if the components IDLE\_TIME and REFRESH\_TIME both have the value 0. In the case of transactional areas, time measurement starts with the first database commit after a lock is released using the method DETACH\_COMMIT.

-   LIFE\_CONTEXT

Sets the visibility and lifetime of the area instance versions of the area. If this method has the value CL\_SHM\_AREA=>LIFE\_CONTEXT\_APPSERVER, the area instance versions exist until the application server is shut down (default value). If it has the value CL\_SHM\_AREA=>LIFE\_CONTEXT\_SESSION, the area instances exist until the last [ABAP session](javascript:call_link\('abenmain_session_glosry.htm'\) "Glossary Entry") of the current user ends. If it has the value CL\_SHM\_AREA=>LIFE\_CONTEXT\_MODE, the area instances exist for as long as the current ABAP session is active. If it has the value CL\_SHM\_AREA=>LIFE\_CONTEXT\_MEMORY, the area instances exist for as long as the data exists in the ABAP memory of the current call sequence.

-   MAX\_AREA\_SIZE

Specifies the maximum permitted size of an area in KB. The size of an area matches the total memory requirement of all area instance versions of the area. The default value is currently 0 and does not restrict the size.

-   MAX\_VERSION\_SIZE

Specifies the maximum permitted size of an area in KB. The size of an area matches the total memory requirement of all area instance versions of the area. The default value is currently 0 and does not restrict the size.

-   MAX\_VERSIONS

Specifies the maximum number of area instance versions for an area instance of an area. Obsolete areas are not counted. The default value is 0 and does not restrict the size. If the component HAS\_VERSIONS has the value ABAP\_FALSE, MAX\_VERSIONS is always 1. Otherwise, MAX\_VERSIONS can be any non-negative number that is not 1.

-   REFRESH\_TIME

Defines the minutes until an area instance version is built by an automatic call of the area constructor. If the value is 0 (default setting), an area instance version is never built automatically. Values other than 0 are only possible if the components IDLE\_TIME and INVALIDATE\_TIME both have the value 0. In the case of transactional areas, time measurement starts with the first database commit after a lock is released using the method DETACH\_COMMIT. The prerequisite is that an active version of the area instance version exists at the start of the build. If the method DETACH\_COMMIT was not successful, the preceding area instance version is preserved (if areas are versioned) and the automatic rebuild raises appropriate exceptions. The area constructor can catch the exceptions CATCH CX\_SHM\_ERROR and CX\_SHM\_FAILURE itself and, for example, call the method INVALIDATE\_INSTANCE of the area class to delete a preceding area instance version explicitly. If an automatic area build fails due to the failure of the method DETACH\_COMMIT, no automatic rebuilds take place until the method is executed successfully.

-   TRANSACTIONAL

If the value is ABAP\_TRUE, the area is transactional (default setting). Any changes to the area instance versions of the area do not become active until the next database commit after the method DETACH\_COMMIT is executed. If the value is ABAP\_FALSE, the area is not transactional and changes become active immediately after the method DETACH\_COMMIT is executed.

INST\_NAME

Text field of type SHM\_INST\_NAME with the property READ-ONLY. This attribute contains the name of the current area instance. This attribute is set when an area instance is created using the method ATTACH\_FOR\_WRITE of the [area class](javascript:call_link\('abenshm_area_class.htm'\)).

CLIENT

Text field of type MANDT with the property READ-ONLY. In client-specific areas (the component CLIENT\_DEPENDENT of the structure PROPERTIES has the value ABAP\_TRUE), this attribute contains the current client ID of the area instance. This attribute is initial in a cross-client area.

Static Methods

MULTI\_ATTACH

Enables shared locks, exclusive locks, or update locks to be set at the same time on multiple area instances of one or more areas. The method MULTI\_ATTACH is the only way to have change access to multiple area instances at the same time or, in other words, set multiple change locks at once.

Input/Output Parameters

-   ATTACH\_TAB of type SHM\_ATTACH\_TAB

Internal table whose rows contain information about the individually requested locks. The components of the rows are as follows:

-   AREA\_NAME of type SHM\_AREA\_NAME
    Area name

-   INST\_NAME of type SHM\_INST\_NAME
    Name of the area instance. If the area instance is accessed using the default name, the value CL\_SHM\_AREA=>DEFAULT\_INSTANCE must be passed.

-   CLIENT of type MANDT
    Client ID for client-specific areas. If the area instance is accessed using the current client ID, the current client must also be passed. The component must be initial in the case of cross-client areas.

-   LOCK\_KIND of type SHM\_LOCK\_KIND
    Access type (possible values are CL\_SHM\_AREA=>LOCK\_KIND\_READ, CL\_SHM\_AREA=>LOCK\_KIND\_WRITE, or CL\_SHM\_AREA=>LOCK\_KIND\_UPDATE).

-   ATTACH\_MODE of type SHM\_ATTACH\_MODE
    Behavior in case of changes (possible values are CL\_SHM\_AREA=>ATTACH\_MODE\_DEFAULT, CL\_SHM\_AREA=>ATTACH\_MODE\_DETACH\_READER, or CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT).

-   LEVEL of type i
    Order in which the locks are set. Table rows with smaller values in the column are evaluated before table rows with larger values. If the values are equal, the order of the rows in the table is used as the deciding factor.

-   HANDLE of type REF TO cl\_shm\_area
    This column returns a reference to an area handle for the area instance version for which the lock was requested (provided that this was successful). If an exception is raised, the value of the column is initial for either all rows or for the affected rows (depending on the value of the input parameter IGNORE\_ERRORS).

-   EXCEPTION of type REF TO cx\_root
    If an exception is raised, this column returns a reference to the exception object for either one row or all relevant rows (depending on the value of IGNORE\_ERRORS). In addition to the exceptions of ATTACH methods for setting individual locks in the area class, the exception CX\_SHM\_MULTI\_ATTACH\_ERROR can also be raised in the following cases: an exclusive lock and an update lock are requested at the same time on an area instance version (the exception text here is DUPLICATE\_CHANGE\_LOCK), a lock for a client other than the current client is requested on an area instance version with automatic area building (the exception text here is ILLEGAL\_AUTO\_BUILD\_CLIENT), a client ID is specified for a cross-client area (the exception text here is ILLEGAL\_CLIENT\_FOR\_AREA). In success cases, the column is initial..

For more information about the individual components, see also the description of the parameters from the ATTACH methods for setting individual locks in the [area class](javascript:call_link\('abenshm_area_class.htm'\)).

Input Parameters

-   IGNORE\_ERRORS of type ABAP\_BOOL

Controls error handling of methods. Possible values are ABAP\_TRUE and ABAP\_FALSE.

-   If ABAP\_TRUE is passed, the system attempts to set the remaining locks following an exception when the lock was set. In the rows of the ATTACH\_TAB parameter where an error occurred, the reference to the area handle in the HANDLE column is initialized and the reference in the EXCEPTION column is set to the corresponding exception object.

-   If ABAP\_FALSE is passed, the method is terminated following an exception while trying to set a lock. The column HANDLE is initialized in all rows of the parameter ATTACH\_TAB. The reference to the corresponding exception object in the column EXCEPTION is set in the row where the error occurred.

All area instances for which an error occurred in the method MULTI\_ATTACH have the same state after the method ends as they did before the method was called. This means the previous locks and the statuses remain the same.

-   WAIT\_TIME of type i

Specifies the wait time in milliseconds for all rows of the parameter ATTACH\_TAB where the value CL\_SHM\_AREA=>ATTACH\_MODE\_WAIT is specified in the column ATTACH\_MODE. The wait time must be greater than or equal to 0 and is distributed to the relevant lock requests. If multiple change locks are set and the first lock can be set during the wait time, the remaining wait time can be used by the other locks. The time available for the remaining rows is therefore reduced by the wait time used each time a row of this type is evaluated.

Caution

In the case of change locks with a wait time that are set using MULTI\_ATTACH, the same mutual exclusions apply as to the methods ATTACH\_FOR\_WRITE and ATTACH\_FOR\_UPDATE of the area class. This may prevent locks from being set in certain cases. For example, if a MULTI\_ATTACH with a wait time is executed in parallel in two programs, where program 1 first sets a change lock A and then a change lock B, program 2 does this in reverse order, and then lock A is set in program 1 and lock B is set in program 2, at least one of the second locks cannot be set. If there is a lock request for the second lock (lock B in program 1 and lock A in program 2), each program has to wait for the other program’s wait time to expire.

Output Parameters

-   ERROR\_FLAG of type ABAP\_BOOL

Specifies whether one or more exceptions were raised during the method. If ERROR\_FLAG has the value ABAP\_FALSE, this means all locks were set successfully. If ERROR\_FLAG has the value ABAP\_TRUE, not all locks could be set. The locks contain references to the exception object or objects for either one or more rows (depending on the value of the input parameter IGNORE\_ERRORS) of the column EXCEPTION of the parameter ATTACH\_TAB.

DETACH\_ALL\_AREAS

Releases all locks of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") on any area instance versions of any areas. This deactivates all of the area handles of the internal session. If an exclusive lock or update lock is released, this rejects any changes that were made to area instance versions up to then.

Return Value

-   RC of type SHM\_RC

Possible values:

-   CL\_SHM\_AREA=>RC\_DONE if all locks were released.

-   CL\_SHM\_AREA=>RC\_NOTHING\_TO\_BE\_DONE if no locks were released because no locks existed in the first place.

Note

The method DETACH\_ALL\_AREAS does not require any input parameters for the client ID, since it accesses both client-specific and cross-client area instances independently of the client. To delete all locks in a special client, the corresponding area handles must be accessed individually. These can be managed in an internal table.

Instance Methods

DETACH

Releases the lock on the current area handle. The area handle is then inactive.

Exceptions

-   CX\_SHM\_WRONG\_HANDLE

An change lock was active and not a shared lock (the exception text here is READ\_HANDLE\_REQUIRED)

-   CX\_SHM\_ALREADY\_DETACHED

No shared lock was active.

DETACH\_COMMIT

Releases a change lock (an exclusive lock or update lock) on the current area handle and confirms the changes that were made. The area handle is then inactive. The prerequisite for this is that the current area instance version must contain an instance of the area root class (known as a [root object](javascript:call_link\('abenroot_object_glosry.htm'\) "Glossary Entry")). In addition, there must be no references from the area instance version to a different area instance of the shared objects memory or to the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

If an exception is raised when the method is executed, the change lock is not released correctly. Although it is persisted, the lock cannot be released a second time using the method DETACH\_COMMIT. The DETACH\_ROLLBACK can be used instead.

In the case of non-transactional areas (the component TRANSACTIONAL of the structure PROPERTIES has the value ABAP\_FALSE), any changes to the current area instance version become active immediately after the method DETACH\_COMMIT is executed. In the case of transactional areas (the component TRANSACTIONAL of the structure PROPERTIES has the value ABAP\_TRUE), the changes that are completed when the method DETACH\_COMMIT is executed are not active until the next database commit. The following rules apply during the time between the completion of the method DETACH\_COMMIT and the next database commit:

-   In the case of transactional areas with versioning, all requested shared locks access the previous version.

-   No reads are possible for transactional areas without versioning.

-   It is not possible to set a new change lock for areas with versioning or for areas without versioning.

When the method DETACH\_COMMIT is called, the event SHM\_COMMIT\_EVENT of the generated area class is raised automatically.

Exceptions

-   CX\_SHM\_WRONG\_HANDLE

A shared lock was active instead of a change lock (the exception text here is WRITE\_HANDLE\_REQUIRED)

-   CX\_SHM\_ALREADY\_DETACHED

No change lock was active.

-   CX\_SHM\_COMPLETION\_ERROR

Subclasses:

-   CX\_SHM\_ROOT\_OBJECT\_INITIAL
    No root object was assigned to the area instance version.

-   CX\_SHM\_EXTERNAL\_REFERENCE
    There are still references from the current area instance version to a different area instance of the shared objects memory or to the internal session.

-   CX\_SHM\_EVENT\_EXECUTION\_FAILED
    An exception was raised when an event handler was executed for SHM\_COMMIT\_EVENT. The exception raised can be read using the attribute PREVIOUS.

-   CX\_SHM\_SECONDARY\_COMMIT

An attempt was made to release a change lock again (a release had already failed previously) using DETACH\_COMMIT instead of DETACH\_ROLLBACK.

CX\_SHM\_COMPLETION\_ERROR and CX\_SHM\_SECONDARY\_COMMIT are subclasses of CX\_SHM\_DETACH\_ERROR.

DETACH\_ROLLBACK

Releases a change lock (an exclusive lock or update lock) on the current area handle and discards the changes that were made. The area handle is then inactive.

For areas without versioning, no active version of the area exists once the method has been executed. The previous version is still available for areas with versioning. In the case of transactional areas, a new change lock can be set on the relevant area instance (even before the next database commit) once the method DETACH\_ROLLBACK has been executed.

When the method DETACH\_ROLLBACK is called, the event SHM\_ROLLBACK\_EVENT is raised automatically before it is executed.

Exceptions

-   CX\_SHM\_WRONG\_HANDLE

A shared lock was active instead of a change lock (the exception text here is WRITE\_HANDLE\_REQUIRED)

-   CX\_SHM\_ALREADY\_DETACHED

No change lock was active.

-   CX\_SHM\_EVENT\_EXECUTION\_FAILED

An exception was raised when an event handler was executed for SHM\_ROLLBACK\_EVENT. The exception raised can be read using the attribute PREVIOUS.

CX\_SHM\_EVENT\_EXECUTION\_FAILED is a subclass of CX\_SHM\_COMPLETION\_ERROR, which is a subclass of CX\_SHM\_DETACH\_ERROR.

GET\_LOCK\_KIND

Returns the type of the current lock for an area handle.

Return Value

-   LOCK\_KIND of type SHM\_LOCK\_KIND

Possible values:

-   CL\_SHM\_AREA=>LOCK\_KIND\_READ if the area handle holds a shared lock.

-   CL\_SHM\_AREA=>LOCK\_KIND\_WRITE if the area handle holds an exclusive lock.

-   CL\_SHM\_AREA=>LOCK\_KIND\_UPDATE if the area handle holds an update lock.

-   CL\_SHM\_AREA=>LOCK\_KIND\_COMPLETION\_ERROR if the area handle holds a change lock after the method DETACH\_COMMIT ended with an exception.

-   CL\_SHM\_AREA=>LOCK\_KIND\_DETACHED, if the area handle does not hold any locks or if it is not bound to an area instance version.

GET\_ROOT

Returns a reference to the [root object](javascript:call_link\('abenroot_object_glosry.htm'\) "Glossary Entry") (instance of the area root class) for an area handle. This method is intended for the unlikely case where multiple handles need to be handled for different areas with different area root classes. Otherwise the attribute ROOT of the [area class](javascript:call_link\('abenshm_area_class.htm'\)) can be accessed directly.

Return Value

-   ROOT of type REF TO object

Exceptions

-   CX\_SHM\_ALREADY\_DETACHED

The area handle is not bound to an area instance version.

Instance Events

SHM\_COMMIT\_EVENT

This event is raised by the area handle automatically when the method DETACH\_COMMIT is called.

SHM\_ROLLBACK\_EVENT

This event is raised by the area handle automatically when the method DETACH\_ROLLBACK is called.

Continue
[Shared Objects - Area Classes](javascript:call_link\('abenshm_area_class.htm'\))