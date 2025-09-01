  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 6.xx](javascript:call_link\('abennews-6.htm'\)) →  [News for Release 6.40](javascript:call_link\('abennews-640.htm'\)) → 

ABAP SQL in Release 6.40

[1\. Dynamic Checks on Ranges Tables](#!ABAP_MODIFICATION_1@1@)
[2\. Dynamic Checks on Internal Tables](#!ABAP_MODIFICATION_2@2@)
[3\. Upper Limit for Values in Conditions Increased](#!ABAP_MODIFICATION_3@3@)

Modification 1   

Dynamic Checks on Ranges Tables

From Release 6.40, it is possible to analyze a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") in a [dynamic WHERE condition](javascript:call_link\('abenwhere_logexp_dynamic.htm'\))

Modification 2   

Dynamic Checks on Internal Tables

From Release 6.40, it is possible to analyze an internal table specified in [FOR ALL ENTRIES](javascript:call_link\('abenwhere_all_entries.htm'\)) in a [dynamic WHERE condition](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)). The syntax comparison with a column in the internal table can be made statically or dynamically.

Hint

This change was also transported back to Release 6.20.

Modification 3   

Upper Limit for Values in Conditions Increased

From Release 6.40, the upper limit for the space required for all comparison values in WHERE, HAVING, or ON conditions as well as the values in the addition SET of the statement UPDATE is 64 MB. Previously, this limit was 64 KB.

Hint

This change was also transported back to Release 6.20.