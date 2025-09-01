  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Field Help, Input Help, and Dropdown List Boxes](javascript:call_link\('abenabap_dynpros_help.htm'\)) →  [dynpro - Field Helps, Input Helps, and Dropdown List Boxes](javascript:call_link\('abeninput_help_abexas.htm'\)) → 

dynpro - Input Help in Dialog Modules

This example demonstrates how input helps can be implemented in dialog modules.

Source Code

REPORT demo\_dynpro\_f4\_help\_module .
TYPES: BEGIN OF values,
         carrid TYPE spfli-carrid,
         connid TYPE spfli-connid,
       END OF values.
DATA: carrier(3) TYPE c,
      connection(4) TYPE c.
DATA: progname TYPE sy-repid,
      dynnum   TYPE sy-dynnr,
      dynpro\_values TYPE TABLE OF dynpread,
      field\_value LIKE LINE OF dynpro\_values,
      values\_tab TYPE TABLE OF values.
CALL SCREEN 100.
MODULE init OUTPUT.
  progname = sy-repid.
  dynnum   = sy-dynnr.
  CLEAR: field\_value, dynpro\_values.
  field\_value-fieldname = 'CARRIER'.
  APPEND field\_value TO dynpro\_values.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE value\_carrier INPUT.
  CALL FUNCTION 'F4IF\_FIELD\_VALUE\_REQUEST'
       EXPORTING
            tabname     = 'DEMOF4HELP'
            fieldname   = 'CARRIER1'
            dynpprog    = progname
            dynpnr      = dynnum
            dynprofield = 'CARRIER'.
ENDMODULE.
MODULE value\_connection INPUT.
  CALL FUNCTION 'DYNP\_VALUES\_READ'
       EXPORTING
            dyname             = progname
            dynumb             = dynnum
            translate\_to\_upper = 'X'
       TABLES
            dynpfields         = dynpro\_values.
  field\_value = dynpro\_values\[ 1 \].
  SELECT  carrid, connid
    FROM  spfli
    WHERE carrid = @( CONV #( field\_value-fieldvalue ) )
    INTO  CORRESPONDING FIELDS OF TABLE @values\_tab.
  CALL FUNCTION 'F4IF\_INT\_TABLE\_VALUE\_REQUEST'
       EXPORTING
            retfield    = 'CONNID'
            dynpprog    = progname
            dynpnr      = dynnum
            dynprofield = 'CONNECTION'
            value\_org   = 'S'
       TABLES
            value\_tab   = values\_tab.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The input fields are taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
PROCESS ON VALUE-REQUEST.
  FIELD carrier MODULE value\_carrier.
  FIELD connection MODULE value\_connection.

When selecting the F4 help for the individual fields, the user is shown the following types of input help:

-   For the airline, the module value\_carrier is called at POV. There, the function module F4IF\_FIELD\_VALUE\_REQUEST displays the input help of the component CARRIER1 of the structure DEMOF4HELP from the ABAP Dictionary, namely the search help DEMOF4DE. The selection of the user is passed to the dynpro field carrier.
-   For the connection, the module value\_connection is called at POV. There, the function module DYNP\_VALUES\_READ passes the value of the dynpro field carrier to the program. SELECT then extracts the matching values from the database table SPFLI into the internal table values\_tab and passes them to the function module F4IF\_INT\_TABLE\_VALUE\_REQUEST. The function module displays these values as an input help and passes the selection of the user to the dynpro field connection.