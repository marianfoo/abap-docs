---
title: "DDIC - Fixed Value Appends"
description: |
  Domains(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm) delivered by SAP can be extended by partners and customers using appends known as fixed value appends, without modifying the original object. The name of a fixed value append is subject to the same rules as th
version: "7.58"
category: "types"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_fixed_value_appends.htm"
abapFile: "abenddic_fixed_value_appends.htm"
keywords: ["do", "if", "try", "abenddic", "fixed", "value", "appends"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_dictionary.htm) →  [DDIC - Extensions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_enhancements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Fixed%20Value%20Appends%2C%20ABENDDIC_FIXED_VALUE_APPENDS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DDIC - Fixed Value Appends

[Domains](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_domains.htm) delivered by SAP can be extended by partners and customers using appends known as fixed value appends, without modifying the original object. The name of a fixed value append is subject to the same rules as the name of a domain and should be located in the customer namespace (or in the namespace of a partner or special development) to protect it against being overwritten by upgrades or new releases.

A fixed value append adds further [fixed values](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfixed_value_glosry.htm "Glossary Entry") or intervals to the value range of a domain. A domain can have more than one fixed value append.

When a domain is activated, all fixed value appends for this domain are found and their fixed values and intervals added to the domain. When a fixed value append is created or modified, the associated domain is adjusted to this change automatically when the fixed value append is activated.

Example

The fixed value append DEMO\_FIXED\_VALUE\_APPEND is added to the domain DEMO\_ORIGINAL. The program DEMO\_FIXED\_VALUE\_APPEND reads the fixed values and intervals of the extended domain and displays them. In the table, the column APPVAL indicates which fixed values and intervals come from the fixed value append.