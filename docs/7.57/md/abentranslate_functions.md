---
title: "Syntax"
description: |
  ... translate( val = text(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) from = from to = to ) ... Effect This built-in function(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) returns the character string from tex
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentranslate_functions.htm"
abapFile: "abentranslate_functions.htm"
keywords: ["do", "if", "try", "data", "abentranslate", "functions"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_string.htm) →  [Expressions and Functions for String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_processing_expr_func.htm) →  [String Functions (string\_func)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) →  [string\_func - Processing Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprocess_functions.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: string_func - translate, ABENTRANSLATE_FUNCTIONS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0
D%0A%0D%0ASuggestion for improvement:)

string\_func - translate

Syntax

... translate( [val = text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) from = from to = to ) ...

Effect

This [built-in function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuilt_in_functions.htm) returns the character string from [text](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions_val.htm) where each character that occurs in from is replaced by the character that occurs in the same place in to as in from. If to is shorter than from, the surplus characters from from are removed from the character string. If from is an empty string, the content of text is returned unchanged.

from and to are [character-like expression positions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry"). If they have a fixed length, trailing blanks are ignored.

The return value has the type string.

Example

The return value of the following function call is Horray!.

FINAL(result) = translate(
  val = \`---Hur-rah!---\` from = \`uh-\` to = \`oy\` ).