  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  C

COMMIT WORK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcommit.htm)

Syntax

COMMIT WORK *\[*AND WAIT*\]*.

Effect

Ends an [SAP LUW](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensap_luw_glosry.htm "Glossary Entry"); executes subroutines registered using PERFORM ON COMMIT and [update function modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered using CALL FUNCTION IN UPDATE TASK.

Addition

-   AND WAIT
    The current program waits for all high-priority update function modules to be executed.