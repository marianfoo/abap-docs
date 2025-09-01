  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMIT WORK, ABAPCOMMIT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

COMMIT WORK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcommit.htm)

Syntax

COMMIT WORK *\[*AND WAIT*\]*.

Effect

Ends an [SAP LUW](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensap_luw_glosry.htm "Glossary Entry"); executes subroutines registered using PERFORM ON COMMIT and [update function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry") registered using CALL FUNCTION IN UPDATE TASK.

Addition  

-   AND WAIT
    The current program waits for all high-priority update function modules to be executed.