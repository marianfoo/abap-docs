  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.51](javascript:call_link\('abennews-751.htm'\)) → 

Transformations in Release 7.51

[1\. New Domains for Mapping from ABAP to XML](#!ABAP_MODIFICATION_1@1@)
[2\. New Formats for format in the Attribute option of tt:value](#!ABAP_MODIFICATION_2@2@)
[3\. decimals New for the Attributeoption of tt:value](#!ABAP_MODIFICATION_3@3@)
[4\. regime New for the Attributeoption of tt:value](#!ABAP_MODIFICATION_4@4@)
[5\. noError New for the Attributeoption of tt:value](#!ABAP_MODIFICATION_5@5@)

Modification 1   

New Domains for Mapping from ABAP to XML

The following new [special domains](javascript:call_link\('abenabap_xslt_asxml_schema.htm'\)) have been introduced, which override the default mapping of elementary ABAP types to asXML.

-   XSDUUID\_BASE64 for 16-byte UUIDs in base64 format
-   XSDCURRCODE for ISO currency keys
-   XSDUNITCODE for ISO unit keys

Modification 2   

New Formats for format in the Attribute option of tt:value

The following new formats can be specified in parentheses after [format](javascript:call_link\('abenst_option_format.htm'\)) in the [option](javascript:call_link\('abenst_option.htm'\)) attribute of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)):

-   hex for a hexadecimal display of byte-like values
-   uri and uri\_full for masking special characters in URIs
-   uri1 and uri2 for displaying literal values in URIs for OData.
-   currCode, unitCode for converting SAP-specific currency and unit keys in ISO units.
-   currency=CURRCODE, unit=UNITCODE for formatting numbers according to a currency or unit key
-   alpha for handling leading zeros in strings

Other enhancements:

-   dateTimeLocal, dateTimeOffset, and ticksOffset can now be used on the time stamp types TIMESTAMP and TIMESTAMPL.
-   guid can now also be used on the type c of length 22 for 16-byte UUIDs in base64 format.

Modification 3   

decimals New for the Attributeoption of tt:value

[decimals](javascript:call_link\('abenst_option_format.htm'\)) can now be specified in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), where it defines the number of decimal places of numeric types.

Modification 4   

regime New for the Attributeoption of tt:value

[regime(num*|*char*|*bin)](javascript:call_link\('abenst_option_format.htm'\)) can now be specified in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), where it can be used to force numeric, character-like, or byte-like handling.

Modification 5   

noError New for the Attributeoption of tt:value

[noError](javascript:call_link\('abenst_option_format.htm'\)) now can be specified in the attribute [option](javascript:call_link\('abenst_option.htm'\)) of the ST command [tt:value](javascript:call_link\('abenst_tt_value_elementary.htm'\)), where it prevents exceptions in the formattings language, currCode, and unitCode. These formattings evaluate entries in database tables.