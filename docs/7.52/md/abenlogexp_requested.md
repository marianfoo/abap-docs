---
title: "Obsolete Syntax"
description: |
  ... para IS NOT REQUESTED ... Effect This predicate expression(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm 'Glossary Entry') checks whether an output parameter para of a procedure(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-U
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_requested.htm"
abapFile: "abenlogexp_requested.htm"
keywords: ["update", "do", "if", "case", "try", "method", "abenlogexp", "requested"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_program_flow.htm) →  [Obsolete Relational Expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_logexp.htm) → 

rel\_exp - IS REQUESTED

Obsolete Syntax

... para IS *\[*NOT*\]* REQUESTED ...

Effect

This [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") checks whether an output parameter para of a [procedure](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocedure_glosry.htm "Glossary Entry") is being requested. The expression is true if at the call an actual parameter was assigned to the formal parameter.

This expression is possible only in function modules and methods. para expects only output parameters and optional input/output parameters.

With addition NOT, the expression is true if at the call no actual parameter was assigned to the formal parameter.

Notes

-   The predicate IS REQUESTED should no longer be used. The predicate expression [IS SUPPLIED](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_supplied.htm) can be used instead, which includes all functions of IS REQUESTED.

-   In [update function modules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenupdate_function_module_glosry.htm "Glossary Entry"), checks on [table parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_parameter_glosry.htm "Glossary Entry") using IS REQUESTED produce a syntax check warning. This is because an actual parameter is always assigned to the table parameter in this case.