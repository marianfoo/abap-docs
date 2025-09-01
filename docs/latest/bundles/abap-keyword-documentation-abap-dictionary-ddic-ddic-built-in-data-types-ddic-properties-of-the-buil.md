# ABAP - Keyword Documentation / ABAP - Dictionary (DDIC) / DDIC - Built-In Data Types / DDIC - Properties of the Built-In Dictionary Types / DDIC - Special Dictionary Types

Included pages: 6


### abenddic_builtin_types_special.htm

---
title: "DDIC - Special Dictionary Types"
description: |
  -   Date types and time types(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_types.htm) -   Special character-like types(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_special_character_types.htm) -   Currency fields(https://help.sa
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_special.htm"
abapFile: "abenddic_builtin_types_special.htm"
keywords: ["do", "if", "data", "types", "abenddic", "builtin", "special"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Special%20Dictionary%20Types%2C%20ABENDDIC_BUILTIN_TYPES_SPECIAL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:
)

DDIC - Special Dictionary Types

-   [Date types and time types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_types.htm)
-   [Special character-like types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_special_character_types.htm)
-   [Currency fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field.htm)
-   [Quantity fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_quantity_field.htm)
-   [Geodata Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_geo_data.htm)

Continue
[DDIC - Date Fields, Time Fields, and Time Stamp Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_types.htm)
[DDIC - Special Character-Like Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_special_character_types.htm)
[DDIC - Currency Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field.htm)
[DDIC - Quantity Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_quantity_field.htm)
[DDIC - Geodata Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_geo_data.htm)


### abenddic_date_time_types.htm

---
title: "DDIC - Date Fields, Time Fields, and Time Stamp Fields"
description: |
  The following data types in ABAP Dictionary describe date fields, time fields, and time stamp fields: -   Date Types, Time Types, and Time Stamp Types(#abenddic-date-time-types-1-------character-like-date-fields-and-time-fields---@ITOC@@ABENDDIC_DATE_TIME_TYPES_2) Date Types, Time Types, and Time
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_date_time_types.htm"
abapFile: "abenddic_date_time_types.htm"
keywords: ["insert", "do", "if", "case", "try", "data", "types", "abenddic", "date", "time"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Date%20Fields%2C%20Time%20Fields%2C%20and%20Time%20Stamp%20Fields%2C%20ABENDDIC_DATE_TIME_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0A
Suggestion%20for%20improvement:)

DDIC - Date Fields, Time Fields, and Time Stamp Fields

The following data types in ABAP Dictionary describe date fields, time fields, and time stamp fields:

-   [Date Types, Time Types, and Time Stamp Types](#abenddic-date-time-types-1-------character-like-date-fields-and-time-fields---@ITOC@@ABENDDIC_DATE_TIME_TYPES_2)

Date Types, Time Types, and Time Stamp Types   

The following built-in data types in ABAP Dictionary represent real date types, time types, and time stamp types in a database:

-   [DATN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for date fields in the database.
-   [TIMN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for time fields in the database.
-   [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for time stamp fields in the database.

Database fields with these types generally contain only valid values for dates, times, and time stamps in the internal representation of the database. These types are currently only supported by [SAP HANA databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry").

Hints

-   The dictionary types DATN and TIMN are mapped to the character-like ABAP date type and time type [d](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm) or [t](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm). The built-in ABAP type [utclong](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm), on the other hand, provides a real time stamp type for UTCLONG.
-   The types DATN and TIMN are recommended for saving individual dates and times. Access to dates and times in the corresponding functions and expressions is optimized for these types. In the case of the dictionary types DATS and TIMS, such access may not be possible at all or they may need to be converted to real date and time types.
-   The output formats for fields on dynpros and Web dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) can be predefined for the types DATN, TIMN, and UTCLONG specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary.

Character-Like Date Fields and Time Fields   

Instances of the following data types in ABAP Dictionary are created on the database using character-like fields:

-   [DATS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for [date fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendate_field_glosry.htm "Glossary Entry")
    
    From a technical perspective, the built-in data type DATS describes objects of the type CHAR with a length of 8 characters. It is intended to be used for a [calendar date](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencalendar_date_glosry.htm "Glossary Entry") with the format YYYYMMDD. However, there is no validity check when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.
    
-   [TIMS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for [time fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_field_glosry.htm "Glossary Entry")
    
    From a technical perspective, the built-in data type TIMS describes objects of the type CHAR with a length of 6 characters. It is intended to be used for a [time](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenday_time_glosry.htm "Glossary Entry") with the format HHMMSS. However, there is no validity check when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.
    
-   [ACCP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) for posting periods
    
    From a technical perspective, the built-in data type ACCP describes objects of the type CHAR with a length of 6 characters. It is intended to be used for a posting period with the format YYYYMM. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.
    

Hints

-   If possible, the types DATN and TIMN should be used.
-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) can be predefined for the types DATS and TIMS specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.
-   When a [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm)) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

---
title: "DDIC - Special Character-Like Types"
description: |
  The following character-like data types in ABAP Dictionary have a special semantic meaning: -   NUMC(abenddic_builtin_types.htm#abenddic-builtin-types-7--for--numeric-texts--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abennumeric-text-glosry-htm--glossary-entry------------from-
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_special_character_types.htm"
abapFile: "abenddic_special_character_types.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "special", "character"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Special%20Character-Like%20Types%2C%20ABENDDIC_SPECIAL_CHARACTER_TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

DDIC - Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](abenddic_builtin_types.htm#abenddic-builtin-types-7--for--numeric-texts--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abennumeric-text-glosry-htm--glossary-entry------------from-a-technical-perspective--the-built-in-data-type-numc-describes-objects-of-the-type-char-with-a-maximum-length-of-255-characters--it-is-intended-for-numeric-texts--this-is-not-checked-however-when-writing-to-or-reading-from-database-fields-of-this-type--automatic-checks-are-only-made-for-dynpro-fields-typed-with-reference-to-numc--in-abap--numc-is-assigned-to-the-special-type--n--https---help-sap-com-doc-abapdocu-latest-index-htm-latest-en-us-abenbuiltin-types-character-htm--and-the-associated-rules-apply------------clnt--abenddic-builtin-types-htm-@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for [client columns](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenclient_column_glosry.htm "Glossary Entry")
    
    From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a DDIC database table, this makes the DDIC database table [client-dependent](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_client.htm).
    
-   [LANG](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) for language keys
    
    From a technical perspective, the built-in data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. The [primary key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [text table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_table_glosry.htm "Glossary Entry") consists of the [foreign key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenforeign_key_glosry.htm "Glossary Entry") and a field of type LANG. Furthermore, a component of a a DDIC database table or a structure that has the data type LANG can be flagged as a [text language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_language_glosry.htm "Glossary Entry").
    

Hint

When the statements [WRITE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) are used to represent a [dynpro field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

---
title: "DDIC - Currency Fields"
description: |
  A currency field is a component of a DDIC structure, DDIC database table, or DDIC view used to store an amount in a specific currency. A currency amount is an integer in the smallest unit of the currency. The integer is constructed from all figures in a currency field while ignoring the position of
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_currency_field.htm"
abapFile: "abenddic_currency_field.htm"
keywords: ["do", "while", "if", "case", "try", "method", "class", "data", "types", "abenddic", "currency", "field"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Currency%20Fields%2C%20ABENDDIC_CURRENCY_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Currency Fields

A currency field is a component of a DDIC structure, DDIC database table, or DDIC view used to store an amount in a specific currency. A currency amount is an integer in the smallest unit of the currency. The integer is constructed from all figures in a currency field while ignoring the position of the decimal separator.

A currency field can have data type CURR, DECFLOAT16, or DECFLOAT34. In case of data type CURR, a field is automatically interpreted as currency field and a reference to a currency key is mandatory. In case of the other data types, this reference is not mandatory, but if it is assigned, it turns the field into a currency field.

The currency key specifies the currency and the number of decimal places of a currency field. It is a component of a DDIC structure, DDIC database table, or DDIC view, has the type CUKY, and can contain a [currency ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the DDIC database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#abenddic-currency-field-1-------handling-in-dynpros---@ITOC@@ABENDDIC_CURRENCY_FIELD_2)
-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_3)

Hints

-   Currencies are handled according to the rules defined in the database tables TCUR... of the package SFIB. The exchange rates and other settings can be maintained in transaction OB08.
-   ABAP CDS has its own handling of currency fields, see topic [ABAP CDS - Amount Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_amount_field.htm).

Handling in ABAP Dictionary   

A data element of data type [CURR](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_int_pack.htm) and is stored in DDIC database tables in the [BCD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type CURR in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm), a number of decimal places other than zero must be defined. The standard value is two decimal places.

A currency field of data type DECFLOAT16 or DECFLOAT34 is handled according to its data type.

For every structure component of data type CURR, a component of the same structure or of a different DDIC structure, DDIC database table, or DDIC view must be specified as a [reference field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) with the data type [CUKY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). This field is the [currency key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencurrency_key_glosry.htm "Glossary Entry") that defines the actual currency. From a technical perspective, the data type CUKY is handled like a type CHAR with length 5.

Hints

-   The conversion function CURRENCY\_CONVERSION ([CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conversion_functions_v2.htm), [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conversion_functions_v1.htm)) in [ABAP CDS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_cds_glosry.htm "Glossary Entry") also assumes two decimal places for currency fields. If the function for currency fields is used with other amounts of decimal places, unexpected behavior may arise.
-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type CURR should be odd.
-   The number of decimal places for the currency defined by the currency key of type CUKY only determines the formatting and checking of a currency field on a dynpro. It is independent of the number given for the currency field of type CURR. The default value of two decimal places for currency fields in ABAP Dictionary is chosen because most of the currencies in the DDIC database table TCURC have two decimal places and are not entered in the database table TCURX. It is not advisable to use any other value, since in this case any unforeseen operations with currency keys in ABAP programs are largely ignored.

Handling in Dynpros   

For the display of an input/output field of type CURR on a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The positioning of the decimal point for a currency field of type CURR on a dynpro is completely independent of the number of decimal places specified by the data element in ABAP Dictionary (greater than or equal to one, the default value is two). The number of decimal places on a dynpro is defined as follows:

-   When displaying a dynpro field of type CURR, the reference field for the currency key is searched for in the global data of the current ABAP program. The content of this field must be a valid [currency ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the DDIC database table TCURC. If the reference field is not found or there is no entry in the DDIC database table TCURX with the content of the field, the currency field is displayed with two decimal places by default.
    
    The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the properties of the dynpro field. It does not have to be present on the dynpro itself.
    
-   If the currency ID for the reference field is found in the database table TCURX, the currency field is displayed with the decimal places specified there. This also applies to initial reference fields.

Limitation: Currency fields of data type DECFLOAT16 or DECFLOAT34 are not supported on dynpros.

Hint

A dynpro only uses the string of digits of a currency field from the ABAP program (or a [conversion exit](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_exit_glosry.htm "Glossary Entry") in between) or just sends this string. Any information about currency keys and decimal places is not passed automatically. It must be ensured that the reference field for PBO is filled with the appropriate value. For PAI, the correct currency key plays a part in the automatic format check. Especially on dynpros in which currency fields are displayed in differing currencies, it must be ensured that the reference field is transported before the currency by using the statements [CHAIN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpchain.htm) and [FIELD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/dynpfield.htm).

Handling in ABAP Programs   

The ABAP type that corresponds to the data type CURR is p. An ABAP data object declared with reference to a dictionary type of type CURR has the number of decimal places defined there (greater than or equal to one and the default is two). These decimal places are respected for all operations and calculations, as for all packed numbers. The only exceptions are the programs for which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") was not set. When reading currency fields with [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"), no special handling takes place.

To work correctly with a currency field, all digits in the number must be taken as the currency amount in the smallest possible currency units, regardless of the number of decimal places. This occurs automatically sometimes, for example, if [CURRENCY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) is used after [WRITE \[TO\]](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm) (this is possible for currency fields of data types CURR, DECFLOAT16, and DECFLOAT34) or the formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcompute_string_format_options.htm) in an [embedded expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates_expressions.htm) of a [string template](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_templates.htm). For other operations, the following restrictions apply:

-   Comparison, addition, subtraction, and division of two currency fields with the same number of decimal places are not critical.
-   Multiplication with and division by a non-currency-dependent number is not critical.
-   All other operations are critical, for example:
    -   Multiplication of two currency fields.
    -   Operations between two fields with different currencies that include assignments.
    -   Assignments of non-currency-dependent numbers to currency fields.

Accurate results should not be expected when performing critical operations if the number of decimal places in the program does not match the number in the currency.

Hints

-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencl_abap_decfloat_doc.htm) convert currency amounts to decimal floating point numbers (and back) as specified by a currency key.
-   For currencies, one of the data types for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_decimal_floating_point.htm) is recommended rather than the data type CURR.
-   The currency-compliant formatting is supported on dynpros by output styles and by style-compatible formatting in ABAP programs. See the [executable example](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwrite_style_abexa.htm).


### abenddic_quantity_field.htm

---
title: "DDIC - Quantity Fields"
description: |
  A quantity field is a component of a DDIC structure, DDIC database table, or DDIC view used to store a quantity in a specific unit. A quantity field can have data type QUAN, DECFLOAT16, or DECFLOAT34. In case of data type QUAN, a field is automatically interpreted as quantity field and a reference t
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_quantity_field.htm"
abapFile: "abenddic_quantity_field.htm"
keywords: ["do", "if", "case", "try", "data", "types", "abenddic", "quantity", "field"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Quantity%20Fields%2C%20ABENDDIC_QUANTITY_FIELD%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Quantity Fields

A quantity field is a component of a DDIC structure, DDIC database table, or DDIC view used to store a quantity in a specific unit. A quantity field can have data type QUAN, DECFLOAT16, or DECFLOAT34. In case of data type QUAN, a field is automatically interpreted as quantity field and a reference to a unit key is mandatory. In case of the other data types, this reference is not mandatory, but if it is assigned, it turns the field into a quantity field.

The unit key defines the unit and the number of decimal places. It is a component of a DDIC structure, DDIC database table, or DDIC view of type UNIT and can contain a [unit ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunit_id_glosry.htm "Glossary Entry") from the DDIC database table T006.

-   [Handling in ABAP Dictionary](#abenddic-quantity-field-1-------handling-in-dynpros---@ITOC@@ABENDDIC_QUANTITY_FIELD_2)
-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Hints

-   Quantities and units are handled as specified by the data saved in the DDIC database tables T006... in the package SZME. This data can be maintained using the transaction CUNI.
-   Quantity fields in ABAP CDS are described in topic [ABAP CDS - Quantity Fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_quantity_field.htm).

Handling in ABAP Dictionary   

A data element of data type [QUAN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_int_pack.htm) and is stored in DDIC database tables in the [BCD](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_tools.htm), any number of decimal places can be defined. The default value is no decimal places.

A quantity field of data type DECFLOAT16 or DECFLOAT34 is handled according to its data type.

For every structure component of data type QUAN, a component of the same structure or of a different structure, DDIC database table, or DDIC view must be defined as a [reference field](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_structures_sema.htm) with the data type [UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). This field is the [unit key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunit_glosry.htm "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Hints

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type QUAN should be odd.
-   The number of decimal places for the unit defined using the unit key of type UNIT only affects the formatting of a quantity field on a dynpro. It is independent of the number given for the quantity field of type QUAN.

Handling in Dynpros   

For the display of an input/output field of type QUAN on a [dynpro](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunit_id_glosry.htm "Glossary Entry") from the DDIC database table T006. If the reference field is not found or if there is no entry in the DDIC database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the properties of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the DDIC database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Limitation: Quantity fields of data type DECFLOAT16 or DECFLOAT34 are not supported on dynpros.

Hint

A display that matches the accuracy of a quantity field is only possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs   

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers. When quantity currency fields with [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_glosry.htm "Glossary Entry"), no special handling takes place.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to_options.htm) of the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm). The addition UNIT of the statement WRITE *\[*TO*\]* can be used only for quantity fields of data type QUAN, not for quantity fields of any other data type.


### abenddic_geo_data.htm

---
title: "DDIC - Geodata Types"
description: |
  The geodata type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm 'Glossary Entry') GEOM_EWKB(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is a built-in data type in ABAP Dictionary that describes the geo
version: "latest"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_geo_data.htm"
abapFile: "abenddic_geo_data.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "geo"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Built-In Data Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_intro.htm) →  [DDIC - Properties of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_prop.htm) →  [DDIC - Special Dictionary Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types_special.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Geodata%20Types%2C%20ABENDDIC_GEO_DATA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Geodata Types

The [geodata type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeo_data_type_glosry.htm "Glossary Entry") [GEOM\_EWKB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) is a built-in data type in ABAP Dictionary that describes the geometric position in a given coordinate reference system.

It represents fields in the database that contain geometric data in the EWKB (Extended Well-Known Binary) format. This type is currently only supported on [SAP HANA databases](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhana_database_glosry.htm "Glossary Entry") and references the database type ST\_GEOMETRY.

The internal representation of the geodata type GEOM\_EWKB is a [BLOB](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") (Binary Large Object) and the same rules and restrictions apply as to the type [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm). The type GEOM\_EWKB is mapped to the ABAP type [xstring](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_byte.htm).

At ABAP level, there is no semantic representation for geometric data. ABAP only allows geometric data to be passed between the application and the SAP HANA database. The SAP HANA database functions for geometric data types can be accessed using [AMDP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenamdp.htm).

If the data type GEOM\_EWKB is used for a structure component or a table field of a DDIC database table, the type must be assigned a [spatial reference system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sptlrf.htm). This system cannot be changed once activated. The system has the ID 0 by default.

Hints

-   Columns of the data type GEOM\_EWKB are not supported as [BLOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenblob_glosry.htm "Glossary Entry") in [streaming and locators in ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreams_locators.htm). To use columns of the data type GEOM\_EWKB in streaming and locators, they have to be converted to [JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenjson_glosry.htm "Glossary Entry") format first. This can be done with the conversion function [AS\_GEO\_JSON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensql_geo_conv_func.htm).
-   [NOT NULL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_init.htm) cannot be set for a column of the type GEOM\_EWKB.
