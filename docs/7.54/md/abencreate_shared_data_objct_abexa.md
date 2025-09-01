  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencreate_objects.htm) →  [CREATE DATA](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data.htm) →  [CREATE DATA - AREA HANDLE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcreate_data_area_handle.htm) → 

Creating a Data Object as a Shared Object

This example demonstrates how a data object is created in an [area instance version](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_instance_version_glosry.htm "Glossary Entry").

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

The addition AREA HANDLE is used to create an anonymous data object of type string as a [shared object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenshared_object_glosry.htm "Glossary Entry") in an [area instance version](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the area CL\_DEMO\_AREA. The generically typed attribute dref of the [area root class](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenroot_data_class_glosry.htm "Glossary Entry") CL\_DEMO\_ROOT is used as a reference variable. A field symbol is used to dereference the data reference and assign a value to the anonymous data object.

Once the method DETACH\_COMMIT completes the write, a read is performed to demonstrate how the objects in the shared memory are accessed. An access of this type can also be made in another program, as long as the area instance version exists in the shared memory.