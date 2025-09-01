---
title: "FUNCTION"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_shortref.htm) Syntax FUNCTION func. '--------------------------------------------------------- ' Local Interface: ' parameter_interface(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction.htm"
abapFile: "abapfunction.htm"
keywords: ["select", "do", "if", "try", "data", "types", "abapfunction"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Structure](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_layout.htm) →  [Modularization Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_modularization.htm) →  [Procedures](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_procedures.htm) →  [Function Modules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20FUNCTION%2C%20ABAPFUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

FUNCTION

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapfunction_shortref.htm)

Syntax

FUNCTION func.
\*"---------------------------------------------------------
\*" Local Interface:
\*" [parameter\_interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm)
\*"---------------------------------------------------------
  ...
ENDFUNCTION.

Effect

Between the statements FUNCTION and ENDFUNCTION, the functionality of a [function module](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_module_glosry.htm "Glossary Entry") func is implemented in a function pool. The function module and its interface are defined in the [ABAP development tools for Eclipse](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenadt_glosry.htm "Glossary Entry") or in the [Function Builder](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_builder_glosry.htm "Glossary Entry") tool. The function module interface defined in the Function Builder is automatically displayed in comment lines below the statement FUNCTION as [parameter\_interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm).

Within the function module, local data types and data objects can be declared. There is also access to the formal parameters of the function module and to the global data types and data objects of the function pool. A function module is called using the statement [CALL FUNCTION](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcall_function.htm).

Hint

The [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS SUPPLIED](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_supplied.htm) can be used in the function module to determine whether an actual parameter has been specified for when a formal parameter is called.

Example

Implements a function module that reads data in a table-like formal parameter flight\_tab under the condition of an elementary formal parameter id. The [parameter interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm) defined in Function Builder is visible as a comment.

FUNCTION read\_spfli\_into\_table.
\*"---------------------------------------------------------
\*" Local Interface:
\*"       IMPORTING
\*"             VALUE(ID) LIKE  SPFLI-CARRID DEFAULT 'LH '
\*"       EXPORTING
\*"             FLIGHT\_TAB TYPE  SPFLI\_TAB
\*"---------------------------------------------------------
  SELECT \*
         FROM spfli
         WHERE carrid = @id
         INTO TABLE @flight\_tab.
ENDFUNCTION.

Continue
[Function Module Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction.htm)