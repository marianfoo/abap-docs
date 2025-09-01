  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary](javascript:call_link\('abenabap_dictionary.htm'\)) →  [Classic Objects in ABAP Dictionary](javascript:call_link\('abenddic_classical_objects.htm'\)) →  [Data Types](javascript:call_link\('abenddic_data_types.htm'\)) →  [Data Elements](javascript:call_link\('abenddic_data_elements.htm'\)) →  [Domains](javascript:call_link\('abenddic_domains.htm'\)) → 

Technical Attributes of Domains

The only technical attribute of a domain is the description of an elementary data type whose technical attributes

-   [predefined data type](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary,

-   length, and

-   a number of decimal places (optional)

are defined directly in the domain.

Note

When existing domains are modified, all users of the domain are also affected. In particular, [foreign keys](javascript:call_link\('abenddic_database_tables_forkey.htm'\)) can become inconsistent when used for the fields of database tables, which makes [conversions](javascript:call_link\('abenddic_database_tables_conv.htm'\)) necessary.