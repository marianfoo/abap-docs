  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Creating Objects and Values](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencreate_objects.htm) →  [Shared Objects](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shared_objects.htm) →  [Shared Objects - Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshm_examples_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Shared%20Objects%20-%20Example%2C%20ABENSHARED_OBJECTS_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Shared Objects - Example

This example demonstrates how shared objects are used.

Source Code   

\* Public class definition
CLASS cl\_demo\_shared\_objects DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
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
    DATA: flight\_list TYPE REF TO cl\_demo\_flight\_list,
    exc\_ref TYPE REF TO cx\_no\_flights.
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
\* Public class implementation
CLASS cl\_demo\_shared\_objects IMPLEMENTATION.
  METHOD main.
    DATA: flight\_list\_handler TYPE REF TO demo\_flight\_list\_handler,
          flight\_list         TYPE REF TO spfli\_tab.
    flight\_list\_handler =
      demo\_flight\_list\_handler=>flight\_list\_handler.
    TRY.
        flight\_list = flight\_list\_handler->get\_flight\_list( ).
      CATCH cx\_no\_flights.
        out->write\_text( 'No flight list available' ).
        RETURN.
    ENDTRY.
    out->write\_data( flight\_list->\* ).
  ENDMETHOD.
ENDCLASS.

Description   

Area Root Class   

The global class CL\_DEMO\_FLIGHT\_LIST is used as an area root class. It contains the internal table FLIGHT\_LIST of type SPFLI\_TAB from the ABAP Dictionary as a public attribute, which is filled by the method SET\_FLIGHT\_LIST. This table represents the non-modifiable data that is accessed from different programs.

Area   

CL\_DEMO\_FLIGHTS is used as an area whose properties are maintained in the transaction SHMA. Apart from two exceptions the default values were applied:

-   Versioning is deactivated because the data of the area instance should not be changed at program runtime.
-   The lifetime after the last access is limited to five minutes to prevent memory space from being occupied in the shared memory without a program requiring it.

Brokers and Loaders   

The class demo\_flight\_list\_handler encapsulates access to the area for the user (in the real world, this would be a global class). The static constructor creates an instance of this class (singleton). The method get\_flight\_list is used as a broker. It attempts to set a read lock on an area instance. Since there can only be one read lock within an [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"), a query is first made to establish whether an area handle area already exists. Alternatively, the exception CX\_SHM\_READ\_LOCK\_ACTIVE could have been handled, but this is less effective in this example. If the operation is not successful, the method create\_flight\_list is called, which acts as a loader. This method attempts to set a write lock and to build an area instance with a root object. Any exceptions are propagated to the calling method. A DETACH\_ROLLBACK is executed before any possible CX\_NO\_FLIGHTS exception from SET\_FLIGHT\_LIST is forwarded to the caller. If the change lock is not removed explicitly, the execution is terminated at the end of the current internal session at the latest.

If the area was built successfully, get\_flight\_list attempts to set a read lock again. If no area instance could be built, get\_flight\_list creates an object of the class CL\_DEMO\_FLIGHT\_LIST in the current internal session as an emergency measure and fills the internal table flight\_list. Finally, a data reference to the flight list is assigned to the return value of the method either in the root object of the shared object or in the local object.

The write lock in create\_flight\_list is closed explicitly, whereas a read lock in get\_flight\_list is persisted until the end of the internal session. The latter are possible for areas without versioning if no more writes are to be expected after an area has been built.

Users   

The class shm\_demo demonstrates a user. The method main creates an object of the class demo\_flight\_list\_handler and attempts to read a reference to the flight list. If accessed successfully, the flight list is displayed in the method display. It is not important for the user whether the data is actually contained in the shared memory or in a local object of the class CL\_DEMO\_FLIGHT\_LIST in case of an error. If no data could be read from the database, a corresponding message is displayed.

After executing the class, the area instance version can be examined in transaction SHMM.