---
title: "Source Code"
description: |
  REPORT demo_dynpro_tabcont_loop. CONTROLS flights TYPE TABLEVIEW USING SCREEN 100. DATA: ok_code TYPE sy-ucomm, save_ok TYPE sy-ucomm. DATA: itab TYPE TABLE OF demo_conn, fill TYPE i. TABLES demo_conn. DATA: lines TYPE i, limit TYPE i. SELECT  FROM spfli ORDER BY carrid, connid INTO CORRESP
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_control1_abexa.htm"
abapFile: "abentable_control1_abexa.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "catch", "data", "internal-table", "abentable", "control1", "abexa"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - Table Controls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendynp_table_controls.htm) →  [dynpro - Examples of Table Controls](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentable_control_abexas.htm) → 

dynpro - Table Control with Scrolling

This example demonstrates program-driven scrolling in table controls.

Source Code

REPORT demo\_dynpro\_tabcont\_loop.
CONTROLS flights TYPE TABLEVIEW USING SCREEN 100.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA: itab TYPE TABLE OF demo\_conn,
      fill TYPE i.
TABLES demo\_conn.
DATA: lines TYPE i,
      limit TYPE i.
SELECT \*
       FROM spfli
       ORDER BY carrid, connid
       INTO CORRESPONDING FIELDS OF TABLE @itab
       ##too\_many\_itab\_fields.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  DESCRIBE TABLE itab LINES fill.
  flights-lines = fill.
ENDMODULE.
MODULE fill\_table\_control OUTPUT.
  TRY.
      demo\_conn = itab\[ flights-current\_line \].
    CATCH cx\_sy\_itab\_line\_not\_found.
      RETURN.
  ENDTRY.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE read\_table\_control INPUT.
  lines = sy-loopc.
  MODIFY itab FROM demo\_conn INDEX flights-current\_line.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'NEXT\_LINE'.
      flights-top\_line += 1.
      limit = fill - lines + 1.
      IF flights-top\_line > limit.
        flights-top\_line = limit.
      ENDIF.
    WHEN 'PREV\_LINE'.
      flights-top\_line = flights-top\_line - 1.
      IF flights-top\_line < 0.
        flights-top\_line = 0.
      ENDIF.
    WHEN 'NEXT\_PAGE'.
      flights-top\_line += lines.
      limit = fill - lines + 1.
      IF flights-top\_line > limit.
        flights-top\_line = limit.
      ENDIF.
    WHEN 'PREV\_PAGE'.
      flights-top\_line = flights-top\_line - lines.
      IF flights-top\_line < 0.
        flights-top\_line = 0.
      ENDIF.
    WHEN 'LAST\_PAGE'.
      flights-top\_line =  fill - lines + 1.
    WHEN 'FIRST\_PAGE'.
      flights-top\_line = 0.
  ENDCASE.
ENDMODULE.

Description

The resizable table control flights is defined. The fields of the table control have been copied from the DEMO\_CONN structure in the dictionary. The first two columns are lead columns. The corresponding fields are output fields. A title bar, columns headers, and a selection column are created. The selection column is assigned to the component MARK, of the type CHAR, length 1, from the structure DEMO\_CONN. One column and multiple lines can be selected.

The flow logic of dynpro 100 contains one loop executed at PBO time and another loop executed at PAI time using the table control flights. During the PBO loop, a module is called to fill the table control from table itab of the ABAP program. During the PAI loop, a module is called to modify table itab.

Before the PBO loop, in the module status\_0100 the current number of lines of the internal table itab is placed in component lines of control structure flights. This helps the system to correctly install the scroll bar of the table control.

During the PBO loop, in the module fill\_table\_control the work area demo\_conn is filled with values from the internal table, where the line index corresponds to the current line of the table control.

During the PAI loop, in the module read\_table\_control the current number of the loop sy-loopc in the table control is placed in an auxiliary variable. The number depends on the size of the screen. The lines of the internal table whose line index matches the current line of the table control are overwritten by the content of the work area demo\_conn. User input is passed from the input fields of the control to the internal table. A flag is set in the column MARK of the internal table indicating whether the table control line is selected or not.

After the PAI loop, user input is processed in the module user\_command\_0100. The GUI status SCREEN\_100 enables the corresponding function codes. Both line-by-line and page-by-page scrolling is possible, and it is also possible to jump to the first or last page. Scrolling is enabled by setting the component top\_line of the control structure flights. As an increment, page-by-page scrolling uses the helper variable filled in the PAI loop using sy-loopc.