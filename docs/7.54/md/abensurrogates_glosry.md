  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

surrogate

Also called surrogate pair. Combination of special low and high surrogate characters for addressing characters in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") when using [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry"). High surrogate characters range from U+D800 to U+DBFF. Low surrogate characters range from U+DC00 to U+DFFF. They are called surrogates since they represent a character as a pair only and not directly. The ABAP programming language supports [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry"), which means mainly UTF-16 without surrogates, and interprets a surrogate character as two characters.