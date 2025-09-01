  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Processing Blocks](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_processing_blocks.htm) →  [Calling Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencall_procedures.htm) →  [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm) →  [CALL FUNCTION func](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function_general.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Calling%20Function%20Modules%2C%20ABENCALL_FUNCTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Calling Function Modules

This example demonstrates how function modules are called.

Source Code   

\* Public class definition
CLASS cl\_demo\_call\_function DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_call\_function IMPLEMENTATION.
  METHOD main.
    DATA: itab TYPE spfli\_tab,
          jtab TYPE spfli\_tab.
    DATA carrier TYPE s\_carr\_id VALUE 'LH'.
    cl\_demo\_input=>new( )->request( CHANGING field = carrier ).
    CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE'
      EXPORTING
        id        = carrier
      IMPORTING
        itab      = itab
      EXCEPTIONS
        not\_found = 4.
    IF sy-subrc <> 0.
      MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
              INTO FINAL(msg).
      out->write( msg ).
    ENDIF.
    TRY.
        CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE\_NEW'
          EXPORTING
            id   = carrier
          IMPORTING
            itab = jtab.
      CATCH cx\_no\_flight\_found INTO FINAL(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    ASSERT itab = jtab.
    out->write( itab ).
  ENDMETHOD.
ENDCLASS.

Description   

The function modules READ\_SPFLI\_INTO\_TABLE and READ\_SPFLI\_INTO\_TABLE\_NEW read all data from the database table SPFLI where the key field CARRID matches the import parameter id into the internal tables itab or jtab. If no suitable data can be found, exceptions are raised.

-   In READ\_SPFLI\_INTO\_TABLE, the non-class-based exception NOT\_FOUND is raised by [MESSAGE ... RAISING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmessage_raising.htm).
-   In READ\_SPFLI\_INTO\_TABLE\_NEW, the class-based exception is raised CX\_NO\_FLIGHT\_FOUND by [RAISE EXCEPTION ... MESSAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception.htm). CX\_NO\_FLIGHT\_FOUND implements the interface IF\_T100\_DYN\_MSG.

Otherwise, the table is passed to the caller as an export parameter.

The actual parameters carrier and itab or itab have the same data types as the corresponding interface parameters of the function module. The exceptions are handled. The relevant exception text is accessed in different ways.

-   In non-class-based exceptions, it is implicitly available via system fields.
-   In class-based exceptions, it is specified by attributes of the exception object.