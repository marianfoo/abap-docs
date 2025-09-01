  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengui_obsolete.htm) →  [Obsolete Statements in List Processing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlists_obsolete.htm) →  [Obsolete List Event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_event_obsolete.htm) → 

AT PF

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_pf_shortref.htm)

Obsolete Syntax

AT PFnn.

Effect

Reacts to an obsolete [list event](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_event_glosry.htm "Glossary Entry"). This obsolete statement defines an event block whose event is triggered by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") when a list is displayed. This is provided the screen cursor is on a list line and a function is selected using the function code PFnn, where nn is a number between 01 and 24. In the [standard list status](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_list_status_glosry.htm "Glossary Entry"), these function codes are assigned to the function keys of the input device.

Note

[AT USER-COMMAND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapat_user-command.htm) should always be used instead of AT PFnn and special function codes should be assigned to the required function keys.