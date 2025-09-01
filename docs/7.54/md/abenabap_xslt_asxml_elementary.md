  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) →  [asXML - Mapping of ABAP Data Types](javascript:call_link\('abenabap_xslt_asxml_named.htm'\)) → 

asXML - Mapping of Elementary ABAP Types

The asXML representation of elementary ABAP types is used in XSL transformations and in Simple Transformations. In both cases, the elementary values or the elementary components of complex structures are converted in accordance with this mapping.

For elementary data objects with [built-in ABAP types](javascript:call_link\('abenpredefined_data_type_glosry.htm'\) "Glossary Entry"), the asXML representation is based on the representation of [XML schema data types](http://www.w3.org/TR/xmlschema-2/) from the namespace xsd="http://www.w3.org/2001/XMLSchema", where dates and times are represented in accordance with ISO-8601 and binary data is represented in accordance with [Base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry"). The mapping of ABAP types to the XML schema data types is not fully bijective, due to the different value ranges. For example, a time zone can be specified for the XML schema data type xds:date, which is not possible for the ABAP type d.

-   [Mapping Tables](#abenabap-xslt-asxml-elementary-1--------numeric-data-types---@ITOC@@ABENABAP_XSLT_ASXML_ELEMENTARY_2)

-   [Character-Like Data Types](#abenabap-xslt-asxml-elementary-3--------byte-like-data-types---@ITOC@@ABENABAP_XSLT_ASXML_ELEMENTARY_4)

-   [Date types, time types, and time stamp types](#abenabap-xslt-asxml-elementary-5--------differences-in-serialization---@ITOC@@ABENABAP_XSLT_ASXML_ELEMENTARY_6)

-   [Differences in Deserialization](#@@ITOC@@ABENABAP_XSLT_ASXML_ELEMENTARY_7)

Notes

-   Some of the mapping rules can be overridden by specifying [format](javascript:call_link\('abenst_option_format.htm'\)), [decimals](javascript:call_link\('abenst_option_format.htm'\)), [regime](javascript:call_link\('abenst_option_format.htm'\)), and [noError](javascript:call_link\('abenst_option_format.htm'\)) in the [option](javascript:call_link\('abenst_option.htm'\)) attribute of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)).

-   Exceptions from mappings cannot be handled directly. Instead, the exception CX\_TRANSFORMATION\_ERROR (or one of its subclasses) from statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can be handled. The attribute PREVIOUS then contains a reference to the original exception.

-   The exceptions that occur when mapping the data types displayed here can in some cases be suppressed by specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in the [option](javascript:call_link\('abenst_option.htm'\)) attribute of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)).

Mapping Tables

Numeric Data Types

ABAP Type

ABAP Representation

XML Schema Type

XML Representation

b

123

xsd:unsignedByte

123

s

\-123

xsd:short

\-123

i

\-123

xsd:int

\-123

int8

\-123

xsd:long

\-123

p

\-1.23

xsd:decimal

\-1.23

decfloat16

123E+1

precisionDecimal, totalDigits = 16

1.23E+3

decfloat34

\-3.140...0E+02

precisionDecimal, totalDigits = 34

\-314.0...0

f

\-3.140...0E+02

xsd:double

\-3.14E2

Notes

-   In the ABAP type p, a number with more decimal places than available places (twice the length minus one) is considered to be invalid and cannot be serialized to asXML.

-   If [noError](javascript:call_link\('abenst_option_format.htm'\)) is specified in the [option](javascript:call_link\('abenst_option.htm'\)) attribute of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), an invalid sign byte for type p is interpreted as a positive sign, which prevents the corresponding exception.

-   The type precisionDecimal is not yet an official XML schema type.

Character-Like Data Types

ABAP Type

ABAP Representation

XML Schema Type

XML Representation

c

" Hi"

xsd:string

\_Hi

string

" Hello "

xsd:string

