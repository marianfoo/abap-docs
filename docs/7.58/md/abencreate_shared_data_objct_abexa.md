  

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