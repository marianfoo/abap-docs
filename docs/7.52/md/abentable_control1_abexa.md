  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Screen Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [Table Controls](javascript:call_link\('abendynp_table_controls.htm'\)) →  [Table Control - Examples](javascript:call_link\('abentable_control_abexas.htm'\)) → 

Table Control with Scrolling

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
      flights-top\_line = flights-top\_line + 1.
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
      flights-top\_line = flights-top\_line + lines.
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

The table control flights is defined and can be resized. The fields of the table control are copied from the DEMO\_CONN structure in the dictionary. The first two columns are lead columns. The corresponding fields are output fields. A title bar, columns headers, and a selection column are created. The selection column is assigned to the component MARK, of the type CHAR, length 1, from the structure DEMO\_CONN. One column and one or more rows can be selected.

The flow logic of dynpro 100 is given one loop executed at PBO time and another loop executed at PAI time using the table control flights. In the PBO loop, a module is called to fill the table control from the table itab of the ABAP program. In the PAI loop, a module is called to modify the table itab.

Before the PBO loop, the current number of rows in the internal table itab in the component lines of the control structure flights is passed to the module status\_0100. This helps the system to correctly install the scroll bar of the table control.

In the PBO loop, the work area demo\_conn is filled with values from the internal table in the module fill\_table\_control; the row index corresponds to the actual table control row.

In the PAI loop, the current number of loops sy-loopc in the table control is stored in a helper variable in the module read\_table\_control. The number is dependent on the size of the screen. The rows of the internal table whose row index matches the current row of the table control are overwritten by the content of the work area demo\_conn. User input is passed from the input fields of the control to the internal table. A flag is set in the column MARK of the internal table indicating whether the table control row is selected or not.

After the PAI loop, the user input is processed in the module user\_command\_0100. The GUI status SCREEN\_100 enables the corresponding function codes. Both row-by-row and page-by-page scrolling is possible and it is also possible to jump to the first or last page. Scrolling is enabled by setting the component top\_line of the control structure flights. As an increment, page-by-page scrolling uses the helper variable filled in the PAI loop using sy-loopc.