# ABAP - Keyword Documentation / ABAP - Programming Language / Creating Objects and Values / CREATE DATA / CREATE DATA, AREA HANDLE

Included pages: 2


### abapcreate_data_area_handle.htm

---
title: "CREATE DATA, AREA HANDLE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_shortref.htm) Syntax CREATE DATA dref AREA HANDLE handle ... Effect This statement creates an anonymous data object as a shared object(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_area_handle.htm"
abapFile: "abapcreate_data_area_handle.htm"
keywords: ["update", "do", "if", "try", "catch", "method", "class", "data", "types", "abapcreate", "area", "handle"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CREATE%20DATA%2C%20AREA%20HANDLE%2C%20ABAPCREATE_DATA_AREA_HANDLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

CREATE DATA, AREA HANDLE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref AREA HANDLE handle ...

Effect

This statement creates an anonymous data object as a [shared object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_object_glosry.htm "Glossary Entry") in the [area instance version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the [shared memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_memory_glosry.htm "Glossary Entry") to which the [area handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_handle_glosry.htm "Glossary Entry") referenced by handle is bound.

handle expects an object reference variable whose static type is [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_cl_abap_memory_area.htm) or one of its subclasses ([area class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_class_glosry.htm "Glossary Entry")). When the statement is executed, handle must point to an [area handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_handle_glosry.htm "Glossary Entry") and the area handle must be bound to an area instance version with a change lock. A reference like this can be created in one of the following ways:

-   By inheriting the return value of the methods [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_area_class.htm) or [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_area_class.htm) of an area class created using transaction SHMA.
-   By inheriting the return value of the method [GET\_HANDLE\_BY\_...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_cl_abap_memory_area.htm) of any area class.
-   By inheriting the return value of the method [GET\_IMODE\_HANDLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshm_cl_imode_area.htm) of the predefined class CL\_IMODE\_AREA.

The latter is a reference to an area handle for the current [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry") and the statement CREATE DATA works in the same way as without the addition AREA HANDLE.

Restrictions

The creation of anonymous data objects as shared objects is subject to the following restrictions for data references in the shared objects memory: the storage of data references in closed [area instance versions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the shared objects memory is restricted to those [dynamic types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_type_glosry.htm "Glossary Entry") that are known when loading a program into an internal session.

Therefore, the following data types cannot be used to create anonymous data objects in the shared object memory if these are to be preserved in a closed area instance version:

1.  All data types created in a temporary subroutine pool created using [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapgenerate_shortref.htm).
2.  Data types created dynamically at program runtime using methods of the [RTTC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry").
3.  Bound data types of anonymous data objects created at program runtime, to which a dynamic length was assigned when they were created with CREATE DATA.
4.  Bound data types of anonymous data objects created at program runtime and that were assigned a dynamic type that requires a length specification when they were created using CREATE DATA.

Points 3 and 4 particularly include the statement CREATE DATA with the addition AREA HANDLE itself. Exceptions to the restrictions listed in points 2 to 4 are:

-   The restrictions do not apply to the data type p.
-   The restrictions do not apply to the data types c, n, and x, as long as the memory requirement does not exceed 100 bytes.

If a data reference variable that is stored in the shared objects memory refers to an anonymous data object of a dynamic type that is subject to the restrictions, the exception of the class CX\_SHM\_EXTERNAL\_TYPE is raised when the DETACH\_COMMIT method is executed.

The following can be used without restrictions:

-   All visible data types of global interfaces and classes.
-   Data elements, DDIC structures, and DDIC database tables and DDIC table types of the ABAP Dictionary.
-   Data types from type pools.
-   Bound data types of anonymous data objects created at program runtime to which a static type with a static length was assigned when they were created using CREATE DATA.
-   Bound data types of anonymous data objects created at program runtime to which a fully specified dynamic type was assigned when they were created using CREATE DATA.
-   All data types that were created statically in the same program using declarative statements. It should be noted, however, that it is no longer possible to access existing area instances after each change to the creating program.

The additions [REF TO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_reference.htm) and [TABLE OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_itab.htm) can be used as long as the specified types meet the above requirements. This also applies to the addition [HANDLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_handle.htm), which means the type description object must have been created with methods of the [RTTI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") from allowed types.

Hints

-   The only shared object that can be addressed from an ABAP program directly after an area instance version is bound is the instance of the [area root class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_data_class_glosry.htm "Glossary Entry"). All other objects must be referenced in this instance. In particular, no direct access to anonymous data objects is possible. Instead, the instance of the area root class must contain references to these anonymous data objects, which can also be indirect.
-   It is recommended that only global data types together with AREA HANDLE are used. As an occasional replacement for the direct reference to data elements and table types of the ABAP Dictionary, the respective types can be created in global interfaces, classes, or even type pools.

Example

Creation of an anonymous structure in an area instance version of area CL\_DEMO\_AREA.

DATA: root   TYPE REF TO cl\_demo\_root,
      handle TYPE REF TO cl\_demo\_area.
...
TRY.
    handle = cl\_demo\_area=>attach\_for\_write( ).
    CREATE OBJECT root AREA HANDLE handle.
    handle->set\_root( root ).
    CREATE DATA root->dref AREA HANDLE handle TYPE scarr.
  CATCH cx\_shm\_attach\_error.
    ...
ENDTRY.
...

Executable Example

[Creating a Data Object as a Shared Object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_shared_data_objct_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SHM\_WRONG\_HANDLE

-   Cause: The area handle does not hold any change locks.

CX\_SHM\_ALREADY\_DETACHED

-   Cause: The area handle is not bound to an area instance version.

CX\_SHM\_OUT\_OF\_MEMORY

-   Cause: There is not enough memory.

Continue
![Example](exa.gif "Example") [Creating a Data Object as a Shared Object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_shared_data_objct_abexa.htm)


### abencreate_shared_data_objct_abexa.htm

---
title: "Creating a Data Object as a Shared Object"
description: |
  This example demonstrates how a data object is created in an area instance version(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_create_shared_data_obj DEFINITION INHERITI
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_shared_data_objct_abexa.htm"
abapFile: "abencreate_shared_data_objct_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abencreate", "shared", "objct", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data.htm) →  [CREATE DATA, AREA HANDLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_data_area_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20a%20Data%20Object%20as%20a%20Shared%20Object%2C%20ABENCREATE_SHARED_DATA_OBJCT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%
20for%20improvement:)

Creating a Data Object as a Shared Object

This example demonstrates how a data object is created in an [area instance version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_create\_shared\_data\_obj DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_create\_shared\_data\_obj IMPLEMENTATION.
  METHOD main.
    DATA: handle TYPE REF TO cl\_demo\_area,
          root   TYPE REF TO cl\_demo\_root,
          exc    TYPE REF TO cx\_shm\_attach\_error.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_write( ).
        CREATE OBJECT root AREA HANDLE handle.
        handle->set\_root( root ).
        CREATE DATA root->dref AREA HANDLE handle TYPE string.
        root->dref->\* = \`String in shared memory\`.
        handle->detach\_commit( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        out->write( exc->get\_text( ) ).
        LEAVE PROGRAM.
      CATCH cx\_shm\_external\_type.
        out->write( 'Type cannot be used' ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_read( ).
        out->write( handle->root->dref->\* ).
        handle->detach( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        out->write( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

The addition AREA HANDLE is used to create an anonymous data object of type string as a [shared object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_object_glosry.htm "Glossary Entry") in an [area instance version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the area CL\_DEMO\_AREA. The generically typed attribute dref of the [area root class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_data_class_glosry.htm "Glossary Entry") CL\_DEMO\_ROOT is used to refer to a variable.

After write access has been completed using DETACH\_COMMIT, a read is performed to demonstrate how the objects in the shared memory are accessed. Such accesses can also be made in another program, as long as the area instance version exists in the shared memory.
