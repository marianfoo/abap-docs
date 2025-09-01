  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Data Interfaces and Communication Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_communication.htm) →  [ABAP and XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml.htm) →  [Transformations for XML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xml_trafos.htm) →  [ST - Simple Transformations](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_st.htm) →  [ST - Serialization and Deserialization](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_serial_deserial.htm) →  [ST - Transformation of ABAP Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_abap_values.htm) →  [ST - tt:value, Elementary Data Objects](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) →  [ST - option, Mapping Rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option.htm) → 

ST - option, Mapping Rules for Elementary Types

Syntax

... option="*\[*format(fmt)*\]**\[*,decimals(dec)*\]**\[*,regime(num*|*char*|*bin)*\]**\[*,noError*\]*"

Extras:

[1\. ... format(fmt) ...](#!ABAP_ADDITION_1@1@)
[2\. ... decimals(dec) ...](#!ABAP_ADDITION_2@2@)
[3\. ... regime(num*|*char*|*bin) ...](#!ABAP_ADDITION_3@3@)
[4\. ... noError ...](#!ABAP_ADDITION_4@4@)

Effect

Specification of mapping rules for elementary types.

-   format can be used to specify different formats fmt.

-   decimals can be used to influence the decimal places of numeric values.

-   regime can be used to force numeric, character-like, or byte-like handling.

-   For certain ABAP types and for certain formats you can prevent an exception occurring in the event of invalid values by using noError.
    

Addition 1

... format(fmt) ...

Effect

The format option can be used to do the following:

-   Specify formats fmt based on XML schema data types. These formats create the corresponding XML representation or JSON representation from ABAP-specific representations of specific elementary values (and back).

-   Specify other formats fmt to convert ABAP data to framework-specific representations that do not comply with the standard [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml.htm) representation, and the other way round.

The following table shows the possible formats fmt, the ABAP types and representations where they can be used, and the associated XML representations and [JSON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_json.htm) representations.

fmt

ABAP Type

ABAP Representation

XML Representation

JSON Representation

boolean

c, length 1

X, " "

true, false

true, false

hex

x, xstring

0123456789ABCDEF

0123456789ABCDEF

0123456789ABCDEF

duration

t

125814

PT12H58M14S

PT11H24M22S

dateTime

TIMESTAMP,
TIMESTAMPL

20141212112422,
20141212112422.771723

2014‑12‑12T11:27:22Z,
2014‑12‑12T11:27:22.771723Z

2014‑12‑12T11:27:22Z,
2014‑12‑12T11:27:22.771723Z

dateTimeOffset

c, length 18

20141212113855+180

2014‑12‑12T11:38:55+03:00

2014‑12‑12T11:38:55+03:00

dateTimeOffset

TIMESTAMP,
TIMESTAMPL

20141212112422,
20141212112422.771723

2014‑12‑12T11:27:22+00:00,
2014‑12‑12T11:27:22.771723+00:00

2014‑12‑12T11:27:22+00:00,
2014‑12‑12T11:27:22.771723+00:00

dateTimeLocal

c, length 14

20141212114245

2014‑12‑12T11:42:45

2014‑12‑12T11:42:45

dateTimeLocal

TIMESTAMP,
TIMESTAMPL

20141212112422,
20141212112422.771723

2014‑12‑12T11:42:45,
2014‑12‑12T11:42:45.771723

2014‑12‑12T11:42:45,
2014‑12‑12T11:42:45.771723

ticks

d

20141212

2014‑12‑12

/Date(1418342400000)/

ticks

TIMESTAMP,
TIMESTAMPL

20141212115038,
20141212115038.9922080

2014‑12‑12T11:50:38Z,
2014‑12‑12T11:50:38.992208Z

/Date(1418383462000)/,
/Date(1418383462771)/

ticksOffset

c, length 18

20141212115254+180

2014‑12‑12T11:52:54+03:00

/Date(1418383462000+0180)/

ticksOffset

TIMESTAMP,
TIMESTAMPL

20141212112422,
20141212112422.771723

2014‑12‑12T11:27:22+00:00,
2014‑12‑12T11:27:22.771723+00:00

/Date(1418383462000+0000)/,
/Date(1418383462771+0000)/

guid

x, length 16; c, length 32,
c, length 22

0050569181751ED4A0BED3E86422E104,
051MaO5r7jIWljFeP2BX10

00505691‑8175‑1ed4‑a0be‑d3e86422e104

00505691‑8175‑1ed4‑a0be‑d3e86422e104

qName

string

{uri}name

<... xmlns:...="uri">...:name</...>

{uri}name

uri

c, string

:;<=>?\[\\\]^\_\`\`{|}~

:;%3C=%3E?\[%5C\]%5E\_%60%7B%7C%7D~

:;%3C=%3E?\[%5C\]%5E\_%60%7B%7C%7D~

uriFull

c, string

:;<=>?\[\\\]^\_\`\`{|}~

%3A%3B%3C%3D%3E%3F%5B%5C%5D%5E\_%60%7B%7C%7D~

%3A%3B%3C%3D%3E%3F%5B%5C%5D%5E\_%60%7B%7C%7D~

uri1

c, string

Rock'n'Roll & Blues

'Rock''n''Roll%20%26%20Blues'

'Rock''n''Roll%20%26%20Blues'

uri1

x, xstring

0123456789ABCDEF

binary'0123456789ABCDEF'

binary'0123456789ABCDEF'

uri1

t

125814

time'PT12H58M14S'

time'PT12H58M14S'

uri1

TIMESTAMP,
TIMESTAMPL

20141212112422,
20141212112422.771723

datetimeoffset'2014‑12‑12T11%3A27%3A22Z',
datetimeoffset'2014‑12‑12T11%3A27%3A22.771723Z'

datetimeoffset'2014‑12‑12T11%3A27%3A22Z',
datetimeoffset'2014‑12‑12T11%3A27%3A22.771723Z'

uri2

x, length 16; c, length 32

0050569181751ED4A0BED3E86422E104

guid'00505691‑8175‑1ed4‑a0be‑d3e86422e104'

guid'00505691‑8175‑1ed4‑a0be‑d3e86422e104'

uri2

d

20141212

datetime'2014‑12‑12T00%3A00%3A00'

datetime'2014‑12‑12T00%3A00%3A00'

uri2

TIMESTAMP,
TIMESTAMPL

20141212112422,
20141212112422.771723

datetime'2014‑12‑12T11%3A27%3A22',
datetime'2014‑12‑12T11%3A27%3A22.771723'

datetime'2014‑12‑12T11%3A27%3A22',
datetime'2014‑12‑12T11%3A27%3A22.771723'

language

c, length 1

E, D, ...

EN, DE, ...

EN, DE, ...

currCode

c, length 5

EUR, USD, ...

EUR, USD, ...

EUR, USD, ...

unitCode

c, length 3

KM, MI, ...

KMT, SMI, ...

KMT, SMI, ...

currency=CURRCODE

[Numeric types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm)

123456,
123,456

123456,
123,456

123456,
123,456

unit=UNITCODE

p, decfloat16, decfloat34

123,000,
123,456

123,
123,456

123,
123,456

alpha

c, string, n

0000123456

123456  

123456  

The following formats match the XML schema data types specified under [Mapping Further XML Schema Data Types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) or other data types and this is where more details about the formats can be found.

-   boolean for truth values

-   dateTime, dateTimeOffset, dateTimeLocal for date/time values

-   guid for UUIDs

-   qName for qualified names

-   language for ISO language codes

-   currCode for ISO currency codes

-   unitCode for ISO unit codes

For dateTimeOffset and dateTimeLocal, packed numbers corresponding to the data types TIMESTAMP or TIMESTAMPL from ABAP Dictionary can also be used as ABAP types. For dateTimeOffset, the value 0 is then used for the offset in the XML or JSON representation. For boolean, language, currCode, and unitCode you can specify noError to prevent an exception occurring in the event of invalid values.

The other formats have the following meaning:

-   The format hex means that byte-like content is mapped to a hexadecimal format and not to [base64](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbase64_glosry.htm "Glossary Entry").

-   The format duration is based on the XML schema data type with the same name.

-   The formats ticks and ticksOffset are used for JSON representations of UNIX time stamps (or ticks), which are based on the number of milliseconds since 01.01.1970,00:00:00, for OData. This formats only have special support in JSON. In XML, the regular date format or the associated time stamp formats are used. If ticksOffset is used for packed numbers that correspond to the data types TIMESTAMP or TIMESTAMPL, the value 0 is used for the offset in the XML or JSON representation.

-   The formats uri and uriFull mask special characters like the built-in function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm) during serialization with the format E\_URI or E\_URI\_FULL. During deserialization, the escape symbols are converted to the respective characters.

-   The format uri1 is used to represent literal values in URIs for OData.

-   Content of the ABAP types c and string is enclosed in quotation marks. Special characters are handled with the format E\_URI\_1, like the built-in function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm).

-   Content of the ABAP types x and xstring is mapped as with the format hex. The XML and JSON representations are enclosed in quotation marks and prefixed with binary.

-   Content of the ABAP type t is mapped as with the format duration. The XML and JSON representations are enclosed in quotation marks and prefixed with time.

-   Content of the ABAP types corresponding to the dictionary types TIMESTAMP and TIMESTAMPL are mapped as with the format datetime. The XML and JSON representations are enclosed in quotation marks and prefixed with datetimeoffset. Colons : are replaced by the escape symbols %3A. The prefix datetimeoffset identifies a UTC time stamp in OData.

-   The format uri2 is used to represent other literal values in URIs for OData.

-   Content of the ABAP types x with length 16 and c with length 32 is mapped as with the format guid. The XML and JSON representations are enclosed in quotation marks and prefixed with guid.

-   Content of the ABAP type d is handled like a corresponding time stamp of dictionary type TIMESTAMP, in which the time part has the value "00:00:00".

-   Content of ABAP types corresponding to the dictionary types TIMESTAMP and TIMESTAMPL is mapped as with the format uri1, but the format of a local time stamp with the prefix datetime is used.

-   The format currency=CURRCODE formats the values of numerical ABAP types during serialization according to a currency code specified in CURRCODE. For CURRCODE, visible character-like data roots of the ST program with a length no more than 5 can be specified at this point. In the database table TCURX, the line with the content of CURRCODE in the CURRKEY column is searched for, and the decimal places are taken from the CURRDEC column. If no line is found, the default value 2 is used. The numeric content is formatted with these decimal places. Missing decimal places are filled with 0, and surplus decimal places are rounded commercially. If the content of CURRCODE is initial, and in deserialization, the format has no effect. The formatting corresponds essentially to the functionality of the function module CURRENCY\_AMOUNT\_SAP\_TO\_IDOC.

-   The format unit=UNITCODE formats the values of decimal numbers during serialization according to a unit code specified in UNITCODE. For UNITCODE, visible character-like data roots of the ST program with a length no more than 3 can be specified at this point. In the database table T006, the line with the content of UNITCODE in the MSEHI column is searched for, and the decimal places are taken from the ANDEC or DECAN column. If no line is found, the default value 0 is used. The numeric content is formatted with these decimal places. Missing decimal places are filled with 0, and surplus insignificant decimal places 0 are cut off. The format has no effect during deserialization.

-   The format alpha formats strings like the formatting option [ALPHA](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm):

-   During serialization, leading zeros are removed as with alpha = out.

-   During deserialization, leading zeros are inserted as with alpha = in.

In JSON, the values are produced in accordance with the XML representation, except in the case of qName, which is not supported in JSON. In JSON, the format boolean creates real [Boolean JSON values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenjson_oview.htm),

If the data type or the content do not match of if the current node is typed using [tt:type](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_type.htm), the option format is ignored or an exception is raised.

Note

The option format can also be used to map ABAP data objects to XML schema data types that are not typed using a dedicated [domain](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm).

Executable Example

[Formatting Options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_format_option_abexa.htm)

Addition 2

... decimals(dec) ...

Effect

The decimals option sets the decimal places of numeric values during serialization. It can be used on all [numeric ABAP types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm) and has the same effect as the formatting option [DECIMALS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapcompute_string_format_options.htm) for [embedded expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates_expressions.htm) in [string templates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_templates.htm). The decimals option has no effect in deserialization.

Suitable literal integer values can be specified for dec (these can also be negative). If dec is not specified (empty parentheses), the option is ignored.

The decimals option can be used as follows for packed numbers of the types TIMESTAMP and TIMESTAMPL for time stamps:

-   decimals can be combined with the format option for these numbers. In this case, the decimals option is applied first, then format with a fmt format provided for time stamps.

-   Packed numbers that are typed with one of the [special domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) XSDDATETIME\_... are first handled with decimals and then formatted as time stamps.

In these cases, the result of decimals must be a valid time stamp.

Executable Example

[Option for decimal places.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_decimals_option_abexa.htm)

Addition 3

... regime(num*|*char*|*bin) ...

Effect

The result of the regime option is that the ABAP source type is overridden during serialization (the ABAP target type during deserialization) by one of the num, char, or bin regimes. num results in numeric handling, char in character-like handling, and bin in binary handling of the data in the transformation. The regime option deactivates the effect of all [special domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm), but can be combined with the format options, where a fmt format specified with format must pass through regime for handling. The num regime can also be combined with decimals.

The num, char, and bin regimes have the following effect on the possible ABAP types:

-   num regime

Forces a numeric handling of the current node.

-   Apart from deactivating the effect of [special domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm), the num regime has no effect on [numeric types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm).

-   All other data types are [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_elementary.htm) to the [decfloat34](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm) type before the actual transformation during serialization, and then further processed as such. Source values of types n, d, and t must be valid. During deserialization, a value is generated for decfloat34 and assigned [without loss](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_exact.htm) to the target type.

-   char regime

Forces a character-like handling of the current node.

-   Apart from deactivating the effect of [special domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm), the char regime has no effect on [numeric types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm), that is, the standard XSD representation of [asXML](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_elementary.htm) is used.

-   Apart from deactivating the effect of [special domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm), the char regime has no effect on [character-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm).

-   [Byte-type data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_byte.htm) are handled as with the formatting option format(hex), that is, representation is in hexadecimal format.

-   [Date and time types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm) are handled like the c type of corresponding length, with invalid values accepted.

-   bin regime

Forces a byte-like handling of the current node.

-   [Numeric types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_numeric.htm) are [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennumeric_source_fields.htm) to the xstring type before the actual transformation during serialization, and further processed as such. During deserialization, a value is generated for xstring and [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_source_fields.htm) to the target type.

-   Source fields of the [character-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_character.htm) c and string are [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencharacter_source_fields.htm) [without loss](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_exact.htm) to xstring during serialization and then processed further. A source field of type n is checked for valid content and also [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconversion_type_n.htm) to xstring. During deserialization, a value is generated for xstring and [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_source_fields.htm) to the target type. There must not be any overflow for type n.

-   Apart from deactivating the effect of [special domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm), the bin regime has no effect on [byte-like data types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_byte.htm).

-   Source fields of the [date and time types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbuiltin_types_date_time.htm) are checked for valid values during serialization, [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendate_time_source_fields.htm) to xstring and then processed further. The source fields are checked for valid content. During deserialization, a value is generated for xstring and [converted](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbyte_source_fields.htm) to the target type. There must not be any overflow.

Executable Example

[Option for regime.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_regime_option_abexa.htm)

Addition 4

... noError ...

Effect

Prevents exceptions that would be triggered in the event of invalid values occurring during serialization of certain ABAP types and with certain formats specified using format. The following table shows for which ABAP types and formats noError takes effect:

Type

Format

Effect

[n](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_elementary.htm)

\-

Leading and trailing blanks are ignored.

[p](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_elementary.htm)

\-

An invalid value in the final byte is ignored and interpreted as positive sign.

[XSDBOOLEAN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm)

boolean

Other values apart from "X" and " " are accepted and produce true.

[XSDDATE\_D](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm)

\-

Invalid dates are accepted and formatted as a date.

[XSDTIME\_T](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm)

\-

Invalid times are accepted and formatted as a time.

[XSDLANGUAGE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm)

language

An invalid language is accepted with no conversion taking place.

[XSDCURRCODE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm)

currCode

An invalid currency code is ignored with no conversion taking place.

[XSDUNITCODE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm)

unitCode

An invalid unit code is ignored with no conversion taking place.

Executable Example

[Option for invalid values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_noerror_option_abexa.htm)

Continue
![Example](exa.gif "Example") [Simple Transformation, Formatting Options](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_format_option_abexa.htm)
![Example](exa.gif "Example") [Simple Transformation, Option for Decimal Places](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_decimals_option_abexa.htm)
![Example](exa.gif "Example") [Simple Transformation, Option for Regime](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_regime_option_abexa.htm)
![Example](exa.gif "Example") [Simple Transformation, Option for Invalid Values](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_noerror_option_abexa.htm)