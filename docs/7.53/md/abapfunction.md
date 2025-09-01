---
title: "FUNCTION"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_shortref.htm) Syntax FUNCTION func. '--------------------------------------------------------- ' Local Interface: ' parameter_interface(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfu
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction.htm"
abapFile: "abapfunction.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abapfunction"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Layout](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_functions.htm) → 

FUNCTION

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction_shortref.htm)

Syntax

FUNCTION func.
\*"---------------------------------------------------------
\*" Local Interface:
\*" [parameter\_interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm)
\*"---------------------------------------------------------
  ...
ENDFUNCTION.

Effect

Between the statements FUNCTION and ENDFUNCTION, the functions of a [function module](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_module_glosry.htm "Glossary Entry") func are implemented in a function group. The function module and its interface are defined in the [ABAP Development Tools (ADT)](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenadt_glosry.htm "Glossary Entry") or in the [Function Builder](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_builder_glosry.htm "Glossary Entry") tool . In the source code of the function module, the function module interface defined in Function Builder is automatically displayed as [parameter\_interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm) in comment lines underneath the statement FUNCTION.

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function group. A function module is called using the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcall_function.htm).

Note

The [predicate expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogexp_supplied.htm) can be used in the function module to determine whether an actual parameter has been specified for a formal parameter.

Example

Implements a function module that reads data in a table-like formal parameter flight\_tab under the condition of an elementary formal parameter id. The [parameter interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table.
\*"---------------------------------------------------------
\*" Local Interface:
\*"       IMPORTING
\*"             VALUE(ID) LIKE  SPFLI-CARRID DEFAULT 'LH '
\*"       EXPORTING
\*"             FLIGHT\_TAB TYPE  SPFLI\_TAB
\*"---------------------------------------------------------
  SELECT \*
         FROM spfli
         WHERE carrid = @id
         INTO TABLE @flight\_tab.
ENDFUNCTION.

Continue
[Function Module Interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction.htm)