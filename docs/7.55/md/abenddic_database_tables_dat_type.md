  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables.htm) →  [DDIC - Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_tech.htm) →  [DDIC - Table-Specific Technical Attributes of Database Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_database_tables_techspec.htm) → 

DDIC - Data Class of Database Tables

For the database platform Oracle, the data class determines the physical area (tablespace) of the database in which a DDIC database table is created (otherwise it is ignored). The most important data classes for application data are:

-   APPL0 (master data)

Data that is rarely changed. One example of master data is data in a table of addresses, such as names, postal addresses, and telephone numbers.

-   APPL1 (transaction data)

Data that is changed a lot. One example of transaction data is warehouse stock that changes each time an order is placed.

-   APPL2 (organizational data)

Customizing data specified when the system is configured and then changed only rarely. One example is the table T005 that contains the country codes.

-   USR and USR1 (customer data)\>
    

DDIC database tables for customer developments in a separate tablespace.

There are also other data classes for system tables used internally by the runtime environment, such as SDIC for ABAP Dictionary tables.