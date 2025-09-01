  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 7.0 and its EhPs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-70_ehps.htm) →  [News for Release 7.0, EhP2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-71.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Database Access in Release 7.0, EhP2, ABENNEWS-71-SQL, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Database Access in Release 7.0, EhP2

[1\. UPDATE for Tables with Strings](#!ABAP_MODIFICATION_1@1@)
[2\. Table Buffering with Single Record Access](#!ABAP_MODIFICATION_2@2@)
[3\. Short Strings as Key Fields of Database Tables](#!ABAP_MODIFICATION_3@3@)
[4\. Maximum Length of Short Strings in ABAP Dictionary](#!ABAP_MODIFICATION_4@4@)
[5\. ABAP Database Connectivity (ADBC)](#!ABAP_MODIFICATION_5@5@)
[6\. Streaming and Locators in ABAP SQL](#!ABAP_MODIFICATION_6@6@)
[7\. Specifying Sorting Columns in ABAP SQL](#!ABAP_MODIFICATION_7@7@)
[8\. Overflow Handling for sy-dbcnt](#!ABAP_MODIFICATION_8@8@)

Modification 1   

UPDATE for Tables with Strings

When the statement [UPDATE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate.htm) is used for a column of type STRING or RAWSTRING with the addition [SET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapupdate_source.htm), it is no longer necessary to specify the [primary key](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprimary_key_glosry.htm "Glossary Entry") in full in the WHERE condition.

Modification 2   

Table Buffering with Single Record Access

Access to a table with single record buffering that an equality condition is set for in the WHERE clause for all key fields of the primary key uses [table buffering](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentable_buffering_glosry.htm "Glossary Entry"), even if the addition [SINGLE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect_single.htm) is not specified for SELECT. Before Release 7.0 EhP2, table buffering was bypassed if SINGLE was missing.

Modification 3   

Short Strings as Key Fields of Database Tables

From Release 7.0, EhP2, [short strings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_character_byte_types.htm) can be used as key fields of the type [SSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in database tables. This can produce significant memory and performance gains in comparison with using long fields of type CHAR.

Modification 4   

Maximum Length of Short Strings in ABAP Dictionary

The maximum length of short strings of type [SSTRING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) has been increased from 255 to 1333.

Modification 5   

ABAP Database Connectivity (ADBC)

The class-based framework ABAP Database Connectivity (ADBC), which has existed since Release 6.10 for dynamic access to the [Native SQL interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennative_sql_interface_glosry.htm "Glossary Entry"), is now also documented in the ABAP keyword documentation under [ADBC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenadbc.htm).

Modification 6   

Streaming and Locators in ABAP SQL

From Release 7.0, EhP2, ABAP SQL supports processing of [LOBs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlob_glosry.htm "Glossary Entry") using [data streams](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_stream_glosry.htm "Glossary Entry") and [locators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocator_glosry.htm "Glossary Entry").

-   A new set of classes and interfaces was introduced.
    
    See [ABAP SQL - Streaming and Locators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstreams_locators.htm)
    
-   In reading and changing ABAP SQL statements, data streams and locators can be linked to LOBs in database tables by using special reference variables.
    
    See [SELECT - LOB Handles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselect_into_lob_handles.htm) and [INSERT, UPDATE, MODIFY dbtab*|*view - LOB Handles](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenium_lob.htm)
    
-   Using the statements TYPES, DATA, and CLASS-DATA, it is possible to derive special LOB handle structures for use in ABAP SQL.
    
    See [TYPES ... FOR ... COLUMNS ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaptypes_lob_handle.htm)
    
-   The data streams for ABAP SQL are embedded in a broader streaming framework. Further data streams and filter streams will be added to this in future releases.
    
    See [Streaming](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstreaming.htm).
    

Modification 7   

Specifying Sorting Columns in ABAP SQL

The restriction that after [ORDER BY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abaporderby_clause.htm) in [SELECT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapselect.htm) only columns can be specified that are also specified after SELECT does not apply.

This also applies to the addition PRIMARY KEY. Previously, all columns of the primary key had to be in the SELECT list, but this is no longer the case.

Modification 8   

Overflow Handling for sy-dbcnt

If an overflow occurs in the system field sy-dbcnt, meaning the number of statements processed by SQL access is greater than 2,147,483,647, the value of sy-dbcnt is set to -1. The value was previously undefined.