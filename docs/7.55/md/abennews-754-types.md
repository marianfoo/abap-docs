  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews.htm) →  [Changes in Releases 7.5x](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-75.htm) →  [Changes in Release 7.54](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennews-754.htm) → 

Data Types in Release 7.54

[1\. New built-in ABAP type utclong](#!ABAP_MODIFICATION_1@1@)

Modification 1

New Built-In ABAP Type utclong

The new built-in [time stamp type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_date_time.htm) makes it possible to declare [time stamp fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_field_glosry.htm "Glossary Entry"). The new data type is taken into account in all relevant positions. Important points are:

-   The associated data type in ABAP Dictionary was introduced with the name [UTCLONG](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm).

-   The [value range](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuiltin_types_date_time.htm) of the new data type are [time stamps](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_stamp_glosry.htm "Glossary Entry") between "0001-01-01T00:00:00.0000000" and "9999-12-31T23:59:59.9999999" plus a special initial value.

-   In assignments and comparisons, the data type utclong can only be [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_utclong.htm) to the types c and string, and vice versa. In assignments, any attempt to perform another conversion raises an exception of the new class CX\_SY\_CONVERSION\_NOT\_SUPPORTED.

-   Time stamp fields are formatted specially in [string templates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_template_glosry.htm "Glossary Entry") or using the statement [WRITE TO](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite_to.htm).

-   There is a [mapping rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_xslt_asxml_elementary.htm) for [asXML](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenasxml_glosry.htm "Glossary Entry").

Time stamp fields must meet an [alignment requirement](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenalignment.htm). Their memory address must be divisible by eight.