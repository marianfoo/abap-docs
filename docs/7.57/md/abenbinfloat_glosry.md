  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: binary floating point number, ABENBINFLOAT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

binary floating point number

[Numeric data type](javascript:call_link\('abennumeric_data_type_glosry.htm'\) "Glossary Entry") used for the binary saving of numbers with mantissa and exponents or a number stored in this way. The associated [built-in ABAP type](javascript:call_link\('abenbuiltin_abap_type_glosry.htm'\) "Glossary Entry") is [t](javascript:call_link\('abenbuiltin_types_numeric.htm'\)). The internal representation is in accordance with the norm IEEE-754 (double precision) by one bit for the plus/minus sign, 11 bits for the binary exponent, and 52 bits for the mantissa, whereby [decimal numbers](javascript:call_link\('abendecimal_number_glosry.htm'\) "Glossary Entry") can be represented by 17 [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry"). Due to the internal representation as binary fractions, not every decimal number within the value range can be represented exactly by a binary floating point number.

[→ More about](javascript:call_link\('abennumber_types.htm'\))