  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Assignments](javascript:call_link\('abenvalue_assignments.htm'\)) →  [Assignment and Conversion Rules](javascript:call_link\('abenconversion_rules.htm'\)) →  [Conversion Rules for Elementary Data Objects](javascript:call_link\('abenconversion_elementary.htm'\)) →  [Character-Like Source Fields](javascript:call_link\('abencharacter_source_fields.htm'\)) → 

Representation of Time Stamps in Character-Like Fields

The values of data objects of the character-like data types c and string can be assigned to time stamp fields of the type utclong if they contain a valid representation of a time stamp. The following strings are valid time stamps:

"yyyy-mm-dd hh:mm:ss.fffffff"
"yyyy-mm-dd hh:mm:ss,fffffff"
"yyyy-mm-ddThh:mm:ss.fffffff"
"yyyy-mm-ddThh:mm:ss,fffffff"

They are composed as follows:

-   "yyyy-mm-dd" are eight digits separated by hyphens (\-), which must represent valid dates in accordance with the calendar rules: "yyyy" (year): 0001 to 9999, "mm" (month): 01 to 12, "dd" (day): 01 to 31. The days "1582-10-05" to "1582-10-14" are skipped (due to the switch from the Julian to the Gregorian calendar).
-   "hh:mm:ss" are digits separated by colons (:) that must represent a time in the 24 hour range: 00 to 23 for "hh" (hours) and 00 to 59 for "mm" (minutes) and 00 to 59 for "ss".
-   The seconds "ss" can be followed by up to seven significant decimal places "fffffff" (fractions of a second) that are separated by a period (.) or a comma (,). There can also be more than seven decimal places, however the digits after the seventh decimal place must be "0".
-   The separator between the date and the time must consist of exactly one blank or the character "T".

A time stamp must have a left-aligned representation in the source field. Trailing blanks are usually allowed but ignored. Any initial strings and strings that contain only blanks are also allowed and are converted to an initial time stamp.

In addition to the valid values, the following (invalid) values are possible:

-   A value such as "0000-00-00 00:00:00.0000000", which is invalid, is converted to the initial value.
-   An invalid time such as "24:00:00.0000000" produces a time stamp on the next day, namely the time "00:00:00.0000000".

Other specifications than described here are forbidden.

Hints

-   The different valid representations support different standards:
    -   The representation that uses a blank as the separator between date and time supports the SDL standard in accordance with ISO 9075.
    -   The representation that uses the character "T" as a separator between date and time supports ISO 8601 for date formats and time specifications.
-   When time stamps are [converted](javascript:call_link\('abendate_time_source_fields.htm'\)) to character-like fields, the representation uses a blank as a separator. This is also the default setting for character-like formatting of time stamps to [string templates](javascript:call_link\('abenstring_templates.htm'\)) and when formatting using [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)). In [embedded expressions](javascript:call_link\('abenembedded_expression_glosry.htm'\) "Glossary Entry") of string templates, the formatting option [ISO](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be used to configure the representation with the separator "T". The separator "T" is also used for [mappings](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)) in [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry").

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