  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_classes.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - CL_ABAP_MEMORY_AREA, ABENSHM_CL_ABAP_MEMORY_AREA, 757%0D%0A%0D%0AErr
or:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - CL\_ABAP\_MEMORY\_AREA

The class CL\_ABAP\_MEMORY\_AREA is the shared superclass of all area classes. It contains general methods for [area handles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarea_handle_glosry.htm "Glossary Entry").

-   [Static Methods](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_1)
    -   [GET\_HANDLE\_BY\_OREF](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_2)
    -   [GET\_HANDLE\_BY\_DREF](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_3)
    -   [GET\_HANDLE\_BY\_DATA](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_4)
-   [Instance Methods](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_5)
    -   [IS\_SHARED](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_6)
    -   [IS\_VALID](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_7)
    -   [IS\_ACTIVE\_VERSION](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_8)
    -   [HAS\_ACTIVE\_PROPERTIES](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_9)
    -   [GET\_DETACH\_INFO](#@@ITOC@@ABENSHM_CL_ABAP_MEMORY_AREA_10)

Static Methods   

GET\_HANDLE\_BY\_OREF   

Gets the area handle for an instance of a class. The instance can be in the shared memory or in the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

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
    
    Reference to the area handle of the corresponding area instance version. Its typing essentially means that this reference is only suitable for creating objects.
    

GET\_HANDLE\_BY\_DATA   

Gets the area handle for a data object. The data object can be in the shared memory or in the internal session.

Input Parameter

-   DATAOBJECT of type any
    
    Data object in the shared memory. This can, for example, be specified as a field symbol that points to a dereferenced data object in the shared memory.
    

Return Value

-   HANDLE of type REF TO cl\_abap\_memory\_area
    
    Reference to the area handle of the corresponding area instance version. Its typing essentially means that this reference is only suitable for creating objects.
    

Instance Methods   

IS\_SHARED   

Checks whether the area handle represents an area instance version in the shared memory or the current internal session.

Return Value

-   SHARED of type abap\_bool
    
    abap\_true if an area instance version is represented in the shared objects memory and ABAP\_FALSE if the current internal session is represented.
    

IS\_VALID   

Checks whether the area handle can be used to access an area instance version in the shared memory or the current internal session.

Return Value

-   VALID of type abap\_bool
    
    abap\_true if the area handle can be used to access an area instance version or the current internal session, otherwise ABAP\_FALSE.
    

IS\_ACTIVE\_VERSION   

Checks whether the area handle points to the active area instance version.

Return Value

-   ACTIVE\_VERSION of type abap\_bool
    
    abap\_true if the current area instance version or the internal session is represented. ABAP\_FALSE if an obsolete area instance version is represented, the area handle was already released, or if it is a change handle.
    

HAS\_ACTIVE\_PROPERTIES   

Checks whether the current dynamic properties of the area match the properties of the area instance version that is represented:

Return Value

-   ACTIVE\_PROPERTIES of type abap\_bool
    
    abap\_true if the dynamic attributes of the area have not been changed since the start of construction of the current area instance version or if the current internal session is represented. Otherwise, or if the area handle was already released, ABAP\_FALSE.
    

GET\_DETACH\_INFO   

Determines the reason for an invalid area handle.

Return Value

-   DETACH\_INFO of type SHM\_DETACH\_INFO
    
    The return value can be compared to one of the following constants of the class CL\_ABAP\_MEMORY\_AREA.
    
    -   DETACH\_INFO\_NOT\_DETACHED
        
        The area handle is still valid. This value is also returned if a commit fails but no rollback has been performed yet. This value is also returned if the current internal session is represented.
        
    -   DETACH\_INFO\_HANDLE
        
        The read lock or change lock was released explicitly using one of the methods DETACH\_COMMIT or DETACH\_ROLLBACK.
        
    -   DETACH\_INFO\_AREA
        
        The read lock or change lock was released using one of the methods DETACH\_AREA or DETACH\_ALL\_AREAS.
        
    -   DETACH\_INFO\_ATTACH
        
        The read lock was released using the method ATTACH\_FOR\_WRITE and the constant CL\_SHM\_AREA=>ATTACH\_MODE\_DETACH\_READER was passed to the parameter ATTACH\_MODE.
        
    -   DETACH\_INFO\_INVALIDATE
        
        The change lock was released using an INVALIDATE\_... method and the constant abap\_true was passed to the parameter TERMINATE\_CHANGER.
        
    -   DETACH\_INFO\_PROPAGATE
        
        The change lock was released using a PROPAGATE\_... method.
        
    -   DETACH\_INFO\_FREE
        
        The read lock or change lock was released using a FREE\_... method.
        

Continue
[Shared Objects - CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm)
[Shared Objects - CL\_IMODE\_AREA](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_imode_area.htm)