  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Text Environment](javascript:call_link\('abentext_environment_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET LOCALE, obsolete_parameters, ABAPGET_LOCALE_OBSOLETE, 757%0D%0A%0D%0AError:%0D%0A
%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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