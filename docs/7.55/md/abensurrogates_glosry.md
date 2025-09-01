  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

surrogate

Also referred to as surrogate pair. Combination of special low and high surrogate characters for addressing characters in the [surrogate area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensurrogate_area_glosry.htm "Glossary Entry") when using [UTF-16](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf16_glosry.htm "Glossary Entry"). High surrogate characters range from U+D800 to U+DBFF. Low surrogate characters range from U+DC00 to U+DFFF. They are called surrogates because they do not directly represent one character but only as a pair. The ABAP programming language supports [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry"), which means mainly UTF-16 without surrogates, and interprets a surrogate character as two characters.