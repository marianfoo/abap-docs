  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose following technical attributes are defined directly in the domain:

-   [Built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary

-   Length

-   A number of decimal places (optional)

Note

When existing domains are modified, all consumers of the domain are also affected. In particular, [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) can become inconsistent when used for the fields of database tables, which makes [conversions](javascript:call_link\('abenddic_database_tables_conv.htm'\)) necessary.