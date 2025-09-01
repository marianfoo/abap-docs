# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Dynpros / ABAP Statements for Dynpros / CONTROLS

Included pages: 3


### abapcontrols.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) → 

CONTROLS

[Quick Reference](javascript:call_link\('abapcontrols_shortref.htm'\))

Syntax Forms

[Declaration of Table Controls](javascript:call_link\('abapcontrols_tableview.htm'\))
1\. CONTROLS contrl TYPE TABLEVIEW USING SCREEN dynnr.
[Declaration of Tabstrip Controls](javascript:call_link\('abapcontrols_tabstrip.htm'\))
2\. CONTROLS contrl TYPE TABSTRIP.

Effect

For each [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") used in the program, all [table controls](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry") and [tabstrip controls](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry") defined there have to be declared in the declaration part using the statement CONTROLS, otherwise a non-handleable exception is raised when the dynpro in question is called. contrl expects the name of the control defined in the dynpro to be specified directly. After TYPE, TABLEVIEW, or TABSTRIP must be used to specify whether it is a table control or a tabstrip control.

For each control, the CONTROLS statement creates a structure with the name of the control in the ABAP program. The structure components enable the respective control to be processed in the ABAP program.

Notes

-   For table controls, corresponding [loops](javascript:call_link\('dynploop.htm'\)) have to be programmed in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry"). For tabstrip controls, suitable [subscreens](javascript:call_link\('dynpcall.htm'\)) have to be called.
    
-   [Splitter controls](javascript:call_link\('abensplitter_control_glosry.htm'\) "Glossary Entry") cannot be declared using the CONTROLS statement. Instead the class CL\_DYNPRO\_SPLITTER is used.
    

Continue
[CONTROLS - TYPE TABLEVIEW](javascript:call_link\('abapcontrols_tableview.htm'\))
[CONTROLS - TYPE TABSTRIP](javascript:call_link\('abapcontrols_tabstrip.htm'\))


### abapcontrols_tableview.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [CONTROLS](javascript:call_link\('abapcontrols.htm'\)) → 

CONTROLS - TYPE TABLEVIEW

[Quick Reference](javascript:call_link\('abapcontrols_shortref.htm'\))

Syntax

CONTROLS contrl TYPE TABLEVIEW USING SCREEN dynnr.

Effect

Declares a [table control](javascript:call_link\('abentable_control_glosry.htm'\) "Glossary Entry"). If the type TABLEVIEW is specified in the statement CONTROLS, a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") is created with the name of the [control](javascript:call_link\('abencontrol_glosry.htm'\) "Glossary Entry") and the type CXTAB\_CONTROL of the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") CXTAB. In [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry") processing, the components of the structure contain the attributes of the table control. Using this structure you can read and edit the attributes of the relevant table control.

At the top level, the deep structure CXTAB\_CONTROL contains components for the general attributes of the table control. The component COLS is an internal table of the structure CXTAB\_COLUMN and contains the attributes of individual columns. The structure CXTAB\_COLUMN contains a structured component SCREEN of the type [SCREEN](javascript:call_link\('abenscreen.htm'\)). This component contains the attributes of the screen element of each column. With the exception of the component CURRENT\_LINE, all components of the structure CXTAB\_CONTROL can be set in the ABAP program.

dynnr expects the number of a dynpro on which a table control with the name contrl is defined. A literal or a constant of the type n with length 4 can be specified for dynnr. When a dynpro in which a table control called contrl is defined is called for the first time, the [start values](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") of certain components of the structure are taken from the definition of the table control whose dynpro is specified after USING.

The Structure CXTAB\_CONTROL

Component

Meaning

FIXED\_COLS

Number of lead columns. The start value is taken from the definition of the table control in the dynpro dynnr.

LINES

Controls the vertical scroll bar of the table control. If the [LOOP](javascript:call_link\('dynploop.htm'\)) is executed in the dynpro flow logic without reference to an internal table, that start value of LINES is 0 and must be set in the program so that the scroll bar can be used. With reference to an internal table, LINES is set to the current number of rows in the internal table if the table control is being processed for the first time. However, since this time is not defined, the value of LINES should also be explicitly set to the number of rows of the internal table before the [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing in this case.

TOP\_LINE

Top displayed row for next [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry"). Set at time of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") by the position of the vertical slider box.

CURRENT\_LINE

Current row during a LOOP in the dynpro flow logic. If the addition FROM of the statement [LOOP](javascript:call_link\('dynploop.htm'\)) is not specified, the value of CURRENT\_LINE corresponds to the result of sy-stepl + (TOP\_LINE - 1).

LEFT\_COL

Number of first horizontally scrollable column displayed after the lead columns. Is set at time of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") by the position of the horizontal slider box.

LINE\_SEL\_MODE

Row selection mode: "0" if no rows can be selected , "1" if one row, "2" if multiple rows. The start value is taken from the definition of the table control in the dynpro dynnr.

COL\_SEL\_MODE

Column selection mode: "0" if no columns can be selected , "1" if one column, "2" if multiple columns. The start value is taken from the definition of the table control in the dynpro dynnr.

LINE\_SELECTOR

Flag ("X" or " ") whether there is a selection column. The start value is taken from the definition of the table control in the dynpro dynnr.

H\_GRID

Flag ("X" or " ") whether there are horizontal separators. The start value is taken from the definition of the table control in the dynpro dynnr.

V\_GRID

Flag ("X" or " ") whether there are vertical separators. The start value is taken from the definition of the table control in the dynpro dynnr.

COLS

Control table for individual columns of the structure CXTAB\_COLUMN.

INVISIBLE

Flag ("X" or " ") indicating whether the table control is visible in the GUI window.

The Structure CXTAB\_COLUMN

Component

Meaning

SCREEN

Structure for the attributes of the screen element of the current column. The components can be set for the values described there either directly or using [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)). MODIFY SCREEN overwrites a direct assignment.

INDEX

Current position of the column in the table control. The start value is taken from the definition of the table control in the dynpro dynnr. Is set to current value at time of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry").

SELECTED

Flag ("X" or " ") whether or not column is selected. Is set to current value at time of [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry").

VISLENGTH

Visible length of the column. [Start value](javascript:call_link\('abenstart_value_glosry.htm'\) "Glossary Entry") is taken from the definition of the table control in dynpro dynnr.

INVISIBLE

Flag ("X" or " ") whether or not the column is visible in the table control.

Notes

-   In a table control, it is possible to scroll vertically using a scroll bar if the component LINES of the structure CXTAB\_CONTROL was set to the correct row number before the [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing of the table control. Every time the scroll bar is scrolled, the event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") is raised with an empty function code and the component TOP\_LINE of the structure CXTAB\_CONTROL is automatically set to the new top row before the time of PBO.
    
-   For program-driven scrolling, it is sufficient to assign a value to the component TOP\_LINE of the structure CXTAB\_CONTROL during PBO processing. When scrolling by page, the number of rows scrolled can be taken from the system field sy-loopc in [loop executions](javascript:call_link\('dynploop.htm'\)). sy-loopc contains the number of currently displayed rows and the component LINES of the structure CXTAB\_CONTROL contains the number of lines in the full table control.
    

Example

If a table control is defined on the dynpro with the number 100 and the rows of this table control are defined with reference to the database table SPFLI in ABAP Dictionary, the corresponding programming of the ABAP program can be as follows. In a PBO module prepare\_tab, an internal table spfli\_tab is filled with data from the database table. The number of rows of spfli\_tab is assigned to the component lines of the structure flight\_tab created using CONTROLS; this is done to activate the scroll bar of the table control. In a PAI module modify\_tab, the row of the internal table is modified whose primary table key matches that of the [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") spfli defined using TABLES. The PAI module modify\_tab is called for every displayed row of the table control. The corresponding dynpro flow logic can be seen in the example for [LOOP](javascript:call_link\('dynploop.htm'\)).

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


### abapcontrols_tabstrip.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [ABAP Statements for Dynpros](javascript:call_link\('abenabap_dynpros_abap_statements.htm'\)) →  [CONTROLS](javascript:call_link\('abapcontrols.htm'\)) → 

CONTROLS - TYPE TABSTRIP

[Quick Reference](javascript:call_link\('abapcontrols_shortref.htm'\))

Syntax

CONTROLS contrl TYPE TABSTRIP.

Effect

Declares a [tabstrip control](javascript:call_link\('abentabstrip_control_glosry.htm'\) "Glossary Entry"). If the type TABSTRIP is specified in the statement CONTROLS, a [deep structure](javascript:call_link\('abendeep_structure_glosry.htm'\) "Glossary Entry") is created with the name of the [control](javascript:call_link\('abencontrol_glosry.htm'\) "Glossary Entry") and the type CXTAB\_TABSTRIP of the [type group](javascript:call_link\('abentype_group_1_glosry.htm'\) "Glossary Entry") CXTAB. From this structure, only the component ACTIVETAB is required in the program.

In [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing, the active tabstrip page is specified by assigning the function code of a [tab title](javascript:call_link\('abentab_title_glosry.htm'\) "Glossary Entry") to the component ACTIVETAB. The first tabstrip page is active by default. When [scrolling](javascript:call_link\('abendynp_subscreens.htm'\)) in the SAP GUI, the tabstrip control can be initialized in this way. For any [scrolling](javascript:call_link\('abendynp_subscreens.htm'\)) in an ABAP program, the tabstrip page selected by the user must be activated by this assignment. It must also be ensured that the required [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") is included in the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") using the statement [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)).

In [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing, the component ACTIVETAB contains the function code of the active tab title. When scrolling in the SAP GUI, the tabstrip page currently being displayed can be determined in this way.

Note

The same applies to the inclusion of subscreens of tabstrips using [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) as for normal subscreens.

Example

If, on a dynpro, a tabstrip control is defined with three untyped tab titles with the function codes "TAB1", "TAB2", and "TAB3" and a subscreen area SUB, the scrolling can be programmed in ABAP as follows. In a PBO module, prepare\_tabstrip, the component activetab of the structure tab\_strip created using CONTROLS is assigned the function code of the first tab title. After a tab title has been selected, this component is set to the relevant function code in the PAI module handle\_user\_command. The number of the required [subscreen dynpro](javascript:call_link\('abensubscreen_dynpro_glosry.htm'\) "Glossary Entry") is assigned to the data object dynnr that is used for including the subscreen in the dynpro flow logic. The associated programming of the dynpro flow logic can be seen in the example for [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)).

CONTROLS tab\_strip TYPE TABSTRIP.
DATA: ok\_code      TYPE sy-ucomm,
      dynnr        TYPE sy-dynnr.
...
MODULE prepare\_tabstrip OUTPUT.
  IF tab\_strip-activetab IS INITIAL OR
     dynnr IS INITIAL.
    tab\_strip-activetab = 'TAB1'.
    dynnr = '0110'.
  ENDIF.
ENDMODULE.
MODULE handle\_user\_command INPUT.
  CASE ok\_code.
    WHEN 'TAB1'.
      dynnr = '0110'.
    WHEN 'TAB2'.
      dynnr = '0120'.
    WHEN 'TAB3'.
      dynnr = '0130'.
    ...
  ENDCASE.
  IF ok\_code(3) = 'TAB'.
    tab\_strip-activetab = ok\_code.
  ENDIF.
ENDMODULE.
