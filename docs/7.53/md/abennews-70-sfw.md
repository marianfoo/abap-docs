  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [Changes in Release 7.0](javascript:call_link\('abennews-70.htm'\)) → 

Switch Framework in Release 7.0

[1\. Binding of dynpros to Switch Framework](#!ABAP_MODIFICATION_1@1@)

[2\. Binding of the syntax check to Switch Framework](#!ABAP_MODIFICATION_2@2@)

From Release 7.0, [Switch Framework](javascript:call_link\('abenswitch_framework_glosry.htm'\) "Glossary Entry") is available for the external control of the visibility of [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") or their components using [switches](javascript:call_link\('abenswitch_german_glosry.htm'\) "Glossary Entry") in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry"). The following changes have been made to dynpro and ABAP statements to enable this function:

Modification 1

Binding of Dynpros to Switch Framework

The new addition SWITCH of the statement [MODULE](javascript:call_link\('dynpmodule.htm'\)) in the dynpro flow logic can be used to make the call of a dialog module dependent on the state of a switch.

The statement [FIELD](javascript:call_link\('dynpfield.htm'\)) and the activation of functions in the GUI status are controlled by binding switches to dynpro fields and status elements in Screen Painter or Menu Painter.

Modification 2

Binding the Syntax Check to Switch Framework

In every implicit or explicit compilation of an ABAP program, the
syntax check uses the switch configuration of Switch Framework that is provided when the statement is executed.

When the statement [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)) is executed, the syntax check uses the switch configuration that was available at the time the current transaction was called.

As a standard setting, a syntax check performed using the statement [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)) uses the switch configuration available at the time the statement is executed. To achieve the same behavior as with the statement [GENERATE SUBROUTINE POOL](javascript:call_link\('abapgenerate_subroutine_pool.htm'\)), the addition WITH CURRENT SWITCHSTATES has been introduced.