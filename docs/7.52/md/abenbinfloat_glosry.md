  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

binary floating point number

[Numeric data type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") used for the binary saving of numbers with mantissa and exponents or a number saved in this way. The associated [predefined ABAP type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredefined_abap_type_glosry.htm "Glossary Entry") is [t](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm). The internal representation is in accordance with the norm IEEE-754 (double precision) and uses one bit for the sign, 11 bits for the binary exponent, and 52 bits for the mantissa. [Decimal numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendecimal_number_glosry.htm "Glossary Entry") with 17 [places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenplace_glosry.htm "Glossary Entry") can be represented. Due to the internal representation by binary fractions, not every decimal number in the value range can be represented exactly by a binary floating point number.

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumber_types.htm)