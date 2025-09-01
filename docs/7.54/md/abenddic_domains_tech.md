  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [Classic Objects in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_classical_objects.htm) →  [Data Types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_types.htm) →  [Data Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_data_elements.htm) →  [Domains](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_domains.htm) → 

Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose following technical attributes are defined directly in the domain:

-   [Built-in data type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm) in ABAP Dictionary

-   Length

-   A number of decimal places (optional)

Note

When existing domains are modified, all consumers of the domain are also affected. In particular, [foreign keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_forkey.htm) can become inconsistent when used for the fields of database tables, which makes [conversions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_database_tables_conv.htm) necessary.