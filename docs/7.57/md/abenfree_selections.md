  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Selection Screens](javascript:call_link\('abenselection_screen.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens - Free Selections, ABENFREE_SELECTIONS, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens - Free Selections

A dynamic selection is a [ranges condition](javascript:call_link\('abenranges_condition_glosry.htm'\) "Glossary Entry") that can be entered on a dynamically created selection screen. The associated selection screens are created, displayed, and processed by the system function modules FREE\_SELECTIONS\_... of the function pool SSEL. The selection screens can be displayed as standalone selection screens, or integrated into the screen layouts of other dynpros or selection screens as a subscreen. Dynamic selections can be included in a logical database or used in any programs.

-   [Dynamic Selections in Logical Databases](#@@ITOC@@ABENFREE_SELECTIONS_1)
-   [Dynamic Selections in All Programs](#@@ITOC@@ABENFREE_SELECTIONS_2)

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)).

Dynamic Selections in Logical Databases   

[Logical databases](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") can provide dynamic selections on their selection screen to specify further dynamic ranges conditions for individual nodes of the logical database, in addition to the parameters and selection criteria already defined statically in the database. These dynamic conditions can then be evaluated in the database program of the logical database. Dynamic selections of a logical database can be declared simply using the addition [DYNAMIC SELECTIONS](javascript:call_link\('abapselection-screen_ldb_dynamic.htm'\)) of the statement [SELECTION-SCREEN](javascript:call_link\('abapselection-screen.htm'\)) in the database.

The ABAP runtime framework is responsible for calling function modules to create, display, and handle dynamic selections. The selections entered by the user are passed directly to data objects of the database program and can be evaluated there. For more information, see [Logical Databases - Dynamic Selections](javascript:call_link\('abenldb_free_selections.htm'\)).

Hint

The special addition [WITH FREE SELECTIONS](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)) is used to pass parameters to selection screens of logical databases that provide dynamic selections. If this addition is used, the function modules mentioned above are generally also implemented.

Dynamic Selections in All Programs   

In ABAP programs that work with classic dynpros, dynamic selections can be provided by using the following two function modules directly:

-   FREE\_SELECTIONS\_INIT
-   FREE\_SELECTIONS\_DIALOG

The function module FREE\_SELECTIONS\_INIT is used to determine the entities for which dynamic selections are to be made. This could be, for example, database tables from the ABAP Dictionary or any fields specified freely. The result of the function module is a selection ID, which must be passed to the function module FREE\_SELECTIONS\_DIALOG.

The function module FREE\_SELECTIONS\_DIALOG can display differently configured selection screens in different formats. Users can enter dynamic selections on these selection screens for the fields provided there and, if required, can also select fields for which they want to perform dynamic selections. If Save is chosen, the function module returns the specified selections to the caller in three different formats, which the caller can take from the following EXPORTING parameters:

-   WHERE\_CLAUSES
    
    This parameter passes an internal table with the relative expressions [rel\_exp](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) generated according to the dynamic selections for [dynamic specification](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)) in the [WHERE](javascript:call_link\('abapwhere.htm'\)) clause of [SELECT](javascript:call_link\('abapselect.htm'\)) statements.
    
-   FIELD\_RANGES
    
    This parameter passes an internal table with the [ranges tables](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") generated according to the dynamic selections and that can be evaluated using the predicate [comparison operator](javascript:call_link\('abencomp_operator_glosry.htm'\) "Glossary Entry") IN in corresponding [WHERE conditions](javascript:call_link\('abenwhere_logexp_seltab.htm'\)) or [comparison expressions](javascript:call_link\('abenlogexp_select_option.htm'\)).
    
-   EXPRESSIONS
    
    This parameter passes an internal table with conditions generated according to the dynamic selections in an internal format (Reverse Polish Notation). This format can then be passed to the function module FREE\_SELECTIONS\_INIT to prepare a selection screen that is predefined with these selections. This format is also required for passes made to called programs using the addition [WITH FREE SELECTIONS](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).
    

For more information, see the documentation about function modules and their parameter interface.

Executable Example

[Dynamic selections](javascript:call_link\('abenfree_selection_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Selection Screens - Free Selections](javascript:call_link\('abenfree_selection_abexa.htm'\))