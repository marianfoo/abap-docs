  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20COMMIT%20WORK%2C%20ABAPCOMMIT_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

COMMIT WORK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcommit.htm)

Syntax

COMMIT WORK *\[*AND WAIT*\]*.

Effect

Ends an [SAP LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensap_luw_glosry.htm "Glossary Entry"); executes subroutines registered using PERFORM ON COMMIT and [update function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered using CALL FUNCTION IN UPDATE TASK.

Addition  

-   AND WAIT
    The current program waits for all high-priority update function modules to be executed.