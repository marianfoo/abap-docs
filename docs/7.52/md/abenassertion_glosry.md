  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

Assertion

Assertion in an [ABAP program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_program_glosry.htm "Glossary Entry"). An assertion is defined by an [ASSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapassert.htm) statement as a conditional [checkpoint](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_glosry.htm "Glossary Entry"). Assertions are either always active or can be activated by assigning them to a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry"). When the program reaches an active assertion, it evaluates the corresponding condition. If the condition is violated, the program terminates with a runtime error, accesses the [ABAP Debugger](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_debugger_glosry.htm "Glossary Entry"), or creates a log entry. If the assertion is assigned to a [checkpoint group](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencheckpoint_group_glosry.htm "Glossary Entry"), the program behavior is controlled by the corresponding activation settings, and otherwise, the program terminates.