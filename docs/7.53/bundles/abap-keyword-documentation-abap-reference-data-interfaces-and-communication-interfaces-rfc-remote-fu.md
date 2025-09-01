# ABAP Keyword Documentation / ABAP − Reference / Data Interfaces and Communication Interfaces / RFC - Remote Function Call / Examples for Remote Function Call

Included pages: 6


### abenrfc_abexas.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) → 

Examples for Remote Function Call

Continue
![Example](exa.gif "Example") [Parameter Passing in sRFC and aRFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_parameters_abexa.htm)
![Example](exa.gif "Example") [Exception Handling in RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_exceptions_abexa.htm)
![Example](exa.gif "Example") [Parallel Asynchronous RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenparallel_rfc_abexa.htm)
![Example](exa.gif "Example") [Dynamic RFC Destination](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_dynamic_dest_abexa.htm)
![Example](exa.gif "Example") [Implicit Logon Data in RFC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_logon_data_abexa.htm)


### abenrfc_parameters_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [Examples for Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_abexas.htm) → 

Parameter Passing in sRFC and aRFC

This example demonstrates parameter passing in two RFC variants.

Source Code

REPORT demo\_rfc\_parameters.
CLASS demo\_rfc DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main,
      callback IMPORTING p\_task TYPE clike.
  PRIVATE SECTION.
    CLASS-DATA:
      val\_in     TYPE string,
      val\_out    TYPE string,
      val\_in\_out TYPE string,
      msg        TYPE c LENGTH 80,
      out        TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo\_rfc IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    "Synchronous RFC
    val\_in     = \`val\_in\`.
    val\_out    = \`\`.
    val\_in\_out = \`val\_in\_out\`.
    CALL FUNCTION 'DEMO\_RFM\_PARAMETERS'
      DESTINATION 'NONE'
      EXPORTING
        p\_in                  = val\_in
      IMPORTING
        p\_out                 = val\_out
      CHANGING
        p\_in\_out              = val\_in\_out
      EXCEPTIONS
        system\_failure        = 2 MESSAGE msg
        communication\_failure = 4 MESSAGE msg.
    IF sy-subrc <> 0.
      out->display( |Error when calling sRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    out->next\_section( 'sRFC'
      )->write( |{ val\_out }\\n{ val\_in\_out }| ).
    "Asynchronous RFC
    val\_in     = \`val\_in\`.
    val\_out    = \`\`.
    val\_in\_out = \`val\_in\_out\`.
    CALL FUNCTION 'DEMO\_RFM\_PARAMETERS'
      DESTINATION 'NONE'
      STARTING NEW TASK 'DEMO'
      CALLING demo\_rfc=>callback ON END OF TASK
      EXPORTING
        p\_in                  = val\_in
      CHANGING
        p\_in\_out              = val\_in\_out
      EXCEPTIONS
        system\_failure        = 2 MESSAGE msg
        communication\_failure = 4 MESSAGE msg.
    IF sy-subrc <> 0.
      out->display( |Error when calling aRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    WAIT FOR ASYNCHRONOUS TASKS UNTIL val\_out IS NOT INITIAL
                                UP TO 10 SECONDS.
    out->next\_section( 'aRFC'
      )->write( |{ val\_out }\\n{ val\_in\_out }| ).
    out->display( ).
  ENDMETHOD.
  METHOD callback.
    val\_out    = \`\`.
    val\_in\_out = \`\`.
    RECEIVE RESULTS FROM FUNCTION 'DEMO\_RFM\_PARAMETERS'
      IMPORTING
        p\_out                 = val\_out
      CHANGING
        p\_in\_out              = val\_in\_out
      EXCEPTIONS
        system\_failure        = 2 MESSAGE msg
        communication\_failure = 4 MESSAGE msg.
    IF sy-subrc <> 0.
      out->display( '|Error when receiving aRFC.\\n{ msg }|' ).
      RETURN.
    ENDIF.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo\_rfc=>main( ).

Description

The function module DEMO\_RFM\_PARAMETERS is called using [synchronous](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_destination.htm) and [asynchronous](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function_starting.htm) RFC.

-   In synchronous calls, parameters are passed and applied directly in the statement CALL FUNCTION.

-   In asynchronous calls, parameters can only be passed in the statement CALL FUNCTION. Parameters are applied using the statement [RECEIVE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapreceive.htm) in a callback routine. The statement [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwait_until.htm) is used to wait for this routine.


### abenrfc_exceptions_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [Examples for Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_abexas.htm) → 

Exception Handling in RFC

This example demonstrates exception handling in RFC.

Source Code

REPORT demo\_rfc\_exceptions.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA msg TYPE c LENGTH 255.
    DATA(out) = cl\_demo\_output=>new( ).
    "Classical exception handling
    CALL FUNCTION 'DEMO\_RFM\_CLASSIC\_EXCEPTION'
      DESTINATION 'NONE'
      EXCEPTIONS
        system\_failure        = 1  MESSAGE msg
        communication\_failure = 2  MESSAGE msg
        OTHERS                = 3.
    CASE sy-subrc.
      WHEN 1.
        out->write( |EXCEPTION SYSTEM\_FAILURE | && msg ).
      WHEN 2.
        out->write( |EXCEPTION COMMUNICATION\_FAILURE | && msg ).
      WHEN 3.
        out->write( |EXCEPTION OTHERS| ).
    ENDCASE.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The DEMO\_RFM\_CLASSIC\_EXCEPTION function module triggers the non-class-based exception CLASSIC\_EXCEPTION.

When DEMO\_RFM\_CLASSIC\_EXCEPTION is called, EXCEPTIONS is specified and values for sy-subrc are assigned to the possible classic exceptions. If none of the predefined RFC interface exceptions are raised, sy-subrc is set to 3.


### abenparallel_rfc_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [Examples for Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_abexas.htm) → 

Parallel Asynchronous RFC

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

Parallel asynchronous processing of the function module RFC\_SYSTEM\_INFO using [asynchronous remote function calls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"). Ten calls with different task IDs name are made, which each run in a separate [work process](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwork_process_glosry.htm "Glossary Entry"). The callback routine callbback\_meth counts the completed function modules and receives information about the target system.

The addition GROUP DEFAULT is used to distribute the execution across all [AS Instances](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenapplication_server_glosry.htm "Glossary Entry")s of the current AS ABAP. If no more free work processes are available after at least one successful call, the execution of the program is stopped until all function modules started up to that point have been completed. This stoppage is limited to a maximum of 5 seconds.

After all function modules have been started, the system waits until all callback routines have been executed. After that, the internal table task\_list filled there is produced. The output shows the order in which the individual tasks were completed and on which AS Instance.


### abenrfc_dynamic_dest_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [Examples for Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_abexas.htm) → 

Dynamic RFC Destination

This example demonstrates how [dynamic destinations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_destination.htm) are created.

Source Code

REPORT demo\_rfc\_dynamic\_dest.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      val\_in     TYPE string VALUE \`val\_in\`,
      val\_in\_out TYPE string VALUE \`val\_in\_out\`,
      val\_out    TYPE string,
      msg        TYPE c LENGTH 80.
    IF sy-uname IS INITIAL.
      cl\_demo\_output=>display(
        |Example not possible for anonymous user| ).
      RETURN.
    ENDIF.
    DATA(in) = cl\_demo\_input=>new( ).
    DATA(client) = sy-mandt.
    in->add\_field( CHANGING field = client ).
    DATA(uname) = sy-uname.
    in->add\_field( CHANGING field = uname ).
    DATA(langu) = sy-langu.
    in->add\_field( CHANGING field = langu ).
    DATA(sysid) = sy-sysid.
    in->add\_field( CHANGING field = sysid ).
    DATA(host) = CONV rfchost( sy-host ).
    in->add\_field( CHANGING field = host ).
    DATA(group) = CONV rfcload( 'PUBLIC' ).
    in->add\_field( CHANGING field = group ).
    in->request( ).
    DATA(dest) = cl\_dynamic\_destination=>create\_rfc\_destination(
                   logon\_client   = client
                   logon\_user     = uname
                   logon\_language = langu
                   sid            = sysid
                   server         = host
                   group          = group ).
    CALL FUNCTION 'DEMO\_RFM\_PARAMETERS'
      DESTINATION dest
      EXPORTING
        p\_in                  = val\_in
      IMPORTING
        p\_out                 = val\_out
      CHANGING
        p\_in\_out              = val\_in\_out
      EXCEPTIONS
        system\_failure        = 2 MESSAGE msg
        communication\_failure = 4 MESSAGE msg.
    IF sy-subrc <> 0.
      cl\_demo\_output=>display( |Error when calling sRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    cl\_demo\_output=>display( |{ val\_out }\\n{ val\_in\_out }| ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

The method CREATE\_RFC\_DESTINATION of class CL\_DYNAMIC\_DESTINATION is used to create a [dynamic destination](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_destination.htm). Input values, whose default values are determined from system fields for the current AS ABAP, are passed as parameters. A remote-enabled function module is called using the dynamic destination. The call is only successful if the destination is created correctly.


### abenrfc_logon_data_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_data_communication.htm) →  [RFC - Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc.htm) →  [Examples for Remote Function Call](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_abexas.htm) → 

Implicit Logon Data in RFC

This example demonstrates how the logon data of an RFC session is set implicitly.

Source Code

REPORT demo\_rfc\_implicit\_logon\_data.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA:
      BEGIN OF logon\_data,
        uname       TYPE sy-uname,
        mandt       TYPE sy-mandt,
        logon\_langu TYPE sy-langu,
        langu       TYPE sy-langu,
      END OF logon\_data.
    IF cl\_abap\_syst=>get\_logon\_language( ) <> 'E'.
      SET LOCALE LANGUAGE 'E'.
    ELSE.
      SET LOCALE LANGUAGE 'D'.
    ENDIF.
    logon\_data = VALUE #(
        uname       = sy-uname
        mandt       = sy-mandt
        logon\_langu = cl\_abap\_syst=>get\_logon\_language( )
        langu       = cl\_abap\_syst=>get\_language( ) ).
    ASSERT logon\_data-langu = sy-langu.
    DATA(out) = cl\_demo\_output=>new(
      )->next\_section( 'Parameters of Caller'
      )->write( logon\_data ).
    CALL FUNCTION 'DEMO\_RFM\_LOGON\_DATA' DESTINATION 'NONE'
      IMPORTING
        uname       = logon\_data-uname
        mandt       = logon\_data-mandt
        logon\_langu = logon\_data-logon\_langu
        langu       = logon\_data-langu.
    out->next\_section( 'Parameters of Callee'
      )->write( logon\_data )->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

A remote-enabled function module DEMO\_RFM\_LOGON\_DATA is called with the destination "NONE" using the RFC interface. The logon data user name, client, and logon language of the corresponding [RFC session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_context.htm) are provided implicitly. To demonstrate that the [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the RFC session is set by the language of the [text environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment_glosry.htm "Glossary Entry") of the caller, this is set before the call with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_locale.htm) to a language different from the logon language of the caller. In the called RFM the language of the text environment of the RFC session is also changed and is then different to the logon language there as well.

If the function module DEMO\_RFM\_LOGON\_DATA is called remotely again, the RFC session is reused with the existing logon data. Changing the language of the text environment again in the caller would have no effect.
