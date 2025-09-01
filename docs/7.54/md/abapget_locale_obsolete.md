  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Text Environment](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_environment_obsolete.htm) → 

GET LOCALE - obsolete\_parameters

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_locale_shortref.htm)

Obsolete Syntax

... COUNTRY cntry MODIFIER mod

Extras:

[1\. ... COUNTRY cntry](#!ABAP_ADDITION_1@1@)
[2\. ... MODIFIER mod](#!ABAP_ADDITION_2@2@)

Effect

Although ABAP syntax requires the additions COUNTRY and MODIFIER to be specified for the statement [GET LOCALE](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapget_locale.htm), the results of these additions should not be used.

Addition 1

... COUNTRY cntry

The addition COUNTRY was intended for reading the country key of the current text environment explicitly. cntry expects a character-like data object.

The function of this addition was not implemented in full and the result is undefined.

Note

The addition COUNTRY of the statement GET LOCALE does not extract the [formatting setting](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenformat_setting_glosry.htm "Glossary Entry") that can be set using [SET COUNTRY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_country.htm).

Addition 2

... MODIFIER mod

Effect
The addition MODIFIER was intended for reading the identifier of a special locale. mod expects a character-like data object with a maximum of eight places.

This function is not implemented. Instead, the addition initializes the variable mod.