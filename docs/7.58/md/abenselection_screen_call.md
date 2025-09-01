  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Calls%2C%20ABENSELECTION_SCREEN_CALL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Calls

[Selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") can be called as follows:

-   by the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\))
-   as a selection screen of a [report transaction](javascript:call_link\('abenreport_transaction_glosry.htm'\) "Glossary Entry")
-   as the initial dynpro of a [dialog transaction](javascript:call_link\('abendialog_transaction_glosry.htm'\) "Glossary Entry")
-   by the statement [CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\))

Each call starts [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry"). The display language of the selection screen is determined by the current [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry"), which can be set with the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

Called by SUBMIT   

When an [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry") is called using the statement SUBMIT, the standard selection screen or the selection screen specified in the statement is called between the events [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) and [START-OF-SELECTION](javascript:call_link\('abapstart-of-selection.htm'\)), if it contains at least one input field or pushbutton.

Called by Report Transaction   

When a report transaction is executed, the assigned executable program is also started internally using SUBMIT and the selection screen defined for the transaction is called between the events INITIALIZATION and START-OF-SELECTION.

Called by Dialog Transaction   

If a selection screen of the associated program is defined as the initial dynpro in a dialog transaction, the transaction code is used to call the selection screen when this program is executed. This selection screen is not handled like the first dynpro in a [dynpro sequence](javascript:call_link\('abendynpro_sequence_glosry.htm'\) "Glossary Entry") however (see [Selection Screen Processing](javascript:call_link\('abenselection_screen_events.htm'\))).

Hints

-   A selection screen should not be used as the initial dynpro of a dialog transaction, since this does not generally produce the expected program behavior.
-   The display language of a general dynpro is the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") and not the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry").

Continue
[CALL SELECTION-SCREEN](javascript:call_link\('abapcall_selection_screen.htm'\))