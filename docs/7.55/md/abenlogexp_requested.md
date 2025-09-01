  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_program_flow.htm) →  [Obsolete Comparison Expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobsolete_logexp.htm) → 

rel\_exp - IS REQUESTED

Obsolete Syntax

... para IS *\[*NOT*\]* REQUESTED ...

Effect

This [predicate expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") checks whether an output parameter para of a [procedure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry") is being requested. The expression is true if at the call an actual parameter was assigned to the formal parameter.

This expression is possible only in function modules and methods. para expects only output parameters and optional input/output parameters.

If the addition NOT is specified, the expression is true if no actual parameter was assigned to the formal parameter in the call.

Hints

-   The predicate IS REQUESTED should no longer be used. The predicate expression [IS SUPPLIED](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_supplied.htm) can be used instead, which includes all functions of IS REQUESTED.

-   In [update function modules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenupdate_function_module_glosry.htm "Glossary Entry"), checks on [table parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_parameter_glosry.htm "Glossary Entry") using IS REQUESTED produce a syntax check warning. This is because an actual parameter is always assigned to the table parameter in this case.