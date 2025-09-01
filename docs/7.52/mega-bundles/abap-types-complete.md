# ABAP TYPES - Complete Reference (7.52)

**Generated**: 2025-09-01T19:37:16.302Z
**Bundles Combined**: 6
**Category**: types

---


## ABAP - Keyword Documentation / ABAP - Dictionary / Predefined Data Types in ABAP Dictionary / Attributes of the Predefined Dictionary Types / General Dictionary Types

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary / Predefined Data Types in ABAP Dictionary / Attributes of the Predefined Dictionary Types / Special Dictionary Types

Included pages: 5


### abenddic_builtin_types_special.htm

---
title: "Special Dictionary Types"
description: |
  -   Date types and time types(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm) -   Special character-like types(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm) -   Currency fields(https://help.sap.com/doc/
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm"
abapFile: "abenddic_builtin_types_special.htm"
keywords: ["do", "data", "types", "abenddic", "builtin", "special"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) → 

Special Dictionary Types

-   [Date types and time types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm)

-   [Special character-like types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm)

-   [Currency fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm)

-   [Quantity fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_quantity_field.htm)

Continue
[Date Types and Time Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm)
[Special Character-Like Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm)
[Currency Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm)
[Quantity Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_quantity_field.htm)


### abenddic_date_time_types.htm

---
title: "Date Types and Time Types"
description: |
  The following character-like data types in ABAP Dictionary describe date fields and time fields: -   DATS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) or date fields(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm 'Gl
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm"
abapFile: "abenddic_date_time_types.htm"
keywords: ["insert", "do", "if", "try", "data", "types", "abenddic", "date", "time"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm) → 

Date Types and Time Types

The following character-like data types in ABAP Dictionary describe date fields and time fields:

-   [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) or [date fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type DATS describes objects of the type CHAR with a length of 8 characters. It is designed for [calendar dates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalendar_date_glosry.htm "Glossary Entry") in the format YYYYMMDD, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [TIMS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [time fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type TIMS describes objects of the type CHAR with a length of 6 characters. It is designed for [times](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenday_time_glosry.htm "Glossary Entry") in the format HHMMSS, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [ACCP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for posting periods

From a technical perspective, the predefined data type ACCP describes objects of the type CHAR with a length of 6 characters. It is designed for posting periods in the format YYYYMM, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Notes

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) can be predefined for the types DATS and TIMS specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm)) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

---
title: "Special Character-Like Types"
description: |
  The following character-like data types in ABAP Dictionary have a special semantic meaning: -   NUMC(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for numeric texts(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_text_glosry.htm 'Gl
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm"
abapFile: "abenddic_special_character_types.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "special", "character"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [numeric texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_text_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm) and the associated rules apply.

-   [CLNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [client columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_column_glosry.htm "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_client.htm).

-   [LANG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [text language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_language_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") and in the binary [RFC protocol](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_protocol.htm) for passing TABLES parameters between [MDMP systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry"). The [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [text table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_table_glosry.htm "Glossary Entry") is still made up of the [foreign key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenforeign_key_glosry.htm "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) are used to represent a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_routine_glosry.htm "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

---
title: "Currency Fields"
description: |
  A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type CURR(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and used to record an amount in a specific currency. The amount is specified as a whole number in t
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm"
abapFile: "abenddic_currency_field.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenddic", "currency", "field"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm) → 

Currency Fields

A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type [CURR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and used to record an amount in a specific currency. The amount is specified as a whole number in the smallest unit of the currency. A currency field must be associated with a currency key of a structure, database table, or view that specifies the currency and the number of decimal places. A currency key is a component of a structure, database table, or view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#abenddic-currency-field-1--------handling-in-dynpros---@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#abenddic-currency-field-3---notes------currencies-are-handled-as-specified-by-the-data-saved-in-the-database-tables-tcur----of-the-package-sfib--the-exchange-rates-and-other-settings-can-be-edited-in-transaction-ob08-------currency-fields-are-defined-as-elements-of--cds-entities--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-entity-glosry-htm--glossary-entry---using--semantics-annotations--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-f1-element-annotation-htm----handling-in-abap-dictionary--a-data-element-of-data-type--curr--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm--is-handled-as-a-field-of-data-type--dec--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-int-pack-htm--and-is-stored-in-database-tables-in-the--bcd--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenbcd-glosry-htm--glossary-entry---format--when-creating-a-data-element-or-a-structure-component-of-the-data-type-curr-in-an-abap-dictionary--tool--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-tools-htm---a-number-of-decimal-places-other-than-zero-must-be-defined--the-standard-value-is-two-fractional-digits---for-every-structure-component-of-data-type-curr--a-component-of-the-same-structure-or-of-a-different-structure--database-table--or-view-must-be-specified-when-editing-the-individual-component-as-a--reference-field--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-structures-sema-htm--with-the-data-type--cuky--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm---this-field-is-the--currency-key--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencurrency-key-glosry-htm--glossary-entry---that-defines-the-actual-currency--from-a-technical-perspective--the-data-type-cuky-is-handled-like-a-type-char-with-length-5---notes------the-number-of-decimal-places-for-the-currency-defined-by-the-currency-key-of-type-cuky-only-determines-the-formatting-and-checking-of-a-currency-field-on-a-dynpro--in-principal--it-is-independent-of-the-number-given-for-the-currency-field-of-type-curr--the-default-value-of-two-decimal-places-for-currency-fields-in-abap-dictionary-is-chosen-because-most-of-the-currencies-in-the-database-table-tcurc-have-two-decimal-places-and-are-not-entered-in-the-database-table-tcurx--it-is-not-advisable-to-use-any-other-value--since-in-this-case-any-unforeseen-operations-with-currency-keys-in-abap-programs-are-largely-ignored-------the-conversion-function--currency--conversion--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-f1-conversion-functions-htm--in--abap-cds--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenabap-cds-glosry-htm--glossary-entry---also-assumes-two-decimal-places-for-currency-fields--if-the-function-for-currency-fields-is-used-with-other-amounts-of-decimal-places--unexpected-behaviour-may-arise-------as-in--general-packed-numbers--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-int-pack-htm---the-number-of-places-in-type-curr-should-be-odd---handling-in-dynpros--for-the-display-of-an-input-output-field-of-type-curr-on-a--dynpro--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abendynpro-glosry-htm--glossary-entry----the-content-is-displayed-as-character-like-content-and-in-accordance-with-a-type-dependent-mask--as-for-all--dynpro-fields--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abendynpro-field-glosry-htm--glossary-entry----here--the-positioning-of-the-decimal-point-for-a-currency-field-of-type-curr-on-a-dynpro-is-completely-independent-of-the-number-of-decimal-places-specified-by-the-data-element-in-abap-dictionary--greater-than-or-equal-to-one--the-default-value-is-two---the-number-of-decimal-places-on-a-dynpro-is-defined-as-follows-------when-displaying-a-dynpro-field-of-type-curr--the-reference-field-for-the-currency-key-is-searched-for-in-the-global-data-of-the-current-abap-program--the-content-of-this-field-must-be-a-valid--currency-id--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencurrency-id-glosry-htm--glossary-entry---from-the-database-table-tcurc--if-the-reference-field-is-not-found-or-there-is-no-entry-in-the-database-table-tcurx-with-the-content-of-the-field--the-currency-field-is-displayed-with-two-fractional-digits-by-default------the-reference-field-is-either-defined-in-the-relevant-structure-in-abap-dictionary-or-was-defined-using-screen-painter-for-the-attributes-of-the-dynpro-field--it-does-not-have-to-be-present-on-the-dynpro-itself-------if-the-currency-id-for-the-reference-field-is-found-in-the-database-table-tcurx--the-currency-field-is-displayed-with-the-decimal-places-specified-there--this-also-applies-to-initial-reference-fields---note--a-dynpro-therefore-only-uses-the-string-of-digits-of-a-currency-field-from-the-abap-program--or-a--conversion-routine--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenconversion-routine-glosry-htm--glossary-entry---in-between--or-just-sends-this-string--any-information-about-currency-keys-and-decimal-places-is-not-passed-automatically--it-must-be-ensured-that-the-reference-field-for-pbo-is-filled-with-the-appropriate-value--for-pai--the-correct-currency-key-plays-a-part-in-the-automatic-format-check--especially-on-dynpros-in-which-currency-fields-are-displayed-in-differing-currencies--it-must-be-ensured-that-the-reference-field-is-transported-before-the-currency-by-using-the-statements--chain--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-dynpchain-htm--and--field--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-dynpfield-htm----handling-in-abap-programs--the-abap-type-that-corresponds-to-the-curr-data-type-is-p--an-abap-data-object-declared-with-reference-to-a-dictionary-type-of-type-curr-has-the-number-of-decimal-places-defined-there--greater-than-or-equal-to-one-and-the-default-is-two---these-decimal-places-are-respected-for-all-operations-and-calculations--as-for-all-packed-numbers--the-only-exceptions-are-the-programs-for-which-the-program-property--fixed-point-arithmetic--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenfixed-point-arithmetic-glosry-htm--glossary-entry---was-not-set---to-work-correctly-with-a-currency-field--all-digits-in-the-number-must-be-recorded-as-currency-amounts-in-the-smallest-possible-currency-units--regardless-of-the-number-of-decimal-places--this-occurs-automatically-sometimes--for-example--if--currency--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapwrite-to-options-htm--is-used-after--write---to----https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapwrite-to-htm--or-the-formatting-option--currency--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapcompute-string-format-options-htm--in-an--embedded-expression--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenstring-templates-expressions-htm--of-a--character-string-template--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenstring-templates-htm---for-other-operations--the-following-restrictions-apply-------comparison--addition--subtraction--and-division-of-two-currency-fields-with-the-same-number-of-fractional-digits-are-not-critical-------multiplication-with-and-division-by-a-non-currency-dependent-number-is-not-critical-------all-other-operations-are-critical--for-example-------multiplication-of-two-currency-fields-------operations-between-two-fields-with-different-currencies-that-include-assignments-------assignments-of-non-currency-dependent-numbers-to-currency-fields---accurate-results-should-not-be-expected-when-performing-critical-operations-if-the-number-of-decimal-places-in-the-program-does-not-match-the-number-in-the-currency---note--for-currencies--one-of-the-data-types-for--decimal-floating-point-numbers--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-decimal-floating-point-htm--is-recommended-rather-than-the-data-type-curr--the-currency-compliant-formatting-is-supported-on-dynpros-by-output-styles-and-by-style-compatible-formatting-in-abap-programs--see-the--executable-example--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenwrite-style-abexa-htm---------abenddic-quantity-field-htm------title---quantity-fields--description------a-quantity-field-is-a-component-of-a-structure--database-table--or-view-of-type-quan-https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm--defined-in-abap-dictionary-and-used-to-record-a-quantity-in-a-specific-unit--a-quantity-field-must-be-associated-with-a-unit-k-version---7-52--category---general--type---abap-reference--sourceurl---https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-quantity-field-htm--abapfile---abenddic-quantity-field-htm--keywords----do----if----try----data----types----abenddic----quantity----field---------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenabap-htm------abap---dictionary--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenabap-dictionary-htm------predefined-data-types-in-abap-dictionary--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-intro-htm------attributes-of-the-predefined-dictionary-types--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-prop-htm------special-dictionary-types--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-special-htm------quantity-fields--a-quantity-field-is-a-component-of-a-structure--database-table--or-view-of-type--quan--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm--defined-in-abap-dictionary-and-used-to-record-a-quantity-in-a-specific-unit--a-quantity-field-must-be-associated-with-a-unit-key-of-a-structure--database-table--or-view-that-defines-the-unit-and-the-number-of-decimal-places--a-unit-key-is-a-component-of-a-structure--database-table--or-view-of-type-unit-defined-in-abap-dictionary-and-can-contain-a--unit-id--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenunit-id-glosry-htm--glossary-entry---from-the-database-table-t006--------handling-in-abap-dictionary---abenddic-quantity-field-1--------handling-in-dynpros---ITOC@@ABENDDIC_QUANTITY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Notes

-   Quantities and units are handled as specified by the data saved in the database tables T006... in the package SZME. This data can be edited using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") using [semantics annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm).

Handling in ABAP Dictionary

A data element of data type [QUAN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_int_pack.htm) and is stored in database tables in the [BCD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_sema.htm) with the data type [UNIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). This field is the [unit key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_glosry.htm "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Notes

-   The number of decimal places for the unit defined using the unit key of type UNIT only influences the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006. If the reference field is not found or if there is no entry in the database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Note

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm) of the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm).


---


## ABAP - Keyword Documentation / ABAP - Dictionary / Predefined Data Types in ABAP Dictionary / Attributes of the Predefined Dictionary Types / Special Dictionary Types

**Files**: 5 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Dictionary / Predefined Data Types in ABAP Dictionary / Attributes of the Predefined Dictionary Types / Special Dictionary Types

Included pages: 5


### abenddic_builtin_types_special.htm

---
title: "Special Dictionary Types"
description: |
  -   Date types and time types(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm) -   Special character-like types(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm) -   Currency fields(https://help.sap.com/doc/
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm"
abapFile: "abenddic_builtin_types_special.htm"
keywords: ["do", "data", "types", "abenddic", "builtin", "special"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) → 

Special Dictionary Types

-   [Date types and time types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm)

-   [Special character-like types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm)

-   [Currency fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm)

-   [Quantity fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_quantity_field.htm)

Continue
[Date Types and Time Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm)
[Special Character-Like Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm)
[Currency Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm)
[Quantity Fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_quantity_field.htm)


### abenddic_date_time_types.htm

---
title: "Date Types and Time Types"
description: |
  The following character-like data types in ABAP Dictionary describe date fields and time fields: -   DATS(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) or date fields(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm 'Gl
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_date_time_types.htm"
abapFile: "abenddic_date_time_types.htm"
keywords: ["insert", "do", "if", "try", "data", "types", "abenddic", "date", "time"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm) → 

Date Types and Time Types

The following character-like data types in ABAP Dictionary describe date fields and time fields:

-   [DATS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) or [date fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type DATS describes objects of the type CHAR with a length of 8 characters. It is designed for [calendar dates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencalendar_date_glosry.htm "Glossary Entry") in the format YYYYMMDD, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [TIMS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [time fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type TIMS describes objects of the type CHAR with a length of 6 characters. It is designed for [times](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenday_time_glosry.htm "Glossary Entry") in the format HHMMSS, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [ACCP](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for posting periods

From a technical perspective, the predefined data type ACCP describes objects of the type CHAR with a length of 6 characters. It is designed for posting periods in the format YYYYMM, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Notes

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) can be predefined for the types DATS and TIMS specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm)) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

---
title: "Special Character-Like Types"
description: |
  The following character-like data types in ABAP Dictionary have a special semantic meaning: -   NUMC(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for numeric texts(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_text_glosry.htm 'Gl
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_special_character_types.htm"
abapFile: "abenddic_special_character_types.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "special", "character"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [numeric texts](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_text_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm) and the associated rules apply.

-   [CLNT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [client columns](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclient_column_glosry.htm "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_database_tables_client.htm).

-   [LANG](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) for [text language](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_language_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_cluster_glosry.htm "Glossary Entry") and in the binary [RFC protocol](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrfc_protocol.htm) for passing TABLES parameters between [MDMP systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunicode_system_glosry.htm "Glossary Entry"). The [primary key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [text table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_table_glosry.htm "Glossary Entry") is still made up of the [foreign key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenforeign_key_glosry.htm "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm) are used to represent a [dynpro field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_routine_glosry.htm "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

---
title: "Currency Fields"
description: |
  A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type CURR(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and used to record an amount in a specific currency. The amount is specified as a whole number in t
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_currency_field.htm"
abapFile: "abenddic_currency_field.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenddic", "currency", "field"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [Predefined Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Predefined Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_special.htm) → 

Currency Fields

A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type [CURR](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) and used to record an amount in a specific currency. The amount is specified as a whole number in the smallest unit of the currency. A currency field must be associated with a currency key of a structure, database table, or view that specifies the currency and the number of decimal places. A currency key is a component of a structure, database table, or view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#abenddic-currency-field-1--------handling-in-dynpros---@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#abenddic-currency-field-3---notes------currencies-are-handled-as-specified-by-the-data-saved-in-the-database-tables-tcur----of-the-package-sfib--the-exchange-rates-and-other-settings-can-be-edited-in-transaction-ob08-------currency-fields-are-defined-as-elements-of--cds-entities--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-entity-glosry-htm--glossary-entry---using--semantics-annotations--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-f1-element-annotation-htm----handling-in-abap-dictionary--a-data-element-of-data-type--curr--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm--is-handled-as-a-field-of-data-type--dec--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-int-pack-htm--and-is-stored-in-database-tables-in-the--bcd--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenbcd-glosry-htm--glossary-entry---format--when-creating-a-data-element-or-a-structure-component-of-the-data-type-curr-in-an-abap-dictionary--tool--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-tools-htm---a-number-of-decimal-places-other-than-zero-must-be-defined--the-standard-value-is-two-fractional-digits---for-every-structure-component-of-data-type-curr--a-component-of-the-same-structure-or-of-a-different-structure--database-table--or-view-must-be-specified-when-editing-the-individual-component-as-a--reference-field--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-structures-sema-htm--with-the-data-type--cuky--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm---this-field-is-the--currency-key--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencurrency-key-glosry-htm--glossary-entry---that-defines-the-actual-currency--from-a-technical-perspective--the-data-type-cuky-is-handled-like-a-type-char-with-length-5---notes------the-number-of-decimal-places-for-the-currency-defined-by-the-currency-key-of-type-cuky-only-determines-the-formatting-and-checking-of-a-currency-field-on-a-dynpro--in-principal--it-is-independent-of-the-number-given-for-the-currency-field-of-type-curr--the-default-value-of-two-decimal-places-for-currency-fields-in-abap-dictionary-is-chosen-because-most-of-the-currencies-in-the-database-table-tcurc-have-two-decimal-places-and-are-not-entered-in-the-database-table-tcurx--it-is-not-advisable-to-use-any-other-value--since-in-this-case-any-unforeseen-operations-with-currency-keys-in-abap-programs-are-largely-ignored-------the-conversion-function--currency--conversion--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencds-f1-conversion-functions-htm--in--abap-cds--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenabap-cds-glosry-htm--glossary-entry---also-assumes-two-decimal-places-for-currency-fields--if-the-function-for-currency-fields-is-used-with-other-amounts-of-decimal-places--unexpected-behaviour-may-arise-------as-in--general-packed-numbers--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-int-pack-htm---the-number-of-places-in-type-curr-should-be-odd---handling-in-dynpros--for-the-display-of-an-input-output-field-of-type-curr-on-a--dynpro--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abendynpro-glosry-htm--glossary-entry----the-content-is-displayed-as-character-like-content-and-in-accordance-with-a-type-dependent-mask--as-for-all--dynpro-fields--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abendynpro-field-glosry-htm--glossary-entry----here--the-positioning-of-the-decimal-point-for-a-currency-field-of-type-curr-on-a-dynpro-is-completely-independent-of-the-number-of-decimal-places-specified-by-the-data-element-in-abap-dictionary--greater-than-or-equal-to-one--the-default-value-is-two---the-number-of-decimal-places-on-a-dynpro-is-defined-as-follows-------when-displaying-a-dynpro-field-of-type-curr--the-reference-field-for-the-currency-key-is-searched-for-in-the-global-data-of-the-current-abap-program--the-content-of-this-field-must-be-a-valid--currency-id--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abencurrency-id-glosry-htm--glossary-entry---from-the-database-table-tcurc--if-the-reference-field-is-not-found-or-there-is-no-entry-in-the-database-table-tcurx-with-the-content-of-the-field--the-currency-field-is-displayed-with-two-fractional-digits-by-default------the-reference-field-is-either-defined-in-the-relevant-structure-in-abap-dictionary-or-was-defined-using-screen-painter-for-the-attributes-of-the-dynpro-field--it-does-not-have-to-be-present-on-the-dynpro-itself-------if-the-currency-id-for-the-reference-field-is-found-in-the-database-table-tcurx--the-currency-field-is-displayed-with-the-decimal-places-specified-there--this-also-applies-to-initial-reference-fields---note--a-dynpro-therefore-only-uses-the-string-of-digits-of-a-currency-field-from-the-abap-program--or-a--conversion-routine--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenconversion-routine-glosry-htm--glossary-entry---in-between--or-just-sends-this-string--any-information-about-currency-keys-and-decimal-places-is-not-passed-automatically--it-must-be-ensured-that-the-reference-field-for-pbo-is-filled-with-the-appropriate-value--for-pai--the-correct-currency-key-plays-a-part-in-the-automatic-format-check--especially-on-dynpros-in-which-currency-fields-are-displayed-in-differing-currencies--it-must-be-ensured-that-the-reference-field-is-transported-before-the-currency-by-using-the-statements--chain--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-dynpchain-htm--and--field--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-dynpfield-htm----handling-in-abap-programs--the-abap-type-that-corresponds-to-the-curr-data-type-is-p--an-abap-data-object-declared-with-reference-to-a-dictionary-type-of-type-curr-has-the-number-of-decimal-places-defined-there--greater-than-or-equal-to-one-and-the-default-is-two---these-decimal-places-are-respected-for-all-operations-and-calculations--as-for-all-packed-numbers--the-only-exceptions-are-the-programs-for-which-the-program-property--fixed-point-arithmetic--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenfixed-point-arithmetic-glosry-htm--glossary-entry---was-not-set---to-work-correctly-with-a-currency-field--all-digits-in-the-number-must-be-recorded-as-currency-amounts-in-the-smallest-possible-currency-units--regardless-of-the-number-of-decimal-places--this-occurs-automatically-sometimes--for-example--if--currency--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapwrite-to-options-htm--is-used-after--write---to----https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapwrite-to-htm--or-the-formatting-option--currency--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abapcompute-string-format-options-htm--in-an--embedded-expression--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenstring-templates-expressions-htm--of-a--character-string-template--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenstring-templates-htm---for-other-operations--the-following-restrictions-apply-------comparison--addition--subtraction--and-division-of-two-currency-fields-with-the-same-number-of-fractional-digits-are-not-critical-------multiplication-with-and-division-by-a-non-currency-dependent-number-is-not-critical-------all-other-operations-are-critical--for-example-------multiplication-of-two-currency-fields-------operations-between-two-fields-with-different-currencies-that-include-assignments-------assignments-of-non-currency-dependent-numbers-to-currency-fields---accurate-results-should-not-be-expected-when-performing-critical-operations-if-the-number-of-decimal-places-in-the-program-does-not-match-the-number-in-the-currency---note--for-currencies--one-of-the-data-types-for--decimal-floating-point-numbers--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-decimal-floating-point-htm--is-recommended-rather-than-the-data-type-curr--the-currency-compliant-formatting-is-supported-on-dynpros-by-output-styles-and-by-style-compatible-formatting-in-abap-programs--see-the--executable-example--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenwrite-style-abexa-htm---------abenddic-quantity-field-htm------title---quantity-fields--description------a-quantity-field-is-a-component-of-a-structure--database-table--or-view-of-type-quan-https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm--defined-in-abap-dictionary-and-used-to-record-a-quantity-in-a-specific-unit--a-quantity-field-must-be-associated-with-a-unit-k-version---7-52--category---general--type---abap-reference--sourceurl---https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-quantity-field-htm--abapfile---abenddic-quantity-field-htm--keywords----do----if----try----data----types----abenddic----quantity----field---------------sap-netweaver-as-abap-release-752---copyright-2017-sap-ag--all-rights-reserved----abap---keyword-documentation--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenabap-htm------abap---dictionary--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenabap-dictionary-htm------predefined-data-types-in-abap-dictionary--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-intro-htm------attributes-of-the-predefined-dictionary-types--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-prop-htm------special-dictionary-types--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-special-htm------quantity-fields--a-quantity-field-is-a-component-of-a-structure--database-table--or-view-of-type--quan--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenddic-builtin-types-htm--defined-in-abap-dictionary-and-used-to-record-a-quantity-in-a-specific-unit--a-quantity-field-must-be-associated-with-a-unit-key-of-a-structure--database-table--or-view-that-defines-the-unit-and-the-number-of-decimal-places--a-unit-key-is-a-component-of-a-structure--database-table--or-view-of-type-unit-defined-in-abap-dictionary-and-can-contain-a--unit-id--https---help-sap-com-doc-abapdocu-752-index-htm-7-52-en-us-abenunit-id-glosry-htm--glossary-entry---from-the-database-table-t006--------handling-in-abap-dictionary---abenddic-quantity-field-1--------handling-in-dynpros---ITOC@@ABENDDIC_QUANTITY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Notes

-   Quantities and units are handled as specified by the data saved in the database tables T006... in the package SZME. This data can be edited using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry") using [semantics annotations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_element_annotation.htm).

Handling in ABAP Dictionary

A data element of data type [QUAN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_int_pack.htm) and is stored in database tables in the [BCD](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_tools.htm), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_structures_sema.htm) with the data type [UNIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types.htm). This field is the [unit key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_glosry.htm "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Notes

-   The number of decimal places for the unit defined using the unit key of type UNIT only influences the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006. If the reference field is not found or if there is no entry in the database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Note

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to_options.htm) of the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapwrite_to.htm).


---


## ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / log_exp - Logical Expressions / rel_exp - Comparison Expressions / rel_exp - Relational Operators / rel_exp - Relational Operators for All Data Types

**Files**: 6 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

---
title: "Logical Functions"
description: |
  Logical functions belong to the predefined functions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). They are divided into: -   Boolean functions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm) -   Predicate functions(
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm"
abapFile: "abenlogic_functions.htm"
keywords: ["do", "abenlogic", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) → 

Logical Functions

Logical functions belong to the [predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). They are divided into:

-   [Boolean functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm)

-   [Predicate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions.htm)

Note

The program DEMO\_EXPRESSIONS shows you examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool - Boolean Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm)


### abenboole_functions.htm

---
title: "Effect"
description: |
  The Boolean functions determine the truth value(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm 'Glossary Entry') of a logical expression log_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) specified as an argument. For log
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm"
abapFile: "abenboole_functions.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenboole", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [Logical Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm) → 

boolc, boolx, xsdbool - Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The Boolean functions determine the [truth value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry") of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type determined by the function and expresses the truth value of the logical expression using a value of this type.

Note

These functions can be viewed as a partial replacement for the Boolean data type for truth values not available in ABAP. In particular, xsdbool and (with restrictions) boolc can be used in many operand positions where input parameters of the type abap\_bool of the type group ABAP are expected.

Variant 1

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm) and can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be edited directly using the function [translate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentranslate_functions.htm) or another suitable [processing function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm).

-   The result of boolc must not be compared with the constants abap\_true and abap\_false in relational expressions, since the comparison converts the latter from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is required anyway, the function xsdbool can be used instead of boolc. The result of this function has the same ABAP type as abap\_bool.

-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_initial.htm), since a blank is returned (not an empty string). If this is the required behavior, the function xsdbool can be used instead of boolc.

-   If boolc is used in inappropriate places (as specified in the points above), a syntax warning is produced (which can be hidden using a pragma).

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Calls a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) were being executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) were being executed. bit expects a data object of the type i. In principle, boolx is one of the [bit functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) and can be used in all positions where a [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") is also allowed.

Note

The function boolx can be used for efficient saving of sequences of truth values.

Example

The result of the following [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") is hexadecimal 55, the same as the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm).

DATA(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value "X" for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from ABAP Dictionary. This type (which references the identically named domain with the type CHAR and length 1) is handled like a real Boolean type in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_schema.htm) using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   The result of xsdbool can be used like a value of the type abap\_bool and compared with the constants abap\_true and abap\_false.

-   If the logical expression is false, the result of boolc meets the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_initial.htm), since the returned blank is the type-dependent initial value too.

-   The result of xsdbool cannot usually be implemented directly using a [processing function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm) such as [translate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentranslate_functions.htm), since the trailing blanks here are ignored in text fields with the type c. The result of a false logical expression would be ignored. The result of the function boolc with the type string is better suited to transformations of this type.

-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/tr/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool. A [predicative method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") is specified as the argument of this function. The variable is then serialized to [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_glosry.htm "Glossary Entry") using the predefined [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_id.htm). This produces the value true or false. After being compared with the identically typed constant abap\_false, the result of the serializations is either read or displayed.

The result would be very different if boolc were used instead of xsdbool. Firstly, the transformations would have a different result (since the values "X" and " " are not transformed to true or false); secondly, the logical expression gui\_flag = abap\_false would always be false (since abap\_false loses its blank when converted to the type string).

DATA(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML DATA(xml).
DATA(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
DATA(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / log_exp - Logical Expressions / rel_exp - Comparison Expressions / rel_exp - Relational Operators / rel_exp - Relational Operators for Character-Like Data Types

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

---
title: "Logical Functions"
description: |
  Logical functions belong to the predefined functions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). They are divided into: -   Boolean functions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm) -   Predicate functions(
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm"
abapFile: "abenlogic_functions.htm"
keywords: ["do", "abenlogic", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) → 

Logical Functions

Logical functions belong to the [predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). They are divided into:

-   [Boolean functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm)

-   [Predicate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions.htm)

Note

The program DEMO\_EXPRESSIONS shows you examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool - Boolean Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm)


### abenboole_functions.htm

---
title: "Effect"
description: |
  The Boolean functions determine the truth value(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm 'Glossary Entry') of a logical expression log_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) specified as an argument. For log
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm"
abapFile: "abenboole_functions.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenboole", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [Logical Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm) → 

boolc, boolx, xsdbool - Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The Boolean functions determine the [truth value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry") of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type determined by the function and expresses the truth value of the logical expression using a value of this type.

Note

These functions can be viewed as a partial replacement for the Boolean data type for truth values not available in ABAP. In particular, xsdbool and (with restrictions) boolc can be used in many operand positions where input parameters of the type abap\_bool of the type group ABAP are expected.

Variant 1

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm) and can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be edited directly using the function [translate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentranslate_functions.htm) or another suitable [processing function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm).

-   The result of boolc must not be compared with the constants abap\_true and abap\_false in relational expressions, since the comparison converts the latter from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is required anyway, the function xsdbool can be used instead of boolc. The result of this function has the same ABAP type as abap\_bool.

-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_initial.htm), since a blank is returned (not an empty string). If this is the required behavior, the function xsdbool can be used instead of boolc.

-   If boolc is used in inappropriate places (as specified in the points above), a syntax warning is produced (which can be hidden using a pragma).

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Calls a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) were being executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) were being executed. bit expects a data object of the type i. In principle, boolx is one of the [bit functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) and can be used in all positions where a [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") is also allowed.

Note

The function boolx can be used for efficient saving of sequences of truth values.

Example

The result of the following [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") is hexadecimal 55, the same as the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm).

DATA(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value "X" for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from ABAP Dictionary. This type (which references the identically named domain with the type CHAR and length 1) is handled like a real Boolean type in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_schema.htm) using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   The result of xsdbool can be used like a value of the type abap\_bool and compared with the constants abap\_true and abap\_false.

-   If the logical expression is false, the result of boolc meets the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_initial.htm), since the returned blank is the type-dependent initial value too.

-   The result of xsdbool cannot usually be implemented directly using a [processing function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm) such as [translate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentranslate_functions.htm), since the trailing blanks here are ignored in text fields with the type c. The result of a false logical expression would be ignored. The result of the function boolc with the type string is better suited to transformations of this type.

-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/tr/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool. A [predicative method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") is specified as the argument of this function. The variable is then serialized to [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_glosry.htm "Glossary Entry") using the predefined [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_id.htm). This produces the value true or false. After being compared with the identically typed constant abap\_false, the result of the serializations is either read or displayed.

The result would be very different if boolc were used instead of xsdbool. Firstly, the transformations would have a different result (since the values "X" and " " are not transformed to true or false); secondly, the logical expression gui\_flag = abap\_false would always be false (since abap\_false loses its blank when converted to the type string).

DATA(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML DATA(xml).
DATA(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
DATA(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / log_exp - Logical Expressions / rel_exp - Comparison Expressions / rel_exp - Comparison Rules / rel_exp - Comparing Elementary Data Types / rel_exp - Comparison Type of Calculation Expressions

**Files**: 4 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Expressions and Functions for Conditions / Logical Functions

Included pages: 2


### abenlogic_functions.htm

---
title: "Logical Functions"
description: |
  Logical functions belong to the predefined functions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). They are divided into: -   Boolean functions(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm) -   Predicate functions(
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm"
abapFile: "abenlogic_functions.htm"
keywords: ["do", "abenlogic", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) → 

Logical Functions

Logical functions belong to the [predefined functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuilt_in_functions.htm). They are divided into:

-   [Boolean functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm)

-   [Predicate functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_functions.htm)

Note

The program DEMO\_EXPRESSIONS shows you examples of how to use logical functions.

Continue
[boolc, boolx, xsdbool - Boolean Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm)


### abenboole_functions.htm

---
title: "Effect"
description: |
  The Boolean functions determine the truth value(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm 'Glossary Entry') of a logical expression log_exp(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) specified as an argument. For log
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenboole_functions.htm"
abapFile: "abenboole_functions.htm"
keywords: ["do", "if", "try", "method", "data", "types", "abenboole", "functions"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Expressions and Functions for Conditions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expr_func.htm) →  [Logical Functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogic_functions.htm) → 

boolc, boolx, xsdbool - Boolean Functions

Variants:

[1\. ... boolc( log\_exp ) ...](#!ABAP_VARIANT_1@1@)
[2\. ... boolx( bool = log\_exp bit = bit ) ...](#!ABAP_VARIANT_2@2@)
[3\. ... xsdbool( log\_exp ) ...](#!ABAP_VARIANT_3@3@)

Effect

The Boolean functions determine the [truth value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_value_glosry.htm "Glossary Entry") of a logical expression [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) specified as an argument. For log\_exp, any logical expression can be specified in accordance with the applicable rules. The return value of a Boolean function has a data type determined by the function and expresses the truth value of the logical expression using a value of this type.

Note

These functions can be viewed as a partial replacement for the Boolean data type for truth values not available in ABAP. In particular, xsdbool and (with restrictions) boolc can be used in many operand positions where input parameters of the type abap\_bool of the type group ABAP are expected.

Variant 1

... boolc( log\_exp ) ...

Effect

The function boolc returns a single-character character string of the type string. If the logical expression is true, "X" is returned. If the logical expression is false, a blank is returned. In principle, boolc is one of the [processing functions with character-like results](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm) and can be specified in [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and in [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   If boolc requires return values other than "X" or " " (for example, "Y" and "N" or "1" and "0"), the result of boolc can be edited directly using the function [translate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentranslate_functions.htm) or another suitable [processing function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm).

-   The result of boolc must not be compared with the constants abap\_true and abap\_false in relational expressions, since the comparison converts the latter from c to string and ignores any blanks. Comparisons of this type are not usually necessary. If a comparison of this type is required anyway, the function xsdbool can be used instead of boolc. The result of this function has the same ABAP type as abap\_bool.

-   If the logical expression is false, the result of boolc does not meet the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_initial.htm), since a blank is returned (not an empty string). If this is the required behavior, the function xsdbool can be used instead of boolc.

-   If boolc is used in inappropriate places (as specified in the points above), a syntax warning is produced (which can be hidden using a pragma).

Example

The value 0, 1, or 2 is assigned to the variable bool\_value, depending on the result of the logical expressions log\_exp1 and log\_exp2.

DATA bool\_value TYPE i.
bool\_value = strlen( condense( val = boolc( log\_exp1 ) ) ) +
             strlen( condense( val = boolc( log\_exp2 ) ) ).

Example

Calls a method, where the input parameter no\_dialog is supplied with the character-like representation of the results of a predicate expression.

PARAMETERS word TYPE c length 30.
DATA result\_tab TYPE cl\_abap\_docu=>search\_results.
cl\_abap\_docu=>start(
  EXPORTING word           = word
            no\_dialog      = boolc( sy-batch IS NOT INITIAL )
  IMPORTING search\_results = result\_tab ).

Variant 2

... boolx( bool = log\_exp bit = bit ) ...

Effect

The function boolx returns a byte chain of the type xstring. If the logical expression is true, the byte chain is filled as if the function [bit-set( bit )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) were being executed. If the logical expression is false, the byte chain is filled as if the function [bit-set( 0 )](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) were being executed. bit expects a data object of the type i. In principle, boolx is one of the [bit functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_functions.htm) and can be used in all positions where a [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") is also allowed.

Note

The function boolx can be used for efficient saving of sequences of truth values.

Example

The result of the following [bit expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry") is hexadecimal 55, the same as the calculated bit string 01010101.

DATA(result) = boolx( bool = 2 > 1 bit = 8 )
        BIT-OR boolx( bool = 2 < 1 bit = 7 )
        BIT-OR boolx( bool = 2 > 1 bit = 6 )
        BIT-OR boolx( bool = 2 < 1 bit = 5 )
        BIT-OR boolx( bool = 2 > 1 bit = 4 )
        BIT-OR boolx( bool = 2 < 1 bit = 3 )
        BIT-OR boolx( bool = 2 > 1 bit = 2 )
        BIT-OR boolx( bool = 2 < 1 bit = 1 ).

The bit expression above can be expressed using the following iteration with the operator [REDUCE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_reduce.htm).

DATA(result) =
  REDUCE xstring( INIT x TYPE xstring
                  FOR j = 4 THEN j - 1 UNTIL j < 1
                  LET b1 = 2 \* j b2 = 2 \* j - 2 IN
                  NEXT x = x BIT-OR boolx( bool = 2 > 1  bit = b1 )
                             BIT-OR boolx( bool = 2 < 1  bit = b2 ) ).

Variant 3

... xsdbool( log\_exp ) ...

Effect

Like boolc, the function xsdbool returns the value "X" for true and a blank for false. The data type of the return value, however, has the type c of the length 1 here.

The return value references the type XSDBOOLEAN from ABAP Dictionary. This type (which references the identically named domain with the type CHAR and length 1) is handled like a real Boolean type in serializations and deserializations to or from [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_asjson_schema.htm) using [CALL TRANSFORMATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcall_transformation.htm). The XML or JSON values true and false are assigned to the values "X" and " " of this type.

xsdbool can be specified in [general](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry") and [character-like expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharlike_expr_position_glosry.htm "Glossary Entry").

Notes

-   The result of xsdbool can be used like a value of the type abap\_bool and compared with the constants abap\_true and abap\_false.

-   If the logical expression is false, the result of boolc meets the condition [IS INITIAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_initial.htm), since the returned blank is the type-dependent initial value too.

-   The result of xsdbool cannot usually be implemented directly using a [processing function](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprocess_functions.htm) such as [translate](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentranslate_functions.htm), since the trailing blanks here are ignored in text fields with the type c. The result of a false logical expression would be ignored. The result of the function boolc with the type string is better suited to transformations of this type.

-   The abbreviation xsd stands for [XML schema data types](http://www.w3.org/tr/xmlschema-2/).

Example

This example sets the type and the value of the variable gui\_flag declared inline using the Boolean function xsdbool. A [predicative method call](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicative_method_call_glosry.htm "Glossary Entry") is specified as the argument of this function. The variable is then serialized to [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasxml_glosry.htm "Glossary Entry") and [asJSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenasjson_glosry.htm "Glossary Entry") using the predefined [identity transformation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenid_trafo_glosry.htm "Glossary Entry") [ID](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_id.htm). This produces the value true or false. After being compared with the identically typed constant abap\_false, the result of the serializations is either read or displayed.

The result would be very different if boolc were used instead of xsdbool. Firstly, the transformations would have a different result (since the values "X" and " " are not transformed to true or false); secondly, the logical expression gui\_flag = abap\_false would always be false (since abap\_false loses its blank when converted to the type string).

DATA(gui\_flag) = xsdbool( cl\_demo\_sap\_gui=>check( ) ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML DATA(xml).
DATA(writer) =
  cl\_sxml\_string\_writer=>create( type = if\_sxml=>co\_xt\_json ).
CALL TRANSFORMATION id SOURCE gui\_flag = gui\_flag
                       RESULT XML writer.
DATA(json) = writer->get\_output( ).
cl\_demo\_output=>write\_xml( xml ).
cl\_demo\_output=>write\_json( json ).
IF gui\_flag = abap\_false.
  cl\_demo\_output=>get( ).
ELSE.
  cl\_demo\_output=>display( ).
ENDIF.


---


## ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Type Reference

**Files**: 2 | **Difficulty**: intermediate

# ABAP - Keyword Documentation / ABAP - Reference / Obsolete Language Elements / Obsolete Type Reference

Included pages: 2


### abenobsolete_typing.htm

---
title: "Obsolete Type Reference"
description: |
  -   Obsolete use of LIKE(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlike_obsolete.htm) LIKE - obsolete(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlike_obsolete.htm)
version: "7.52"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_typing.htm"
abapFile: "abenobsolete_typing.htm"
keywords: ["do", "abenobsolete", "typing"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) → 

Obsolete Type Reference

-   [Obsolete use of LIKE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlike_obsolete.htm)

Continue
[LIKE - obsolete](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlike_obsolete.htm)


### abenlike_obsolete.htm

---
title: "LIKE - obsolete"
description: |
  Obsolete Syntax ... LIKE dtype ... Effect Outside of classes, the addition LIKE can also be used to refer to flat structures(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm 'Glossary Entry'), database tables(https://help.sap.com/doc/abapdocu_752_index_htm
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlike_obsolete.htm"
abapFile: "abenlike_obsolete.htm"
keywords: ["do", "if", "try", "class", "data", "types", "abenlike", "obsolete"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_obsolete.htm) →  [Obsolete Type Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenobsolete_typing.htm) → 

LIKE - obsolete

Obsolete Syntax

... LIKE dtype ...

Effect

Outside of classes, the addition LIKE can also be used to refer to [flat structures](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_structure_glosry.htm "Glossary Entry"), [database tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_table_glosry.htm "Glossary Entry"), or [classic views](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenclassical_view_glosry.htm "Glossary Entry") in ABAP Dictionary, as well as to their components. A LIKE reference to the flat components of a deep dictionary structure is not possible. This affects the following ways of using LIKE:

-   in the declarative statements [TYPES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptypes.htm), [DATA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdata.htm), and so on.

-   in [complete typings](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentyping_complete.htm)

-   in the statement [PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapparameters_type.htm)

If there is a data object called dtype in a local context, then this object obscures the data type from ABAP Dictionary.

Notes

-   Use the addition LIKE only to refer to data objects.

-   It is not possible to make a LIKE reference to a [CDS entity](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_entity_glosry.htm "Glossary Entry"). It is possible, however, to make a LIKE reference to a [CDS database view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_database_view_glosry.htm "Glossary Entry").

-   Always use the addition TYPE to refer to data types.

Bad Example

DATA wa LIKE scarr.

Good Example

DATA wa TYPE scarr.


---
