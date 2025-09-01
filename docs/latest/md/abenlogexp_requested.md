  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_program_flow.htm) →  [Obsolete Comparison Expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenobsolete_logexp.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20rel_exp%20-%20IS%20REQUESTED%2C%20ABENLOGEXP_REQUESTED%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

rel\_exp - IS REQUESTED

Obsolete Syntax

... para IS *\[*NOT*\]* REQUESTED ...

Effect

This [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") checks whether an output parameter para of a [procedure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprocedure_glosry.htm "Glossary Entry") is being requested. The expression is true if in the call an actual parameter was assigned to the formal parameter.

This expression is possible only in function modules and methods. para expects only output parameters and optional input/output parameters.

If the addition NOT is specified, the expression is true if no actual parameter was assigned to the formal parameter in the call.

Hints

-   The predicate IS REQUESTED should no longer be used. The predicate expression [IS SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm) can be used instead, which includes all functions of IS REQUESTED.
-   In [update function modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenupdate_function_module_glosry.htm "Glossary Entry"), checks on [table parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_parameter_glosry.htm "Glossary Entry") using IS REQUESTED produce a syntax check warning because an actual parameter is always assigned to the table parameter in this case.