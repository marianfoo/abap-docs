  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

Internationalization in Release 3.0

[1\. SORT ... AS TEXT: Locale-friendly sorting](#!ABAP_MODIFICATION_1@1@)
[2\. CONVERT TEXT: Conversion of texts to a locale-specific format](#!ABAP_MODIFICATION_2@2@)
[3\. SET LOCALE: Explicit setting of the text environment](#!ABAP_MODIFICATION_3@3@)

Overview

Since Releases 2.1/2.2, ABAP has provided a number of statements to support the internationalization of programs. SET COUNTRY can be used to define the date and number formatting for a particular country, while SET LANGUAGE makes it possible to change the text pool language. TRANSLATE f TO LOWER/UPPER CASE reacts to the locale category LC\_CTYPE, and when passing data between [AS instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry") and front ends and when passing data using RFC, the system respects the SAP [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry").
In Release 3.0, texts can be sorted in a locale-friendly way (specific to culture). Here, the sort order is determined by the locale category LC\_COLLATE.
In addition, the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") which (among other things) defines the locale-specific sort rules is set automatically according to the language of the active user when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is opened.
Finally, the basis for internationalization has been modified. Using the SAP text environment table TCP0C, text environments are assigned to a four-part key consisting of <PLATFORM, LANGUAGE, COUNTRY, MODIFIER\>.

Modification 1

SORT ... AS TEXT: Locale-friendly sorting
The addition ... AS TEXT of the language element [SORT](javascript:call_link\('abapsort_itab.htm'\)) enables text data to be sorted in a locale-friendly way.

Modification 2

CONVERT TEXT: Conversion of texts to a locale-specific sortable format
The new CONVERT variant [CONVERT TEXT t INTO SORTABLE CODE sc](javascript:call_link\('abapconvert_text.htm'\)) converts a text to a locale-friendly sortable format.

Modification 3

SET LOCALE: Explicit setting of the text environment
The new SET variant [SET LOCALE](javascript:call_link\('abapset_locale.htm'\)) enables program-driven configuration of the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry").