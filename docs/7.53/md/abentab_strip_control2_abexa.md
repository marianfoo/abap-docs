  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros.htm) →  [Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dynpros_dynpro_statements.htm) →  [Subscreens, Tabstrips, and Splitter Controls](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynp_subscreens.htm) →  [Subscreens, Tabstrips, and Splitter Controls - Examples](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentab_strip_control_abexas.htm) → 

Dynpros, Tabstrips with Scrolling on the ABAP Server

This example demonstrates the use of tabstrip controls with centralized scrolling.

Source Code

REPORT demo\_dynpro\_tabstrip\_server.
CONTROLS mytabstrip TYPE TABSTRIP.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA  number TYPE sy-dynnr.
mytabstrip-activetab = 'PUSH2'.
number = '0120'.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  IF save\_ok = 'OK'.
    MESSAGE i888(sabapdemos) WITH 'MYTABSTRIP-ACTIVETAB ='
                                  mytabstrip-activetab.
  ELSE.
    mytabstrip-activetab = save\_ok.
    CASE save\_ok.
      WHEN 'PUSH1'.
        number = '0110'.
      WHEN 'PUSH2'.
        number = '0120'.
      WHEN 'PUSH3'.
        number = '0130'.
    ENDCASE.
  ENDIF.
ENDMODULE.

Description

The static next dynpro number of dynpro 100 is 100. The layout of dynpro 100 and the subscreen dynpros 110 to 130 is the same as in the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentab_strip_control1_abexa.htm) with local scrolling. The function codes of the three tab titles are not typed and a common subscreen area sub is assigned to all tab titles.

The screen flow logic of dynpro 100 makes a dynamic binding to PBO, a subscreen dynpro in the subscreen area sub. The screen flow logic of subscreen dynpros 110 to 130 does not contain any module calls.

This example works in exactly the same way as the [example with local scrolling](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentab_strip_control1_abexa.htm) except that scrolling between the tabstrip pages is programmed in the ABAP program. Each time the user chooses a tab title, the function code from the OK field is assigned to the activetab component of structure mytabstrip. At the same time, the variable number is given the dynpro number of the subscreen dynpro to be displayed in the subscreen area SUB of the tabstrip.