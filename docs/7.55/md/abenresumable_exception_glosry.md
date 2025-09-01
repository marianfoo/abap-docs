  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

resumable exception

[Class-based exception](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that is raised with the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapraise_exception_class.htm) or by the addition [THROW](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconditional_expressions.htm). When a resumable exception is handled in a [CATCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcatch_try.htm) block, processing can be resumed using the statement [RESUME](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapresume.htm) directly after the raising statement if the context of the exception still exists. The property of resumability of an exception can be lost when the exception is propagated from [procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") if it is not marked as resumable in all relevant [parameter interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenparameter_interface_glosry.htm "Glossary Entry") with the addition RESUMABLE in the RAISING declaration of the procedures.