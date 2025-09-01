---
title: "GET LOCALE LANGUAGE"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_locale_shortref.htm) Syntax GET LOCALE LANGUAGE lang obsolete_parameters(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_locale_obsolete.htm). Effect The language key of the current text e
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_locale.htm"
abapFile: "abapget_locale.htm"
keywords: ["do", "if", "try", "data", "abapget", "locale"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlanguage_settings.htm) →  [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_environment.htm) → 

GET LOCALE LANGUAGE

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_locale_shortref.htm)

Syntax

GET LOCALE LANGUAGE lang \[[obsolete\_parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_locale_obsolete.htm)\].

Effect

The language key of the current [text environment language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is assigned to the variable lang. The data object lang must have a character-like data type. The statement has two obsolete additions -[COUNTRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_locale_obsolete.htm) and [MODIFIER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapget_locale_obsolete.htm) - that must be specified. However the results are not evaluated.

Note

The imported text environment language of the current text environment can be used to restore the environment after it has been changed using the statement [SET LOCALE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_locale.htm).

Example

Determines the current text environment and restores it after a modification.

DATA: lang  TYPE tcp0c-langu,
      dummy TYPE string ##needed.
GET LOCALE LANGUAGE lang COUNTRY dummy MODIFIER dummy.
SET LOCALE LANGUAGE ...
...
SET LOCALE LANGUAGE lang.