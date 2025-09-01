  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: COMMIT WORK, ABAPCOMMIT_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

COMMIT WORK - Short Reference

[Reference](javascript:call_link\('abapcommit.htm'\))

Syntax

COMMIT WORK *\[*AND WAIT*\]*.

Effect

Ends an [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"); executes subroutines registered using PERFORM ON COMMIT and [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") registered using CALL FUNCTION IN UPDATE TASK.

Addition  

-   AND WAIT
    The current program waits for all high-priority update function modules to be executed.