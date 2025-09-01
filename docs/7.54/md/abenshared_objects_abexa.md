  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Creating Objects and Values](javascript:call_link\('abencreate_objects.htm'\)) →  [Shared Objects](javascript:call_link\('abenabap_shared_objects.htm'\)) → 

Shared Objects

This example demonstrates the use of shared objects.

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
    DATA(area\_handle) = cl\_demo\_flights=>attach\_for\_write( ).
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

The global class CL\_DEMO\_FLIGHT\_LIST is used as an area root class. It contains the internal table FLIGHT\_LIST (of type SPFLI\_TAB from ABAP Dictionary) as a public attribute, which is filled by the method SET\_FLIGHT\_LIST. This table represents the unchangeable data that is accessed from different programs.

Area

CL\_DEMO\_FLIGHTS is used as an area, whose properties are edited in transaction SHMA. The default values were applied apart from two exceptions:

-   Versioning is deactivated because the data in the area instance should not be changed during the program runtime.

-   The lifetime after the last access is restricted to five minutes. This prevents memory space from being occupied in the shared memory without a program requiring the memory.

Brokers and Loaders

The class demo\_flight\_list\_handler encapsulates the access to the area before the client (in the real world, this would be a global class). The static constructor creates one instance of this class (singleton). The method get\_flight\_list is used as a broker. It attempts to set a shared lock for an area instance. Within an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), only one shared lock is possible for an area instance. Therefore the system first queries whether an area handle area already exists. The alternative would have been to handle the exception CX\_SHM\_READ\_LOCK\_ACTIVE. However, this would have been less effective in this example. If the operation is not successful, the method create\_flight\_list is called, which acts as a loader. This attempts to set a exclusive lock and to build an area instance with a root object. Any exceptions that occur are propagated to the calling method. A DETACH\_ ROLLBACK is executed before any possible CX\_NO\_FLIGHTS exceptions from SET\_FLIGHT\_LIST are forwarded to the calling program. If the change lock is not removed explicitly, the program is terminated at the end of the current internal session or possibly even beforehand.

If the area was built, get\_flight\_list attempts to set a shared lock again. If the area instance could not be built, get\_flight\_list creates an object of class ZCL\_FLIGHT\_LIST (as an emergency measure) in the current internal session and fills the internal table flight\_list. Finally, a data reference to the flight list is assigned to the return value of the method (either in the root object of the shared object or in the local object).

The exclusive lock in create\_flight\_list is closed explicitly, whereas a shared lock in get\_flight\_list is persisted until the end of the internal session. The latter point (shared lock) is only possible for areas without versioning, if no more data-changing accesses are expected once an area has been built.

Clients

The class shm\_demo demonstrates a client. The method main creates an object of the class demo\_flight\_list\_handler and attempts to read a reference to the flight list. If the access is successful, the flight list is displayed in the display method. It is not important for the client whether the data is actually contained in the shared memory or (if an error occurs) in a local object of class CL\_DEMO\_FLIGHT\_LIST. If no data can be read from the database, a message is displayed.

After the program call, the area instance version can be examined using transaction SHMM.