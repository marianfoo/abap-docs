  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Processing](javascript:call_link\('abenselection_screen_events.htm'\)) →  [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: AT SELECTION-SCREEN, selscreen_event, ABAPAT_SELECTION-SCREEN_EVENTS, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

AT SELECTION-SCREEN, selscreen\_event

[Short Reference](javascript:call_link\('abapat_selection-screen_shortref.htm'\))

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

These additions allow the individual evaluation of specific elements of the [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") of the program. The information about which selection screen raised the event is in the system field sy-dynnr.

Alternative 1   

... OUTPUT

Effect

This event is raised by the dynpro event [PBO](javascript:call_link\('abenpbo_glosry.htm'\) "Glossary Entry") of a selection screen. In the event block, the selection screen can be prepared using assignments to the data objects of parameters and selection criteria and using dynamic screen modifications.

Hints

-   The assignments to input fields in the event block AT SELECTION-SCREEN OUTPUT always affect the selection screen and overwrite the user input from previous displays of the same selection screen. Assignments in the event blocks [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) or [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)), on the other hand, only have an effect the first time the program starts.
-   The statement [MODIFY SCREEN](javascript:call_link\('abapmodify_screen.htm'\)) can be used during the event AT SELECTION-SCREEN OUTPUT to modify properties of screen elements of the selection screen.

Example

The following section of an executable program modifies an input field of a selection screen declared using [PARAMETERS](javascript:call_link\('abapparameters.htm'\)). The field input is made invisible using the characters \*\*\*..., which can be used for example, for entering a password.

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

Hint

If a user action takes place in the dialog box for the multiple selection of a selection criterion selcrit, the entries of the [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") are passed to the program, line by line. For each line, the event AT SELECTION-SCREEN ON selcrit is raised.

Alternative 3   

... ON END OF selcrit

Effect

This event is raised after the selection table selcrit is passed completely to the program after a user action in the dialog box for the multiple selection has taken place. The entire selection table can be checked in this event block.

Alternative 4   

... ON BLOCK block

Effect

This event is raised by the dynpro event PAI of a selection screen if all the input fields of a block block of the selection screen were passed to the ABAP program. The user input can be checked in the event block. Sending a warning or an error message in the event block makes all the fields of the block block ready for input again.

Executable Example

[Block Processing and Radio Button Processing](javascript:call_link\('abensel_screen_at_sel_on_abexa.htm'\))

Alternative 5   

... ON RADIOBUTTON GROUP group

Effect

This event is raised by the dynpro event [PAI](javascript:call_link\('abenpai_glosry.htm'\) "Glossary Entry") of a selection screen if all the fields of a radio button group group of the selection screen were passed to the ABAP program. The user input can be checked in this event block. Sending a [warning](javascript:call_link\('abenwarning_glosry.htm'\) "Glossary Entry") or [error message](javascript:call_link\('abenerror_message_glosry.htm'\) "Glossary Entry") in the event block makes all the radio buttons of the group group ready for input again.

Hint

The individual fields of a radio button group are not passed individually and do not raise the event AT SELECTION-SCREEN ON par.

Executable Example

[Block Processing and Radio Button Processing](javascript:call_link\('abensel_screen_at_sel_on_abexa.htm'\))

Alternative 6   

... *{* *}*

Effect

The event AT SELECTION-SCREEN itself is raised as the last event in selection screen processing if all the input values were passed to the program. All user input can be checked in this event block. Sending a warning or an error message in the event block makes all the screen fields ready for input again.

Alternative 7   

... ON *{* HELP-REQUEST *|* VALUE-REQUEST *}* FOR *{*para*|*selcrit-low*|*selcrit-high*}*

Effect

The two events ON HELP-REQUEST and ON VALUE-REQUEST are raised by the dynpro events [POH](javascript:call_link\('abenpoh_glosry.htm'\) "Glossary Entry") and [POV](javascript:call_link\('abenpov_glosry.htm'\) "Glossary Entry") of a selection screen if, for the input field of a parameter para or one of the input fields of a [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry") selcrit, the field help F1 or the input help F4 was called. Other [selection events](javascript:call_link\('abenselection_screen_event_glosry.htm'\) "Glossary Entry") are not raised.

In the event blocks, a self-defined field or input field can be programmed, which overrides any helps defined in ABAP Dictionary. The parameters and selection criteria changed in the event blocks for ON VALUE-REQUEST are transported to the respective fields of the selection screen.

Hints

-   These event blocks can only be implemented for fields of the selection screen that are defined in the same ABAP program and not in any linked [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry").
-   During the events for the field help and input help no data is transported from the selection screen to the ABAP program. As with general [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), suitable function modules such as RS\_SELECTIONSCREEN\_READ and RS\_SELECTIONSCREEN\_UPDATE must be used.

Executable Examples

-   [Selection Screens - Field Help](javascript:call_link\('abensel_screen_f1_help_abexa.htm'\))
-   [Selection Screens - Input Help for Parameters](javascript:call_link\('abensel_screen_f1_help_abexa.htm'\))

Alternative 8   

... ON EXIT-COMMAND

Effect

This event is raised if the user has called one of the functions Back, Exit, or Cancel. Any cleanup actions can be executed in this event block.

Example

The following section of an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") defines a standard selection screen and a further selection screen. In the event blocks AT SELECTION-SCREEN, the input in the selection screens can be specially handled using the evaluation of the name p\_carrid and the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") in sy-dynnr.

\* Global data
TABLES sscrfields.
DATA: spfli\_tab TYPE TABLE OF spfli,
      spfli\_wa  LIKE LINE  OF spfli\_tab.
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
![Example](exa.gif "Example") [Selection Screens - Block Processing and Radio Button Processing](javascript:call_link\('abensel_screen_at_sel_on_abexa.htm'\))
![Example](exa.gif "Example") [Selection Screens - Field Help](javascript:call_link\('abensel_screen_f1_help_abexa.htm'\))
![Example](exa.gif "Example") [Selection Screens - Input Help for Parameters](javascript:call_link\('abensel_screen_f4_help_abexa.htm'\))