  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [Remote Function Call (RFC)](javascript:call_link\('abenrfc.htm'\)) →  [RFC - Examples](javascript:call_link\('abenrfc_abexas.htm'\)) → 

RFC - Dynamic Destination

This example demonstrates how [dynamic destinations](javascript:call_link\('abenrfc_destination.htm'\)) are created.

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

The method CREATE\_RFC\_DESTINATION of class CL\_DYNAMIC\_DESTINATION is used to create a [dynamic destination](javascript:call_link\('abenrfc_destination.htm'\)). Input values, whose default values are determined from system fields for the current AS ABAP, are passed as parameters. A remote-enabled function module is called using the dynamic destination. The call is only successful if the destination is created correctly.