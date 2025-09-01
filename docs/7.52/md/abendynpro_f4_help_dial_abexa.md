  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros.htm) →  [Statements in the Screen Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpros_dynpro_statements.htm) →  [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) →  [Field Help and Input Help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynp_field_help.htm) →  [Field and Input Helps - Examples](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninput_help_abexas.htm) → 

Screens, Input Help in Dialog Modules

The example shows how to implement input help in dialog modules.

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
    WHERE carrid = @field\_value-fieldvalue
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

The static next screen number of screen 100 is 100. The input fields have been taken from the program fields carrier and connection. The function code of the pushbutton is CANCEL with the function type E. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
PROCESS ON VALUE-REQUEST.
  FIELD carrier MODULE value\_carrier.
  FIELD connection MODULE value\_connection.

When choosing the F4 help for the individual fields, the user receives the following types of input help:

-   For the airline, the module value\_carrier is called at POV. There the function module F4IF\_FIELD\_VALUE\_REQUEST displays the input help of the component CARRIER1 of the structure DEMOF4HELP from the ABAP Dictionary, that is, the search help DEMOF4DE. The item selected by the user is copied to the screen field carrier.

-   For the connection, the module value\_connection is called at POV. There the function module DYNP\_VALUE\_READ transfers the value of the screen field carrier to the program. SELECT then reads the matching values from the database table SPFLI to internal table values\_tab and passes them to the function module F4IF\_INT\_TABLE\_VALUE\_REQUEST. The function module displays these values as an input help and copies the item selected by the user to the screen field connection.