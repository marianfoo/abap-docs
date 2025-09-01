  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

resumable exception

[Class-based exception](javascript:call_link\('abenclass_based_exception_glosry.htm'\) "Glossary Entry") that is raised by the addition RESUMABLE of the statement [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)) or by the addition [THROW](javascript:call_link\('abenconditional_expression_result.htm'\)) in a [conditional expression](javascript:call_link\('abenconditional_expressions.htm'\)). When a resumable exception is handled in a [CATCH](javascript:call_link\('abapcatch_try.htm'\)) block, processing can be resumed using the statement [RESUME](javascript:call_link\('abapresume.htm'\)) directly after the raising statement if the context of the exception still exists. The property of resumability in an exception can be lost when the exception is propagated from [procedures](javascript:call_link\('abenprocedure_glosry.htm'\) "Glossary Entry") if it is not marked as resumable in all relevant [parameter interfaces](javascript:call_link\('abenparameter_interface_glosry.htm'\) "Glossary Entry"). This is done using the addition RESUMABLE in the RAISING declaration of the procedures.