  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - MODULE](javascript:call_link\('dynpmodule.htm'\)) →  [dynpro - Examples of Module Calls](javascript:call_link\('abenmodule_abexas.htm'\)) → 

dynpro - Simple Module Call

This example demonstrates how to call a module.

Source Code

PROGRAM demo\_dynpro\_module.
TABLES demo\_conn.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok LIKE ok\_code,
      wa\_spfli TYPE spfli.
CALL SCREEN 100.
MODULE init\_screen\_100 OUTPUT.
  MOVE-CORRESPONDING wa\_spfli TO demo\_conn.
ENDMODULE.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'STATUS\_100'.
  SET TITLEBAR '100'.
ENDMODULE.
MODULE clear\_ok\_code INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
ENDMODULE.
MODULE get\_data INPUT.
  MOVE-CORRESPONDING demo\_conn TO wa\_spfli.
  CLEAR demo\_conn.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  CASE sy-dynnr.
    WHEN 0100.
      CASE save\_ok.
        WHEN 'CANCEL'.
          LEAVE PROGRAM.
        WHEN 'DISPLAY'.
          PERFORM read\_data.
        WHEN 'CLEAR'.
          CLEAR wa\_spfli.
      ENDCASE.
      ...
  ENDCASE.
ENDMODULE.
FORM read\_data.
  SELECT  SINGLE
          cityfrom, airpfrom, cityto, airpto, fltime, deptime, arrtime
    FROM  spfli
    WHERE carrid = @wa\_spfli-carrid AND connid = @wa\_spfli-connid
    INTO  CORRESPONDING FIELDS OF @wa\_spfli.
ENDFORM.

Description

The static next dynpro number of dynpro 100 is 100. Its layout is taken from the fields of the structure DEMO\_CONN in the ABAP Dictionary. The dynpro flow logic is as follows:

PROCESS BEFORE OUTPUT.
   MODULE init\_screen\_100.
   MODULE status\_0100.
PROCESS AFTER INPUT.
   MODULE clear\_ok\_code.
   MODULE get\_data.
   MODULE user\_command\_0100.

In the GUI status STATUS\_100, the icon Cancel (F12) is activated using the function code CANCEL and the function keys F5 and Shift+F2 are assigned the function codes DISPLAY and CLEAR. The way this program works is similar to the executable example [Processing Input/Output Fields](javascript:call_link\('abendynpro_in_out_field_abexa.htm'\)), but the processing logic is distributed across multiple dialog modules and a subroutine is used to read the data from the database.