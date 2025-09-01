---
title: "Syntax"
description: |
  ...  OUTPUT    ON paraselcrit    ON END OF selcrit    ON BLOCK block    ON RADIOBUTTON GROUP group       ON HELP-REQUESTVALUE-REQUEST FOR paraselcrit-lowselcrit-high    ON EXIT-COMMAND . Alternatives:
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_events.htm"
abapFile: "abapat_selection-screen_events.htm"
keywords: ["select", "update", "loop", "do", "if", "try", "data", "abapat", "selection", "screen", "events"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) →  [Selection Screen Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm) →  [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen.htm) → 

AT SELECTION-SCREEN - selscreen\_event

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_selection-screen_shortref.htm)

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

These additions allow individual evaluation of specific elements of the [selection screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") of the program. The information about which selection screen raised the event is in the system field sy-dynnr.

Alternative 1

... OUTPUT

Effect

This event is raised by the dynpro event [PBO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpbo_glosry.htm "Glossary Entry") of a selection screen. In the event block, the selection screen can be prepared using assignments to the data objects of parameters and selection criteria and using dynamic screen modifications.

Notes

-   The assignments to input fields in the event block AT SELECTION-SCREEN OUTPUT always affect the selection screen and overwrite the user input from previous displays of the same selection screen. Assignments in the event blocks [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapload-of-program.htm) or [INITIALIZATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinitialization.htm), on the other hand, only have an effect the first time the program starts.
    
-   The statement [MODIFY SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_screen.htm) can be used during the event AT SELECTION-SCREEN OUTPUT to modify properties of screen elements of the selection screen.
    

Example

Modifies an input field of a selection screen declared using [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters.htm). The field input is made invisible using the characters "\*\*\*..." (for example, for entering a password).

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

This event is raised by the dynpro event [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") of a selection screen if the content of the input field of a parameter para or a line of a [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit was passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwarning_glosry.htm "Glossary Entry") or an [error message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenerror_message_glosry.htm "Glossary Entry") in the event block makes the fields para and selcrit ready for input again.

No parameter that is defined as a radio button can be specified. For this purpose, the addition ON RADIOBUTTON GROUP is provided.

Note

If a user action takes place in the dialog box for the multiple selection of a selection criterion selcrit, the entries of the [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") are passed to the program, line by line. For each line, the event AT SELECTION-SCREEN ON selcrit is raised.

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

This event is raised by the dynpro event [PAI](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpai_glosry.htm "Glossary Entry") of a selection screen if all the fields of a radio button group group of the selection screen were passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwarning_glosry.htm "Glossary Entry") or [error message](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenerror_message_glosry.htm "Glossary Entry") in the event block makes all the radio buttons of the group group ready for input again.

Note

The individual fields of a radio button group are not passed individually and do not raise the event AT SELECTION-SCREEN ON par.

Alternative 6

... *{* *}*

Effect

The event AT SELECTION-SCREEN itself is raised as the last event in selection screen processing if all the input values were passed to the program. All user input can be checked in this event block. Sending a warning or an error message in the event block makes all the screen fields ready for input once again.

Alternative 7

... ON *{* HELP-REQUEST *|* VALUE-REQUEST *}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*

Effect

The two events ON HELP-REQUEST and ON VALUE-REQUEST are raised by the dynpro events [POH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpoh_glosry.htm "Glossary Entry") and [POV](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpov_glosry.htm "Glossary Entry") of a selection screen if, for the input field of a parameter para or one of the input fields of a [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry") selcrit, the field help F1 or the input help F4 was called. Other [selection events](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are not raised.

In the event blocks, a self-defined field or input field can be programmed, which overrides any helps defined in ABAP Dictionary.

Notes

-   These event blocks can only be implemented for fields of the selection screen that are defined in the same ABAP program and not in any associated [logical database](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").
    
-   The events for the field help and input help do not transport data between the selection screen and the ABAP program. As with general [dynpros](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry"), suitable function modules such as RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE must be used for this. The parameters and selection criteria changed for the input help are transported to the selection screen.
    

Alternative 8

... ON EXIT-COMMAND

Effect

This event is raised if the user has called one of the functions Back, Exit, or Cancel. Any cleanup actions can be executed in this event block.

Example

This [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") defines a standard selection screen and a further selection screen. In the event blocks AT SELECTION-SCREEN, the input in the selection screens can be specially handled using the evaluation of the name p\_carrid and the [dynpro number](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_number_glosry.htm "Glossary Entry") in sy-dynnr.

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
![Example](exa.gif "Example") [Selection screens, processing blocks and radio buttons](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_at_sel_on_abexa.htm)
![Example](exa.gif "Example") [Selection Screens, Field Help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f1_help_abexa.htm)
![Example](exa.gif "Example") [Selection Screens, Input Help](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensel_screen_f4_help_abexa.htm)