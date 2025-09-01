  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendb_access.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20SQL%20-%20Streaming%20and%20Locators%2C%20ABENSTREAMS_LOCATORS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP SQL - Streaming and Locators

In ABAP SQL, [data streams](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_stream_glosry.htm "Glossary Entry") and [locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocator_glosry.htm "Glossary Entry") can be used to access [LOBs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_glosry.htm "Glossary Entry"). LOBs are fields in data sources of type [STRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm) or [RAWSTRING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_builtin_types.htm), or SQL expressions that return one of these data types, for example, [type conversion functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_conversion_functions.htm). The associated objects are grouped together under the term [LOB handles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_handle_glosry.htm "Glossary Entry"). While a locator is always an LOB handle, there can also be data streams for other resources (see [Streaming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstreaming.htm)).

For regular access to LOBs, ABAP data objects of the types string and xstring are used, to which the entire LOB is passed in the case of reads and from which the entire LOB is taken in the case of writes. Data streams and locators, however, work as follows:

-   For reads, [reader streams](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenreader_stream_glosry.htm "Glossary Entry") can be linked with LOBs using the assignment of corresponding reference variables. The same applies to writes and [writer streams](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenwriter_stream_glosry.htm "Glossary Entry"). LOB data can be processed in portions using the methods of the streams. This has the benefit that LOBs do not have to be completely realized in the ABAP program.
-   In the case of reads and writes, locators can be linked with LOBs by assigning corresponding reference variables. Using the methods of the locators, the substrings of LOBs or the properties of LOBs can be accessed without requiring a complete realization in the ABAP program. Furthermore, locators enable the copying of LOBs within the database without having to transport the data between the database and the AS ABAP.

The use of data streams and locators for LOBs in DDIC database tables can improve performance with respect to the program runtime, by omitting unnecessary data transports. There are, however, also some disadvantages:

-   The use of locators leads to higher resource consumption in the database system. Locators are not yet supported by all databases. In this case, they must be emulated from the database interface on AS ABAP.
-   The use of data streams does not lead to increased resource consumption in the database system, but data streams are somewhat more limited in their use. In particular, data streams cannot be used if internal tables are used in the ABAP SQL statements.

The following sections introduce the classes for data streams and locators as well as the interfaces they include for general LOB handles.

-   [Streaming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_streaming.htm)
-   [Locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocators.htm)
-   [LOB Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_interfaces.htm)

Hint

A maximum of 1000 LOB handles can be open in a [database LUW](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Continue
[ABAP SQL - Streaming](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_sql_streaming.htm)
[ABAP SQL - Locators](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlocators.htm)
[ABAP SQL - LOB Interfaces](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlob_interfaces.htm)
[ABAP SQL - Examples of LOB Handles](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlobs_abexas.htm)