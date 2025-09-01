  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - ABAP Release News](javascript:call_link\('abennews.htm'\)) →  [News for ABAP Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for ABAP Release 7.54](javascript:call_link\('abennews-754.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Data%20Types%20in%20ABAP%20Release%207.54%2C%20ABENNEWS-754-TYPES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Data Types in ABAP Release 7.54

Modification

New Built-In ABAP Type utclong

The new built-in [time stamp type](javascript:call_link\('abentimestamp_type_glosry.htm'\) "Glossary Entry") [utclong](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) makes it possible to declare [time stamp fields](javascript:call_link\('abentimestamp_field_glosry.htm'\) "Glossary Entry"). The new data type is taken into account in all relevant positions. Important points are:

-   The associated data type in ABAP Dictionary was introduced with the name [UTCLONG](javascript:call_link\('abenddic_builtin_types.htm'\)).
-   The [value range](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) of the new data type are [time stamps](javascript:call_link\('abentime_stamp_glosry.htm'\) "Glossary Entry") between 0001-01-01T00:00:00.0000000 and 9999-12-31T23:59:59.9999999 plus a special initial value.
-   In assignments and comparisons, the data type utclong can only be [converted](javascript:call_link\('abenconversion_type_utclong.htm'\)) to the types c and string, and vice versa. In assignments, any attempt to perform another conversion raises an exception of the new class CX\_SY\_CONVERSION\_NOT\_SUPPORTED.
-   Time stamp fields are formatted specially in [string templates](javascript:call_link\('abenstring_template_glosry.htm'\) "Glossary Entry") or using the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\)).
-   There is a [mapping rule](javascript:call_link\('abenabap_xslt_asxml_elementary.htm'\)) for [asXML](javascript:call_link\('abenasxml_glosry.htm'\) "Glossary Entry").

Time stamp fields must meet an [alignment requirement](javascript:call_link\('abenalignment.htm'\)). Their memory address must be divisible by eight.