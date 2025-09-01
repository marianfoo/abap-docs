  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET LOCALE LANGUAGE, ABAPGET_LOCALE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

GET LOCALE LANGUAGE

[Short Reference](javascript:call_link\('abapget_locale_shortref.htm'\))

Syntax

GET LOCALE LANGUAGE lang [obsolete\_parameters](javascript:call_link\('abapget_locale_obsolete.htm'\)).

Effect

The language key of the current [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is assigned to the variable lang. The data object lang must have a character-like data type. The statement has two obsolete additions - [COUNTRY](javascript:call_link\('abapget_locale_obsolete.htm'\)) and [MODIFIER](javascript:call_link\('abapget_locale_obsolete.htm'\)) - that must be specified but whose results should not be evaluated.

Hint

The imported text environment language of the current text environment can be used to restore the environment after it has been changed using the statement [SET LOCALE](javascript:call_link\('abapset_locale.htm'\)).

Example

Determining the current text environment and restoring it after a change.

DATA: lang  TYPE tcp0c-langu,
      dummy TYPE string ##needed.
GET LOCALE LANGUAGE lang COUNTRY dummy MODIFIER dummy.
SET LOCALE LANGUAGE ...
...
SET LOCALE LANGUAGE lang.