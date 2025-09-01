# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Data Types / DDIC - Properties of the Built-In Dictionary Types / DDIC - Special Dictionary Types

Included pages: 6


### abenddic_builtin_types_special.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) → 

DDIC - Special Dictionary Types

-   [Date types and time types](javascript:call_link\('abenddic_date_time_types.htm'\))

-   [Special character-like types](javascript:call_link\('abenddic_special_character_types.htm'\))

-   [Currency fields](javascript:call_link\('abenddic_currency_field.htm'\))

-   [Quantity fields](javascript:call_link\('abenddic_quantity_field.htm'\))

-   [Geodata Types](javascript:call_link\('abenddic_geo_data.htm'\))

Continue
[DDIC - Date Fields, Time Fields, and Time Stamp Fields](javascript:call_link\('abenddic_date_time_types.htm'\))
[DDIC - Special Character-Like Types](javascript:call_link\('abenddic_special_character_types.htm'\))
[DDIC - Currency Fields](javascript:call_link\('abenddic_currency_field.htm'\))
[DDIC - Quantity Fields](javascript:call_link\('abenddic_quantity_field.htm'\))
[DDIC - Geodata Types](javascript:call_link\('abenddic_geo_data.htm'\))


### abenddic_date_time_types.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

DDIC - Date Fields, Time Fields, and Time Stamp Fields

The following data types in ABAP Dictionary describe date fields, time fields, and time stamp fields:

-   [Date Types, Time Types, and Time Stamp Types](#abenddic-date-time-types-1--------character-like-date-fields-and-time-fields---@ITOC@@ABENDDIC_DATE_TIME_TYPES_2)

Date Types, Time Types, and Time Stamp Types

The following built-in data types in ABAP Dictionary represent real date types, time types, and time stamp types in a database:

-   [DATN](javascript:call_link\('abenddic_builtin_types.htm'\)) for date fields in the database

-   [TIMN](javascript:call_link\('abenddic_builtin_types.htm'\)) for time fields in the database

-   [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)) for time stamp fields in the database

Database fields with these types generally contain only valid values for dates, times, and time stamps in the internal representation of the database. These types are currently only supported by [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry").

Hints

-   The dictionary types DATN and TIMN are mapped to the character-like ABAP date type and time type [d](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) or [t](javascript:call_link\('abenbuiltin_types_date_time.htm'\)). The built-in ABAP type [utclong](javascript:call_link\('abenbuiltin_types_date_time.htm'\)), on the other hand, provides a real time stamp type for UTCLONG.

-   The types DATN and TIMN are recommended for saving individual dates and times. Access to dates and times in the corresponding functions and expressions is optimized for these types. In the case of the dictionary types DATS and TIMS, such access may not be possible at all or they may need to be converted to real date and time types.

-   The output formats for fields on dynpros and Web dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the types DATN, TIMN, and UTCLONG specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary.

Character-Like Date Fields and Time Fields

Instances of the following data types in ABAP Dictionary are created on the database using character-like fields:

-   [DATS](javascript:call_link\('abenddic_builtin_types.htm'\)) for [date fields](javascript:call_link\('abendate_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type DATS describes objects of the type CHAR with a length of 8 characters. It is intended to be used for a [calendar date](javascript:call_link\('abencalendar_date_glosry.htm'\) "Glossary Entry") with the format YYYYMMDD. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [TIMS](javascript:call_link\('abenddic_builtin_types.htm'\)) for [time fields](javascript:call_link\('abentime_field_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type TIMS describes objects of the type CHAR with a length of 6 characters. It is intended to be used for a [time](javascript:call_link\('abenday_time_glosry.htm'\) "Glossary Entry") with the format HHMMSS. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) and the associated rules apply.

-   [ACCP](javascript:call_link\('abenddic_builtin_types.htm'\)) for posting periods

From a technical perspective, the built-in data type ACCP describes objects of the type CHAR with a length of 6 characters. It is intended to be used for a posting period with the format YYYYMM. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Hints

-   If possible, the types DATN and TIMN should be used.

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) can be predefined for the types DATS and TIMS specific to each user in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\))) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

