---
title: "Migrating SEARCH to FIND"
description: |
  When migrating from the obsolete SEARCH(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch-.htm) to the FIND(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) statement, the following points should be respected: -   With ENDING AT a position greater than
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmigrate_search_to_find.htm"
abapFile: "abenmigrate_search_to_find.htm"
keywords: ["do", "if", "data", "abenmigrate", "search", "find"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_internal_obsolete.htm) →  [Obsolete Character String and Byte String Processing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencharacter_string_obsolete.htm) →  [SEARCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch-.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Migrating SEARCH to FIND, ABENMIGRATE_SEARCH_TO_FIND, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

Migrating SEARCH to FIND

When migrating from the obsolete [SEARCH](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsearch-.htm) to the [FIND](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapfind.htm) statement, the following points should be respected:

-   With ENDING AT a position greater than the length of the data object to be searched can be specified for SEARCH. This is not possible for the addition SECTION OF of FIND and an exception is raised.
-   A position greater than the length of the data object to be searched specified behind STARTING AT for SEARCH sets sy-subrc to 4. Such a specification for SECTION OF of FIND raises an exception.
-   A position 0 specified behind STARTING AT for SEARCH sets sy-subrc to 4. Setting the respective offset to -1 for SECTION OF of FIND raises an exception.
-   SEARCH sets the system field sy-fdpos, even if a search is not successful. FIND does not affect the system field sy-fdpos. The system field sy-fdpos must not be evaluated after FIND.

When migrating to [string functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstring_functions.htm) used in operand positions, different rules apply. Especially, system fields cannot be evaluated after using a function.