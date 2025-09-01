---
title: "Syntax"
description: |
  ... xstrlen( arg ) ... The built-in function(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) xstrlen returns the number of bytes in arg. The argument arg is a byte-like functional operand position(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/a
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendescriptive_functions_binary.htm"
abapFile: "abendescriptive_functions_binary.htm"
keywords: ["do", "if", "try", "data", "abendescriptive", "functions", "binary"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions (bit\_func)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbinary_functions.htm) → 

bit\_func - xstrlen

One length function is currently available for unnamed byte-like arguments.

Syntax

... xstrlen( arg ) ...

The [built-in function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbuilt_in_functions.htm) xstrlen returns the number of bytes in arg. The argument arg is a byte-like [functional operand position](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The return value has the type i.

Hint

The function described here is one of the functions that can also be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenextended_functional_positions.htm) if its argument is a single data object.

Example

A six-character text in the code page [UTF-16](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenutf16_glosry.htm "Glossary Entry") is represented by 12 bytes.

DATA(text) = \`Hello!\`.
DATA(hex) = cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-16\`
              )->convert( text ).
cl\_demo\_output=>display(
  |Text length {   strlen( text )
  }\\nByte length { xstrlen( hex )  }| ).