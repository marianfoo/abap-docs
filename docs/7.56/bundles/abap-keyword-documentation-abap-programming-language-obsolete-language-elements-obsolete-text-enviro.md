# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Text Environment

Included pages: 3



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.56](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abentext_environment_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_environment_obsolete.htm)
- [abapset_locale_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locale_obsolete.htm)
- [abapget_locale_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_locale_obsolete.htm)

**Bundle Contains**: 3 documentation pages
**Version**: ABAP 7.56
**Generated**: 2025-09-01T11:25:45.481Z

---

### abentext_environment_obsolete.htm

> **📖 Official SAP Documentation**: [abentext_environment_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_environment_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) → 

Obsolete Text Environment

-   [SET LOCALE - obsolete\_parameters](javascript:call_link\('abapset_locale_obsolete.htm'\))
-   [GET LOCALE - obsolete\_parameters](javascript:call_link\('abapget_locale_obsolete.htm'\))

Continue
[SET LOCALE, obsolete\_parameters](javascript:call_link\('abapset_locale_obsolete.htm'\))
[GET LOCALE, obsolete\_parameters](javascript:call_link\('abapget_locale_obsolete.htm'\))



**📖 Source**: [abentext_environment_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_environment_obsolete.htm)

### abapset_locale_obsolete.htm

> **📖 Official SAP Documentation**: [abapset_locale_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locale_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Text Environment](javascript:call_link\('abentext_environment_obsolete.htm'\)) → 

SET LOCALE, obsolete\_parameters

[Short Reference](javascript:call_link\('abapset_locale_shortref.htm'\))

Obsolete Syntax

... *\[*COUNTRY cntry*\]* *\[*MODIFIER mod*\]*

Additions:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

ABAP syntax allows the additions COUNTRY and MODIFIER to be specified for the statement[SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). These additions should not be used.

Addition 1   

... COUNTRY cntry

Effect

The addition COUNTRY was intended for explicitly setting country-specific text environments. cntry expects a character-like data object that contains a country key with a maximum of three characters.

The function of this addition was not implemented completely and is undefined. If the data object lang of the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)) contains only blanks, the addition is ignored.

Hint

The statement SET LOCALE LANGUAGE must not be confused with the addition COUNTRY of the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) for setting the [formatting settings](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry").

Addition 2   

... MODIFIER mod

Effect

The addition MODIFIER was intended for setting different locales for a language within a country, for example, for sorting according to different sort criteria. mod expects a character-like data object with a maximum of eight places.

This function is not implemented. The addition MODIFIER is ignored when the statement is executed.



**📖 Source**: [abapset_locale_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_locale_obsolete.htm)

### abapget_locale_obsolete.htm

> **📖 Official SAP Documentation**: [abapget_locale_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_locale_obsolete.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapget_locale_obsolete.htm](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_locale_obsolete.htm)


  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Text Environment](javascript:call_link\('abentext_environment_obsolete.htm'\)) → 

GET LOCALE, obsolete\_parameters

[Short Reference](javascript:call_link\('abapget_locale_shortref.htm'\))

Obsolete Syntax

... COUNTRY cntry MODIFIER mod

Additions:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

Although ABAP syntax requires the additions COUNTRY and MODIFIER to be specified for the statement [GET LOCALE](javascript:call_link\('abapget_locale.htm'\)), the results of these additions should not be used.

Addition 1   

... COUNTRY cntry

The addition COUNTRY was intended for reading the country key of the current text environment explicitly. cntry expects a character-like data object.

The function of this addition was not implemented completely and the result is undefined.

Hint

The addition COUNTRY of the statement GET LOCALE does not extract the [formatting setting](javascript:call_link\('abenformat_setting_glosry.htm'\) "Glossary Entry") that can be set using [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)).

Addition 2   

... MODIFIER mod

Effect

The addition MODIFIER was intended for reading the identifier of a special locale. mod expects a character-like data object with a maximum of eight places.

This function is not implemented. Instead, the addition initializes the variable mod.
