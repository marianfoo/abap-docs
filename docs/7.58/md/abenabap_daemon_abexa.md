  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [ABAP Daemon Framework (ADF)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon.htm) →  [ADF - Examples for ABAP Daemons](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ADF%20-%20Creating%20and%20Using%20an%20ABAP%20Daemon%2C%20ABENABAP_DAEMON_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improve
ment:)

ADF - Creating and Using an ABAP Daemon

This example demonstrates an [ABAP Daemon](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_glosry.htm "Glossary Entry").

Source Code   

\* Public class definition
CLASS cl\_demo\_abap\_daemon\_demo DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA:
      start\_daemon       TYPE abap\_bool,
      get\_information    TYPE abap\_bool,
      send\_message       TYPE abap\_bool,
      trigger\_amc        TYPE abap\_bool,
      trigger\_exception  TYPE abap\_bool,
      trigger\_blocking   TYPE abap\_bool,
      trigger\_restart    TYPE abap\_bool,
      trigger\_relocation TYPE abap\_bool,
      trigger\_stop       TYPE abap\_bool,
      stop\_daemon        TYPE abap\_bool.
    METHODS:
      get\_input,
      write\_log IMPORTING msg TYPE string.
ENDCLASS.
\* CCIMP
CLASS amc\_receiver DEFINITION.
  PUBLIC SECTION.
    INTERFACES
      if\_amc\_message\_receiver\_text.
    DATA msg TYPE string.
