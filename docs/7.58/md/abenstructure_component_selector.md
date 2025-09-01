---
title: "Structure Component Selector"
description: |
  A component comp of a structured data type or a structure struct is accessed using the name struct-comp In this case, the character - is the structure component selector. A structured data type or a structure struct must be specified as follows to the left of the structure component selector: -   N
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstructure_component_selector.htm"
abapFile: "abenstructure_component_selector.htm"
keywords: ["select", "do", "if", "case", "try", "method", "data", "abenstructure", "component", "selector"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands.htm) →  [Data Objects in Operand Positions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_data_objects.htm) →  [Notations for Single Operands](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoperands_names.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Structure%20Component%20Selector%2C%20ABENSTRUCTURE_COMPONENT_SELECTOR%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Structure Component Selector

A component comp of a structured data type or a structure struct is accessed using the name

struct-comp

In this case, the character \- is the structure component selector. A structured data type or a structure struct must be specified as follows to the left of the structure component selector:

-   Name of a structure or a structured type that can itself be linked.
-   [Functional method call](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_call_glosry.htm "Glossary Entry") or [method chaining](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmethod_chaining_glosry.htm "Glossary Entry") with a structured result.
-   Single or chained [table expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_expression_glosry.htm "Glossary Entry") that returns a structured table line.

The name comp of the component must be to the right of the structure component selector.

Example

Declaration of a structure struc with the structured data type spfli from the ABAP Dictionary and access to its component carrid.

DATA struc TYPE spfli.
...
... struc-carrid ...