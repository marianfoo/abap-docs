  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - Streaming and Locators, ABENSTREAMS_LOCATORS, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

ABAP SQL - Streaming and Locators

In ABAP SQL, [data streams](javascript:call_link\('abendata_stream_glosry.htm'\) "Glossary Entry") and [locators](javascript:call_link\('abenlocator_glosry.htm'\) "Glossary Entry") can be used to access [LOBs](javascript:call_link\('abenlob_glosry.htm'\) "Glossary Entry"). LOBs are fields in data sources of type [STRING](javascript:call_link\('abenddic_builtin_types.htm'\)) or [RAWSTRING](javascript:call_link\('abenddic_builtin_types.htm'\)), or SQL expressions that return one of these data types, for example, [type conversion functions](javascript:call_link\('abenabap_sql_conversion_functions.htm'\)). The associated objects are grouped together under the term [LOB handles](javascript:call_link\('abenlob_handle_glosry.htm'\) "Glossary Entry"). While a locator is always an LOB handle, in principal there can also be data streams for other resources (see [Streaming](javascript:call_link\('abenstreaming.htm'\))).

For regular access to LOBs, ABAP data objects of the types string and xstring are used, to which the entire LOB is passed in the case of reads and from which the entire LOB is taken in the case of writes. Data streams and locators, however, work as follows:

-   For reads, [reader streams](javascript:call_link\('abenreader_stream_glosry.htm'\) "Glossary Entry") can be linked with LOBs using the assignment of corresponding reference variables. The same applies to writes and [writer streams](javascript:call_link\('abenwriter_stream_glosry.htm'\) "Glossary Entry"). LOB data can be processed in portions using the methods of the streams. This has the benefit that LOBs do not have to be completely realized in the ABAP program.
-   In the case of reads and writes, locators can be linked with LOBs by assigning corresponding reference variables. Using the methods of the locators, the substrings of LOBs or the properties of LOBs can be accessed without requiring a complete realization in the ABAP program. Furthermore, locators enable the copying of LOBs within the database without having to transport the data between the database and the AS ABAP.

The use of data streams and locators for LOBs in DDIC database tables can improve performance with respect to the program runtime, by omitting unnecessary data transports. There are, however, also some disadvantages:

-   The use of locators leads to higher resource consumption in the database system. Locators are not yet supported by all databases. In this case, they must be emulated from the database interface on AS ABAP.
-   The use of data streams does not lead to increased resource consumption in the database system, but data streams are somewhat more limited in their use. In particular, data streams cannot be used if internal tables are used in the ABAP SQL statements.

The following sections introduce the classes for data streams and locators as well as the interfaces they include for general LOB handles.

-   [Streaming](javascript:call_link\('abenabap_sql_streaming.htm'\))
-   [Locators](javascript:call_link\('abenlocators.htm'\))
-   [LOB Interfaces](javascript:call_link\('abenlob_interfaces.htm'\))

Hint

A maximum of 1000 LOB handles can be open in a [database LUW](javascript:call_link\('abendatabase_luw_glosry.htm'\) "Glossary Entry").

Continue
[ABAP SQL - Streaming](javascript:call_link\('abenabap_sql_streaming.htm'\))
[ABAP SQL - Locators](javascript:call_link\('abenlocators.htm'\))
[ABAP SQL - LOB Interfaces](javascript:call_link\('abenlob_interfaces.htm'\))
[ABAP SQL - Examples of LOB Handles](javascript:call_link\('abenlobs_abexas.htm'\))