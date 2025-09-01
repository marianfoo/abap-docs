  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 3.0](javascript:call_link\('abennews-30.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Internationalization in Release 3.0, ABENNEWS-30-INTERNATIONAL, 757%0D%0A%0D%0AError:
%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Internationalization in Release 3.0

[1\. SORT ... AS TEXT: Locale-Friendly Sorting](#!ABAP_MODIFICATION_1@1@)
[2\. CONVERT TEXT: Conversion of Texts to a Locale-Specific Sortable Format](#!ABAP_MODIFICATION_2@2@)
[3\. SET LOCALE: Explicit Setting of the Text Environment](#!ABAP_MODIFICATION_3@3@)

Overview

Since Releases 2.1/2.2, ABAP has provided a number of statements to support the internationalization of programs. SET COUNTRY can be used to define the date and number formatting for a particular country, while SET LANGUAGE makes it possible to change the text pool language. TRANSLATE f TO LOWER/UPPER CASE reacts to the locale category LC\_CTYPE, and when passing data between [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") and front ends and when passing data using RFC, the system respects the SAP [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry").
In Release 3.0, texts can be sorted in a locale-friendly way (specific to culture). Here, the sort order is determined by the locale category LC\_COLLATE.
In addition, the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") which (among other things) defines the locale-specific sort rules is set automatically according to the language of the active user when an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") is opened.
Finally, the basis for internationalization has been modified. Using the SAP text environment table TCP0C, text environments are assigned to a four-part key consisting of <PLATFORM, LANGUAGE, COUNTRY, MODIFIER\>.

Modification 1   

SORT ... AS TEXT: Locale-Friendly Sorting
The addition ... AS TEXT of the language element [SORT](javascript:call_link\('abapsort_itab.htm'\)) enables text data to be sorted in a locale-friendly way.

Modification 2   

CONVERT TEXT: Conversion of Texts to a Locale-Specific Sortable Format
The new CONVERT variant [CONVERT TEXT t INTO SORTABLE CODE sc](javascript:call_link\('abapconvert_text.htm'\)) converts a text to a locale-friendly sortable format.

Modification 3   

SET LOCALE: Explicit Setting of the Text Environment
The new SET variant [SET LOCALE](javascript:call_link\('abapset_locale.htm'\)) enables program-driven configuration of the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry").