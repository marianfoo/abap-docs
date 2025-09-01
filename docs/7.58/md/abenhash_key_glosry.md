---
title: "hash_key_glosry"
description: |
  hash_key_glosry - ABAP 7.58 language reference documentation
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_key_glosry.htm"
abapFile: "abenhash_key_glosry.htm"
keywords: ["do", "if", "try", "internal-table", "abenhash", "key", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20hash%20key%2C%20ABENHASH_KEY_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

hash key

Unique [table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_key_glosry.htm "Glossary Entry") of an [internal table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_table_glosry.htm "Glossary Entry"), in which the assignment to the table lines is managed using a [hash algorithm](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhash_algorithm_glosry.htm "Glossary Entry"). A hash key is the [primary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of a [hashed table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenhashed_table_glosry.htm "Glossary Entry") and can be assigned to every type of internal table as a [secondary table key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). During access to an internal table using a hash key, the response time is constant, regardless of the number of table entries.