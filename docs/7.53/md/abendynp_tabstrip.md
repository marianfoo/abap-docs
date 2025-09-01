  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

Tabstrip Controls

A tabstrip control is a screen element that is made up of multiple tab pages. Every tab page contains a one line [tab title](javascript:call_link\('abentab_title_glosry.htm'\) "Glossary Entry") associated with a function code and which can be used to select the tab page by clicking once. Under the tab title, a tab page is made up of a subscreen area. Each tab title must have a subscreen area assigned to it, in which any subscreens can be displayed. There are two ways to do this:

-   Browsing in SAP GUI
    A separate subscreen area is assigned to each tab title, and the function codes of the tab titles are defined with function type "P". If the user selects a tab title, the event PAI is not triggered. The associated subscreens are included once in each individual subscreen area by using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement of the flow logic. If the user selects a tab title, the SAP GUI browses to the associated tab page and displays its subscreen.

-   Browsing in ABAP Programs
    The same subscreen area is assigned to each tab title, and the function codes of the tab titles are defined without [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry"). If the user selects a tab title, the event PAI is triggered. The associated subscreen is included dynamically using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement of the flow logic in the subscreen area each time the user browses. In the ABAP program, the associated tab page must be activated using [CONTROLS](javascript:call_link\('abapcontrols.htm'\)) and the correct subscreen dynpro for the subscreen area must be specified.

Note

If a tab title entry is selected when browsing in SAP GUI, input checks are not made and data is not transported to the ABAP program. Only if a user action triggers the PAI event are all the entries checked and the data of all screens transported. When browsing in the ABAP program, the input is checked each time a tab title is selected and the current tab page data is transported to the ABAP program of the subscreen dynpro.

Executable Examples

-   [Dynpros, Tabstrips with Scrolling in SAP GUI](javascript:call_link\('abentab_strip_control1_abexa.htm'\))

-   [Dynpros, Tabstrips with Scrolling in AS Instance](javascript:call_link\('abentab_strip_control2_abexa.htm'\))