DDIC - Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](javascript:call_link\('abenddic_builtin_types.htm'\)) for [numeric texts](javascript:call_link\('abennumeric_text_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numeric texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](javascript:call_link\('abenbuiltin_types_character.htm'\)) and the associated rules apply.

-   [CLNT](javascript:call_link\('abenddic_builtin_types.htm'\)) for [client columns](javascript:call_link\('abenclient_column_glosry.htm'\) "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a DDIC database table, this makes the DDIC database table [client-dependent](javascript:call_link\('abenddic_database_tables_client.htm'\)).

-   [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)) for [text language](javascript:call_link\('abentext_language_glosry.htm'\) "Glossary Entry")

From a technical perspective, the built-in data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. The [primary key](javascript:call_link\('abenprimary_key_glosry.htm'\) "Glossary Entry") of a [text table](javascript:call_link\('abentext_table_glosry.htm'\) "Glossary Entry") consists of the [foreign key](javascript:call_link\('abenforeign_key_glosry.htm'\) "Glossary Entry") and a field of type LANG. Furthermore, a component of structures or DDIC database tables that has the data type LANG can be flagged as a text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](javascript:call_link\('abendata_cluster_glosry.htm'\) "Glossary Entry") and in the binary [RFC protocol](javascript:call_link\('abenrfc_protocol.htm'\)) for passing TABLES parameters between [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") and [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry").

Hint

When the statements [WRITE](javascript:call_link\('abapwrite-.htm'\)) or [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)) are used to represent a [dynpro field](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](javascript:call_link\('abenconversion_routine_glosry.htm'\) "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

DDIC - Currency Fields

A currency field is a component of a DDIC structure, DDIC database table, or DDIC view defined in ABAP Dictionary of type [CURR](javascript:call_link\('abenddic_builtin_types.htm'\)) and used to record an amount in a specific currency. A currency amount is an integer in the smallest unit of the currency. The integer is constructed from all figures in a currency field while ignoring the position of the decimal separator.

A currency field must be associated with a currency key of a DDIC structure, DDIC database table, or DDIC view that specifies the currency and the number of decimal places. A currency key is a component of a DDIC structure, DDIC database table, or DDIC view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](javascript:call_link\('abencurrency_id_glosry.htm'\) "Glossary Entry") from the DDIC database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#abenddic-currency-field-1--------handling-in-dynpros---@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#abenddic-currency-field-3---hints------currencies-are-handled-as-specified-by-the-data-saved-in-the-database-tables-tcur----of-the-package-sfib--the-exchange-rates-and-other-settings-can-be-maintained-in-transaction-ob08-------currency-fields-are-defined-as-elements-of--cds-entities--javascript-call-link---abencds-entity-glosry-htm-----glossary-entry---using--semantics-annotations--javascript-call-link---abencds-f1-element-annotation-htm-------handling-in-abap-dictionary--a-data-element-of-data-type--curr--javascript-call-link---abenddic-builtin-types-htm-----is-handled-as-a-field-of-data-type--dec--javascript-call-link---abenddic-builtin-types-int-pack-htm-----and-is-stored-in-ddic-database-tables-in-the--bcd--javascript-call-link---abenbcd-glosry-htm-----glossary-entry---format--when-creating-a-data-element-or-a-structure-component-of-the-data-type-curr-in-an-abap-dictionary--tool--javascript-call-link---abenddic-tools-htm------a-number-of-decimal-places-other-than-zero-must-be-defined--the-standard-value-is-two-fractional-digits---for-every-structure-component-of-data-type-curr--a-component-of-the-same-structure-or-of-a-different-ddic-structure--ddic-database-table--or-ddic-view-must-be-specified-as-a--reference-field--javascript-call-link---abenddic-structures-sema-htm-----with-the-data-type--cuky--javascript-call-link---abenddic-builtin-types-htm------this-field-is-the--currency-key--javascript-call-link---abencurrency-key-glosry-htm-----glossary-entry---that-defines-the-actual-currency--from-a-technical-perspective--the-data-type-cuky-is-handled-like-a-type-char-with-length-5---hints------the-number-of-decimal-places-for-the-currency-defined-by-the-currency-key-of-type-cuky-only-determines-the-formatting-and-checking-of-a-currency-field-on-a-dynpro--in-principal--it-is-independent-of-the-number-given-for-the-currency-field-of-type-curr--the-default-value-of-two-decimal-places-for-currency-fields-in-abap-dictionary-is-chosen-because-most-of-the-currencies-in-the-ddic-database-table-tcurc-have-two-decimal-places-and-are-not-entered-in-the-database-table-tcurx--it-is-not-advisable-to-use-any-other-value--since-in-this-case-any-unforeseen-operations-with-currency-keys-in-abap-programs-are-largely-ignored-------the-conversion-functioncurrency--conversion---cds-view-entity--javascript-call-link---abencds-conversion-functions-v2-htm-------cds-ddic-based-view--javascript-call-link---abencds-conversion-functions-v1-htm------in--abap-cds--javascript-call-link---abenabap-cds-glosry-htm-----glossary-entry---also-assumes-two-decimal-places-for-currency-fields--if-the-function-for-currency-fields-is-used-with-other-amounts-of-decimal-places--unexpected-behavior-may-arise-------as-in--general-packed-numbers--javascript-call-link---abenddic-builtin-types-int-pack-htm------the-number-of-places-in-type-curr-should-be-odd---handling-in-dynpros--for-the-display-of-an-input-output-field-of-type-curr-on-a--dynpro--javascript-call-link---abendynpro-glosry-htm-----glossary-entry----the-content-is-displayed-as-character-like-content-and-in-accordance-with-a-type-dependent-mask--as-for-all--dynpro-fields--javascript-call-link---abendynpro-field-glosry-htm-----glossary-entry----here--the-positioning-of-the-decimal-point-for-a-currency-field-of-type-curr-on-a-dynpro-is-completely-independent-of-the-number-of-decimal-places-specified-by-the-data-element-in-abap-dictionary--greater-than-or-equal-to-one--the-default-value-is-two---the-number-of-decimal-places-on-a-dynpro-is-defined-as-follows-------when-displaying-a-dynpro-field-of-type-curr--the-reference-field-for-the-currency-key-is-searched-for-in-the-global-data-of-the-current-abap-program--the-content-of-this-field-must-be-a-valid--currency-id--javascript-call-link---abencurrency-id-glosry-htm-----glossary-entry---from-the-ddic-database-table-tcurc--if-the-reference-field-is-not-found-or-there-is-no-entry-in-the-ddic-database-table-tcurx-with-the-content-of-the-field--the-currency-field-is-displayed-with-two-fractional-digits-by-default------the-reference-field-is-either-defined-in-the-relevant-structure-in-abap-dictionary-or-was-defined-using-screen-painter-for-the-attributes-of-the-dynpro-field--it-does-not-have-to-be-present-on-the-dynpro-itself-------if-the-currency-id-for-the-reference-field-is-found-in-the-database-table-tcurx--the-currency-field-is-displayed-with-the-decimal-places-specified-there--this-also-applies-to-initial-reference-fields---hint--a-dynpro-therefore-only-uses-the-string-of-digits-of-a-currency-field-from-the-abap-program--or-a--conversion-routine--javascript-call-link---abenconversion-routine-glosry-htm-----glossary-entry---in-between--or-just-sends-this-string--any-information-about-currency-keys-and-decimal-places-is-not-passed-automatically--it-must-be-ensured-that-the-reference-field-for-pbo-is-filled-with-the-appropriate-value--for-pai--the-correct-currency-key-plays-a-part-in-the-automatic-format-check--especially-on-dynpros-in-which-currency-fields-are-displayed-in-differing-currencies--it-must-be-ensured-that-the-reference-field-is-transported-before-the-currency-by-using-the-statements--chain--javascript-call-link---dynpchain-htm-----and--field--javascript-call-link---dynpfield-htm-------handling-in-abap-programs--the-abap-type-that-corresponds-to-the-data-type-curr-is-p--an-abap-data-object-declared-with-reference-to-a-dictionary-type-of-type-curr-has-the-number-of-decimal-places-defined-there--greater-than-or-equal-to-one-and-the-default-is-two---these-decimal-places-are-respected-for-all-operations-and-calculations--as-for-all-packed-numbers--the-only-exceptions-are-the-programs-for-which-the-program-property--fixed-point-arithmetic--javascript-call-link---abenfixed-point-arithmetic-glosry-htm-----glossary-entry---was-not-set---to-work-correctly-with-a-currency-field--all-digits-in-the-number-must-be-recorded-as-currency-amounts-in-the-smallest-possible-currency-units--regardless-of-the-number-of-decimal-places--this-occurs-automatically-sometimes--for-example--if--currency--javascript-call-link---abapwrite-to-options-htm-----is-used-after--write---to----javascript-call-link---abapwrite-to-htm-----or-the-formatting-option--currency--javascript-call-link---abapcompute-string-format-options-htm-----in-an--embedded-expression--javascript-call-link---abenstring-templates-expressions-htm-----of-a--string-template--javascript-call-link---abenstring-templates-htm------for-other-operations--the-following-restrictions-apply-------comparison--addition--subtraction--and-division-of-two-currency-fields-with-the-same-number-of-fractional-digits-are-not-critical-------multiplication-with-and-division-by-a-non-currency-dependent-number-is-not-critical-------all-other-operations-are-critical--for-example-------multiplication-of-two-currency-fields-------operations-between-two-fields-with-different-currencies-that-include-assignments-------assignments-of-non-currency-dependent-numbers-to-currency-fields---accurate-results-should-not-be-expected-when-performing-critical-operations-if-the-number-of-decimal-places-in-the-program-does-not-match-the-number-in-the-currency---hints------for-currencies--one-of-the-data-types-for--decimal-floating-point-numbers--javascript-call-link---abenddic-decimal-floating-point-htm-----is-recommended-rather-than-the-data-type-curr--the-currency-compliant-formatting-is-supported-on-dynpros-by-output-styles-and-by-style-compatible-formatting-in-abap-programs--see-the--executable-example--javascript-call-link---abenwrite-style-abexa-htm-----------the-methods-convert--curr--to--decfloat-and-convert--decfloat--to--curr-of-the-system-class--cl--abap--decfloat--javascript-call-link---abencl-abap-decfloat-doc-htm-----convert-currency-amounts-to-decimal-floating-point-numbers--and-back--as-specified-by-a-currency-key--------abenddic-quantity-field-htm-------------as-abap-release-755---copyright-2020-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---dictionary--ddic---javascript-call-link---abenabap-dictionary-htm---------ddic---built-in-data-types--javascript-call-link---abenddic-builtin-types-intro-htm---------ddic---properties-of-the-built-in-dictionary-types--javascript-call-link---abenddic-builtin-types-prop-htm---------ddic---special-dictionary-types--javascript-call-link---abenddic-builtin-types-special-htm---------ddic---quantity-fields--a-quantity-field-is-a-component-of-a-structure--ddic-database-table--or-view-of-type--quan--javascript-call-link---abenddic-builtin-types-htm-----defined-in-abap-dictionary-and-used-to-record-a-quantity-in-a-specific-unit--a-quantity-field-must-be-associated-with-a-unit-key-of-a-structure--ddic-database-table--or-ddic-view-that-defines-the-unit-and-the-number-of-decimal-places--a-unit-key-is-a-component-of-a-structure--ddic-database-table--or-ddic-view-of-type-unit-defined-in-abap-dictionary-and-can-contain-a--unit-id--javascript-call-link---abenunit-id-glosry-htm-----glossary-entry---from-the-ddic-database-table-t006--------handling-in-abap-dictionary---@ITOC@@ABENDDIC_QUANTITY_FIELD_1)

