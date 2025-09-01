  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 3.0](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-30.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Internationalization%20in%20ABAP%20Release%203.0%2C%20ABENNEWS-30-INTERNATIONAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvem
ent:)

Internationalization in ABAP Release 3.0

[1\. SORT ... AS TEXT: Locale-Friendly Sorting](#!ABAP_MODIFICATION_1@1@)
[2\. CONVERT TEXT: Conversion of Texts to a Locale-Specific Sortable Format](#!ABAP_MODIFICATION_2@2@)
[3\. SET LOCALE: Explicit Setting of the Text Environment](#!ABAP_MODIFICATION_3@3@)

Overview

Since releases 2.1/2.2, ABAP has provided a number of statements to support the internationalization of programs. SET COUNTRY can be used to define the date and number formatting for a particular country, while SET LANGUAGE makes it possible to change the text pool language. TRANSLATE f TO LOWER/UPPER CASE reacts to the locale category LC\_CTYPE, and when passing data between [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry") and front ends and when passing data using RFC, the system respects the SAP [code page](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencodepage_glosry.htm "Glossary Entry").

In ABAP release 3.0, texts can be sorted in a locale-friendly way (specific to culture). Here, the sort order is determined by the locale category LC\_COLLATE.

In addition, the [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry") which (among other things) defines the locale-specific sort rules is set automatically according to the language of the active user when an [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry") is opened.

Finally, the basis for internationalization has been modified. Using the SAP text environment table TCP0C, text environments are assigned to a four-part key consisting of <PLATFORM, LANGUAGE, COUNTRY, MODIFIER\>.

Modification 1   

SORT ... AS TEXT: Locale-Friendly Sorting

The addition ... AS TEXT of the language element [SORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) enables text data to be sorted in a locale-friendly way.

Modification 2   

CONVERT TEXT: Conversion of Texts to a Locale-Specific Sortable Format

The new CONVERT variant [CONVERT TEXT t INTO SORTABLE CODE sc](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapconvert_text.htm) converts a text to a locale-friendly sortable format.

Modification 3   

SET LOCALE: Explicit Setting of the Text Environment

The new SET variant [SET LOCALE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm) enables program-driven configuration of the [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry").