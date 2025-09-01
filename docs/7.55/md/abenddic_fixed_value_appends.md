  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Dictionary (DDIC)](javascript:call_link\('abenabap_dictionary.htm'\)) →  [DDIC - Enhancements](javascript:call_link\('abenddic_enhancements.htm'\)) → 

DDIC - Fixed Value Appends

[Domains](javascript:call_link\('abenddic_domains.htm'\)) delivered by SAP can be enhanced by partners and customers using appends known as fixed value appends, without making any modifications. The name of a fixed value append is subject to the same rules as the name of a domain and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A fixed value append adds further [fixed values](javascript:call_link\('abenfixed_value_glosry.htm'\) "Glossary Entry") or intervals to the value range of a domain. A domain can have more than one fixed value append.

When a domain is activated, all fixed value appends for this domain are found and their fixed values and intervals added to the domain. When a fixed value append is created or modified, the associated domain is adjusted to this change automatically when the fixed value append is activated.

Example

The fixed value append DEMO\_FIXED\_VALUE\_APPEND is added to the domain DEMO\_ORIGINAL. The program DEMO\_FIXED\_VALUE\_APPEND reads the fixed values and intervals of the extended domain and displays them. In the table, the column APPVAL indicates which fixed values and intervals come from the fixed value append.