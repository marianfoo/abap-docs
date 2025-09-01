# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Selection Screens / Selection Screen Processing

Included pages: 8


### abenselection_screen_events.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) → 

Selection Screen Processing

Selection screen processing packages the [dynpro flow logic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") together with the sending of the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry"). No dialog modules of the program are called. Instead, various [selection screen events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are triggered for which event blocks can be programmed. [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") processing triggers the event

-   [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) [OUTPUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm)

. [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") processing triggers a variety of different events

-   [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) [...](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm)

. Selection screen processing of a displayed selection screen is ended only by selection of the following functions of the [GUI status](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_overview.htm):

-   Execute or Execute + Print
    Triggers the selection screen events of PAI processing. After this, the event [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapstart-of-selection.htm) is triggered for standard selection screens called using [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm). For selection screens called using [dialog transactions](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_transaction_glosry.htm "Glossary Entry"), the program is ended. A call in the program resumes the program after the statement [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_selection_screen.htm).

-   Back, Exit, or Cancel
    Triggers the event AT SELECTION-SCREEN ON EXIT-COMMAND only. After this, the program is ended for standard selection screens called using SUBMIT and dialog transactions. Otherwise, sy-subrc is set to 4 and the program resumes after the statement CALL SELECTION-SCREEN.

For all other user actions, the selection screen is called again automatically after selection screen processing is ended.

Notes

-   The selection screen processor also encapsulates the processing of the [function codes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_code_glosry.htm "Glossary Entry") assigned to the control elements of the selection screen. The function code that triggers PAI processing is passed to the component ucomm of an [interface work area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") sscrfields with the type of the structure SSCRFIELDS. If an interface work area of this type is declared in a program using the statement [TABLES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaptables.htm), the function code can be accessed. It is not advisable to access the system field sy-ucomm, however, since it is not possible to guarantee that it has the same value as sscrfields-ucomm in all situations.

-   Whether a program resumes depends on the function code in the UCOMM component of the [interface work area](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") SSCRFIELDS at the end of PAI processing. If this is declared using TABLES and if this component is set to the value "ONLI" (for example, during processing of the standard selection screen of a program called using SUBMIT) and this value is assigned to the function Execute, the event START-OF-SELECTION is raised after selection screen processing. Overwrites of the system field sy-ucomm, however, are ignored.

-   To avoid ending the program following the processing of a selection screen called using a dialog transaction, either the [next dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennext_dynpro_glosry.htm "Glossary Entry") must be called using [LEAVE TO SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapleave_screen.htm) or a new [dynpro sequence](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_screen.htm) (during the processing of the selection screen). The statement [SET SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_screen.htm) is not enough here.

-   In selection screen processing, the statement [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abaploop_at_screen.htm) can be used to access the attributes of screen elements on the selection screen.

Continue
[AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm)


### abapat_selection-screen.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) → 

AT SELECTION-SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_shortref.htm)

Syntax

AT SELECTION-SCREEN [selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm).

Effect

This statement defines event blocks for different events [selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm) that are triggered by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") during [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") and after certain user actions on a displayed selection screen. They assist in selection screen processing in the ABAP program.

AT SELECTION-SCREEN is triggered at least twice during actions on selection screens that are linked into another selection screen as a [subscreen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubscreen_glosry.htm "Glossary Entry") - first for the linked selection screen itself, and then for the linking selection screens.

Note

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection results.

Continue
[AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm)


### abapat_selection-screen_events.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) → 

AT SELECTION-SCREEN - selscreen\_event

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_shortref.htm)

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

These additions allow individual evaluation of specific elements of the [selection screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") of the program. The information about which selection screen raised the event is in the system field sy-dynnr.

Alternative 1

... OUTPUT

Effect

This event is raised by the dynpro event [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") of a selection screen. In the event block, the selection screen can be prepared using assignments to the data objects of parameters and selection criteria and using dynamic screen modifications.

Notes

-   The assignments to input fields in the event block AT SELECTION-SCREEN OUTPUT always affect the selection screen and overwrite the user input from previous displays of the same selection screen. Assignments in the event blocks [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) or [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm), on the other hand, only have an effect the first time the program starts.
    
-   The statement [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen.htm) can be used during the event AT SELECTION-SCREEN OUTPUT to modify properties of screen elements of the selection screen.
    

Example

Modifies an input field of a selection screen declared using [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm). The field input is made invisible using the characters "\*\*\*..." (for example, for entering a password).

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

This event is raised by the dynpro event [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") of a selection screen if the content of the input field of a parameter para or a line of a [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit was passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwarning_glosry.htm "Glossary Entry") or an [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") in the event block makes the fields para and selcrit ready for input again.

No parameter that is defined as a radio button can be specified. For this purpose, the addition ON RADIOBUTTON GROUP is provided.

Note

If a user action takes place in the dialog box for the multiple selection of a selection criterion selcrit, the entries of the [selection table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_table_glosry.htm "Glossary Entry") are passed to the program, line by line. For each line, the event AT SELECTION-SCREEN ON selcrit is raised.

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

This event is raised by the dynpro event [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") of a selection screen if all the fields of a radio button group group of the selection screen were passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwarning_glosry.htm "Glossary Entry") or [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") in the event block makes all the radio buttons of the group group ready for input again.

Note

The individual fields of a radio button group are not passed individually and do not raise the event AT SELECTION-SCREEN ON par.

Alternative 6

... *{* *}*

Effect

The event AT SELECTION-SCREEN itself is raised as the last event in selection screen processing if all the input values were passed to the program. All user input can be checked in this event block. Sending a warning or an error message in the event block makes all the screen fields ready for input once again.

Alternative 7

... ON *{* HELP-REQUEST *|* VALUE-REQUEST *}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*

Effect

The two events ON HELP-REQUEST and ON VALUE-REQUEST are raised by the dynpro events [POH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpov_glosry.htm "Glossary Entry") of a selection screen if, for the input field of a parameter para or one of the input fields of a [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit, the field help F1 or the input help F4 was called. Other [selection events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are not raised.

In the event blocks, a self-defined field or input field can be programmed, which overrides any helps defined in ABAP Dictionary.

Notes

-   These event blocks can only be implemented for fields of the selection screen that are defined in the same ABAP program and not in any associated [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").
    
-   The events for the field help and input help do not transport data between the selection screen and the ABAP program. As with general [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"), suitable function modules such as RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE must be used for this. The parameters and selection criteria changed for the input help are transported to the selection screen.
    

Alternative 8

... ON EXIT-COMMAND

Effect

This event is raised if the user has called one of the functions Back, Exit, or Cancel. Any cleanup actions can be executed in this event block.

Example

This [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") defines a standard selection screen and a further selection screen. In the event blocks AT SELECTION-SCREEN, the input in the selection screens can be specially handled using the evaluation of the name p\_carrid and the [dynpro number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_number_glosry.htm "Glossary Entry") in sy-dynnr.

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
![Example](exa.gif "Example") [Selection Screens, Block Processing and Radio Button Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_at_sel_on_abexa.htm)
![Example](exa.gif "Example") [Selection Screens, Field Help](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_f1_help_abexa.htm)
![Example](exa.gif "Example") [Selection Screens, Input Help](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_f4_help_abexa.htm)


### abensel_screen_at_sel_on_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm) → 

Selection Screens, Block Processing and Radio Button Processing

This example demonstrates how blocks and radio buttons are processed in selection screens.

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

In the event blocks AT SELECTION-SCREEN ON BLOCK and AT SELECTION-SCREEN ON RADIOBUTTON GROUP the user input is validated and error messages are displayed if applicable.

If the user does not enter any ascending numbers in a block part1, the entire block is made ready for input again.

If the user does not change the radio buttons of group rad, a warning appears.


### abensel_screen_f1_help_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm) → 

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

This program declares a selection screen with two parameters both referring to the data element S\_CARR\_ID from ABAP Dictionary. While the dictionary documentation is used as online help for p\_carr\_1, a separate dynpro with the number 100 is called for p\_carr\_2. Using Screen Painter, this dynpro is defined as a modal dialog box with the next dynpro 0, which displays the required help text as text fields. The screen does not require any flow logic.


### abensel_screen_f4_help_abexa.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) →  [AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm) → 

Selection Screens, Input Help

The example demonstrates a self-defined F4 help on selection screens.

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

This program declares a selection screen with two parameters both referring to the column CARRID of the database table SPFLI. While the dictionary input help is used for p\_carr\_1, no special input help is programmed for p\_carr\_2. Dynpro 100 is used here. In the flow logic, the dialog module value\_list is started at the time of PBO. The screen layout of dynpro 100 is not required and the system does not call any dialog modules at PAI time.

PROCESS BEFORE OUTPUT.
  MODULE value\_list.
PROCESS AFTER INPUT.

The dialog module value\_list suppresses the display of the screen layout of dynpro 100 and switches to a list display. The list contains values for the parameter p\_carr\_2. These values are also placed in the HIDE area. When a line is selected from the value list, the event AT LINE-SELECTION is raised, and the selected value is passed from the area HIDE to the field p\_carr\_2. If a valid line is selected, the system switches directly from the event block AT LINE-SELECTION back to the selection screen, and fills the corresponding input field.


### abapat_selection-screen_events.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm) → 

AT SELECTION-SCREEN - selscreen\_event

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_shortref.htm)

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

These additions allow individual evaluation of specific elements of the [selection screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") of the program. The information about which selection screen raised the event is in the system field sy-dynnr.

Alternative 1

... OUTPUT

Effect

This event is raised by the dynpro event [PBO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpbo_glosry.htm "Glossary Entry") of a selection screen. In the event block, the selection screen can be prepared using assignments to the data objects of parameters and selection criteria and using dynamic screen modifications.

Notes

-   The assignments to input fields in the event block AT SELECTION-SCREEN OUTPUT always affect the selection screen and overwrite the user input from previous displays of the same selection screen. Assignments in the event blocks [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) or [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm), on the other hand, only have an effect the first time the program starts.
    
-   The statement [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapmodify_screen.htm) can be used during the event AT SELECTION-SCREEN OUTPUT to modify properties of screen elements of the selection screen.
    

Example

Modifies an input field of a selection screen declared using [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm). The field input is made invisible using the characters "\*\*\*..." (for example, for entering a password).

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

This event is raised by the dynpro event [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") of a selection screen if the content of the input field of a parameter para or a line of a [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit was passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwarning_glosry.htm "Glossary Entry") or an [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") in the event block makes the fields para and selcrit ready for input again.

No parameter that is defined as a radio button can be specified. For this purpose, the addition ON RADIOBUTTON GROUP is provided.

Note

If a user action takes place in the dialog box for the multiple selection of a selection criterion selcrit, the entries of the [selection table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_table_glosry.htm "Glossary Entry") are passed to the program, line by line. For each line, the event AT SELECTION-SCREEN ON selcrit is raised.

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

This event is raised by the dynpro event [PAI](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpai_glosry.htm "Glossary Entry") of a selection screen if all the fields of a radio button group group of the selection screen were passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwarning_glosry.htm "Glossary Entry") or [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") in the event block makes all the radio buttons of the group group ready for input again.

Note

The individual fields of a radio button group are not passed individually and do not raise the event AT SELECTION-SCREEN ON par.

Alternative 6

... *{* *}*

Effect

The event AT SELECTION-SCREEN itself is raised as the last event in selection screen processing if all the input values were passed to the program. All user input can be checked in this event block. Sending a warning or an error message in the event block makes all the screen fields ready for input once again.

Alternative 7

... ON *{* HELP-REQUEST *|* VALUE-REQUEST *}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*

Effect

The two events ON HELP-REQUEST and ON VALUE-REQUEST are raised by the dynpro events [POH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpov_glosry.htm "Glossary Entry") of a selection screen if, for the input field of a parameter para or one of the input fields of a [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit, the field help F1 or the input help F4 was called. Other [selection events](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are not raised.

In the event blocks, a self-defined field or input field can be programmed, which overrides any helps defined in ABAP Dictionary.

Notes

-   These event blocks can only be implemented for fields of the selection screen that are defined in the same ABAP program and not in any associated [logical database](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").
    
-   The events for the field help and input help do not transport data between the selection screen and the ABAP program. As with general [dynpros](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"), suitable function modules such as RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE must be used for this. The parameters and selection criteria changed for the input help are transported to the selection screen.
    

Alternative 8

... ON EXIT-COMMAND

Effect

This event is raised if the user has called one of the functions Back, Exit, or Cancel. Any cleanup actions can be executed in this event block.

Example

This [executable program](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenexecutable_program_glosry.htm "Glossary Entry") defines a standard selection screen and a further selection screen. In the event blocks AT SELECTION-SCREEN, the input in the selection screens can be specially handled using the evaluation of the name p\_carrid and the [dynpro number](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_number_glosry.htm "Glossary Entry") in sy-dynnr.

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
![Example](exa.gif "Example") [Selection Screens, Block Processing and Radio Button Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_at_sel_on_abexa.htm)
![Example](exa.gif "Example") [Selection Screens, Field Help](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_f1_help_abexa.htm)
![Example](exa.gif "Example") [Selection Screens, Input Help](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_f4_help_abexa.htm)


### abapat_selection-screen.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_events.htm) → 

AT SELECTION-SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_shortref.htm)

Syntax

AT SELECTION-SCREEN [selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm).

Effect

This statement defines event blocks for different events [selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm) that are triggered by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") during [selection screen processing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselscreen_processing_glosry.htm "Glossary Entry").

Selection screen events occur immediately before sending a [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") and after certain user actions on a displayed selection screen. They assist in selection screen processing in the ABAP program.

AT SELECTION-SCREEN is triggered at least twice during actions on selection screens that are linked into another selection screen as a [subscreen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensubscreen_glosry.htm "Glossary Entry") - first for the linked selection screen itself, and then for the linking selection screens.

Note

The event blocks after AT SELECTION-SCREEN are implemented internally as [procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprocedure_glosry.htm "Glossary Entry"). Declarative statements in these event blocks create local data.

Example

The program DEMO\_SELECTION\_SCREEN\_EVENTS demonstrates all selection results.

Continue
[AT SELECTION-SCREEN - selscreen\_event](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen_events.htm)
