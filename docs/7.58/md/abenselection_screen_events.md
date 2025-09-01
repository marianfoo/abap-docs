  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Processing%2C%20ABENSELECTION_SCREEN_EVENTS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Processing

Selection screen processing encapsulates the [dynpro flow logic](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_flow_logic_glosry.htm "Glossary Entry") together with the sending of the [selection screen](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_glosry.htm "Glossary Entry"). No dialog modules of the program are called. Instead, a series of [selection screen events](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are raised for which event blocks can be programmed. [PBO](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpbo_glosry.htm "Glossary Entry") processing raises the event

-   [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_selection-screen.htm) [OUTPUT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_selection-screen_events.htm)

[PAI](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpai_glosry.htm "Glossary Entry") processing raises a number of different events, depending on the user action.

-   [AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_selection-screen.htm) [...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_selection-screen_events.htm)

Selection screen processing of a displayed selection screen is ended only by selection of the following functions of the [GUI status](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_screen_overview.htm):

-   Execute or Execute + Print
    
    Triggers the selection screen events of PAI processing. After this, the event [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapstart-of-selection.htm) is raised for standard selection screens called using [SUBMIT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsubmit.htm). For selection screens called using [dialog transactions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendialog_transaction_glosry.htm "Glossary Entry"), the program is ended. A call in the program resumes the program after the statement [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_selection_screen.htm).
    
-   Back, Exit, or Cancel
    
    Triggers the event AT SELECTION-SCREEN ON EXIT-COMMAND only. After this, the program is ended for standard selection screens called using SUBMIT and dialog transactions. Otherwise, sy-subrc is set to 4 and the program resumes after the statement CALL SELECTION-SCREEN.
    

For all other user actions, the selection screen is called again automatically after selection screen processing is ended.

Hints

-   The selection screen processing also encapsulates the processing of the [function codes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_code_glosry.htm "Glossary Entry") assigned to the control elements of the selection screen. The function code that raises PAI processing is placed in the component ucomm of an [interface work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") sscrfields with the type of the structure SSCRFIELDS. If an interface work area of this type is declared in a program using the statement [TABLES](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaptables.htm), the function code can be accessed. It is not advisable to access the system field sy-ucomm, however, since it is not possible to guarantee that it has the same value as sscrfields-ucomm in all situations.
-   Whether a program resumes depends on the function code that is contained in the UCOMM component of the [interface work area](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninterface_work_area_glosry.htm "Glossary Entry") SSCRFIELDS at the end of PAI processing. If this is declared using TABLES and if this component is set to the value ONLI (for example, during processing of the standard selection screen of a program called using SUBMIT) and this value is assigned to the function Execute, the event START-OF-SELECTION is raised after selection screen processing. Overwrites of the system field sy-ucomm, however, are ignored.
-   To avoid ending the program following the processing of a selection screen called using a dialog transaction, either the [next dynpro](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennext_dynpro_glosry.htm "Glossary Entry") must be called using [LEAVE TO SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapleave_screen.htm) or a new [dynpro sequence](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") called using [CALL SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcall_screen.htm) during selection screen processing. The statement [SET SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_screen.htm) is not sufficient here.
-   In selection screen processing, the statement [LOOP AT SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_screen.htm) can be used to access the properties of screen elements on the selection screen.

Continue
[AT SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_selection-screen.htm)