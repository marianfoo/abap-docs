  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  C

COMMIT WORK - Quick reference

[Reference](javascript:call_link\('abapcommit.htm'\))

Syntax

COMMIT WORK *\[*AND WAIT*\]*.

Effect

Ends an [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"); executes subroutines registered using PERFORM ON COMMIT and [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") registered using CALL FUNCTION IN UPDATE TASK.

Addition

-   AND WAIT
    The current program waits for all high-priority update function modules to be executed.