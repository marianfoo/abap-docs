  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP Database Accesses](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_sql.htm) →  [Open SQL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopensql.htm) → 

Open SQL - Streaming and Locators

In Open SQL, [data streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_stream_glosry.htm "Glossary Entry") and [locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocator_glosry.htm "Glossary Entry") can be used to access [LOBs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_glosry.htm "Glossary Entry") in data sources. The associated objects are grouped together under the term [LOB handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_handle_glosry.htm "Glossary Entry"). While a locator is always an LOB handle, in principal there can also be data streams for other resources (see [Streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstreaming.htm)).

For regular access to LOBs, ABAP data objects of the types string and xstring are used, to which the entire LOB is passed in the case of reads and from which the entire LOB is taken in the case of writes. Data streams and locators, however, work as follows:

-   For reads, [reader streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenreader_stream_glosry.htm "Glossary Entry") can be associated with LOBs using the assignment of corresponding reference variables. The same applies to writes and [writer streams](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwriter_stream_glosry.htm "Glossary Entry"). LOB data can be edited in portions using the methods of the streams. This has the benefit that LOBs do not have to be completely realized in the ABAP program.

-   In the case of reads and writes, locators can be associated with LOBs by assigning corresponding reference variables. Using the methods of the locators, the substrings of LOBs or the properties of LOBs can be accessed without requiring a complete realization in the ABAP program. Furthermore, locators enable the copying of LOBs within the database without having to transport the data between the database and the application server.

The use of data streams and locators for LOBs in database tables can improve performance with respect to the program runtime, by omitting unnecessary data transports. There are, however, also some disadvantages:

-   The use of locators leads to higher resource consumption in the database system. Locators are not yet supported by all databases. In this case, they have to be emulated from the database interface on the application server.

-   The use of data streams does not lead to increased resource consumption in the database system, but data streams are somewhat more limited in their use. In particular, data streams cannot be used if internal tables are being processed in the Open SQL statements.

The following sections introduce the classes for data streams and locators as well as the interfaces they include for general LOB handles.

-   [Streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_streaming.htm)

-   [Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocators.htm)

-   [LOB Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_interfaces.htm)

Note

A maximum of 1000 LOB handles can be open in a [database LUW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendatabase_luw_glosry.htm "Glossary Entry").

Continue
[Open SQL - Streaming](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenopen_sql_streaming.htm)
[Open SQL - Locators](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlocators.htm)
[LOB Interfaces](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlob_interfaces.htm)
[Open SQL - Examples forLOB Handles](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlobs_abexas.htm)