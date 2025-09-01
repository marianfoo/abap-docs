# ABAP - Keyword Documentation / ABAP - Programming Language / Data Interfaces and Communication Interfaces / Remote Function Call (RFC) / RFC - Examples

Included pages: 7


### abenrfc_abexas.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Examples, ABENRFC_ABEXAS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on for improvement:)

RFC - Examples

Continue
![Example](exa.gif "Example") [RFC - Parameter Passing in sRFC and aRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_parameters_abexa.htm)
![Example](exa.gif "Example") [RFC - Exception Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_exceptions_abexa.htm)
![Example](exa.gif "Example") [RFC - Dynamic Parameter Passing in sRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_parameter_tables_abexa.htm)
![Example](exa.gif "Example") [RFC - Parallel aRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenparallel_rfc_abexa.htm)
![Example](exa.gif "Example") [RFC - Dynamic Destination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_dynamic_dest_abexa.htm)
![Example](exa.gif "Example") [RFC - Implicit Logon Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_logon_data_abexa.htm)


### abenrfc_parameters_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Parameter Passing in sRFC and aRFC, ABENRFC_PARAMETERS_ABEXA, 757%0D%0A%0D%0AEr
ror:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RFC - Parameter Passing in sRFC and aRFC

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

The function module DEMO\_RFM\_PARAMETERS is called using [synchronous](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_destination.htm) and [asynchronous](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcall_function_starting.htm) RFC.

-   In synchronous calls, parameters are passed and applied directly in the statement CALL FUNCTION.
-   In asynchronous calls, parameters can only be passed in the statement CALL FUNCTION. Parameters are applied using the statement [RECEIVE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapreceive.htm) in a callback routine. The statement [WAIT FOR ASYNCHRONOUS TASKS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwait_arfc.htm) is used to wait for this routine.


### abenrfc_exceptions_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Exception Handling, ABENRFC_EXCEPTIONS_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

