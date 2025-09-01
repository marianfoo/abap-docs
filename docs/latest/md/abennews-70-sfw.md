  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for ABAP Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Switch%20Framework%20in%20ABAP%20Release%207.0%2C%20ABENNEWS-70-SFW%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Switch Framework in ABAP Release 7.0

[1\. Binding of Dynpros to Switch Framework](#!ABAP_MODIFICATION_1@1@)
[2\. Binding the Syntax Check to Switch Framework](#!ABAP_MODIFICATION_2@2@)

From ABAP release 7.0, [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") is available for the external control of the visibility of [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") or their components using [switches](javascript:call_link\('abenswitch_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). The following changes have been made to dynpro and ABAP statements to enable this function:

Modification 1   

Binding of Dynpros to Switch Framework

The new addition SWITCH of the statement [MODULE](javascript:call_link\('dynpmodule.htm'\)) in the dynpro flow logic can be used to make the call of a dialog module dependent on the state of a switch.

The statement [FIELD](javascript:call_link\('dynpfield.htm'\)) and the activation of functions in the GUI status are controlled by binding switches to dynpro fields and status elements in Screen Painter or Menu Painter.

Modification 2   

Binding the Syntax Check to Switch Framework

In every implicit or explicit compilation of an ABAP program, the syntax check uses the switch configuration of Switch Framework that is provided when the statement is executed.

When the statement [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) is executed, the syntax check uses the switch configuration that was available at the time the current transaction was called.

As a standard setting, a syntax check performed using the statement [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)) uses the switch configuration available at the time the statement is executed. To achieve the same behavior as with the statement [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)), the addition WITH CURRENT SWITCHSTATES has been introduced.