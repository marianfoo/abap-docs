  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Text Environment](javascript:call_link\('abentext_environment_obsolete.htm'\)) → 

GET LOCALE - obsolete\_parameters

[Quick Reference](javascript:call_link\('abapget_locale_shortref.htm'\))

Obsolete Syntax

... COUNTRY cntry MODIFIER mod

Extras:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

Although ABAP syntax requires the specification of the additions COUNTRY and MODIFIER for the statement [GET LOCALE](javascript:call_link\('abapget_locale.htm'\)), you should not use the results of these additions.

Addition 1

... COUNTRY cntry

The addition COUNTRY was intended for reading the country key of the current text environment explicitly. cntry expects a character-like data object.

The function of this addition was not implemented in full and the result is undefined.

Note

The addition COUNTRY of the statement GET LOCALE does not extract the [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry") that can be set using [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)).

Addition 2

... MODIFIER mod

Effect
The addition MODIFIER was intended for reading the identifier of a special locale. mod expects a character-like data object with a maximum of eight characters.

This function is not implemented. Instead, the addition initializes the variable mod.