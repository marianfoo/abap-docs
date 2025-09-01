  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70_ehps.htm) →  [Changes for Release 7.0](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-70.htm) → 

Switch Framework for Release 7.0

[1\. Connection of dynpros to the Switch Framework](#!ABAP_MODIFICATION_1@1@)

[2\. Connection of the syntax check to the Switch Framework](#!ABAP_MODIFICATION_2@2@)

As of release 7.0, a [Switch Framework](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenswitch_framework_glosry.htm "Glossary Entry") is available for the external control of the visibility of [Repository objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_object_glosry.htm "Glossary Entry") or their components using [switches](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenswitch_german_glosry.htm "Glossary Entry") in the [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry"). The following changes have been made to dynpro and ABAP statements to enable this function:

Modification 1

Connection of dynpros to the Switch Framework

The new addition SWITCH to the statement [MODULE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpmodule.htm) of the dynpro flow logic can be used to make the call of a dialog module dependent on the state of a switch.

The statement [FIELD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/dynpfield.htm) and the activation of functions in the GUI status are controlled by connecting switches to dynpro fields and status elements in the Screen Painter or the Menu Painter.

Modification 2

Connection of the syntax check to the Switch Framework

In every implicit or explicit compilation of an ABAP program, the
syntax check uses the switch configuration of the Switch Framework that is available when the statement is executed.

When the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_subroutine_pool.htm) is executed, the syntax check uses the switch configuration that was available at the time the current transaction was called.

As a standard setting, a syntax check performed using the statement [SYNTAX-CHECK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm) uses the switch configuration available at the time the statement is executed. To achieve the same behavior as with the statement [GENERATE SUBROUTINE POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapgenerate_subroutine_pool.htm), the addition WITH CURRENT SWITCHSTATES has been introduced.