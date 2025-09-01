# ABAP Keyword Documentation / ABAP − Reference / SAP GUI User Dialogs / Selection Screens / Calling Selection Screens

Included pages: 4


### abenselection_screen_call.htm

---
title: "Calling Selection Screens"
description: |
  Selection screens(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm 'Glossary Entry') can be called as follows: -   by the statement SUBMIT(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm) -   as a selection screen of a report t
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_call.htm"
abapFile: "abenselection_screen_call.htm"
keywords: ["select", "do", "if", "try", "abenselection", "screen", "call"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) → 

Calling Selection Screens

[Selection screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") can be called as follows:

-   by the statement [SUBMIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit.htm)

-   as a selection screen of a [report transaction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenreport_transaction_glosry.htm "Glossary Entry")

-   as the initial dynpro of a [dialog transaction](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendialog_transaction_glosry.htm "Glossary Entry")

-   by the statement [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection_screen.htm)

Each call starts [selection screen processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). The display language of the selection screen is determined by the current [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry"), which can be set with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_locale.htm).

Called by SUBMIT

When an [executable program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenexecutable_program_glosry.htm "Glossary Entry") is called using the statement SUBMIT, the standard selection screen or the selection screen specified in the statement is called between the events [INITIALIZATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinitialization.htm) and [START-OF-SELECTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapstart-of-selection.htm), if it contains at least one input field or pushbutton.

Called by report transaction

When a report transaction is executed, the associated executable program is also started internally using SUBMIT and the selection screen defined for the transaction is called between the events INITIALIZATION and START-OF-SELECTION.

Called by dialog transaction

If a selection screen of the associated program is defined as the initial dynpro in a dialog transaction, the transaction code is used to call the selection screen when this program is executed. This screen is not handled like the first dynpro in a [dynpro sequence](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_sequence_glosry.htm "Glossary Entry") however (see [Selection Screen Processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_events.htm)).

Notes

-   You should not use a selection screen as the initial screen of a dialog transaction, since this does not generally produce the expected program behavior.

-   The display language of a general dynpro is the [logon language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlogon_language_glosry.htm "Glossary Entry") and not the [text environment language](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_env_langu_glosry.htm "Glossary Entry").

Continue
[CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection_screen.htm)


### abapcall_selection_screen.htm

---
title: "CALL SELECTION-SCREEN"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection-screen_shortref.htm) Syntax CALL SELECTION-SCREEN dynnr STARTING AT col1 lin1 ENDING   AT col2 lin2 USING SELECTION-SET variant. Extras: 1. ... STARTING AT col1 lin1 ENDING A
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection_screen.htm"
abapFile: "abapcall_selection_screen.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapcall", "selection", "screen"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Calling Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_call.htm) → 

CALL SELECTION-SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection-screen_shortref.htm)

Syntax

CALL SELECTION-SCREEN dynnr
                      *\[*STARTING AT col1 lin1
                      *\[*ENDING   AT col2 lin2*\]**\]*
                      *\[*USING SELECTION-SET variant*\]*.

Extras:

