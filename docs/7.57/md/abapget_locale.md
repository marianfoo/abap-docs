---
title: "GET LOCALE LANGUAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_shortref.htm) Syntax GET LOCALE LANGUAGE lang obsolete_parameters(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm). Effect The language key of the current text envir
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale.htm"
abapFile: "abapget_locale.htm"
keywords: ["do", "if", "try", "data", "abapget", "locale"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) →  [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET LOCALE LANGUAGE, ABAPGET_LOCALE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

GET LOCALE LANGUAGE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_shortref.htm)

Syntax

GET LOCALE LANGUAGE lang [obsolete\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm).

Effect

The language key of the current [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is assigned to the variable lang. The data object lang must have a character-like data type. The statement has two obsolete additions - [COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm) and [MODIFIER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm) - that must be specified but whose results should not be evaluated.

Hint

The imported text environment language of the current text environment can be used to restore the environment after it has been changed using the statement [SET LOCALE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm).

Example

Determining the current text environment and restoring it after a change.

DATA: lang  TYPE tcp0c-langu,
      dummy TYPE string ##needed.
GET LOCALE LANGUAGE lang COUNTRY dummy MODIFIER dummy.
SET LOCALE LANGUAGE ...
...
SET LOCALE LANGUAGE lang.