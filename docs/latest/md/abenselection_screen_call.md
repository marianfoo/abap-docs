  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Calls%2C%20ABENSELECTION_SCREEN_CALL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Calls

[Selection screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry") can be called as follows:

-   by the statement [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm)
-   as a selection screen of a [report transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreport_transaction_glosry.htm "Glossary Entry")
-   as the initial dynpro of a [dialog transaction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendialog_transaction_glosry.htm "Glossary Entry")
-   by the statement [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_selection_screen.htm)

Each call starts [selection screen processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). The display language of the selection screen is determined by the current [text environment language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_env_langu_glosry.htm "Glossary Entry"), which can be set with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm).

Called by SUBMIT   

When an [executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is called using the statement SUBMIT, the standard selection screen or the selection screen specified in the statement is called between the events [INITIALIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinitialization.htm) and [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapstart-of-selection.htm), if it contains at least one input field or pushbutton.

Called by Report Transaction   

When a report transaction is executed, the assigned executable program is also started internally using SUBMIT and the selection screen defined for the transaction is called between the events INITIALIZATION and START-OF-SELECTION.

Called by Dialog Transaction   

If a selection screen of the associated program is defined as the initial dynpro in a dialog transaction, the transaction code is used to call the selection screen when this program is executed. This selection screen is not handled like the first dynpro in a [dynpro sequence](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") however (see [Selection Screen Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_events.htm)).

Hints

-   A selection screen should not be used as the initial dynpro of a dialog transaction, since this does not generally produce the expected program behavior.
-   The display language of a general dynpro is the [logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language_glosry.htm "Glossary Entry") and not the [text environment language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_env_langu_glosry.htm "Glossary Entry").

Continue
[CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_selection_screen.htm)