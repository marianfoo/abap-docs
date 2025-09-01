  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-75.htm) →  [News for ABAP Release 7.54](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Types%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Types in ABAP Release 7.54

Modification

New Built-In ABAP Type utclong

The new built-in [time stamp type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm) makes it possible to declare [time stamp fields](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_field_glosry.htm "Glossary Entry"). The new data type is taken into account in all relevant positions. Important points are:

-   The associated data type in ABAP Dictionary was introduced with the name [UTCLONG](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm).
-   The [value range](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbuiltin_types_date_time.htm) of the new data type are [time stamps](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentime_stamp_glosry.htm "Glossary Entry") between 0001-01-01T00:00:00.0000000 and 9999-12-31T23:59:59.9999999 plus a special initial value.
-   In assignments and comparisons, the data type utclong can only be [converted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_utclong.htm) to the types c and string, and vice versa. In assignments, any attempt to perform another conversion raises an exception of the new class CX\_SY\_CONVERSION\_NOT\_SUPPORTED.
-   Time stamp fields are formatted specially in [string templates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_template_glosry.htm "Glossary Entry") or using the statement [WRITE TO](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapwrite_to.htm).
-   There is a [mapping rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_xslt_asxml_elementary.htm) for [asXML](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenasxml_glosry.htm "Glossary Entry").

Time stamp fields must meet an [alignment requirement](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalignment.htm). Their memory address must be divisible by eight.