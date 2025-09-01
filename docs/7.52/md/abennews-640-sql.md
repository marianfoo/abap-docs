  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Release-Specific Changes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews.htm) →  [Changes in Releases 6.xx](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-6.htm) →  [Changes in Release 6.40](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abennews-640.htm) → 

Open SQL in Release 6.40

[1\. Dynamic check of selection tables](#!ABAP_MODIFICATION_1@1@)
[2\. Dynamic check of internal tables](#!ABAP_MODIFICATION_2@2@)
[3\. Increase of upper limit for values in conditions](#!ABAP_MODIFICATION_3@3@)

Modification 1

\- Dynamic check of selection tables

As of Release 6.40, you can analyze a [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_seltab.htm) in a [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_dynamic.htm)

Modification 2

\- Dynamic check of internal tables

As of Release 6.40, you can analyze an internal table specified in [FOR ALL ENTRIES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_itab.htm) in a [dynamic WHERE condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenwhere_logexp_dynamic.htm). The syntactical comparison with a column in the internal table can take place statically or dynamically.

Note

This change was also transported to Release 6.20.

Modification 3

\- Increase of upper limit for values in conditions

As of Release 6.40, the upper limit for the space required for all comparison values in WHERE, HAVING, or ON conditions as well as the values in the SET addition of the UPDATE statement is 64 MB. Previously, this limit was 64 KB.

Note

This change was also transported to Release 6.20.