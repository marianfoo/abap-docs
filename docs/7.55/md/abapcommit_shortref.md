  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_shortref.htm) →  C

COMMIT WORK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcommit.htm)

Syntax

COMMIT WORK *\[*AND WAIT*\]*.

Effect

Ends an [SAP LUW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensap_luw_glosry.htm "Glossary Entry"); executes subroutines registered using PERFORM ON COMMIT and [update function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered using CALL FUNCTION IN UPDATE TASK.

Addition

-   AND WAIT
    The current program waits for all high-priority update function modules to be executed.