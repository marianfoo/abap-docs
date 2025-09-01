  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) →  [Shared Objects - Examples](javascript:call_link\('abenshm_examples_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20Writing%20to%20and%20Reading%20from%20an%20Area%2C%20ABENSHARED_OBJECTS2_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugge
stion%20for%20improvement:)

Shared Objects - Writing to and Reading from an Area

This example demonstrates the writing to and reading from an area.

Source Code   

\* Public class definition
CLASS cl\_demo\_shared\_objects\_rw DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
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
\* Public class implementation
CLASS cl\_demo\_shared\_objects\_rw IMPLEMENTATION.
  METHOD main.
    out->begin\_section( \`Shared objects demo: \` &&
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
          out->write( 'Error when writing to area!' ).
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
          out->write\_doc(
      | <b>Read result for area { <read>-instance\_name }:</b> | ).
          out->write( struc ).
          out->line( ).
          area\_handle->detach( ).
        CATCH cx\_shm\_attach\_error.
          out->write( 'Error when reading from area!' ).
      ENDTRY.
    ENDLOOP.
  ENDMETHOD.
ENDCLASS.

Description   

Area Root Class   

The global class CL\_DEMO\_SO\_ROOT is used as an area root class. It contains three data objects number, first\_name and last\_name as private attributes. The methods WRITE and READ are used to set values for the data objects and read those values.

Area   

CL\_DEMO\_SH\_OB\_AREA is used as an area whose properties are maintained in the transaction SHMA. The lifetime after the last access is limited to five minutes to prevent memory space from being occupied in the shared memory without a program requiring it.

Description   

The internal table values is filled with data the writing and reading procedure is based on. It also provides instance names.

The table is looped across to write the entries to the area. First, an area is created before any data can be written to the shared memory using the method [ATTACH\_FOR\_WRITE](javascript:call_link\('abenshm_cl_shm_area.htm'\)). This method call includes the instance name that is provided in the internal table. This method returns a handle to the area (or instance), that has just been created in the shared memory. Then, a root object is created for the instance using a [CREATE OBJECT ... AREA HANDLE ...](javascript:call_link\('abapcreate_object_area_handle.htm'\)) statement that includes the handle returned by the method call before. The WRITE method of the root reference is called providing the values for the attributes that are stored in the shared memory. Calling the [DETACH\_COMMIT](javascript:call_link\('abenshm_cl_shm_area.htm'\)) method releases the change lock.

The internal table is looped across again to read from the instances using the instance names. The [ATTACH\_FOR\_READ](javascript:call_link\('abenshm_cl_shm_area.htm'\)) method is called using those instance names and the area handle as parameters. Using the READ method, the values of the attributes of the individual instances that have been created before are retrieved from the shared memory. Calling the [DETACH](javascript:call_link\('abenshm_cl_shm_area.htm'\)) method releases the read lock.

After the executing the class, the area instance versions can be examined in transaction SHMM.