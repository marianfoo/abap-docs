  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  R

ROLLBACK WORK - Quick reference

[Reference](javascript:call_link\('abaprollback.htm'\))

Syntax

ROLLBACK WORK.

Effect

Ends an [SAP LUW](javascript:call_link\('abensap_luw_glosry.htm'\) "Glossary Entry"), executing the subroutines registered using PERFORM ON ROLLBACK and discarding the subroutines and [update function modules](javascript:call_link\('abenupdate_function_module_glosry.htm'\) "Glossary Entry") registered using PERFORM ON COMMIT or CALL FUNCTION IN UPDATE TASK.