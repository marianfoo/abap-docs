---
title: "Syntax"
description: |
  ... DEFAULT val LOWER CASE MATCHCODE OBJECT search_help MEMORY ID pid VALUE CHECK ... Extras: 1. ... DEFAULT val(#!ABAP_ADDITION_1@1@) 2. ... LOWER CASE(#!ABAP_ADDITION_2@2@) 3. ... MATCHCODE OBJECT search_help(#!ABAP_ADDITION_3@3@) 4. ... MEMORY
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_value.htm"
abapFile: "abapparameters_value.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapparameters", "value"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen.htm) →  [Creating Selection Screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_create.htm) →  [PARAMETERS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters.htm) → 

PARAMETERS - value\_options

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_shortref.htm)

Syntax

... *\[*DEFAULT val*\]*
    *\[*LOWER CASE*\]*
    *\[*MATCHCODE OBJECT search\_help*\]*
    *\[*MEMORY ID pid*\]*
    *\[*VALUE CHECK*\]* ...

Extras:

[1\. ... DEFAULT val](#!ABAP_ADDITION_1@1@)
[2\. ... LOWER CASE](#!ABAP_ADDITION_2@2@)
[3\. ... MATCHCODE OBJECT search\_help](#!ABAP_ADDITION_3@3@)
[4\. ... MEMORY ID pid](#!ABAP_ADDITION_4@4@)
[5\. ... VALUE CHECK](#!ABAP_ADDITION_5@5@)

Effect

Addition 1

... DEFAULT val

Effect

This addition defines a start value for the content of the parameter para. The start value val can either be specified as a literal or as a predefined data object.

If the data type of the specified start value does not match the data type of the declaration, it is converted in accordance with the conversion rules. Without the addition DEFAULT, the [initial value](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninitial_value_glosry.htm "Glossary Entry") associated with the data type is used as a start value.

There are two times when a start value can be passed to the parameter:

-   When an executable program is started using [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm), all the values val specified at program start using DEFAULT are passed between the events [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapload-of-program.htm) and [INITIALIZATION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinitialization.htm) to the associated parameters para.
    
-   If a program is not loaded into an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry") using a SUBMIT call, but using a [dialog](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendialog_transaction_glosry.htm "Glossary Entry") or a [OO transaction](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenoo_transaction_glosry.htm "Glossary Entry"), or in an external procedure call instead, all the values val specified using DEFAULT are passed to the associated parameters para when any selection screen is called for the first time using [CALL SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_selection_screen.htm) before the event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapat_selection-screen.htm).
    

In both cases, all the parameters are supplied with their start values, irrespective of the selection screen on which they are defined. If a parameter is not initial at the time the data is passed, the start value will not be passed.

Notes

-   The associated input field on the selection screen is only filled with the start value if the value for para is no longer changed before the selection screen is sent. The system displays the exact value that the parameter has at the end of processing of the event AT SELECTION-SCREEN OUTPUT.
    
-   If start values are specified, these must have the internal format of the ABAP values, and not the output format of the screen display.
    

Addition 2

... LOWER CASE

Effect

This addition prevents the content of character-like fields from being converted to uppercase letters when the input field on the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry") is transported to the data object para in the program and vice versa.

The addition LOWER CASE cannot be combined with the additions [AS CHECKBOX](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm) or [RADIOBUTTON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm).

Addition 3

... MATCHCODE OBJECT search\_help

Effect

This addition associates the input field of the parameter with a search help search\_help from ABAP Dictionary. The name of the search help must be specified directly. The input help key is displayed for the input field of the parameter on the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry"). When the input help (F4) is requested, the hit list from the search help is displayed to the user. When an entry is selected, the corresponding value is placed in the input field. If no search help for the specified name exists in ABAP Dictionary, a message is displayed in the status line when the input help is requested.

The addition MATCHCODE OBJECT cannot be combined with the additions [AS CHECKBOX](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm) or [RADIOBUTTON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm).

Note

The predecessors of the search helps in ABAP Dictionary were called matchcode objects. This is why this addition has the name MATCHCODE OBJECT. Matchcode objects that have not yet been replaced by search helps are still supported by this addition.

Example

Associating the parameter p\_carrid with a suitable search help. When the input help is selected on the selection screen, a list with the names of the airline carriers is displayed. If a name is selected, the corresponding abbreviation is placed in the input field.

PARAMETERS p\_carrid TYPE s\_carr\_id
           MATCHCODE OBJECT demo\_f4\_de.

Addition 4

... MEMORY ID pid

Effect

This addition associates the input field of the parameter with a [SPA/GPA parameter](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenspa_gpa_parameter_1_glosry.htm "Glossary Entry") in the [user memory](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_memory_glosry.htm "Glossary Entry"). The ID pid of the SPA/GPA parameter must be specified directly and it can contain a maximum of 20 characters.

When the selection screen is called, the input field is filled with the current value of the SAP/GPA parameter in the user memory, provided the data object para is initial after processing of the event [AT SELECTION-SCREEN OUTPUT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselection-screen.htm). Otherwise, the value of para is displayed. If there is a user action on the selection screen, the content of the input field is assigned to the SPA/GPA parameter in the user memory. If no SPA/GPA parameter exists for the specified ID, it is created.

If the specified ID pid is not in the database table TPARA, the extended program check reports an error.

Note

The addition DEFAULT overrides the addition MEMORY ID.

Example

The parameter p\_prog is associated with the SPA/GPA parameter RID, which in turn is associated with the input field for the program name in the [screens](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry") of [ABAP Workbench](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). Accordingly, the input field of the parameter is filled with the name of the program last processed.

PARAMETERS p\_prog TYPE sy-repid MEMORY ID rid.

Addition 5

... VALUE CHECK

Effect

This addition can only be specified if the type of the parameter is defined using a reference to a data type from ABAP Dictionary.

If a user action is performed on the [selection screen](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_screen_glosry.htm "Glossary Entry"), the current content of the input field is checked against any [fixed values](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_value_glosry.htm "Glossary Entry") defined in the domain of the data type. If the data type is a component of a [foreign key table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_table_glosry.htm "Glossary Entry"), a check against the check table is executed. If the check is not successful, an [error message](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenerror_message_glosry.htm "Glossary Entry") is displayed in the status line of the selection screen. If the program was called using [SUBMIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapsubmit.htm) without the selection screen being displayed, the screen is displayed if an error occurs.

The addition VALUE CHECK cannot be combined with the additions [AS CHECKBOX](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm), [RADIOBUTTON](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm), [AS LISTBOX](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm), or [NO-DISPLAY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm).

Notes

-   The check against a check table is executed even if the input field is empty. Therefore, it is advisable to use the addition [OBLIGATORY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapparameters_screen.htm) at the same time.
    
-   [Table buffering](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_buffering_glosry.htm "Glossary Entry") is applied to the database reads made by the check.
    

Continue
![Example](exa.gif "Example") [Selection Screens, Value Properties of Parameters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensel_screen_param_value_abexa.htm)