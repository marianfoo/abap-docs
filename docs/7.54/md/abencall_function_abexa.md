  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and leaving program units](javascript:call_link\('abenabap_execution.htm'\)) →  [Calling Processing Blocks](javascript:call_link\('abencall_processing_blocks.htm'\)) →  [Calling Procedures](javascript:call_link\('abencall_procedures.htm'\)) →  [CALL FUNCTION](javascript:call_link\('abapcall_function.htm'\)) →  [CALL FUNCTION func](javascript:call_link\('abapcall_function_general.htm'\)) → 

Calling Function Modules

This example demonstrates how function modules are called.

Source Code

REPORT demo\_call\_function.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: itab TYPE spfli\_tab,
          jtab TYPE spfli\_tab.
    DATA carrier TYPE s\_carr\_id VALUE 'LH'.
    cl\_demo\_input=>request( CHANGING field = carrier ).
    DATA(out) = cl\_demo\_output=>new( ).
    CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE'
      EXPORTING
        id        = carrier
      IMPORTING
        itab      = itab
      EXCEPTIONS
        not\_found = 4.
    IF sy-subrc <> 0.
      MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
              INTO DATA(msg).
      out->write( msg ).
    ENDIF.
    TRY.
        CALL FUNCTION 'READ\_SPFLI\_INTO\_TABLE\_NEW'
          EXPORTING
            id   = carrier
          IMPORTING
            itab = jtab.
      CATCH cx\_no\_flight\_found INTO DATA(exc).
        out->write( exc->get\_text( ) ).
    ENDTRY.
    ASSERT itab = jtab.
    out->display( itab ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The function modules READ\_SPFLI\_INTO\_TABLE and READ\_SPFLI\_INTO\_TABLE\_NEW read all data from the database table SPFLI where the key field CARRID matches the import parameter id and passes this data to the internal tables itab or jtab. If no suitable data can be found, exceptions are raised.

-   In READ\_SPFLI\_INTO\_TABLE, the non-class-based exception NOT\_FOUND is triggered by [MESSAGE ... RAISING](javascript:call_link\('abapmessage_raising.htm'\)).

-   In READ\_SPFLI\_INTO\_TABLE\_NEW, the class-based exception is triggered CX\_NO\_FLIGHT\_FOUND by[RAISE EXCEPTION ... MESSAGE](javascript:call_link\('abapraise_exception.htm'\)). CX\_NO\_FLIGHT\_FOUND implements the interface IF\_T100\_DYN\_MSG.

Otherwise, the table is passed to the caller as an export parameter.

The actual parameters carrier and itab or itab have the same data types as the corresponding interface parameters of the function module. The exceptions are handled. The relevant exception text is accessed in different ways.

-   With the non-class-based exception, the text is implicitly available via system fields.

-   With the class-based exception, the text is specified by attributes of the exception object.