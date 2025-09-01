  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Delivery%20Class%20of%20Database%20Tables%2C%20ABENDDIC_DATABASE_TABLES_DELIVERY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20fo
r%20improvement:)

DDIC - Delivery Class of Database Tables

The delivery class of a DDIC database table controls the [transport](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/48c4300fca5d581ce10000000a42189c) of table data in installations, upgrades, or [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c), and in [transports](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/48c4300fca5d581ce10000000a42189c) between customer systems. The delivery class is also respected in extended table maintenance (transaction code SM30).

-   Delivery class A
    
    Application table for master data and transaction data. The data is written by application programs.
    
    -   An application table is delivered as an empty table or with a template for real data in client 000.
    -   In [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c), the data in client-dependent tables is copied only if the corresponding flag is set in the [client copy profile](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c). Any client-independent data is not copied.
    -   In installations, updates, and language imports, the data in client-dependent tables is only imported into the system client with the client ID 000, overwriting any existing data that match the content in the key fields. Any client-independent data is not imported.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
-   Delivery class C
    
    Customizing table for data maintained exclusively by the customer.
    
    -   Client-dependent customizing tables can be delivered with patterns for real data.
    -   In [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c), the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, the data in client-dependent tables is only imported into the system client with the client ID 000, overwriting any existing data that match the content in the key fields. Any client-independent data is not imported.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
-   Delivery class L
    
    Table for local data of each [ABAP system](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_system_glosry.htm "Glossary Entry"). SAP delivers tables in the delivery class L as empty tables.
    
    -   These tables are delivered as empty tables.
    -   No data is copied in [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c).
    -   No data is imported in installations, updates, and language imports.
    -   No data is transported in transports between customer systems.
    -   Data entered using extended table maintenance (transaction code SM30) cannot be transported.
    
    [Global temporary tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_temporary_table_glosry.htm "Glossary Entry") always have the delivery class L.
    
-   Obsolete delivery class G
    
    Customizing table where SAP can add data but not modify or delete it. A customizing table in the delivery class G must be assigned a customer namespace in the DDIC database table TRESC using the program RDDKOR54.
    
    The delivery class G can no longer be specified for new DDIC database tables and when changing the delivery class of an existing table. The delivery class C can be used instead. On an AS ABAP used in an SAP Cloud solution, tables with delivery class G are handled like delivery class C implicitly.
    
    -   Customer tables can be delivered with patterns for real data.
    -   In [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c), the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, the data in client-dependent tables is imported as follows: in system clients with the client ID 000, all data is imported, overwriting any existing data that match the content in the key fields. In other clients, only new data is imported, and no existing data is overwritten. Any client-independent data is inserted without overwriting existing data.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
    -   Data entered using extended table maintenance (transaction code SM30) is checked for any violations of the namespace assigned in the DDIC database table TRESC.
    
    The delivery class G can no longer be specified for new DDIC database tables and when changing the delivery class of an existing table. The delivery class C can be used instead. On an AS ABAP used in an SAP Cloud solution, tables with delivery class G are handled like delivery class C implicitly.
    
-   Delivery class E
    
    System table in which customers can make entries. A system table in the delivery class E must be assigned a customer namespace in the database table TRESC using the program RDDKOR54.
    
    -   These system tables are delivered with prefilled entries.
    -   In [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c), the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, all data is imported, overwriting any existing data that match the content in the key fields.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
    -   Data entered using extended table maintenance (transaction code SM30) is checked for violations of the namespace assigned in the DDIC database table TRESC.
-   Delivery class S
    
    System table delivered by SAP as part of the system. Contains predefined data. In the [Change and Transport Systems (CTS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencts_glosry.htm "Glossary Entry"), the data is handled like repository objects, which means that they have an original system and any changes in other systems are modifications or repairs.
    
    -   These system tables are delivered with prefilled data.
    -   In [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c), the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, all data is imported, overwriting any existing data that match the content in the key fields.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
-   Delivery class W
    
    System table for system administration data, such as TFDIR as a directory of all function modules. A system table in the delivery class W is usually delivered with prefilled data by SAP and can be modified by customer modifications. The content is transported using transport objects assigned to the managed objects, such as R3TR FUNC for function modules.
    
    -   These system tables are delivered with prefilled entries.
    -   No data is copied in [client copies](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/4d8062ec095114afe10000000a42189c).
    -   In installations, updates, and language imports, all data is imported, overwriting any existing data that match the content in the key fields.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
    -   Data entered using extended table maintenance (transaction code SM30) cannot be transported.

Hints

-   For more information about transports and client copies, see the documentation [Change and Transport System](https://help.sap.com/docs/ABAP_PLATFORM_NEW/4a368c163b08418890a406d413933ba7/48c4300fca5d581ce10000000a42189c) on SAP Help Portal.
-   It is not recommended that table content is transported for which a [replacement object](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_replacement_objects.htm) is defined.