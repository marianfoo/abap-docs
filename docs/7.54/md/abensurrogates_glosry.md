  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

surrogate

Also called surrogate pair. Combination of special low and high surrogate characters for addressing characters in the [surrogate area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensurrogate_area_glosry.htm "Glossary Entry") when using [UTF-16](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenutf16_glosry.htm "Glossary Entry"). High surrogate characters range from U+D800 to U+DBFF. Low surrogate characters range from U+DC00 to U+DFFF. They are called surrogates since they represent a character as a pair only and not directly. The ABAP programming language supports [UCS-2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenucs2_glosry.htm "Glossary Entry"), which means mainly UTF-16 without surrogates, and interprets a surrogate character as two characters.