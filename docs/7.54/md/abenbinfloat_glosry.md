  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

binary floating point number

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") used for the binary saving of numbers with mantissa and exponents or a number saved in this way. The associated [built-in ABAP type](javascript:call_link\('abenpredefined_abap_type_glosry.htm'\) "Glossary Entry") is [t](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). The internal representation is in accordance with the norm IEEE-754 (double precision) and uses one bit for the sign, 11 bits for the binary exponent, and 52 bits for the mantissa. [Decimal numbers](javascript:call_link\('abendecimal_number_glosry.htm'\) "Glossary Entry") with 17 [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry") can be represented. Due to the internal representation by binary fractions, not every decimal number in the value range can be represented exactly by a binary floating point number.

[→ More](javascript:call_link\('abennumber_types.htm'\))