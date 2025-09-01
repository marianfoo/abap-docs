  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [General Dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros.htm) →  [dynpro - ABAP Statements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpros_abap_statements.htm) →  [CONTROLS](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontrols.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CONTROLS, TYPE TABLEVIEW, ABAPCONTROLS_TABLEVIEW, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

CONTROLS, TYPE TABLEVIEW

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcontrols_shortref.htm)

Syntax

CONTROLS contrl TYPE TABLEVIEW USING SCREEN dynnr.

Effect

Declares a [table control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_control_glosry.htm "Glossary Entry"). If the type TABLEVIEW is specified in the statement CONTROLS, a [deep structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendeep_structure_glosry.htm "Glossary Entry") is created with the name of the [control](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencontrol_glosry.htm "Glossary Entry") and the type cxtab\_control of the [type pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentype_pool_glosry.htm "Glossary Entry") CXTAB. In [dynpro](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry") processing, the components of the structure contain the properties of the table control. Using this structure, the properties of the relevant table control can be changed and read.

At the top level, the deep structure cxtab\_control contains components for the general properties of the table control. The component cols is an internal table of the structure cxtab\_column and contains the properties of individual columns. The structure cxtab\_column contains a structured component SCREEN of the type [SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenscreen.htm). This component contains the properties of the screen element of each column. Apart from the component current\_line, all components of the structure cxtab\_control can be set in the ABAP program.

dynnr expects the number of a dynpro on which a table control with the name contrl is defined. A literal or a constant of the type n with length 4 can be specified for dynnr. When a dynpro in which a table control called contrl is defined is called for the first time, the [start values](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") of certain components of the structure are taken from the definition of the table control whose dynpro is specified after USING.

The Structure cxtab\_control

Component

Meaning

fixed\_cols

Number of lead columns. The start value is taken from the definition of the table control in the dynpro dynnr.

LINES

Controls the vertical scroll bar of the table control. If the [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm) is executed in the dynpro flow logic without reference to an internal table, that start value of LINES is 0 and must be set in the program so that the scroll bar can be used. With reference to an internal table, LINES is set to the current number of lines in the internal table if the table control is being processed for the first time. However, since this event is not defined, the value of LINES should also be explicitly set to the number of lines of the internal table before the [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") processing in this case.

top\_line

Top displayed line for next [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry"). Set at time of [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") by the position of the vertical slider box.

current\_line

Current line during a LOOP in the dynpro flow logic. If the addition FROM of the statement [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm) is not specified, the value of current\_line corresponds to the result of sy-stepl + (top\_line - 1).

left\_col

Number of first horizontally scrollable column displayed after the lead columns. Is set at time of [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") by the position of the horizontal slider box.

line\_sel\_mode

Line selection mode: "0" if no lines can be selected, "1" if one line, "2" if multiple lines. The start value is taken from the definition of the table control in the dynpro dynnr.

lcol\_sel\_mode

Column selection mode: "0" if no columns can be selected, "1" if one column, "2" if multiple columns. The start value is taken from the definition of the table control in the dynpro dynnr.

line\_selector

Flag (X or blank) indicating whether there is a selection column. The start value is taken from the definition of the table control in the dynpro dynnr.

h\_grid

Flag (X or blank) indicating whether there are horizontal separators. The start value is taken from the definition of the table control in the dynpro dynnr.

v\_grid

Flag (X or blank) indicating whether there are vertical separators. The start value is taken from the definition of the table control in the dynpro dynnr.

cols

Control table for individual columns of the structure cxtab\_column.

invisible

Flag (X or blank) indicating whether the table control is visible in the GUI window.

The Structure cxtab\_column

Component

Meaning

screen

Structure for the properties of the screen element of the current column. The components can be set for the values described there either directly or using [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapmodify_screen.htm). MODIFY SCREEN overwrites a direct assignment.

index

Current position of the column in the table control. The start value is taken from the definition of the table control in the dynpro dynnr. Is set to current value at time of [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry").

selected

Flag (X or blank) indicating whether the column is selected. Is set to current value at time of [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry").

vislength

Visible length of the column. [Start value](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstart_value_glosry.htm "Glossary Entry") is taken from the definition of the table control in dynpro dynnr.

invisible

Flag (X or blank) indicating whether the column is visible in the table control.

Hints

-   In a table control, it is possible to scroll vertically using a scroll bar if the component LINES of the structure cxtab\_control was set to the correct line number before the [PBO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpbo_glosry.htm "Glossary Entry") processing of the table control. Every time the scroll bar is scrolled, the event [PAI](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpai_glosry.htm "Glossary Entry") is raised with an empty function code and the component top\_line of the structure cxtab\_control is automatically set to the new top line before PBO.
-   For program-driven scrolling, it is sufficient to assign a value to the component top\_line of the structure cxtab\_control during PBO processing. When scrolling by page, the number of lines scrolled can be taken from the system field sy-loopc in [loop executions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm). sy-loopc contains the number of currently displayed lines and the component LINES of the structure cxtab\_control contains the number of lines in the entire table control.

Example

If a table control is defined on the dynpro with the number 100 and the lines of this table control are defined with reference to the DDIC database table SPFLI in the ABAP Dictionary, the corresponding programming of the ABAP program can be as follows. In a PBO module prepare\_tab, an internal table spfli\_tab is filled with data from the database table. The number of lines of spfli\_tab is assigned to the component lines of the structure flight\_tab created using CONTROLS to activate the scroll bar of the table control. In a PAI module modify\_tab, the line of the internal table is modified whose primary table key matches that of the [interface work area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") spfli defined using TABLES. The PAI module modify\_tab is called for every displayed line of the table control. The corresponding dynpro flow logic can be seen in the example for [LOOP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynploop.htm).

CONTROLS flight\_tab TYPE TABLEVIEW USING SCREEN '0100'.
TABLES spfli.
DATA spfli\_tab TYPE SORTED TABLE OF spfli
               WITH UNIQUE KEY carrid connid.
...
MODULE prepare\_tab OUTPUT.
  IF spfli\_tab IS INITIAL.
    SELECT \*
           FROM spfli
           INTO TABLE @spfli\_tab.
    flight\_tab-lines = lines( spfli\_tab ).
  ENDIF.
ENDMODULE.
MODULE modify\_tab INPUT.
  MODIFY TABLE spfli\_tab FROM spfli.
ENDMODULE.