-   [Handling in Dynpros](#abenddic-quantity-field-2--------handling-in-abap-programs---@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Hints

-   Quantities and units are handled as specified by the data saved in the DDIC database tables T006... in the package SZME. This data can be maintained using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") using [semantics annotations](javascript:call_link\('abencds_f1_element_annotation.htm'\)).

Handling in ABAP Dictionary

A data element of data type [QUAN](javascript:call_link\('abenddic_builtin_types.htm'\)) is handled as a field of data type [DEC](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)) and is stored in DDIC database tables in the [BCD](javascript:call_link\('abenbcd_glosry.htm'\) "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](javascript:call_link\('abenddic_tools.htm'\)), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, DDIC database table, or DDIC view must be defined as a [reference field](javascript:call_link\('abenddic_structures_sema.htm'\)) with the data type [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)). This field is the [unit key](javascript:call_link\('abenunit_glosry.htm'\) "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Hints

-   The number of decimal places for the unit defined using the unit key of type UNIT only affects the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](javascript:call_link\('abenddic_builtin_types_int_pack.htm'\)), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](javascript:call_link\('abendynpro_field_glosry.htm'\) "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](javascript:call_link\('abenunit_id_glosry.htm'\) "Glossary Entry") from the DDIC database table T006. If the reference field is not found or if there is no entry in the DDIC database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the DDIC database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Hint

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](javascript:call_link\('abapwrite_to_options.htm'\)) of the statement [WRITE *\[*TO*\]*](javascript:call_link\('abapwrite_to.htm'\)).


