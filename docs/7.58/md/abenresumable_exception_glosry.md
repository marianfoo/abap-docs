  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20resumable%20exception%2C%20ABENRESUMABLE_EXCEPTION_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

resumable exception

[Class-based exception](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenclass_based_exception_glosry.htm "Glossary Entry") that is raised by the addition RESUMABLE of the statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapraise_exception_class.htm) or by the addition [THROW](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expression_result.htm) in a [conditional expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconditional_expressions.htm). When a resumable exception is handled in a [CATCH](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapcatch_try.htm) block, processing can be resumed using the statement [RESUME](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapresume.htm) directly after the raising statement if the context of the exception still exists. The property of resumability of an exception can be lost when the exception is propagated from [procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocedure_glosry.htm "Glossary Entry") if it is not marked as resumable in all relevant [parameter interfaces](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenparameter_interface_glosry.htm "Glossary Entry") by the addition RESUMABLE in the RAISING declaration of the procedures.