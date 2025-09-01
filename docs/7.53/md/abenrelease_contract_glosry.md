  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP Glossary](javascript:call_link\('abenabap_glossary.htm'\)) → 

release contract

Classification of a [repository object](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry") that specifies how it can be used as an API. There are currently three different release contracts: C0, which permits enhancement fields to be added at specified enhancement points, C1, which guarantees a stable interface for use within [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"), and C2, which guarantees a stable interface for use outside AS ABAP too. Objects are classified in [ADT](javascript:call_link\('abenadt_glosry.htm'\) "Glossary Entry") or using special transactions such as SCFD\_REGISTRY or SCLAS\_API\_C2.