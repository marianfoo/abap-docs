# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Selection Screens / Selection Screen Processing

Included pages: 8



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.52](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenselection_screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm)
- [abapat_selection-screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm)
- [abapat_selection-screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm)
- [abensel_screen_at_sel_on_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_at_sel_on_abexa.htm)
- [abensel_screen_f1_help_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f1_help_abexa.htm)
- [abensel_screen_f4_help_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f4_help_abexa.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP 7.52
**Generated**: 2025-09-01T11:25:46.519Z

---

### abenselection_screen_events.htm

> **📖 Official SAP Documentation**: [abenselection_screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) → 

Selection Screen Processing

Selection screen processing packages the [dynpro flow logic](javascript:call_link\('abendynpro_flow_logic_glosry.htm'\) "Glossary Entry") together with the sending of the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). No dialog modules of the program are called. Instead, various [selection screen events](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") are triggered for which event blocks can be programmed. [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") processing triggers the event

-   [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) [OUTPUT](javascript:call_link\('abapat_selection-screen_events.htm'\))

ausgelöst. [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") processing triggers a variety of different events

-   [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) [...](javascript:call_link\('abapat_selection-screen_events.htm'\))

Selection screen processing of a displayed selection screen is ended only by selection of the following functions of the [GUI status](javascript:call_link\('abenselection_screen_overview.htm'\)):

-   Execute or Execute + Print
    Triggers the selection screen events of PAI processing. After this, the event [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)) is triggered for standard selection screens called using [SUBMIT](javascript:call_link\('abapsubmit.htm'\)). For selection screens called using [dialog transactions](javascript:call_link\('abendialog_transaction_glosry.htm'\) "Glossary Entry"), the program is ended. A call in the program resumes the program after the statement [CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\)).

-   Back, Exit, or Cancel
    Triggers the event AT SELECTION-SCREEN ON EXIT-COMMAND only. After this, the program is ended for standard selection screens called using SUBMIT and dialog transactions. Otherwise, sy-subrc is set to 4 and the program resumes after the statement CALL SELECTION-SCREEN.

For all other user actions, the selection screen is called again automatically after selection screen processing is ended.

Notes

-   The selection screen processor also encapsulates the processing of the [function codes](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") assigned to the control elements of the selection screen. The function code that triggers PAI processing is passed to the component ucomm of an [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") sscrfields with the type of the structure SSCRFIELDS. If an interface work area of this type is declared in a program using the statement [TABLES](javascript:call_link\('abaptables.htm'\)), the function code can be accessed. It is not advisable to access the system field sy-ucomm, however, since it is not possible to guarantee that it has the same value as sscrfields-ucomm in all situations.

-   Whether a program resumes depends on the function code in the UCOMM component of the [interface work area](javascript:call_link\('abeninterface_work_area_glosry.htm'\) "Glossary Entry") SSCRFIELDS at the end of PAI processing. If this is declared using TABLES and if this component is set to the value "ONLI" (for example, during processing of the standard selection screen of a program called using SUBMIT) and this value is assigned to the function Execute, the event START-OF-SELECTION is raised after selection screen processing. Overwrites of the system field sy-ucomm, however, are ignored.

-   To avoid ending the program following the processing of a selection screen called using a dialog transaction, either the [next dynpro](javascript:call_link\('abennext_dynpro_glosry.htm'\) "Glossary Entry") must be called using [LEAVE TO SCREEN](javascript:call_link\('abapleave_screen.htm'\)) or a new [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") called using [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) (during the processing of the selection screen). The statement [SET SCREEN](javascript:call_link\('abapset_screen.htm'\)) is not enough here.

-   In selection screen processing, the statement [LOOP AT SCREEN](javascript:call_link\('abaploop_at_screen.htm'\)) can be used to access the attributes of screen elements on the selection screen.

Continue
[AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\))



**📖 Source**: [abenselection_screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm)

### abapat_selection-screen.htm

> **📖 Official SAP Documentation**: [abapat_selection-screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) → 

AT SELECTION-SCREEN

[Quick Reference](javascript:call_link\('abapat_selection-screen_shortref.htm'\))

Syntax

AT SELECTION-SCREEN [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)).

Effect

This statement defines event blocks for different events [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) that are triggered by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and after certain user actions on a displayed selection screen. They assist in selection screen processing in the ABAP program.

AT SELECTION-SCREEN is triggered at least twice for actions on selection screens included as a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") on another selection screen: First for the included selection screen and then the for selection screen or screens to be included.

