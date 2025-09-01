  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [CREATE OBJECT](javascript:call_link\('abapcreate_object.htm'\)) →  [CREATE OBJECT, AREA HANDLE](javascript:call_link\('abapcreate_object_area_handle.htm'\)) → 

Creating an Instance of a Class as a Shared Object

This example demonstrates how an object is created in an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry").

Source Code

REPORT demo\_create\_shared\_object.
CLASS class DEFINITION
            SHARED MEMORY ENABLED.
  PUBLIC SECTION.
    DATA attr TYPE string.
    METHODS set\_attr IMPORTING text TYPE string.
ENDCLASS.
CLASS class IMPLEMENTATION.
  METHOD set\_attr.
    attr = text.
  ENDMETHOD.
ENDCLASS.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: handle TYPE REF TO cl\_demo\_area,
          root   TYPE REF TO cl\_demo\_root,
          exc    TYPE REF TO cx\_shm\_attach\_error,
          oref   TYPE REF TO class.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_write( ).
        CREATE OBJECT root AREA HANDLE handle.
        handle->set\_root( root ).
        CREATE OBJECT root->oref AREA HANDLE handle TYPE class.
        oref ?= root->oref.
        oref->set\_attr( \`String in shared memory\` ).
        CLEAR oref.
        handle->detach\_commit( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        cl\_demo\_output=>display\_text( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_read( ).
        oref ?= handle->root->oref.
        cl\_demo\_output=>display\_data( oref->attr ).
        CLEAR oref.
        handle->detach( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        cl\_demo\_output=>display\_text( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

If the addition AREA HANDLE is used, an instance of the local class class is created as a [shared object](javascript:call_link\('abenshared_object_glosry.htm'\) "Glossary Entry") in an [area instance version](javascript:call_link\('abenarea_instance_version_glosry.htm'\) "Glossary Entry") of the area CL\_DEMO\_AREA. The generically typed attribute oref of the [area root class](javascript:call_link\('abenroot_data_class_glosry.htm'\) "Glossary Entry") CL\_DEMO\_ROOT is used as a reference variable. The attribute attr of the object is given a value by calling its method set\_attr.

After write access has been completed using the method DETACH\_COMMIT, a read is performed to demonstrate how the objects in the shared memory are accessed. Such an access can also be made in another program, as long as the area instance version exists in the shared memory.