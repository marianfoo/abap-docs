  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) →  [Selection Screens - Calls](javascript:call_link\('abenselection_screen_call.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CALL SELECTION-SCREEN, ABAPCALL_SELECTION_SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

CALL SELECTION-SCREEN

[Short Reference](javascript:call_link\('abapcall_selection-screen_shortref.htm'\))

Syntax

CALL SELECTION-SCREEN dynnr
                      *\[*STARTING AT col1 lin1
                      *\[*ENDING   AT col2 lin2*\]**\]*
                      *\[*USING SELECTION-SET variant*\]*.

Additions:

[1\. ... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... USING SELECTION-SET variant](#!ABAP_ADDITION_2@2@)

Effect

This statement calls the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") with the [dynpro number](javascript:call_link\('abendynpro_number_glosry.htm'\) "Glossary Entry") specified in dynnr and starts its [selection screen processing](javascript:call_link\('abenselscreen_processing_glosry.htm'\) "Glossary Entry"). dynnr expects a data object of the type n and the length 4.

The statement CALL SELECTION-SCREEN accesses the selection screens of the respective [main program](javascript:call_link\('abenmain_program_glosry.htm'\) "Glossary Entry") of the current program group. These selection screens work with the parameters and selection criteria of the main program and raise the selection screen processing in the main program. The main program is generally the current program, except when calling a selection screen in an externally called subroutine. An uncatchable exception is raised if the specified selection screen is not contained in the main program of the program group.

Any selection screen of the main program can be called, in particular the standard selection screen. The default setting is the display of the selection screen in the GUI window of the preceding dynpro.

System Fields

sy-subrc

Meaning

0

The user selected the function Execute or Execute + Print on the selection screen.

4

The user selected Back, Exit, or Cancel on the selection screen.

Hints

-   The statement [CALL SCREEN](javascript:call_link\('abapcall_screen.htm'\)) cannot be used to call selection screens, since otherwise the proper execution of the selection screen processing cannot be guaranteed.
-   If the called selection screen is displayed in a dialog box, it is advisable to use the addition AS WINDOW when specifying the selection screen.

Addition 1   

... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*

Effect

The addition STARTING AT creates a modal dialog box and displays the selection screen. The upper left corner of the dialog box is determined by the values in col1 and lin1 for column and line. These values refer to the GUI window with the [popup level](javascript:call_link\('abenpop-up_level_glosry.htm'\) "Glossary Entry") 0. The bottom right corner is either set automatically or it can be specified in col2 and lin2 after ENDING AT. col1, lin1, col2, and lin2 expect data objects of the type i. The values of col1, lin1 should be less than col2, lin2, otherwise the behavior will be undefined.

Addition 2   

... USING SELECTION-SET variant

Effect

The addition USING SELECTION-SET fills the parameters and selection criteria of the selection screen with the values of a [selection screen variant](javascript:call_link\('abenvariant_glosry.htm'\) "Glossary Entry") specified in variant. The values are passed to the associated data objects of the program immediately before the event [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\)). variant expects a [character-like data object](javascript:call_link\('abencharlike_data_object_glosry.htm'\) "Glossary Entry") which, when the statement is executed, contains the name of a [selection screen variant](javascript:call_link\('abenvariant_glosry.htm'\) "Glossary Entry") of the main program stored for the selection screen in uppercase letters. If a nonexistent variant or a variant of another selection screen of the main program is specified, the addition is ignored.

Example

See the example in [SELECTION-SCREEN BEGIN OF SCREEN](javascript:call_link\('abapselection-screen_normal.htm'\)).

Continue
![Example](exa.gif "Example") [Selection Screens - Calling Standalone Selection Screens](javascript:call_link\('abensel_screen_call_sel_scr_abexa.htm'\))