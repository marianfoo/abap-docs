  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_sema.htm'\)) →  [DDIC - Table-Dependent Semantic Attributes of Database Tables](javascript:call_link\('abenddic_database_tables_semasspec.htm'\)) → 

DDIC - Delivery Class of Database Tables

The delivery class of a DDIC database table controls the transport of table data in installations, upgrades, or client copies, and in transports between customer systems. It is also respected in extended table maintenance (transaction code SM30).

-   Delivery class A
    
    Application table for master data and transaction data. The data is written by application programs.
    
    -   An application table is delivered as an empty table or using a template for real data in client 000.
    -   In client copies, the data in client-dependent tables is copied only if the corresponding flag is set in the client copy profile. Any client-independent data is not copied.
    -   In installations, updates, and language imports, the data in client-dependent tables is only imported into the system client with the client ID "000", overwriting any existing data. Any client-independent data is not imported.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
-   Delivery class C
    
    Customizing table for data maintained exclusively by the customer.
    
    -   Client-dependent customizing tables can be delivered with patterns for real data.
    -   In client copies, the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, the data in client-dependent tables is only imported into the system client with the client ID "000", overwriting any existing data. Any client-independent data is not imported.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
-   Delivery class L
    
    Table for local data of each [ABAP system](javascript:call_link\('abenabap_system_glosry.htm'\) "Glossary Entry"). SAP delivers tables in the delivery class L as empty tables.
    
    -   These tables are delivered as empty tables.
    -   No data is copied in client copies.
    -   No data is imported in installations, updates, and language imports.
    -   No data is transported in transports between customer systems.
    -   Data entered using extended table maintenance (transaction code SM30) cannot be transported here.
    
    [Global temporary tables](javascript:call_link\('abenglobal_temporary_table_glosry.htm'\) "Glossary Entry") always have the delivery class L.
    
-   Obsolete delivery class G
    
    Customizing table where SAP can add data but not modify or delete it. A customizing table in the delivery class G must be assigned a customer namespace in the DDIC database table TRESC using the program RDDKOR54.
    
    The delivery class G can no longer be specified for new DDIC database tables and when changing the delivery class of an existing table. The delivery class C can be used instead. On an AS ABAP used in an SAP Cloud solution, tables with delivery class G are handled like delivery class C implicitly.
    
    -   Customer tables can be delivered with patterns for real data.
    -   In client copies, the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, the data in client-dependent tables is imported as follows: in system clients with the client ID "000", all data is imported, and existing data is overwritten. In other clients, only new data is imported, and no existing data is overwritten. Any client-independent data is inserted without overwriting existing data.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
    -   Any data entered using extended table maintenance (transaction code SM30) is checked here for any violations of the namespace assigned in the DDIC database table TRESC.
    
    The delivery class G can no longer be specified for new DDIC database tables and when changing the delivery class of an existing table. The delivery class C can be used instead. On an AS ABAP used in an SAP Cloud solution, tables with delivery class G are handled like delivery class C implicitly.
    
-   Delivery class E
    
    System table in which customers can make entries. A system table in the delivery class E must be assigned a customer namespace in the database table TRESC using the program RDDKOR54.
    
    -   These system tables are delivered with prefilled entries.
    -   In client copies, the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, all data is imported, and existing data is overwritten.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
    -   Any data entered using extended table maintenance (transaction code SM30) is checked here for any violations of the namespace assigned in the DDIC database table TRESC.
-   Delivery class S
    
    System table delivered by SAP with predefined data as part of the system, such as ABAPDOCU\_NODES with the read-only tree of the ABAP keyword documentation. In the [Change and Transport Systems (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"), the data is handled like repository objects, which means that they have an original system and any changes in other systems are modifications or repairs.
    
    -   These system tables are delivered with prefilled data.
    -   In client copies, the data of client-dependent tables is copied. Any client-independent data is not copied.
    -   In installations, updates, and language imports, all data is imported and existing data is overwritten.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
-   Delivery class W
    
    System table for system administration data, such as TFDIR as a directory of all function modules. A system table in the delivery class W is usually delivered with prefilled data by SAP and can be affected by customer modifications. The content is transported using the transport objects assigned to the managed objects, such as R3TR FUNC for function modules.
    
    -   These system tables are delivered with prefilled entries.
    -   No data is copied in client copies.
    -   In installations, updates, and language imports, all data is imported, and existing data is overwritten.
    -   In transports between customer systems, all data is transported. In client-dependent tables, only the data in the specified target client is respected.
    -   Data entered using extended table maintenance (transaction code SM30) cannot be transported here.

Hints

-   Transports of table content for which a [replacement object](javascript:call_link\('abenddic_replacement_objects.htm'\)) is defined are not recommended. This content is no longer transported automatically in the upcoming release.
-   For more information about transports and client copies, see the documentation Change and Transport System in the SAP Help Portal.