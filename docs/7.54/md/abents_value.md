---
title: "Representation of Time Stamps in Character-Like Fields"
description: |
  The values of data objects of the character-like data types c and string can be assigned to time stamp fields of the type utclong as long as they contain a valid representation of a time stamp. The following strings represent valid time stamps: 'yyyy-mm-dd hh:mm:ss.fffffff' 'yyyy-mm-dd hh:mm:ss,ffff
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abents_value.htm"
abapFile: "abents_value.htm"
keywords: ["do", "if", "try", "data", "types", "abents", "value"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenvalue_assignments.htm) →  [Assignment and Conversion Rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_rules.htm) →  [Conversion Rules for Elementary Data Objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenconversion_elementary.htm) →  [Character-Like Source Fields](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencharacter_source_fields.htm) → 

Representation of Time Stamps in Character-Like Fields

The values of data objects of the character-like data types c and string can be assigned to time stamp fields of the type utclong as long as they contain a valid representation of a time stamp. The following strings represent valid time stamps:

"yyyy-mm-dd hh:mm:ss.fffffff"
"yyyy-mm-dd hh:mm:ss,fffffff"
"yyyy-mm-ddThh:mm:ss.fffffff"
"yyyy-mm-ddThh:mm:ss,fffffff"

They are structured as follows:

-   "yyyy-mm-dd" consists of eight digits separated by hyphens (\-). They must represent dates that are valid in accordance with the calendar rules: "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31. The days "1582-10-05” to "1582-10-14” are skipped (due to the switch from the Julian to the Gregorian calendar).

-   "hh:mm:ss" are digits separated by colons (:) that must represent a time in the 24 hour range: 00 to 23 for "hh" (hours) and 00 to 59 for "mm" (minutes) and 00 to 59 for "ss".

-   The seconds "ss" can be followed by up to seven significant decimal places "fffffff" (fractions of a second) separated by a period (.) or a comma (,). There can be more than seven decimal places, however the digits after the seventh decimal place must be "0".

-   The separator between the date and the time must consist of precisely one blank or the character "T”.

A time stamp must have a left-aligned representation in the source field. Trailing blanks are usually permitted but are ignored. Any initial strings and strings that contain only blanks are also permitted and are converted to an initial time stamp.

Alongside the valid values, the following (invalid) values are possible:

-   A value such as "0000-00-00 00:00:00.0000000", which is invalid, is converted to the initial value.

-   An invalid time such as "24:00:00.0000000" produces a time stamp on the next day, namely the time "00:00:00.0000000".

No other strings are permitted.

Notes

-   The range of different valid representations mean that different standards are supported:

-   The representation that uses a blank as the separator between date and time supports the SDL standard in accordance with ISO 9075.

-   The representation that uses the character "T" as a separator between date and time supports ISO 8601 for date formats and times.

-   When time stamps are [converted](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendate_time_source_fields.htm) to character-like fields, the representation uses a blank as a separator. This is also the default setting in character-like formatting of time stamps to [string templates](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_templates.htm) and when formatting using [WRITE TO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwrite_to.htm). In [embedded expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenembedded_expression_glosry.htm "Glossary Entry") of string templates, the formatting option [ISO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcompute_string_format_options.htm) can be used to configure the representation with the separator "T”. The separator "T” is also used for [mappings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_xslt_asxml_elementary.htm) to[asXML](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenasxml_glosry.htm "Glossary Entry").

Example

Valid representation of time stamps in character-like source fields. All assignments shown here are possible.

DATA ts TYPE utclong.
ts = EXACT #( \`2019-04-10 09:53:04                       \` ).
ts = EXACT #( \`2019-04-10T09:53:04                       \` ).
ts = EXACT #( \`2019-04-10 24:00:00                       \` ).
ts = EXACT #( \`2019-04-10T24:00:00                       \` ).
ts = EXACT #( \`2019-04-10 09:53:04,123                   \` ).
ts = EXACT #( \`2019-04-10T09:53:04,123                   \` ).
ts = EXACT #( \`2019-04-10 09:53:04.123                   \` ).
ts = EXACT #( \`2019-04-10T09:53:04.123                   \` ).
ts = EXACT #( \`2019-04-10 09:53:04,12345670000000000     \` ).
ts = EXACT #( \`2019-04-10T09:53:04,12345670000000000     \` ).
ts = EXACT #( \`2019-04-10 09:53:04.12345670000000000     \` ).
ts = EXACT #( \`2019-04-10T09:53:04.12345670000000000     \` ).