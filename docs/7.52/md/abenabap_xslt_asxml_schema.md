  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Data Interfaces and Communication Interfaces](javascript:call_link\('abenabap_data_communication.htm'\)) →  [ABAP and XML](javascript:call_link\('abenabap_xml.htm'\)) →  [Transformations for XML](javascript:call_link\('abenabap_xml_trafos.htm'\)) →  [asXML - Canonical XML Representation](javascript:call_link\('abenabap_xslt_asxml.htm'\)) → 

asXML - Mapping Additional XML Schema Data Types

As well as the [XML schema data types](http://www.w3.org/tr/xmlschema-2/) required for [mapping elementary ABAP types](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)), there are additional XML schema data types that cannot be mapped directly to predefined ABAP types. To enable type-friendly deserialization of these external types to ABAP data objects, a special [domain](javascript:call_link\('abendomain_glosry.htm'\) "Glossary Entry") is implemented in ABAP Dictionary for each required XML schema data type. The name of the domain starts with XSD. Any elementary ABAP data objects whose data type is defined using a [data element](javascript:call_link\('abendata_element_glosry.htm'\) "Glossary Entry") that refers to a domain of this type are mapped to the appropriate XML schema data type, both when serialized and when deserialized. The required conversions are performed internally. This applies to both XSL transformations and to simple transformations.

The following table provides a summary of the XML schema data types supported by domains, as well as other supported types (UUID, currCode, and unitCode).

XML Schema Type

XML Representation

Domain

ABAP Representation

xsd:boolean

true, false

XSDBOOLEAN

X, " "

xsd:date

2007-10-01

XSDDATE\_D

20071001

xsd:time

11:55:00

XSDTIME\_T

115500

xsd:dateTime

2006-07-27T17:03:34Z

XSDDATETIME\_Z, XSDDATETIME\_LONG\_Z, XSDDATETIME\_OFFSET, XSDDATETIME\_LOCAL, XSDDATETIME\_LOCAL\_DT

20060727170334

xsd:QName

prefix:name

XSDQNAME

{URI}name

UUID

00505691‑3e2f‑1ed5‑b8ba‑87b9ac1248c9

XSDUUID\_RAW, XSDUUID\_CHAR, XSDUUID\_BASE64

005056913E2F1ED5B8BA87B9AC1248C9,
051MaJul7jMukeUvh198oG

xsd:language

EN, DE

XSDLANGUAGE

D, E

currCode

EUR, USD

XSDCURRCODE

EUR, USD

unitCode

KMT, SMI

XSDUNITCODE

KM, MI

The following sections describe the domains and their mappings in more detail.

-   [boolean](#abenabap-xslt-asxml-schema-1--------date---@ITOC@@ABENABAP_XSLT_ASXML_SCHEMA_2)

-   [dateTime](#abenabap-xslt-asxml-schema-3--------qname---@ITOC@@ABENABAP_XSLT_ASXML_SCHEMA_4)

-   [time](#abenabap-xslt-asxml-schema-5--------uuid---@ITOC@@ABENABAP_XSLT_ASXML_SCHEMA_6)

-   [language](#abenabap-xslt-asxml-schema-7--------currcode---@ITOC@@ABENABAP_XSLT_ASXML_SCHEMA_8)

-   [unitCode](#@@ITOC@@ABENABAP_XSLT_ASXML_SCHEMA_9)

The following applies to all domains:

-   in deserializations of an empty XML element in an ABAP data object (which is typed with reference to this type of domain), the initial value of the associated elementary ABAP type is assigned as usual.

-   The transformation option [initial\_components](javascript:call_link\('abapcall_transformation_options.htm'\)) for suppressing initial values in serializations has the same effect as for normal data types. This can lead to unexpected behavior in deserializations, if the transformation option [clear](javascript:call_link\('abapcall_transformation_options.htm'\)) is not used with the value "all".

Notes

-   With the exception of XSDQNAME, all domains are also supported in [transformations for JSON](javascript:call_link\('abenabap_json_trafos.htm'\)). See the associated [executable example](javascript:call_link\('abenabap_json_asjson_xsd_abexa.htm'\)).

-   By specifying [format](javascript:call_link\('abenst_option_format.htm'\)) in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), many of the formats here can also be applied to ABAP data objects that are not typed with a domain of this type.

-   The specification [regime](javascript:call_link\('abenst_option_format.htm'\)) in the [option](javascript:call_link\('abenst_option.htm'\)) attribute of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)) deactivates the effect of the domains shown here.

-   Exceptions, which occur when mapping the domains displayed here, can in some cases be suppressed by specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command[tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)).

-   Exceptions from mappings cannot be handled directly. Instead, the exception CX\_TRANSFORMATION\_ERROR (or one of its subclasses) from statement [CALL TRANSFORMATION](javascript:call_link\('abapcall_transformation.htm'\)) can be handled. The attribute PREVIOUS then contains a reference to the original exception.

boolean

The domain XSDBOOLEAN has the data type CHAR with length 1 and therefore supports the usual ABAP representation of a [truth value](javascript:call_link\('abenlogical_value_glosry.htm'\) "Glossary Entry") using "X" for true and " " for false. These values are entered as [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") for the domain and are checked when an ABAP data object linked to this domain is serialized. The serialization creates the values "true" and "false" in XML. A deserialization also accepts the non-canonical XML values "1" and "0". Any other values raise the exception CX\_SY\_CONVERSION\_NO\_BOOLEAN. An empty element creates the value " " in deserializations.

Notes

-   By specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command[tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), you can avoid an exception for invalid ABAP values during serialization. All values except " " are interpreted as true.

-   The transformation option [initial\_components](javascript:call_link\('abapcall_transformation_options.htm'\)) suppresses components of type XSDBOOLEAN in serializations, if the components contain the value " " for "false". Therefore this option should be used carefully.

-   The return value of the Boolean function [xsdbool](javascript:call_link\('abenboole_functions.htm'\)) has the type XSDBOOLEAN.

date

The XML schema data type date for dates is supported by both the predefined ABAP type [d](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)) and the domain XSDDATE\_D. This domain has the data type DATS. When data is serialized and deserialized, the validity of the date is also checked, which is not the case with the predefined ABAP type d. An empty element creates the value "00000000" in deserializations.

Note

By specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command[tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), you can avoid an exception for an invalid date during serialization.

dateTime

The XML schema data type dateTime supports the representation of dates and times in a field, based on ISO 8601. An XML value of this type is either in UTC format, contains a time zone, or represents a local time. Five domains are assigned to this schema data type:

-   The domains XSDDATETIME\_Z and XSDDATETIME\_LONG\_Z have the data types DEC with length 15 or 21. XSDDATETIME\_Z has no decimal places; XSDDATETIME\_LONG\_Z has seven decimal places. These domains support the long and short form of the [time stamp](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") used in ABAP, which is always processed as the current [UTC](javascript:call_link\('abenutc_glosry.htm'\) "Glossary Entry") reference time. A serialization creates values in UTC format (yyyy-mm-ddThh:mm:ss.zzzzzzzZ) in XML. A deserialization accepts XML values in UTC format (closed by Z) or with time zones (closed by *{*+*|*\-*}*hh:mm). The time zones are converted to the appropriate UTC value. No precision may be lost in deserializations. This means that only XML values with a maximum of seven decimal places can be deserialized. An empty element creates the value 0 in deserializations.

-   The domain XSDDATETIME\_OFFSET has the data type CHAR with length 18. Mapping is permitted to XML values for which a time zone is specified (yyyy-mm-ddThh:mm:ss*{*+*|*\-*}*hh:mm). The defined format for an ABAP data object of type XSDDATETIME\_OFFSET is yyyymmddhhmmss*{*+*|*\-*}*mmm. In a deserialization, the time zone of the XML value specified in hours and minutes is converted to a three-figure number of minutes. An empty element creates an empty string in deserializations.

-   The domain XSDDATETIME\_LOCAL has the data type CHAR with length 14. The domain XSDDATETIME\_LOCAL\_DT has the data type NUMC with length 14. They permit mappings to XML values that specify a local time (yyyy-mm-ddThh:mm:ss). This means that they are not available in UTC format and no time zone is specified. The defined format for an ABAP data object of type XSDDATETIME\_LOCAL or XSDDATETIME\_LOCAL\_DT is yyyymmddhhmmss. The main difference between the two data types are their initial values. An empty element creates an empty string in deserializations.

Invalid values raise the exception CX\_SY\_CONVERSION\_NO\_DATE\_TIME.

QName

The domain XSDQNAME has the data type STRING. The XML schema data type QName represents qualified names. In XML, a qualified name can have a prefix that is separated by a colon. A prefix of this type must be associated with a URI in a namespace declaration of the current element or a higher-level element. In ABAP, a name of this type is represented as the content of a string in the form "{URI}name".

When an ABAP object of the type XSDQNAME is serialized, the URI specified in curly brackets is used to create the associated prefix. If there is no namespace declaration for the URI in the right context, it is inserted in the current element, with the resulting namespaces containing the names "n0", "n1", ... If the URI is associated with the default namespace, no prefix is created. If no URI is specified in curly brackets, again no prefix is created. This latter case is possible only if the default namespace is not used simultaneously in the current element. Otherwise, the exception CX\_ST\_INVALID\_XML is raised (which can occur only in simple transformations).

When a value with a prefix is deserialized to an ABAP data object of the type XSDQNAME, the system searches for a URI in an associated namespace declaration. If no URI is found, the exception CX\_SY\_CONVERSION\_NO\_QNAME is raised. If a value without prefix is deserialized, the URI of the default namespace is used (if available) or only the name is placed in the string.

An initial data object of the type XSDQNAME creates an empty element when serialized, and vice versa when deserialized. In both serializations and deserializations, the correctness of the specified name with respect to the valid naming conventions is checked. If violated, an exception of the class CX\_SY\_CONVERSION\_NO\_QNAME is raised.

The class CL\_ABAP\_XSDTYPE\_HELPER contains the methods TO\_XSDQNAME and FROM\_XSDQNAME for the conversion of URIs and names to the type XSDQNAME, and vice versa.

Executable Example

[asXML, Mapping of Qualified Names](javascript:call_link\('abenasxml_qnames_abexa.htm'\))

time

The XML schema data type time for dates is supported by both the predefined ABAP type [t](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)) and the domain XSDTIME\_T. This domain has the data type TIMS. When data is serialized and deserialized, the validity of the time is also checked, which is not the case with the predefined ABAP type t. An empty element creates the value "000000" in deserializations.

Note

By specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command[tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), you can avoid an exception for an invalid time during serialization.

UUID

The domains have the following meaning:

-   XSDUUID\_RAW has the data type RAW with length 16 for 16-byte[UUIDs](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") in binary format.

-   XSDUUID\_CHARhas the data type CHAR with length 32 for 16-byte [UUIDs](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") in hexadecimal format.

-   XSDUUID\_BASE64 has the data type CHAR with length 22 for 16-byte [UUIDs](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") in [base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry") format.

A serialization creates the hexadecimal XML schema representation from data objects of these types, with hyphens and lowercase letters. Deserializations accept uppercase letters as well. A character-like UUID of type XSDUUID\_CHAR can contain only uppercase letters in serializations. Invalid UUIDs raise the exception CX\_SY\_CONVERSION\_NO\_UUID. An empty element creates byte strings or character strings filled with hexadecimal zeroes or blanks in deserializations.

Note

UUIDs can be generated in ABAP data objects from the class [CL\_SYSTEM\_UUID](javascript:call_link\('abencl_system_uuid.htm'\)).

Example

Serialization of a 16-byte [UUID](javascript:call_link\('abenuuid_glosry.htm'\) "Glossary Entry") in [base64](javascript:call_link\('abenbase64_glosry.htm'\) "Glossary Entry") format.

DATA uuid TYPE xsduuid\_base64.
uuid = cl\_uuid\_factory=>create\_system\_uuid( )->create\_uuid\_c22( ).
CALL TRANSFORMATION id SOURCE uuid = uuid
                       RESULT XML DATA(xml).
cl\_demo\_output=>display\_xml( xml ).

Executable Example

[asXML, Mapping of UUIDs](javascript:call_link\('abenabap_xslt_mapping_abexa.htm'\))

language

The domain XSDLANGUAGE has the data type [LANG](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 1. It enables single-character internal language IDs to be mapped to the associated two-character external ISO IDs and back again. The rule for the mapping is specified in the columns SPRAS (single-character ID) and LAISO (two-character ID) of the database table T002. In serializations, the single-character ID is found in the table T002 and the associated two-character ID is used as an XML value. The opposite happens in deserializations. In deserializations, lowercase letters are transformed to uppercase letters first. If no ID is found in the table T002, the following relationship is evaluated:

Y = ( X2 - 0x20 ) + ( X1 - 0x20 ) \* ( 0x80 - 0x20 ) + 0xAC00

Here, Y is the 16-bit Unicode value of the single-character ID and X1 and X2 are the 7-bit ASCII values of the two characters in the two-character ID.

-   In serializations, a two-character ID is created (if possible), that satisfies this relationship. If this is not possible, the exception CX\_SY\_CONVERSION\_UNKNOWN\_LANGU is raised.

-   In deserializations, the single-character ID is calculated in accordance with this formula. The exception CX\_SY\_CONVERSION\_UNKNOWN\_LANGU is raised if the XML value is longer than two characters (except when the third character is a hyphen; in this case only the first two characters are used) or if the 7-bit ASCII values of the characters are less than 0x20 or greater than or equal to 0x80.

Note

By specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command[tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), you can avoid an exception for an unknown language during serialization. In this case, no conversion is performed.

Example

Serialization of a language ID with transformation according to table T002.

DATA language TYPE xsdlanguage VALUE 'E'.
cl\_demo\_input=>request( CHANGING field = language ).
TRY.
    CALL TRANSFORMATION id SOURCE language = language
                           RESULT XML DATA(xml).
    cl\_demo\_output=>display\_xml( xml ).
  CATCH cx\_transformation\_error INTO DATA(exc\_trafo).
    MESSAGE exc\_trafo TYPE 'I' DISPLAY LIKE 'E'.
    IF exc\_trafo->previous IS NOT INITIAL.
      MESSAGE exc\_trafo->previous TYPE 'I' DISPLAY LIKE 'E'.
    ENDIF.
ENDTRY.

currCode

The domain XSDCURRCODE has the data type [CUKY](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 5. It enables SAP-specific currency codes to be mapped to external ISO currency codes and back again. The rule for the mapping is specified in the columns WAERS (SAP code) and ISOCD (ISO code) of the database table TCURC. In serializations, the SAP code is found in the table TCURC and the associated ISO code is used as an XML value. The opposite happens in deserializations. If a code is not found in the table TCURC, the exception CX\_SY\_CONVERSION\_UNKNOWN\_CURR is raised.

Note

By specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command[tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), you can avoid an exception for an unknown SAP code during serialization. In this case, no conversion is performed.

Example

Serialization of a currency code with transformation according to table TCURC.

DATA currcode TYPE xsdcurrcode VALUE 'EUR'.
cl\_demo\_input=>request( CHANGING field = currcode ).
TRY.
    CALL TRANSFORMATION id SOURCE currcode = currcode
                           RESULT XML DATA(xml).
    cl\_demo\_output=>display\_xml( xml ).
  CATCH cx\_transformation\_error INTO DATA(exc\_trafo).
    MESSAGE exc\_trafo TYPE 'I' DISPLAY LIKE 'E'.
    IF exc\_trafo->previous IS NOT INITIAL.
      MESSAGE exc\_trafo->previous TYPE 'I' DISPLAY LIKE 'E'.
    ENDIF.
ENDTRY.

unitCode

The domain XSDUNITCODE has the data type [UNIT](javascript:call_link\('abenddic_builtin_types.htm'\)) with length 3. It enables SAP-specific unit codes to be mapped to external ISO unit codes and back again. The rule for the mapping is specified in the columns MSEHI (SAP code) and ISOCODE (ISO code) of the database table T006. In serializations, the SAP code is found in the table T006 and the associated ISO code is used as an XML value. The opposite happens in deserializations. If a code is not found in the table T006, the exception CX\_SY\_CONVERSION\_UNKNOWN\_UNIT is raised.

Note

By specifying [noError](javascript:call_link\('abenst_option_format.htm'\)) in attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command[tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), you can avoid an exception for an unknown SAP code during serialization. In this case, no conversion is performed.

Example

Serialization of a unit of measurement with transformation according to table T006.

DATA unitcode TYPE xsdunitcode VALUE 'TON'.
cl\_demo\_input=>request( CHANGING field = unitcode ).
TRY.
    CALL TRANSFORMATION id SOURCE unitcode = unitcode
                           RESULT XML DATA(xml).
    cl\_demo\_output=>display\_xml( xml ).
  CATCH cx\_transformation\_error INTO DATA(exc\_trafo).
    MESSAGE exc\_trafo TYPE 'I' DISPLAY LIKE 'E'.
    IF exc\_trafo->previous IS NOT INITIAL.
      MESSAGE exc\_trafo->previous TYPE 'I' DISPLAY LIKE 'E'.
    ENDIF.
ENDTRY.