  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20catchable%20exception%2C%20ABENCATCHABLE_EXCEPTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

catchable exception

[Exception](javascript:call_link\('abenexception_glosry.htm'\) "Glossary Entry") that can be handled in the program using the statements [TRY - CATCH - ENDTRY](javascript:call_link\('abaptry.htm'\)) without causing a [runtime error](javascript:call_link\('abenruntime_error_glosry.htm'\) "Glossary Entry"). Catchable exceptions are based on [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") and are implemented by [exception objects](javascript:call_link\('abenexception_object_glosry.htm'\) "Glossary Entry"). A catchable exception is raised either by the [ABAP runtime framework](javascript:call_link\('abenabap_runtime_frmwk_glosry.htm'\) "Glossary Entry") or by the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception.htm'\)) in a program, or by the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expression_glosry.htm'\) "Glossary Entry"). Before the introduction of [class-based exceptions](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry"), catchable exceptions could be user-defined only in the interfaces of [function modules](javascript:call_link\('abenfunction_module_glosry.htm'\) "Glossary Entry") and [methods](javascript:call_link\('abenmethod_glosry.htm'\) "Glossary Entry") and raised using [RAISE](javascript:call_link\('abapraise_exception.htm'\)). Predefined catchable exceptions occurred as [catchable runtime errors](javascript:call_link\('abencatchable_runtime_error_glosry.htm'\) "Glossary Entry"), now they are obsolete.

[→ More about](javascript:call_link\('abenabap_exceptions.htm'\))