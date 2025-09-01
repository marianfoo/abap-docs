  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennews-640.htm) → 

ABAP SQL in Release 6.40

[1\. Dynamic checks on ranges tables](#!ABAP_MODIFICATION_1@1@)
[2\. Dynamic checks on internal tables](#!ABAP_MODIFICATION_2@2@)
[3\. Upper limit for values in conditions increased](#!ABAP_MODIFICATION_3@3@)

Modification 1

Dynamic Checks on Ranges Tables

From Release 6.40, it is possible to analyze a [ranges table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenranges_table_glosry.htm "Glossary Entry") in a [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm)

Modification 2

Dynamic Checks on Internal Tables

From Release 6.40, it is possible to analyze an internal table specified in [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_itab.htm) in a [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwhere_logexp_dynamic.htm). The syntax comparison with a column in the internal table can be made statically or dynamically.

Note

This change was also transported back to Release 6.20.

Modification 3

Upper Limit for Values in Conditions Increased

From Release 6.40, the upper limit for the space required for all comparison values in WHERE, HAVING, or ON conditions as well as the values in the addition SET of the statement UPDATE is 64 MB. Previously, this limit was 64 KB.

Note

This change was also transported back to Release 6.20.