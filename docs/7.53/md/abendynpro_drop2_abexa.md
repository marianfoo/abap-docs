  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Screen and Screen Elements](javascript:call_link\('abenabap_dynpros_screen.htm'\)) →  [Screen Elements - Examples](javascript:call_link\('abenscreen_elements_abexas.htm'\)) → 

Dynpros, List Box with Value List from PBO Module

This example demonstrates a non-recommended way to enable a dropdown list box.

Source Code

REPORT demo\_dynpro\_dropdown\_listbox.
DATA: name  TYPE vrm\_id,
      list  TYPE vrm\_values,
      value LIKE LINE OF list.
DATA: wa\_spfli TYPE spfli,
      ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
TABLES demof4help.
name = 'DEMOF4HELP-CONNID'.
CALL SCREEN 100.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE init\_listbox OUTPUT.
  CLEAR: demof4help-connid,
         list.
  SELECT  connid, cityfrom, cityto, deptime
          FROM spfli
          WHERE carrid = @demof4help-carrier2
          INTO CORRESPONDING FIELDS OF @wa\_spfli.
    value-key  = wa\_spfli-connid.
    WRITE wa\_spfli-deptime TO value-text USING EDIT MASK '\_\_:\_\_:\_\_'.
    value-text =
      |{ value-text } { wa\_spfli-cityfrom } { wa\_spfli-cityto }|.
    APPEND value TO list.
  ENDSELECT.
  IF sy-subrc <> 0.
    MESSAGE 'No connections for that airline' TYPE 'I' DISPLAY LIKE 'E'.
    LEAVE TO SCREEN 100.
  ENDIF.
  CALL FUNCTION 'VRM\_SET\_VALUES'
    EXPORTING
      id     = name
      values = list.
ENDMODULE.
MODULE user\_command\_100.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'CARRIER' AND NOT demof4help-carrier2 IS INITIAL.
    LEAVE TO SCREEN 200.
  ELSE.
    SET SCREEN 100.
  ENDIF.
ENDMODULE.
MODULE user\_command\_200.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'SELECTED'.
    MESSAGE i888(sabapdemos) WITH text-001 demof4help-carrier2
                                          demof4help-connid.
    CLEAR demof4help.
  ENDIF.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 200. The input field is assigned the component CARRIER2 of the structure DEMOF4HELP from ABAP Dictionary. Its dropdown attribute is L, the output length is 15, the value list attribute is empty, and it is assigned the function code CARRIER. The function code of the pushbutton is CANCEL with the function type E. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_100.

The static next dynpro number of dynpro 200 is 100. The input field is assigned the component CONNID of the structure DEMOF4HELP from ABAP Dictionary. Its dropdown attribute is L, the output length is 30, the value list attribute is A, and it is assigned the SELECTED function code. The function code of the pushbutton is CANCEL with the function type E. The screen flow logic is as follows:

PROCESS BEFORE OUTPUT.
  MODULE init\_listbox.
PROCESS AFTER INPUT.
  MODULE cancel AT EXIT-COMMAND.
  MODULE user\_command\_200.

The user is not allowed to enter values in the screen fields. When selecting the input field on dynpro 100, the user sees a value list in the list box derived from the input help of the DEMOF4HELP-CARRIER2 field. In this case, this is the search help H\_SCARR assigned to the SCARR check table in ABAP Dictionary. The value list contains the names of the airlines. When the user selects an entry, the dynpro field is filled with the ID of the airline, and the event PAI is triggered. The module user\_command\_100 checks the OK field and calls dynpro 200.

At the PBO event of dynpro 200, the system fills an internal table called list with values from database table SPFLI. The key component is filled with the flight numbers, and other relevant information is placed in the text field. The list table is passed to the VRM\_SET\_VALUES function module. When the user chooses the input field on dynpro 200, the text column of the internal table is displayed in the list box. When the user selects an entry, the dynpro field is filled with the associated entry from the key column, and the event PAI is triggered. The module user\_command\_200 checks and processes the OK field.