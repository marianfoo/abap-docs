  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_string.htm) →  [Expressions and Functions for Byte String Processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_processing_expr_func.htm) →  [Byte String Functions (bit\_func)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbinary_functions.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20bit_func%20-%20xstrlen%2C%20ABENDESCRIPTIVE_FUNCTIONS_BINARY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

bit\_func - xstrlen

One length function is currently available for unnamed byte-like arguments.

Syntax

... xstrlen( arg ) ...

The [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuilt_in_functions.htm) xstrlen returns the number of bytes in arg. The argument arg is a byte-like [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The return value has the type i.

Hint

The function described here is one of the functions that can also be used in the obsolete [extended functional operand positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenextended_functional_positions.htm) if its argument is a single data object.

Example

A six-character text in the code page [UTF-16](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenutf16_glosry.htm "Glossary Entry") is represented by 12 bytes.

FINAL(text) = \`Hello!\`.
FINAL(hex) = cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-16\`
              )->convert( text ).
cl\_demo\_output=>display(
  |Text length {   strlen( text )
  }\\nByte length { xstrlen( hex )  }| ).