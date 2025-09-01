  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Programming Guidelines](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenarchitecture_guidl.htm) →  [Data Storage](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendata_storage_guidl.htm) → 

Client Handling

Background

A client indicates a data area in an AS ABAP database that contains independent application data. The application data of different clients use the same database tables, but are flagged with a three-figure client ID within these tables.

When logging on to AS ABAP, this client ID must be entered. This selects the client whose data is processed by the user session. The current client is entered in the system field sy-mandt.

-   [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_glosry.htm "Glossary Entry") statements support automatic client handling by default, where the data of the current client is accessed by default. This is specified by passing an implicit condition for the current client to WHERE conditions, and ignoring clients specified in modifying statements in work areas. Automatic client handling in ABAP SQL can be switched to a different client using the addition USING CLIENT or switched off using the addition CLIENT SPECIFIED.

-   [Native SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennative_sql_glosry.htm "Glossary Entry") and [ADBC](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenamdp_glosry.htm "Glossary Entry") do not implement automatic client handling. The client in question does not need to be selected explicitly when Native SQL or AMDP is used to access client-specific database tables or views.

Rule

Do not access the data of other clients

In the persistency services of business applications, access the data of the current client only.

Details

Each client within the AS ABAP is to be viewed as a self-contained unit. The additions USING CLIENT and CLIENT SPECIFIED should not be used in ABAP SQL statements of business applications. When Native SQL or AMDP is used, only the current client should be selected.

The system field sy-mandt does not generally need to be evaluated, unless Native SQL or AMDP is used to access client-specific database tables or views. The client ID is then needed to select the data of the current client explicitly.

Notes

-   Cross-client database tables (tables without client ID) are usually system tables. This means that cross-client access to these tables is also reserved for system programs.

-   If data has to be accessed by ABAP SQL in a different client, USING CLIENT should be used instead of the addition CLIENT SPECIFIED, since all necessary conditions are set implicitly and accessing client-specific [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") is more simple.

Bad Example

The following source code shows ABAP SQL access to a database table where the current client is specified explicitly. This makes a further explicit WHERE condition necessary. The system field sy-mandt cannot be specified directly when using the addition USING CLIENT.

SELECT SINGLE ...
       FROM dbtab CLIENT SPECIFIED
       WHERE mandt = @sy-mandt AND
             ...
       INTO ...

Good Example

The following source code shows how ABAP SQL is generally used for implicit automatic client handling.

SELECT SINGLE ...
       FROM dbtab
       WHERE ...
       INTO ...