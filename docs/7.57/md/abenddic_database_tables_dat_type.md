  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Database Tables](javascript:call_link\('abenddic_database_tables.htm'\)) →  [DDIC - Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_tech.htm'\)) →  [DDIC - Table-Specific Technical Properties of Database Tables](javascript:call_link\('abenddic_database_tables_techspec.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Data Class of Database Tables, ABENDDIC_DATABASE_TABLES_DAT_TYPE, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Data Class of Database Tables

For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a DDIC database table is created and is otherwise ignored. The most important data classes for application data are:

-   APPL0 (master data)
    
    Data that is rarely changed. One example of master data is data in a table of addresses, such as names, postal addresses, and telephone numbers.
    
-   APPL1 (transaction data)
    
    Data that is frequently changed. One example of transaction data is warehouse stock that changes each time an order is placed.
    
-   APPL2 (organizational data)
    
    Customizing data specified when the system is configured and then changed only rarely. One example is the table T005 that contains the country codes.
    
-   USR and USR1 (customer data)\>
    
    DDIC database tables for customer developments in a separate tablespace.
    

There are also other data classes for system tables used internally by the runtime framework, such as SDIC for ABAP Dictionary tables.