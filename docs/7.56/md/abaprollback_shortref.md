  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  R

ROLLBACK WORK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaprollback.htm)

Syntax

ROLLBACK WORK.

Effect

Ends an [SAP LUW](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_luw_glosry.htm "Glossary Entry"), executing the subroutines registered using PERFORM ON ROLLBACK and discarding the subroutines and [update function modules](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered using PERFORM ON COMMIT or CALL FUNCTION IN UPDATE TASK.