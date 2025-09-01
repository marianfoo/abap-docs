  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Classes and Interfaces](javascript:call_link\('abenshm_classes.htm'\)) → 

Shared Objects - CL\_ABAP\_MEMORY\_AREA

The CL\_ABAP\_MEMORY\_AREA class is the common superclass of all area classes. It contains general methods for [area handles](javascript:call_link\('abenarea_handle_glosry.htm'\) "Glossary Entry").

-   [Static Methods](#abenshm-cl-abap-memory-area-1--------get--handle--by--oref---@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_2)

-   [GET\_HANDLE\_BY\_DREF](#abenshm-cl-abap-memory-area-3--------get--handle--by--data---@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_4)

-   [Instance Methods](#abenshm-cl-abap-memory-area-5--------is--shared---@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_6)

-   [IS\_VALID](#abenshm-cl-abap-memory-area-7--------is--active--version---@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_8)

-   [HAS\_ACTIVE\_PROPERTIES](#abenshm-cl-abap-memory-area-9--------get--detach--info---@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_10)

Static Methods

GET\_HANDLE\_BY\_OREF

Gets the area handle for an instance of a class. The instance can be in the shared memory or in the [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

Input Parameter

-   OREF of type REF TO object

Reference to the instance of a class.

Return Value

-   HANDLE of type REF TO cl\_abap\_memory\_area

Reference to the area handle of the corresponding area instance version. Typing means that essentially this reference is only suitable for creating objects.

GET\_HANDLE\_BY\_DREF

Gets the area handle for a data object. The data object can be in the shared memory or in the internal session.

Input Parameter

-   DREF of type REF TO data

Reference to a data object in the shared memory.

Return Value

-   HANDLE of type REF TO cl\_abap\_memory\_area

Reference to the area handle of the corresponding area instance version. Typing means that essentially this reference is only suitable for creating objects.

GET\_HANDLE\_BY\_DATA

Gets the area handle for a data object. The data object can be in the shared memory or in the internal session.

Input Parameter

-   DATAOBJECT of type any

Data object in the shared memory. This can be specified as a field symbol, for example, which refers to a dereferenced data object in the shared memory.

Return Value

-   HANDLE of type REF TO cl\_abap\_memory\_area

Reference to the area handle of the corresponding area instance version. Typing means that essentially this reference is only suitable for creating objects.

Instance Methods

IS\_SHARED

Checks whether the area handle represents an area instance version in the shared memory, or whether it represents the current internal session.

Return Value

-   SHARED of type ABAP\_BOOL

ABAP\_TRUE if an area instance version is represented in the shared objects memory, and ABAP\_FALSE if the current internal session is represented.

IS\_VALID

Checks whether the area handle can be used to access an area instance version in the shared memory, or whether the current internal session is accessed.

Return Value

-   VALID of type ABAP\_BOOL

ABAP\_TRUE if the area handle is used to access an area instance version or the current internal session; otherwise ABAP\_FALSE.

IS\_ACTIVE\_VERSION

Checks whether the area handle refers to the active area instance version.

Return Value

-   ACTIVE\_VERSION of type ABAP\_BOOL

ABAP\_TRUE if the current area instance version or the internal session is represented. ABAP\_FALSE if an obsolete area instance version is represented, the area handle was already released, or if it is a change handle.

HAS\_ACTIVE\_PROPERTIES

Checks whether the area’s current dynamic properties match the properties of the area instance version that is represented:

Return Value

-   ACTIVE\_PROPERTIES of type ABAP\_BOOL

ABAP\_TRUE if the dynamic attributes of the area have not been changed since the current area instance version was built, or if the current internal session is represented. Otherwise, or if the area handle was already released, ABAP\_FALSE.

GET\_DETACH\_INFO

Determines the reason for an invalid area handle.

Return Value

-   DETACH\_INFO of type SHM\_DETACH\_INFO

The return value can be compared with one of the following constants of class CL\_ABAP\_MEMORY\_AREA.

-   DETACH\_INFO\_NOT\_DETACHED
    The area handle is still valid. This value is also returned if a commit fails but no rollback has yet been performed. This value is also returned if the current internal session is represented.

-   DETACH\_INFO\_HANDLE
    The shared lock or exclusive lock was released explicitly using one of the methods DETACH\_COMMIT or DETACH\_ROLLBACK.

-   DETACH\_INFO\_AREA
    The shared lock or exclusive lock was released by one of the DETACH\_AREA or DETACH\_ALL\_AREAS methods.

-   DETACH\_INFO\_ATTACH
    The shared lock was released by the ATTACH\_FOR\_WRITE method, and the constant CL\_SHM\_AREA=>ATTACH\_MODE\_DETACH\_READER was passed to the ATTACH\_MODE parameter.

-   DETACH\_INFO\_INVALIDATE
    The shared lock was released using an INVALIDATE\_... method, and the ABAP\_TRUE constant was passed to the TERMINATE\_CHANGER parameter.

-   DETACH\_INFO\_PROPAGATE
    The change lock was released by a PROPAGATE\_... method.

-   DETACH\_INFO\_FREE
    The shared lock or exclusive lock was released using a FREE\_... method.

Continue
[Shared Objects - CL\_SHM\_AREA](javascript:call_link\('abenshm_cl_shm_area.htm'\))
[Shared Objects - CL\_IMODE\_AREA](javascript:call_link\('abenshm_cl_imode_area.htm'\))