Note

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection results.

Continue
[AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\))



**📖 Source**: [abapat_selection-screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm)

### abapat_selection-screen_events.htm

> **📖 Official SAP Documentation**: [abapat_selection-screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) → 

AT SELECTION-SCREEN - selscreen\_event

[Quick Reference](javascript:call_link\('abapat_selection-screen_shortref.htm'\))

Syntax

... *{* OUTPUT *}*
  *|* *{* ON *{*para*|*selcrit*}* *}*
  *|* *{* ON END OF selcrit *}*
  *|* *{* ON BLOCK block *}*
  *|* *{* ON RADIOBUTTON GROUP group *}*
  *|* *{* *}*
  *|* *{* ON *{*HELP-REQUEST*|*VALUE-REQUEST*}*
      FOR *{*para*|*selcrit-low*|*selcrit-high*}* *}*
  *|* *{* ON EXIT-COMMAND *}*.

Alternatives:

[1\. ... OUTPUT](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ON *{*para*|*selcrit*}*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ON END OF selcrit](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... ON BLOCK block](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... ON RADIOBUTTON GROUP group](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... *{* *}*](#!ABAP_ALTERNATIVE_6@6@)
[7\. ... ON *{*HELP-REQUEST*|*VALUE-REQUEST*}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*](#!ABAP_ALTERNATIVE_7@7@)
[8\. ... ON EXIT-COMMAND](#!ABAP_ALTERNATIVE_8@8@)

Effect

These additions allow individual evaluation of specific elements of the [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") of the program. The information about which selection screen raised the event is in the system field sy-dynnr.

Alternative 1

... OUTPUT

Effect

This event is raised by the dynpro event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") of a selection screen. In the event block, the selection screen can be prepared using assignments to the data objects of parameters and selection criteria and using dynamic screen modifications.

Notes

-   The assignments to input fields in the event block AT SELECTION-SCREEN OUTPUT always affect the selection screen and overwrite the user input from previous displays of the same selection screen. Assignments in the event blocks [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) or [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)), on the other hand, only have an effect the first time the program starts.
    
-   The statement [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)) can be used during the event AT SELECTION-SCREEN OUTPUT to modify properties of screen elements of the selection screen.
    

Example

Modifies an input field of a selection screen declared using [PARAMETERS](javascript:call_link\('abapparameters.htm'\)). The field input is made invisible using the characters "\*\*\*..." (for example, for entering a password).

PARAMETERS pass(30) TYPE c.
AT SELECTION-SCREEN OUTPUT.
  LOOP AT SCREEN INTO DATA(wa).
    IF wa-name = 'PASS'.
      wa-invisible = '1'.
      MODIFY screen FROM wa.
    ENDIF.
  ENDLOOP.

Alternative 2

... ON *{*para*|*selcrit*}*

Effect

This event is raised by the dynpro event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") of a selection screen if the content of the input field of a parameter para or a line of a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit was passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") or an [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") in the event block makes the fields para and selcrit ready for input again.

No parameter that is defined as a radio button can be specified. For this purpose, the addition ON RADIOBUTTON GROUP is provided.

Note

If a user action takes place in the dialog box for the multiple selection of a selection criterion selcrit, the entries of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") are passed to the program, line by line. For each line, the event AT SELECTION-SCREEN ON selcrit is raised.

Alternative 3

... ON END OF selcrit

Effect

This event is raised after the selection table selcrit is passed in full to the program after a user action in the dialog box for the multiple selection has taken place. The entire selection table can be checked in this event block.

Alternative 4

... ON BLOCK block

Effect

This event is raised by the dynpro event PAI of a selection screen if all the input fields of a block block of the selection screen were passed to the ABAP program. The user input can be checked in the event block. Sending a warning or an error message in the event block makes all the fields of the block block ready for input again.

Alternative 5

... ON RADIOBUTTON GROUP group

Effect

This event is raised by the dynpro event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") of a selection screen if all the fields of a radio button group group of the selection screen were passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") or [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") in the event block makes all the radio buttons of the group group ready for input again.

Note

The individual fields of a radio button group are not passed individually and do not raise the event AT SELECTION-SCREEN ON par.

Alternative 6

... *{* *}*

Effect

The event AT SELECTION-SCREEN itself is raised as the last event in selection screen processing if all the input values were passed to the program. All user input can be checked in this event block. Sending a warning or an error message in the event block makes all the screen fields ready for input once again.

Alternative 7

... ON *{* HELP-REQUEST *|* VALUE-REQUEST *}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*

Effect

The two events ON HELP-REQUEST and ON VALUE-REQUEST are raised by the dynpro events [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry") of a selection screen if, for the input field of a parameter para or one of the input fields of a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit, the field help F1 or the input help F4 was called. Other [selection events](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") are not raised.

In the event blocks, a self-defined field or input field can be programmed, which overrides any helps defined in ABAP Dictionary.

Notes

-   These event blocks can only be implemented for fields of the selection screen that are defined in the same ABAP program and not in any associated [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").
    
-   The events for the field help and input help do not transport data between the selection screen and the ABAP program. As with general [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), suitable function modules such as RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE must be used for this. The parameters and selection criteria changed for the input help are transported to the selection screen.
    

Alternative 8

... ON EXIT-COMMAND

Effect

This event is raised if the user has called one of the functions Back, Exit, or Cancel. Any cleanup actions can be executed in this event block.

Example

This [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") defines a standard selection screen and a further selection screen. In the event blocks AT SELECTION-SCREEN, the input in the selection screens can be specially handled using the evaluation of the name p\_carrid and the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") in sy-dynnr.

REPORT demo\_at\_selection\_screen.
\* Global data
TABLES sscrfields.
DATA: spfli\_tab TYPE TABLE OF spfli,
      spfli\_wa  LIKE LINE OF spfli\_tab.
\* Selection screens
PARAMETERS p\_carrid TYPE spfli-carrid.
SELECTION-SCREEN BEGIN OF SCREEN 500.
  SELECT-OPTIONS s\_conn FOR spfli\_wa-connid.
SELECTION-SCREEN END OF SCREEN 500.
\* Handling selection screen events
AT SELECTION-SCREEN ON p\_carrid.
  IF p\_carrid IS INITIAL.
    MESSAGE 'Please enter a value' TYPE 'E'.
  ENDIF.
  AUTHORITY-CHECK OBJECT 'S\_CARRID'
                      ID 'CARRID' FIELD p\_carrid
                      ID 'ACTVT'  FIELD '03'.
  IF sy-subrc = 4.
    MESSAGE 'No authorization for carrier' TYPE 'E'.
  ELSEIF sy-subrc <> 0.
    MESSAGE 'Error in authority check' TYPE 'A'.
  ELSE.
    IF sscrfields-ucomm = 'ONLI'.
      CALL SELECTION-SCREEN '0500'.
    ENDIF.
  ENDIF.
AT SELECTION-SCREEN.
  IF sy-dynnr = '0500'.
    IF s\_conn IS INITIAL.
      MESSAGE 'Please enter values' TYPE 'W'.
    ELSE.
      SELECT \*
             FROM spfli
             WHERE carrid = @p\_carrid AND
                   connid IN @s\_conn
             INTO TABLE @spfli\_tab.
      IF sy-subrc <> 0.
        MESSAGE 'No flights found' TYPE 'E'.
      ENDIF.
    ENDIF.
  ENDIF.
\* Main program
START-OF-SELECTION.
  ...

Continue
![Example](exa.gif "Example") [Selection screens, processing blocks and radio buttons](javascript:call_link\('abensel_screen_at_sel_on_abexa.htm'\))
![Example](exa.gif "Example") [Selection Screens, Field Help](javascript:call_link\('abensel_screen_f1_help_abexa.htm'\))
![Example](exa.gif "Example") [Selection Screens, Input Help](javascript:call_link\('abensel_screen_f4_help_abexa.htm'\))



**📖 Source**: [abapat_selection-screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm)

### abensel_screen_at_sel_on_abexa.htm

> **📖 Official SAP Documentation**: [abensel_screen_at_sel_on_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_at_sel_on_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) →  [AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) → 

Selection screens, processing blocks and radio buttons

The example demonstrates how blocks and radio buttons are processed in selection screens.

Source Code

REPORT demo\_at\_selection\_on\_block .
SELECTION-SCREEN BEGIN OF BLOCK part1 WITH FRAME.
PARAMETERS: number1 TYPE i,
            number2 TYPE i,
            number3 TYPE i.
SELECTION-SCREEN END OF BLOCK part1.
SELECTION-SCREEN BEGIN OF BLOCK part2 WITH FRAME.
PARAMETERS: r1 RADIOBUTTON GROUP rad DEFAULT 'X',
            r2 RADIOBUTTON GROUP rad,
            r3 RADIOBUTTON GROUP rad.
SELECTION-SCREEN END OF BLOCK part2.
AT SELECTION-SCREEN ON BLOCK part1.
  IF number3 <= number2 OR
     number2 <= number1.
    MESSAGE e888(sabapdemos) WITH text-001.
  ENDIF.
AT SELECTION-SCREEN ON RADIOBUTTON GROUP rad.
  IF r1 = 'X'.
    MESSAGE w888(sabapdemos) WITH text-002.
  ENDIF.

Description

In the event blocks AT SELECTION-SCREEN ON BLOCK and AT SELECTION-SCREEN ON RADIOBUTTON GROUP the user input is validated; if required, error messages are displayed.

If the user does not specify in block part1 any ascending numbers, then the entire block is made ready for input again.

If the user does not change the radio buttons of group rad, a warning appears.



**📖 Source**: [abensel_screen_at_sel_on_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_at_sel_on_abexa.htm)

### abensel_screen_f1_help_abexa.htm

> **📖 Official SAP Documentation**: [abensel_screen_f1_help_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f1_help_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) →  [AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) → 

Selection Screens, Field Help

The example shows a self-defined F1 help on selection screens.

Source Code

REPORT demo\_selection\_screen\_f1.
PARAMETERS: p\_carr\_1 TYPE s\_carr\_id,
            p\_carr\_2 TYPE spfli-carrid.
AT SELECTION-SCREEN ON HELP-REQUEST FOR p\_carr\_2.
  CALL SCREEN 100 STARTING AT 10 5
                  ENDING   AT 60 10.

Description

In this program, a selection screen with two parameters that are based on the data element S\_CARR\_ID of the ABAP Dictionary are declared. Whereas the Dictionary documentation is used as online help for p\_carr\_1, the system calls a separate screen with the number 100 for p\_carr\_2. Using the Screen Painter, this screen is defined as a modal dialog box with next screen 0, which displays the required help text as text fields. You are not required to program the flow logic for this screen.



**📖 Source**: [abensel_screen_f1_help_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f1_help_abexa.htm)

### abensel_screen_f4_help_abexa.htm

> **📖 Official SAP Documentation**: [abensel_screen_f4_help_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f4_help_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) →  [AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) → 

Selection Screens, Input Help

The example illustrates a self-defined F4 help on selection screens.

Source Code

REPORT demo\_selection\_screen\_f4.
PARAMETERS: p\_carr\_1 TYPE spfli-carrid,
            p\_carr\_2 TYPE spfli-carrid.
AT SELECTION-SCREEN ON VALUE-REQUEST FOR p\_carr\_2.
  CALL SCREEN 100 STARTING AT 10 5
                  ENDING   AT 50 10.
MODULE value\_list OUTPUT.
  SUPPRESS DIALOG.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
  SET PF-STATUS space.
  NEW-PAGE NO-TITLE.
  WRITE 'Star Alliance' COLOR COL\_HEADING.
  ULINE.
  p\_carr\_2 = 'AC '.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Air Canada'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'LH '.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Lufthansa'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'SAS'.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'SAS'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'THA'.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'Thai International'.
  HIDE p\_carr\_2.
  p\_carr\_2 = 'UA '.
  WRITE: / p\_carr\_2 COLOR COL\_KEY, 'United Airlines'.
  HIDE p\_carr\_2.
  CLEAR p\_carr\_2.
ENDMODULE.
AT LINE-SELECTION.
  CHECK NOT p\_carr\_2 IS INITIAL.
  LEAVE TO SCREEN 0.

Description

In this program, a selection screen with two parameters that are based on column CARRID of database table SPFLI is declared. Whereas for p\_carr\_1 the input help of the Dictionary is used, a special separate input help is programmed for p\_carr\_2. Screen 100 is called for this purpose. In the flow logic, the system starts the dialog module value\_list at the PBO event. The screen layout for screen 100 is not required, and the system does not call any dialog modules at the PAI event.

PROCESS BEFORE OUTPUT.
  MODULE value\_list.
PROCESS AFTER INPUT.

The dialog module value\_list suppresses the display of the screen layout of screen 100 and switches to list display. The list shows values for the parameter p\_carr\_2 and stores them in the HIDE area. Selecting a line on the value list triggers the event AT LINE-SELECTION, automatically putting the selected value from the HIDE area in the field p\_carr\_2. If the selection is valid, the system quits the event block for AT LINE-SELECTION directly with the selection screen and fills the input field accordingly.



**📖 Source**: [abensel_screen_f4_help_abexa.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f4_help_abexa.htm)

### abapat_selection-screen_events.htm

> **📖 Official SAP Documentation**: [abapat_selection-screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) → 

AT SELECTION-SCREEN - selscreen\_event

[Quick Reference](javascript:call_link\('abapat_selection-screen_shortref.htm'\))

Syntax

... *{* OUTPUT *}*
  *|* *{* ON *{*para*|*selcrit*}* *}*
  *|* *{* ON END OF selcrit *}*
  *|* *{* ON BLOCK block *}*
  *|* *{* ON RADIOBUTTON GROUP group *}*
  *|* *{* *}*
  *|* *{* ON *{*HELP-REQUEST*|*VALUE-REQUEST*}*
      FOR *{*para*|*selcrit-low*|*selcrit-high*}* *}*
  *|* *{* ON EXIT-COMMAND *}*.

Alternatives:

[1\. ... OUTPUT](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... ON *{*para*|*selcrit*}*](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... ON END OF selcrit](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... ON BLOCK block](#!ABAP_ALTERNATIVE_4@4@)
[5\. ... ON RADIOBUTTON GROUP group](#!ABAP_ALTERNATIVE_5@5@)
[6\. ... *{* *}*](#!ABAP_ALTERNATIVE_6@6@)
[7\. ... ON *{*HELP-REQUEST*|*VALUE-REQUEST*}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*](#!ABAP_ALTERNATIVE_7@7@)
[8\. ... ON EXIT-COMMAND](#!ABAP_ALTERNATIVE_8@8@)

Effect

These additions allow individual evaluation of specific elements of the [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") of the program. The information about which selection screen raised the event is in the system field sy-dynnr.

Alternative 1

... OUTPUT

Effect

This event is raised by the dynpro event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") of a selection screen. In the event block, the selection screen can be prepared using assignments to the data objects of parameters and selection criteria and using dynamic screen modifications.

Notes

-   The assignments to input fields in the event block AT SELECTION-SCREEN OUTPUT always affect the selection screen and overwrite the user input from previous displays of the same selection screen. Assignments in the event blocks [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) or [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)), on the other hand, only have an effect the first time the program starts.
    
-   The statement [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)) can be used during the event AT SELECTION-SCREEN OUTPUT to modify properties of screen elements of the selection screen.
    

Example

Modifies an input field of a selection screen declared using [PARAMETERS](javascript:call_link\('abapparameters.htm'\)). The field input is made invisible using the characters "\*\*\*..." (for example, for entering a password).

PARAMETERS pass(30) TYPE c.
AT SELECTION-SCREEN OUTPUT.
  LOOP AT SCREEN INTO DATA(wa).
    IF wa-name = 'PASS'.
      wa-invisible = '1'.
      MODIFY screen FROM wa.
    ENDIF.
  ENDLOOP.

Alternative 2

... ON *{*para*|*selcrit*}*

Effect

This event is raised by the dynpro event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") of a selection screen if the content of the input field of a parameter para or a line of a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit was passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") or an [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") in the event block makes the fields para and selcrit ready for input again.

No parameter that is defined as a radio button can be specified. For this purpose, the addition ON RADIOBUTTON GROUP is provided.

Note

If a user action takes place in the dialog box for the multiple selection of a selection criterion selcrit, the entries of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") are passed to the program, line by line. For each line, the event AT SELECTION-SCREEN ON selcrit is raised.

Alternative 3

... ON END OF selcrit

Effect

This event is raised after the selection table selcrit is passed in full to the program after a user action in the dialog box for the multiple selection has taken place. The entire selection table can be checked in this event block.

Alternative 4

... ON BLOCK block

Effect

This event is raised by the dynpro event PAI of a selection screen if all the input fields of a block block of the selection screen were passed to the ABAP program. The user input can be checked in the event block. Sending a warning or an error message in the event block makes all the fields of the block block ready for input again.

Alternative 5

... ON RADIOBUTTON GROUP group

Effect

This event is raised by the dynpro event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") of a selection screen if all the fields of a radio button group group of the selection screen were passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") or [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") in the event block makes all the radio buttons of the group group ready for input again.

Note

The individual fields of a radio button group are not passed individually and do not raise the event AT SELECTION-SCREEN ON par.

Alternative 6

... *{* *}*

Effect

The event AT SELECTION-SCREEN itself is raised as the last event in selection screen processing if all the input values were passed to the program. All user input can be checked in this event block. Sending a warning or an error message in the event block makes all the screen fields ready for input once again.

Alternative 7

... ON *{* HELP-REQUEST *|* VALUE-REQUEST *}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*

Effect

The two events ON HELP-REQUEST and ON VALUE-REQUEST are raised by the dynpro events [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry") of a selection screen if, for the input field of a parameter para or one of the input fields of a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit, the field help F1 or the input help F4 was called. Other [selection events](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") are not raised.

In the event blocks, a self-defined field or input field can be programmed, which overrides any helps defined in ABAP Dictionary.

Notes

-   These event blocks can only be implemented for fields of the selection screen that are defined in the same ABAP program and not in any associated [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").
    
-   The events for the field help and input help do not transport data between the selection screen and the ABAP program. As with general [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), suitable function modules such as RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE must be used for this. The parameters and selection criteria changed for the input help are transported to the selection screen.
    

Alternative 8

... ON EXIT-COMMAND

Effect

This event is raised if the user has called one of the functions Back, Exit, or Cancel. Any cleanup actions can be executed in this event block.

Example

This [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") defines a standard selection screen and a further selection screen. In the event blocks AT SELECTION-SCREEN, the input in the selection screens can be specially handled using the evaluation of the name p\_carrid and the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") in sy-dynnr.

REPORT demo\_at\_selection\_screen.
\* Global data
TABLES sscrfields.
DATA: spfli\_tab TYPE TABLE OF spfli,
      spfli\_wa  LIKE LINE OF spfli\_tab.
\* Selection screens
PARAMETERS p\_carrid TYPE spfli-carrid.
SELECTION-SCREEN BEGIN OF SCREEN 500.
  SELECT-OPTIONS s\_conn FOR spfli\_wa-connid.
SELECTION-SCREEN END OF SCREEN 500.
\* Handling selection screen events
AT SELECTION-SCREEN ON p\_carrid.
  IF p\_carrid IS INITIAL.
    MESSAGE 'Please enter a value' TYPE 'E'.
  ENDIF.
  AUTHORITY-CHECK OBJECT 'S\_CARRID'
                      ID 'CARRID' FIELD p\_carrid
                      ID 'ACTVT'  FIELD '03'.
  IF sy-subrc = 4.
    MESSAGE 'No authorization for carrier' TYPE 'E'.
  ELSEIF sy-subrc <> 0.
    MESSAGE 'Error in authority check' TYPE 'A'.
  ELSE.
    IF sscrfields-ucomm = 'ONLI'.
      CALL SELECTION-SCREEN '0500'.
    ENDIF.
  ENDIF.
AT SELECTION-SCREEN.
  IF sy-dynnr = '0500'.
    IF s\_conn IS INITIAL.
      MESSAGE 'Please enter values' TYPE 'W'.
    ELSE.
      SELECT \*
             FROM spfli
             WHERE carrid = @p\_carrid AND
                   connid IN @s\_conn
             INTO TABLE @spfli\_tab.
      IF sy-subrc <> 0.
        MESSAGE 'No flights found' TYPE 'E'.
      ENDIF.
    ENDIF.
  ENDIF.
\* Main program
START-OF-SELECTION.
  ...

Continue
![Example](exa.gif "Example") [Selection screens, processing blocks and radio buttons](javascript:call_link\('abensel_screen_at_sel_on_abexa.htm'\))
![Example](exa.gif "Example") [Selection Screens, Field Help](javascript:call_link\('abensel_screen_f1_help_abexa.htm'\))
![Example](exa.gif "Example") [Selection Screens, Input Help](javascript:call_link\('abensel_screen_f4_help_abexa.htm'\))



**📖 Source**: [abapat_selection-screen_events.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm)

### abapat_selection-screen.htm

> **📖 Official SAP Documentation**: [abapat_selection-screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapat_selection-screen.htm](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm)


  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\)) → 

AT SELECTION-SCREEN

[Quick Reference](javascript:call_link\('abapat_selection-screen_shortref.htm'\))

Syntax

AT SELECTION-SCREEN [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)).

Effect

This statement defines event blocks for different events [selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\)) that are triggered by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") during [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and after certain user actions on a displayed selection screen. They assist in selection screen processing in the ABAP program.

AT SELECTION-SCREEN is triggered at least twice for actions on selection screens included as a [subscreen](javascript:call_link\('abensubscreen_glosry.htm'\) "Glossary Entry") on another selection screen: First for the included selection screen and then the for selection screen or screens to be included.

Note

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection results.

Continue
[AT SELECTION-SCREEN - selscreen\_event](javascript:call_link\('abapat_selection-screen_events.htm'\))
