  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20surrogates%2C%20ABENSURROGATES_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

surrogates

Also referred to as surrogate pair. Combination of special low and high surrogate characters for addressing characters in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry") when using [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry"). High surrogate characters range from U+D800 to U+DBFF. Low surrogate characters range from U+DC00 to U+DFFF. They are called surrogates because they do not directly represent one character but only as a pair. High and low surrogates can only be part of a surrogate pair and cannot appear on their own in a valid UTF-16 string. While UTF-16 with surrogates is the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") of an [AS ABAP](javascript:call_link\('abenas_abap_glosry.htm'\) "Glossary Entry") the ABAP programming language supports [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") and interprets a surrogate character as two characters.