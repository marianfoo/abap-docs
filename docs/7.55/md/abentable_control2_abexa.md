  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros.htm) →  [dynpro - Statements in the Dynpro Flow Logic](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpros_dynpro_statements.htm) →  [dynpro - Table Controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynp_table_controls.htm) →  [dynpro - Examples of Table Controls](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_abexas.htm) → 

dynpro - Table Control with Modifications

This example demonstrates sorting by columns and how lines are deleted in table controls.

Source Code

REPORT demo\_dynpro\_tabcont\_loop\_at.
CONTROLS flights TYPE TABLEVIEW USING SCREEN 100.
DATA: cols LIKE LINE OF flights-cols,
      lines TYPE i.
DATA: ok\_code TYPE sy-ucomm,
      save\_ok TYPE sy-ucomm.
DATA: itab TYPE TABLE OF demo\_conn.
TABLES demo\_conn.
SELECT \*
       FROM spfli
       INTO CORRESPONDING FIELDS OF TABLE @itab
       ##TOO\_MANY\_ITAB\_FIELDS.
LOOP AT flights-cols INTO cols WHERE index GT 2.
  cols-screen-input = '0'.
  MODIFY flights-cols FROM cols INDEX sy-tabix.
ENDLOOP.
CALL SCREEN 100.
MODULE status\_0100 OUTPUT.
  SET PF-STATUS 'SCREEN\_100'.
  DESCRIBE TABLE itab LINES lines.
  flights-lines = lines.
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE read\_table\_control INPUT.
  MODIFY itab FROM demo\_conn INDEX flights-current\_line.
ENDMODULE.
MODULE user\_command\_0100 INPUT.
  save\_ok = ok\_code.
  CLEAR ok\_code.
  CASE save\_ok.
    WHEN 'TOGGLE'.
      LOOP AT flights-cols INTO cols WHERE index GT 2.
        IF  cols-screen-input = '0'.
          cols-screen-input = '1'.
        ELSEIF  cols-screen-input = '1'.
          cols-screen-input = '0'.
        ENDIF.
        MODIFY flights-cols FROM cols INDEX sy-tabix.
      ENDLOOP.
    WHEN 'SORT\_UP'.
      READ TABLE flights-cols INTO cols WITH KEY selected = 'X'.
      IF sy-subrc = 0.
        SORT itab STABLE BY (cols-screen-name+10) ASCENDING.
        cols-selected = ' '.
        MODIFY flights-cols FROM cols INDEX sy-tabix.
      ENDIF.
    WHEN 'SORT\_DOWN'.
      READ TABLE flights-cols INTO cols WITH KEY selected = 'X'.
      IF sy-subrc = 0.
        SORT itab STABLE BY (cols-screen-name+10) DESCENDING.
        cols-selected = ' '.
        MODIFY flights-cols FROM cols INDEX sy-tabix.
      ENDIF.
    WHEN 'DELETE'.
      READ TABLE flights-cols INTO cols WITH KEY screen-input = '1'.
      IF sy-subrc = 0.
        LOOP AT itab INTO demo\_conn WHERE mark = 'X'.
          DELETE itab.
        ENDLOOP.
      ENDIF.
  ENDCASE.
ENDMODULE.

Description

The table control flights is defined and can be resized. The fields of the table control are copied from the DEMO\_CONN structure in the dictionary. The first two columns are lead columns. The corresponding fields are output fields. A title bar, columns headers, and a selection column are created. The selection column is assigned to the component MARK, of the type CHAR, length 1, from the structure DEMO\_CONN. One column and one or more lines can be selected.

In the flow logic of dynpro 100, one loop is executed at PBO time and another loop is executed at PAI time using the table control flights and the internal table itab of the ABAP program at the same time. During the PBO loop, a module is called to fill the table control from table itab of the ABAP program. However, during the PAI loop, a module is called to modify table itab.

At PBO the component lines of control structure flights is filled explicitly with the current number of lines of the internal table itab before the PBO loop to install the scroll bar of the table control.

During the PAI loop, the lines of the internal table, whose line index corresponds to the current line of the table control, are overwritten with the contents of the work area demo\_conn. User input is passed from the input fields of the control to the internal table. A flag is set in the column MARK of the internal table indicating whether the table control line is selected or not.

After the PAI loop, user input is processed in the module user\_command\_0100. The GUI status SCREEN\_100 enables the corresponding function codes.

When the program is called not all of the fields in the table control are ready for input. The static specifications of the table control in Screen Painter are modified before CALL SCREEN in the program. The system uses the table cols in control structure flights. All columns with a column position greater than two are set to not ready for input using a loop across the table flights-cols. By selecting the function code TOGGLE, the input readiness of these fields can be switched on and off.

Using the function codes "SORT\_UP" and "SORT\_DOWN", it is possible to sort the columns of the internal table itab in either ascending or descending order. The static settings of the table control allow only a single column to be selected. The selected column is removed from the internal table flights-cols. The name of the sort criterion in the SORT statement is determined dynamically from the component cols-screen-name. The prefix demo\_conn must be removed by specifying an offset. After the sort, the selection is canceled and the component selected in the table flights-cols is assigned a blank character.

Using the function code "DELETE", it is possible to delete selected lines from the internal table itab. First the system checks in flights-cols whether the fields of the table control are ready for input. Then all selected lines are deleted in a loop using the internal table itab. Since the table control is read again from the internal table itab in the PBO loop, the lines on the screen are deleted.