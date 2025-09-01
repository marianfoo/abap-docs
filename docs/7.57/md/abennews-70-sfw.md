  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70_ehps.htm) →  [News for Release 7.0](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Switch Framework in Release 7.0, ABENNEWS-70-SFW, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

Switch Framework in Release 7.0

[1\. Binding of Dynpros to Switch Framework](#!ABAP_MODIFICATION_1@1@)
[2\. Binding the Syntax Check to Switch Framework](#!ABAP_MODIFICATION_2@2@)

From Release 7.0, [Switch Framework](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_framework_glosry.htm "Glossary Entry") is available for the external control of the visibility of [repository objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrepository_object_glosry.htm "Glossary Entry") or their components using [switches](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenswitch_glosry.htm "Glossary Entry") in [ABAP Workbench](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). The following changes have been made to dynpro and ABAP statements to enable this function:

Modification 1   

Binding of Dynpros to Switch Framework

The new addition SWITCH of the statement [MODULE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpmodule.htm) in the dynpro flow logic can be used to make the call of a dialog module dependent on the state of a switch.

The statement [FIELD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/dynpfield.htm) and the activation of functions in the GUI status are controlled by binding switches to dynpro fields and status elements in Screen Painter or Menu Painter.

Modification 2   

Binding the Syntax Check to Switch Framework

In every implicit or explicit compilation of an ABAP program, the syntax check uses the switch configuration of Switch Framework that is provided when the statement is executed.

When the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subroutine_pool.htm) is executed, the syntax check uses the switch configuration that was available at the time the current transaction was called.

As a standard setting, a syntax check performed using the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm) uses the switch configuration available at the time the statement is executed. To achieve the same behavior as with the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapgenerate_subroutine_pool.htm), the addition WITH CURRENT SWITCHSTATES has been introduced.