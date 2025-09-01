  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Text Environment](javascript:call_link\('abentext_environment_obsolete.htm'\)) → 

SET LOCALE - obsolete\_parameters

[Quick Reference](javascript:call_link\('abapset_locale_shortref.htm'\))

Obsolete Syntax

... *\[*COUNTRY cntry*\]* *\[*MODIFIER mod*\]*

Extras:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

ABAP syntax allows you to specify the additions COUNTRY and MODIFIER for the statement[SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). These additions should not be used.

Addition 1

... COUNTRY cntry

Effect

The addition COUNTRY was intended for explicitly setting country-specific text environments. cntry expects a character-like data object that contains a country key with a maximum of three characters.

The function of this addition was not implemented in full and is undefined. If the data object lang of the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)) contains only blanks, the addition is ignored.

Note

Do not confuse the statement SET LOCALE LANGUAGE with the addition COUNTRY of the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)), which is used to configure the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry").

Addition 2

... MODIFIER mod

Effect

The addition MODIFIER was intended for setting different locales for a language within a country, for example, for sorting according to different sort criteria. mod expects a character-like data object with a maximum of eight places.

This function is not implemented. The addition MODIFIER is ignored when the statement is executed.