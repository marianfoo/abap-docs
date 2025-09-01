  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary.htm) →  [DDIC - Data Types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_types.htm) →  [DDIC - Data Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_data_elements.htm) →  [DDIC - Domains](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_domains.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DDIC - Technical Properties of Domains, ABENDDIC_DOMAINS_TECH, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

DDIC - Technical Properties of Domains

The only technical property of a domain is the description of an elementary data type whose following technical properties are defined directly in the domain:

-   [Built-in data type](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in the ABAP Dictionary
-   Length
-   A number of decimal places (optional)

Hint

When existing domains are modified, all users of the domain are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for the fields of DDIC database tables, which makes [adjustments](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_database_tables_adj.htm) necessary.