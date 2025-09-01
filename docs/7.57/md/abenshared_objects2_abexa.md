---
title: "Shared Objects - Writing to and Reading from an Area"
description: |
  This example demonstrates the writing to and reading from an area. Source Code REPORT demo_shared_objects_rw. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: class_constructor, main. PRIVATE SECTION. CLASS-DATA: o TYPE REF TO if_demo_output, BEGIN OF struc, instance_name TYPE shm_inst
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects2_abexa.htm"
abapFile: "abenshared_objects2_abexa.htm"
keywords: ["select", "loop", "do", "if", "try", "catch", "method", "class", "data", "internal-table", "abenshared", "objects2", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Writing to and Reading from an Area, ABENSHARED_OBJECTS2_ABEXA, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Writing to and Reading from an Area

This example demonstrates the writing to and reading from an area.

Source Code   

REPORT demo\_shared\_objects\_rw.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      class\_constructor,
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      o TYPE REF TO if\_demo\_output,
      BEGIN OF struc,
        instance\_name TYPE shm\_inst\_name,
        number        TYPE int4,
        first\_name    TYPE string,
        last\_name     TYPE string,
      END OF struc,
      values      LIKE TABLE OF struc WITH EMPTY KEY,
      area\_handle TYPE REF TO cl\_demo\_sh\_ob\_area,
      area\_root   TYPE REF TO  cl\_demo\_so\_root.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    o->begin\_section( \`Shared objects demo: \` &&
      \`Write to and read from area\` ).
    "Set values for instances
    values = VALUE #(
    ( instance\_name = 'INSTANCE\_1' number = 1
      first\_name = \`John\` last\_name = \`Lennon\` )
    ( instance\_name = 'INSTANCE\_2' number = 2
      first\_name = \`Paul\` last\_name = \`McCartney\` )
    ( instance\_name = 'INSTANCE\_3' number = 3
      first\_name = \`Ringo\` last\_name = \`Starr\` )
    ( instance\_name = 'INSTANCE\_4' number = 4
      first\_name = \`George\` last\_name = \`Harrison\` )  ).
    "Write to area
    LOOP AT values ASSIGNING FIELD-SYMBOL(<write>).
      TRY.
          cl\_demo\_sh\_ob\_area=>attach\_for\_write(
            EXPORTING inst\_name = <write>-instance\_name
            RECEIVING handle = area\_handle ).
          CREATE OBJECT area\_root AREA HANDLE area\_handle.
          area\_handle->set\_root( EXPORTING root = area\_root ).
          area\_root->write( w\_num = <write>-number
                            w\_name1 = <write>-first\_name
                            w\_name2 = <write>-last\_name ).
          area\_handle->detach\_commit( ).
        CATCH cx\_shm\_attach\_error.
          o->write( 'Error when writing to area!' ).
      ENDTRY.
    ENDLOOP.
    "Read from area
    LOOP AT values ASSIGNING FIELD-SYMBOL(<read>).
      TRY.
          cl\_demo\_sh\_ob\_area=>attach\_for\_read(
            EXPORTING inst\_name = <read>-instance\_name
            RECEIVING handle = area\_handle ).
          area\_handle->root->read(
            IMPORTING r\_num   = FINAL(read\_number)
                      r\_name1 = FINAL(read\_first\_name)
                      r\_name2 = FINAL(read\_last\_name) ).
          struc = VALUE #( instance\_name = <read>-instance\_name
                           number        = read\_number
                           first\_name    = read\_first\_name
                           last\_name = read\_last\_name ).
          o->write\_doc(
      | <b>Read result for area { <read>-instance\_name }:</b> | ).
          o->write( struc ).
          o->line( ).
          area\_handle->detach( ).
        CATCH cx\_shm\_attach\_error.
          o->write( 'Error when reading from area!' ).
      ENDTRY.
    ENDLOOP.
    o->display( ).  ENDMETHOD.
  METHOD class\_constructor.
    o = cl\_demo\_output=>new( ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

Area Root Class   

The global class CL\_DEMO\_SO\_ROOT is used as an area root class. It contains three data objects number, first\_name and last\_name as private attributes. The methods WRITE and READ are used to set values for the data objects and read those values.

Area   

CL\_DEMO\_SH\_OB\_AREA is used as an area whose properties are maintained in the transaction SHMA. The lifetime after the last access is limited to five minutes to prevent memory space from being occupied in the shared memory without a program requiring it.

Description   

The internal table values is filled with data the writing and reading procedure is based on. It also provides instance names.

The table is looped across to write the entries to the area. First, an area is created before any data can be written to the shared memory using the method [ATTACH\_FOR\_WRITE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm). This method call includes the instance name that is provided in the internal table. This method returns a handle to the area (or instance), that has just been created in the shared memory. Then, a root object is created for the instance using a [CREATE OBJECT ... AREA HANDLE ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcreate_object_area_handle.htm) statement that includes the handle returned by the method call before. The WRITE method of the root reference is called providing the values for the attributes that are stored in the shared memory. Calling the [DETACH\_COMMIT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) method releases the change lock.

The internal table is looped across again to read from the instances using the instance names. The [ATTACH\_FOR\_READ](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) method is called using those instance names and the area handle as parameters. Using the READ method, the values of the attributes of the individual instances that have been created before are retrieved from the shared memory. Calling the [DETACH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_cl_shm_area.htm) method releases the read lock.

After the program call, the area instance versions can be examined in transaction SHMM.