### abenddic_geo_data.htm

  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Built-In Data Types](javascript:call_link\('abenddic_builtin_types_intro.htm'\)) →  [DDIC - Properties of the Built-In Dictionary Types](javascript:call_link\('abenddic_builtin_types_prop.htm'\)) →  [DDIC - Special Dictionary Types](javascript:call_link\('abenddic_builtin_types_special.htm'\)) → 

DDIC - Geodata Types

The [geodata type](javascript:call_link\('abengeo_data_type_glosry.htm'\) "Glossary Entry") [GEOM\_EWKB](javascript:call_link\('abenddic_builtin_types.htm'\)) is a built-in data type in ABAP Dictionary that describes the geometric position in a given coordinate reference system.

It represents fields in the database that contain geometric data in the EWKB (Extended Well-Known Binary) format. This type is currently only supported on [SAP HANA databases](javascript:call_link\('abenhana_database_glosry.htm'\) "Glossary Entry") and references the database type ST\_GEOMETRY.

The internal representation of the geodata type GEOM\_EWKB is a [BLOB](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") (Binary Large Object) and the same rules and restrictions largely apply as to the type [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)). The type GEOM\_EWKB is mapped to the ABAP type [xstring](javascript:call_link\('abenbuiltin_types_byte.htm'\)).

At ABAP level, there is no semantic representation for geometric data. ABAP only allows geometric data to be passed between the application and the SAP HANA database. The SAP HANA database functions for geometric data types can be accessed using [AMDP](javascript:call_link\('abenamdp.htm'\)).

If the data type GEOM\_EWKB is used for a structure component or a table field of a DDIC database table, the type must be assigned a [spatial reference system](javascript:call_link\('abenddic_database_tables_sptlrf.htm'\)). This system cannot be changed once activated. The system has the ID 0 by default.

Hints

-   Columns of the data type GEOM\_EWKB are not supported as [BLOBs](javascript:call_link\('abenblob_glosry.htm'\) "Glossary Entry") in [streaming and locators in ABAP SQL](javascript:call_link\('abenstreams_locators.htm'\)). To use columns of the data type GEOM\_EWKB in streaming and locators, they have to be converted to [JSON](javascript:call_link\('abenjson_glosry.htm'\) "Glossary Entry") format first. This can be done with the conversion function [AS\_GEO\_JSON](javascript:call_link\('abensql_geo_conv_func.htm'\)).

-   [NOT NULL](javascript:call_link\('abenddic_database_tables_init.htm'\)) cannot be set for a column of the type GEOM\_EWKB.
