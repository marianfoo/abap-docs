  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [DDIC - Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [DDIC - Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

DDIC - Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose following technical attributes are defined directly in the domain:

-   [Built-in data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in the ABAP Dictionary
-   Length
-   A number of decimal places (optional)

Hint

When existing domains are modified, all users of the domain are also affected. In particular, [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) can become inconsistent when used for the fields of DDIC database tables, which makes [adjustments](javascript:call_link\('abenddic_database_tables_adj.htm'\)) necessary.