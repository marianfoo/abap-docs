# ABAP - Keyword Documentation / ABAP - Programming Language / Creating Objects and Values / Shared Objects / Shared Objects - Classes and Interfaces / Shared Objects - IF_SHM_BUILD_INSTANCE

Included pages: 2


### abenshm_if_shm_build_instance.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Classes and Interfaces](javascript:call_link\('abenshm_classes.htm'\)) → 

Shared Objects - IF\_SHM\_BUILD\_INSTANCE

The interface IF\_SHM\_BUILD\_INSTANCE must be included by an [area constructor class](javascript:call_link\('abenshm_area_constructor_class.htm'\)) that implements the optional area constructor of an area.

Static Methods

BUILD

Interface method for implementing the area constructor of an area.

Input Parameters

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. Specifying the name is optional. The default value is the value of the constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   INVOCATION\_MODE of type i

This parameter can be used to determine the type of call in the area constructor. The default value CL\_SHM\_AREA=>INVOCATION\_MODE\_EXPLICIT is used for the explicit call. CL\_SHM\_AREA=>INVOCATION\_MODE\_AUTO\_BUILD is passed with the automatic call.

Exceptions

-   CX\_SHM\_BUILD\_FAILED

An error occurred when the area constructor was executed.

Note

The method BUILD does not have an input parameter for the client ID. The area is built in the current client when the method is called.

Continue
[Shared Objects - Area Constructor Class](javascript:call_link\('abenshm_area_constructor_class.htm'\))


### abenshm_area_constructor_class.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Classes and Interfaces](javascript:call_link\('abenshm_classes.htm'\)) →  [Shared Objects - IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\)) → 

Shared Objects - Area Constructor Class

An area constructor class is a global class with a freely selectable name that implements the interface [IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\)). An area constructor can be implemented in the interface method BUILD.

An area constructor class can be [assigned](javascript:call_link\('abenshm_area_dynamic_properties.htm'\)) to an [area](javascript:call_link\('abenshm_areas.htm'\)) in transaction SHMA. This is always necessary if the area is to be built automatically by calling the area constructor, that is, if the components BUILD\_KIND and REFRESH\_TIME of the structure PROPERTIES of the class [CL\_SHM\_AREA](javascript:call_link\('abenshm_cl_shm_area.htm'\)) are filled accordingly. If an area is not built automatically, an area constructor class can be specified for the explicit area constructor call using the method BUILD of the [area class](javascript:call_link\('abenshm_area_class.htm'\)).

Structure of an Area Constructor

The following structure is recommended for the area constructor implemented in the interface method BUILD:

1.  First, the area constructor must use the method ATTACH\_FOR\_WRITE to create an area handle with a write lock for the area instance passed in the parameter INST\_NAME. Since the automatically created area constructor cannot be used to ensure that the write lock can be set, all exceptions must be caught and forwarded to the caller of the constructor by raising the interface exception CX\_SHM\_BUILD\_FAILED. The original exception should be passed to the parameter PREVIOUS of the constructor of CX\_SHM\_BUILD\_FAILED.
    
2.  As with every creation of a new area instance version, a root object must also be defined in the area constructor using the method SET\_ROOT.
    
3.  The area instance version can then be built, which means that objects are stored in the shared memory.
    
4.  The created area handle has to be released again using the method DETACH\_COMMIT. If an exception is raised, it is usually a programming error and should not be handled in the area constructor.
    
5.  If the area constructor was called automatically, a database commit must be triggered when a transactional area is built.
    

In an area constructor, no statements can be used that exit the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") (such as SUBMIT, CALL TRANSACTION, CALL SCREEN, MESSAGE for message types "W", "I", "E", and so on).

Example

The following implementation can be used as a template for personal implementations.

CLASS area\_constructor IMPLEMENTATION.
  METHOD if\_shm\_build\_instance~build.
    DATA:
      my\_handle TYPE REF TO area,
      my\_data   TYPE REF TO area\_root\_class,
      my\_except TYPE REF TO cx\_root.
    TRY.
        my\_handle = cl\_my\_area=>attach\_for\_write( inst\_name ).
      CATCH cx\_shm\_error INTO my\_except.
        RAISE EXCEPTION TYPE cx\_shm\_build\_failed
                        EXPORTING previous = my\_except.
    ENDTRY.
    CREATE OBJECT my\_data AREA HANDLE my\_handle.
    my\_handle->set\_root( my\_data ).
    ... " code to build the area instance
    my\_handle->detach\_commit( ).
    IF invocation\_mode = cl\_shm\_area=>invocation\_mode\_auto\_build.
      COMMIT CONNECTION default.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
