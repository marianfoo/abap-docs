---
title: "binfloat_glosry"
description: |
  binfloat_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbinfloat_glosry.htm"
abapFile: "abenbinfloat_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abenbinfloat", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: binary floating point number, ABENBINFLOAT_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

binary floating point number

[Numeric data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumeric_data_type_glosry.htm "Glossary Entry") used for the binary saving of numbers with mantissa and exponents or a number stored in this way. The associated [built-in ABAP type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_abap_type_glosry.htm "Glossary Entry") is [t](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_numeric.htm). The internal representation is in accordance with the norm IEEE-754 (double precision) by one bit for the plus/minus sign, 11 bits for the binary exponent, and 52 bits for the mantissa, whereby [decimal numbers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendecimal_number_glosry.htm "Glossary Entry") can be represented by 17 [places](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenplace_glosry.htm "Glossary Entry"). Due to the internal representation as binary fractions, not every decimal number within the value range can be represented exactly by a binary floating point number.

[→ More about](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennumber_types.htm)