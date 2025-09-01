# ABAP Keyword Documentation / ABAP − Reference / Creating Objects and Values / CREATE DATA / CREATE DATA - AREA HANDLE

Included pages: 2


### abapcreate_data_area_handle.htm

---
title: "CREATE DATA - AREA HANDLE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_shortref.htm) Syntax CREATE DATA dref AREA HANDLE handle ... Effect This statement creates an anonymous data object as a shared object(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_area_handle.htm"
abapFile: "abapcreate_data_area_handle.htm"
keywords: ["update", "do", "if", "try", "method", "class", "data", "types", "abapcreate", "area", "handle"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) → 

CREATE DATA - AREA HANDLE

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_shortref.htm)

Syntax

CREATE DATA dref AREA HANDLE handle ...

Effect

This statement creates an anonymous data object as a [shared object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_object_glosry.htm "Glossary Entry") in the [area instance version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the [shared memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_memory_glosry.htm "Glossary Entry") to which the [area handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_handle_glosry.htm "Glossary Entry") referenced by handle is bound.

handle expects an object reference variable whose static type is [CL\_ABAP\_MEMORY\_AREA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_abap_memory_area.htm) or one of its subclasses ([area class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_class_glosry.htm "Glossary Entry")). When the statement is executed, handle must point to an [area handle](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_handle_glosry.htm "Glossary Entry") and the area handle must be associated with an area instance version with a change lock. A reference like this can be created in one of the following ways:

-   By inheriting the return value of the methods [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_class.htm) or [ATTACH\_FOR\_UPDATE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_area_class.htm) of an area class created using transaction SHMA.
    
-   By inheriting the return value of the method [GET\_HANDLE\_BY\_...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_abap_memory_area.htm) of any area class.
    
-   By inheriting the return value of the method [GET\_IMODE\_HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshm_cl_imode_area.htm) of the predefined class CL\_IMODE\_AREA.
    

The latter is a reference to an area handle for the current [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") and the statement CREATE DATA operates as if the addition AREA HANDLE is not specified.

Restrictions

The creation of anonymous data objects as shared objects is subject to the following restrictions for data references in the shared objects memory: the storage of data references in closed [area instance versions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the shared objects memory is restricted to those [dynamic types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_type_glosry.htm "Glossary Entry") that are known when loading a program into an internal session.

Therefore, the following data types cannot be used to create anonymous data objects in the shared object memory, if these are to be preserved in a closed area instance version:

1.  All data types created in a temporary subroutine pool created using [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapgenerate_shortref.htm).
    
2.  Data types created dynamically at runtime using methods of the [RTTC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_creation_glosry.htm "Glossary Entry").
    
3.  Bound data types of anonymous data objects created at program runtime and to which a dynamic length was assigned when they were created with CREATE DATA.
    
4.  Bound data types of anonymous data objects created at program runtime and to which a dynamic type requiring length definition was assigned when the data objects were created using CREATE DATA.
    

Points 3 and 4 include the statement CREATE DATA with the addition AREA HANDLE itself. Exceptions to the restrictions listed under points 2 to 4 are:

-   The restrictions are not valid for data type p.
    
-   The restrictions are not valid for data types c, n, and x as long as the memory requirements do not exceed 100 bytes.
    

If a data reference variable that is stored in the shared objects memory refers to an anonymous data object of a dynamic type that is subject to the restrictions, the exception of the class CX\_SHM\_EXTERNAL\_TYPE is raised when the DETACH\_COMMIT method is executed.

The following can be used without restriction:

-   All visible data types of global interfaces and classes.
    
-   Data elements, structures, and database tables and table types from ABAP Dictionary.
    
-   Data types from type groups.
    
-   Bound data types of anonymous data objects created at program runtime to which a static type with a static length was assigned when they were created using CREATE DATA.
    
-   Bound data types of anonymous data objects created at program runtime to which a fully specified dynamic type was assigned when they were created using CREATE DATA.
    
-   All data types that were created statically in the same program using declarative statements. It should be noted, however, that it is no longer possible to access existing area instances once the creating program is changed.
    

The additions [REF TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_reference.htm) and [TABLE OF](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_itab.htm) can be used as long as the specified types meet the above requirements. This also applies to the addition [HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_handle.htm), which means the type description object must have been created with methods of the [RTTI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrun_time_type_identific_glosry.htm "Glossary Entry") from allowed types.

Notes

-   The only shared object that can be addressed from an ABAP program directly after a binding is made to an area instance version is the instance of the [area root class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenroot_data_class_glosry.htm "Glossary Entry"). All other objects have to be referenced in this instance. In particular, there is no direct access to anonymous data objects possible. Instead, the instance of the area root class must contain references to these anonymous data objects, which can also be indirect.
    
-   It is best to use only global data types with AREA HANDLE. As an occasional replacement for the direct reference to data elements and table types from ABAP Dictionary, the respective types can be created in global interfaces, classes, or even type groups.
    

Example

Creates an anonymous structure in an area instance version of area CL\_DEMO\_AREA.

DATA: root   TYPE REF TO cl\_demo\_root,
      handle TYPE REF TO cl\_demo\_area.
...
handle = cl\_demo\_area=>attach\_for\_write( ).
CREATE OBJECT root AREA HANDLE handle.
handle->set\_root( root ).
CREATE DATA root->dref AREA HANDLE handle TYPE scarr.
...

Executable Example

[Creating a Data Object as a Shared Object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_shared_data_objct_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SHM\_WRONG\_HANDLE

-   Cause: The area handle does not hold any change locks.
    

CX\_SHM\_ALREADY\_DETACHED

-   Cause: The area handle is not bound to an area instance version.
    

CX\_SHM\_OUT\_OF\_MEMORY

-   Cause: There is not enough memory.
    

Continue
![Example](exa.gif "Example") [Creating a Data Object as a Shared Object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_shared_data_objct_abexa.htm)


### abencreate_shared_data_objct_abexa.htm

---
title: "Creating a Data Object as a Shared Object"
description: |
  This example demonstrates how a data object is created in an area instance version(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm 'Glossary Entry'). Source Code REPORT demo_create_shared_data_object. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-
version: "7.53"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_shared_data_objct_abexa.htm"
abapFile: "abencreate_shared_data_objct_abexa.htm"
keywords: ["select", "do", "try", "catch", "method", "class", "data", "field-symbol", "abencreate", "shared", "objct", "abexa"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data.htm) →  [CREATE DATA - AREA HANDLE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcreate_data_area_handle.htm) → 

Creating a Data Object as a Shared Object

This example demonstrates how a data object is created in an [area instance version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_create\_shared\_data\_object.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: handle TYPE REF TO cl\_demo\_area,
          root   TYPE REF TO cl\_demo\_root,
          exc    TYPE REF TO cx\_shm\_attach\_error.
    FIELD-SYMBOLS <fs> TYPE any.
    DATA(out) = cl\_demo\_output=>new( ).
    TRY.
        handle = cl\_demo\_area=>attach\_for\_write( ).
        CREATE OBJECT root AREA HANDLE handle.
        handle->set\_root( root ).
        CREATE DATA root->dref AREA HANDLE handle TYPE string.
        ASSIGN root->dref->\* TO <fs>.
        <fs> = \`String in shared memory\`.
        handle->detach\_commit( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        out->display( exc->get\_text( ) ).
        LEAVE PROGRAM.
      CATCH cx\_shm\_external\_type.
        out->display( 'Type cannot be used' ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_read( ).
        ASSIGN handle->root->dref->\* TO <fs>.
        out->display( <fs> ).
        handle->detach( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        out->display( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The addition AREA HANDLE is used to create an anonymous data object of type string as a [shared object](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenshared_object_glosry.htm "Glossary Entry") in an [area instance version](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the area CL\_DEMO\_AREA. The generically typed attribute dref of the [area root class](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenroot_data_class_glosry.htm "Glossary Entry") CL\_DEMO\_ROOT is used as a reference variable. A field symbol is used to dereference the data reference and assign a value to the anonymous data object.

Once the method DETACH\_COMMIT completes the write, a read is performed to demonstrate how the objects in the shared memory are accessed. An access of this type can also be made in another program, as long as the area instance version exists in the shared memory.
