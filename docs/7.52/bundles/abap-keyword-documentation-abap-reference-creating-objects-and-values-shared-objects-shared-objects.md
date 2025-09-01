# ABAP - Keyword Documentation / ABAP - Reference / Creating Objects and Values / Shared Objects / Shared Objects - Classes and Interfaces / Shared Objects - IF_SHM_BUILD_INSTANCE

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenshm_if_shm_build_instance.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_if_shm_build_instance.htm)
- [abenshm_area_constructor_class.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.440Z

---

### abenshm_if_shm_build_instance.htm

> **📖 Official SAP Documentation**: [abenshm_if_shm_build_instance.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_if_shm_build_instance.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Classes and Interfaces](javascript:call_link\('abenshm_classes.htm'\)) → 

Shared Objects - IF\_SHM\_BUILD\_INSTANCE

Interface IF\_SHM\_BUILD\_INSTANCE must be included by an [area constructor class](javascript:call_link\('abenshm_area_constructor_class.htm'\)) that implements an area's optional area constructor.

Static Methods

BUILD

Interface method for implementing the area constructor of an area.

input parameter

-   INST\_NAME of type SHM\_INST\_NAME

Name of the area instance version. Entering a name is optional. The default value is the value of constant CL\_SHM\_AREA=>DEFAULT\_INSTANCE.

-   INVOCATION\_MODE of type i

This parameter can be used to determine the type of call in the area constructor. The default value CL\_SHM\_AREA=>INVOCATION\_MODE\_EXPLICIT is used for the explicit call. CL\_SHM\_AREA=>INVOCATION\_MODE\_AUTO\_BUILD is passed with the automatic call.

Exceptions

-   CX\_SHM\_BUILD\_FAILED

An error has occurred while executing the area constructor.

Note

The BUILD method does not have an input parameter for the client identifier. The area is built in the current client when the method is called.

Continue
[Shared Objects - Area Constructor Class](javascript:call_link\('abenshm_area_constructor_class.htm'\))



**📖 Source**: [abenshm_if_shm_build_instance.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_if_shm_build_instance.htm)

### abenshm_area_constructor_class.htm

> **📖 Official SAP Documentation**: [abenshm_area_constructor_class.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenshm_area_constructor_class.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenshm_area_constructor_class.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Classes and Interfaces](javascript:call_link\('abenshm_classes.htm'\)) →  [Shared Objects - IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\)) → 

Shared Objects - Area Constructor Class

An area constructor class is a global class with a freely definable name that implements the interface [IF\_SHM\_BUILD\_INSTANCE](javascript:call_link\('abenshm_if_shm_build_instance.htm'\)). An area constructor can be implemented in the interface method BUILD.

An area constructor class can be [assigned](javascript:call_link\('abenshm_area_dynamic_properties.htm'\)) to an [area](javascript:call_link\('abenshm_areas.htm'\)) in transaction SHMA. This is always necessary if the area is built automatically by calling the area constructor, that is if the components BUILD\_KIND and REFRESH\_TIME of the structure PROPERTIES of the class [CL\_SHM\_AREA](javascript:call_link\('abenshm_cl_shm_area.htm'\)) are filled accordingly. If an area is not built automatically, an area constructor class can be specified for the explicit area constructor call using the method BUILD of the [area class](javascript:call_link\('abenshm_area_class.htm'\)).

Structure of an Area Constructor

The following structure is recommended for the area constructor implemented in the interface method BUILD:

1.  First, the area constructor has to use the method ATTACH\_FOR\_WRITE to create an area handle with an exclusive lock for the area instance passed in the parameter INST\_NAME. The automatic area constructor is also not able to ensure that the exclusive lock can be set, which means that all exceptions have to be caught and forwarded to the caller of the constructor by raising the interface exception CX\_SHM\_BUILD\_FAILED. This should pass the original exception to the parameter PREVIOUS of the constructor of CX\_SHM\_BUILD\_FAILED.
    
2.  As is the case whenever a new area instance version is created, a root object also has to be defined in the area constructor using the method SET\_ROOT.
    
3.  The area instance version can then be built, which means that objects are stored in the shared memory.
    
4.  The new area handle has to be released again using the method DETACH\_COMMIT.
    
5.  If the area constructor was called automatically, a database commit has to be triggered when a transactional area is built.

In an area constructor, no statements can be used that exit the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") (such as SUBMIT, CALL TRANSACTION, CALL SCREEN, MESSAGE for message types "W", "I", "E", and so on).

Example

The following implementation can be used as a template for new implementations.

CLASS area\_constructor IMPLEMENTATION.
  METHOD if\_shm\_build\_instance~build.
    DATA:
      my\_handle TYPE REF TO area
      my\_data   TYPE REF TO area\_root\_class
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
    TRY.
        my\_handle->detach\_commit( ).
      CATCH cx\_shm\_error INTO my\_except.
        RAISE EXCEPTION TYPE cx\_shm\_build\_failed
                        EXPORTING previous = my\_except.
    ENDTRY.
    IF invocation\_mode = cl\_shm\_area=>invocation\_mode\_auto\_build.
      COMMIT CONNECTION default.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
