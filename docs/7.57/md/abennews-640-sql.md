  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Release News](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews.htm) →  [News for Release 6.xx](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-6.htm) →  [News for Release 6.40](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abennews-640.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL in Release 6.40, ABENNEWS-640-SQL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0
D%0ASuggestion for improvement:)

ABAP SQL in Release 6.40

[1\. Dynamic Checks on Ranges Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Dynamic Checks on Internal Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Upper Limit for Values in Conditions Increased](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Dynamic Checks on Ranges Tables

From Release 6.40, it is possible to analyze a [ranges table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenranges_table_glosry.htm "Glossary Entry") in a [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_dynamic.htm)

Modification 2   

Dynamic Checks on Internal Tables

From Release 6.40, it is possible to analyze an internal table specified in [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_all_entries.htm) in a [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenwhere_logexp_dynamic.htm). The syntax comparison with a column in the internal table can be made statically or dynamically.

Hint

This change was also transported back to Release 6.20.

Modification 3   

Upper Limit for Values in Conditions Increased

From Release 6.40, the upper limit for the space required for all comparison values in WHERE, HAVING, or ON conditions as well as the values in the addition SET of the statement UPDATE is 64 MB. Previously, this limit was 64 KB.

Hint

This change was also transported back to Release 6.20.