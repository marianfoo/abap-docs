  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [General Dynpros](javascript:call_link\('abenabap_dynpros.htm'\)) →  [dynpro - Statements in the Dynpro Flow Logic](javascript:call_link\('abenabap_dynpros_dynpro_statements.htm'\)) →  [dynpro - Subscreens, Tabstrips, and Splitter Controls](javascript:call_link\('abendynp_subscreens.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: dynpro - Tabstrip Controls, ABENDYNP_TABSTRIP, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0
A%0D%0ASuggestion for improvement:)

dynpro - Tabstrip Controls

A tabstrip control is a screen element that consists of multiple tab pages. Every tab page contains a single-line [tab title](javascript:call_link\('abentab_title_glosry.htm'\) "Glossary Entry") linked with a function code and which can be used to select the tab page by clicking it once. Under the tab title, a tab page consists of a subscreen area. Each tab title must have a subscreen area assigned to it, in which any subscreens can be displayed. There are two ways to do this:

-   Browsing in SAP GUI
    
    A separate subscreen area is assigned to each tab title and the function codes of the tab titles are defined with the function type "P". If the user selects a tab title, the event PAI is not raised. The associated subscreens are included once in each individual subscreen area by using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement of the flow logic. If the user selects a tab title, the SAP GUI browses to the associated tab page and displays its subscreen.
    
-   Browsing in ABAP Programs
    
    The same subscreen area is assigned to each tab title, and the function codes of the tab titles are defined without [typing](javascript:call_link\('abentyping_glosry.htm'\) "Glossary Entry"). If the user selects a tab title, the event PAI is raised. The associated subscreen is included dynamically using the [CALL SUBSCREEN](javascript:call_link\('dynpcall.htm'\)) statement of the flow logic in the subscreen area each time the user browses. In the ABAP program, the associated tab page must be activated using [CONTROLS](javascript:call_link\('abapcontrols.htm'\)) and the correct subscreen dynpro for the subscreen area must be specified.
    

Hint

If a tab title is selected when browsing in the SAP GUI, input checks are not made, and data is not transported to the ABAP program. The entries are all checked and the data of all subscreens transported only if a user action raises the PAI event. When browsing in the ABAP program, the input is checked each time a tab title is selected, and the current tab page data is transported to the ABAP program of the subscreen dynpro.

Executable Examples

-   [Dynpros, Tabstrips with Scrolling in SAP GUI](javascript:call_link\('abentab_strip_control1_abexa.htm'\))
-   [Dynpros, Tabstrips with Scrolling in AS instance](javascript:call_link\('abentab_strip_control2_abexa.htm'\))