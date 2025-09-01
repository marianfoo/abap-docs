---
title: "Selection Screens - Dynamic Selections"
description: |
  A dynamic selection(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_selection_glosry.htm 'Glossary Entry') (also called free selection) is a ranges condition(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_condition_glosry.htm 'Glossary Entr
version: "latest"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfree_selections.htm"
abapFile: "abenfree_selections.htm"
keywords: ["select", "do", "if", "try", "class", "data", "internal-table", "abenfree", "selections"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_screens.htm) →  [Selection Screens](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_screen.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Selection%20Screens%20-%20Dynamic%20Selections%2C%20ABENFREE_SELECTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Selection Screens - Dynamic Selections

A [dynamic selection](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_selection_glosry.htm "Glossary Entry") (also called free selection) is a [ranges condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_condition_glosry.htm "Glossary Entry") that can be entered on a dynamically created selection screen. The associated selection screens are created, displayed, and processed by the system function modules FREE\_SELECTIONS\_... of the function pool SSEL. The selection screens can be displayed as standalone selection screens, or integrated into the screen layouts of other dynpros or selection screens as a subscreen. Dynamic selections can be included in a logical database or used in any programs.

-   [Dynamic Selections in Logical Databases](#abenfree-selections-1-------dynamic-selections-in-all-programs---@ITOC@@ABENFREE_SELECTIONS_2)

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm). See [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_programming_scrty.htm).

Dynamic Selections in Logical Databases   

[Logical databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") can provide dynamic selections on their selection screen to specify further dynamic ranges conditions for individual nodes of the logical database, in addition to the selection parameters and selection criteria already defined statically in the database. These dynamic conditions can then be evaluated in the database program of the logical database. Dynamic selections of a logical database can be declared simply using the addition [DYNAMIC SELECTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen_ldb_dynamic.htm) of the statement [SELECTION-SCREEN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselection-screen.htm) in the database.

The ABAP runtime framework is responsible for calling function modules to create, display, and handle dynamic selections. The selections entered by the user are passed directly to data objects of the database program and can be evaluated there. For more information, see [Logical Databases - Dynamic Selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenldb_free_selections.htm).

Hint

The special addition [WITH FREE SELECTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm) of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) is used to pass parameters to selection screens of logical databases that provide dynamic selections. If this addition is used, the function modules mentioned above are generally also implemented.

Dynamic Selections in All Programs   

In ABAP programs that work with classic dynpros, dynamic selections can be provided by using the following two function modules directly:

-   FREE\_SELECTIONS\_INIT
-   FREE\_SELECTIONS\_DIALOG

The function module FREE\_SELECTIONS\_INIT is used to determine the entities for which dynamic selections are to be made. This could be, for example, database tables from the ABAP Dictionary or any fields specified freely. The result of the function module is a selection ID, which must be passed to the function module FREE\_SELECTIONS\_DIALOG.

The function module FREE\_SELECTIONS\_DIALOG can display differently configured selection screens in different formats. Users can enter dynamic selections on these selection screens for the fields provided there and, if required, can also select fields for which they want to perform dynamic selections. If Save is chosen, the function module returns the specified selections to the caller in three different formats, which the caller can take from the following EXPORTING parameters:

-   WHERE\_CLAUSES
    
    This parameter passes an internal table with the relative expressions [rel\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_stmt_logexp.htm) generated according to the dynamic selections for [dynamic specification](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_dynamic.htm) in the [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwhere.htm) clause of [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapselect.htm) statements.
    
-   FIELD\_RANGES
    
    This parameter passes an internal table with the [ranges tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm "Glossary Entry") generated according to the dynamic selections and that can be evaluated using the predicate [comparison operator](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencomp_operator_glosry.htm "Glossary Entry") IN in corresponding [WHERE conditions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwhere_logexp_seltab.htm) or [comparison expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm).
    
-   EXPRESSIONS
    
    This parameter passes an internal table with conditions generated according to the dynamic selections in an internal format (Reverse Polish Notation). This format can then be passed to the function module FREE\_SELECTIONS\_INIT to prepare a selection screen that is predefined with these selections. This format is also required for passes made to called programs using the addition [WITH FREE SELECTIONS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_selscreen_parameters.htm) of the statement [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm).
    

For more information, see the documentation about function modules and their parameter interface.

Executable Example

[Dynamic selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfree_selection_abexa.htm)

Continue
![Example](exa.gif "Example") [Selection Screens - Dynamic Selections](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfree_selection_abexa.htm)