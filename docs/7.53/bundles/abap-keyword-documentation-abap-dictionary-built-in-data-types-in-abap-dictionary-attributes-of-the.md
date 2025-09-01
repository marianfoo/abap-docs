# ABAP Keyword Documentation / ABAP - Dictionary / Built-In Data Types in ABAP Dictionary / Attributes of the Built-In Dictionary Types / Special Dictionary Types

Included pages: 5


### abenddic_builtin_types_special.htm

---
title: "Special Dictionary Types"
description: |
  -   Date types and time types(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm) -   Special character-like types(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm) -   Currency fields(https://help.sap.com/doc/
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm"
abapFile: "abenddic_builtin_types_special.htm"
keywords: ["do", "data", "types", "abenddic", "builtin", "special"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) → 

Special Dictionary Types

-   [Date types and time types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm)

-   [Special character-like types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm)

-   [Currency fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm)

-   [Quantity fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm)

Continue
[Date Types and Time Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm)
[Special Character-Like Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm)
[Currency Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm)
[Quantity Fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm)


### abenddic_date_time_types.htm

---
title: "Date Types and Time Types"
description: |
  The following character-like data types in ABAP Dictionary describe date fields and time fields: -   DATS(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) or date fields(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_field_glosry.htm 'Gl
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_date_time_types.htm"
abapFile: "abenddic_date_time_types.htm"
keywords: ["insert", "do", "if", "try", "data", "types", "abenddic", "date", "time"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Date Types and Time Types

The following character-like data types in ABAP Dictionary describe date fields and time fields:

-   [DATS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) or [date fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type DATS describes objects of the type CHAR with a length of 8 characters. It is designed for [calendar dates](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencalendar_date_glosry.htm "Glossary Entry") in the format YYYYMMDD, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to DATS. In ABAP, DATS is assigned to the special type [d](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [TIMS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [time fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_field_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type TIMS describes objects of the type CHAR with a length of 6 characters. It is designed for [times](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenday_time_glosry.htm "Glossary Entry") in the format HHMMSS, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to TIMS. In ABAP, TIMS is assigned to the special type [t](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_date_time.htm) and the associated rules apply.

-   [ACCP](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for posting periods

From a technical perspective, the built-in data type ACCP describes objects of the type CHAR with a length of 6 characters. It is designed for posting periods in the format YYYYMM, but this is not checked when performing writes and reads on database fields with this type. Automatic checks are only made for dynpro fields typed with reference to ACCP.

Notes

-   The output formats for fields on dynpros and Web Dynpros and in the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) can be predefined for the types DATS and TIMS specific to each user in the [user master record](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenuser_master_record_glosry.htm "Glossary Entry"). The output length required for formatted output is usually greater than the number of places in ABAP Dictionary. If the output length is too short, any formatting characters are suppressed.

-   When a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") is represented with reference to the type ACCP (but not in the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm)) and there is enough output length, a point is inserted between the year YYYY and the month MM.


### abenddic_special_character_types.htm

---
title: "Special Character-Like Types"
description: |
  The following character-like data types in ABAP Dictionary have a special semantic meaning: -   NUMC(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for numeric texts(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_text_glosry.htm 'Gl
version: "7.53"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_special_character_types.htm"
abapFile: "abenddic_special_character_types.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "special", "character"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Special Character-Like Types

The following character-like data types in ABAP Dictionary have a special semantic meaning:

-   [NUMC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [numeric texts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumeric_text_glosry.htm "Glossary Entry")

From a technical perspective, the built-in data type NUMC describes objects of the type CHAR with a maximum length of 255 characters. It is intended for numerical texts. This is not checked however when writing to or reading from database fields of this type. Automatic checks are only made for dynpro fields typed with reference to NUMC. In ABAP, NUMC is assigned to the special type [n](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbuiltin_types_character.htm) and the associated rules apply.

-   [CLNT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [client columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenclient_column_glosry.htm "Glossary Entry")

From a technical perspective, the data type CLNT describes objects of the type CHAR with length 3. If the data type CLNT is used for the first key field of a database table, this makes the database table [client-specific](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_database_tables_client.htm).

-   [LANG](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) for [text language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_language_glosry.htm "Glossary Entry")

From a technical perspective, the predefined data type LANG describes objects of the type CHAR with length 1. It is intended specifically for language keys. A component of structures or database tables that has the data type LANG can be identified as text language. The text language is used to convert character-like components of the structure when importing data from [data clusters](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_cluster_glosry.htm "Glossary Entry") and in the binary [RFC protocol](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrfc_protocol.htm) for passing TABLES parameters between [MDMP systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunicode_system_glosry.htm "Glossary Entry"). The [primary key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprimary_key_glosry.htm "Glossary Entry") of a [text table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_table_glosry.htm "Glossary Entry") is still made up of the [foreign key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenforeign_key_glosry.htm "Glossary Entry") and a field of type LANG.

Note

When the statements [WRITE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite-.htm) or [WRITE TO](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) are used to represent a [dynpro field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry") with the type LANG (and when a field that references this type is formatted), this field has an output length of 2 and is converted automatically from the single-character internal language ID to the matching two-character ISO ID using the [conversion routine](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm "Glossary Entry") ISOLA (and back).


### abenddic_currency_field.htm

---
title: "Currency Fields"
description: |
  A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type CURR(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and used to record an amount in a specific currency. The amount is specified as a whole number in t
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm"
abapFile: "abenddic_currency_field.htm"
keywords: ["do", "if", "case", "try", "method", "class", "data", "types", "abenddic", "currency", "field"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Currency Fields

A currency field is a component of a structure, database table, or view defined in ABAP Dictionary of type [CURR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) and used to record an amount in a specific currency. The amount is specified as a whole number in the smallest unit of the currency. A currency field must be associated with a currency key of a structure, database table, or view that specifies the currency and the number of decimal places. A currency key is a component of a structure, database table, or view defined in ABAP Dictionary, has the type CUKY, and can contain a [currency ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC.

By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

-   [Handling in ABAP Dictionary](#abenddic-currency-field-1--------handling-in-dynpros---@ITOC@@ABENDDIC_CURRENCY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_CURRENCY_FIELD_3)

Notes

-   Currencies are handled as specified by the data saved in the database tables TCUR... of the package SFIB. The exchange rates and other settings can be edited in transaction OB08.

-   Currency fields are defined as elements of [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") using [semantics annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_element_annotation.htm).

Handling in ABAP Dictionary

A data element of data type [CURR](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm) and is stored in database tables in the [BCD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type CURR in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm), a number of decimal places other than zero must be defined. The standard value is two fractional digits.

For every structure component of data type CURR, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) with the data type [CUKY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). This field is the [currency key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_key_glosry.htm "Glossary Entry") that defines the actual currency. From a technical perspective, the data type CUKY is handled like a type CHAR with length 5.

Notes

-   The number of decimal places for the currency defined by the currency key of type CUKY only determines the formatting and checking of a currency field on a dynpro. In principal, it is independent of the number given for the currency field of type CURR. The default value of two decimal places for currency fields in ABAP Dictionary is chosen because most of the currencies in the database table TCURC have two decimal places and are not entered in the database table TCURX. It is not advisable to use any other value, since in this case any unforeseen operations with currency keys in ABAP programs are largely ignored.

-   The conversion function [CURRENCY\_CONVERSION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_conversion_functions.htm) in [ABAP CDS](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_cds_glosry.htm "Glossary Entry") also assumes two decimal places for currency fields. If the function for currency fields is used with other amounts of decimal places, unexpected behaviour may arise.

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type CURR should be odd.

Handling in Dynpros

For the display of an input/output field of type CURR on a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry"). Here, the positioning of the decimal point for a currency field of type CURR on a dynpro is completely independent of the number of decimal places specified by the data element in ABAP Dictionary (greater than or equal to one, the default value is two). The number of decimal places on a dynpro is defined as follows:

-   When displaying a dynpro field of type CURR, the reference field for the currency key is searched for in the global data of the current ABAP program. The content of this field must be a valid [currency ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC. If the reference field is not found or there is no entry in the database table TCURX with the content of the field, the currency field is displayed with two fractional digits by default.
    The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

-   If the currency ID for the reference field is found in the database table TCURX, the currency field is displayed with the decimal places specified there. This also applies to initial reference fields.

Note

A dynpro therefore only uses the string of digits of a currency field from the ABAP program (or a [conversion routine](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenconversion_routine_glosry.htm "Glossary Entry") in between) or just sends this string. Any information about currency keys and decimal places is not passed automatically. It must be ensured that the reference field for PBO is filled with the appropriate value. For PAI, the correct currency key plays a part in the automatic format check. Especially on dynpros in which currency fields are displayed in differing currencies, it must be ensured that the reference field is transported before the currency by using the statements [CHAIN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpchain.htm) and [FIELD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/dynpfield.htm).

Handling in ABAP Programs

The ABAP type that corresponds to the CURR data type is p. An ABAP data object declared with reference to a dictionary type of type CURR has the number of decimal places defined there (greater than or equal to one and the default is two). These decimal places are respected for all operations and calculations, as for all packed numbers. The only exceptions are the programs for which the program property [fixed point arithmetic](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfixed_point_arithmetic_glosry.htm "Glossary Entry") was not set.

To work correctly with a currency field, all digits in the number must be recorded as currency amounts in the smallest possible currency units, regardless of the number of decimal places. This occurs automatically sometimes, for example, if [CURRENCY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm) is used after [WRITE \[TO\]](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm) or the formatting option [CURRENCY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapcompute_string_format_options.htm) in an [embedded expression](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates_expressions.htm) of a [character string template](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstring_templates.htm). For other operations, the following restrictions apply:

-   Comparison, addition, subtraction, and division of two currency fields with the same number of fractional digits are not critical.

-   Multiplication with and division by a non-currency-dependent number is not critical.

-   All other operations are critical, for example:

-   Multiplication of two currency fields.

-   Operations between two fields with different currencies that include assignments.

-   Assignments of non-currency-dependent numbers to currency fields.

Accurate results should not be expected when performing critical operations if the number of decimal places in the program does not match the number in the currency.

Notes

-   For currencies, one of the data types for [decimal floating point numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_decimal_floating_point.htm) is recommended rather than the data type CURR. The currency-compliant formatting is supported on dynpros by output styles and by style-compatible formatting in ABAP programs. See the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwrite_style_abexa.htm).

-   The methods CONVERT\_CURR\_TO\_DECFLOAT and CONVERT\_DECFLOAT\_TO\_CURR of the system class [CL\_ABAP\_DECFLOAT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencl_abap_decfloat_doc.htm) convert currency amounts to decimal floating point numbers (and back) as specified by a currency key.


### abenddic_quantity_field.htm

---
title: "Quantity Fields"
description: |
  A quantity field is a component of a structure, database table, or view of type QUAN(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) defined in ABAP Dictionary and used to record a quantity in a specific unit. A quantity field must be associated with a unit k
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_quantity_field.htm"
abapFile: "abenddic_quantity_field.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "quantity", "field"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary.htm) →  [Built-In Data Types in ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_intro.htm) →  [Attributes of the Built-In Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_prop.htm) →  [Special Dictionary Types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_special.htm) → 

Quantity Fields

A quantity field is a component of a structure, database table, or view of type [QUAN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) defined in ABAP Dictionary and used to record a quantity in a specific unit. A quantity field must be associated with a unit key of a structure, database table, or view that defines the unit and the number of decimal places. A unit key is a component of a structure, database table, or view of type UNIT defined in ABAP Dictionary and can contain a [unit ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006.

-   [Handling in ABAP Dictionary](#abenddic-quantity-field-1--------handling-in-dynpros---@ITOC@@ABENDDIC_QUANTITY_FIELD_2)

-   [Handling in ABAP Programs](#@@ITOC@@ABENDDIC_QUANTITY_FIELD_3)

Notes

-   Quantities and units are handled as specified by the data saved in the database tables T006... in the package SZME. This data can be edited using the transaction CUNI.

-   Quantity fields are defined as elements of [CDS entities](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_entity_glosry.htm "Glossary Entry") using [semantics annotations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_element_annotation.htm).

Handling in ABAP Dictionary

A data element of data type [QUAN](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) is handled as a field of data type [DEC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm) and is stored in database tables in the [BCD](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenbcd_glosry.htm "Glossary Entry") format. When creating a data element or a structure component of the data type QUAN in an ABAP Dictionary [tool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_tools.htm), any number of decimal places can be defined. The default value is no decimal places.

For every structure component of data type QUAN, a component of the same structure or of a different structure, database table, or view must be specified when editing the individual component as a [reference field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_structures_sema.htm) with the data type [UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm). This field is the [unit key](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunit_glosry.htm "Glossary Entry") that defines the unit of the quantity. From a technical perspective, the data type UNIT is handled like a type CHAR with length 2.

Notes

-   The number of decimal places for the unit defined using the unit key of type UNIT only influences the formatting of a quantity field on a dynpro. In principal, it is independent of the number given for the quantity field of type QUAN.

-   As in [general packed numbers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types_int_pack.htm), the number of places in type QUAN should be odd.

Handling in Dynpros

For the display of an input/output field of type QUAN on a [dynpro](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_glosry.htm "Glossary Entry"), the content is displayed as character-like content and in accordance with a type-dependent mask, as for all [dynpro fields](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynpro_field_glosry.htm "Glossary Entry"). The system tries to create a display which suits the unit of the quantity field.

To determine the unit, the global data of the current ABAP program is searched for the reference field associated with the field for the unit key. The content of this field must be a valid [unit ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenunit_id_glosry.htm "Glossary Entry") from the database table T006. If the reference field is not found or if there is no entry in the database table T006 with the content of the field, the quantity field is displayed as a regular field of type DEC.

The reference field is either defined in the relevant structure in ABAP Dictionary or was defined using Screen Painter for the attributes of the dynpro field. It does not have to be present on the dynpro itself.

If the unit ID of the reference field is found in the column MSEHI of the database table T006 and the quantity field does not have any decimal places with a value other than 0 outside the accuracy defined in the column DECAN, the quantity field is displayed with this accuracy. For a unit without decimal places, the decimal separator is suppressed. If the quantity field has decimal places with a value other than 0 outside of its accuracy, however, it is displayed as a regular field of type DEC.

Note

A display that matches the accuracy of a quantity field is only then possible if no information is lost. This makes it possible, for example, for average values (else integer units) to be displayed in a relevant quantity field.

Handling in ABAP Programs

The ABAP type that corresponds to the data type QUAN is p. An ABAP data object declared with reference to a dictionary type of type QUAN has the number of decimal places defined there. These decimal places are respected for all operations and calculations, as for all packed numbers.

The unit defined for a quantity field only plays a part in ABAP programs if it is specified after the addition [UNIT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to_options.htm) of the statement [WRITE *\[*TO*\]*](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwrite_to.htm).
