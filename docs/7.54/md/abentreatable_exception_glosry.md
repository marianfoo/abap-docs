  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

Handleable Exception

[Exception](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") that can be handled in the program using the statements [TRY - CATCH - ENDTRY](javascript:call_link\('abaptry.htm'\)) without causing a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry"). Handleable exceptions are based on [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") and are realized by [exception objects](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry"). A handleable exception is raised either by the [ABAP runtime environment](javascript:call_link\('abenabap_runtime_envir_glosry.htm'\) "Glossary Entry") or by the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception.htm'\)) in a program, or by the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry"). Before the introduction of [class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry"), handleable exceptions could be defined only in the interfaces of [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") and [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") themselves and raised using [RAISE](javascript:call_link\('abapraise_exception.htm'\)). Predefined handleable exceptions were raised as [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry") (now obsolete).

[→ More](javascript:call_link\('abenabap_exceptions.htm'\))