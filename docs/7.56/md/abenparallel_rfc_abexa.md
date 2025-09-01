---
title: "RFC - Parallel aRFC"
description: |
  This example demonstrates parallel asynchronous RFC processing. Source Code REPORT demo_parallel_rfc. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS: main, callbback_meth IMPORTING p_task TYPE clike. PRIVATE SECTION. TYPES: BEGIN OF task_type, name TYPE string, dest TYPE string, END OF ta
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenparallel_rfc_abexa.htm"
abapFile: "abenparallel_rfc_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "internal-table", "abenparallel", "rfc", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrfc_abexas.htm) → 

RFC - Parallel aRFC

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
          snd\_jobs += 1.
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
    rcv\_jobs += 1.
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

Parallel asynchronous processing of the function module RFC\_SYSTEM\_INFO using [asynchronous remote function calls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"). Ten calls with different task IDs name are made, which each run in a separate [work process](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenwork_process_glosry.htm "Glossary Entry"). The callback routine callbback\_meth counts the completed function modules and receives information about the target system.

The addition GROUP DEFAULT is used to distribute the execution across all [AS instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry") of the current AS ABAP. If no more free work processes are available after at least one successful call, the execution of the program is stopped until all function modules started up to that point have been completed. This interruption is limited to a maximum of 5 seconds.

After all function modules have been started, the system waits until all callback routines have been executed. After that, the internal table task\_list filled there is produced. The output shows the order in which the individual tasks were completed and on which AS instance they were executed.