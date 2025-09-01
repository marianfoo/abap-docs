  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  S

SET UPDATE TASK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_update_task_local.htm)

Syntax

SET UPDATE TASK LOCAL.

Effect

Determines that [update function modules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered with CALL FUNCTION ... IN UPDATE TASK that have high priority are executed immediately in the current [work process](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwork_process_glosry.htm "Glossary Entry") and within the current [database LUW](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendatabase_luw_glosry.htm "Glossary Entry") when the COMMIT WORK statement is executed.