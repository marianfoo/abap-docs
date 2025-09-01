  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen.htm) → 

Calling Selection Screens

[Selection screens](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") can be called as follows:

-   by the statement [SUBMIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit.htm)

-   as a selection screen of a [report transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreport_transaction_glosry.htm "Glossary Entry")

-   as the initial dynpro of a [dialog transaction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendialog_transaction_glosry.htm "Glossary Entry")

-   by the statement [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_selection_screen.htm)

Each call starts [selection screen processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). The display language of the selection screen is determined by the current [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry"), which can be set with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_locale.htm).

Called by SUBMIT

When an [executable program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is called using the statement SUBMIT, the standard selection screen or the selection screen specified in the statement is called between the events [INITIALIZATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinitialization.htm) and [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapstart-of-selection.htm), if it contains at least one input field or pushbutton.

Called by report transaction

When a report transaction is executed, the associated executable program is also started internally using SUBMIT and the selection screen defined for the transaction is called between the events INITIALIZATION and START-OF-SELECTION.

Called by dialog transaction

If a selection screen of the associated program is defined as the initial dynpro in a dialog transaction, the transaction code is used to call the selection screen when this program is executed. This screen is not handled like the first dynpro in a [dynpro sequence](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") however (see [Selection Screen Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_events.htm)).

Notes

-   Selection screens should not be used as the initial dynpro of a dialog transaction, since this does not generally produce the expected program behavior.

-   The display language of a general dynpro is the [logon language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogon_language_glosry.htm "Glossary Entry") and not the [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry").

Continue
[CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_selection_screen.htm)