[1\. ... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... USING SELECTION-SET variant](#!ABAP_ADDITION_2@2@)

Effect

This statement calls the [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_number_glosry.htm "Glossary Entry") specified in dynnr and starts [selection screen processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). dynnr expects a data object of the type n and the length 4.

The statement CALL SELECTION-SCREEN accesses the selection screens of the respective [main program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current program group. These screens work with the parameters and selection criteria of the main program and trigger the selection screen processing in the main program. The main program is generally the current program, except for the case when calling a selection screen in an externally called subroutine. An unhandleable exception is raised if the specified selection screen is not contained in the main program of the program group.

Any selection screen of the main program can be called, in particular the standard selection screen. The default setting is the display of the selection screen in the GUI window of the preceding dynpro.

System Fields

sy-subrc

Meaning

0 (means:

The user selected the function Execute or Execute + Print on the selection screen.

4

User chose Back, Exit, or Cancel on the selection screen.

Notes

-   The statement [CALL SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_screen.htm) cannot be used to call selection screens, since otherwise the proper execution of the selection screen processing cannot be guaranteed.
    
-   If the called selection screen is displayed in a dialog window, it is advisable to use the addition AS WINDOW when specifying the selection screen.
    

Addition 1

... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*

Effect

The addition STARTING AT creates a modal dialog box and the selection screen is displayed in it. The upper left corner of the dialog box is determined by the values in col1 and lin1 for column and row. These values refer to the GUI window with the [popup level](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpop-up_level_glosry.htm "Glossary Entry") 0. The bottom right corner is either set automatically or it can be specified in col2 and lin2 after ENDING AT. col1, lin1, col2, and lin2 expect data objects of the type i. The values of col1, lin1 should be less than col2, lin2, otherwise the behavior will be undefined.

Addition 2

... USING SELECTION-SET variant

Effect

The addition USING SELECTION-SET populates the parameters and selection criteria of the selection screen with the values of a [selection screen variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariant_2_glosry.htm "Glossary Entry") specified in variant. The values are passed to the associated data objects of the program immediately before the event [ATSELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen.htm). variant expects a [character-like data object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") which, when the statement is executed, contains the name of a [selection screen variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariant_2_glosry.htm "Glossary Entry") of the main program stored for the selection screen in uppercase. If a nonexistent variant or a variant of another selection screen of the main program, is specified, the addition is ignored.

Example

See the example in [SELECTION-SCREEN BEGIN OF SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_normal.htm).

Continue
![Example](exa.gif "Example") [Selection Screens, Calling Standalone Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensel_screen_call_sel_scr_abexa.htm)


### abensel_screen_call_sel_scr_abexa.htm

---
title: "Selection Screens, Calling Standalone Selection Screens"
description: |
  The example demonstrates how to call standalone selection screens. Source Code REPORT demo_call_selection_screen. SELECTION-SCREEN BEGIN OF SCREEN 100. SELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME TITLE tit1. PARAMETERS: cityfr TYPE spfli-cityfrom, cityto TYPE spfli-cityto. SELECTION-SCREEN EN
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensel_screen_call_sel_scr_abexa.htm"
abapFile: "abensel_screen_call_sel_scr_abexa.htm"
keywords: ["select", "do", "method", "class", "abensel", "screen", "call", "sel", "scr", "abexa"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Calling Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_call.htm) →  [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection_screen.htm) → 

Selection Screens, Calling Standalone Selection Screens

The example demonstrates how to call standalone selection screens.

Source Code

REPORT demo\_call\_selection\_screen.
SELECTION-SCREEN BEGIN OF SCREEN 100.
SELECTION-SCREEN BEGIN OF BLOCK sel1 WITH FRAME TITLE tit1.
PARAMETERS: cityfr TYPE spfli-cityfrom,
            cityto TYPE spfli-cityto.
SELECTION-SCREEN END OF BLOCK sel1.
SELECTION-SCREEN END OF SCREEN 100.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
SELECTION-SCREEN INCLUDE BLOCKS sel1.
SELECTION-SCREEN BEGIN OF BLOCK sel2
                          WITH FRAME TITLE tit2.
PARAMETERS: airpfr TYPE spfli-airpfrom,
            airpto TYPE spfli-airpto.
SELECTION-SCREEN END OF BLOCK sel2.
SELECTION-SCREEN END OF SCREEN 500.
CLASS start DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS start IMPLEMENTATION.
  METHOD main.
    tit1 = 'Cities'.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    tit1 = 'Cities for Airports'.
    tit2 = 'Airports'.
    CALL SELECTION-SCREEN 500 STARTING AT 10 10.
    tit1 = 'Cities again'.
    CALL SELECTION-SCREEN 100 STARTING AT 10 10.
    ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  start=>main( ).

Description

In this executable program, two standalone selection screens, 100 and 500, are defined. ‏Selection screen 500 contains the block sel1 of selection screen 100. Note at which events the titles of the individual screens are defined. First, selection screen 100 is called, then 500, and then 100 again.


### abapcall_selection_screen.htm

---
title: "CALL SELECTION-SCREEN"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection-screen_shortref.htm) Syntax CALL SELECTION-SCREEN dynnr STARTING AT col1 lin1 ENDING   AT col2 lin2 USING SELECTION-SET variant. Extras: 1. ... STARTING AT col1 lin1 ENDING A
version: "7.54"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection_screen.htm"
abapFile: "abapcall_selection_screen.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapcall", "selection", "screen"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen.htm) →  [Calling Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_call.htm) → 

CALL SELECTION-SCREEN

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_selection-screen_shortref.htm)

Syntax

CALL SELECTION-SCREEN dynnr
                      *\[*STARTING AT col1 lin1
                      *\[*ENDING   AT col2 lin2*\]**\]*
                      *\[*USING SELECTION-SET variant*\]*.

Extras:

[1\. ... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... USING SELECTION-SET variant](#!ABAP_ADDITION_2@2@)

Effect

This statement calls the [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") with the [dynpro number](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynpro_number_glosry.htm "Glossary Entry") specified in dynnr and starts [selection screen processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"). dynnr expects a data object of the type n and the length 4.

The statement CALL SELECTION-SCREEN accesses the selection screens of the respective [main program](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmain_program_glosry.htm "Glossary Entry") of the current program group. These screens work with the parameters and selection criteria of the main program and trigger the selection screen processing in the main program. The main program is generally the current program, except for the case when calling a selection screen in an externally called subroutine. An unhandleable exception is raised if the specified selection screen is not contained in the main program of the program group.

Any selection screen of the main program can be called, in particular the standard selection screen. The default setting is the display of the selection screen in the GUI window of the preceding dynpro.

System Fields

sy-subrc

Meaning

0 (means:

The user selected the function Execute or Execute + Print on the selection screen.

4

User chose Back, Exit, or Cancel on the selection screen.

Notes

-   The statement [CALL SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcall_screen.htm) cannot be used to call selection screens, since otherwise the proper execution of the selection screen processing cannot be guaranteed.
    
-   If the called selection screen is displayed in a dialog window, it is advisable to use the addition AS WINDOW when specifying the selection screen.
    

Addition 1

... STARTING AT col1 lin1 *\[*ENDING AT col2 lin2*\]*

Effect

The addition STARTING AT creates a modal dialog box and the selection screen is displayed in it. The upper left corner of the dialog box is determined by the values in col1 and lin1 for column and row. These values refer to the GUI window with the [popup level](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpop-up_level_glosry.htm "Glossary Entry") 0. The bottom right corner is either set automatically or it can be specified in col2 and lin2 after ENDING AT. col1, lin1, col2, and lin2 expect data objects of the type i. The values of col1, lin1 should be less than col2, lin2, otherwise the behavior will be undefined.

Addition 2

... USING SELECTION-SET variant

Effect

The addition USING SELECTION-SET populates the parameters and selection criteria of the selection screen with the values of a [selection screen variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariant_2_glosry.htm "Glossary Entry") specified in variant. The values are passed to the associated data objects of the program immediately before the event [ATSELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_selection-screen.htm). variant expects a [character-like data object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharlike_data_object_glosry.htm "Glossary Entry") which, when the statement is executed, contains the name of a [selection screen variant](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvariant_2_glosry.htm "Glossary Entry") of the main program stored for the selection screen in uppercase. If a nonexistent variant or a variant of another selection screen of the main program, is specified, the addition is ignored.

Example

See the example in [SELECTION-SCREEN BEGIN OF SCREEN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselection-screen_normal.htm).

Continue
![Example](exa.gif "Example") [Selection Screens, Calling Standalone Selection Screens](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensel_screen_call_sel_scr_abexa.htm)