RFC - Exception Handling

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
    FINAL(out) = cl\_demo\_output=>new( ).
    "Classical exception handling
    CALL FUNCTION 'DEMO\_RFM\_CLASSIC\_EXCEPTION'
      DESTINATION 'NONE'
      EXCEPTIONS
        system\_failure        = 1  MESSAGE msg
        communication\_failure = 2  MESSAGE msg
        OTHERS                = 3.
    CASE sy-subrc.
      WHEN 1.
        out->write( \`EXCEPTION SYSTEM\_FAILURE \` && msg ).
      WHEN 2.
        out->write( \`EXCEPTION COMMUNICATION\_FAILURE \` && msg ).
      WHEN 3.
        out->write( \`EXCEPTION OTHERS\` ).
    ENDCASE.
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The DEMO\_RFM\_CLASSIC\_EXCEPTION function module raises the non-class-based exception CLASSIC\_EXCEPTION.

When DEMO\_RFM\_CLASSIC\_EXCEPTION is called, EXCEPTIONS is specified and values for sy-subrc are assigned to the possible classic exceptions. If none of the predefined RFC interface exceptions are raised, sy-subrc is set to 3.


### abenrfc_parameter_tables_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Dynamic Parameter Passing in sRFC, ABENRFC_PARAMETER_TABLES_ABEXA, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

RFC - Dynamic Parameter Passing in sRFC

This example demonstrates parameter passing with parameter and exception tables for sRFC.

Source Code   

REPORT demo\_srfc\_parameter\_tables.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS:
      main.
  PRIVATE SECTION.
    CLASS-DATA:
      val\_in     TYPE string,
      val\_out    TYPE string,
      val\_in\_out TYPE string,
      msg        TYPE string,
      out        TYPE REF TO if\_demo\_output.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    val\_in     = \`val\_in\`.
    val\_out    = \`\`.
    val\_in\_out = \`val\_in\_out\`.
    DATA(rfm)  = \`DEMO\_RFM\_PARAMETERS\`.
    cl\_demo\_input=>request( CHANGING field = rfm ).
    FINAL(dest) = 'NONE'.
    TRY.
        rfm = cl\_abap\_dyn\_prg=>check\_whitelist\_str(
            EXPORTING
              val       =  rfm
              whitelist = \`DEMO\_RFM\_PARAMETERS, DEMO\_RFM\_PARAMETERX\` ).
      CATCH cx\_abap\_not\_in\_whitelist.
        out->display(
          \`Call either DEMO\_RFM\_PARAMETERS OR DEMO\_RFM\_PARAMETERX\` ).
        RETURN.
    ENDTRY.
    DATA: ptab TYPE abap\_func\_parmbind\_tab,
          etab TYPE abap\_func\_excpbind\_tab.
    ptab = VALUE #( ( name  = 'P\_IN'
                      kind  = abap\_func\_exporting
                      value = REF #( val\_in ) )
                    ( name  = 'P\_OUT'
                      kind  = abap\_func\_importing
                      value = REF #( val\_out ) )
                    ( name  = 'P\_IN\_OUT'
                      kind  = abap\_func\_changing
                      value = REF #( val\_in\_out ) ) ).
    etab = VALUE #( ( name = 'SYSTEM\_FAILURE'
                      value = 2
                      message = REF #( msg ) )
                    ( name = 'COMMUNICATION\_FAILURE'
                      value = 4
                      message = REF #( msg ) ) ).
    CALL FUNCTION rfm
      DESTINATION dest
      PARAMETER-TABLE ptab
      EXCEPTION-TABLE etab.
    IF sy-subrc <> 0.
      out->display( |Error when calling sRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    out->write( |{ val\_out }\\n{ val\_in\_out }| ).
    out->display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The function module DEMO\_RFM\_PARAMETERS is called using [sRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensrfc_glosry.htm "Glossary Entry"). Parameters are passed and exceptions are handled dynamically using internal tables ptab and etab.


### abenparallel_rfc_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Parallel aRFC, ABENPARALLEL_RFC_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%
0D%0ASuggestion for improvement:)

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
    FINAL(out) = cl\_demo\_output=>new( ).
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
    WAIT FOR ASYNCHRONOUS TASKS UNTIL rcv\_jobs >= snd\_jobs.
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

Parallel asynchronous processing of the function module RFC\_SYSTEM\_INFO using [asynchronous remote function calls](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasynchronous_rfc_glosry.htm "Glossary Entry"). Ten calls with different task IDs name are made, which each run in a separate [work process](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwork_process_glosry.htm "Glossary Entry"). The callback routine callbback\_meth counts the completed function modules and receives information about the target system.

The addition GROUP DEFAULT is used to distribute the execution across all [AS instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry") of the current AS ABAP. If no more free work processes are available after at least one successful call, the execution of the program is stopped until all function modules started up to that point have been completed. This interruption is limited to a maximum of 5 seconds.

After all function modules have been started, the system waits until all callback routines have been executed. After that, the internal table task\_list filled there is produced. The output shows the order in which the individual tasks were completed and on which AS instance they were executed.


### abenrfc_dynamic_dest_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Dynamic Destination, ABENRFC_DYNAMIC_DEST_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

RFC - Dynamic Destination

This example demonstrates how [dynamic destinations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_destination.htm) are created.

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
        \`Example not possible for anonymous user\` ).
      RETURN.
    ENDIF.
    FINAL(in) = cl\_demo\_input=>new( ).
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
    FINAL(dest) = cl\_dynamic\_destination=>create\_rfc\_destination(
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

The method CREATE\_RFC\_DESTINATION of class CL\_DYNAMIC\_DESTINATION is used to create a [dynamic destination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_destination.htm). Input values, whose default values are determined from system fields for the current AS ABAP, are passed as parameters. A remote-enabled function module is called using the dynamic destination. The call is only successful if the destination is created correctly.


### abenrfc_logon_data_abexa.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: RFC - Implicit Logon Data, ABENRFC_LOGON_DATA_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0
A%0D%0A%0D%0ASuggestion for improvement:)

RFC - Implicit Logon Data

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
    FINAL(out) = cl\_demo\_output=>new(
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

A remote-enabled function module DEMO\_RFM\_LOGON\_DATA is called with the destination NONE using the RFC interface. The logon data user name, client, and logon language of the corresponding [RFC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_context.htm) are provided implicitly. To demonstrate that the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the RFC session is set by the language of the [text environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_glosry.htm "Glossary Entry") of the caller, it is set to a language other than the logon language of the caller before the call with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm). In the called RFM the language of the text environment of the RFC session is also changed and is then also different to the logon language.

If the function module DEMO\_RFM\_LOGON\_DATA is called remotely again, the RFC session is reused with the existing logon data. Changing the language of the text environment again in the caller would no longer have any effect.