\_Hello\_

n

"001234"

xsd:string (pattern \[0-9\]+)

001234

Byte-Like Data Types

ABAP Type

ABAP Representation

XML Schema Type

XML Representation

x

ABCDEF

xsd:base64Binary

q83v

xstring

456789AB

xsd:base64Binary

RweJqw==

Date types, time types, and time stamp types

ABAP Type

ABAP Representation

XML Schema Type

XML Representation

d

"20020204"

xsd:date

2002-02-04

t

"201501"

xsd:time

20:15:01

utclong

"2019-04-10 12:37:29.5040200"

xsd:datetime

2019-04-10T12:37:29.50402Z

Note

During the serialization of a time stamp field of the type utclong, only the significant decimal places are generated. There may also be fewer than seven decimal places for the deserialization.

Differences in Serialization

In serializations, ABAP values are converted to the appropriate character-like XML format. Deserializations operate in the opposite direction. Note the following differences to the usual [conversion rules](javascript:call_link\('abenconversion_rules.htm'\)) that apply in ABAP.

-   In serializations of [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), the same format is created as for their [conversion to type string](javascript:call_link\('abenconversion_type_decfloat.htm'\)).

-   When data objects with the type x are serialized, trailing bytes with the value hexadecimal 0 are handled in the same way as trailing blanks with data type c and are ignored.

-   When the following ABAP data objects are serialized to asXML, partial checks are made to see whether the ABAP data object has a valid value:

-   A data object with the type n can contain only digits.

-   A data object with the type p must represent a valid packed number.

-   A data object with the type d or t cannot contain any leading or closing blanks or the corresponding separator ("-" or ":").

-   A data object of the type utclong must contain a valid value. The initial value results in an empty XML element.

Any violations of these rules raise handleable exceptions, some of which can be bypassed by specifying a [transformation option](javascript:call_link\('abapcall_transformation_options.htm'\)) after the OPTIONS addition of the CALL TRANSFORMATION statement.

Notes

-   To check the validity of dates and times, the domains [XSDDATE\_D](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) and [XSDTIME\_T](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) can be used instead of the data types d and t.

-   If [noError](javascript:call_link\('abenst_option_format.htm'\)) is specified in the [option](javascript:call_link\('abenst_option.htm'\)) attribute of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), leading and trailing blanks are ignored for type n, which prevents the corresponding exception.

Differences in Deserialization

-   For deserialization to [decimal floating point numbers](javascript:call_link\('abendecfloat_glosry.htm'\) "Glossary Entry"), the [conversion rule for source fields of the type c](javascript:call_link\('abenconversion_type_c.htm'\)) is used.

-   Serializations to an ABAP data object must retain the precision of the XML value:

-   Numeric types cannot lose any [places](javascript:call_link\('abenplace_glosry.htm'\) "Glossary Entry").

-   In character-like or byte-like data types with fixed lengths (c, n, x), the target object must have enough places for the entire content, unless only leading and trailing blanks in data type c and leading zeros in data type n are affected.

-   Structures cannot be converted to elementary data objects.

-   Deserializations fill data objects of the type c or x with blanks or hexadecimal 0 on the right (as usual) if fewer characters or bytes are passed than can fit in the data object.

-   If the required XML element does not exist when the system is deserializing in an elementary data object, the elementary data object keeps its previous value. If an empty element is assigned to an elementary data object, it is set to its type-dependent initial value. To initialize the data object in either case, the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) can be used with the value "all".

Any violations of these rules raise handleable exceptions such as CX\_SY\_CONVERSION\_DATA\_LOSS, some of which can be bypassed by specifying a [transformation option](javascript:call_link\('abapcall_transformation_options.htm'\)) after the OPTIONS addition of the CALL TRANSFORMATION statement.

Executable Example

[asXML, Mapping of Elementary Data Types](javascript:call_link\('abenasxml_elementary_abexa.htm'\))