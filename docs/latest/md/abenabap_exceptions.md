  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exception%20Handling%2C%20ABENABAP_EXCEPTIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exception Handling

Exceptions are events during the execution of an ABAP program that interrupt the program flow because it is not possible for the program to continue in a meaningful way. Exception handling enables a response to these events.

Exception situations can be detected either by the program or by the runtime framework. When an exception situation is detected, either the ABAP program or the runtime framework raises an exception. Exceptions in the ABAP runtime framework are generally caused by error situations that cannot be predicted by the static [program check](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_check_glosry.htm "Glossary Entry").

Exceptions are either catchable or uncatchable.

-   Catchable exceptions are [class-based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions.htm). They are predefined in the system, or can be user-defined. They are raised either by the ABAP runtime framework or in an ABAP program using
    
    -   The statement [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapraise_exception_class.htm)
    -   [THROW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expression_result.htm) specified in a [conditional expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconditional_expressions.htm)
    
    They can be handled using [TRY - CATCH - ENDTRY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptry.htm).
    
    In addition, there are also [non-class-based exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_non_class.htm) and obsolete [catchable runtime errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem-exceptions.htm).
    
-   Uncatchable exceptions are raised only by the ABAP runtime framework. They are a response to error situations that cannot generally be handled meaningfully in a program.

Exceptions that were not caught, that is, all uncatchable exceptions and all catchable exceptions not caught in the program, produce a [runtime error](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenruntime_error_glosry.htm "Glossary Entry"), which means that the program is terminated with a [short dump](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenshort_dump_glosry.htm "Glossary Entry").

Continue
[Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions.htm)
[Exceptions Before Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions_pre_610.htm)
[Exceptions in ABAP Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)
[Runtime Errors](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennoncat_exceptions.htm)