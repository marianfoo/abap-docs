  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Character String and Byte String Processing](javascript:call_link\('abenabap_data_string.htm'\)) →  [Expressions and Functions for Byte String Processing](javascript:call_link\('abenbyte_processing_expr_func.htm'\)) →  [Byte String Functions](javascript:call_link\('abenbinary_functions.htm'\)) → 

xstrlen - Length Function

One length function is currently available for unnamed byte-like arguments.

Syntax

... xstrlen( arg ) ...

The function xstrlen returns the number of bytes in arg. The argument arg is a byte-like [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The return value has the type i.

Note

The function described here is one of the functions that can be used in the obsolete [extended functional operand positions](javascript:call_link\('abenextended_functional_positions.htm'\)), even if its argument is a single data object.

Example

A six-character text in the code page [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") is represented by 12 bytes.

DATA(text) = \`Hello!\`.
DATA(hex) = cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-16\`
              )->convert( text ).
cl\_demo\_output=>display(
  |Text length {   strlen( text )
  }\\nByte length { xstrlen( hex )  }| ).