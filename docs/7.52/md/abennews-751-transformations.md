  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-75.htm) →  [Changes in Release 7.51](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-751.htm) → 

Transformations in Release 7.51

[1\. New domains for mapping from ABAP to XML](#!ABAP_MODIFICATION_1@1@)

[2\. New formats for the format specification in the option attribute of tt:value](#!ABAP_MODIFICATION_2@2@)

[3\. New specification decimals for the option attribute of tt:value](#!ABAP_MODIFICATION_3@3@)

[4\. New specification regime for the option attribute of tt:value](#!ABAP_MODIFICATION_4@4@)

[5\. New specification noError for the option attribute of tt:value](#!ABAP_MODIFICATION_5@5@)

Modification 1

New domains for mapping from ABAP to XML

The following new [special domains](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_xslt_asxml_schema.htm) have been introduced, which override the default mapping of elementary ABAP types to asXML.

-   XSDUUID\_BASE64 for 16-byte UUIDs in base64 format
    
-   XSDCURRCODE for ISO currency keys
    
-   XSDUNITCODE for ISO unit keys
    

Modification 2

New formats for the format specification in the option attribute of tt:value

The following new formats can be specified in parentheses after [format](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option_format.htm) in the [option](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option.htm) attribute of the ST command [tt:value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm):

-   hex for a hexadecimal display of byte-type values
    
-   uri and uri\_full for masking special characters in URIs
    
-   uri1 and uri2 for displaying literal values in URIs for OData.
    
-   currCode, unitCode for converting SAP-specific currency and unit keys in ISO units.
    
-   currency=CURRCODE, unit=UNITCODE for formatting numbers according to a currency or unit key
    
-   alpha for handling leading zeros in strings
    

Other enhancements:

-   dateTimeLocal, dateTimeOffset, and ticksOffset can now be used on the time stamp types TIMESTAMP and TIMESTAMPL.
    
-   guid can now also be used on the type c of length 22 for 16-byte UUIDs in base64 format.
    

Modification 3

New specification decimals for the option attribute of tt:value

The new specification [decimals](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option_format.htm) in the [option](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option.htm) attribute of the ST command [tt:value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) influences the number of decimal places of numeric types.

Modification 4

New specification regime for the option attribute of tt:value

The new specification [regime(num*|*char*|*bin)](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option_format.htm) in the [option](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option.htm) attribute of the ST command [tt:value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) can be used to force a numeric, character-like, or byte-like handling.

Modification 5

New specification noError for the option attribute of tt:value

The new specification [noError](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option_format.htm) in the [option](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_option.htm) attribute of the ST command [tt:value](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenst_tt_value_elementary.htm) prevents exceptions in language, currCode, and unitCode formattings, which evaluate entries in database tables.