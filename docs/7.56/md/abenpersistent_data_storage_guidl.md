  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Guidelines](javascript:call_link\('abenabap_pgl.htm'\)) →  [Architecture](javascript:call_link\('abenarchitecture_gdl.htm'\)) →  [Data Storage](javascript:call_link\('abendata_storage_gdl.htm'\)) → 

Persistent Data Storage

Background

ABAP programs can have both read and write access to data in the following persistent storage media:

-   Relational database tables in databases
-   Data clusters in special database tables
-   Binary files or text files on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance
-   Binary files or text files on the front-end computer when SAP GUI is used

According to the [SoC principle](javascript:call_link\('abenseperation_concerns_guidl.htm'\) "Guideline"), such accesses are wrapped in service classes of the persistency layer of an application.

Rule

Plan persistent data storage carefully

Select with care the persistent storage media that are used by the application as well as the possible data transport routes between these media. Here is a general rule of thumb:

-   Database tables for the general storage of raw data
-   Data clusters for the storage of formatted data
-   Files for data exchange with external systems

Details

When you plan persistent data storage, you should follow these steps:

1.  On an AS ABAP, storing in relational database tables is always the first choice. ABAP supports this with the ABAP SQL that is integrated into the language. An object-oriented access is possible using Object Services. The majority of the data is stored in the [standard database](javascript:call_link\('abenstandard_db_glosry.htm'\) "Glossary Entry") of AS ABAP. [Secondary connections](javascript:call_link\('abensecondary_db_connection_glosry.htm'\) "Glossary Entry") (managed using [DBA Cockpit](javascript:call_link\('abendba_cockpit_glosry.htm'\) "Glossary Entry")) can be used to access further databases.
2.  The following data can be stored in data clusters when using the EXPORT and IMPORT statements:
    
    \- Formatted data as the result of comprehensive analyses
    
    \- Data that is not suitable for relational databases because it does not exist in the first normal form (such as nested internal tables)
    
    \- Object networks after a serialization to XML
    
3.  The persistent storage of data in files of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of a AS instance or of the presentation server is usually the least suitable for AS ABAP application programs because it is generally platform-dependent (code pages, byte order). In addition, data like this is then only available in specific AS instances, which can cause problems in load distribution scenarios with automated server selection. Such files may be required for the data exchange with external systems, however.

Under no circumstances should you use existing database tables (or files) to store data that are not provided for this purpose. Follow the convention of restricting reads and writes to database tables to specific packages. A database table must always be considered a semantic entity that is only allowed to contain the corresponding data. This even applies if a table with the required structure already exists. If in doubt, you should create a specific database table.

You must also be careful when using seemingly cross-system resources, such as the predefined INDX database table, to store data clusters. Such a resource must only be used to store temporary data for the short term, if at all. You should create specific database tables, for example, [export/import tables](javascript:call_link\('abenexport_import_table_glosry.htm'\) "Glossary Entry"), for application-specific and longer-lasting data.