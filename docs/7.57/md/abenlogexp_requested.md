---
title: "Obsolete Syntax"
description: |
  ... para IS NOT REQUESTED ... Effect This predicate expression(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expression_glosry.htm 'Glossary Entry') checks whether an output parameter para of a procedure(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-U
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_requested.htm"
abapFile: "abenlogexp_requested.htm"
keywords: ["update", "do", "if", "case", "try", "method", "abenlogexp", "requested"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_program_flow.htm) →  [Obsolete Comparison Expressions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenobsolete_logexp.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: rel_exp - IS REQUESTED, ABENLOGEXP_REQUESTED, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

rel\_exp - IS REQUESTED

Obsolete Syntax

... para IS *\[*NOT*\]* REQUESTED ...

Effect

This [predicate expression](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") checks whether an output parameter para of a [procedure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocedure_glosry.htm "Glossary Entry") is being requested. The expression is true if in the call an actual parameter was assigned to the formal parameter.

This expression is possible only in function modules and methods. para expects only output parameters and optional input/output parameters.

If the addition NOT is specified, the expression is true if no actual parameter was assigned to the formal parameter in the call.

Hints

-   The predicate IS REQUESTED should no longer be used. The predicate expression [IS SUPPLIED](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogexp_supplied.htm) can be used instead, which includes all functions of IS REQUESTED.
-   In [update function modules](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenupdate_function_module_glosry.htm "Glossary Entry"), checks on [table parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_parameter_glosry.htm "Glossary Entry") using IS REQUESTED produce a syntax check warning because an actual parameter is always assigned to the table parameter in this case.