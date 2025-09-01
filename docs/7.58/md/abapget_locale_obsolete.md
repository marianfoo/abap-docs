---
title: "Obsolete Syntax"
description: |
  ... COUNTRY cntry MODIFIER mod Additions: 1. ... COUNTRY cntry(#!ABAP_ADDITION_1@1@) 2. ... MODIFIER mod(#!ABAP_ADDITION_2@2@) Effect Although ABAP syntax requires the additions COUNTRY and MODIFIER to be specified for the statement GET LOCALE(https://help.sap.com/doc/abapdocu_758_index_htm/
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_locale_obsolete.htm"
abapFile: "abapget_locale_obsolete.htm"
keywords: ["do", "if", "try", "data", "abapget", "locale", "obsolete"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Text Environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20LOCALE%2C%20obsolete_parameters%2C%20ABAPGET_LOCALE_OBSOLETE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET LOCALE, obsolete\_parameters

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_locale_shortref.htm)

Obsolete Syntax

... COUNTRY cntry MODIFIER mod

Additions:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

Although ABAP syntax requires the additions COUNTRY and MODIFIER to be specified for the statement [GET LOCALE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget_locale.htm), the results of these additions should not be used.

Addition 1   

... COUNTRY cntry

The addition COUNTRY was intended for reading the country key of the current text environment explicitly. cntry expects a character-like data object.

The function of this addition was not implemented completely and the result is undefined.

Hint

The addition COUNTRY of the statement GET LOCALE does not extract the [formatting setting](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenformat_setting_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_country.htm).

Addition 2   

... MODIFIER mod

Effect

The addition MODIFIER was intended for reading the identifier of a special locale. mod expects a character-like data object with a maximum of eight places.

This function is not implemented. Instead, the addition initializes the variable mod.