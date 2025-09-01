# ABAP - Keyword Documentation / ABAP - Programming Language / Obsolete Language Elements / Obsolete Text Environment

Included pages: 3


### abentext_environment_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Text Environment, ABENTEXT_ENVIRONMENT_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Text Environment

-   [SET LOCALE - obsolete\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_obsolete.htm)
-   [GET LOCALE - obsolete\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm)

Continue
[SET LOCALE, obsolete\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_obsolete.htm)
[GET LOCALE, obsolete\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm)


### abapset_locale_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET LOCALE, obsolete_parameters, ABAPSET_LOCALE_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

SET LOCALE, obsolete\_parameters

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_shortref.htm)

Obsolete Syntax

... *\[*COUNTRY cntry*\]* *\[*MODIFIER mod*\]*

Additions:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

ABAP syntax allows the additions COUNTRY and MODIFIER to be specified for the statement[SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm). These additions should not be used.

Addition 1   

... COUNTRY cntry

Effect

The addition COUNTRY was intended for explicitly setting country-specific text environments. cntry expects a character-like data object that contains a country key with a maximum of three characters.

The function of this addition was not implemented completely and is undefined. If the data object lang of the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm) contains only blanks, the addition is ignored.

Hint

The statement SET LOCALE LANGUAGE must not be confused with the addition COUNTRY of the statement [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm) for setting the [formatting settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenformat_setting_glosry.htm "Glossary Entry").

Addition 2   

... MODIFIER mod

Effect

The addition MODIFIER was intended for setting different locales for a language within a country, for example, for sorting according to different sort criteria. mod expects a character-like data object with a maximum of eight places.

This function is not implemented. The addition MODIFIER is ignored when the statement is executed.


### abapget_locale_obsolete.htm

  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET LOCALE, obsolete_parameters, ABAPGET_LOCALE_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

GET LOCALE, obsolete\_parameters

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_shortref.htm)

Obsolete Syntax

... COUNTRY cntry MODIFIER mod

Additions:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

Although ABAP syntax requires the additions COUNTRY and MODIFIER to be specified for the statement [GET LOCALE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale.htm), the results of these additions should not be used.

Addition 1   

... COUNTRY cntry

The addition COUNTRY was intended for reading the country key of the current text environment explicitly. cntry expects a character-like data object.

The function of this addition was not implemented completely and the result is undefined.

Hint

The addition COUNTRY of the statement GET LOCALE does not extract the [formatting setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenformat_setting_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_country.htm).

Addition 2   

... MODIFIER mod

Effect

The addition MODIFIER was intended for reading the identifier of a special locale. mod expects a character-like data object with a maximum of eight places.

This function is not implemented. Instead, the addition initializes the variable mod.