ENDCLASS.
CLASS amc\_receiver IMPLEMENTATION.
  METHOD if\_amc\_message\_receiver\_text~receive.
    msg = i\_message.
  ENDMETHOD.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_abap\_daemon\_demo IMPLEMENTATION.
  METHOD main.
    DELETE FROM DATABASE demo\_indx\_blob(dm)
                 ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
    COMMIT CONNECTION default.
    get\_input( ).
    out->next\_section( 'ABAP Program' ).
    TRY.
        IF NOT cl\_demo\_abap\_daemon\_broker=>check\_daemon( ).
          IF start\_daemon = abap\_true.
            DATA(pcp) = cl\_ac\_message\_type\_pcp=>create( ).
            pcp->set\_field( i\_name = \`Version\`
                            i\_value = \`1\` ).
            IF cl\_demo\_abap\_daemon\_broker=>start\_daemon(
                 pcp = pcp ).
              write\_log( \`Daemon start requested\` ).
            ELSE.
              write\_log( \`Daemon not accepted\` ).
            ENDIF.
          ELSE.
            write\_log( \`Daemon not started\` ).
          ENDIF.
        ELSE.
          cl\_demo\_abap\_daemon\_broker=>attach\_daemon( ).
          CASE abap\_true.
            WHEN start\_daemon.
              write\_log( \`Daemon already started\` ).
            WHEN get\_information.
              write\_log( \`Information requested\` ).
              out->write(
                cl\_demo\_abap\_daemon\_broker=>get\_daemon\_info( ) ).
            WHEN send\_message.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`msg\` ).
              pcp->set\_text( \`Hello Daemon!\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Text message sent\` ).
            WHEN trigger\_amc.
              FINAL(receiver) = NEW amc\_receiver( ).
              TRY.
                  cl\_amc\_channel\_manager=>create\_message\_consumer(
                    i\_application\_id = 'DEMO\_AMC'
                    i\_channel\_id     = '/demo\_text'
                    )->start\_message\_delivery( i\_receiver = receiver ).
                CATCH cx\_amc\_error INTO FINAL(amc\_exc).
                  write\_log( \`Exception, \` && amc\_exc->get\_text( ) ).
              ENDTRY.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`amc\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`AMC message triggered\` ).
              WAIT FOR MESSAGING CHANNELS
                   UNTIL receiver->msg IS NOT INITIAL
                   UP TO 10 SECONDS.
              IF receiver->msg IS NOT INITIAL.
                write\_log( |AMC message "{ receiver->msg }" received| ).
              ELSE.
                write\_log( \`No AMC message received\` ).
              ENDIF.
            WHEN trigger\_exception.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`err\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Exception triggered\` ).
            WHEN trigger\_blocking.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`blk\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Blocking statement triggered\` ).
            WHEN trigger\_restart.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`rst\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Restart triggered\` ).
            WHEN trigger\_relocation.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`rlo\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Relocation triggered\` ).
            WHEN trigger\_stop.
              pcp = cl\_ac\_message\_type\_pcp=>create( ).
              pcp->set\_field( i\_name = \`Type\`
                              i\_value = \`stp\` ).
              cl\_demo\_abap\_daemon\_broker=>send\_message( pcp = pcp ).
              write\_log( \`Stop triggered\` ).
            WHEN stop\_daemon.
              cl\_demo\_abap\_daemon\_broker=>stop\_daemon( ).
              write\_log( \`Daemon stop requested\` ).
          ENDCASE.
        ENDIF.
      CATCH cx\_abap\_daemon\_error
            cx\_ac\_message\_type\_pcp\_error INTO FINAL(exc).
        write\_log( \`Exception, \` && exc->get\_text( ) ).
    ENDTRY.
    WAIT UP TO 1 SECONDS.
    out->next\_section( 'ABAP Daemon' ).
    DATA(daemon\_log) = \`\`.
    IMPORT daemon\_log = daemon\_log
           FROM DATABASE demo\_indx\_blob(dm)
           ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
    IF sy-subrc = 0.
      out->write( daemon\_log ).
    ENDIF.
  ENDMETHOD.
  METHOD get\_input.
    cl\_demo\_input=>new(
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = start\_daemon
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = get\_information
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = send\_message
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_amc
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_exception
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_blocking
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_restart
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_relocation
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = trigger\_stop
     )->add\_field( EXPORTING as\_checkbox = abap\_true
                   CHANGING  field = stop\_daemon
     )->request( ).
    IF start\_daemon       &&
       get\_information    &&
       send\_message       &&
       trigger\_amc        &&
       trigger\_exception  &&
       trigger\_blocking   &&
       trigger\_restart    &&
       trigger\_relocation &&
       trigger\_stop       &&
       stop\_daemon <> abap\_true.
      out->write( \`Check exactly one box\` ).
      LEAVE PROGRAM.
    ENDIF.
  ENDMETHOD.
  METHOD write\_log.
    FINAL(ts) = utclong\_current( ).
    out->write( |{ ts TIMESTAMP = ISO }: { msg }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The class demonstrates the most important aspects of an ABAP daemon and consists of the class above and two further classes.

Class CL\_DEMO\_ABAP\_DAEMON\_DEMO

This class makes it possible to start an ABAP daemon interactively and then perform various actions using the daemon. The checkboxes have the following meaning:

-   START\_DAEMON
    
    Attempt to start an ABAP daemon. Only one ABAP daemon of the used ABAP daemon class may exist. When the class is executed, a version number is passed in [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") format. If an ABAP daemon already exists, this daemon is used.
    
-   GET\_INFORMATION
    
    Gets information about the ABAP daemon and displays it.
    
-   SEND\_MESSAGE
    
    Sends a text message to the ABAP daemon in [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") format.
    
-   TRIGGER\_AMC
    
    Sends a [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP daemon instructing the daemon to send an [AMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_glosry.htm "Glossary Entry") message. The execution waits until the message arrives at a dedicated AMC receiver.
    
-   TRIGGER\_EXCEPTION
    
    Sends a [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP daemon, which raises an exception there. The exception produces a [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry") that can be viewed in transaction ST22 and the ABAP daemon is restarted automatically. This raises the version number by 1.
    
-   TRIGGER\_BLOCKING
    
    Sends a [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP daemon instructing it to create a statement forbidden in [non-blocking mode](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenadf_non_blocking_model.htm). This raises an exception and [short dump](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenshort_dump_glosry.htm "Glossary Entry"), which can be viewed in transaction ST22. The ABAP daemon is then restarted automatically. This raises the version number by 1.
    
-   TRIGGER\_RESTART
    
    Sends a [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP daemon that restarts the daemon. This raises the version number by 1.
    
-   TRIGGER\_RELOCATION
    
    Sends a [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP daemon instructing the daemon to create a new instance of its class on a different AS instance and delete the previous instance.
    
-   TRIGGER\_STOP
    
    Sends a [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") message to the ABAP daemon instructing it to stop.
    
-   STOP\_DAEMON
    
    Stops the daemon.
    

The class creates an output that displays the individual actions in both the class and in the ABAP daemon. To do this, the daemon writes entries to the [export/import table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_import_table_glosry.htm "Glossary Entry") DEMO\_INDX\_BLOB, which are then read by the class after a short wait time. If the current system is slow, this wait time may not be long enough to collect all actions of the daemon. The ABAP daemon on the current AS instance can be monitored in parallel to the execution of the class using the transaction SMDAEMON.

Class CL\_DEMO\_ABAP\_DAEMON\_BROKER

The class CL\_DEMO\_ABAP\_DAEMON\_DEMO does not work directly with the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and any reads performed on this class are wrapped in the class CL\_DEMO\_ABAP\_DAEMON\_BROKER instead. This is because CL\_ABAP\_DAEMON\_CLIENT\_MANAGER can only be used to access an ABAP daemon in the program in which the daemon was started. It must be possible for the daemon itself to also create an instance of its class in this example, which means the reads must be moved to a program that can be accessed by the ABAP program and the ABAP daemon. To enable this, CL\_DEMO\_ABAP\_DAEMON\_BROKER contains the following methods:

-   CHECK\_DAEMON
    
    METHOD check\_daemon.
      DATA(daemon\_info) =
        cl\_abap\_daemon\_client\_manager=>get\_daemon\_info(
          i\_class\_name = daemon\_class ).
      instance\_id =
         VALUE #( daemon\_info\[ name = daemon\_name \]-instance\_id
                  OPTIONAL ).
      success = COND #( WHEN instance\_id IS NOT INITIAL THEN abap\_true ).
    ENDMETHOD.
    
    This method determines whether a daemon of the ABAP daemon class CL\_DEMO\_ABAP\_DAEMON already exists and saves its ID for further use. The class CL\_DEMO\_ABAP\_DAEMON\_DEMO starts a daemon of the class CL\_DEMO\_ABAP\_DAEMON only if no daemon exists. The method shown here for creating an ABAP daemon as a singleton is not really secure. It is possible that further daemons are created in the same class in the time between starting the daemon and it being returned by the method GET\_DAEMON\_INFO. However, safe handling would exceed the scope of this simple example.
    
-   START\_DAEMON
    
    METHOD start\_daemon.
      DATA stack TYPE abap\_callstack.
      CALL FUNCTION 'SYSTEM\_CALLSTACK'
        IMPORTING
          callstack = stack.
      IF VALUE #( stack\[ 2 \]-mainprogram OPTIONAL )
         <> 'DEMO\_ABAP\_DAEMON' AND
         VALUE #( stack\[ 2 \]-mainprogram OPTIONAL )
         <> 'CL\_DEMO\_ABAP\_DAEMON===========CP'.
        RETURN.
      ENDIF.
      cl\_abap\_daemon\_client\_manager=>start(
        EXPORTING
          i\_class\_name  = daemon\_class
          i\_name        = daemon\_name
          i\_parameter   = pcp
          i\_destination = destination
        IMPORTING
          e\_instance\_id = instance\_id
          e\_setup\_mode  = DATA(setup\_mode) ).
      success =
        COND #( WHEN setup\_mode =
                       if\_abap\_daemon\_extension=>co\_setup\_mode-accept
                THEN abap\_true ).
    ENDMETHOD.
    
    This method wraps the method START of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and starts an ABAP daemon of the ABAP daemon class CL\_DEMO\_ABAP\_DAEMON. Any callers are checked to ensure that the method is only used in the class CL\_DEMO\_ABAP\_DAEMON\_DEMO and in the ABAP daemon class. The ID of the started daemon is saved for further use. If the ABAP daemon class accepts the start, the return value is not initial.
    
-   GET\_DAEMON\_INFO
    
    METHOD get\_daemon\_info.
      daemon\_info =
        cl\_abap\_daemon\_client\_manager=>get\_daemon\_info(
          i\_class\_name = daemon\_class ).
    ENDMETHOD.
    
    This method wraps the identically named method of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and returns information about the ABAP daemons of the ABAP daemon class CL\_DEMO\_ABAP\_DAEMON.
    
-   ATTACH\_DAEMON
    
    METHOD attach\_daemon.
      daemon\_handle = cl\_abap\_daemon\_client\_manager=>attach(
        i\_instance\_id = instance\_id ).
    ENDMETHOD.
    
    This method wraps the method ATTACH of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER. The returned reference to the [ABAP daemon handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry") is stored in the private attribute DAEMON\_HANDLE.
    
-   SEND\_MESSAGE
    
    METHOD send\_message.
      IF daemon\_handle IS INITIAL.
        RAISE EXCEPTION TYPE cx\_abap\_daemon\_error
          EXPORTING
            textid = cx\_abap\_daemon\_error=>action\_not\_permitted.
      ENDIF.
      daemon\_handle->send( pcp ).
    ENDMETHOD.
    
    This method is used to send [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") messages to the ABAP daemon. To do this, the method SEND of the [ABAP daemon handle](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry") is used, which is referenced in the private attribute DAEMON\_HANDLE.
    
-   STOP\_DAEMON
    
    METHOD stop\_daemon.
      cl\_abap\_daemon\_client\_manager=>stop(
        i\_instance\_id = instance\_id ).
    ENDMETHOD.
    
    This method wraps the method STOP of the class CL\_ABAP\_DAEMON\_CLIENT\_MANAGER and is used to stop the ABAP daemon.
    

The name of the ABAP daemon and the ABAP daemon class are defined as constants of the class CL\_DEMO\_ABAP\_DAEMON\_BROKER.

Class CL\_DEMO\_ABAP\_DAEMON

The class CL\_DEMO\_ABAP\_DAEMON is a subclass of CL\_ABAP\_DAEMON\_EXT\_BASE and the ABAP daemon class for this example. It implements the most important methods of the interface IF\_ABAP\_DAEMON\_EXTENSION and further standalone helper methods. It also implements the interface IF\_ABAP\_TIMER\_HANDLER so that it can be an [ABAP Timer handler](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_timer_handler_glosry.htm "Glossary Entry") for an [ABAP Timer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_timer_glosry.htm "Glossary Entry"). Although daemons should never be stopped, daemons created by this example should be deleted automatically after an hour, if it is not stopped explicitly first.

-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_ACCEPT
    
    METHOD if\_abap\_daemon\_extension~on\_accept.
      TRY.
          DATA(caller) = i\_context\_base->get\_start\_caller\_info( )-program.
          IF caller = cl\_oo\_classname\_service=>get\_classpool\_name(
                             EXPORTING
                               clsname =  'CL\_DEMO\_ABAP\_DAEMON\_BROKER'  ).
            e\_setup\_mode = co\_setup\_mode-accept.
          ENDIF.
        CATCH cx\_abap\_daemon\_error.
          RETURN.
      ENDTRY.
    ENDMETHOD.
    
    Before the daemon is started, this method checks whether the calling program is the class pool of the class CL\_DEMO\_ABAP\_DAEMON\_BROKER. Only in this case is the output parameter E\_SETUP\_MODE set so that the daemon can be started.
    
-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_START
    
    METHOD if\_abap\_daemon\_extension~on\_start.
      TRY.
          set\_context( context = i\_context
                       version = i\_context->get\_start\_parameter(
                                              )->get\_field(
                                                 i\_name = \`Version\` ) ).
          write\_log( |Daemon started as version {
                        i\_context->get\_application\_parameter(
                           )->get\_field( i\_name = \`Version\` )
                      } on { sy-host }| ).
        CATCH cx\_ac\_message\_type\_pcp\_error
              cx\_abap\_daemon\_error
              cx\_abap\_timer\_error INTO DATA(exc).
          write\_log( \`Exception, \` && exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    Directly after the daemon is actually started, this method calls the helper method SET\_CONTEXT, which saves context information and starts a timer. An example of context information here is the version number passed by the caller when the daemon is started.
    
-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_MESSAGE
    
    METHOD if\_abap\_daemon\_extension~on\_message.
      TRY.
          DATA(type) = i\_message->get\_field( i\_name = \`Type\` ).
          CASE type.
            WHEN \`msg\`.
              write\_log(
                |Message "{ i\_message->get\_text( )
                  }" received on { sy-host }| ).
            WHEN \`amc\`.
              write\_log( \`Sending AMC message in daemon\` ).
              send\_amc( \`Hello from daemon\` ).
            WHEN \`err\`.
              write\_log( \`Raising exception in daemon\` ).
              MESSAGE \`Type X message in daemon\` TYPE 'X'.
            WHEN \`blk\`.
              write\_log( \`Executing blocking statement in daemon\` ).
              WAIT UP TO 1 SECONDS.
            WHEN \`rst\`.
              write\_log( \`Restarting from daemon\` ).
              i\_context->restart( ).
            WHEN \`rlo\`.
              write\_log( \`Relocating daemon\` ).
              relocate( ).
            WHEN \`stp\`.
              write\_log( \`Stopping from daemon\` ).
              i\_context->stop( ).
          ENDCASE.
        CATCH cx\_ac\_message\_type\_pcp\_error
              cx\_abap\_daemon\_error INTO DATA(exc).
          write\_log( \`Exception, \` && exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    This method evaluates the inbound [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") messages and performs the corresponding actions directly or calls helper methods from the ABAP daemon class.
    
-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_ERROR
    
    METHOD if\_abap\_daemon\_extension~on\_error.
      set\_context( i\_context ).
      TRY.
          write\_log(
            \`Daemon restarted after error and version increased to \` &&
             i\_context->get\_application\_parameter(
                          )->get\_field( i\_name = \`Version\` ) ).
        CATCH cx\_ac\_message\_type\_pcp\_error
              cx\_abap\_daemon\_error INTO DATA(exc).
          write\_log( \`Exception, \` && exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    IF\_ABAP\_DAEMON\_EXTENSION~ON\_RESTART
    
    METHOD if\_abap\_daemon\_extension~on\_restart.
      set\_context( i\_context ).
      TRY.
          write\_log(
            \`Daemon restarted and version increased to \` &&
             i\_context->get\_application\_parameter(
                          )->get\_field( i\_name = \`Version\` ) ).
        CATCH cx\_ac\_message\_type\_pcp\_error
              cx\_abap\_daemon\_error INTO DATA(exc).
          write\_log( \`Exception, \` && exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    These methods call the helper method SET\_CONTEXT to set the context information again after a restart.
    
-   IF\_ABAP\_DAEMON\_EXTENSION~ON\_SERVER\_SHUTDOWN
    
    METHOD if\_abap\_daemon\_extension~on\_server\_shutdown.
      relocate( ).
    ENDMETHOD.
    
    When the current AS instance is shut down, this method calls the helper method RELOCATE to move the daemon to a different AS instance.
    
-   IF\_ABAP\_TIMER\_HANDLER~ON\_TIMEOUT
    
    METHOD if\_abap\_timer\_handler~on\_timeout.
      TRY.
          write\_log( \`Timeout reached, stopping daemon\` ).
          daemon\_context->stop( ).
        CATCH cx\_abap\_daemon\_error INTO DATA(exc).
          write\_log( \`Exception, \` && exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    In the case of a timeout event of the [ABAP Timer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_timer_glosry.htm "Glossary Entry") started in SET\_CONTEXT, this method stops the daemon.
    
-   SET\_CONTEXT
    
    METHOD set\_context.
      daemon\_context = context.
      TRY.
          DATA(pcp) = cl\_ac\_message\_type\_pcp=>create( ).
          pcp->set\_field(
            i\_name = \`Version\`
            i\_value = COND #(
                        WHEN version IS NOT SUPPLIED
                          THEN context->get\_application\_parameter(
                                 )->get\_field( i\_name = \`Version\` ) + 1
                          ELSE version ) ).
          context->set\_application\_parameter( i\_parameter = pcp ).
          cl\_abap\_timer\_manager=>get\_timer\_manager(
            )->start\_timer(
              i\_timer\_handler = me
              i\_timeout = 3600 \* 1000 ).
          write\_log( \`Daemon timeout set to one hour\` ).
        CATCH cx\_ac\_message\_type\_pcp\_error
              cx\_abap\_daemon\_error
              cx\_abap\_timer\_error INTO DATA(exc).
          write\_log( \`Exception, \` && exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    This method sets an attribute of the class to the context object and uses its method SET\_APPLICATION\_PARAMETER to store the current version number in the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") in [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") format. If SET\_CONTEXT is called after a restart, the previous version number is fetched from the ABAP daemon memory and raised by 1. Furthermore, SET\_CONTEXT initializes an [ABAP Timer](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_timer_glosry.htm "Glossary Entry") to which the method IF\_ABAP\_TIMER\_HANDLER~ON\_TIMEOUT of the current daemon reacts.
    
-   SEND\_AMC
    
    METHOD send\_amc.
      TRY.
          CAST if\_amc\_message\_producer\_text(
                 cl\_amc\_channel\_manager=>create\_message\_producer(
                   i\_application\_id = 'DEMO\_AMC'
                   i\_channel\_id     = '/demo\_text'
                   i\_suppress\_echo  = 'X' )
            )->send( i\_message = msg ).
        CATCH cx\_amc\_error INTO DATA(amc\_exc).
          write\_log( \`Exception, \` && amc\_exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    This method sends an [AMC](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenamc_glosry.htm "Glossary Entry") message.
    
-   RELOCATE
    
    METHOD relocate.
      DATA list TYPE TABLE OF msxxlist WITH EMPTY KEY.
      CALL FUNCTION 'TH\_SERVER\_LIST'
        TABLES
          list   = list
        EXCEPTIONS
          OTHERS = 4.
      IF sy-subrc <> 0 OR lines( list ) < 2.
        write\_log( \`No other application server available\` ).
        RETURN.
      ENDIF.
      DELETE list WHERE host = sy-host.
      DATA(server) = list\[
        cl\_abap\_random\_int=>create(
          seed = CONV #( sy-uzeit )
          min  = 1
          max  = lines( list ) )->get\_next( ) \].
      TRY.
          IF cl\_demo\_abap\_daemon\_broker=>start\_daemon(
                pcp = daemon\_context->get\_application\_parameter( )
                destination = server-name ).
            write\_log( \`Daemon relocated to \` && server-host && \` \`  ).
            daemon\_context->stop( ).
          ELSE.
            write\_log( \`Daemon not accepted on \` && server-host ).
          ENDIF.
        CATCH cx\_abap\_daemon\_error INTO DATA(exc).
          write\_log( \`Exception, \` && exc->get\_text( ) ).
      ENDTRY.
    ENDMETHOD.
    
    This method attempts to move the current daemon to a different AS instance. To do this, an AS instance is selected at random from a list in the current AS ABAP. This application server is then used as a destination for starting a daemon of the current ABAP daemon class using CL\_DEMO\_ABAP\_DAEMON\_BROKER. Here, the current context information from the [ABAP daemon memory](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_daemon_memory_glosry.htm "Glossary Entry") is passed directly as start parameters in [PCP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpcp_glosry.htm "Glossary Entry") format. The current daemon is then stopped.
    
-   WRITE\_LOG
    
    METHOD write\_log.
      DATA ts TYPE timestampl.
      GET TIME STAMP FIELD ts.
      DATA(daemon\_log) = \`\`.
      IMPORT daemon\_log = daemon\_log
             FROM DATABASE demo\_indx\_blob(dm)
             ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
      daemon\_log = daemon\_log && |{ ts TIMESTAMP = ISO }: { msg }\\n|.
      EXPORT daemon\_log = daemon\_log
             TO DATABASE demo\_indx\_blob(dm)
             ID cl\_demo\_abap\_daemon\_broker=>daemon\_log.
      COMMIT CONNECTION default.
    ENDMETHOD.
    
    This method writes log entries to the [export/import table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexport_import_table_glosry.htm "Glossary Entry") DEMO\_INDX\_BLOB as a string. It is called by the other methods to log the actions of the daemon for the output of the class CL\_DEMO\_ABAP\_DAEMON\_DEMO.
    

In this example, the remaining methods of the interface IF\_ABAP\_DAEMON\_EXTENSION only write log entries.

Hint

This simple example does not guarantee that an ABAP daemon of the ABAP daemon class CL\_DEMO\_ABAP\_DAEMON is a system-wide singleton. Due to parallel accesses that cause restarts, multiple unwanted daemons may occur unintentionally. This applies in particular during the relocation of daemons to another AS instance. Much more effort is required to create a real singleton. See the class CL\_AD\_EXT\_SIMPLE\_DAEMON, which can be used by the program RS\_ABAP\_DAEMON\_TEST.