  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Classes and Interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_classes.htm) →  [Shared Objects - IF\_SHM\_BUILD\_INSTANCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_if_shm_build_instance.htm) → 

Shared Objects - Area Constructor Class

An area constructor class is a global class with a freely selectable name that implements the interface [IF\_SHM\_BUILD\_INSTANCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_if_shm_build_instance.htm). An area constructor can be implemented in the interface method BUILD.

An area constructor class can be [assigned](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_dynamic_properties.htm) to an [area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_areas.htm) in transaction SHMA. This is always necessary if the area is to be built automatically by calling the area constructor, that is, if the components BUILD\_KIND and REFRESH\_TIME of the structure PROPERTIES of the class [CL\_SHM\_AREA](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_cl_shm_area.htm) are filled accordingly. If an area is not built automatically, an area constructor class can be specified for the explicit area constructor call using the method BUILD of the [area class](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenshm_area_class.htm).

Structure of an Area Constructor

The following structure is recommended for the area constructor implemented in the interface method BUILD:

1.  First, the area constructor must use the method ATTACH\_FOR\_WRITE to create an area handle with a write lock for the area instance passed in the parameter INST\_NAME. Since the automatically created area constructor cannot be used to ensure that the write lock can be set, all exceptions must be caught and forwarded to the caller of the constructor by raising the interface exception CX\_SHM\_BUILD\_FAILED. The original exception should be passed to the parameter PREVIOUS of the constructor of CX\_SHM\_BUILD\_FAILED.
    
2.  As with every creation of a new area instance version, a root object must also be defined in the area constructor using the method SET\_ROOT.
    
3.  The area instance version can then be built, which means that objects are stored in the shared memory.
    
4.  The created area handle has to be released again using the method DETACH\_COMMIT. If an exception is raised, it is usually a programming error and should not be handled in the area constructor.
    
5.  If the area constructor was called automatically, a database commit must be triggered when a transactional area is built.
    

In an area constructor, no statements can be used that exit the current [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") (such as SUBMIT, CALL TRANSACTION, CALL SCREEN, MESSAGE for message types "W", "I", "E", and so on).

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