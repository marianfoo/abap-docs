  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [RFC - Remote Function Call](javascript:call_link\('abenrfc.htm'\)) →  [Examples for Remote Function Call](javascript:call_link\('abenrfc_abexas.htm'\)) → 

Parallel asynchronous RFC

This example demonstrates parallel asynchronous RFC processing.

Source Code

REPORT demo\_parallel\_rfc.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS: main,
                   callbback\_meth IMPORTING p\_task TYPE clike.
  PRIVATE SECTION.
    TYPES: BEGIN OF task\_type,
           name TYPE string,
           dest TYPE string,
         END OF task\_type.
    CLASS-DATA: task\_list TYPE STANDARD TABLE OF task\_type,
                task\_wa   TYPE task\_type,
                rcv\_jobs  TYPE i,
                mess      TYPE c LENGTH 80.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: snd\_jobs  TYPE i,
          exc\_flag  TYPE i,
          indx      TYPE c LENGTH 4,
          name      TYPE c LENGTH 8.
    DATA(out) = cl\_demo\_output=>new( ).
    DO 10 TIMES.
      indx = sy-index.
      name = 'Task' && indx.
      CALL FUNCTION 'RFC\_SYSTEM\_INFO'
        STARTING NEW TASK name
        DESTINATION IN GROUP DEFAULT
        CALLING callbback\_meth ON END OF TASK
        EXCEPTIONS
          system\_failure        = 1 MESSAGE mess
          communication\_failure = 2 MESSAGE mess
          resource\_failure      = 3.
      CASE sy-subrc.
        WHEN 0.
          snd\_jobs = snd\_jobs + 1.
        WHEN 1 OR 2.
          out->write\_text( mess ).
        WHEN 3.
          IF snd\_jobs >= 1 AND
             exc\_flag = 0.
             exc\_flag = 1.
            WAIT UNTIL rcv\_jobs >= snd\_jobs
                 UP TO 5 SECONDS.
          ENDIF.
          IF sy-subrc = 0.
            exc\_flag = 0.
          ELSE.
            out->display( 'Resource failure' ).
          ENDIF.
        WHEN OTHERS.
          out->display( 'Other error' ).
      ENDCASE.
    ENDDO.
    WAIT UNTIL rcv\_jobs >= snd\_jobs.
    out->display( task\_list ).  ENDMETHOD.
  METHOD callbback\_meth.
    DATA info TYPE rfcsi.
    task\_wa-name = p\_task.
    rcv\_jobs = rcv\_jobs + 1.
    RECEIVE RESULTS FROM FUNCTION 'RFC\_SYSTEM\_INFO'
      IMPORTING
        rfcsi\_export = info
      EXCEPTIONS
        system\_failure        = 1 MESSAGE mess
        communication\_failure = 2 MESSAGE mess.
    IF sy-subrc = 0.
      task\_wa-dest = info-rfcdest.
    ELSE.
      task\_wa-dest = mess.
    ENDIF.
    APPEND task\_wa TO task\_list.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

Parallel asynchronous processing of the function module RFC\_SYSTEM\_INFO using [asynchronous remote function calls](javascript:call_link\('abenasynchronous_rfc_glosry.htm'\) "Glossary Entry"). Ten calls with different task IDsname are made, which each run in a separate [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry"). The callback routine callbback\_meth counts the completed function modules and receives information about the target system.

The addition GROUP DEFAULT is used to distribute the execution among all [application servers](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") for the current system. If no further work process is available after at least one successful call, the system interrupts execution of the program until all function modules that have already been started have been completed. This interruption is limited to a maximum of five seconds.

After starting all function modules, the system waits until all callback routines have been executed. Then it outputs the internal table task\_list it has filled. The output shows the sequence in which the individual tasks were completed and the application server each one was executed on.