  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

Logical Databases and Selection Screens in Release 3.0

[1\. Checkbox parameters](#!ABAP_MODIFICATION_1@1@)
[2\. Matchcode selection with logical databases](#!ABAP_MODIFICATION_2@2@)
[3\. SUBMIT WITH SELECTION-TABLE](#!ABAP_MODIFICATION_3@3@)
[4\. Self-programmed F1 and F4 on selection screens](#!ABAP_MODIFICATION_4@4@)
[5\. Date calculations in variants](#!ABAP_MODIFICATION_5@5@)
[6\. SUBMIT: Runtime information from function module](#!ABAP_MODIFICATION_6@6@)
[7\. No more blank selection screens](#!ABAP_MODIFICATION_7@7@)
[8\. New OK code field SSCRFIELDS-UCOMM on selection screens](#!ABAP_MODIFICATION_8@8@)
[9\. Integration of data model](#!ABAP_MODIFICATION_9@9@)
[10\. Function modules: User's own GUI status on selection screen](#!ABAP_MODIFICATION_10@10@)
[11\. PARAMETERS as radio buttons](#!ABAP_MODIFICATION_11@11@)
[12\. Size of selection screens increased to 200 lines](#!ABAP_MODIFICATION_12@12@)
[13\. SELECTION-SCREEN NEW-PAGE no longer used](#!ABAP_MODIFICATION_13@13@)
[14\. Selection screen versions instead of template screens](#!ABAP_MODIFICATION_14@14@)
[15\. Blocks (with or without boxes) on selection screens](#!ABAP_MODIFICATION_15@15@)
[16\. Ability to set comments on selection screens at runtime](#!ABAP_MODIFICATION_16@16@)
[17\. User's own pushbuttons on selection screens](#!ABAP_MODIFICATION_17@17@)
[18\. Dynamic selections on selection screens](#!ABAP_MODIFICATION_18@18@)
[19\. Ability to set box title at runtime](#!ABAP_MODIFICATION_19@19@)
[20\. Symbolic positions with SELECTION-SCREEN statements](#!ABAP_MODIFICATION_20@20@)
[21\. User's own pushbuttons in the application toolbar](#!ABAP_MODIFICATION_21@21@)
[22\. Nested blocks on selection screens](#!ABAP_MODIFICATION_22@22@)
[23\. Return to the selection screen after F3 in basic list](#!ABAP_MODIFICATION_23@23@)
[24\. Passing report-specific selections to the database](#!ABAP_MODIFICATION_24@24@)
[25\. Simplified SELECT-OPTIONS on the selection screen](#!ABAP_MODIFICATION_25@25@)
[26\. Field selection.](#!ABAP_MODIFICATION_26@26@)
[27\. Passing dynamic selections with SUBMIT](#!ABAP_MODIFICATION_27@27@)
[28\. User-specific variables in variants](#!ABAP_MODIFICATION_28@28@)

Modification 1

Checkbox Parameters
[PARAMETERS](javascript:call_link\('abapparameters.htm'\)) now has an addition called AS CHECKBOX which can be used to display a parameter on the selection screen as a checkbox.

Modification 2

Matchcode Selection with Logical Databases
The addition AS MATCHCODE STRUCTURE of PARAMETERS makes it possible to use matchcode selection for a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") (for example, xxx). The standard selection screen contains a box with input fields for matchcode ID and search string. In the [database program](javascript:call_link\('abendatabase_program_glosry.htm'\) "Glossary Entry"), selected records can be processed in the subroutine PUT\_xxx\_MATCHCODE. Matchcode selections are a particularly good way of improving performance, since they can be used to restrict the amount of data selected significantly.

Modification 3

SUBMIT rep WITH SELECTION-TABLE seltab.
The addition WITH SELECTION-TABLE seltab makes it possible to specify values passed by WITH clause to the parameters or selection criteria of a report in an internal table. Here, the table seltab has the structure of RSPARAMS. The function module RS\_REFRESH\_FROM\_SELECT\_OPTIONS can be used to fill the table with the contents of the current parameters or selection criteria (this FM replaces the keyword [REFRESH seltab FROM SELECT-OPTIONS](javascript:call_link\('abaprefresh_itab.htm'\))). For further information, see the documentation on [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

Modification 4

Self-Programmed F1 and F4 on [Selection Screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry")
Self-programmed input help (F4) and field help (F1) is now available for both database-specific and report-specific parameters and selection criteria. For database-specific objects, this is done using an addition (VALUE-REQUEST ... or HELP-REQUEST ...) with [PARAMETERS](javascript:call_link\('abapparameters.htm'\)) and [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)). For report-specific objects, the event to be processed is specified directly at F1 or F4 ([AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) ON VALUE-REQUEST FOR ... or [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) ON HELP-REQUEST FOR ...).

Modification 5

Date Calculations in Variants
In addition to the variables available in table TVARV for parameters or selection criteria in variants (for retrieving values from table TVARV at runtime), it is now possible to calculate dates or periods for parameters/selection criteria of the type date at runtime. Examples include "current date", "last day of previous month", and "first quarter of current year".

Modification 6

SUBMIT: Runtime Information from Function Module
The function module RS\_SUBMIT\_INFO returns information about the current report execution process in the structure RSSUBINFO. It is specifically intended for use during the processing of [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). It indicates, for example, whether the selection screen is processed when the report is executed, when variants are defined, or when scheduling a background job. This is important, for example, if the user uses his or her own GUI status on the selection screen.

Modification 7

No More Blank Selection Screens
Previously, selection screens were generated and processed even if no parameters or selection criteria were defined. To reduce the number of selection screens, this is no longer the case. Events previously triggered by the selection screen ([AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)), [AT SELECTION-SCREEN OUTPUT](javascript:call_link\('abapat_selection-screen.htm'\))) are not processed.

Modification 8

New OK Code Field SSCRFIELDS-UCOMM on Selection Screens
The previous OK code field SY-UCOMM had the drawback of being destroyed by every CALL SCREEN. For this reason, it has been replaced by the field SSCRFIELDS-UCOMM from ABAP Dictionary. Unlike SY-UCOMM, the structure SSCRFIELDS must be declared using [TABLES](javascript:call_link\('abaptables.htm'\)) when reading or manipulating SSCRFIELDS-UCOMM.
Only the procedure for setting SY-UCOMM in the program has changed; SY-UCOMM must now be set instead. Setting SY-UCOMM in the program, however, no longer fulfills the intended purpose, and SSCRFIELDS-UCOMM now needs to be set instead.

Modification 9

Integration of the Data Model
In transaction SE36 (Logical Databases), the set of views that
refer to a logical database table can be displayed by selecting "Edit" -> "Data Model" -> "Views and Entities". The relevant entities are displayed from the Enterprise Data Model (EDM). After choosing the views, "Data Model" -> "Graphics" can be selected to display the convex wrapper of the relevant entities in the EDM.

Modification 10

Function modules: User's Own GUI Status on Selection Screen
Function modules RS\_SET\_SELSCREEN\_STATUS and RS\_EXTERNAL\_SELSCREEN\_STATUS.
These function modules make it possible to set a separate status for the selection screen or to deactivate function codes from the standard status (for example, if the 'Print' function for the report is not required).
While the function module RS\_SET\_SELSCREEN\_STATUS requires the desired status to belong to the user interface for the report, the function module RS\_EXTERNAL\_SELSCREEN\_STATUS makes it possible to set a status that has been defined externally in a function group.
When a separate status is set, it is best to first get information about the current situation using the function module RS\_SUBMIT\_INFO (see point 6). In this way, the 'Execute' key is not provided instead of the 'Save' key when defining variants.

Modification 11

PARAMETERS as Radio Buttons
Addition RADIOBUTTON GROUP group with [PARAMETERS](javascript:call_link\('abapparameters.htm'\)).
By using this addition, PARAMETERS can be combined together in radio button groups on the selection screen. For further information, see [PARAMETERS](javascript:call_link\('abapparameters.htm'\)).

Modification 12

Size of [Selection Screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") Increased to 200 Lines
Selection screens can now be up to 200 lines long. Since the scroll bar can be used to scroll within a screen, the continuation screens 1001, 1002 ... are no longer necessary.
Benefits: Since all SELECT-OPTIONS and PARAMETERS are on one screen, it is no longer necessary to check carefully that the incorrect field is actually on the current screen when handling errors. Also, the addition 'OBLIGATORY' now applies for all SELECT-OPTIONS or PARAMETERS that were previously on a subsequent screen. This reduces the total number of generated selection screens
Necessary actions: In theory, none. However, new pages previously forced by the SELECTION-SCREEN NEW-PAGE statement may have to be replaced by something else, such as a block (see also points 13 and 14).

Modification 13

[SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) NEW-PAGE is no longer used.
Since continuation screens are no longer used (see point 12), the keyword SELECTION-SCREEN NEW-PAGE is no longer required, but is retained for syntax reasons. However, it now starts a new line instead of a new page.

Modification 14

Selection Screen Versions Instead of Template Screens
The option to define non-standard selection screens by specifying the number of a model screen (belonging to the database access program SAPDBxyz) in the report attributes no longer exists. This has been replaced by selection screen versions. Like model screens, these have a three-character name that is specified on the report attributes screen. By pressing F4 here, it is possible to get a list of all the selection screen versions for the underlying logical database.
The selection screen versions are defined in the database INCLUDE DBxyzSEL using the expressions [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)), BEGIN/ END OF VERSION, and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) EXCLUDE .... The latter is used to specify any objects to be excluded from the selection screen version.

Modification 15

Blocks (with or without Boxes) on Selection Screens
The expression [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) BEGIN/END OF BLOCK block is used to define logical blocks on selection screens. The addition ... WITH FRAME makes it possible to create a box round the block and, for each TITLE addition, a text can be defined for the box. If the new event [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)) ON BLOCK block contains an error dialog, only the fields in that block become ready for input.
The boxes previously created round the database-specific or report-specific parts of the selection screen are no longer required, since the new expressions allow better and more individual grouping options.

Modification 16

Ability to Set Comments on Selection Screens at Runtime
Besides numbered texts, the expression [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) COMMENT now makes it possible to specify field names up to eight characters long. These fields are then created automatically as output fields on the selection screen. The texts must be defined in these comment fields at runtime and can be changed while processing the selection screen.

Modification 17

User's Own Pushbuttons on Selection Screens
The key word [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) PUSHBUTTON ... USER-COMMAND ucom makes it possible to create pushbuttons on the selection screen. As with [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) COMMENT, the text can be defined either statically in the form of a text symbol or dynamically by specifying a field name up to eight characters long.
The field SSCRFIELDS-UCOMM can be read using the accompanying user command ucom in [AT SELECTION-SCREEN](javascript:call_link\('abapat_selection-screen.htm'\)).

Modification 18

Dynamic Selections on Selection Screens
In the database INCLUDE DBxyz, the [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") and the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) DYNAMIC SELECTIONS FOR TABLE dbtab can be used to define 'dynamic selections' for the table dbtab of the logical database xyz. In this case, the key 'Dynamic Selections' appears on the selection screen, if the table dbtab is used in the report. After pressing this key, the user can enter selections for the fields expected by the logical database. The result is passed directly from the logical database to the [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

Note

The set of fields for which dynamic selections are to be allowed can be defined by the logical database in the form of a selection view. These are defined in the workbench or in the editing functions of logical databases. To aid identification, the origin ('SAP' or 'CUS' for 'customer'), the name of the logical database, and a name can be used (which must always be 'STANDARD' for the described functions on the selection screens). When reading the field list, the system first searches for the set with the origin 'CUS'. If it finds nothing, it then searches for the origin 'SAP'. This allows customers to define the optimal set to suit their requirements, if the SAP standard is not suitable.

Modification 19

Ability to Set Box Texts at Runtime
The title of a box defined using [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) BEGIN OF BLOCK ... WITH FRAME TITLE ... can be set and modified at runtime.

Modification 20

Symbolic Positions with SELECTION-SCREEN Statements
In all variants of [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) which expect format specifications, the position of the object can be defined on the selection screen symbolically (POS\_LOW or POS\_HIGH for the positions where the input fields of [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) are produced).

Modification 21

User's Own Key in Application Toolbar
The keyword [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) FUNCTION KEY n (n must be between 1 and 5) makes it possible to activate up to five function keys on the selection screen. The texts for these must be set at runtime. The keys appear in the application toolbar.

Modification 22

Nested Blocks on Selection Screens
Blocks defined using the language construct [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) BEGIN/ END OF BLOCK can be nested. For blocks in boxes, the nesting depth is restricted to 5 levels.

Modification 23

Return to the Selection Screen After F3 in Basic List
If F3 is used to exit a basic list created by a program (and the program was executed from the selection screen), the system displays the selection screen again with the old content.

Modification 24

Passing Report-Specific Selections to the Database
Report-specific selections with a reference field belonging to a [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") table for which [dynamic selections](javascript:call_link\('abenfree_selections.htm'\)) are defined are passed directly to the database. In exceptional cases, this can be suppressed by using the addition NO DATABASE SELECTION for the keyword [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)).

Modification 25

Simplified SELECT-OPTIONS on the Selection Screen
Addition NO INTERVALS with [SELECT-OPTIONS](javascript:call_link\('abapselect-options.htm'\)) and [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) BEGIN OF BLOCK.
These additions tcan be used o display and manipulate SELECT-OPTIONS on the selection screen.
The function module SELECT\_OPTIONS\_RESTRICT restricts the number of valid selection options per SELECT-OPTIONS at runtime. The option 'E' (= 'Exclude from selection') can also be switched off. This makes it possible to simplify the entry of selections on the selection screen.

Modification 26

Field Selection
The additions FIELDS f1 ... fn in the case of [GET](javascript:call_link\('abapget-.htm'\)) and [GET LATE](javascript:call_link\('abapget-.htm'\)) plus FIELD SELECTION FOR TABLE dbtab in the case of [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)).
These make it possible to specify a list of fields required in the program for tables defined for this purpose in the logical database. Only these fields are then filled with values, which leads to considerable improvement in performance.

Modification 27

Passing Dynamic Selections with SUBMIT
The addition FREE SELECTIONS ... can be used with [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) to pass dynamic selections directly.

Modification 28

User-Specific Variables in Variants
User-specific values can be set for certain parameters and selection criteria intended for that purpose by the application.