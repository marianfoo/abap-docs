  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP Daemon Framework (ADF)](javascript:call_link\('abenabap_daemon.htm'\)) →  [ADF - Examples for ABAP Daemons](javascript:call_link\('abenabap_daemon_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ADF - Mini ABAP Daemon, ABENABAP_MINI_DAEMON_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

ADF - Mini ABAP Daemon

This example demonstrates a mini [ABAP daemon](javascript:call_link\('abenabap_daemon_glosry.htm'\) "Glossary Entry").

Source Code   

REPORT demo\_abap\_mini\_daemon.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        FINAL(pcp) = cl\_ac\_message\_type\_pcp=>create( ).
        pcp->set\_text( \`Hello Daemon!\` ).
      CATCH cx\_ac\_message\_type\_pcp\_error INTO FINAL(pcp\_exc).
        cl\_demo\_output=>display( pcp\_exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    TRY.
        cl\_abap\_daemon\_client\_manager=>start(
          EXPORTING
            i\_class\_name = 'CL\_DEMO\_ABAP\_MINI\_DAEMON'
            i\_name       = 'DemoMiniDaemon'
         IMPORTING
            e\_instance\_id = FINAL(instance\_id) ).
        cl\_abap\_daemon\_client\_manager=>attach(
          i\_instance\_id = instance\_id )->send( pcp ).
        cl\_abap\_daemon\_client\_manager=>stop(
          i\_instance\_id = instance\_id ).
      CATCH cx\_abap\_daemon\_error INTO FINAL(daemon\_exc).
        cl\_demo\_output=>display( daemon\_exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    DATA msg TYPE string.
    DATA(subrc) = 4.
    WHILE subrc = 4.
      IMPORT msg = msg FROM SHARED MEMORY demo\_indx\_blob(dm)
                       ID 'DemoMiniDaemon'.
      subrc = sy-subrc.
    ENDWHILE.
    ASSERT msg = \`Hello Daemon!\`.
    cl\_demo\_output=>display( 'Daemon has received the message' ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

The class CL\_DEMO\_ABAP\_MINI\_DAEMON used by the program above demonstrates a mini [ABAP daemon class](javascript:call_link\('abenabap_daemon_class_glosry.htm'\) "Glossary Entry"). It implements only the following methods of the interface IF\_ABAP\_DAEMON\_EXTENSION:

-   ON\_ACCEPT
    
    METHOD if\_abap\_daemon\_extension~on\_accept.
      TRY.
          IF i\_context\_base->get\_start\_caller\_info(
               )-program = 'DEMO\_ABAP\_MINI\_DAEMON'.
            e\_setup\_mode = co\_setup\_mode-accept.
          ENDIF.
        CATCH cx\_abap\_daemon\_error.
          RETURN.
      ENDTRY.
    ENDMETHOD.
    
    In this method, the return value E\_SETUP\_MODE must be set, otherwise the daemon is not created. The method limits the creation of daemons to the program DEMO\_ABAP\_MINI\_DAEMON.
    
-   ON\_MESSAGE
    
    METHOD IF\_ABAP\_DAEMON\_EXTENSION~ON\_MESSAGE.
      TRY.
          DATA(msg) = i\_message->get\_text( ).
        CATCH cx\_ac\_message\_type\_pcp\_error.
          RETURN.
      ENDTRY.
      EXPORT msg = msg TO SHARED MEMORY demo\_indx\_blob(dm)
                       ID 'DemoMiniDaemon'.
    ENDMETHOD.
    
    This method indicates that the daemon is reacting to message from a program. To enable this, the message is exported to the [cross-transaction application buffer](javascript:call_link\('abencrosstrans_app_buffer_glosry.htm'\) "Glossary Entry") of the shared memory.
    

The program DEMO\_ABAP\_MINI\_DAEMON uses the [ABAP daemon manager](javascript:call_link\('abenabap_daemon_manager_glosry.htm'\) "Glossary Entry") to do the following:

-   Start a daemon based on the class CL\_DEMO\_ABAP\_MINI\_DAEMON.
-   Send a [PCP](javascript:call_link\('abenpcp_glosry.htm'\) "Glossary Entry") message using a temporary [ABAP daemon handle](javascript:call_link\('abenabap_daemon_handle_glosry.htm'\) "Glossary Entry").
-   Stop the daemon immediately, which is not a typical step.

It then checks whether the daemon wrote the message to the shared memory.