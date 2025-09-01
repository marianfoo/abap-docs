  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_communication.htm) →  [Remote Function Call (RFC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc.htm) →  [RFC - Examples](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RFC%20-%20Dynamic%20Destination%2C%20ABENRFC_DYNAMIC_DEST_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RFC - Dynamic Destination

This example demonstrates how [dynamic destinations](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_destination.htm) are created.

Source Code   

\* Public class definition
CLASS cl\_demo\_rfc\_dynamic\_dest DEFINITION
  PUBLIC
  INHERITING FROM cl\_demo\_classrun
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main
      REDEFINITION .
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_rfc\_dynamic\_dest IMPLEMENTATION.
  METHOD main.
    DATA:
      val\_in     TYPE string VALUE \`val\_in\`,
      val\_in\_out TYPE string VALUE \`val\_in\_out\`,
      val\_out    TYPE string,
      msg        TYPE c LENGTH 80.
    IF sy-uname IS INITIAL.
      out->write(
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
      out->write( |Error when calling sRFC.\\n{ msg }| ).
      RETURN.
    ENDIF.
    out->write( |{ val\_out }\\n{ val\_in\_out }| ).
  ENDMETHOD.
ENDCLASS.

Description   

The method CREATE\_RFC\_DESTINATION of class CL\_DYNAMIC\_DESTINATION is used to create a [dynamic destination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrfc_destination.htm). Input values, whose default values are determined from system fields for the current AS ABAP, are passed as parameters. A remote-enabled function module is called using the dynamic destination. The call is only successful if the destination is created correctly.