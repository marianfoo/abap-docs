---
title: "Syntax"
description: |
  ... USING SELECTION-SCREEN dynnr VIA SELECTION-SCREEN selscreen_parameters(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm)... Additions: 1. ... USING SELECTION-SCREEN dynnr(#!ABAP_ADDITION_1@1@) 2. ... VIA SELECTION
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_interface.htm"
abapFile: "abapsubmit_interface.htm"
keywords: ["select", "do", "if", "try", "catch", "data", "abapsubmit", "interface"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SUBMIT%2C%20selscreen_options%2C%20ABAPSUBMIT_INTERFACE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SUBMIT, selscreen\_options

Syntax

... *\[*USING SELECTION-SCREEN dynnr*\]*
    *\[*VIA SELECTION-SCREEN*\]*
    *\[*[selscreen\_parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm)*\]*...

Additions:

[1\. ... USING SELECTION-SCREEN dynnr](#!ABAP_ADDITION_1@1@)
[2\. ... VIA SELECTION-SCREEN](#!ABAP_ADDITION_2@2@)

Effect

The addition USING SELECTION-SCREEN specifies the [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry") and VIA SELECTION-SCREEN determines whether it is displayed. The additions [selscreen\_parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm) supply values to the parameters and selection criteria, as well as the dynamic selection of the called selection screen.

The values are passed to the selection screen between the events [INITIALIZATION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinitialization.htm) and [AT SELECTION SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_selection-screen.htm). The following hierarchy applies to the passing of the values:

1.  First, the [selection screen variant](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenvariant_glosry.htm "Glossary Entry") of the addition USING SELECTION-SET is passed, which sets all parameters and selection criteria to the values of the variant. The values previously set in the called program are overwritten.
2.  The values of the table of the addition WITH SELECTION-TABLE are then passed. All parameters and selection criteria specified here are overwritten accordingly.
3.  Finally, the values of the additions WITH sel value are passed. All parameters and selection criteria specified here are overwritten accordingly. If the addition WITH sel value is used more than once for the same parameter, the parameter is overwritten with the last specified value. If the addition WITH sel value is used more than once for the same [selection criterion](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_criterion_glosry.htm "Glossary Entry"), a [ranges table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm "Glossary Entry") with the corresponding number of lines is passed.

[Dynamic selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_selection_glosry.htm "Glossary Entry") are supplied independently of this hierarchy.

Hints

-   The options for parameter passing can be used to view a selection screen as a parameter interface of an [executable program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexecutable_program_glosry.htm "Glossary Entry"). This applies in particular to background [selection screen processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselscreen_processing_glosry.htm "Glossary Entry") and to parameters and selection criteria defined without screen elements using the addition [NO-DISPLAY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapparameters_screen.htm)
-   When data is passed, any adjustments made to the screen format, such as reductions and the execution of [conversion exits](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry"), should not be executed for fields for which there are no screen elements on the selection screen. This applies to all parameters and selection criteria defined with NO DISPLAY. It also applies to all lines in a ranges table with the exception of the first line.
-   The additions selscreen\_parameters only take effect the first time the called program is executed. If a selection screen is displayed in the called program, the runtime framework calls the program again after it has ended, replacing the values specified in selscreen\_parameters with the previous input values.

Addition 1   

... USING SELECTION-SCREEN dynnr

Effect

This addition defines which [selection screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_glosry.htm "Glossary Entry") is called. Here, dynnr is a data object that must contain the [dynpro number](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_number_glosry.htm "Glossary Entry") of a selection screen defined in the called program when the statement SUBMIT is executed.

-   If the addition USING SELECTION-SCREEN is omitted or the dynpro number 1000 is specified, the standard selection screen is called. If no standard selection screen is defined in the called program, no selection screen is called.
-   If a dynpro number not equal to 1000 is specified in the addition USING SELECTION-SCREEN, the corresponding standalone selection screen is called. If no selection screen with this dynpro number is defined in the called program, an uncatchable exception is raised.

Addition 2   

... VIA SELECTION-SCREEN

Effect

If this addition is specified, the selection screen is displayed on the screen, otherwise background selection screen processing takes place. In background selection screen processing, the [selection screen events](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen_event_glosry.htm "Glossary Entry") are raised without the selection screen being displayed on the screen.

Executable Example

[Program Calls, Filling the Selection Screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubmit_selscreen_abexa.htm)

Continue
[SUBMIT, selscreen\_parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm)
![Example](exa.gif "Example") [Program Calls, Filling the Selection Screen](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensubmit_selscreen_abexa.htm)