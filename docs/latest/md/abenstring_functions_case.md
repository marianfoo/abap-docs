---
title: "Syntax"
description: |
  ... ( ... case = case ...  ) ... Effect Searches and comparisons in string functions are case-sensitive by default, but this can be overridden, if necessary, using the parameter case. The argument case requires a constant or a literal of the type abap_bool from the type pool ABAP with the value of
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_case.htm"
abapFile: "abenstring_functions_case.htm"
keywords: ["do", "if", "case", "data", "abenstring", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions.htm) →  [string\_func - Common Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_functions_common_paras.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20string_func%20-%20case%2C%20ABENSTRING_FUNCTIONS_CASE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

string\_func - case

Syntax

... ( ... case = case ...  ) ...

Effect

Searches and comparisons in string functions are case-sensitive by default, but this can be overridden, if necessary, using the parameter case. The argument case requires a constant or a literal of the type abap\_bool from the type pool ABAP with the value of the constants abap\_true or abap\_false. If case contains the value of abap\_true, the search is case-sensitive; if it contains the value of abap\_false, it is not.

Example

The result of the following function calls is 2 and 3.

FINAL(result1) = find( val = \`aAbBcC\` sub  = \`B\` case = abap\_false ).
FINAL(result2) = find( val = \`aAbBcC\` sub  = \`B\` case = abap\_true  ).