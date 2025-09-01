  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_domains.htm) → 

DDIC - Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose following technical attributes are defined directly in the domain:

-   [Built-in data type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary
-   Length
-   A number of decimal places (optional)

Hint

When existing domains are modified, all users of the domain are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for the fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_database_tables_adj.htm) necessary.