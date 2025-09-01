# ABAP - Keyword Documentation / ABAP - Programming Language / Creating Objects and Values / Shared Objects / Shared Objects - Examples

Included pages: 3


### abenshm_examples_abexas.htm

---
title: "Shared Objects - Examples"
description: |
  !Example(exa.gif 'Example') Shared Objects - Example(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_abexa.htm) !Example(exa.gif 'Example') Shared Objects - Writing to and Reading from an Area(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_examples_abexas.htm"
abapFile: "abenshm_examples_abexas.htm"
keywords: ["do", "if", "abenshm", "examples", "abexas"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Examples, ABENSHM_EXAMPLES_ABEXAS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Examples

Continue
![Example](exa.gif "Example") [Shared Objects - Example](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_abexa.htm)
![Example](exa.gif "Example") [Shared Objects - Writing to and Reading from an Area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects2_abexa.htm)


### abenshared_objects_abexa.htm

---
title: "Shared Objects - Example"
description: |
  This example demonstrates how shared objects are used. Source Code REPORT demo_shared_objects. CLASS demo_flight_list_handler DEFINITION FINAL CREATE PRIVATE. PUBLIC SECTION. CLASS-DATA flight_list_handler TYPE REF TO demo_flight_list_handler. CLASS-METHODS class_constructor. METHODS get
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshared_objects_abexa.htm"
abapFile: "abenshared_objects_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "internal-table", "abenshared", "objects", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenshm_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Shared Objects - Example, ABENSHARED_OBJECTS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Shared Objects - Example

This example demonstrates how shared objects are used.

Source Code   

REPORT demo\_shared\_objects.
CLASS demo\_flight\_list\_handler DEFINITION FINAL CREATE PRIVATE.
  PUBLIC SECTION.
    CLASS-DATA flight\_list\_handler
    TYPE REF TO demo\_flight\_list\_handler.
    CLASS-METHODS class\_constructor.
    METHODS get\_flight\_list
      RETURNING
        VALUE(flights) TYPE REF TO spfli\_tab
      RAISING
       cx\_no\_flights.
  PRIVATE SECTION.
    DATA area\_handle TYPE REF TO cl\_demo\_flights.
    METHODS create\_flight\_list
      RAISING
        cx\_shm\_attach\_error
        cx\_no\_flights.
ENDCLASS.
CLASS demo\_flight\_list\_handler IMPLEMENTATION.
  METHOD class\_constructor.
    CREATE OBJECT flight\_list\_handler.
  ENDMETHOD.
  METHOD get\_flight\_list.
    DATA flight\_list TYPE REF TO cl\_demo\_flight\_list.
    IF area\_handle IS INITIAL.
      TRY.
          area\_handle = cl\_demo\_flights=>attach\_for\_read( ).
        CATCH cx\_shm\_attach\_error.
          TRY.
              me->create\_flight\_list( ).
              area\_handle = cl\_demo\_flights=>attach\_for\_read( ).
            CATCH cx\_shm\_attach\_error.
              CREATE OBJECT flight\_list.
              flight\_list->set\_flight\_list( ).
          ENDTRY.
      ENDTRY.
    ENDIF.
    IF area\_handle IS NOT INITIAL.
      flights = REF #( area\_handle->root->flight\_list ).
    ELSEIF flight\_list IS NOT INITIAL.
      flights = REF #( flight\_list->flight\_list ).
    ELSE.
      RAISE EXCEPTION TYPE cx\_no\_flights.
    ENDIF.
  ENDMETHOD.
  METHOD create\_flight\_list.
    DATA: flight\_list  TYPE REF TO cl\_demo\_flight\_list,
          exc\_ref      TYPE REF TO cx\_no\_flights.
    FINAL(area\_handle) = cl\_demo\_flights=>attach\_for\_write( ).
    CREATE OBJECT flight\_list AREA HANDLE area\_handle.
    area\_handle->set\_root( flight\_list ).
    TRY.
        flight\_list->set\_flight\_list( ).
      CATCH cx\_no\_flights INTO exc\_ref.
        area\_handle->detach\_rollback( ).
        RAISE EXCEPTION exc\_ref.
    ENDTRY.
    area\_handle->detach\_commit( ).
  ENDMETHOD.
ENDCLASS.
CLASS shm\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS shm\_demo IMPLEMENTATION.
  METHOD main.
    DATA: flight\_list\_handler TYPE REF TO demo\_flight\_list\_handler,
          flight\_list TYPE REF TO spfli\_tab.
    flight\_list\_handler =
      demo\_flight\_list\_handler=>flight\_list\_handler.
    TRY.
        flight\_list = flight\_list\_handler->get\_flight\_list( ).
      CATCH cx\_no\_flights.
         cl\_demo\_output=>display\_text( 'No flight list available' ).
        RETURN.
    ENDTRY.
    cl\_demo\_output=>display\_data( flight\_list->\* ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  shm\_demo=>main( ).

Description   

Area Root Class   

The global class CL\_DEMO\_FLIGHT\_LIST is used as an area root class. It contains the internal table FLIGHT\_LIST of type SPFLI\_TAB from the ABAP Dictionary as a public attribute, which is filled by the method SET\_FLIGHT\_LIST. This table represents the non-modifiable data that is accessed from different programs.

Area   

CL\_DEMO\_FLIGHTS is used as an area whose properties are maintained in the transaction SHMA. Apart from two exceptions the default values were applied:

-   Versioning is deactivated because the data of the area instance should not be changed at program runtime.
-   The lifetime after the last access is limited to five minutes to prevent memory space from being occupied in the shared memory without a program requiring it.

Brokers and Loaders   

The class demo\_flight\_list\_handler encapsulates access to the area for the user (in the real world, this would be a global class). The static constructor creates an instance of this class (singleton). The method get\_flight\_list is used as a broker. It attempts to set a read lock on an area instance. Since there can only be one read lock within an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"), a query is first made to establish whether an area handle area already exists. Alternatively, the exception CX\_SHM\_READ\_LOCK\_ACTIVE could have been handled, but this is less effective in this example. If the operation is not successful, the method create\_flight\_list is called, which acts as a loader. This method attempts to set a write lock and to build an area instance with a root object. Any exceptions are propagated to the calling method. A DETACH\_ROLLBACK is executed before any possible CX\_NO\_FLIGHTS exception from SET\_FLIGHT\_LIST is forwarded to the caller. If the change lock is not removed explicitly, the program is terminated at the end of the current internal session at the latest.

If the area was built successfully, get\_flight\_list attempts to set a read lock again. If no area instance could be built, get\_flight\_list creates an object of the class CL\_DEMO\_FLIGHT\_LIST in the current internal session as an emergency measure and fills the internal table flight\_list. Finally, a data reference to the flight list is assigned to the return value of the method either in the root object of the shared object or in the local object.

The write lock in create\_flight\_list is closed explicitly, whereas a read lock in get\_flight\_list is persisted until the end of the internal session. The latter are possible for areas without versioning if no more writes are to be expected after an area has been built.

Users   

The class shm\_demo demonstrates a user. The method main creates an object of the class demo\_flight\_list\_handler and attempts to read a reference to the flight list. If accessed successfully, the flight list is displayed in the method display. It is not important for the user whether the data is actually contained in the shared memory or in a local object of the class CL\_DEMO\_FLIGHT\_LIST in case of an error. If no data could be read from the database, a corresponding message is displayed.

After the program call, the area instance version can be examined in transaction SHMM.


### abenshared_objects2_abexa.htm

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
