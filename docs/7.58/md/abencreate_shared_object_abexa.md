---
title: "Creating an Instance of a Class as a Shared Object"
description: |
  This example demonstrates how an object is created in an area instance version(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm 'Glossary Entry'). Source Code  Public class definition CLASS cl_demo_create_shared_object DEFINITION INHERITING FROM
version: "7.58"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_shared_object_abexa.htm"
abapFile: "abencreate_shared_object_abexa.htm"
keywords: ["do", "if", "try", "catch", "method", "class", "data", "abencreate", "shared", "object", "abexa"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencreate_objects.htm) →  [CREATE OBJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object.htm) →  [CREATE OBJECT, AREA HANDLE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcreate_object_area_handle.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Creating%20an%20Instance%20of%20a%20Class%20as%20a%20Shared%20Object%2C%20ABENCREATE_SHARED_OBJECT_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion%20for%20improvement:)

Creating an Instance of a Class as a Shared Object

This example demonstrates how an object is created in an [area instance version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_create\_shared\_object DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
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
\* Public class implementation
CLASS cl\_demo\_create\_shared\_object IMPLEMENTATION.
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
        out->write\_text( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
    TRY.
        handle = cl\_demo\_area=>attach\_for\_read( ).
        oref ?= handle->root->oref.
        out->write\_data( oref->attr ).
        CLEAR oref.
        handle->detach( ).
      CATCH cx\_shm\_attach\_error INTO exc.
        out->write\_text( exc->get\_text( ) ).
        LEAVE PROGRAM.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

If the addition AREA HANDLE is used, an instance of the local class class is created as a [shared object](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshared_object_glosry.htm "Glossary Entry") in an [area instance version](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenarea_instance_version_glosry.htm "Glossary Entry") of the area CL\_DEMO\_AREA. The generically typed attribute oref of the [area root class](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenroot_data_class_glosry.htm "Glossary Entry") CL\_DEMO\_ROOT is used as a reference variable. The attribute attr of the object is given a value by calling its method set\_attr.

After write access has been completed using the method DETACH\_COMMIT, a read is performed to demonstrate how the objects in the shared memory are accessed. Such an access can also be made in another program, as long as the area instance version exists in the shared memory.