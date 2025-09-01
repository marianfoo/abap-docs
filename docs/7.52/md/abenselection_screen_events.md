  

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