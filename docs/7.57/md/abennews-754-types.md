  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.5x](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-75.htm) →  [News for Release 7.54](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-754.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Types in Release 7.54, ABENNEWS-754-TYPES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Data Types in Release 7.54

Modification

New Built-In ABAP Type utclong

The new built-in [time stamp type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_type_glosry.htm "Glossary Entry") [utclong](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm) makes it possible to declare [time stamp fields](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentimestamp_field_glosry.htm "Glossary Entry"). The new data type is taken into account in all relevant positions. Important points are:

-   The associated data type in ABAP Dictionary was introduced with the name [UTCLONG](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm).
-   The [value range](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbuiltin_types_date_time.htm) of the new data type are [time stamps](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentime_stamp_glosry.htm "Glossary Entry") between "0001-01-01T00:00:00.0000000" and "9999-12-31T23:59:59.9999999" plus a special initial value.
-   In assignments and comparisons, the data type utclong can only be [converted](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconversion_type_utclong.htm) to the types c and string, and vice versa. In assignments, any attempt to perform another conversion raises an exception of the new class CX\_SY\_CONVERSION\_NOT\_SUPPORTED.
-   Time stamp fields are formatted specially in [string templates](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_template_glosry.htm "Glossary Entry") or using the statement [WRITE TO](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapwrite_to.htm).
-   There is a [mapping rule](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_xslt_asxml_elementary.htm) for [asXML](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenasxml_glosry.htm "Glossary Entry").

Time stamp fields must meet an [alignment requirement](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenalignment.htm). Their memory address must be divisible by eight.