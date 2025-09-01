---
title: "ADF - Mini ABAP Daemon"
description: |
  This example demonstrates a mini ABAP daemon(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_glosry.htm 'Glossary Entry'). Source Code REPORT demo_abap_mini_daemon. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_mini_daemon_abexa.htm"
abapFile: "abenabap_mini_daemon_abexa.htm"
keywords: ["select", "do", "while", "if", "try", "catch", "method", "class", "data", "abenabap", "mini", "daemon", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_communication.htm) →  [ABAP Daemon Framework (ADF)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon.htm) →  [ADF - Examples for ABAP daemons](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_abexas.htm) → 

ADF - Mini ABAP Daemon

This example demonstrates a mini [ABAP daemon](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_glosry.htm "Glossary Entry").

Source Code

REPORT demo\_abap\_mini\_daemon.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        DATA(pcp) = cl\_ac\_message\_type\_pcp=>create( ).
        pcp->set\_text( \`Hello Daemon!\` ).
      CATCH cx\_ac\_message\_type\_pcp\_error INTO DATA(pcp\_exc).
        cl\_demo\_output=>display( pcp\_exc->get\_text( ) ).
        RETURN.
    ENDTRY.
    TRY.
        cl\_abap\_daemon\_client\_manager=>start(
          EXPORTING
            i\_class\_name = 'CL\_DEMO\_ABAP\_MINI\_DAEMON'
            i\_name       = 'DemoMiniDaemon'
         IMPORTING
            e\_instance\_id = DATA(instance\_id) ).
        cl\_abap\_daemon\_client\_manager=>attach(
          i\_instance\_id = instance\_id )->send( pcp ).
        cl\_abap\_daemon\_client\_manager=>stop(
          i\_instance\_id = instance\_id ).
      CATCH cx\_abap\_daemon\_error INTO DATA(daemon\_exc).
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

The class CL\_DEMO\_ABAP\_MINI\_DAEMON used by the program above demonstrates a mini [ABAP daemon class](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_class_glosry.htm "Glossary Entry"). It implements only the following methods of the interface IF\_ABAP\_DAEMON\_EXTENSION:

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
    
    This method indicates that the daemon is reacting to message from a program. To enable this, the message is exported to the [cross-transaction application buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencrosstrans_app_buffer_glosry.htm "Glossary Entry") of the shared memory.
    

The program DEMO\_ABAP\_MINI\_DAEMON uses the [ABAP daemon manager](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_manager_glosry.htm "Glossary Entry") to do the following:

-   Start a daemon based on the class CL\_DEMO\_ABAP\_MINI\_DAEMON.
-   Send a [PCP](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenpcp_glosry.htm "Glossary Entry") message using a temporary [ABAP daemon handle](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_daemon_handle_glosry.htm "Glossary Entry").
-   Stop the daemon immediately, which is not a typical step.

It then checks whether the daemon wrote the message to the shared memory.